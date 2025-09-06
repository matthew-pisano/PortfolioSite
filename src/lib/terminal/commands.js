import { FileSystemError, masterFileSystem, pathJoin } from "@/lib/fileSystem/fileSystem";
import { ANSI, Perms, SysEnv } from "@/lib/fileSystem/fileSystemMeta";
import { Directory, File } from "@/lib/fileSystem/fileSystemObjects";
import { eightBall, hal, haltingProblem, rmRoot, runPacer, toVoid } from "@/lib/terminal/easterEggs";
import { EventHandlers } from "@/lib/terminal/eventHandlers";
import { Help } from "@/lib/terminal/helpMenu";
import { resolveTokens, tokenizeCommand } from "@/lib/terminal/processTokens";
import { letoucan, neofetch, system32, tfLogo, theMissile } from "@/lib/terminal/strings";
import { Sprite } from "@/lib/terminal/terminalSprites";
import { setTheme, themes } from "@/lib/themes";

/**
 * Formats a file's modified timestamp into a human-readable string
 * @param fileObj {File|Directory} The file or directory object
 * @returns {string} The formatted timestamp in the format "YYYY-MM-DD HH:MM"
 */
function fileTimestamp(fileObj) {
    let modStr = new Date(fileObj.modified).toISOString().split("T").join(" ");
    return modStr.substring(0, modStr.lastIndexOf(":"));
}

/**
 * Custom error for when a command expectedly exits
 */
class CommandError extends Error {
    constructor(message, code = 1) {
        super(message);
        this.code = code;
        this.name = "CommandError";
    }
}

/**
 * The Commands class contains all the commands that can be executed in the terminal
 */
class Commands {
    /**
     * The environment object that contains the current working directory and other environment variables
     * @type {object}
     */
    static ENV = { CWD: SysEnv.HOME_FOLDER, HOME: SysEnv.HOME_FOLDER, COLOR: "#ffffff" };

    /**
     * Resolves a path to an absolute path
     * @param path {string} The path to resolve
     * @param cwd {string} The current working directory
     * @return {string} The resolved path
     * @private
     */
    static resolvePath(path, cwd = this.ENV.CWD) {
        if (path[0] === "~") path = path.replace("~", SysEnv.HOME_FOLDER);
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
        if (allowedOpts !== null && opts.filter((opt) => !allowedOpts.includes(opt)).length > 0)
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
        return { options: options, args: parsedArgs };
    }

    /**
     * Echoes the tokens passed to the command
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The echoed tokens
     */
    static async *echo(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.echo + "\n";
            return;
        }

        for (let i = 0; i < tokens.length; i++) yield tokens[i] + "\n";
    }

    /**
     * Clears the terminal output
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *clear(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.clear + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        document.getElementById("terminalOutput").innerText = "";
    }

    /**
     * Prints the current working directory
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The current working directory
     */
    static async *pwd(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.pwd + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield this.ENV.CWD + "\n";
    }

    /**
     * Prints the help information for a command or the help menu
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The help information
     */
    static async *help(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.help + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1], ["-f", "--force"]);
        if (valResult) throw new CommandError(valResult);

        // General help and secret help menu
        if (args.length === 0 && (options.includes("-f") || options.includes("--force"))) {
            yield Help.secretHelpMenu;
            return;
        } else if (args.length === 0) {
            yield Help.helpMenu;
            return;
        }

        // Help for a specific command
        if (Object.getOwnPropertyNames(this).includes(args[0]) && args[0] in Help) yield Help[args[0]];
        else if (Object.getOwnPropertyNames(this).includes(args[0])) yield "No help information available\n";
        else yield `help: command '${args[0]}' not found\n`;
    }

    /**
     * Changes the current working directory
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *cd(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.cd + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new CommandError(valResult);

        // If no arguments are passed, change to the home directory
        if (args.length === 0) {
            this.ENV.CWD = SysEnv.HOME_FOLDER;
            return;
        }

        let cdPath = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.getItem(cdPath);

        if (!targetItem) throw new CommandError(`Cannot enter directory.  Directory at ${cdPath} does not exist!`);
        else if (targetItem instanceof File) throw new CommandError(`Cannot enter ${cdPath}, it is a file!`);
        else if (!targetItem.permission.includes(Perms.EXECUTE)) {
            // Secret admin access
            if (cdPath === "/home/admin") {
                window.location.href = "/admin";
                throw new CommandError(`Verifying credentials for ${cdPath}...`);
            }
            throw new CommandError(`Cannot enter ${cdPath}.  Permission denied!`);
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
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.ls + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1, 2], ["-l", "-a"]);
        if (valResult) throw new CommandError(valResult);

        let path = this.resolvePath(args.length === 1 ? args[0] : this.ENV.CWD);
        let showHidden = options.includes("-a");
        let showDetails = options.includes("-l");

        let lsObj = masterFileSystem.getItem(path);
        if (!lsObj)
            throw new CommandError(`Cannot list file or directory.  File or directory at ${path} does not exist!`);

        let pad = "\xa0\xa0";
        let paddedSize = `${lsObj.size()}`.padStart(6, "\xa0");

        // List directory
        if (lsObj instanceof Directory) {
            if (!lsObj.permission.includes(Perms.READ))
                throw new CommandError(`Cannot list ${path}.  Permission denied!`);

            // Gather the information for each file and directory in the directory
            let list = [];
            for (let child of lsObj.subTree) {
                if (child instanceof File) {
                    // Recursive call for files
                    let fileInfo = (await this.ls([...options, pathJoin(path, child.name)]).next()).value;
                    list.push([fileInfo, child.name]);
                    continue;
                }

                let displayName = child.name.includes(" ") ? `'${child.name}'` : child.name;
                if (showDetails)
                    list.push([
                        `d${child.permission}${pad}${paddedSize}${pad}${fileTimestamp(lsObj)}` +
                            `${pad}${ANSI.CYAN}${displayName}${ANSI.DEFAULT}`,
                        child.name
                    ]);
                else list.push([`${ANSI.CYAN}${displayName}${ANSI.DEFAULT}`, child.name]);
            }

            list.sort((a, b) => a[1].localeCompare(b[1]));

            // Add the parent and current directory to the list
            let dirTime = fileTimestamp(lsObj);
            if (showDetails)
                list.unshift([`drwx${pad}${paddedSize}${pad}${dirTime}${pad}${ANSI.CYAN}..${ANSI.DEFAULT}`, ".."]);
            else list.unshift(["..", ".."]);

            if (showDetails)
                list.unshift([`drwx${pad}${paddedSize}${pad}${dirTime}${pad}${ANSI.CYAN}.${ANSI.DEFAULT}`, "."]);
            else list.unshift([".", "."]);

            // Add the information for each file and directory to the list
            for (let entry of list) {
                if (!showHidden && entry[1].startsWith(".")) continue;
                yield entry[0] + (showDetails ? "\n" : pad);
            }
            return;
        }

        // List file
        let displayName = lsObj.name.includes(" ") ? `'${lsObj.name}'` : lsObj.name;
        if (lsObj.permission === "--x") displayName = ANSI.GREEN + displayName + ANSI.DEFAULT;

        let fileTime = fileTimestamp(lsObj);
        if (showDetails) yield `-${lsObj.permission}${pad}${paddedSize}${pad}${fileTime}${pad}${displayName}`;
        else yield displayName;
    }

    static async *ll(tokens) {
        yield* await this.ls(["-l", ...tokens]);
    }

    static async *la(tokens) {
        yield* await this.ls(["-la", ...tokens]);
    }

    /**
     * Makes a new directory
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *mkdir(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.mkdir + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.mkdir(newPath);
    }

    /**
     * Creates a new, empty file
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *touch(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.touch + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let newPath = this.resolvePath(args[0]);
        masterFileSystem.touch(newPath);
    }

    /**
     * Copies a file or directory to a new location
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *cp(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.cp + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [2], [0], []);
        if (valResult) throw new CommandError(valResult);

        let oldPath = this.resolvePath(args[0]);
        let oldName = oldPath.substring(oldPath.lastIndexOf("/") + 1);
        let newPath = this.resolvePath(args[1]);

        let newObj = masterFileSystem.getItem(newPath);

        if (newObj && newObj instanceof Directory) masterFileSystem.cp(oldPath, pathJoin(newPath, oldName));
        else if (!newObj) masterFileSystem.cp(oldPath, newPath);
        else throw new CommandError(`Cannot copy directory at ${oldPath} to file at ${newPath}!`);
    }

    /**
     * Moves a file or directory to a new location
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *mv(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.mv + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

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
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.rm + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0, 1, 2], ["-r", "-f"]);
        if (valResult) throw new CommandError(valResult);

        let pathArg = args[0];
        if (pathArg === "." || pathArg === "..")
            throw new CommandError(`Refusing to remove '.' or '..' directory: skipping '${pathArg}'`);

        let path = this.resolvePath(pathArg);

        if (masterFileSystem.isDir(path) && !options.includes("-r"))
            throw new CommandError("Use -r to remove a directory.");

        // Prevent the user from deleting the system32 directory
        if (pathArg.replace(/\\/g, "/") === "C:/Windows/System32" || path === "/mnt/C:/Windows/System32")
            throw new CommandError(system32);

        // Check if the root directory is being removed and if the -rf option is used
        if (path === "/" && options.includes("-f")) {
            yield* await rmRoot();
            return;
        } else if (path === "/") throw new CommandError(`Permission denied for path '/'!  Use -f to force.`);

        masterFileSystem.rm(path);
    }

    /**
     * Reads the contents of a file
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The contents of the file
     */
    static async *cat(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.cat + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield masterFileSystem.readText(this.resolvePath(args[0]));
    }

    /**
     * Opens a file as an HTML page
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *open(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.open + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);

        if (!currentFile) throw new CommandError(`Cannot open file.  File at ${pagePath} does not exist!`);
        else if (currentFile instanceof Directory) throw new CommandError(`Cannot open a directory!`);
        else if (currentFile.isPage()) {
            let relPath = pagePath.replace(SysEnv.PUBLIC_FOLDER, "");
            window.open(relPath.replace(".html", ""), "_self");
        } else if (currentFile.permission.includes(Perms.EXECUTE)) window.open(`/display?file=${pagePath}`, "_self");
        else throw new CommandError(`Insufficient permissions to open ${pagePath}!`);
    }

    /**
     * Edits a text file in the editor
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *edit(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.edit + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let pagePath = this.resolvePath(args[0]);
        let currentFile = masterFileSystem.getItem(pagePath);
        if (!masterFileSystem.exists(pagePath))
            throw new CommandError(`Cannot edit file.  File at ${pagePath} does not exist!`);
        else if (currentFile instanceof Directory) throw new CommandError(`Cannot edit a directory!`);
        else if (currentFile.permission.includes(Perms.WRITE)) window.location.replace(`/edit?file=${pagePath}`);
        else throw new CommandError(`Insufficient permissions to edit ${pagePath}!`);
    }

    /**
     * Changes the color of the terminal foreground text
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The color change message
     */
    static async *color(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.color + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new CommandError(valResult);

        if (args.length === 0) {
            this.ENV.COLOR = "#f0ffff";
            return;
        }

        if (args[0].match(/#[0-9a-fA-F]{6}/) || args[0].match(/#[0-9a-fA-F]{3}/)) this.ENV.COLOR = args[0];
        else throw new CommandError(`${args[0]} is not a valid color.  Use --help for more information.`);
    }

    static *theme(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.theme + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1], ["-l", "--list"]);
        if (valResult) throw new CommandError(valResult);

        if (options.includes("-l") || options.includes("--list")) {
            let themeList = Object.keys(themes).join(", ");
            yield `Available themes: ${themeList}\n`;
            return;
        }

        if (args.length === 0) {
            setTheme("default");
            return;
        }

        if (themes[args[0]]) setTheme(args[0]);
        else throw new CommandError(`Theme '${args[0]}' not found.`);
    }

    /**
     * Resizes the terminal to a specific height
     * @param tokens
     * @returns {AsyncGenerator<string, void, *>}
     */
    static async *resize(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.resize + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let height = parseInt(args[0]);
        if (isNaN(height)) throw new CommandError(`Invalid height: ${args[0]}`);

        document.getElementById("terminal").dispatchEvent(new CustomEvent("openTo", { detail: height }));
    }

    /**
     * Prints the command history or clears it
     * @param tokens {string[]} The tokens passed to the command
     * @returns {AsyncGenerator<string, void, *>}
     */
    static async *history(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.history + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0, 1], ["-c"]);
        if (valResult) throw new CommandError(valResult);

        if (options.includes("-c") || args.includes("clear")) {
            EventHandlers.clearHistory();
            return;
        }

        let history = JSON.parse(localStorage.getItem("terminalHistory"));
        if (!history) throw new CommandError("No history available.");

        let limit = history.length;
        if (args && !isNaN(parseInt(args[0])) && parseInt(args[0]) > 0) limit = parseInt(args[0]);

        for (let i = history.length - 1; i >= history.length - limit; i--) yield history[i] + "\n";
    }

    static async *sleep(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.sleep + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [1], [0], []);
        if (valResult) throw new CommandError(valResult);

        let duration = parseInt(args[0]);
        if (isNaN(duration)) throw new CommandError(`Invalid duration: ${args[0]}`);

        await new Promise((r) => setTimeout(r, duration * 1000));
    }

    /**
     * Clears the terminal and exits the terminal
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *exit(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.exit + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new CommandError(valResult);

        if (args.length > 0 && isNaN(parseInt(args[0]))) throw new CommandError(`Invalid exit code: ${args[0]}`);

        document.getElementById("terminal").dispatchEvent(new CustomEvent("close"));
    }

    /**
     * Reloads the current page
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The reload message
     */
    static async *restart(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.restart + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield "Re-provisioning system (keeping state).  Standby...\n";

        await new Promise((r) => setTimeout(r, 1000));
        window.location.reload();
    }

    /**
     * Resets the terminal state by clearing the local browser storage and reloads the page
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The reset message
     */
    static async *reset(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.reset + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        localStorage.clear();

        yield "Re-provisioning system (clearing state).  Standby...\n";

        await new Promise((r) => setTimeout(r, 1000));
        window.location.href = "/";
    }

    /**
     * Launches the MIPS terminal project in a new tab
     * @param tokens {string[]} The tokens passed to the command
     * @returns {string} The status message
     */
    static async *mips(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.mips + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        window.open("https://mips.matthewpisano.com", "_blank");

        yield "Launching subprocess...";
    }

    /**
     * Rickrolls the user by redirecting to the rickroll video
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The rickroll message
     */
    static async *ng(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.ng + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield "ng (never gonna) - give you up\n";

        await new Promise((r) => setTimeout(r, 1000));
        window.location.href = "/media/video/rick.mp4";
    }

    /**
     * Displays the Team Fortress 2 logo
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The TF2 logo
     */
    static async *mann(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.mann + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield tfLogo;
    }

    /**
     * Displays a message from HAL 9000
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The HAL message
     */
    static async *halsay(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.halsay + "\n";
            return;
        }

        let defaultMsg = "I'm sorry Dave, I'm afraid I can't do that...";
        let colorEye = false;

        if (Math.random() < 0.2) {
            defaultMsg = ANSI.RED + "Soon..." + ANSI.DEFAULT;
            colorEye = true;
        }
        yield hal(tokens.length > 0 ? tokens.join(" ") : defaultMsg, colorEye) + "\n";
    }

    /**
     * Displays the DIR joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The DIR joke message
     */
    static async *dir(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.dir + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0, 1], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield "dir: command not found (Wrong OS)\n";
    }

    /**
     * Displays the MIR joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The MIR joke message
     */
    static async *mir(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.mir + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield "mir: command not found (Like 'dir' or like the space station?)\n";
    }

    /**
     * Launches the armageddon sequence
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *launch(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.launch + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [3], [0], []);
        if (valResult) throw new CommandError(valResult);

        if (isNaN(parseInt(args[0])) || isNaN(parseFloat(args[1])) || isNaN(parseFloat(args[2])))
            throw new CommandError(
                "Error: Invalid coordinates or warhead ID.  Please provide numerical values for the coordinates or ID."
            );

        if (Math.random() < 0.2) {
            yield theMissile;
            return;
        }

        throw new CommandError("Error: Insufficient permissions to cause armageddon (Did you try 'sudo'?)");
    }

    /**
     * Displays SUDO joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The SUDO joke message
     */
    static async *sudo(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.sudo + "\n";
            return;
        }

        yield "sudo is just bloat (Maybe try 'doas'?)\n";
    }

    /**
     * Displays the DOAS joke message
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The DOAS joke message
     */
    static async *doas(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.doas + "\n";
            return;
        }

        yield "Did you mean to type 'does'?\n";
    }

    /**
     * Computes the solution to the halting problem...then segfaults
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *haltingproblem(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.haltingproblem + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield* await haltingProblem();
    }

    /**
     * Displays a magic 8-ball response
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The 8-ball response
     */
    static async *eightball(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.eightball + "\n";
            return;
        }

        let question = tokens.join(" ");

        if (question === "") throw new CommandError("You need to give me a question to answer :/");
        if (!question.endsWith("?"))
            throw new CommandError("That doesn't look like a question to me...try adding a '?' at the end");
        let spaces = (question.match(/ /g) || []).length;
        if (spaces < 1)
            throw new CommandError(
                "You dare ask me such a trivial question?  I need something longer, something more complex..."
            );
        if (spaces < 2 && Math.random() < 0.3)
            throw new CommandError(
                "I'm getting tired of these simple questions...try again with something longer and more interesting!"
            );

        if ((question.match(/meaning of life/g) || []).length > 0 || (question.match(/answer to life/g) || []).length)
            throw new CommandError("That's pretty played out...don't you think?");

        yield eightBall(question) + "\n";
    }

    /**
     * Displays the toucan ASCII art
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The toucan ASCII art
     */
    static async *toucan(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.toucan + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield letoucan;
    }

    /**
     * Runs the pacer test
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *pacer(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.pacer + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield* await runPacer();
    }

    /**
     * Displays the neofetch system information output
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The neofetch output
     */
    static async *neofetch(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.neofetch + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield neofetch.replace(new RegExp(" ", "g"), "\u00A0");
    }

    /**
     * Displays the current user
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The current user
     */
    static async *whoami(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.whoami + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield SysEnv.USER + "\n";
    }

    /**
     * Displays the hostname of the system
     * @param tokens {string[]} The tokens passed to the command
     * @yield {string} The system hostname
     */
    static async *hostname(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.hostname + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield SysEnv.HOSTNAME + "\n";
    }

    /**
     * Sends the user to the void
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *void(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.void + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        yield* await toVoid();
    }

    /**
     * Sends the user to the admin page
     * @param tokens {string[]} The tokens passed to the command
     */
    static async *admin(tokens) {
        let { args, options } = this._parseArgs(tokens);
        if (options.includes("--help")) {
            yield Help.admin + "\n";
            return;
        }
        let valResult = this._validateArgs(args, options, [0], [0], []);
        if (valResult) throw new CommandError(valResult);

        window.location.href = "/admin";
    }

    static async *sprites(tokens) {
        for (let sprite of [Sprite.SCRMLN, Sprite.SCRBLN]) {
            sprite.mount();
            sprite.animationLoop();
            await new Promise((r) => setTimeout(r, 500));
        }
        yield "";
    }

    /**
     * Parses a raw string as a command and arguments, executes them, then yields the output and updated environment
     * @param rawString {string} The raw command string
     * @yield {Promise<{result: string, env: object}>} The command output and updated environment
     */
    static async *parseCommand(rawString) {
        let rawTokens = tokenizeCommand(rawString);

        // Execute each command in the command string, delimited by semicolons
        for (let commandTokens of rawTokens) {
            if (!commandTokens) continue;

            try {
                let result = resolveTokens(commandTokens, this.ENV);
                let resolvedTokens = result.tokens;
                this.ENV = result.env;

                // Split the command string into the command and its arguments
                let command = resolvedTokens[0];
                if (command === "?") command = "help";

                let argTokens = resolvedTokens.slice(1);
                if (!command) continue;

                let outPath;

                // Check if the command string includes a file to redirect output to
                if (argTokens.includes(">")) {
                    if (argTokens.indexOf(">") === argTokens.length - 1)
                        throw new CommandError("You must include a file to write to!");

                    outPath = this.resolvePath(argTokens.slice(argTokens.indexOf(">") + 1)[0], this.ENV.CWD);
                    argTokens = argTokens.slice(0, argTokens.indexOf(">"));
                }

                // Get the function for the command based on the command string
                let commandFunc = this[command];

                if (!commandFunc || command.startsWith("_")) throw new CommandError(command + ": command not found");
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
                if (e instanceof CommandError || e instanceof FileSystemError) yield e.message;
                else {
                    console.error(e);
                    yield "\nUnexpected Error: " + e.message;
                }
            }
        }
    }
}

// Add aliases for commands
Commands.cls = Commands.clear;
Commands.man = Commands.help;
Commands.nuke = Commands.reset;
Commands.reboot = Commands.restart;

export { Commands };
