import {readdirSync, readFileSync, statSync} from "fs";
import {resolve} from "path";
import {Directory, File} from "./fileSystemObjects";
import {FileSystem, pathJoin} from "./fileSystem";
import {bashrc, keyArt} from "../terminal/strings";

import {Perms, SysEnv} from "./fileSystemMeta";


const NON_INDEXED_PAGES = ["admin", "index", "404", "display", "edit", "babble", "403", "void", "_document"];


/**
 * The initial hierarchy of the file system
 * @type {Directory}
 */
let initialHierarchy = new Directory("", [
    new Directory("home", [
        new Directory("guest", [
            new File(".bashrc", bashrc),
            new Directory(".ssh", [
                new File("authorized_keys", "I would tell you, but then I would have to ^C you."),
                new File("id_rsa", "It would be pretty silly if this was a real key, wouldn't it?"),
                new File("id_rsa.pub", keyArt),
                new File("known_hosts", "I don't know any good hosts, do you?"),
            ]),
            new Directory("bin", [
                new File("icrypt", "", Perms.DENY)
            ]),
            new Directory("mnt", []),
            new Directory("public", []),
            new Directory("src", []),
            new Directory("tmp", []),
        ]),
        new Directory("admin", [], Perms.DENY),
    ]),
    new Directory("bin", [], Perms.DENY),
    new Directory("boot", [], Perms.DENY),
    new Directory("dev", [], Perms.DENY),
    new Directory("etc", [], Perms.DENY),
    new Directory("lib", [], Perms.DENY),
    new Directory("mnt", [
        new File("IMPORTANT_README.txt", "Do NOT rm C:/Windows/System32"),
        new Directory("C:", [
            new Directory("Windows", [
                new Directory("System32", [], Perms.NO_EXECUTE),
            ], Perms.NO_EXECUTE),
        ], Perms.NO_EXECUTE)
    ]),
    new Directory("opt", [], Perms.DENY),
    new Directory("proc", [], Perms.DENY),
    new Directory("usr", [], Perms.DENY),
    new Directory("var", [], Perms.DENY),
], Perms.READ_ONLY);


/**
 * Builds the file system on the server side by walking through the pages directory and using the initial hierarchy
 * @returns {FileSystem} The file system
 */
function bootstrapServerside() {
    let masterFileSystem = new FileSystem(initialHierarchy, {});

    /**
     * Walks through the pages directory and adds the files to the file system
     * @param dir {string} The directory to walk through
     */
    function walkPages(dir = "pages") {
        const dirents = readdirSync(dir, { withFileTypes: true });
        // For each file in the directory
        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);

            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);

            if (!dirent.isDirectory()) {
                let fileStats = statSync(res);
                let fileName = res.substring(res.lastIndexOf("/") + 1).replace(".js", "");
                if (NON_INDEXED_PAGES.includes(fileName)) continue;  // Skip non-indexed pages
                // Add the file to the file system and the page registry
                let name = hierarchyPath.replace(SysEnv.PUBLIC_FOLDER, "");
                if(name[0] === "/") name = name.substring(1);  // Remove the leading slash

                let fullPath = pathJoin(hierarchyPath, fileName + ".html");
                let newFile = masterFileSystem.touch(fullPath, "--" + Perms.EXECUTE);
                newFile.modified = fileStats.mtimeMs;
                newFile.spoofSize(fileStats.size);  // Set the file's size without actually setting the text
                newFile.markAsPage();
            }
        }

        // For each sub-directory in the directory
        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);
            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);

            if (dirent.isDirectory()) {
                // Skip the secure directory
                if(dirent.name.endsWith("secure")) continue;
                masterFileSystem.mkdir(pathJoin(hierarchyPath, dirent.name));
                walkPages(res);
            }
        }
    }
    walkPages();

    masterFileSystem.mkdir(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    let readmeContents = readFileSync("public/readme.html");
    masterFileSystem.writeText(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", "readme.html"), readmeContents.toString());

    return masterFileSystem;
}


export { bootstrapServerside };
