import {Perms} from "../utils";
import {Directory, File} from "./fileSystemObjects";
import {rmRoot} from "../terminal/strings";


/**
 * Displays the root deletion message and displays the BSOD
 */
async function rmRootMsg() {

    let terminalOutput = document.getElementById('terminalOutput');
    let lines = rmRoot.split("\n");
    for (let i = 0; i < lines.length; i++) {
        terminalOutput.innerHTML += lines[i] + "<br>";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, 20));
    }
    document.getElementById("sidebarContent").innerText = "";
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.document.documentElement.style.backgroundColor = "#010082";
    window.document.body.innerHTML = '<img src="/media/image/bsod.png" alt="bsod" style="width: 100%;"/>';
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
            if (elem === '.' || elem === '');
            else if (elem === '..') totalPath.pop();
            else totalPath.push(elem);
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
     * @param pageRegistry {{string: Page}} The registry of preset, viewable HTML pages
     */
    constructor(hierarchy, pageRegistry) {

        this.hierarchy = hierarchy;
        this.pageRegistry = pageRegistry;
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

        if (typeof window !== 'undefined') localStorage.setItem("hierarchy", JSON.stringify({
            pageRegistry: this.pageRegistry,
            hierarchy: this.hierarchy
        }));

        // Update the last update time and call all registered callbacks
        this.lastUpdateTime = Date.now();
        for (let callback of this.callbacks)
            callback(this.lastUpdateTime);
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

        if (this.exists(path)) throw new Error(`Cannot make directory.  Directory at ${path} already exists!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this.getItem(parentPath);

        if (!parent.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make directory under ${parentPath}.  Permission denied!`);

        let childDir = new Directory(childName);
        parent.subTree.push(childDir);

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

        if (this.exists(path)) throw new Error(`Cannot create file.  File at ${path} already exists!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this.getItem(parentPath);

        if (!parent.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make file under ${parentPath}.  Permission denied!`);

        let childFile = new File(childName, "", permission);
        parent.subTree.push(childFile);

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

        if (newPath === oldPath) throw new Error(`${oldPath} and ${newPath} are at the same location!`);

        if (!this.exists(oldPath))
            throw new Error(`Cannot copy file or directory.  File or directory at ${oldPath} does not exist!`);
        let newObj = this.getItem(newPath);
        if (newObj && newObj.constructor === File)
            throw new Error(`File at ${newPath} already exists!`);

        let newParentPath = newPath.substring(0, newPath.lastIndexOf("/") + 1);
        let newChildName = newPath.substring(newPath.lastIndexOf("/") + 1);

        if (!this.exists(newParentPath))
            throw new Error(`Cannot copy to directory.  Directory at ${newParentPath} does not exist!`);

        let newParentObj = this.getItem(newParentPath);
        let oldObj = this.getItem(oldPath);

        if (!newParentObj.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make copy to ${newParentPath}.  Permission denied!`);
        if (!oldObj.permission.includes(Perms.READ))
            throw new Error(`Cannot make copy from ${oldPath}.  Permission denied!`);

        let copied;
        if (oldObj.constructor === Directory) copied = new Directory(oldObj.name, oldObj.subTree, oldObj.permission);
        else copied = new File(oldObj.name, oldObj.text, oldObj.permission);
        copied.name = newChildName;
        copied.modified = oldObj.modified;
        newParentObj.subTree.push(copied);

        this.update();
        return copied;
    }

    /**
     * Removes a file or directory from one path to another
     * @param path {string} The path to remove from
     * @param options {string} The options for the remove command
     * @return {Directory | File}
     */
    rm(path, options = "") {

        if (!this.exists(path))
            throw new Error(`Cannot remove file or directory.  File or directory at ${path} does not exist!`);

        // Check if the root directory is being removed and if the -rf option is used
        if (path === "/" && (["-rf", "-fr"].includes(options))) {
            rmRootMsg();
            return null;
        } else if (path === "/")
            throw new Error(`Permission denied for path '/'!  Use -rf to force.`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parentDir = this.getItem(parentPath);

        // Search for the file or directory to remove in the parent directory
        for (let i in parentDir.subTree) {

            let target = parentDir.subTree[i];
            if (target.name === childName) {
                if (!target.permission.includes(Perms.WRITE))
                    throw new Error(`Cannot remove ${path}.  Permission denied!`);

                // Recursively remove directories if the -r option is used
                if (target.constructor === Directory && options === "-r")
                    for (let child of target.subTree)
                        this.rm(pathJoin(path, child.name));
                else if (target.constructor === Directory)
                    throw new Error(`Cannot remove directory ${path}: is a directory.  Use -r to remove directories!`);

                // Remove the file or directory from the parent directory
                parentDir.subTree.splice(i, 1);

                this.update();
                return target;
            }
        }
    }

    /**
     * Gets a file or directory at the given path
     * @param path {string} The path to get the file or directory from
     * @return {Directory | File} The file or directory at the given path
     */
    getItem(path) {
        return this._navHierarchy(path);
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

        if (file.constructor === Directory) throw new Error(`Cannot write to directory at ${path}!`);

        if (!file.permission.includes(Perms.WRITE))
            throw new Error(`Cannot write to ${path}.  Permission denied!`);

        if (!append) file.text = "";
        file.text += text;
        file.modified = Date.now();

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
        if (!file) throw new Error(`Cannot read from file.  File at ${path} does not exist!`);

        if (file.constructor === Directory) throw new Error(`Cannot read from directory at ${path}!`);

        if (!file.permission.includes(Perms.READ))
            throw new Error(`Cannot read from ${path}.  Permission denied!`);

        return file.text;
    }

    /** Navigates the filesystem hierarchy given a valid path and returns the object at that path
     * @param {string} path The path to navigate to
     * @returns {Directory | File} The object at the given path
     * @private
     */
    _navHierarchy(path) {

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
}

export {FileSystem, pathJoin};