import {Perms} from "./fileSystemMeta";


/**
 * Represents a file in the filesystem
 */
class File {

    /**
     * @param name {string} The name of the file
     * @param text {string} The text content of the file
     * @param permission {string} The permission of the file
     */
    constructor(name, text = "", permission = Perms.ALLOW) {
        Perms.validate(permission);

        this.name = name;
        this.text = text;
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
    }

    /**
     * Copies the file
     * @return {File} The copied file
     */
    copy() { return new File(this.name, this.text, this.permission); }

    /**
     * Gets the size of the file based on the length of the text
     * @return {number} The size of the file
     */
    size() { return this.text.length; }

    /**
     * Serializes the file to a dictionary
     * @return {{name: string, modified: number, permission: string, text: string}}
     */
    toDict() {
        return {name: this.name, text: this.text, permission: this.permission, modified: this.modified};
    }

    /**
     * Deserializes a dictionary to a file
     * @param dict {{name: string, modified: number, permission: string, text: string}} The dictionary to be deserialized
     * @return {File} The deserialized file
     */
    static fromDict(dict) {
        let newFile = new File(dict.name, dict.text, dict.permission);
        newFile.modified = dict.modified;
        return newFile;
    }
}


/**
 * Represents a directory in the filesystem
 */
class Directory {

    /**
     * @param name {string} The name of the directory
     * @param subTree {Directory[] | File[]} The sub-tree of the directory
     * @param permission {string} The permission of the directory
     */
    constructor(name, subTree = null, permission = Perms.ALLOW) {
        Perms.validate(permission);
        subTree = subTree ? subTree : [];

        // Check for duplicate child names
        this.childNames = new Set();
        for (let child of subTree) {
            if (this.childNames.has(child.name)) throw Error(`Duplicate child name ${child.name} in directory ${name}!`);
            this.childNames.add(child.name);
        }

        this.name = name.replace(/\//g, "");
        this.subTree = subTree;
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
    }

    /**
     * Adds a child to the directory and checks for duplicate names
     * @param child {Directory | File} The child to be added
     */
    addChild(child) {
        if (this.childNames.has(child.name)) throw Error(`Duplicate child name ${child.name} in directory ${this.name}!`);
        this.childNames.add(child.name);
        this.subTree.push(child);
    }

    /**
     * Copies the directory
     * @return {Directory} The copied directory
     */
    copy() {
        return new Directory(this.name, this.subTree, this.permission);
    }

    /**
     * Gets the size of the directory
     * @return {number} The size of the directory
     */
    size() {
        return 4096;
    }

    /**
     * Serializes the directory to a dictionary
     * @return {{name: string, modified: number, permission: string, subTree: (Directory[] | File[])}} The serialized directory
     */
    toDict() {
        let dict = {name: this.name, permission: this.permission, modified: this.modified, subTree: []};
        for (let child of this.subTree) dict.subTree.push(child.toDict());
        return dict;
    }

    /**
     * Deserializes a dictionary to a directory
     * @param dict {{name: string, modified: number, permission: string, subTree: (Directory[] | File[])}} The dictionary to be deserialized
     * @return {Directory} The deserialized directory
     */
    static fromDict(dict) {
        let directory = new Directory(dict.name, null, dict.permission);
        directory.modified = dict.modified;

        for (let child of dict.subTree)
            directory.subTree.push((child.subTree !== undefined ? Directory : File).fromDict(child));

        return directory;
    }
}


/**
 * Represents a page in the filesystem and in the page registry
 */
class Page {

    /**
     * @param name {string} The name of the page
     * @param size {number} The size of the page
     */
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}


export {Directory, File, Page};
