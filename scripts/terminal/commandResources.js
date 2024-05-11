import {SysEnv} from "../utils";
import {eightballResponses, hal9000} from "./strings";


/**
 * Class containing all the help information for the shell commands and a general help menu
 */
class Help {

    static help = "help | man [options] - print a help menu";
    static man = Help.help;
    static echo = "echo [*msg] - echoes each of the arguments on a new line";
    static clear = "cls | clear - clears the output of the terminal";
    static cls = Help.clear;
    static pwd = "pwd - prints the working directory to the console";
    static cd = "cd [path] - changes the current working directory to the given path";
    static ls = "ls [path] - gives information on the file or folder that matches the given path";
    static mkdir = "mkdir [path] - Creates a directory at the given path";
    static touch = "touch [fileName] - creates a file with the name given in the argument";
    static cp = "cp [oldPath] [newPath] - copies an existing file or directory to the new path";
    static mv = "mv [oldPath] [newPath] - moves an existing file or directory to the new path";
    static rm = "rm [-r|-rf] [path] - removes the file or directory with the given path";
    static cat = "cat [filePath] - prints our the contents of the given file";
    static open = "open [fileName] - opens the file with the given name.  Only files with the execute permission can be opened";
    static edit = "edit [fileName] - opens the file with the given name for editing.  Only files with the write permission can be edited";
    static color = "color [color] - sets the terminal text color to the given hex color in the form #rrggbb or #rgb.  For example: #ff0000 or #f00";
    static exit = "exit - clears the terminal and closes it";
    static restart = "restart - Reloads the page";
    static reset = "reset | nuke - Resets all persistent page data";
    static nuke = Help.reset;
    static halsay = "halsay [msg] - Generates an ASCII image of Hal-9000 with the option of a custom message";
    static eightball = `eightball [query] - ${eightBall()}`;
    static _secretSentinel = null;
    static ng = "ng - Never Gonna...";
    static mann = "mann - Brought to you by TF Industries";
    static dir = "dir - Why?";
    static mir = "mir - ??";
    static launch = "launch [warhead_id] [lat] [long] - ██████████████";
    static sudo = "sudo [command] - Elevates the user to root for a command";
    static doas = "doas [command] - Elevates the user to root for a command";
    static haltingproblem = "haltingproblem - Computes and prints out the optimal solution to the halting problem";
    static neofetch = "neofetch - displays system and software information";
    static whoami = "whoami - displays the current user";
    static void = "void - ██████████████";
    static admin = "admin - Administrator use only";

    /**
     * Aggregates all the help information into a single string
     * @return {string} The aggregated help information
     * @private
     */
    static _aggregateHelp() {
        let aggStr = "";
        let lastHelp = "";

        for(let key of Object.keys(Help)){
            if(key === "_secretSentinel") break;
            if(key.startsWith("_") || key.includes("Menu")) continue;
            if(Help[key] === lastHelp) continue;
            aggStr += Help[key]+"\n";
            lastHelp = Help[key];
        }
        return aggStr;
    }

    /**
     * Aggregates all the secret help information into a single string
     * @return {string} The aggregated secret help information
     * @private
     */
    static _aggregateSecretHelp() {
        let aggStr = "";
        let lastHelp = "";

        for(let key of Object.keys(Help)){
            if(key.startsWith("_") || key.includes("Menu")) continue;
            if(Help[key] === lastHelp) continue;
            aggStr += Help[key]+"\n";
            lastHelp = Help[key];
        }
        return aggStr;
    }

    /**
     * The general help menu for the shell
     * @type {string}
     */
    static helpMenu = `--< Help Menu >--
${SysEnv.SHELL} (${SysEnv.ARCH})
These shell commands are defined internally.  Type 'help' to see this list.  Type 'help [command]' to see more information about a specific command.
Use -f or --force to override all security checks.

${this._aggregateHelp()}`;

    /**
     * The secret help menu for the shell
     * @type {string}
     */
    static secretHelpMenu = `--Secret Help--
MAthesis SHell (mash) extended capabilities.
Sensitive documents are exposed to these commands.  Use with caution.

${this._aggregateSecretHelp()}`;

}


/**
 * Computes the solution to the halting problem...then segfaults
 */
async function haltingProblem(){
    let dots = 7;
    let terminalOutput = document.getElementById('terminalOutput');

    await new Promise(resolve => setTimeout(resolve, 250));
    terminalOutput.innerHTML += "Computing solution to halting problem";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    // Loading dots
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


/**
 * Generates a random response for the eightball command
 * @return {string} The random eightball response
 */
function eightBall(){
    let result = Math.floor(Math.random()*eightballResponses.length);
    return eightballResponses[result];
}


/**
 * Generates a message from Hal-9000
 * @param msg {string} The message to display
 * @return {string} The message from Hal-9000
 */
function hal(msg) {
    return hal9000.replace("{msg}", msg.replace("\n", ""));
}


/**
 * Tokenizes a command string into an array of tokens
 * @param command {string} The command string to tokenize
 * @return {string[]} The array of tokens
 */
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


/**
 * Resolves any environment variables or assignments in the tokens
 * @param env {object} The environment object
 * @param tokens {string[]} The array of tokens to resolve
 */
function resolveTokens(env, tokens) {
    for(let i=0; i<tokens.length; i++) {
        if(tokens[i][0] === "$") {
            let envVar = env[tokens[i].substring(1)];
            tokens[i] = envVar ? envVar : "";
        }
        else if(i === 0 && tokens[i].includes("=")) {
            let assignTokens = tokens[i].split("=");
            if(!assignTokens[0]) throw new Error("Assignment requires a variable name before '='!");
            else if(assignTokens[0][0] === "$") throw new Error("Assignment requires naked variables (no '$')!");
            else if(!assignTokens[1]) delete env[assignTokens[0]];
            else {
                // Resolve any environment variables in the assignment
                let assigned = [assignTokens[1]];
                resolveTokens(env, assigned);
                env[assignTokens[0]] = assigned[0];
            }

            tokens.splice(i, 1);
            i --;
        }
    }
}

export { resolveTokens, tokenizeCommand, Help, eightBall, haltingProblem, hal };