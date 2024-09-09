
/**
 * Class to hold system environment variables for the terminal.
 */
class SysEnv {

    static USER = "guest";
    static HOME_FOLDER = "/home/" + this.USER;
    static PUBLIC_FOLDER = `${this.HOME_FOLDER}/public`;
    static MOUNT_FOLDER = `${this.HOME_FOLDER}/mnt`;

    static SHELL = "GRU mash, version 5.1.16(1)-release";
    static ARCH = "x86_64-cloud-manix-gru";
    static OS = "primOS 10.02.1";
    static KERNEL = "7.05.01-server";
}


/**
 * Class to hold permission constants for the file system.
 */
class Perms {

    static READ = "r";
    static WRITE = "w";
    static EXECUTE = "x";
    static DENY = "---";
    static ALLOW = this.READ + this.WRITE + this.EXECUTE;
    static READ_ONLY = this.READ + "-" + this.EXECUTE;
    static NO_EXECUTE = this.READ + "--";

    static validate(permString) {
        if (permString.length !== 3) throw Error("Expected a permission string of length 3!");
        if (![this.READ, "-"].includes(permString[0])) throw Error(`Expected '${this.READ}' or '-' at permissions[0]!`);
        if (![this.WRITE, "-"].includes(permString[1])) throw Error(`Expected '${this.WRITE}' or '-' at permissions[1]!`);
        if (![this.EXECUTE, "-"].includes(permString[2])) throw Error(`Expected '${this.EXECUTE}' or '-' at permissions[2]!`);
    }
}


/**
 * ANSI color utilities for adding color to the terminal
 */
class ANSI {
    static BLACK = "\u001b[30m";
    static RED = "\u001b[31m";
    static GREEN = "\u001b[32m";
    static YELLOW = "\u001b[33m";
    static BLUE = "\u001b[34m";
    static PURPLE = "\u001b[35m";
    static CYAN = "\u001b[36m";
    static WHITE = "\u001b[37m";
    static DEFAULT = "\u001b[39m";

    /**
     * Checks if text contains an ANSI color code
     * @param rawText {string} The text to check
     * @return {boolean} Whether the text contains an ANSI color code
     */
    static isColored(rawText) {
        return rawText.includes("\u001b[");
    }

    /**
     * Converts raw text with ANSI color codes to HTML span elements with color styling
     * @param rawText {string} The text to color
     * @return {{elems: HTMLElement[], lastColor: string}} The colored elements and the last color used for overflowing to other lines
     */
    static colorText(rawText) {
        let segments = rawText.split("\u001b[");
        let coloredElements = [];
        let color;

        for (let i = 0; i < segments.length; i++) {

            let span = document.createElement("span");

            color = "\u001b[" + segments[i].substring(0, 3);
            let text = segments[i].substring(3);
            let HTMLColor = this.asHTML(color);
            // Print either the text after the color code or the text verbatim if no color code is present
            span.innerText = (HTMLColor || color === this.DEFAULT) ? text : segments[i];
            if (HTMLColor) span.style.color = HTMLColor;

            coloredElements.push(span);
        }

        if (color === this.WHITE) color = undefined;

        return {elems: coloredElements, lastColor: color};
    }

    /**
     * Converts an ANSI color code to an HTML color code
     * @param ansiColor {string} The ANSI color code
     * @return {string} The HTML color code
     */
    static asHTML(ansiColor) {
        return {
            "\u001b[30m": "#000",
            "\u001b[31m": "#d60000",
            "\u001b[32m": "#1bc81b",
            "\u001b[33m": "#d1d116",
            "\u001b[34m": "#2c2cff",
            "\u001b[35m": "#da15da",
            "\u001b[36m": "#00ffff",
            "\u001b[37m": "#fff"
        }[ansiColor];
    }
}


export {ANSI, Perms, SysEnv};
