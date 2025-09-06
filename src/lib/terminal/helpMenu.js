import { SysEnv } from "@/lib/fileSystem/fileSystemMeta";

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
    static touch = "touch <filePath> - creates a file with the path given in the argument";
    static cp = "cp <oldPath> <newPath> - copies an existing file or directory to the new path";
    static mv = "mv <oldPath> <newPath> - moves an existing file or directory to the new path";
    static rm = "rm [-r|-f] <path> - removes the file or directory with the given path";
    static cat = "cat <filePath> - prints our the contents of the given file";
    static open =
        "open <filePath> - opens the file with the given path.  Only files with the execute permission can be opened";
    static edit =
        "edit <filePath> - opens the file with the given path for editing.  Only files with the write permission can be edited";
    static color =
        "color [color] - sets the terminal text color to the given hex color in the form #rrggbb or #rgb.  For example: #ff0000 or #f00";
    static theme =
        "theme [theme] - sets the site theme to the given theme name.  Use -l or --list to list available themes";
    static resize = "resize <size> - resizes the terminal to the given height in pixels";
    static history = "history [-c] [clear|<num_commands>] - prints the command history or clears it";
    static sleep = "sleep <seconds> - sleeps for the given number of seconds";
    static exit = "exit [code] - clears the terminal and closes it";
    static restart = "restart - Reloads the page";
    static reset = "reset | nuke - Resets all persistent page data";
    static mips = "mips - launches a simulation of the MIPS terminal project (launched as a subprocess)";
    static nuke = Help.reset;
    static halsay = "halsay [msg] - Generates an ASCII image of Hal-9000 with the option of a custom message";
    static eightball = `eightball <query> - Your one-stop shop for all your fortune-telling needs!`;
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
    static hostname = "hostname - displays the system hostname";
    static void = "void - ██████████████";
    static admin = "admin - Administrator use only";
    static toucan = "toucan - le toucan has arrived";
    static pacer = "pacer - the FitnessGram™ Pacer Test";

    /**
     * Aggregates all the help information into a single string
     * @return {string} The aggregated help information
     * @private
     */
    static _aggregateHelp() {
        let aggStr = "";
        let lastHelp = "";

        for (let key of Object.keys(Help)) {
            if (key === "_secretSentinel") break;
            if (key.startsWith("_") || key.includes("Menu")) continue;
            if (Help[key] === lastHelp) continue;
            aggStr += Help[key] + "\n";
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

        for (let key of Object.keys(Help)) {
            if (key.startsWith("_") || key.includes("Menu")) continue;
            if (Help[key] === lastHelp) continue;
            aggStr += Help[key] + "\n";
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

export { Help };
