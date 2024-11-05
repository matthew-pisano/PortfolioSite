import {Perms} from "@/lib/fileSystem/fileSystemMeta";


/**
 * Represents a file in the filesystem
 */
class File {

    #text;
    #size;
    #isPage;

    /**
     * @param name {string} The name of the file
     * @param text {string} The text content of the file
     * @param permission {string} The permission of the file
     */
    constructor(name, text = "", permission = Perms.ALLOW) {
        Perms.validate(permission);

        this.name = name;
        this.#text = text;
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
        this.#size = this.#text.length;
        this.#isPage = false;
    }

    /**
     * Gets the text content of the file
     * @returns {string} The text content of the file
     */
    text() { return this.#text; }

    /**
     * Overwrites the text of a file, optionally appending it
     * @param text {string} The text to be written
     * @param append {boolean} Whether to append the text to
     */
    write(text, append = false) {
        if (append) this.#text += text;
        else this.#text = text;

        this.modified = Date.now();
        this.#size = this.#text.length;
    }

    /**
     * Gets the size of the file based on the length of the text
     * @return {number} The size of the file
     */
    size() { return this.#size; }

    /**
     * Spoofs the size of the file
     * @param size {number} The size to be spoofed
     */
    spoofSize(size) { this.#size = size; }

    /**
     * Copies the file
     * @return {File} The copied file
     */
    copy() { return new File(this.name, this.text(), this.permission); }

    /**
     * Marks the file as a page
     */
    markAsPage() { this.#isPage = true; }

    /**
     * Checks if the file is a page
     * @returns {boolean} Whether the file is a page
     */
    isPage() { return this.#isPage; }

    /**
     * Serializes the file to a dictionary
     * @return {object}
     */
    serialize() {
        return {objType: "file", name: this.name, text: this.#text, permission: this.permission,
            created: this.created, modified: this.modified, size: this.#size, isPage: this.#isPage};
    }

    /**
     * Deserializes a dictionary to a file
     * @param dict {object} The dictionary to be deserialized
     * @return {File} The deserialized file
     */
    static deserialize(dict) {
        let newFile = new File(dict.name, dict.text, dict.permission);
        newFile.modified = dict.modified;
        newFile.created = dict.created;
        newFile.#size = dict.size;
        newFile.#isPage = dict.isPage;
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

        /**
         * The sub-tree of the directory
         * @type {Directory[] | File[]}
         */
        this.subTree = [];

        // Check for duplicate child names
        this.childNames = new Set();
        for (let child of subTree) this.addChild(child);

        this.name = name.replace(/\//g, "");
        this.permission = permission;
        this.created = Date.now();
        this.modified = Date.now();
    }

    /**
     * Adds a child to the directory and checks for duplicate names
     * @param child {Directory | File} The child to be added
     * @param overwrite {boolean} Whether to allow overwriting of existing children
     */
    addChild(child, overwrite = false) {
        if (!overwrite && this.childNames.has(child.name)) throw Error(`Duplicate child name ${child.name} in directory ${this.name}!`);
        this.childNames.add(child.name);

        for (let i = 0; i < this.subTree.length; i++) {
            if (this.subTree[i].name === child.name) {
                this.subTree[i] = child;
                return;
            }
        }
        this.subTree.push(child);
    }

    /**
     * Copies the directory
     * @return {Directory} The copied directory
     */
    copy() { return new Directory(this.name, this.subTree, this.permission); }

    /**
     * Gets the size of the directory
     * @return {number} The size of the directory
     */
    size() { return 4096; }

    /**
     * Serializes the directory to a dictionary
     * @return {object} The serialized directory
     */
    serialize() {
        let dict = {objType: "directory", name: this.name, permission: this.permission,
            created: this.created, modified: this.modified, subTree: []};
        for (let child of this.subTree) dict.subTree.push(child.serialize());
        return dict;
    }

    /**
     * Deserializes a dictionary to a directory
     * @param dict {object} The dictionary to be deserialized
     * @return {Directory} The deserialized directory
     */
    static deserialize(dict) {
        let directory = new Directory(dict.name, [], dict.permission);
        directory.created = dict.created;
        directory.modified = dict.modified;

        for (let child of dict.subTree)
            if (child.objType === "directory") directory.addChild(Directory.deserialize(child));
            else if (child.objType === "file") directory.addChild(File.deserialize(child));
            else throw Error(`Unknown child type ${child.objType} in object ${dict.name}!`);  // Propagate to the caller

        return directory;
    }
}


export {Directory, File};
