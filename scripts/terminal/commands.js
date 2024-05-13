import { Perms, SysEnv } from '../utils';
import { pathJoin } from '../fileSystem/fileSystem';
import { masterFileSystem, pageRegistry } from '../fileSystem/buildfs';
import {resolveTokens, tokenizeCommand, Help, eightBall, haltingProblem, hal, runPacer, rmRootMsg} from './commandResources';
import {tfLogo, neofetch, system32, letoucan, pacerTest} from './strings';
import toVoid from "./void";
import {Directory, File} from "../fileSystem/fileSystemObjects";
import $ from "jquery";


/**
 * The Commands class contains all the commands that can be executed in the terminal
 */
class Commands {

    /**
     * The environment object that contains the current working directory and other environment variables
     * @type {object}
     */
    static ENV = {};

    /**
     * Resolves a path to an absolute path
     * @param path {string} The path to resolve
     * @param cwd {string} The current working directory
     * @return {string} The resolved path
     * @private
     */
    static resolvePath(path, cwd = this.ENV.CWD){
        if(path[0] === "~") path = path.replace("~", SysEnv.HOME_FOLDER);
        return pathJoin(cwd, path).replace("//", "/");
    }

    /**
     * Validates the number of arguments passed to a command
     * @param args {string[]} The arguments passed to the command
     * @param val {object} The validation specification
     * @return {string} An error message if the validation fails, otherwise an empty string
     * @private
     */
    static _validateArgs(args, val) {
        if (val.nargs !== undefined && !val.nargs.includes(args.length))
            return `Error: only ${val.nargs} arguments are accepted, found ${args.length} (${args})`;

        return "";
    }

    /**
     * Echoes the arguments passed to the command
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The echoed arguments
     */
    static async *echo(args) {
        if (args[0] === "--help") {yield Help.echo; return;}

        for (let i = 0; i < args.length; i++) yield args[i] + "\n";
    }

    /**
     * Clears the terminal output
     * @param args {string[]} The arguments passed to the command
     */
    static async *clear(args) {
        if (args[0] === "--help") {yield Help.clear; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        document.getElementById("terminalOutput").innerText = "";
    }

    /**
     * Prints the current working directory
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The current working directory
     */
    static async *pwd(args) {
        if (args[0] === "--help") {yield Help.pwd; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield this.ENV.CWD;
    }

    /**
     * Prints the help information for a command or the help menu
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The help information
     */
    static async *help(args) {
        if (Object.getOwnPropertyNames(this).includes(args[0]) && args[0] in Help) {yield Help[args[0]]; return;}
        else if(Object.getOwnPropertyNames(this).includes(args[0])) {yield "No help information available"; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        // Secret help menu
        if (args.length > 0 && (args[0] === "-f" || args[0] === "--force")) yield Help.secretHelpMenu;
        else yield Help.helpMenu;
    }

    /**
     * Changes the current working directory
     * @param args {string[]} The arguments passed to the command
     */
    static async *cd(args) {
        if (args[0] === "--help") {yield Help.cd; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        // If no arguments are passed, change to the home directory
        if (args.length === 0) {
            this.ENV.CWD = SysEnv.HOME_FOLDER;
            return;
        }
        args[0] = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.getItem(args[0]);

        if (!targetItem)
            throw new Error(`Cannot enter directory.  Directory at ${args[0]} does not exist!`);
        else if (targetItem.constructor === File)
            throw new Error(`Cannot enter ${args[0]}, it is a file!`);
        else if (!targetItem.permission.includes(Perms.EXECUTE)) {
            // Secret admin access
            if (args[0] === "/home/admin") {
                window.location.href = "/admin";
                throw new Error(`Verifying credentials for ${args[0]}...`);
            }
            throw new Error(`Cannot enter ${args[0]}.  Permission denied!`);
        }

        // Change the current working directory
        this.ENV.CWD = args[0];
    }

    /**
     * Lists the files and directories in the current directory
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The list of files and directories
     */
    static async *ls(args) {
        if (args[0] === "--help") {yield Help.ls; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1, 2]});
        if (valResult) throw new Error(valResult);

        let pathArg = args.length > 1 ? args[1] : args.length > 0 ? args[0] : "";
        let options = args.length > 1 ? args[0] : "";
        if (args.length === 1 && pathArg.startsWith("-")) {
            options = pathArg;
            pathArg = "";
        }
        if (!options.startsWith("-")) options = "";
        let showHidden = options.includes("a");
        let showDetails = options.includes("l");

        // If no arguments are passed, list the current directory
        if (pathArg.length === 0) pathArg = this.ENV.CWD;

        let path = this.resolvePath(pathArg);
        let lsObj = masterFileSystem.getItem(path);
        if (!lsObj) throw new Error(`Cannot list file or directory.  File or directory at ${pathArg} does not exist!`);

        let pad = "\xa0\xa0";
        let paddedSize = `${lsObj.size()}`.padStart(6, "\xa0");

        if (lsObj.constructor === Directory) {
            if (!lsObj.permission.includes(Perms.READ)) throw new Error(`Cannot list ${path}.  Permission denied!`);

            // Gather the information for each file and directory in the directory
            let list = [];
            for (let child of lsObj.subTree) {
                if (child.constructor === File) {
                    let fileInfo = (await this.ls([options, pathJoin(path, child.name)]).next()).value;
                    list.push([fileInfo, child.name]);
                    continue;
                }

                let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                if (showDetails) list.push([`d${child.permission}${pad}${paddedSize}${pad}${modStr}${pad}${child.name}`, child.name]);
                else list.push([child.name, child.name]);
            }

            list.sort((a, b) => a[1].localeCompare(b[1]));

            if (showDetails) yield "total " + lsObj.subTree.length + "\n";

            // Add the parent and current directory to the list
            if (path !== "/") {
                let modStr = new Date(Date.now()).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                if (showDetails) list.unshift([`drwx${pad}${paddedSize}${pad}${modStr}${pad}.`, "."]);
                else list.unshift([".", "."]);
                if (showDetails) list.unshift([`drwx${pad}${paddedSize}${pad}${modStr}${pad}..`, ".."]);
                else list.unshift(["..", ".."]);
            }

            // Add the information for each file and directory to the list
            for (let entry of list) {
                if(!showHidden && entry[1].startsWith(".")) continue;
                yield entry[0] + (showDetails ? "\n" : pad);
            }
        } else {
            let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
            modStr = modStr.substring(0, modStr.lastIndexOf(":"));
            if (!lsObj.permission.includes(Perms.READ)) paddedSize = "?".padStart(6, "\xa0");

            if (showDetails) yield `-${lsObj.permission}${pad}${paddedSize}${pad}${modStr}${pad}${lsObj.name}`;
            else yield lsObj.name;
        }
    }
    static async *ll(args) {yield* await this.ls(["-l", ...args]);}
    static async *la(args) {yield* await this.ls(["-la", ...args]);}

    /**
     * Makes a new directory
     * @param args {string[]} The arguments passed to the command
     */
    static async *mkdir(args) {
        if (args[0] === "--help") {yield Help.mkdir; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.mkdir(newPath);
    }

    /**
     * Creates a new, empty file
     * @param args {string[]} The arguments passed to the command
     */
    static async *touch(args) {
        if (args[0] === "--help") {yield Help.touch; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.touch(newPath);
    }

    /**
     * Copies a file or directory to a new location
     * @param args {string[]} The arguments passed to the command
     */
    static async *cp(args) {
        if (args[0] === "--help") {yield Help.cp; return;}
        let valResult = this._validateArgs(args, {nargs: [2]});
        if (valResult) throw new Error(valResult);

        let oldPath = this.resolvePath(args[0]);
        let oldName = oldPath.substring(oldPath.lastIndexOf("/") + 1);
        let newPath = this.resolvePath(args[1]);

        let newObj = masterFileSystem.getItem(newPath);

        if (newObj && newObj.constructor === Directory)
            masterFileSystem.cp(oldPath, pathJoin(newPath, oldName));
        else if (!newObj)
            masterFileSystem.cp(oldPath, newPath);
        else throw new Error(`Cannot copy directory at ${oldPath} to file at ${newPath}!`);
    }

    /**
     * Moves a file or directory to a new location
     * @param args {string[]} The arguments passed to the command
     */
    static async *mv(args) {
        if (args[0] === "--help") {yield Help.mv; return;}
        let valResult = this._validateArgs(args, {nargs: [2]});
        if (valResult) throw new Error(valResult);

        this.cp(args);

        let oldPath = this.resolvePath(args[0]);
        masterFileSystem.rm(oldPath);
    }

    /**
     * Removes a file or directory
     * @param args {string[]} The arguments passed to the command
     */
    static async *rm(args) {
        if (args[0] === "--help") {yield Help.rm; return;}
        let valResult = this._validateArgs(args, {nargs: [1, 2]});
        if (valResult) throw new Error(valResult);

        let pathArg = args.length > 1 ? args[1] : args[0];

        if (pathArg.replace(/\\/g, "/") === "C:/Windows/System32")
            throw new Error(system32);

        let fileName = this.resolvePath(pathArg);
        let options = args.length > 1 ? args[0] : "";

        // Check if the root directory is being removed and if the -rf option is used
        if (fileName === "/" && (["-rf", "-fr"].includes(options))) {
            yield* await rmRootMsg();
            return;
        } else if (fileName === "/")
            throw new Error(`Permission denied for path '/'!  Use -rf to force.`);

        masterFileSystem.rm(fileName, options);
    }

    /**
     * Reads the contents of a file
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The contents of the file
     */
    static async *cat(args) {
        if (args[0] === "--help") {yield Help.cat; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        yield masterFileSystem.readText(this.resolvePath(args[0]));
    }

    /**
     * Opens a file as an HTML page
     * @param args {string[]} The arguments passed to the command
     */
    static async *open(args) {
        if (args[0] === "--help") {yield Help.open; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (pageRegistry[pagePath]) {
            let relPath = pagePath.replace(SysEnv.PUBLIC_FOLDER, "");
            window.open(relPath.replace(".html", ""), '_self', false);
        }
        else if (!masterFileSystem.exists(pagePath)) throw new Error(`Cannot open file.  File at ${args[0]} does not exist!`);
        else if (currentFile.constructor === Directory) throw new Error(`Cannot open a directory!`);
        else if (currentFile.permission.includes(Perms.EXECUTE)) window.open(`/display?file=${pagePath}`, '_self', false);
        else throw new Error(`Insufficient permissions to open ${args[0]}!`);
    }

    /**
     * Edits a text file in the editor
     * @param args {string[]} The arguments passed to the command
     */
    static async *edit(args) {
        if (args[0] === "--help") {yield Help.edit; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (!masterFileSystem.exists(pagePath)) throw new Error(`Cannot edit file.  File at ${args[0]} does not exist!`);
        else if (currentFile.constructor === Directory) throw new Error(`Cannot edit a directory!`);
        else if (currentFile.permission.includes(Perms.WRITE)) window.location.replace(`/edit?file=${pagePath}`);
        else throw new Error(`Insufficient permissions to edit ${args[0]}!`);
    }

    /**
     * Changes the color of the terminal foreground text
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The color change message
     */
    static async *color(args) {
        if (args[0] === "--help") {yield Help.color; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        if (args.length === 0) {
            this.ENV.COLOR = "azure";
            return;
        }

        if (args[0].match(/#[0-9|a-f|A-F]{6}/) || args[0].match(/#[0-9|a-f|A-F]{3}/))
            this.ENV.COLOR = args[0];
        else throw new Error(`${args[0]} is not a valid color.  Use --help for more information.`);
    }

    static async *resize(args) {
        if (args[0] === "--help") {yield Help.resize; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let height = parseInt(args[0]);
        if (isNaN(height)) throw new Error(`Invalid height: ${args[0]}`);

        document.getElementById('terminal').dispatchEvent(new CustomEvent("openTo", {detail: height}));
    }

    /**
     * Clears the terminal and exits the terminal
     * @param args {string[]} The arguments passed to the command
     */
    static async *exit(args) {
        if (args[0] === "--help") {yield Help.exit; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        document.getElementById('terminal').style.display = "none";
        document.getElementById("terminalOutput").innerText = "";
        document.getElementById("terminalClose").style.visibility = "hidden";

        this.ENV.CLOSED = true;
        this.ENV.CLOSE_TIME = Date.now();
    }

    /**
     * Reloads the current page
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The reload message
     */
    static async *restart(args) {
        if (args[0] === "--help") {yield Help.restart; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield "Re-provisioning system (keeping state).  Standby...";

        await new Promise(r => setTimeout(r, 1000));
        window.location.reload();
    }

    /**
     * Resets the terminal state by clearing the local browser storage and reloads the page
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The reset message
     */
    static async *reset(args) {
        if (args[0] === "--help") {yield Help.reset; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        delete localStorage.hierarchy;

        yield "Re-provisioning system (clearing state).  Standby...";

        await new Promise(r => setTimeout(r, 1000));
        window.location.href = "/";
    }

    /**
     * Rickrolls the user by redirecting to the rickroll video
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The rickroll message
     */
    static async *ng(args) {
        if (args[0] === "--help") {yield Help.ng; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield "ng (never gonna) - give you up";

        await new Promise(r => setTimeout(r, 1000));
        window.location.href = "/media/video/rick.mp4";
    }

    /**
     * Displays the Team Fortress 2 logo
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The TF2 logo
     */
    static async *mann(args) {
        if (args[0] === "--help") {yield Help.mann; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield tfLogo;
    }

    /**
     * Displays a message from HAL 9000
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The HAL message
     */
    static async *halsay(args) {
        if (args[0] === "--help") {yield Help.halsay; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        yield hal(args.length > 0 ? args[0] : "I'm sorry Dave..." );
    }

    /**
     * Displays the DIR joke message
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The DIR joke message
     */
    static async *dir(args) {
        if (args[0] === "--help") {yield Help.dir; return;}
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        yield "dir: command not found (Wrong OS)";
    }

    /**
     * Displays the MIR joke message
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The MIR joke message
     */
    static async *mir(args) {
        if (args[0] === "--help") {yield Help.mir; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield "mir: command not found (Like 'dir' or like the space station?)";
    }

    /**
     * Launches the armageddon sequence
     * @param args {string[]} The arguments passed to the command
     */
    static async *launch(args) {
        if (args[0] === "--help") {yield Help.launch; return;}
        let valResult = this._validateArgs(args, {nargs: [3]});
        if (valResult) throw new Error(valResult);

        throw new Error("Insufficient permissions to cause armageddon (Did you try 'sudo'?)");
    }

    /**
     * Displays SUDO joke message
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The SUDO joke message
     */
    static async *sudo(args) {
        if (args[0] === "--help") {yield Help.sudo; return;}
        yield "sudo is just bloat (Maybe try 'doas'?)";
    }

    /**
     * Displays the DOAS joke message
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The DOAS joke message
     */
    static async *doas(args) {
        if (args[0] === "--help") {yield Help.doas; return;}
        yield "Did you mean to type 'does'?";
    }

    /**
     * Computes the solution to the halting problem...then segfaults
     * @param args {string[]} The arguments passed to the command
     */
    static async *haltingproblem(args) {
        if (args[0] === "--help") {yield Help.haltingproblem; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield* await haltingProblem();
    }

    /**
     * Displays a magic 8-ball response
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The 8-ball response
     */
    static async *eightball(args) {
        if (args[0] === "--help") {yield Help.eightball; return;}
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        yield eightBall();
    }

    /**
     * Displays the toucan ASCII art
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The toucan ASCII art
     */
    static async *toucan(args) {
        if (args[0] === "--help") {yield Help.toucan; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield letoucan;
    }

    /**
     * Runs the pacer test
     * @param args {string[]} The arguments passed to the command
     */
    static async *pacer(args) {
        if (args[0] === "--help") {yield Help.pacer; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield* await runPacer();
    }

    /**
     * Displays the neofetch system information output
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The neofetch output
     */
    static async *neofetch(args) {
        if (args[0] === "--help") {yield Help.neofetch; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
    }

    /**
     * Displays the current user
     * @param args {string[]} The arguments passed to the command
     * @yield {string} The current user
     */
    static async *whoami(args) {
        if (args[0] === "--help") {yield Help.whoami; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield SysEnv.USER;
    }

    /**
     * Sends the user to the void
     * @param args {string[]} The arguments passed to the command
     */
    static async *void(args) {
        if (args[0] === "--help") {yield Help.void; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        yield* await toVoid();
    }

    /**
     * Sends the user to the admin page
     * @param args {string[]} The arguments passed to the command
     */
    static async *admin(args) {
        if (args[0] === "--help") {yield Help.admin; return;}
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        window.location.href = "/admin";
    }

    /**
     * Parses a raw string as a command and arguments, executes them, then yields the output and updated environment
     * @param rawString {string} The raw command string
     * @param env {object} The environment object
     * @yield {Promise<{result: string, env: object}>} The command output and updated environment
     */
    static async *parseCommand(rawString, env) {
        this.ENV = env;

        let commandStrings = rawString.split(";");

        // Execute each command in the command string, delimited by semicolons
        for (let commandString of commandStrings) {
            if (!commandString) continue;

            try {
                let tokens = tokenizeCommand(commandString);
                resolveTokens(this.ENV, tokens);

                // Split the command string into the command and its arguments
                let command = tokens[0];
                if(command === "?") command = "help";

                let args = tokens.slice(1);
                if (!command) continue;

                let outPath;

                // Check if the command string includes a file to redirect output to
                if (args.includes(">")) {
                    if (args.indexOf(">") === args.length - 1)
                        throw new Error("You must include a file to write to!");

                    outPath = this.resolvePath(args.slice(args.indexOf(">") + 1)[0], env.CWD);
                    args = args.slice(0, args.indexOf(">"));
                }

                // Get the function for the command based on the command string
                let commandFunc = this[command];

                if (!commandFunc || command.startsWith("_")) throw new Error(command + ": command not found");
                // Bind the command function to the Commands object
                commandFunc = commandFunc.bind(this);
                // Clear to output file contents if given
                if (outPath) masterFileSystem.writeText(outPath, "");

                for await (let line of commandFunc(args)) {
                    // Write the output to the output file if one was specified, otherwise append it to the command output
                    if (outPath) masterFileSystem.writeText(outPath, line, true);
                    else yield line;
                }

            } catch (e) {
                // Append the error message to the command output
                yield e.message;
            }
        }
    }
}

// Add aliases for commands
Commands.cls = Commands.clear;
Commands.man = Commands.help;
Commands.nuke = Commands.reset;

export {Commands};