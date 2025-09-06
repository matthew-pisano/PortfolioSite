import { ANSI, SysEnv } from "@/lib/fileSystem/fileSystemMeta";
import { eightballResponses, hal9000, pacerTest, rmRootMessage } from "@/lib/terminal/strings";

/**
 * A list of all previous eightball questions
 * @type {string[]}
 */
let prevEightballQuestions = [];

/**
 * The last time the eightball command was used
 * @type {number} Timestamp in milliseconds
 */
let lastEightballTime = 0;

/**
 * Generates a random response for the eightball command
 * @param question {string} The question to generate a response for
 * @yields {string} The eightball response
 */
async function* eightBall(question) {
    // Ensure question is of right form
    if (question === "") return yield "You need to give me a question to answer :/";
    if (!question.endsWith("?")) return yield "That doesn't look like a question to me...try adding a '?' at the end";

    let spaces = (question.match(/\S \S/g) || []).length;
    if (spaces < 2) {
        return yield "You dare ask me such a trivial question?  I need something longer, something more complex...";
    }
    if (spaces < 4 && Math.random() < 0.6)
        return yield "I'm getting tired of these simple questions...try again with something longer and more interesting!";

    // 42
    if ((question.match(/meaning of life/g) || []).length > 0 || (question.match(/answer to life/g) || []).length)
        return yield "That's pretty played out...don't you think?";

    // Ensure questions are not too fast
    let eightballTimeDiff = Date.now() - lastEightballTime;
    lastEightballTime = Date.now();
    if (eightballTimeDiff < 2000) {
        if (Math.random() < 0.8) return yield "Whoa, slow down there!  I can only answer so fast!";
        return yield "Hold on hold on!  I need, like, two seconds to gather my thoughts.  Can you do that for me?";
    }

    // Ensure questions are not repeated too many times
    let previousOcurences = prevEightballQuestions.filter((v) => v === question).length;
    prevEightballQuestions.push(question);

    if (question && previousOcurences) {
        if (previousOcurences === 1) yield "Again?  Fine, one second; I don't like repeat questions too much...\n\n";
        else if (previousOcurences === 2) return yield "That question seems...oddly familiar...";
        else if (previousOcurences === 3) return yield "I am no one to be trifled with.";
        else if (previousOcurences === 4) yield "Alright, last chance!  I'll humor you once more...\n\n";
        else if (previousOcurences === 5) return yield "I do not appreciate being messed with.";
        else if (previousOcurences === 6) return yield "I will not even dignify that with a response.";
        else if (previousOcurences > 10) {
            yield "That's it buster, I'm putting you in time out!\n";
            return yield* await toVoid();
        } else return yield "";
    }

    // Select answer
    let resultIndex = Math.floor(Math.random() * eightballResponses.length);
    yield eightballResponses[resultIndex];
}

/**
 * Computes the solution to the halting problem...then segfaults
 * @yields {string} The halting problem output
 */
async function* haltingProblem() {
    let dots = 7;

    await new Promise((resolve) => setTimeout(resolve, 250));
    yield "Computing solution to halting problem";
    // Loading dots
    while (dots > 0) {
        yield ".";
        await new Promise((resolve) => setTimeout(resolve, 500));
        dots--;
    }

    yield "\nOperation completed successfully!";
    yield "\nPrinting solution...";
    await new Promise((resolve) => setTimeout(resolve, 1500));
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
    if (colorEye) asciiArt = asciiArt.replace("(o)", ANSI.RED + "(o)" + ANSI.DEFAULT);
    return asciiArt.replace("{msg}", msg.replace("\n", " "));
}

/**
 * Runs the FitnessGram™ Pacer Test
 * @yields {string} The pacer test output
 */
async function* runPacer() {
    // Delay for the terminal to catch up
    await new Promise((resolve) => setTimeout(resolve, 500));
    yield pacerTest;
    // Play the instruction audio
    await new Audio("/media/audio/pacer.mp3").play();
    await new Promise((resolve) => setTimeout(resolve, 42000));

    let numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    let delays = [2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100];

    // Display the numbers and play the beep
    let beep = new Audio("/media/audio/pacerBeep.mp3");
    for (let i = 0; i < numbers.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delays[i]));
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
async function removeStyles(el, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    el.removeAttribute("style");
    el.setAttribute("src", "");
    el.setAttribute("class", "");
    el.style.display = "";

    for (const x of el.childNodes) {
        if (x.nodeType === 1) await removeStyles(x, delay);
    }
}

/**
 * Removes all child elements of an element with a delay
 * @param el {HTMLElement|ChildNode} The element to remove children from
 * @param delay {number} The delay between removing children
 * @returns {Promise<void>}
 */
async function removeElement(el, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    let children = Array.from(el.childNodes);
    for (let child of children) await removeElement(child, delay);
    el.remove();
}

/**
 * Displays the root deletion message and displays the BSOD
 */
async function* rmRoot() {
    let lines = rmRootMessage.split("\n");
    for (let i = 0; i < lines.length; i++) {
        yield lines[i] + "\n";
        await new Promise((resolve) => setTimeout(resolve, 20));
    }

    let currentFileName = document.getElementById("itemStatus").innerText;

    // Remove status elements
    document.getElementById("menuDropHolder").remove();
    for (let statusElem of ["langStatus", "encodingStatus", "linesStatus", "sizeStatus", "itemStatus"]) {
        document.getElementById(statusElem).innerText = "???";
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    let pageElem = document.getElementById("page");
    // Remove all elements under the page element
    let children = Array.from(pageElem.childNodes);
    for (let child of children) await removeElement(child, 15);

    // Add error to page
    await new Promise((resolve) => setTimeout(resolve, 1000));
    pageElem.innerHTML = `<p style="color: red">ERROR: Could not read directory '${currentFileName}'</p>`;

    // Add error to sidebar
    await new Promise((resolve) => setTimeout(resolve, 1000));
    document.getElementById("sidebarContent").innerHTML =
        `<p style="color: red">ERROR: Could not read directory '${SysEnv.PUBLIC_FOLDER}'</p>`;

    // Remove terminal
    await new Promise((resolve) => setTimeout(resolve, 1000));
    document.getElementById("terminalHolder").remove();

    // Remove Styles
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await removeStyles(document.documentElement, 100);
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    document.getElementsByTagName("html")[0].style.color = "black";

    // Show BSOD
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.document.documentElement.style.backgroundColor = "#020183";
    window.document.body.innerHTML = '<img src="/media/image/bsod.png" alt="bsod" style="width: 100%;"/>';
}

/**
 * Replace the current page with the void page
 * @yields {string} The void string, printed one character at a time
 */
async function* toVoid() {
    let voidStr = "I T - C O N S U M E S - A L L".replace(/ /g, "\xa0");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Slowly print the void string
    for (let letter of voidStr) {
        yield letter;
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = "/void";
}

export { eightBall, haltingProblem, hal, runPacer, rmRoot, toVoid };
