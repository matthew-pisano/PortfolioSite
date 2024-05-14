import {SysEnv} from "../utils";
import {eightballResponses, hal9000, pacerTest, rmRoot} from "./strings";


/**
 * Class containing all the help information for the shell commands and a general help menu
 */
class Help {

    static help = "help | man [options] [command] - print a help menu";
    static man = Help.help;
    static echo = "echo [*msg] - echoes each of the arguments on a new line";
    static clear = "cls | clear - clears the output of the terminal";
    static cls = Help.clear;
    static pwd = "pwd - prints the working directory to the console";
    static cd = "cd [path] - changes the current working directory to the given path";
    static ls = "ls [-l|-a] [path] - gives information on the file or folder that matches the given path";
    static mkdir = "mkdir <path> - Creates a directory at the given path";
    static touch = "touch <fileName> - creates a file with the name given in the argument";
    static cp = "cp <oldPath> <newPath> - copies an existing file or directory to the new path";
    static mv = "mv <oldPath> <newPath> - moves an existing file or directory to the new path";
    static rm = "rm [-r|-f] <path> - removes the file or directory with the given path";
    static cat = "cat <filePath> - prints our the contents of the given file";
    static open = "open <fileName> - opens the file with the given name.  Only files with the execute permission can be opened";
    static edit = "edit <fileName> - opens the file with the given name for editing.  Only files with the write permission can be edited";
    static color = "color [color] - sets the terminal text color to the given hex color in the form #rrggbb or #rgb.  For example: #ff0000 or #f00";
    static resize = "resize <size> - resizes the terminal to the given height in pixels";
    static exit = "exit [code] - clears the terminal and closes it";
    static restart = "restart - Reloads the page";
    static reset = "reset | nuke - Resets all persistent page data";
    static nuke = Help.reset;
    static halsay = "halsay [msg] - Generates an ASCII image of Hal-9000 with the option of a custom message";
    static eightball = `eightball <query> - ${eightBall()}`;
    static _secretSentinel = null;
    static ng = "ng - Never Gonna...";
    static mann = "mann - Brought to you by TF Industries";
    static dir = "dir [path] - Why?";
    static mir = "mir - ??";
    static launch = "launch <warhead_id> <lat> <long> - ██████████████";
    static sudo = "sudo [command] - Elevates the user to root for a command";
    static doas = "doas [command] - Elevates the user to root for a command";
    static haltingproblem = "haltingproblem - Computes and prints out the optimal solution to the halting problem";
    static neofetch = "neofetch - displays system and software information";
    static whoami = "whoami - displays the current user";
    static void = "void - ██████████████";
    static admin = "admin - Administrator use only";
    static toucan = "toucan - le toucan has arrived";
    static pacer = "pacer - the FitnessGram™ Pacer Test is...";

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
async function *haltingProblem(){
    let dots = 7;

    await new Promise(resolve => setTimeout(resolve, 250));
    yield "Computing solution to halting problem";
    // Loading dots
    while(dots > 0){
        yield ".";
        await new Promise(resolve => setTimeout(resolve, 500));
        dots --;
    }

    yield "\nOperation completed successfully!";
    yield "\nPrinting solution...";
    await new Promise(resolve => setTimeout(resolve, 1500));
    yield "\nSegmentation fault (core dumped)";
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
 * Runs the FitnessGram™ Pacer Test
 */
async function *runPacer(){
    // Delay for the terminal to catch up
    await new Promise(resolve => setTimeout(resolve, 500));
    yield pacerTest;
    // Play the instruction audio
    await new Audio('/media/audio/pacer.mp3').play();
    await new Promise(resolve => setTimeout(resolve, 42000));

    let numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    let delays = [2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100];

    // Display the numbers and play the beep
    let beep = new Audio('/media/audio/pacerBeep.mp3');
    for(let i=0; i<numbers.length; i++){
        await new Promise(resolve => setTimeout(resolve, delays[i]));
        yield `\n[beep] ${numbers[i]}\n`;
        await beep.play();
    }

    yield "\nEnd Test";
}


/**
 * Removes all styles from an element and its children
 * @param el {HTMLElement|ChildNode} The element to remove styles from
 * @param delay {number} The delay between removing styles
 */
async function removeStyles(el, delay){
    await new Promise(resolve => setTimeout(resolve, delay));
    el.removeAttribute('style');
    el.setAttribute('src', '');
    el.setAttribute('class', '');
    el.style.display = "none";
    el.style.display = "";

    for (const x of el.childNodes) {
        if(x.nodeType === 1) await removeStyles(x);
    }
}



/**
 * Displays the root deletion message and displays the BSOD
 */
async function *rmRootMsg() {

    let lines = rmRoot.split("\n");
    for (let i = 0; i < lines.length; i++) {
        yield lines[i]+"\n";
        await new Promise(resolve => setTimeout(resolve, 20));
    }
    let pageElem = document.getElementsByClassName("page")[0];
    document.getElementById("menuDropHolder").remove();
    for (let statusElem of ["langStatus", "encodingStatus", "linesStatus", "sizeStatus", "itemStatus"]) {
        document.getElementById(statusElem).innerText = "???";
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    await removeStyles(document.documentElement, 300);

    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("sidebarContent").innerHTML = `<p style="color: red">ERROR: Could not read directory '${SysEnv.PUBLIC_FOLDER}'</p>`;
    await new Promise(resolve => setTimeout(resolve, 1000));
    pageElem.innerHTML = `<p style="color: red">ERROR: File not found</p>`;
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.document.documentElement.style.backgroundColor = "#010082";
    window.document.body.innerHTML = '<img src="/media/image/bsod.png" alt="bsod" style="width: 100%;"/>';
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

export { resolveTokens, tokenizeCommand, Help, eightBall, haltingProblem, hal, runPacer, rmRootMsg };