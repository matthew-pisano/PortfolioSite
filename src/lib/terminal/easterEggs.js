import {ANSI, SysEnv} from "@/lib/fileSystem/fileSystemMeta";
import {eightballResponses, hal9000, pacerTest, rmRootMessage} from "@/lib/terminal/strings";


/**
 * A list of all previous eightball questions
 * @type {string[]}
 */
let prevEightballQuestions = [];


/**
 * Generates a random response for the eightball command
 * @param question {string} The question to generate a response for
 * @return {string} The random eightball response
 */
function eightBall(question=""){
    if (question && prevEightballQuestions.includes(question) && Math.random() < 0.1) return "That question seems...oddly familiar...";
    if (question) prevEightballQuestions.push(question);

    let resultIndex = Math.floor(Math.random()*eightballResponses.length);
    let answer = eightballResponses[resultIndex];
    if (!question && (answer.includes("\n") || answer.length > 70)) return "Your one-stop shop for all your fortune-telling needs!";
    return answer;
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
 * Generates a message from Hal-9000
 * @param msg {string} The message to display
 * @param colorEye {boolean} Whether to color the eye red
 * @return {string} The message from Hal-9000
 */
function hal(msg, colorEye = false) {
    let asciiArt = hal9000;
    if(colorEye) asciiArt = asciiArt.replace("(o)", ANSI.RED+"(o)"+ANSI.DEFAULT);
    return asciiArt.replace("{msg}", msg.replace("\n", " "));
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
        if(x.nodeType === 1) await removeStyles(x, 0);
    }
}


/**
 * Displays the root deletion message and displays the BSOD
 */
async function *rmRoot() {

    let lines = rmRootMessage.split("\n");
    for (let i = 0; i < lines.length; i++) {
        yield lines[i]+"\n";
        await new Promise(resolve => setTimeout(resolve, 20));
    }
    let pageElem = document.getElementById("page");
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
    window.document.documentElement.style.backgroundColor = "#020183";
    window.document.body.innerHTML = '<img src="/media/image/bsod.png" alt="bsod" style="width: 100%;"/>';
}


/**
 * Replace the current page with the void page
 * @returns {AsyncGenerator<string, void, *>}
 */
async function *toVoid() {
    let voidStr = "I T - C O N S U M E S - A L L".replace(/ /g, "\xa0");
    await new Promise(resolve => setTimeout(resolve, 500));

    // Slowly print the void string
    for (let letter of voidStr) {
        yield letter;
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.href = "/void";
}


export { eightBall, haltingProblem, hal, runPacer, rmRoot, toVoid };
