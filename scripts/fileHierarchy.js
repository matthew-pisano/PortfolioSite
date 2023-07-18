let hierarchy = {
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
};

let pages = {};


function navHierarchy(path) {
    let tokens = path.split("/");
    if (tokens[tokens.length - 1] === "") tokens.pop();
    let current = hierarchy;
    let absPath = "/";
    //console.log("Nav tokens: "+tokens);
    while (tokens.length > 0) {
        let foundPath = false;
        //console.log("Current token: "+tokens[0], current);
        if (tokens.length === 1 && tokens[0] === current.name.replace("/", "")) {
            //console.log("File at path: "+current.name);
            return [current, absPath];
        }
        for (let i = 0; i < current.subTree.length; i++) {
            //console.log(current.subTree[i].name.replace("/", ""), tokens[1], tokens);
            if (current.subTree[i].name.replace("/", "") === tokens[1]) {
                //console.log("Found: "+current.subTree[i].name);
                current = current.subTree[i];
                absPath += current.name;
                tokens.shift();
                foundPath = true;
                break;
            }
        }
        if (!foundPath) return [null, ""];
    }
    //console.log("File at path: "+current.name);
    return [current, absPath];
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
                navHierarchy(hierarchyPath)[0].subTree.unshift({name: dirent.name+"/", subTree: []});
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
                    navHierarchy(hierarchyPath)[0].subTree.unshift({name: fileName+".html"});
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

export {hierarchy, pages, navHierarchy};