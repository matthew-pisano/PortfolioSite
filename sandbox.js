var pathlib = require('path');

function resolvePath(cwd, path){
    if(!path) path = "";
    if(path.length < 1 || path[0] !== "/") path = pathlib.join(cwd, path);
    let pathArr = [];
    let splitPath = path.split("/");
    for(let i in splitPath){
        if(!splitPath[i] || splitPath[i] === ".") continue;

        if(splitPath[i] === ".."){
            if(pathArr.length === 0) return undefined;

            pathArr.pop();
            continue;
        }
        pathArr.push(splitPath[i]);
    }
    return pathlib.join("/", ...pathArr);
}

console.log();
