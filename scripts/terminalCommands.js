import { Directory, masterFileSystem, pageRegistry, pathJoin } from './fileSystem';


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


function resolvePath(cwd, path){
    console.log("Resolving", cwd, path);
    if(path[0] === "~") path = path.replace("~", HOME);
    if(path.length > 0 && path[0] === "/") return pathJoin(path)+"/".replace("//", "/");
    return pathJoin(cwd, path)+"/".replace("//", "/");
}

function closeTerminal() {
    console.log("Closing terminal...");
    document.getElementById('terminal').style.height = `30px`;
    document.getElementById('terminalOutput').style.height = `0px`;
    document.getElementById('terminalBottom').style.visibility = "hidden";
    document.getElementById('terminalClose').style.visibility = "hidden";
};

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

    return tokens;
}


class Commands {

    static ENV = {};

    static resolvePath(path) {return resolvePath(this.ENV.cwd, path);}

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
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let newPath = this.resolvePath(args[0].replace(".html", "")+".html");

        if(newPath === "") 
            return "File: '"+absPath+"' does not exist\n";
        
        if(masterFileSystem.navHierarchy(newPath) !== null)
            return "File '"+newPath+"' already exists\n";
            
        // common.newFile(newName);
        masterFileSystem.touch(newPath)
        return "Created file '"+newPath+"'\n";
    }

    static copy = (args) => {
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        let oldPath = this.resolvePath(args[0]);
        let oldName = oldPath.substring(oldPath.lastIndexOf("/")+1);
        let newPath = this.resolvePath(args[1]);
        
        let oldObj = masterFileSystem.navHierarchy(oldPath);
        let newObj = masterFileSystem.navHierarchy(newPath);

        if(newObj && newObj.constructor === Directory) 
            masterFileSystem.copy(oldPath, pathJoin(newPath, oldName));
        else if(!newObj || (newObj && oldObj.constructor === File && newObj.constructor === File))
            masterFileSystem.copy(oldPath, newPath);
        else throw new Error(`Cannot copy directory at ${oldPath} to file at ${newPath}!`);

        return "Copied '"+oldPath+"' to '"+newPath+"'\n";
    }

    static mv = (args) => {
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        this.copy(args);
        
        let oldPath = this.resolvePath(args[0]);
        let newPath = this.resolvePath(args[1]);
        masterFileSystem.rm(oldPath);
        return "Moved '"+oldPath+"' to '"+newPath+"'\n";
    }

    static rm = (args) => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let fileName = this.resolvePath(args[0]);
        masterFileSystem.rm(fileName);

        return "Removed '"+fileName+"'\n";

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

        if(args.length === 0){
            this.ENV.cwd = HOME
            return "";
        }
        console.log("cd to 1", args[0]);
        args[0] = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.navHierarchy(args[0]);
        if(!targetItem) 
            throw new Error(`Cannot enter directory.  Directory at ${args[0]} does not exist!`);

        if(targetItem.permission === "deny")
            throw new Error(`Cannot enter ${args[0]}.  Permission denied!`);
        
        this.ENV.cwd = args[0]
        console.log("cd to", args[0]);
        return "";
    }

    static ls = (args) => {

        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 0) args = [this.ENV.cwd];
        return masterFileSystem.ls(this.resolvePath(args[0]))+"\n";
    }

    static cat = (args) => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return masterFileSystem.readText(args[0])+"\n";
    }

    static open = (args) => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        if(pageRegistry[args[0]])
            window.open(args[0].substring(args[0].lastIndexOf("/")+1).replace(".html", ""), '_self', false);
        else throw new Error(`Cannot open ${args[0]}.  This is not a valid page!`);
    }

    static color = (args) => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        if(args[0].match(/#[0-9|a-f|A-F]{6}/))
            this.ENV.color = args[0]
        else throw new Error(`${args[0]} is not a valid color!`);

        return `Set terminal color to ${args[0]}\n`;
    }

    static exit = () => {
        closeTerminal();
        document.getElementById("terminalOutput").innerText = "";

        this.ENV.closed = true;
        this.ENV.closeTime = Date.now();
    }

    static dir = () => {
        return "Unknown command: 'dir' (Wrong OS)\n";
    }

    static mir = () => {
        return "Unknown command: 'mir' (Like 'dir' or the space station?)\n";
    }

    static launch = () => {
        let valResult = this.validateArgs(args, {nargs: [3]});
        if(valResult) return valResult;

        return "Insufficient permissions to cause armageddon (Did you try 'sudo'?)\n";
    }

    static sudo = () => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return "Sudo is just bloat (Maybe try 'doas'?)\n";
    }

    static doas = () => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return "Did you mean to type 'does'?\n";
    }

    static haltingproblem = () => {
        haltingProblem();
        return "\n\n";
    }

    static eightball = () => {
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return eightBall()+"\n";
    }

    static neofetch = () => {
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return neofetch.replace(new RegExp(' ', 'g'), '\u00A0')+"\n";
    }

    static whoami = () => {
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return "guest\n";
    }

}

function parseCommand(commandString, env){
    Commands.ENV = env;

    let tokens = tokenizeCommand(commandString);
    let command = tokens[0];
    let args = tokens.slice(1)

    if(!command) return {result: "", env: Commands.ENV};

    return {result: commandString+"\n"+Commands[command](args), env: Commands.ENV};
}


export {resolvePath, parseCommand, HOME, closeTerminal};