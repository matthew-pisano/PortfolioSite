import { Perms, SysEnv } from '../utils';
import { pathJoin } from '../fileSystem/fileSystem';
import { masterFileSystem, pageRegistry } from '../fileSystem/buildfs';
import {resolveTokens, tokenizeCommand, Help, eightBall, haltingProblem, hal } from './commandResources';
import { tfLogo, neofetch } from './strings';
import toVoid from "./void";
import {Directory, File} from "../fileSystem/fileSystemObjects";
import $ from "jquery";


/**
 * The Commands class contains all the commands that can be executed in the terminal
 */
class Commands {

    /**
     * The environment object that contains the current working directory and other environment variables
     * @type {Object}
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
     * @param val {Object} The validation specification
     * @return {string} An error message if the validation fails, otherwise an empty string
     * @private
     */
    static _validateArgs(args, val) {
        if (val.nargs !== undefined && !val.nargs.includes(args.length))
            return `Only ${val.nargs} arguments are accepted, found ${args.length}`;

        return "";
    }

    /**
     * Echoes the arguments passed to the command
     * @param args {string[]} The arguments passed to the command
     * @return {string} The echoed arguments
     */
    static echo(args) {
        if (args[0] === "--help") return Help.echo;

        let echoed = "";
        for (let i = 0; i < args.length; i++) echoed += args[i] + "\n";
        return echoed;
    }

    /**
     * Clears the terminal output
     * @param args {string[]} The arguments passed to the command
     */
    static clear(args) {
        if (args[0] === "--help") return Help.clear;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        document.getElementById("terminalOutput").innerText = "";
        return "";
    }

    /**
     * Prints the current working directory
     * @param args {string[]} The arguments passed to the command
     * @return {string} The current working directory
     */
    static pwd(args) {
        if (args[0] === "--help") return Help.pwd;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        return this.ENV.CWD;
    }

    /**
     * Prints the help information for a command or the help menu
     * @param args {string[]} The arguments passed to the command
     * @return {string} The help information
     */
    static help(args) {
        if (Object.getOwnPropertyNames(this).includes(args[0]) && args[0] in Help) return Help[args[0]];
        else if(Object.getOwnPropertyNames(this).includes(args[0])) return "No help information available";
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        // Secret help menu
        if (args.length > 0 && (args[0] === "-f" || args[0] === "--force"))
            return Help.secretHelpMenu;

        return Help.helpMenu;
    }

    /**
     * Changes the current working directory
     * @param args {string[]} The arguments passed to the command
     */
    static cd(args) {
        if (args[0] === "--help") return Help.cd;
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        // If no arguments are passed, change to the home directory
        if (args.length === 0) {
            this.ENV.CWD = SysEnv.HOME_FOLDER;
            return "";
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
        return "";
    }

    /**
     * Lists the files and directories in the current directory
     * @param args {string[]} The arguments passed to the command
     * @return {string} The list of files and directories
     */
    static ls(args) {
        if (args[0] === "--help") return Help.ls;
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        // If no arguments are passed, list the current directory
        if (args.length === 0) args = [this.ENV.CWD];

        let path = this.resolvePath(args[0]);
        let lsObj = masterFileSystem.getItem(path);
        if (!lsObj) throw new Error(`Cannot list file or directory.  File or directory at ${args[0]} does not exist!`);

        let pad = "\xa0\xa0";
        let paddedSize = `${lsObj.size()}`.padStart(6, "\xa0");
        let lsStr;

        if (lsObj.constructor === Directory) {
            if (!lsObj.permission.includes(Perms.READ)) throw new Error(`Cannot list ${path}.  Permission denied!`);

            // Gather the information for each file and directory in the directory
            let list = [];
            for (let child of lsObj.subTree) {
                if (child.constructor === File) {
                    list.push([this.ls([pathJoin(path, child.name)]), child.name]);
                    continue;
                }

                let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                list.push([`d${child.permission}${pad}${paddedSize}${pad}${modStr}${pad}${child.name}`, child.name]);
            }

            list.sort((a, b) => a[1].localeCompare(b[1]));

            lsStr = "total " + lsObj.subTree.length + "\n";

            // Add the parent and current directory to the list
            if (path !== "/") {
                let modStr = new Date(Date.now()).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                lsStr += `drwx${pad}${paddedSize}${pad}${modStr}${pad}.\n`;
                lsStr += `drwx${pad}${paddedSize}${pad}${modStr}${pad}..\n`;
            }

            // Add the information for each file and directory to the list
            for (let entry of list)
                lsStr += entry[0] + "\n";
        } else {
            let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
            modStr = modStr.substring(0, modStr.lastIndexOf(":"));
            if (!lsObj.permission.includes(Perms.READ)) paddedSize = "?".padStart(6, "\xa0");

            lsStr = `-${lsObj.permission}${pad}${paddedSize}${pad}${modStr}${pad}${lsObj.name}`;
        }
        return lsStr;
    }

    /**
     * Makes a new directory
     * @param args {string[]} The arguments passed to the command
     */
    static mkdir(args) {
        if (args[0] === "--help") return Help.mkdir;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.mkdir(newPath);
        return "";
    }

    /**
     * Creates a new, empty file
     * @param args {string[]} The arguments passed to the command
     */
    static touch(args) {
        if (args[0] === "--help") return Help.touch;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.touch(newPath);
        return "";
    }

    /**
     * Copies a file or directory to a new location
     * @param args {string[]} The arguments passed to the command
     */
    static cp(args) {
        if (args[0] === "--help") return Help.cp;
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

        return "";
    }

    /**
     * Moves a file or directory to a new location
     * @param args {string[]} The arguments passed to the command
     */
    static mv(args) {
        if (args[0] === "--help") return Help.mv;
        let valResult = this._validateArgs(args, {nargs: [2]});
        if (valResult) throw new Error(valResult);

        this.cp(args);

        let oldPath = this.resolvePath(args[0]);
        masterFileSystem.rm(oldPath);
        return "";
    }

    /**
     * Removes a file or directory
     * @param args {string[]} The arguments passed to the command
     */
    static rm(args) {
        if (args[0] === "--help") return Help.rm;
        let valResult = this._validateArgs(args, {nargs: [1, 2]});
        if (valResult) throw new Error(valResult);

        let pathArg = args.length > 1 ? args[1] : args[0];
        let fileName = this.resolvePath(pathArg);
        masterFileSystem.rm(fileName, args.length > 1 ? args[0] : "");

        return "";
    }

    /**
     * Reads the contents of a file
     * @param args {string[]} The arguments passed to the command
     * @return {string} The contents of the file
     */
    static cat(args) {
        if (args[0] === "--help") return Help.cat;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        return masterFileSystem.readText(this.resolvePath(args[0]));
    }

    /**
     * Opens a file as an HTML page
     * @param args {string[]} The arguments passed to the command
     */
    static open(args) {
        if (args[0] === "--help") return Help.open;
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
        return "";
    }

    /**
     * Edits a text file in the editor
     * @param args {string[]} The arguments passed to the command
     */
    static edit(args) {
        if (args[0] === "--help") return Help.edit;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (!masterFileSystem.exists(pagePath)) throw new Error(`Cannot edit file.  File at ${args[0]} does not exist!`);
        else if (currentFile.constructor === Directory) throw new Error(`Cannot edit a directory!`);
        else if (currentFile.permission.includes(Perms.WRITE)) window.location.replace(`/edit?file=${pagePath}`);
        else throw new Error(`Insufficient permissions to edit ${args[0]}!`);
        return "";
    }

    /**
     * Changes the color of the terminal foreground text
     * @param args {string[]} The arguments passed to the command
     * @return {string} The color change message
     */
    static color(args) {
        if (args[0] === "--help") return Help.color;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        if (args[0].match(/#[0-9|a-f|A-F]{6}/) || args[0].match(/#[0-9|a-f|A-F]{3}/))
            this.ENV.COLOR = args[0];
        else throw new Error(`${args[0]} is not a valid color!`);

        return `Set terminal color to ${args[0]}`;
    }

    /**
     * Clears the terminal and exits the terminal
     * @param args {string[]} The arguments passed to the command
     */
    static exit(args) {
        if (args[0] === "--help") return Help.exit;
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        console.log("Closing terminal...");
        document.getElementById('terminal').style.height = `30px`;
        document.getElementById('terminalOutput').style.height = `0px`;
        $('#terminalBottom').invisible();
        $('#terminalClose').invisible();
        document.getElementById("terminalOutput").innerText = "";

        this.ENV.CLOSED = true;
        this.ENV.CLOSE_TIME = Date.now();

        return "";
    }

    /**
     * Reloads the current page
     * @param args {string[]} The arguments passed to the command
     * @return {string} The reload message
     */
    static restart(args) {
        if (args[0] === "--help") return Help.restart;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        (async () => {
            await new Promise(r => setTimeout(r, 1000));
            window.location.reload();
        })();
        return "Re-provisioning system (keeping state).  Standby...";
    }

    /**
     * Resets the terminal state by clearing the local browser storage and reloads the page
     * @param args {string[]} The arguments passed to the command
     * @return {string} The reset message
     */
    static reset(args) {
        if (args[0] === "--help") return Help.reset;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        delete localStorage.hierarchy;
        (async () => {
            await new Promise(r => setTimeout(r, 1000));
            window.location.reload();
        })();
        return "Re-provisioning system (clearing state).  Standby...";
    }

    /**
     * Rickrolls the user by redirecting to the rickroll video
     * @param args {string[]} The arguments passed to the command
     * @return {string} The rickroll message
     */
    static ng(args) {
        if (args[0] === "--help") return Help.ng;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        (async () => {
            await new Promise(r => setTimeout(r, 1000));
            window.location.replace("/media/video/rick.mp4");
        })();

        return "ng (never gonna) - give you up";
    }

    /**
     * Displays the Team Fortress 2 logo
     * @param args {string[]} The arguments passed to the command
     * @return {string} The TF2 logo
     */
    static mann(args) {
        if (args[0] === "--help") return Help.mann;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        return tfLogo;
    }

    /**
     * Displays a message from HAL 9000
     * @param args {string[]} The arguments passed to the command
     * @return {string} The HAL message
     */
    static halsay(args) {
        if (args[0] === "--help") return Help.halsay;
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        return hal(args.length > 0 ? args[0] : "I'm sorry Dave..." );
    }

    /**
     * Displays the DIR joke message
     * @param args {string[]} The arguments passed to the command
     * @return {string} The DIR joke message
     */
    static dir(args) {
        if (args[0] === "--help") return Help.dir;
        let valResult = this._validateArgs(args, {nargs: [0, 1]});
        if (valResult) throw new Error(valResult);

        return "dir: command not found (Wrong OS)";
    }

    /**
     * Displays the MIR joke message
     * @param args {string[]} The arguments passed to the command
     * @return {string} The MIR joke message
     */
    static mir(args) {
        if (args[0] === "--help") return Help.mir;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        return "mir: command not found (Like 'dir' or like the space station?)";
    }

    /**
     * Launches the armageddon sequence
     * @param args {string[]} The arguments passed to the command
     */
    static launch(args) {
        if (args[0] === "--help") return Help.launch;
        let valResult = this._validateArgs(args, {nargs: [3]});
        if (valResult) throw new Error(valResult);

        throw new Error("Insufficient permissions to cause armageddon (Did you try 'sudo'?)");
    }

    /**
     * Displays SUDO joke message
     * @param args {string[]} The arguments passed to the command
     * @return {string} The SUDO joke message
     */
    static sudo(args) {
        if (args[0] === "--help") return Help.sudo;
        return "sudo is just bloat (Maybe try 'doas'?)";
    }

    /**
     * Displays the DOAS joke message
     * @param args {string[]} The arguments passed to the command
     * @return {string} The DOAS joke message
     */
    static doas(args) {
        if (args[0] === "--help") return Help.doas;
        return "Did you mean to type 'does'?";
    }

    /**
     * Computes the solution to the halting problem...then segfaults
     * @param args {string[]} The arguments passed to the command
     */
    static haltingproblem(args) {
        if (args[0] === "--help") return Help.haltingproblem;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        haltingProblem();
        return "";
    }

    /**
     * Displays a magic 8-ball response
     * @param args {string[]} The arguments passed to the command
     * @return {string} The 8-ball response
     */
    static eightball(args) {
        if (args[0] === "--help") return Help.eightball;
        let valResult = this._validateArgs(args, {nargs: [1]});
        if (valResult) throw new Error(valResult);

        return eightBall();
    }

    /**
     * Displays the neofetch system information output
     * @param args {string[]} The arguments passed to the command
     * @return {string} The neofetch output
     */
    static neofetch(args) {
        if (args[0] === "--help") return Help.neofetch;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        return neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
    }

    /**
     * Displays the current user
     * @param args {string[]} The arguments passed to the command
     * @return {string} The current user
     */
    static whoami(args) {
        if (args[0] === "--help") return Help.whoami;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        return "guest";
    }

    /**
     * Sends the user to the void
     * @param args {string[]} The arguments passed to the command
     */
    static void(args) {
        if (args[0] === "--help") return Help.void;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        toVoid();
        return "";
    }

    /**
     * Sends the user to the admin page
     * @param args {string[]} The arguments passed to the command
     */
    static admin(args) {
        if (args[0] === "--help") return Help.admin;
        let valResult = this._validateArgs(args, {nargs: [0]});
        if (valResult) throw new Error(valResult);

        window.location.replace("/admin");
        return "";
    }

    /**
     * Parses a raw string as a command and arguments, executes them, then returns the output and updated environment
     * @param rawString {string} The raw command string
     * @param env {Object} The environment object
     * @return {{result: string, env: Object}} The command output and updated environment
     */
    static parseCommand(rawString, env) {
        this.ENV = env;

        let commandStrings = rawString.split(";");
        let cmdOutput = {result: "", env: this.ENV};

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

                let tmpOutput = commandFunc(args);

                // Write the output to the output file if one was specified, otherwise append it to the command output
                if (outPath) masterFileSystem.writeText(outPath, tmpOutput);
                else cmdOutput.result += (cmdOutput.result ? "\n" : "") + tmpOutput;
            } catch (e) {
                // Append the error message to the command output
                cmdOutput.result += (cmdOutput.result ? "\n" : "") + e.message;
            }
            // Update the environment with the new current working directory
            cmdOutput.env = this.ENV;
        }

        return cmdOutput;
    }
}

// Add aliases for commands
Commands.cls = Commands.clear;
Commands.man = Commands.help;
Commands.nuke = Commands.reset;

export {Commands};