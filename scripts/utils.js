import $ from "jquery";

/**
 * Class to hold constants used throughout the site.
 */
class Constants {
    static resumeUrl = "/assets/resume.pdf";
}


/**
 * Class to hold system environment variables for the terminal.
 */
class SysEnv {

    static USER = "guest";
    static HOME_FOLDER = "/home/"+this.USER;
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
        if(permString.length !== 3) throw Error("Expected a permission string of length 3!");
        if(![this.READ, "-"].includes(permString[0])) throw Error(`Expected '${this.READ}' or '-' at permissions[0]!`);
        if(![this.WRITE, "-"].includes(permString[1])) throw Error(`Expected '${this.WRITE}' or '-' at permissions[1]!`);
        if(![this.EXECUTE, "-"].includes(permString[2])) throw Error(`Expected '${this.EXECUTE}' or '-' at permissions[2]!`);
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


/**
 * Add a hashCode function to the String prototype.
 * @return {number} The hash code of the string
 */
String.prototype.hashCode = function() {
  let hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};


/**
 * Class to hold the dialog queue and lock for the dialog box.
 * @type {{title: string, body: string, duration: number}[]}
 */
let dialogQueue = [];
/**
 * Lock to prevent multiple dialogs from being shown at once.
 * @type {boolean}
 */
let dialogLock = false;

/**
 * Adds a dialog box to the queue to be shown with the specified title, body, and duration.
 * @param title {string} The title of the dialog box
 * @param body {string} The body of the dialog box
 * @param duration {number} The duration to show the dialog box util it is faded out
 */
function showDialog(title, body, duration = 2000) {
    dialogQueue.push({title: title, body: body, duration: duration});
    if(!dialogLock) {
        dialogLock = true;
        showNextDialog();
    }
}


/**
 * Recursively shows all the dialogs in the queue in order.
 */
function showNextDialog() {
    // If there are no more dialogs to show, release the lock
    if(dialogQueue.length === 0) {
        dialogLock = false;
        return;
    }

    let dialog = dialogQueue.shift();
    document.getElementById("dialogBoxTitle").innerText = dialog.title;
    document.getElementById("dialogBoxBody").innerText = dialog.body;
    document.getElementById("dialogBox").style.display = "block";

    // Fade out the dialog box after a certain duration
    setTimeout(() => {
        $("#dialogBox").fadeOut("slow", () => {
            // Recursively show the next dialog after the current one fades out
            showNextDialog();
        });
    }, dialog.duration);

}


// Add a visible and invisible function to the jQuery prototype
if(typeof window !== 'undefined'){
    let $ = require("jquery");
    $.fn.visible = function() {return this.css('visibility', 'visible');};
    $.fn.invisible = function() {return this.css('visibility', 'hidden');};
}


export { Constants, Perms, SysEnv, showDialog, ANSI };
