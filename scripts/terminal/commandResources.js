import {SysEnv} from "../utils";
import {pathJoin} from "../fileSystem/fileSystem";
import $ from "jquery";


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
MMMMMMWl       lWMMMMMMWl       lWMMMMMM
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
    $('#terminalBottom').invisible();
    $('#terminalClose').invisible();
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

function tfLogo() {
    return `
                #####                   
           ##########    #####          
        ((((((((((((    ((((((###       
      ((((((((((((((    (((((((((((     
    ((((((((((((((((    ((((((((((///   
   ((((((((((((((       (((((((((/////  
                          ((((/*******  
   ((((,                           ***  
   //////******                         
   ***************      ***********,,,  
    *************.   ***,,,,,,,,,,,,,   
      *******,,,,    ,,,,,,,,,,,,,,     
        ,,,,,,,,,    ,,,,,,,,,,,,       
           ,,,,,    ,,,,,,,,,.          
                    .... `.replace(/ /g, "\xa0");
}

function hal(msg) {
    return `
 _______________
|===============|
|: .---------. :|
|: | HAL-9000| :|
|: '---------' :|    
|:             :| -- <${msg.replace("\n", "")}>
|:             :|    
|:             :|
|:     __      :|
|:  ,\`    \`.   :|
|: :   (o)  :  :|
|:  \`. __ ,\`   :|
|:             :|
|:_____________:|
|:=============:|
|:*%*%*%*%*%*%*:|
|:%*%*%*%*%*%*%:|
|:*%*%*%*%*%*%*:|
|:%*%*%*%*%*%*%:|
'==============='`.replace(/ /g, "\xa0");
}

class Help {

    static echo = "echo [*msg] - echoes each of the arguments on a new line";
    static clear = "cls | clear - clears the output of the terminal";
    static pwd = "pwd - prints the working directory to the console";
    static cd = "cd [path] - changes the current working directory to the given path";
    static ls = "ls [path] - gives information on the file or folder that matches the given path";
    static mkdir = "mkdir [path] - Creates a directory at the given path";
    static touch = "touch [fileName] - creates a file with the name given in the argument";
    static cp = "cp [oldPath] [newPath] - copies an existing file or directory to the new path";
    static mv = "mv [oldPath] [newPath] - moves an existing file or directory to the new path";
    static rm = "rm [path] - removes the file or directory with the given path";
    static cat = "cat [filePath] - prints our the contents of the given file";
    static open = "open [fileName] - opens the file with the given name.  Only files with the execute permission can be opened";
    static color = "color [color] - sets the terminal text color to the given color in the form #rrggbb or #rgb";
    static exit = "exit - clears the terminal and closes it";
    static restart = "restart - Reloads the page";
    static reset = "reset | nuke - Resets all persistent page data";
    static mann = "mann - Brought to you by TF Industries";
    static halsay = "halsay [msg] - Generates an ASCII image of Hal-9000 with the option of a custom message";
    static secretSentinel = null;
    static dir = "dir - Why?";
    static mir = "mir - ??";
    static launch = "launch [warhead_id] [lat] [long] - ██████████████";
    static sudo = "sudo [command] - Elevates the user to root for a command";
    static doas = "doas [command] - Elevates the user to root for a command";
    static haltingproblem = "haltingproblem - Computes and prints out the optimal solution to the halting problem";
    static eightball = `eightball [query] - ${eightBall()}`;
    static neofetch = "neofetch - displays system and software information";
    static whoami = "whoami - displays the current user";
    static void = "void - ██████████████";
    static admin = "admin - Administrator use only";

    static aggregateHelp() {
        let aggStr = "";
        for(let key of Object.keys(Help)){
            if(["aggregateHelp", "help", "aggregateSecretHelp"].includes(key)) continue;
            if(key === "secretSentinel") break;
            aggStr += Help[key]+"\n";
        }
        return aggStr;
    }
    static aggregateSecretHelp() {
        let aggStr = "";
        for(let key of Object.keys(Help)){
            if(["aggregateHelp", "help", "aggregateSecretHelp", "secretSentinel"].includes(key)) continue;
            aggStr += Help[key]+"\n";
        }
        return aggStr;
    }
    static help = `--< Help Menu >--
${SysEnv.SHELL} (${SysEnv.ARCH})
These shell commands are defined internally.  Type 'help' to see this list.

help [options] - print this message
${this.aggregateHelp()}`;

    static secretHelp = `--Secret Help--
MAthesis SHell (mash) extended capabilities.
Sensitive documents are exposed to these commands.  Use with caution.

${this.aggregateSecretHelp()}`;

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

export { resolveTokens, resolvePath, tokenizeCommand, Help, eightBall, haltingProblem, neofetch, closeTerminal, tfLogo, hal };