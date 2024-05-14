import {readdirSync, statSync} from "fs";
import {resolve} from "path";
import {Directory, File} from "./fileSystemObjects";
import {FileSystem, pathJoin} from "./fileSystem";
import {bashrc, keyArt} from "../terminal/strings";
import {Perms, SysEnv} from "../utils";
import contentHtml from "../readme";

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
            new Directory("mnt", [
                new File("DO_NOT_REMOVE_SYS32", "Do NOT rm C:/Windows/System32"),
                new Directory("C:", [
                    new Directory("Windows", [
                        new Directory("System32", [], Perms.NO_EXECUTE),
                    ], Perms.NO_EXECUTE),
                ], Perms.NO_EXECUTE)
            ]),
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
    new Directory("mnt", [], Perms.DENY),
    new Directory("opt", [], Perms.DENY),
    new Directory("proc", [], Perms.DENY),
    new Directory("usr", [], Perms.DENY),
    new Directory("var", [], Perms.DENY),
], Perms.READ_ONLY);


/**
 * The registry of preset, viewable HTML pages
 * @type {{string: Page}}
 */
let pageRegistry = {};

/**
 * The master file system of the program
 * @type {FileSystem}
 */
let masterFileSystem;


/**
 * Builds the file system on the server side by walking through the pages directory and using the initial hierarchy
 */
function buildServerside() {

    masterFileSystem = new FileSystem(initialHierarchy, pageRegistry);

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
                if (["admin", "index", "404", "display", "edit", "babble", "403"].includes(fileName)) continue;
                // Add the file to the file system and the page registry if it is not hidden
                if (fileName[0] !== "_") {
                    let name = hierarchyPath.replace(SysEnv.PUBLIC_FOLDER, "");
                    if(name[0] === "/") name = name.substring(1);

                    let fullPath = pathJoin(hierarchyPath, fileName + ".html");
                    pageRegistry[fullPath] = {name: pathJoin(name, fileName + ".html"), size: fileStats.size};
                    let newFile = masterFileSystem.touch(fullPath, "--" + Perms.EXECUTE);
                    newFile.modified = fileStats.mtimeMs;
                }
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
    masterFileSystem.writeText(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", "readme.html"), contentHtml);
}

export { masterFileSystem, pageRegistry, buildServerside };