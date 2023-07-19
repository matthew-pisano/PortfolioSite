
class File {

    constructor(name, permission="allow") {
        this.name = name;
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

let hierarchy = new Directory("", [
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

/*let hierarchy = {
    name: "/",
    subTree: [{
        name: "home/",
        subTree: [
            {name: "guest/",
                subTree: [
                    {name: "public/",
                    subTree: [
                        {name: "custom/", subTree: []}
                    ]}
                ]
            }]
        },
        {name: "bin/", subTree: [], permission: "deny"},
        {name: "boot/", subTree: [], permission: "deny"},
        {name: "dev/", subTree: [], permission: "deny"},
        {name: "etc/", subTree: [], permission: "deny"},
        {name: "lib/", subTree: [], permission: "deny"},
        {name: "mnt/", subTree: [], permission: "deny"},
        {name: "opt/", subTree: [], permission: "deny"},
        {name: "proc/", subTree: [], permission: "deny"},
        {name: "sys/", subTree: [], permission: "deny"},
        {name: "usr/", subTree: [], permission: "deny"},
        {name: "var/", subTree: [], permission: "deny"},
    ]
};*/

let pages = {};


function navHierarchy(path) {
    let tokens = path.split("/");

    if (tokens[tokens.length - 1] === "") tokens.pop();
    if (tokens[0] === "") tokens.shift();

    let current = hierarchy;
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


if (typeof window === 'undefined') {
    const { resolve } = require('path');
    const { readdirSync, statSync } = require('fs');

    function walkPages(dir="pages") {
        const dirents = readdirSync(dir, { withFileTypes: true });

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages")+6);
            let hierarchyPath = "/home/guest/public/"+dirName;
            if (dirent.isDirectory()) {
                navHierarchy(hierarchyPath).result.subTree.unshift(new Directory(dirent.name));
                walkPages(res);
            }
        }

        for (const dirent of dirents) {
            const res = resolve(dir, dirent.name);
            let dirName = dir.substring(dir.lastIndexOf("pages")+6);
            let hierarchyPath = "/home/guest/public/"+dirName;
            if (!dirent.isDirectory()) {
                let size = statSync(res).size;
                let fileName = res.substring(res.lastIndexOf("/")+1).replace(".js", "");
                if(["admin", "index", "404"].includes(fileName)) continue;

                if(fileName[0] !== "_"){
                    pages[(dirName ? dirName+"/": "")+fileName] = {name: fileName+".html", size: size};
                    navHierarchy(hierarchyPath).result.subTree.unshift(new File(fileName+".html"));
                }
            }
        }
    }
    walkPages();
    console.log("Pages", pages)
}
else{
    let dehydrateInfo = JSON.parse(document.getElementById("dehydrateInfo").innerText);
    hierarchy = dehydrateInfo.hierarchy
    pages = dehydrateInfo.pages
}

export {hierarchy, pages, navHierarchy, Directory, File};