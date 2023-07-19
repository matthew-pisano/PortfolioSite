import * as fileSystem from './fileSystem';


const HOME = "/home/guest/";

const helpMsg = `--<Help Menu>--
GRU mash, version 5.1.16(1)-release (x86_64-cloud-manix-gru)
These shell commands are defined internally.  Type 'help' to see this list.

help [options] - print this message
echo [*msg] - echoes each of the arguments on a new line
touch [fileName] - creates a file with the name given in the argument
ren [oldName] [newName] - renames an existing file to the given new name
rm [fileName] - removes the file with the name given in the argument
cls | clear - clears the output of the terminal
cd [path] - changes the current working directory to thr given path
ls [path] - gives information on the file or folder that matches the given path
cat [filePath] - prints our the contents of the given file
open [fileName] - opens the file with the given name
color [color] - sets the terminal text color to the given color in the form #rrggbb
dir - Why?
neofetch - displays system and software information
whoami - displays the current user
exit - clears the terminal and closes it`;

const forceHelp = `--Secret Help--
MAthesis SHell (mash) extended capabilities.
Sensitive documents are exposed to these commands.  Use with caution.

open [rick | poland | void | scp | babble] - opens the file with the given name
mir - ??
launch [warhead_id] [lat] [long] - ██████████████
haltingproblem - Computes the ideal turing machine to solve the halting problem
eightball [query] - ${eightBall()}`;

const neofetch = `
   lWMMMMMMMMMWl        lWMMMMMMMMMWl       guest@mathesisConsole
 ,;kWMMMMMMMMMWk;,,  ,,;kWMMMMMMMMMWk;,     ---------------------
WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW    OS: primOS 10.02.1 x86_64-cloud-manix-gru
MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM    Host: ████████
MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM    kernel: 7.05.01-server
MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM    Uptime: █████
MMMMMMWl       lWMMMMMMWl       lWMMMMMM    Packages: 443 (████), 24 (██)
MMMMMMWl       ,xkkkkkkx,       lWMMMMMM    Shell: mash 5.1.16(1)-release
MMMMMMWl                        lWMMMMMM    Terminal: cloudTerminal
MMMMMMWl       .,,,,,,,,.       lWMMMMMM    CPU: ██th Gen ██████ █-██
MMMMMMWl       lNWWWWWWNl       lWMMMMMM    Memory: ██████TiB / ██████TiB
MMMMMMWl       lWM    MWl       lWMMMMMM
MMMMMMWl       lWM    MWl       lWMMMMMM
  kKMMWl       lWM    MWl       lWMMKk
   lWMWl       lWM    MWl       lWMWl   
   lWMWl       lWM    MWl       lWMWl`;


function resolvePath(path){
    if(path[0] === "~") path = path.replace("~", HOME);
    if(path.length > 0 && path[0] === "/") return pathlib.join(path)+"/".replace("//", "/");
    return pathlib.join(cwd, path)+"/".replace("//", "/");
}

async function toVoid(){
    let terminalOutput = document.getElementById('terminalOutput');
    let voidStr = "I T - C O N S U M E S - A L L";
    let initLen = voidStr.length;
    await new Promise(resolve => setTimeout(resolve, 500));
    while(voidStr.length > 0){
        let next = voidStr.charAt(0);
        document.getElementById('terminalOutput').innerHTML += next !== " " ? next : "&nbsp;";
        if(voidStr.length == initLen)
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        voidStr = voidStr.substring(1);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    document.body.style.height = "100%";
    document.body.innerHTML = `<div class="void"></div>

        <div id="exitVoid" style="display:none; width: 100%; height: 50px; background-color: black; 
        position: fixed; bottom: 0px; color: azure; text-align: center; cursor: pointer"
        onClick="window.closeFullscreen()">[EXIT]</div>
        <div id="enterVoid" style="width: 100%; height: 50px; background-color: black; 
        position: fixed; bottom: 0px; color: azure; text-align: center; cursor: pointer"
        onClick="window.openFullscreen()">[ENTER]</div>`;
    document.getElementById("siteTitle").innerText = "How did we get here?";
}

async function haltingProblem(){
    let dots = 7;
    let terminalOutput = document.getElementById('terminalOutput');
    await new Promise(resolve => setTimeout(resolve, 250));
    terminalOutput.innerHTML += "Computing solution to halting problem";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    while(dots > 0){
        terminalOutput.innerHTML += ".";
        await new Promise(resolve => setTimeout(resolve, 500));
        dots --;
    }
    terminalOutput.innerHTML += "<br>Operation completed successfully!<br>Printing solution...";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    await new Promise(resolve => setTimeout(resolve, 1500));
    terminalOutput.innerHTML += "<br>Segmentation fault (core dumped)";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function eightBall(){
    let responses = ["It is certain", "Without a doubt", "Yes definitely", "You may rely on it",
        "Most likely", "Outlook microsoft", "Signs point to yes", "Hmmmmm...", "Reply hazy, try again",
        "Ask again later", "404, response not found", "Better not tell you now", "Cannot predict now",
        "Enrich 95% Uranium 235 and try again", "Don't count on it", "My reply is no", 
        "My sources say no [citation needed]", "Outlook not so good", "Very doubtful", "503, oh no thats not good!", 
        "Huh?", "What?", "Can you speak up?", "Segmentation fault (core dumped)", "Han shot first",
        "Have you tried water-scrum-fall?", "Have you tried turning it off and turning it on again?"];
    let result = Math.floor(Math.random()*responses.length);
    return responses[result];
}


function tokenizeCommand(command){
    let tokens = [];
    let activeToken = "";
    let quoteType = null;
    for(let i=0; i<command.length; i++){
        // Check to see if a quoted string has begun
        if(quoteType === null){
            if(`"'`.includes(command[i]))
                quoteType = command[i];

            if(`"' `.includes(command[i])){
                if(activeToken !== "") tokens.push(activeToken);
                activeToken = "";
                continue;
            }
        }
        // Complete string and push token when string terminates
        else if(command[i] === quoteType){
            if(activeToken !== "") tokens.push(activeToken);
            activeToken = "";
            quoteType = null;
            continue;
        }
        // If string is active, add to the string
        if(command[i] !== quoteType) 
            activeToken += command[i];
    }
    // Add new token to list
    if(activeToken !== "") tokens.push(activeToken);
    console.log("Tokens:", tokens);
}


class Commands {

    static ENV = {}

    static validateArgs(args, val) {
        if(val.nargs !== undefined &&  !val.nargs.includes(args.length)) 
            return `Only ${val.nargs} arguments are accepted, found ${args.length}`;

        return "";
    }

    static echo = (args) => {
        let echoed = "";
        for(let i=1; i<tokens.length; i++) echoed += args[i]+"\n";
        return echoed;
    }

    static touch = (args) => {
        if(args.length == 1){
            let newName = args[0].replace(".html", "")+".html";
            newName = resolvePath(newName);
            // Remove custom from path if it exists and continue with the removal
            if(newName.startsWith("/home/guest/public/custom")){
                if(fileSystem.navHierarchy(newName).result !== null)
                    return "File '"+newName+"' already exists\n";
                    
                common.newFile(newName);
                return "Created file '"+newName+"'\n";
            }
            else if(newName === "") 
                return "File: '"+absPath+"' does not exist\n";

            return "touch command only applies to files in the '/home/guest/public/custom' folder\n";
        }
        return "touch command requires one argument\n";
    }

    static mv = (args) => {
        if(tokens.length == 3){
            let oldName = tokens[1].replace(".html", "")+".html";
            resolvePath(oldName);
            let newName = tokens[2].replace(".html", "")+".html";
            let rootPath = fileHierarchy.navHierarchy(absPath)[1];
            // Remove custom from path if it exists and continue with the removal
            if(rootPath.includes("/home/guest/public/custom")){
                let oldId = null;
                for(let pageId in fileHierarchy.pages)
                    if(oldName.endsWith(fileHierarchy.pages[pageId].name)){
                        oldId = pageId;
                        break;
                    }
                common.finishRenaming(oldId, newName);
                return outStr+"\nRenamed file '"+oldName+".html' to '"+newName+"'";
            }
            else if(rootPath === "") return outStr+"\nFile: '"+absPath+"' does not exist";
            return outStr+"\nrm command only applies to files in the '/home/guest/public/custom' folder";
        }
        return outStr+"\nren command requires three arguments";
    }

    static rm = (args) => {
        if(tokens.length == 2){
            let fileName = tokens[1].replace(".html", "")+".html";
            resolvePath(fileName);
            let rootPath = fileHierarchy.navHierarchy(absPath)[1];
            // Remove custom from path if it exists and continue with the removal
            if(rootPath.includes("/home/guest/public/custom")){
                for(let pageId in fileHierarchy.pages)
                    if(fileName.endsWith(fileHierarchy.pages[pageId].name)){
                        common.removeFile(pageId);
                        break;
                    }
                return outStr+"\nRemoved file '"+fileName+"'";
            }
            else if(rootPath === "") return outStr+"\nFile: '"+absPath+"' does not exist";
            return outStr+"\nrm command only applies to files in the '/home/guest/public/custom' folder";
        }
        return outStr+"\nrm command requires one argument";
    }

    static cls = (args) => {
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        document.getElementById("terminalOutput").innerText = "";
        return ""
    }
    static clear = this.cls;

    static pwd = (args) => {
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return this.ENV.cwd+"\n";
    }

    static help = (args) => {
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length > 0 && (args[0] === "-f" || args[1] === "--force"))
            return helpMsg+"\n"+forceHelp+"\n";

        return helpMsg+"\n";
    }

    static cd = (args) => {

        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 1){
            this.ENV.cwd = HOME
            return "";
        }

        args[0] = resolvePath(args[0]);
        let targetItem = fileSystem.navHierarchy(args[0]).result;

        if(targetItem  && targetItem.permission == "deny")
            return "Permission denied for path: '"+args[0]+"'\n";
        
        else if(targetItem) {
            this.ENV.cwd = args[0]
            return "";
        }
        else return "Could not find path: '"+args[0]+"'\n";
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

    static touch = (args) => {
        
    }

}

function parseCommand(command, env){
    let tokens = tokenizeCommand(command);
    let command = tokens[0];
    let args = tokens.slice(1)

    let targetItem = null;
    let outStr = command+"\n";
    let absPath = "";

    if(!command) return {result: outStr, env: Commands.ENV};

    Commands.ENV = env;

    return {result: Commands[command](args), env: Commands.ENV};

    switch (command) {
        case '':
        case null:
        case undefined:
            return outStr;
        case 'echo':
            return Commands.echo(tokens.slice(1));
        case 'touch':
            return Commands.touch()
        case 'ren':
            
        case 'rm':

        case 'cls':
        case 'clear':
            document.getElementById("terminalOutput").innerText = "";
            return outStr;
        case 'pwd':
            return outStr+"\n"+cwd;
        case 'help':
            if(tokens.length > 1 && (tokens[1] == "-f" || tokens[1] == "--force"))
                return outStr+"\n"+helpMsg+"\n"+forceHelp;
            return outStr+"\n"+helpMsg;
        case 'cd':
            if(tokens.length === 1){
                setCwd(homeDir);
                return outStr;
            }
            resolvePath(tokens[1]);
            targetItem = fileHierarchy.navHierarchy(absPath)[0];
            if(targetItem  && targetItem.permission  && targetItem.permission == "deny") {
                return outStr+"\nPermission denied for path: '"+absPath+"'";
            }
            else if(targetItem) {
                setCwd(absPath);
                return outStr;
            }
            else return outStr+"\nCould not find path: '"+absPath+"'";
        case 'ls':
            resolvePath(tokens[1]);
            targetItem = fileHierarchy.navHierarchy(tokens.length < 2 ? cwd : absPath)[0];
            if(targetItem  && targetItem.permission  && targetItem.permission == "deny") {
                return outStr+"\nPermission denied for path: '"+absPath+"'";
            }
            else if(targetItem)
                if(targetItem.subTree){
                    outStr += "\nFolder\n----\nChildren: "+targetItem.subTree.length;
                    for(let i=0; i<targetItem.subTree.length; i++)
                        outStr += "\n"+targetItem.subTree[i].name;
                }
                else outStr += "\nFile\n----\n"+targetItem.name;
            
            else return outStr+"\nCould not find path: '"+absPath+"'";
            return outStr;
        case 'cat':
            if(tokens.length < 2) return outStr+"\ncat command requires an argument";
            resolvePath(tokens[1]);
            targetItem = fileHierarchy.navHierarchy(absPath)[0];
            if(!targetItem) return outStr+"\nCould not find path: '"+absPath+"'";
            if(!targetItem.subTree){
                for(let i=0; i<Object.keys(fileHierarchy.pages).length; i++){
                    let key = Object.keys(fileHierarchy.pages)[i];
                    console.log("Checking ", targetItem.name, fileHierarchy.pages[key].name);
                    if(targetItem.name === fileHierarchy.pages[key].name){
                        let pageContent = fileHierarchy.pages[key].content;
                        if(!pageContent) pageContent = document.getElementById(key+"Page").innerHTML;
                        return outStr+"\n"+pageContent;
                    }
                }
                return outStr+"\nFile: '"+targetItem.name+"' does not exist";
            }
            else return outStr+"\nPath: '"+absPath+"' must be a file";
        case 'open':
            if(tokens[1].replace(".html", "") === "rick"){
                window.open("documents", "_self");
                return outStr+"\nInteresting choice...";
            }
            else if(tokens[1].replace(".html", "") === "poland"){
                window.open("http://cs.newpaltz.edu/~pisanom1/CS3/");
                return outStr+"\nPolska Ball approves...";
            }
            else if(tokens[1].replace(".html", "") === "void"){
                toVoid();
                return outStr+"\n\n";
            }
            if(tokens.length < 2) return outStr+"\nopen command requires an argument";
            for(let pageId in fileHierarchy.pages)
                if(tokens[1].replace(".html", "")+".html" === fileHierarchy.pages[pageId].name){
                    common.showPage(pageId);
                    return outStr+"\nOpened file '"+tokens[1]+"'";
                }
            return outStr+"\nFile '"+tokens[1].replace(".html", "")+".html"+"' does not exist";
        case 'color':
            if(tokens.length < 2) return outStr+"\ncolor command requires an argument";
            if(tokens[1].match(/#[0-9|a-f|A-F]{6}/)){
                document.getElementById("terminalHolder").style.color = tokens[1];
                return outStr+"\nSet terminal color to "+tokens[1];
            }
            return outStr+"\nCould not set color to "+tokens[1]+" as it does not match '#rrggbb'";
        case 'dir':
            return outStr+"\nUnknown command: 'dir' (Wrong OS)";
        case 'mir':
            return outStr+"\nUnknown command: 'mir' (Like 'dir' or the space station?)";
        case 'launch':
            if(tokens.length < 4) return outStr+"\nlaunch command requires three arguments";
            return outStr+"\nInsufficient permissions to cause armageddon (Did you try 'sudo'?)";
        case 'haltingproblem':
            haltingProblem();
            return outStr+"\n\n";
        case 'eightball':
            return outStr+"\n"+eightBall();
        case 'neofetch':
            return outStr+"\n"+neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
        case 'whoami':
            return outStr+"\n"+"guest";
        case 'exit':
            closeTerminal();
            document.getElementById("terminalOutput").innerText = "";
            return outStr;
        default:
            return outStr+"\nUnknown command: '"+tokens[0]+"'";
    }
}


export {resolvePath, parseCommand, eightBall, HOME};