import {Directory, File} from "./fileSystemObjects";
import {Perms} from "./fileSystemMeta";
import {bootstrapServerside} from "./bootstrap";


/**
 * The version of the filesystem.  Used for compatibility checking
 * @type {string} The version of the filesystem
 */
const FS_VERSION = "1.0.0";


/**
 * The master file system of the program
 * @type {FileSystem}
 */
let masterFileSystem;


/**
 * Custom error for when a filesystem operation fails
 */
class FileSystemError extends Error {
    constructor(message, code=1) {
        super(message);
        this.code = code;
        this.name = "CommandError";
    }
}


/**
 * Builds the file system on the client side by rehydrating the page registry and the master file system
 * @returns {string} The dehydrated info
 */
function buildClientside() {
    let dehydrateElem = document.getElementById("dehydrateInfo");
    masterFileSystem = FileSystem.deserialize(JSON.parse(dehydrateElem.innerText));
    return dehydrateElem.innerText;
}


/**
 * Builds the file system on the server side and returns the dehydrated info
 * @returns {string} The dehydrated info
 */
function buildServerside() {
    if (!masterFileSystem) masterFileSystem = bootstrapServerside();
    return JSON.stringify(masterFileSystem.serialize());  // Make dehydrated info from the server file system
}


/**
 * Joins paths together, removing any unnecessary elements
 * @param paths {string} The paths to join
 * @return {string} The joined path
 */
function pathJoin(...paths) {

    let totalPath = [];
    for (let path of paths) {
        if(!path) continue;
        if (path[0] === "/") totalPath = [''];
        let split = path.split('/');
        for (let elem of split) {
            if (elem === '..') totalPath.pop();
            else if (elem !== '.' && elem !== '') totalPath.push(elem);
        }
    }

    if (totalPath.length === 1 && totalPath[0] === "") totalPath.push('');
    // Remove any duplicate slashes
    return totalPath.join('/').replace("//", "/");
}


/**
 * The filesystem class that manages the filesystem hierarchy
 */
class FileSystem {

    /**
     * @param {Directory} hierarchy The root directory of the filesystem
     */
    constructor(hierarchy) {
        this.hierarchy = hierarchy;
        this.lastUpdateTime = Date.now();
        this.callbacks = [];
    }

    /**
     * Registers a callback to be called when the filesystem is updated
     * @param callback The callback to register
     */
    registerCallback(callback) {
        this.callbacks.push(callback);
    }

    /**
     * Updates the filesystem and calls all registered callbacks
     */
    update() {
        // Update the last update time and call all registered callbacks
        this.lastUpdateTime = Date.now();
        if (typeof window !== 'undefined') localStorage.setItem("hierarchy", JSON.stringify(this.serialize()));

        for (let callback of this.callbacks) callback(this.lastUpdateTime);
    }

    /**
     * Checks if a file or directory exists at the given path
     * @param path The path to check
     * @return {boolean}
     */
    exists(path) {
        return !!this.getItem(path);
    }

    /**
     * Creates a new directory at the given path
     * @param path {string} The path to create the directory at
     * @return {Directory} The created directory
     */
    mkdir(path) {

        if (this.exists(path)) throw new FileSystemError(`Cannot make directory.  Directory at ${path} already exists!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this.getItem(parentPath);

        if (!parent) throw new FileSystemError(`Cannot make directory.  Parent directory at ${parentPath} does not exist!`);

        if (!parent.permission.includes(Perms.WRITE))
            throw new FileSystemError(`Cannot make directory under ${parentPath}.  Permission denied!`);

        let childDir = new Directory(childName);
        parent.addChild(childDir);

        this.update();
        return childDir;
    }

    /**
     * Creates a new file at the given path
     * @param path {string} The path to create the file at
     * @param permission {string} The permission of the file
     * @return {File} The created file
     */
    touch(path, permission = Perms.ALLOW) {

        if (this.exists(path)) throw new FileSystemError(`Cannot create file.  File at ${path} already exists!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this.getItem(parentPath);

        if (!parent) throw new FileSystemError(`Cannot create file.  Parent directory at ${parentPath} does not exist!`);

        if (!parent.permission.includes(Perms.WRITE))
            throw new FileSystemError(`Cannot make file under ${parentPath}.  Permission denied!`);

        let childFile = new File(childName, "", permission);
        parent.addChild(childFile);

        this.update();
        return childFile;
    }

    /**
     * Copies a file or directory from one path to another
     * @param oldPath {string} The path to copy from
     * @param newPath {string} The path to copy to
     * @return {Directory | File} The copied file or directory
     */
    cp(oldPath, newPath) {

        if (newPath === oldPath)
            throw new FileSystemError(`${oldPath} and ${newPath} are at the same location!`);
        if (!this.exists(oldPath))
            throw new FileSystemError(`Cannot copy file or directory.  File or directory at ${oldPath} does not exist!`);

        let newObj = this.getItem(newPath);
        if (newObj && newObj.constructor === File)
            throw new FileSystemError(`File at ${newPath} already exists!`);

        let newParentPath = newPath.substring(0, newPath.lastIndexOf("/") + 1);
        let newChildName = newPath.substring(newPath.lastIndexOf("/") + 1);

        if (!this.exists(newParentPath))
            throw new FileSystemError(`Cannot copy to directory.  Directory at ${newParentPath} does not exist!`);

        let newParentObj = this.getItem(newParentPath);
        let oldObj = this.getItem(oldPath);

        if (!newParentObj.permission.includes(Perms.WRITE))
            throw new FileSystemError(`Cannot make copy to ${newParentPath}.  Permission denied!`);
        if (!oldObj.permission.includes(Perms.READ))
            throw new FileSystemError(`Cannot make copy from ${oldPath}.  Permission denied!`);

        let copied = oldObj.copy();
        copied.name = newChildName;
        copied.modified = oldObj.modified;
        newParentObj.addChild(copied);

        this.update();
        return copied;
    }

    /**
     * Removes a file or directory from one path to another
     * @param path {string} The path to remove from
     * @param options {string[]} The options for the remove command
     * @return {Directory | File}
     */
    rm(path, options = []) {

        if (!this.exists(path))
            throw new FileSystemError(`Cannot remove file or directory.  File or directory at ${path} does not exist!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parentDir = this.getItem(parentPath);

        // Search for the file or directory to remove in the parent directory
        for (let i in parentDir.subTree) {

            let target = parentDir.subTree[i];
            if (target.name === childName) {
                if (!target.permission.includes(Perms.WRITE))
                    throw new FileSystemError(`Cannot remove ${path}.  Permission denied!`);

                // Recursively remove directories if the -r option is used
                if (target.constructor === Directory && options.includes("-r"))
                    for (let child of target.subTree)
                        this.rm(pathJoin(path, child.name), options);
                else if (target.constructor === Directory)
                    throw new FileSystemError(`Cannot remove directory ${path}: is a directory.  Use -r to remove directories!`);

                // Remove the file or directory from the parent directory
                parentDir.subTree.splice(parseInt(i), 1);

                this.update();
                return target;
            }
        }
    }

    /**
     * Writes text to a file at the given path
     * @param path {string} The path to write to
     * @param text {string} The text to write to the file
     * @param append {boolean} Whether to append the text to the file
     * @return {Directory | File} The file that was written to
     */
    writeText(path, text, append = false) {
        let file = this.getItem(path);
        if (!file) file = this.touch(path);

        if (file.constructor === Directory) throw new FileSystemError(`Cannot write to directory at ${path}!`);

        if (!file.permission.includes(Perms.WRITE))
            throw new FileSystemError(`Cannot write to ${path}.  Permission denied!`);

        file.write(text, append);

        this.update();
        return file;
    }

    /**
     * Reads text from a file at the given path
     * @param path {string} The path to read from
     * @return {string} The text read from the file
     */
    readText(path) {
        let file = this.getItem(path);
        if (!file) throw new FileSystemError(`Cannot read from file.  File at ${path} does not exist!`);

        if (file.constructor === Directory) throw new FileSystemError(`Cannot read: Is a directory at ${path}!`);

        if (!file.permission.includes(Perms.READ))
            throw new FileSystemError(`Cannot read from ${path}.  Permission denied!`);

        return file.text();
    }

    /**
     * Gets a file or directory at the given path; returns null if the path does not exist
     * @param path {string} The path to get the file or directory from
     * @return {Directory | File} The file or directory at the given path
     */
    getItem(path) {
        if (!path) return null;

        let tokens = path.split("/");

        // Strip any empty strings from the ends of the tokens array
        if (tokens[tokens.length - 1] === "") tokens.pop();
        if (tokens[0] === "") tokens.shift();

        let current = this.hierarchy;

        // Navigate the hierarchy until the end of the path is reached
        while (tokens.length > 0) {
            let foundPath = false;

            // Return once the end of the path is reached
            if (tokens.length === 1 && tokens[0] === current.name)
                return current;

            for (let i = 0; i < current.subTree.length; i++) {
                if (current.subTree[i].name === tokens[0]) {
                    current = current.subTree[i];
                    tokens.shift();
                    foundPath = true;
                    break;
                }
            }
            if (!foundPath) return null;
        }
        return current;
    }

    serialize() {
        return {
            objType: "filesystem",
            hierarchy: this.hierarchy.serialize(),
            metadata: {
                lastUpdateTime: this.lastUpdateTime,
                version: FS_VERSION
            }
        };
    }

    static deserialize(dict) {
        let newFS = new FileSystem(Directory.deserialize(dict.hierarchy));
        newFS.lastUpdateTime = dict.metadata.lastUpdateTime;
        return newFS;
    }
}


export {FileSystem, FileSystemError, pathJoin, masterFileSystem, buildServerside, buildClientside};
