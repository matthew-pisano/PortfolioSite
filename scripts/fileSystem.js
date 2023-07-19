import * as pathlib from 'path';


class File {

    constructor(name, text="", permission="allow") {
        this.name = name;
        this.text = text
        this.permission = permission;
    }
}

class Directory {

    constructor(name, subTree=null, permission="allow") {
        this.name = name.replace(/\//g, "");
        this.subTree = subTree ? subTree : [];
        this.permission = permission;
    }
}


class FileSystem {
    
    constructor(hierarchy) {
        this.hierarchy = hierarchy
    }

    exists(path) {
        return this.navHierarchy(path).result ? true : false;
    }

    mkdir(path){
        let parentPath = path.substring(0, path.lastIndexOf("/")+1);
        let childName = path.substring(path.lastIndexOf("/")+1);
        let parent = this.navHierarchy(parentPath).result;

        let childDir = new Directory(childName);
        parent.subTree.push(childDir);

        return childDir
    }

    touch(path) {
        let parentPath = path.substring(0, path.lastIndexOf("/")+1);
        let childName = path.substring(path.lastIndexOf("/")+1);
        let parent = this.navHierarchy(parentPath).result;

        let childFile = new File(childName);
        parent.subTree.push(childFile);

        return childFile
    }

    writeText(path, text) {
        let file = this.navHierarchy(path).result;
        if(!file) file = this.touch(path);
        
        file.text = text;
        return file;
    }

    appendText(path, text) {
        let file = this.navHierarchy(path).result;
        
        file.text += text;
        return file;
    }

    /** Navigates the filesystem hierarchy given a valid path and returns the object at that path
     * @param {string} path
     * @returns {{result: Directory|File, path: string}}
     */
    navHierarchy(path) {
        
        let tokens = path.split("/");
    
        if (tokens[tokens.length - 1] === "") tokens.pop();
        if (tokens[0] === "") tokens.shift();
    
        let current = this.hierarchy;
        let absPath = "/";
        //console.log("Nav tokens: "+tokens);
        while (tokens.length > 0) {
            let foundPath = false;
            //console.log("Current token: "+tokens[0], current);
            if (tokens.length === 1 && tokens[0] === current.name)
                return {result: current, path: absPath};
            
            for (let i = 0; i < current.subTree.length; i++) {
                //console.log(current.subTree[i].name, tokens[1], tokens);
                if (current.subTree[i].name === tokens[0]) {
                    //console.log("Found: "+current.subTree[i].name);
                    current = current.subTree[i];
                    absPath += current.name;
                    tokens.shift();
                    foundPath = true;
                    break;
                }
            }
            if (!foundPath) return {result: null, path: null};
        }
        //console.log("File at path: "+current.name);
        return {result: current, path: absPath};
    }
}

let initialHierarchy = new Directory("", [
    new Directory("home", [
        new Directory("guest", [
            new Directory("public", [
                new Directory("custom", [

                ])
            ])
        ]),
        new Directory("admin", [], "deny"),
    ]),
    new Directory("bin", [], "deny"),
    new Directory("boot", [], "deny"),
    new Directory("dev", [], "deny"),
    new Directory("etc", [], "deny"),
    new Directory("lib", [], "deny"),
    new Directory("mnt", [], "deny"),
    new Directory("opt", [], "deny"),
    new Directory("proc", [], "deny"),
    new Directory("usr", [], "deny"),
    new Directory("var", [], "deny"),
])

let pageRegistry = {};

const masterFileSystem = new FileSystem(initialHierarchy);

if (typeof window === 'undefined') {
    const { resolve } = require('path');
    const { readdirSync, statSync } = require('fs');

    function walkPages(dir="pages") {
        const dirents = readdirSync(dir, { withFileTypes: true });

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages")+6);
            let hierarchyPath = "/home/guest/public/"+dirName;
            if (!dirent.isDirectory()) {
                let size = statSync(res).size;
                let fileName = res.substring(res.lastIndexOf("/")+1).replace(".js", "");
                if(["admin", "index", "404"].includes(fileName)) continue;

                if(fileName[0] !== "_"){
                    pageRegistry[(dirName ? dirName+"/": "")+fileName] = {name: fileName+".html", size: size};
                    masterFileSystem.touch(pathlib.join(hierarchyPath, fileName+".html"));
                }
            }
        }

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages")+6);
            let hierarchyPath = "/home/guest/public/"+dirName;
            if (dirent.isDirectory()) {
                masterFileSystem.mkdir(pathlib.join(hierarchyPath, dirent.name));
                walkPages(res);
            }
        }
    }
    walkPages();
    console.log("Pages", pageRegistry)
}
else{
    let dehydrateInfo = JSON.parse(document.getElementById("dehydrateInfo").innerText);
    hierarchy = dehydrateInfo.hierarchy
    pageRegistry = dehydrateInfo.pages
}

export {pageRegistry, masterFileSystem, FileSystem, Directory, File};