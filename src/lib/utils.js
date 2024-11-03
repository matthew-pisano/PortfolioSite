import $ from "jquery";


/**
 * Class to hold constants used throughout the site.
 */
class Constants {
    static resumeUrl = "/assets/resume.pdf";
    static minTerminalHeight = 70;
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


/**
 * Generates a page title based on the local file path.
 * @param localFile The path to the local file
 * @returns {string} The page title
 */
function genPageTitle(localFile) {
    return typeof window !== 'undefined' ? window.location.pathname.substring(1) : localFile.split("pages/")[1].split(".js")[0];
}


// Add a visible and invisible function to the jQuery prototype
if(typeof window !== 'undefined'){
    let $ = require("jquery");
    $.fn.visible = function() {return this.css('visibility', 'visible');};
    $.fn.invisible = function() {return this.css('visibility', 'hidden');};
}


export { Constants, showDialog, genPageTitle };
