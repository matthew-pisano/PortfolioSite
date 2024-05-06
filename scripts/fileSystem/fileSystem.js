import { SysEnv, Perms } from '../utils';
import contentHtml from "../readme";
import {rmRoot} from "../terminal/commandResources";


let pageRegistry = {};

/** The master file system of the program
 * @type {FileSystem}*/
let masterFileSystem;

let dehydrateInfo;


async function rmRootMsg() {
    let terminalOutput = document.getElementById('terminalOutput');
    let lines = rmRoot.split("\n");
    for (let i = 0; i < lines.length; i++) {
        terminalOutput.innerHTML += lines[i] + "<br>";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, 20));
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.document.documentElement.style.backgroundColor = "#010082";
    window.document.body.innerHTML = '<img src="/media/image/bsod.png" alt="bsod" style="width: 100%;"/>';
}


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
    return totalPath.join('/').replace("//", "/");
}


class File {

    constructor(name, text = "", permission = Perms.ALLOW) {

        Perms.validate(permission);

        this.name = name;
        this.text = text;
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
    }

    copy() { return new File(this.name, this.text, this.permission); }

    size() { return this.text.length; }

    static toDict(file) {
        return { name: file.name, text: file.text, permission: file.permission };
    }

    static fromDict(dict) {
        return new File(dict.name, dict.text, dict.permission);
    }
}

class Directory {

    constructor(name, subTree = null, permission = Perms.ALLOW) {

        Perms.validate(permission);

        this.name = name.replace(/\//g, "");
        this.subTree = subTree ? subTree : [];
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
    }

    copy() { return new Directory(this.name, this.subTree, this.permission); }

    size() { return 4096; }

    static toDict(directory) {
        let dict = { name: directory.name, permission: directory.permission, subTree: [] };

        for (let child of directory.subTree)
            dict.subTree.push(child.constructor.toDict(child));

        return dict;
    }

    static fromDict(dict) {
        let directory = new Directory(dict.name, null, dict.permission);

        for (let child of dict.subTree)
            directory.subTree.push((child.subTree !== undefined ? Directory : File).fromDict(child));

        return directory;
    }
}


class FileSystem {

    /** @param {Directory} hierarchy */
    constructor(hierarchy) {
        this.hierarchy = hierarchy;
        this.lastUpdateTime = Date.now();
        this.callbacks = [];
    }

    registerCallback(callback) {
        this.callbacks.push(callback);
    }

    update() {
        if (typeof window !== 'undefined') localStorage.setItem("hierarchy", JSON.stringify({
            pageRegistry: pageRegistry,
            hierarchy: this.hierarchy
        }));

        this.lastUpdateTime = Date.now();
        for (let callback of this.callbacks)
            callback(this.lastUpdateTime);
    }

    exists(path) {
        return !!this._navHierarchy(path);
    }

    mkdir(path) {
        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this._navHierarchy(parentPath);

        if (!parent.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make directory under ${parentPath}.  Permission denied!`);

        let childDir = new Directory(childName);
        parent.subTree.push(childDir);

        this.update();
        return childDir;
    }

    touch(path, permission = Perms.ALLOW) {

        if (this.exists(path)) throw new Error(`Cannot create file.  File at ${path} already exists!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parent = this._navHierarchy(parentPath);

        if (!parent.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make file under ${parentPath}.  Permission denied!`);

        let childFile = new File(childName, "", permission);
        parent.subTree.push(childFile);

        this.update();
        return childFile;
    }

    cp(oldPath, newPath) {
        if (!this.exists(oldPath))
            throw new Error(`Cannot copy file or directory.  File or directory at ${oldPath} does not exist!`);

        let newParentPath = newPath.substring(0, newPath.lastIndexOf("/") + 1);
        let newChildName = newPath.substring(newPath.lastIndexOf("/") + 1);
        if (!this.exists(newParentPath))
            throw new Error(`Cannot copy to directory.  Directory at ${newParentPath} does not exist!`);
        let newParentObj = this._navHierarchy(newParentPath);
        let oldObj = this._navHierarchy(oldPath);

        if (!newParentObj.permission.includes(Perms.WRITE))
            throw new Error(`Cannot make copy to ${newParentPath}.  Permission denied!`);
        if (!oldObj.permission.includes(Perms.READ))
            throw new Error(`Cannot make copy from ${oldPath}.  Permission denied!`);


        let copied;
        if (oldObj.constructor === Directory) copied = new Directory(oldObj.name, oldObj.subTree, oldObj.permission);
        else copied = new File(oldObj.name, oldObj.text, oldObj.permission);

        copied.name = newChildName;

        newParentObj.subTree.push(copied);

        this.update();
    }

    rm(path, options = "") {

        if (!this.exists(path))
            throw new Error(`Cannot remove file or directory.  File or directory at ${path} does not exist!`);
        if (path === "/" && options === "-rf") {
            rmRootMsg();
            return;
        }
        else if (path === "/")
            throw new Error(`Cannot remove root directory!`);

        let parentPath = path.substring(0, path.lastIndexOf("/") + 1);
        let childName = path.substring(path.lastIndexOf("/") + 1);
        let parentDir = masterFileSystem._navHierarchy(parentPath);

        for (let i in parentDir.subTree) {
            let target = parentDir.subTree[i];
            if (target.name === childName) {
                if (!target.permission.includes(Perms.WRITE))
                    throw new Error(`Cannot remove ${path}.  Permission denied!`);

                if (target.constructor === Directory && options === "-r")
                    for (let child of target.subTree)
                        this.rm(pathJoin(path, child.name));
                else if (target.constructor === Directory)
                    throw new Error(`Cannot remove directory ${path}: is a directory.  Use -r to remove directories!`);

                parentDir.subTree.splice(i, 1);

                this.update();
                break;
            }
        }
    }

    getItem(path) {
        return this._navHierarchy(path);
    }

    writeText(path, text) {
        let file = this._navHierarchy(path);
        if (!file) file = this.touch(path);

        if (file.constructor === Directory) throw new Error(`Cannot write to directory at ${path}!`);

        if (!file.permission.includes(Perms.WRITE))
            throw new Error(`Cannot write to ${path}.  Permission denied!`);

        file.text = text;
        file.modified = Date.now();

        this.update();
        return file;
    }

    appendText(path, text) {
        let file = this._navHierarchy(path);
        if (file.constructor === Directory) throw new Error(`Cannot write to directory at ${path}!`);

        if (!file) throw new Error(`Cannot append to file.  File at ${path} does not exist!`);
        if (!file.permission.includes(Perms.WRITE))
            throw new Error(`Cannot write to ${path}.  Permission denied!`);

        file.text += text;
        file.modified = Date.now();

        this.update();
        return file;
    }

    readText(path) {
        let file = this._navHierarchy(path);
        if (file.constructor === Directory) throw new Error(`Cannot read from directory at ${path}!`);

        if (!file) throw new Error(`Cannot read from file.  File at ${path} does not exist!`);
        if (!file.permission.includes(Perms.READ))
            throw new Error(`Cannot read from ${path}.  Permission denied!`);

        return file.text;
    }

    /** Navigates the filesystem hierarchy given a valid path and returns the object at that path
     * @param {string} path
     * @returns {Directory | File}
     */
    _navHierarchy(path) {

        if (!path) return null;

        let tokens = path.split("/");

        if (tokens[tokens.length - 1] === "") tokens.pop();
        if (tokens[0] === "") tokens.shift();

        let current = this.hierarchy;
        //console.log("Nav tokens: "+tokens);
        while (tokens.length > 0) {
            let foundPath = false;
            //console.log("Current token: "+tokens[0], current);
            if (tokens.length === 1 && tokens[0] === current.name)
                return current;

            for (let i = 0; i < current.subTree.length; i++) {
                //console.log(current.subTree[i].name, tokens[1], tokens);
                if (current.subTree[i].name === tokens[0]) {
                    //console.log("Found: "+current.subTree[i].name);
                    current = current.subTree[i];
                    tokens.shift();
                    foundPath = true;
                    break;
                }
            }
            if (!foundPath) return null;
        }
        //console.log("File at path: "+current.name);
        return current;
    }
}

let initialHierarchy = new Directory("", [
    new Directory("home", [
        new Directory("guest", [
            new Directory("public", [])
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

if (typeof window === 'undefined') {
    const { resolve } = require('path');
    const { readdirSync, statSync } = require('fs');

    masterFileSystem = new FileSystem(initialHierarchy);

    // eslint-disable-next-line no-inner-declarations
    function walkPages(dir = "pages") {
        const dirents = readdirSync(dir, { withFileTypes: true });

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);

            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);
            if (!dirent.isDirectory()) {
                let size = statSync(res).size;
                let fileName = res.substring(res.lastIndexOf("/") + 1).replace(".js", "");
                if (["admin", "index", "404", "display", "edit", "babble", "403"].includes(fileName)) continue;

                if (fileName[0] !== "_") {
                    let name = hierarchyPath.replace(SysEnv.PUBLIC_FOLDER, "");
                    if(name[0] === "/") name = name.substring(1);
                    pageRegistry[pathJoin(hierarchyPath, fileName + ".html")] = {name: pathJoin(name, fileName + ".html"), size: size};
                    masterFileSystem.touch(pathJoin(hierarchyPath, fileName + ".html"), "--" + Perms.EXECUTE);
                }
            }
        }

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages") + 6);
            let hierarchyPath = pathJoin(SysEnv.PUBLIC_FOLDER, dirName);
            if (dirent.isDirectory()) {
                if(dirent.name.endsWith("secure")) continue;
                masterFileSystem.mkdir(pathJoin(hierarchyPath, dirent.name));
                walkPages(res);
            }
        }
    }
    walkPages();

    masterFileSystem.mkdir(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    masterFileSystem.writeText(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", "readme.html"), contentHtml);

    dehydrateInfo = JSON.stringify(
        { hierarchy: masterFileSystem.hierarchy.constructor.toDict(masterFileSystem.hierarchy), pageRegistry: pageRegistry }
    );
}
else {
    let dehydrateElem = document.getElementById("dehydrateInfo");
    dehydrateInfo = dehydrateElem.innerText;
    let hydratedInfo = JSON.parse(dehydrateElem.innerText);

    pageRegistry = hydratedInfo.pageRegistry;
    masterFileSystem = new FileSystem(Directory.fromDict(hydratedInfo.hierarchy));
}

function setPageRegistry(newRegistry) { pageRegistry = newRegistry; }
function setMasterFileSystem(hierarchyDict, copyCallbacks = true) {
    let newMaster = new FileSystem(Directory.fromDict(hierarchyDict));
    if (copyCallbacks) newMaster.callbacks = masterFileSystem.callbacks;
    masterFileSystem = newMaster;
}

export { pageRegistry, masterFileSystem, FileSystem, Directory, File, dehydrateInfo, pathJoin, setPageRegistry, setMasterFileSystem };