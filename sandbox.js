function pathJoin(...paths) {
    let totalPath = [];
    for(let path of paths){
        if(path[0] === "/") totalPath = [''];
        let split = path.split('/');
        for(let elem of split){
            if (elem === '.' || (elem === ''));
            else if (elem === '..') totalPath.pop();
            else totalPath.push(elem);
        }
    }
    if(totalPath.length === 1 && totalPath[0] === "") totalPath.push('');
    return totalPath.join('/').replace("//", "/");
}

console.log(pathJoin("/home/guest", ".."));
console.log();
