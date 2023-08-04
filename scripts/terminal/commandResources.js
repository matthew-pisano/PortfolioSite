import {SysEnv} from "../utils";
import {pathJoin} from "../fileSystem";


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
}

async function toVoid(){
    let terminalOutput = document.getElementById('terminalOutput');
    let voidStr = "I T - C O N S U M E S - A L L";
    let initLen = voidStr.length;
    await new Promise(resolve => setTimeout(resolve, 500));
    while(voidStr.length > 0){
        let next = voidStr.charAt(0);
        document.getElementById('terminalOutput').innerHTML += next !== " " ? next : "&nbsp;";
        if(voidStr.length === initLen)
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


class Help {

    static echo = "echo [*msg] - echoes each of the arguments on a new line";
    static cls = "";
    static clear = "";
    static pwd = "";
    static cd = "";
    static ls = "";
    static mkdir = "";
    static touch = "touch [fileName] - creates a file with the name given in the argument";
    static cp = "";
    static mv = "mv [oldName] [newName] - moves an existing file or directory to the new name";
    static rm = "rm [fileName] - removes the file or directory with the name given in the argument";
    static cat = "";
    static open = "";
    static color = "";
    static exit = "";
    static restart = "";
    static reset = "reset | nuke - Resets all persistent page data";
    static dir = "";
    static mir = "";
    static launch = "";
    static sudo = "";
    static doas = "";
    static haltingproblem = "";
    static eightball = "";
    static neofetch = "";
    static whoami = "";
    static void = "";

    static help = `--< Help Menu >--
${SysEnv.SHELL} (${SysEnv.ARCH})
These shell commands are defined internally.  Type 'help' to see this list.

help [options] - print this message
${this.echo}
${this.touch}
${this.mv}


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

    static secretHelp = `--Secret Help--
MAthesis SHell (mash) extended capabilities.
Sensitive documents are exposed to these commands.  Use with caution.

open [rick | poland | void | scp | babble] - opens the file with the given name
mir - ??
launch [warhead_id] [lat] [long] - ██████████████
haltingproblem - Computes the ideal turing machine to solve the halting problem
eightball [query] - ${eightBall()}`;
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

function resolveTokens(env, tokens) {
    for(let i=0; i<tokens.length; i++) {
        if(tokens[i][0] === "$") {
            let envVar = env[tokens[i].substring(1)];
            tokens[i] = envVar ? envVar : "";
        }
        if(i === 0 && tokens[i].includes("=")) {
            let assignTokens = tokens[i].split("=");
            if(!assignTokens[0]) throw new Error("Assignment requires a variable name before '='!");
            else if(assignTokens[0][0] === "$") throw new Error("Assignment requires naked variables (no '$')!");
            else if(!assignTokens[1]) delete env[assignTokens[0]];
            else env[assignTokens[0]] = assignTokens[1];

            tokens.splice(i, 1);
            i --;
            continue;
        }
    }
}

export { resolveTokens, resolvePath, tokenizeCommand, Help, eightBall, haltingProblem, toVoid, neofetch, closeTerminal };