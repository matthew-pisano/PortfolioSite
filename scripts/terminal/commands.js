import {ANSI, Perms, SysEnv} from '../utils';
import { pathJoin } from '../fileSystem/fileSystem';
import { masterFileSystem, pageRegistry } from '../fileSystem/buildfs';
import {resolveTokens, tokenizeCommand, Help, eightBall, haltingProblem, hal, runPacer, rmRootMsg, toVoid} from './commandResources';
import {tfLogo, neofetch, system32, letoucan, pacerTest, theMissile} from './strings';
import {Directory, File} from "../fileSystem/fileSystemObjects";


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
     * @param opts {string[]} The options passed to the command
     * @param nArgs {number[]} The number of arguments that are accepted
     * @param nOpts {number[]} The number of options that are accepted
     * @param allowedOpts {string[]} The options that are allowed
     * @return {string} An error message if the validation fails, otherwise an empty string
     * @private
     */
    static _validateArgs(args, opts, nArgs, nOpts, allowedOpts) {
        if (nArgs !== null && !nArgs.includes(args.length))
            return `Error: only ${nArgs} arguments are accepted, found ${args.length} (${args})`;
        if (nOpts !== null && !nOpts.includes(opts.length))
            return `Error: only ${nOpts} options are accepted, found ${opts.length} (${opts})`;
        if (allowedOpts !== null && opts.filter(opt => !allowedOpts.includes(opt)).length > 0)
            return `Error: invalid options found in ${opts}`;

        return "";
    }

    /**
     * Parses the arguments passed to a command into options and arguments
     * @param args {string[]} The raw arguments passed to the command
     * @return {{args: string[], options: string[]}} The parsed arguments
     * @private
     */
    static _parseArgs(args) {
        let options = [];
        let parsedArgs = [];
        for (let arg of args) {
            if (arg.startsWith("-")) options.push(arg);
            else parsedArgs.push(arg);
        }
        // Split multi-letter options into single-letter options
        let i = 0;
        while (i < options.length) {
            if (!options[i].startsWith("--") && options[i].length > 2) {
                options.push(`-${options[i].substring(2)}`);
                options[i] = options[i].substring(0, 2);
            }
            i++;
        }
        return {options: options, args: parsedArgs};
    }

    /**
     * Echoes the tokens passed to the command
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The echoed tokens
     */
    static async *echo(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.echo; return;}

        for (let i = 0; i < tokens.length; i++) yield tokens[i] + "\n";
    }

    /**
     * Clears the terminal output
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *clear(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.clear; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        document.getElementById("terminalOutput").innerText = "";
    }

    /**
     * Prints the current working directory
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The current working directory
     */
    static async *pwd(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.pwd; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield this.ENV.CWD;
    }

    /**
     * Prints the help information for a command or the help menu
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The help information
     */
    static async *help(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.help; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1], ["-f", "--force"]);
        if (valResult) throw new Error(valResult);

        // General help and secret help menu
        if (args.length === 0 && (options.includes("-f") || options.includes("--force"))) {yield Help.secretHelpMenu; return;}
        else if (args.length === 0) {yield Help.helpMenu; return;}

        // Help for a specific command
        if (Object.getOwnPropertyNames(this).includes(args[0]) && args[0] in Help) {yield Help[args[0]]; return;}
        else if(Object.getOwnPropertyNames(this).includes(args[0])) {yield "No help information available"; return;}
        else {yield `Command '${args[0]}' not found`; return;}
    }

    /**
     * Changes the current working directory
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *cd(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.cd; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new Error(valResult);

        // If no arguments are passed, change to the home directory
        if (args.length === 0) {this.ENV.CWD = SysEnv.HOME_FOLDER; return;}

        let cdPath = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.getItem(cdPath);

        if (!targetItem)
            throw new Error(`Cannot enter directory.  Directory at ${cdPath} does not exist!`);
        else if (targetItem.constructor === File)
            throw new Error(`Cannot enter ${cdPath}, it is a file!`);
        else if (!targetItem.permission.includes(Perms.EXECUTE)) {
            // Secret admin access
            if (cdPath === "/home/admin") {
                window.location.href = "/admin";
                throw new Error(`Verifying credentials for ${cdPath}...`);
            }
            throw new Error(`Cannot enter ${cdPath}.  Permission denied!`);
        }

        // Change the current working directory
        this.ENV.CWD = cdPath;
    }

    /**
     * Lists the files and directories in the current directory
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The list of files and directories
     */
    static async *ls(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.ls; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1, 2], ["-l", "-a"]);
        if (valResult) throw new Error(valResult);

        let path = this.resolvePath(args.length === 1 ? args[0] : this.ENV.CWD);
        let showHidden = options.includes("-a");
        let showDetails = options.includes("-l");

        let lsObj = masterFileSystem.getItem(path);
        if (!lsObj) throw new Error(`Cannot list file or directory.  File or directory at ${path} does not exist!`);

        let pad = "\xa0\xa0";
        let paddedSize = `${lsObj.size()}`.padStart(6, "\xa0");

        if (lsObj.constructor === Directory) {
            if (!lsObj.permission.includes(Perms.READ)) throw new Error(`Cannot list ${path}.  Permission denied!`);

            // Gather the information for each file and directory in the directory
            let list = [];
            for (let child of lsObj.subTree) {
                if (child.constructor === File) {
                    let fileInfo = (await this.ls([...options, pathJoin(path, child.name)]).next()).value;
                    list.push([fileInfo, child.name]);
                    continue;
                }

                let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                let displayName = child.name.includes(" ") ? `'${child.name}'` : child.name;
                if (showDetails) list.push([`d${child.permission}${pad}${paddedSize}${pad}${modStr}${pad}${ANSI.CYAN}${displayName}${ANSI.DEFAULT}`, child.name]);
                else list.push([`${ANSI.CYAN}${displayName}${ANSI.DEFAULT}`, child.name]);
            }

            list.sort((a, b) => a[1].localeCompare(b[1]));

            if (showDetails) yield "total " + lsObj.subTree.length + "\n";

            // Add the parent and current directory to the list
            if (path !== "/") {
                let modStr = new Date(Date.now()).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                if (showDetails) list.unshift([`drwx${pad}${paddedSize}${pad}${modStr}${pad}${ANSI.CYAN}..${ANSI.DEFAULT}`, ".."]);
                else list.unshift(["..", ".."]);
                if (showDetails) list.unshift([`drwx${pad}${paddedSize}${pad}${modStr}${pad}${ANSI.CYAN}.${ANSI.DEFAULT}`, "."]);
                else list.unshift([".", "."]);
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

            let displayName = lsObj.name.includes(" ") ? `'${lsObj.name}'` : lsObj.name;
            if (lsObj.permission === "--x")
                displayName = ANSI.GREEN + displayName + ANSI.DEFAULT;

            if (showDetails) yield `-${lsObj.permission}${pad}${paddedSize}${pad}${modStr}${pad}${displayName}`;
            else yield displayName;
        }
    }
    static async *ll(tokens) {yield* await this.ls(["-l", ...tokens]);}
    static async *la(tokens) {yield* await this.ls(["-la", ...tokens]);}

    /**
     * Makes a new directory
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *mkdir(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.mkdir; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.mkdir(newPath);
    }

    /**
     * Creates a new, empty file
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *touch(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.touch; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.touch(newPath);
    }

    /**
     * Copies a file or directory to a new location
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *cp(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.cp; return;}
        let valResult = this._validateArgs(args, options, [2], [0], []);
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
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *mv(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.mv; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        this.cp(tokens);
        // Remove the old file or directory
        let oldPath = this.resolvePath(args[0]);
        masterFileSystem.rm(oldPath);
    }

    /**
     * Removes a file or directory
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *rm(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.rm; return;}
        let valResult = this._validateArgs(args, options, [1], [0, 1, 2], ["-r", "-f"]);
        if (valResult) throw new Error(valResult);

        let pathArg = args[0];
        let path = this.resolvePath(pathArg);
        // Prevent the user from deleting the system32 directory
        if (pathArg.replace(/\\/g, "/") === "C:/Windows/System32" || path === "/mnt/C:/Windows/System32")
            throw new Error(system32);

        // Check if the root directory is being removed and if the -rf option is used
        if (path === "/" && options.includes("-f") && options.includes("-r")) {
            yield* await rmRootMsg();
            return;
        } else if (path === "/")
            throw new Error(`Permission denied for path '/'!  Use -rf to force.`);

        masterFileSystem.rm(path, options);
    }

    /**
     * Reads the contents of a file
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The contents of the file
     */
    static async *cat(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.cat; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        yield masterFileSystem.readText(this.resolvePath(args[0]));
    }

    /**
     * Opens a file as an HTML page
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *open(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.open; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (pageRegistry[pagePath]) {
            let relPath = pagePath.replace(SysEnv.PUBLIC_FOLDER, "");
            window.open(relPath.replace(".html", ""), '_self', false);
        }
        else if (!masterFileSystem.exists(pagePath)) throw new Error(`Cannot open file.  File at ${pagePath} does not exist!`);
        else if (currentFile.constructor === Directory) throw new Error(`Cannot open a directory!`);
        else if (currentFile.permission.includes(Perms.EXECUTE)) window.open(`/display?file=${pagePath}`, '_self', false);
        else throw new Error(`Insufficient permissions to open ${pagePath}!`);
    }

    /**
     * Edits a text file in the editor
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *edit(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.edit; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (!masterFileSystem.exists(pagePath)) throw new Error(`Cannot edit file.  File at ${pagePath} does not exist!`);
        else if (currentFile.constructor === Directory) throw new Error(`Cannot edit a directory!`);
        else if (currentFile.permission.includes(Perms.WRITE)) window.location.replace(`/edit?file=${pagePath}`);
        else throw new Error(`Insufficient permissions to edit ${pagePath}!`);
    }

    /**
     * Changes the color of the terminal foreground text
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The color change message
     */
    static async *color(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.color; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new Error(valResult);

        if (args.length === 0) {
            this.ENV.COLOR = "azure";
            return;
        }

        if (args[0].match(/#[0-9|a-f|A-F]{6}/) || args[0].match(/#[0-9|a-f|A-F]{3}/))
            this.ENV.COLOR = args[0];
        else throw new Error(`${args[0]} is not a valid color.  Use --help for more information.`);
    }

    static async *resize(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.resize; return;}
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new Error(valResult);

        let height = parseInt(args[0]);
        if (isNaN(height)) throw new Error(`Invalid height: ${args[0]}`);

        document.getElementById('terminal').dispatchEvent(new CustomEvent("openTo", {detail: height}));
    }

    /**
     * Clears the terminal and exits the terminal
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *exit(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.exit; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new Error(valResult);

        if (args.length > 0 && isNaN(parseInt(args[0]))) throw new Error(`Invalid exit code: ${args[0]}`);

        document.getElementById('terminal').style.display = "none";
        document.getElementById("terminalOutput").innerText = "";
        document.getElementById("terminalClose").style.visibility = "hidden";

        this.ENV.CLOSED = true;
        this.ENV.CLOSE_TIME = Date.now();
    }

    /**
     * Reloads the current page
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The reload message
     */
    static async *restart(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.restart; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield "Re-provisioning system (keeping state).  Standby...";

        await new Promise(r => setTimeout(r, 1000));
        window.location.reload();
    }

    /**
     * Resets the terminal state by clearing the local browser storage and reloads the page
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The reset message
     */
    static async *reset(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.reset; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        delete localStorage.hierarchy;

        yield "Re-provisioning system (clearing state).  Standby...";

        await new Promise(r => setTimeout(r, 1000));
        window.location.href = "/";
    }

    /**
     * Rickrolls the user by redirecting to the rickroll video
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The rickroll message
     */
    static async *ng(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.ng; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield "ng (never gonna) - give you up";

        await new Promise(r => setTimeout(r, 1000));
        window.location.href = "/media/video/rick.mp4";
    }

    /**
     * Displays the Team Fortress 2 logo
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The TF2 logo
     */
    static async *mann(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.mann; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield tfLogo;
    }

    /**
     * Displays a message from HAL 9000
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The HAL message
     */
    static async *halsay(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.halsay; return;}

        let defaultMsg = "I'm sorry Dave, I'm afraid I can't do that...";
        let colorEye = false;

        if (Math.random() < 0.2) {
            defaultMsg = ANSI.RED+"Soon..."+ANSI.DEFAULT;
            colorEye = true;
        }
        yield hal(tokens.length > 0 ? tokens.join(" ") : defaultMsg, colorEye);
    }

    /**
     * Displays the DIR joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The DIR joke message
     */
    static async *dir(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.dir; return;}
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new Error(valResult);

        yield "dir: command not found (Wrong OS)";
    }

    /**
     * Displays the MIR joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The MIR joke message
     */
    static async *mir(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.mir; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield "mir: command not found (Like 'dir' or like the space station?)";
    }

    /**
     * Launches the armageddon sequence
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *launch(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.launch; return;}
        let valResult = this._validateArgs(args, options, [3], [0], []);
        if (valResult) throw new Error(valResult);

        if (isNaN(parseInt(args[0])) || isNaN(parseFloat(args[1])) || isNaN(parseFloat(args[2])))
            throw new Error("Error: Invalid coordinates or warhead ID.  Please provide numerical values for the coordinates or ID.");

        if (Math.random() < 0.2) {
            yield theMissile;
            return;
        }

        throw new Error("Error: Insufficient permissions to cause armageddon (Did you try 'sudo'?)");
    }

    /**
     * Displays SUDO joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The SUDO joke message
     */
    static async *sudo(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.sudo; return;}

        yield "sudo is just bloat (Maybe try 'doas'?)";
    }

    /**
     * Displays the DOAS joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The DOAS joke message
     */
    static async *doas(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.doas; return;}

        yield "Did you mean to type 'does'?";
    }

    /**
     * Computes the solution to the halting problem...then segfaults
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *haltingproblem(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.haltingproblem; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield* await haltingProblem();
    }

    /**
     * Displays a magic 8-ball response
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The 8-ball response
     */
    static async *eightball(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.eightball; return;}

        let question = tokens.join(" ");
        if (question === "") throw new Error("You need to give me a question to answer :/");
        if (!question.endsWith("?")) throw new Error("That doesn't look like a question to me...try adding a '?' at the end");
        let spaces = (question.match(/ /g) || []).length;
        if (spaces < 1) throw new Error("You dare ask me such a trivial question?  I need something longer, something more complex...");
        if (spaces < 2 && Math.random() < 0.3) throw new Error("I'm getting tired of these simple questions...try again with something longer and more interesting!");
        if ((question.match(/meaning of life/g) || []).length > 0 || (question.match(/answer to life/g) || []).length)
            throw new Error("That's pretty played out...don't you think?");

        yield eightBall(question);
    }

    /**
     * Displays the toucan ASCII art
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The toucan ASCII art
     */
    static async *toucan(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.toucan; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield letoucan;
    }

    /**
     * Runs the pacer test
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *pacer(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.pacer; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield* await runPacer();
    }

    /**
     * Displays the neofetch system information output
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The neofetch output
     */
    static async *neofetch(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.neofetch; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
    }

    /**
     * Displays the current user
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The current user
     */
    static async *whoami(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.whoami; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield SysEnv.USER;
    }

    /**
     * Sends the user to the void
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *void(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.void; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new Error(valResult);

        yield* await toVoid();
    }

    /**
     * Sends the user to the admin page
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *admin(tokens) {
        let {args, options} = this._parseArgs(tokens);
        if (options.includes("--help")) {yield Help.admin; return;}
        let valResult = this._validateArgs(args, options, [0], [0], []);
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

                let argTokens = tokens.slice(1);
                if (!command) continue;

                let outPath;

                // Check if the command string includes a file to redirect output to
                if (argTokens.includes(">")) {
                    if (argTokens.indexOf(">") === argTokens.length - 1)
                        throw new Error("You must include a file to write to!");

                    outPath = this.resolvePath(argTokens.slice(argTokens.indexOf(">") + 1)[0], env.CWD);
                    argTokens = argTokens.slice(0, argTokens.indexOf(">"));
                }

                // Get the function for the command based on the command string
                let commandFunc = this[command];

                if (!commandFunc || command.startsWith("_")) throw new Error(command + ": command not found");
                // Bind the command function to the Commands object
                commandFunc = commandFunc.bind(this);
                // Clear to output file contents if given
                if (outPath) masterFileSystem.writeText(outPath, "");

                for await (let line of commandFunc(argTokens)) {
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