import { readdirSync, readFileSync, statSync } from "fs";
import { resolve } from "path";

import { DontPanic, SSH } from "@/lib/fileSystem/fileStrings";
import { FileSystem, pathJoin } from "@/lib/fileSystem/fileSystem";
import { Perms, SysEnv } from "@/lib/fileSystem/fileSystemMeta";
import { Directory, File } from "@/lib/fileSystem/fileSystemObjects";
import { bashrc } from "@/lib/terminal/strings";

const NON_INDEXED_PAGES = ["admin", "index", "404", "display", "edit", "babble", "403", "void", "_document", "_error"];

/**
 * The initial hierarchy of the file system
 * @type {Directory}
 */
let initialHierarchy = new Directory(
    "",
    [
        new Directory("home", [
            new Directory("guest", [
                new File(".bashrc", bashrc),
                new Directory(".ssh", [
                    new File("authorized_keys", SSH.authorizedKeys),
                    new File("id_rsa", SSH.idRsa),
                    new File("id_rsa.pub", SSH.idRsaPub),
                    new File("known_hosts", SSH.knownHosts)
                ]),
                new Directory("bin", [new File("icrypt", "", Perms.DENY)]),
                new Directory("mnt", [
                    new Directory("dont_panic", [
                        new File("improbability.txt", DontPanic.improbability),
                        new File("final-message.txt", DontPanic.finalMessage),
                        new File("nutrimatic.txt", DontPanic.tea),
                        new File("lunch.txt", DontPanic.lunch),
                        new File("earth.txt", DontPanic.earth)
                    ])
                ]),
                new Directory("public", []),
                new Directory("src", []),
                new Directory("tmp", [])
            ]),
            new Directory("admin", [], Perms.DENY)
        ]),
        new Directory("bin", [], Perms.DENY),
        new Directory("boot", [], Perms.DENY),
        new Directory("dev", [], Perms.DENY),
        new Directory("etc", [], Perms.DENY),
        new Directory("lib", [], Perms.DENY),
        new Directory("mnt", [
            new File("IMPORTANT_README.txt", "Do NOT rm C:/Windows/System32"),
            new Directory(
                "C:",
                [new Directory("Windows", [new Directory("System32", [], Perms.NO_EXECUTE)], Perms.NO_EXECUTE)],
                Perms.NO_EXECUTE
            )
        ]),
        new Directory("opt", [], Perms.DENY),
        new Directory("proc", [], Perms.DENY),
        new Directory("usr", [], Perms.DENY),
        new Directory("var", [], Perms.DENY)
    ],
    Perms.READ_ONLY
);

/**
 * Updates the reading list page with accurate sizes from its composing files
 * @param fileSystem {FileSystem}
 */
function patchReadingList(fileSystem) {
    let dir = "src/components/readingList";
    let totaSize = 0;
    let latestModified = 0;
    const dirents = readdirSync(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        if (dirent.isDirectory()) continue;

        const filePath = resolve(dir, dirent.name);
        let fileStats = statSync(filePath);
        totaSize += fileStats.size;
        if (fileStats.mtimeMs > latestModified) latestModified = fileStats.mtimeMs;
    }
    let readingListFile = fileSystem.getItem(pathJoin(SysEnv.PUBLIC_FOLDER, "works/readingList.html"));
    readingListFile.modified = latestModified;
    readingListFile.spoofSize(totaSize); // Set the file's size without actually setting the text
}

/**
 * Builds the file system on the server side by walking through the pages directory and using the initial hierarchy
 * @returns {FileSystem} The file system
 */
function bootstrapServerside() {
    let masterFileSystem = new FileSystem(initialHierarchy);

    /**
     * Walks through the pages directory and adds the files to the file system
     * @param dir {string} The directory to walk through
     */
    function walkPages(dir = "src/pages") {
        const dirents = readdirSync(dir, { withFileTypes: true });
        // For each file in the directory
        for (const dirent of dirents) {
            const filePath = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);

            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);

            if (dirent.isDirectory()) continue;

            let fileStats = statSync(filePath);
            let fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace(".js", "");
            if (NON_INDEXED_PAGES.includes(fileName)) continue; // Skip non-indexed pages
            // Add the file to the file system and the page registry
            let name = hierarchyPath.replace(SysEnv.PUBLIC_FOLDER, "");
            if (name[0] === "/") name = name.substring(1); // Remove the leading slash

            let fullPath = pathJoin(hierarchyPath, fileName + ".html");
            let newFile = masterFileSystem.touch(fullPath, "--" + Perms.EXECUTE);
            newFile.modified = fileStats.mtimeMs;
            newFile.spoofSize(fileStats.size); // Set the file's size without actually setting the text
            newFile.markAsPage();
        }

        // For each sub-directory in the directory
        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);
            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);

            if (!dirent.isDirectory()) continue;

            // Skip the secure directory
            if (dirent.name.endsWith("secure")) continue;
            masterFileSystem.mkdir(pathJoin(hierarchyPath, dirent.name));
            // Recurse into the sub-directory
            walkPages(res);
        }
    }

    walkPages();
    // ReadingList is a composite page, most of its content is imported from other pages and should therefore be counted
    patchReadingList(masterFileSystem);

    masterFileSystem.mkdir(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    let readmeContents = readFileSync("public/readme.html");
    masterFileSystem.writeText(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", "readme.html"), readmeContents.toString());

    return masterFileSystem;
}

export { bootstrapServerside };
