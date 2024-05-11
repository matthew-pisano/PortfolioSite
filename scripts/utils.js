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
    static PUBLIC_FOLDER = `/home/${this.USER}/public`;

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

    static validate(permString) {
        if(permString.length !== 3) throw Error("Expected a permission string of length 3!");
        if(![this.READ, "-"].includes(permString[0])) throw Error(`Expected '${this.READ}' or '-' at permissions[0]!`);
        if(![this.WRITE, "-"].includes(permString[1])) throw Error(`Expected '${this.WRITE}' or '-' at permissions[1]!`);
        if(![this.EXECUTE, "-"].includes(permString[2])) throw Error(`Expected '${this.EXECUTE}' or '-' at permissions[2]!`);
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
 * Show a dialog box with a title and body for a certain duration.
 * @param title {string} The title of the dialog box
 * @param body {string} The body of the dialog box
 * @param duration {number} The duration to show the dialog box util it is faded out
 */
function showDialog(title, body, duration = 2000) {
    document.getElementById("dialogBoxTitle").innerText = title;
    document.getElementById("dialogBoxBody").innerText = body;
    document.getElementById("dialogBox").style.display = "block";
    // Fade out the dialog box after a certain duration
    setTimeout(() => $("#dialogBox").fadeOut("slow"), duration);
}


// Add a visible and invisible function to the jQuery prototype
if(typeof window !== 'undefined'){
    let $ = require("jquery");
    $.fn.visible = function() {return this.css('visibility', 'visible');};
    $.fn.invisible = function() {return this.css('visibility', 'hidden');};
}


export { Constants, Perms, SysEnv, showDialog };