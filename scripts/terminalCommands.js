import { Permissions as Perms, SysEnv } from './utils';
import { Directory, File, masterFileSystem, pageRegistry, pathJoin } from './fileSystem';


const helpMsg = `--<Help Menu>--
${SysEnv.SHELL} (${SysEnv.ARCH})
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
WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW    OS: ${SysEnv.OS} ${SysEnv.ARCH}
MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM    Host: ████████
MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM    kernel:${SysEnv.KERNEL}
MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM    Uptime: █████
MMMMMMWl       lWMMMMMMWl       lWMMMMMM    Packages: 443 (████), 24 (██)
MMMMMMWl       ,xkkkkkkx,       lWMMMMMM    Shell: ${SysEnv.SHELL}
MMMMMMWl                        lWMMMMMM    Terminal: cloudTerminal
MMMMMMWl       .,,,,,,,,.       lWMMMMMM    CPU: ██th Gen ██████ █-██
MMMMMMWl       lNWWWWWWNl       lWMMMMMM    Memory: ██████TiB / ██████TiB
MMMMMMWl       lWM    MWl       lWMMMMMM
MMMMMMWl       lWM    MWl       lWMMMMMM
  kKMMWl       lWM    MWl       lWMMKk
   lWMWl       lWM    MWl       lWMWl   
   lWMWl       lWM    MWl       lWMWl`;


function resolvePath(cwd, path){
    //console.log("Resolving", cwd, path);
    if(path[0] === "~") path = path.replace("~", SysEnv.HOME_FOLDER);
    return pathJoin(cwd, path).replace("//", "/");
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
    let responses = [
        "It is certain", "Without a doubt", "Yes definitely", "You may rely on it",
        "Most likely", "Outlook not installed", "Signs point to yes", "Hmmmmm...", "Reply hazy, try again",
        "Ask again later", "404, response not found", "Better not tell you now", "Cannot predict now",
        "Enrich 95% Uranium 235 and try again", "Don't count on it", "My reply is no", "have you tried sudo?",
        "My sources say no [citation needed]", "Outlook not so good", "Very doubtful", "503, oh no thats not good!", 
        "Huh?", "What?", "Can you speak up?", "Segmentation fault (core dumped)", "Han shot first",
        "Have you tried water-scrum-fall?", "Have you tried turning it off and turning it on again?",
        "Survey says: no",
    ];
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

function resolveTokens(tokens) {
    for(let i=0; i<tokens.length; i++) {
        if(tokens[i][0] === "$") {
            let envVar = Commands.ENV[tokens[i].substring(1)]
            tokens[i] = envVar ? envVar : "";
        }
        if(i==0 && tokens[i].includes("=")) {
            let assignTokens = tokens[i].split("=");
            if(!assignTokens[0]) throw new Error("Assignment requires a variable name before '='!");
            else if(assignTokens[0][0] === "$") throw new Error("Assignment requires naked variables (no '$')!");
            else if(!assignTokens[1]) delete Commands.ENV[assignTokens[0]];
            else Commands.ENV[assignTokens[0]] = assignTokens[1];

            tokens.splice(i, 1);
            i --;
            continue;
        }
    }
    console.log("Out tokens", tokens);
}


class Commands {

    static ENV = {};

    static resolvePath(path) {return resolvePath(this.ENV.CWD, path);}

    static validateArgs(args, val) {
        if(val.nargs !== undefined &&  !val.nargs.includes(args.length)) 
            return `Only ${val.nargs} arguments are accepted, found ${args.length}`;

        return "";
    }

    static echo = (args) => {
        if(args[0] === "--help") return "echo [*msg] - echoes each of the arguments on a new line";

        let echoed = "";
        for(let i=0; i<args.length; i++) echoed += args[i]+"\n";
        return echoed;
    }

    static cls = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        document.getElementById("terminalOutput").innerText = "";
        return ""
    }
    static clear = this.cls;

    static pwd = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return this.ENV.CWD;
    }

    static help = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length > 0 && (args[0] === "-f" || args[1] === "--force"))
            return helpMsg+"\n"+forceHelp+"\n";

        return helpMsg;
    }

    static cd = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 0){
            this.ENV.CWD = SysEnv.HOME_FOLDER
            return "";
        }
        args[0] = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.getItem(args[0]);
        if(!targetItem) 
            throw new Error(`Cannot enter directory.  Directory at ${args[0]} does not exist!`);
        else if(targetItem.constructor === File)
            throw new Error(`Cannot enter ${args[0]}, it is a file!`);

        else if(!targetItem.permission.includes(Perms.EXECUTE))
            throw new Error(`Cannot enter ${args[0]}.  Permission denied!`);
        
        this.ENV.CWD = args[0];
        return "";
    }

    static ls = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 0) args = [this.ENV.CWD];
        
        let path = this.resolvePath(args[0]);
        let lsObj = masterFileSystem.getItem(path);
        if(!lsObj) throw new Error(`Cannot list file or directory.  File or directory at ${args[0]} does not exist!`);

        let pad = "\xa0\xa0";

        let lsStr;

        if(lsObj.constructor === Directory){
            if(!lsObj.permission.includes(Perms.READ)) throw new Error(`Cannot list ${path}.  Permission denied!`);

            let list = [];
            for(let child of lsObj.subTree){
                if(child.constructor === File) {
                    list.push([this.ls([pathJoin(path, child.name)]), child.name]);
                    continue;
                }

                let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                let paddedSize = `${lsObj.size()}`.padStart(6, "");

                list.push([`d${child.permission}${pad}${paddedSize}${pad}${modStr}${pad}${child.name}`, child.name]);
            }
            
            list.sort((a, b) => a[1].localeCompare(b[1]));

            lsStr = "total "+lsObj.subTree.length+"\n";

            for(let entry of list)
                lsStr += entry[0]+"\n";
        }
        else {
            let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
            modStr = modStr.substring(0, modStr.lastIndexOf(":"));
            let paddedSize = `${lsObj.size()}`.padStart(6, "");
            if(!lsObj.permission.includes(Perms.READ)) paddedSize = "?".padStart(6, "")

            lsStr = `-${lsObj.permission}${pad}${paddedSize}${pad}${modStr}${pad}${lsObj.name}`;
        }
        return lsStr;
    }

    static mkdir = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let newPath = this.resolvePath(args[0]);
        
        if(masterFileSystem.exists(newPath))
            throw new Error(`Directory ${newPath} already exists!`);
            
        // common.newFile(newName);
        masterFileSystem.mkdir(newPath);
        return "";
    }

    static touch = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let newPath = this.resolvePath(args[0]);
        
        if(masterFileSystem.exists(newPath))
            throw new Error(`File ${newPath} already exists!`);
            
        // common.newFile(newName);
        masterFileSystem.touch(newPath);
        return "";
    }

    static cp = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        let oldPath = this.resolvePath(args[0]);
        let oldName = oldPath.substring(oldPath.lastIndexOf("/")+1);
        let newPath = this.resolvePath(args[1]);

        if(newPath === oldPath) throw new Error(`${oldPath} ${newPath} are at the same location!`);
        
        // let oldObj = masterFileSystem.getItem(oldPath);
        let newObj = masterFileSystem.getItem(newPath);
        
        if(newObj && newObj.constructor === Directory) 
            masterFileSystem.cp(oldPath, pathJoin(newPath, oldName));
        else if(!newObj)
            masterFileSystem.cp(oldPath, newPath);
        else if(newObj && newObj.constructor === File)
            throw new Error(`File at ${newPath} already exists!`);
        else throw new Error(`Cannot copy directory at ${oldPath} to file at ${newPath}!`);

        return "";
    }

    static mv = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        this.cp(args);
        
        let oldPath = this.resolvePath(args[0]);
        // let newPath = this.resolvePath(args[1]);
        masterFileSystem.rm(oldPath);
        return "";
    }

    static rm = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let fileName = this.resolvePath(args[0]);
        masterFileSystem.rm(fileName);

        return "";

    }

    static cat = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return masterFileSystem.readText(this.resolvePath(args[0]));
    }

    static open = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let pagePath = this.resolvePath(args[0]);
        console.log(pageRegistry, pagePath);
        if(pageRegistry[pagePath]){
            let relPath = pagePath.replace(SysEnv.PUBLIC_FOLDER, "");
            window.open(relPath.replace(".html", ""), '_self', false);
        }
        else throw new Error(`Cannot open ${args[0]}.  This is not a valid page!`);

        return "";
    }

    static color = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        if(args[0].match(/#[0-9|a-f|A-F]{6}/) || args[0].match(/#[0-9|a-f|A-F]{3}/))
            this.ENV.COLOR = args[0]
        else throw new Error(`${args[0]} is not a valid color!`);

        return `Set terminal color to ${args[0]}`;
    }

    static exit = (args) => {
        if(args[0] === "--help") return "";
        closeTerminal();
        document.getElementById("terminalOutput").innerText = "";

        this.ENV.CLOSED = true;
        this.ENV.CLOSE_TIME = Date.now();

        return "";
    }

    static restart = (args) => {
        if(args[0] === "--help") return "";
        window.location.reload();
    }

    static reset = (args) => {
        if(args[0] === "--help") return "";
        delete localStorage.hierarchy;
    }
    static nuke = this.reset;

    static dir = (args) => {
        if(args[0] === "--help") return "";
        return "'dir: command not found (Wrong OS)";
    }

    static mir = (args) => {
        if(args[0] === "--help") return "";
        return "mir: command not found (Like 'dir' or the space station?)";
    }

    static launch = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [3]});
        if(valResult) return valResult;

        return "Insufficient permissions to cause armageddon (Did you try 'sudo'?)";
    }

    static sudo = (args) => {
        if(args[0] === "--help") return "";
        return "sudo is just bloat (Maybe try 'doas'?)";
    }

    static doas = (args) => {
        if(args[0] === "--help") return "";
        return "Did you mean to type 'does'?";
    }

    static haltingproblem = (args) => {
        if(args[0] === "--help") return "";
        haltingProblem();
        return "";
    }

    static eightball = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return eightBall();
    }

    static neofetch = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
    }

    static whoami = (args) => {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return "guest";
    }

    static void = (args) => {
        if(args[0] === "--help") return "";
        toVoid();
        return "";
    }

}

function parseCommand(rawString, env){
    Commands.ENV = env;

    let commandStrings = rawString.split(";");
    let cmdOutput = {result: "", env: Commands.ENV};;

    for(let commandString of commandStrings){
        if(!commandString) continue;

        try{
            let tokens = tokenizeCommand(commandString);
            resolveTokens(tokens);
            let command = tokens[0];
            let args = tokens.slice(1)

            if(!command) continue;

            let outPath = undefined;

            if(args.includes(">")){
                if(args.indexOf(">") === args.length-1)
                    throw new Error("You must include a file to write to!");

                outPath = resolvePath(env.CWD, args.slice(args.indexOf(">")+1)[0]);

                args = args.slice(0, args.indexOf(">"))
            }

            let commandFunc = Commands[command];
            if(!commandFunc) throw new Error(command+": command not found");

            let tmpOutput = commandFunc(args);

            if(outPath)
                masterFileSystem.writeText(outPath, tmpOutput);
            else
                cmdOutput.result += (cmdOutput.result ? "\n" : "") + tmpOutput;

        }catch(e){cmdOutput.result += (cmdOutput.result ? "\n" : "") + e.message;}

        cmdOutput.env = Commands.ENV;
    }

    return cmdOutput;
}


export {resolvePath, parseCommand, closeTerminal};