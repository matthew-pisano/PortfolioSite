import $ from 'jquery';
import React, {useEffect, useState} from 'react';
import {showDialog} from '../utils';
import {Commands} from './commands';
import {masterFileSystem} from "../fileSystem/buildfs";
import {ANSI, SysEnv} from "../fileSystem/fileSystemMeta";


/**
 * Whether the terminal is being dragged.  Needs to be global to be accessed by the event listeners
 * @type {boolean}
 */
let isDragging = false;


/**
 * The terminal div component
 * @return {JSX.Element} The terminal div
 */
function TerminalDiv() {

    const [prevCommands, setPrevCommands] = useState([""]);
    const [draftCommand, setDraftCommand] = useState("");
    const [commandIndex, setCommandIndex] = useState(-1);
    const [ENV, setENV] = useState({ CWD: SysEnv.HOME_FOLDER, HOME: SysEnv.HOME_FOLDER, COLOR: "#ffffff", CLOSED: true, CLOSE_TIME: 0 });

    /**
     * The height of the terminal
     * @type {number}
     */
    let terminalHeight = 0;

    /**
     * The number of file drag enter events
     * @type {number}
     */
    let enterEvents = 0;
    /**
     * The number of file drag leave events
     * @type {number}
     */
    let leaveEvents = 0;

    /**
     * Generates the prompt string
     * @param cwd {string} The current working directory
     * @param colored {boolean} Whether to color the prompt
     * @return {string} The prompt string
     */
    function genPrompt (cwd, colored) {
        if (cwd.startsWith(SysEnv.HOME_FOLDER)) cwd = cwd.replace(SysEnv.HOME_FOLDER, "~");
        let rawTest;
        if (colored) {
            rawTest = `[${ANSI.GREEN}${SysEnv.USER}${ANSI.DEFAULT}]-(${ANSI.CYAN}${cwd}${ANSI.DEFAULT})$\xa0`;
            return ANSI.colorText(rawTest).elems.map(e => e.outerHTML).join("");
        }
        return `[${SysEnv.USER}]-(${cwd})$\xa0`;
    }

    const [prompt, setPrompt] = useState(genPrompt(SysEnv.HOME_FOLDER, false));

    useEffect(() => {
        // Show the terminal thumb and add event listeners
        document.getElementById("terminalHolder").classList.remove('gone');

        document.getElementById("terminal").addEventListener("openTo", (evt) => {
            resize(evt.detail ? evt.detail: 210);
        });

        document.getElementById("terminal").addEventListener("close", () => {
            exit();
        });

        // Add zoom functionality to the terminal
        $("#terminal").bind('mousewheel DOMMouseScroll', (evt) => {
            if(evt.ctrlKey === true) {
                evt.preventDefault();
                let terminal = document.getElementById('terminal');
                let fontSize = parseFloat(window.getComputedStyle(terminal).fontSize);

                if(evt.originalEvent.detail > 0) terminal.style.fontSize = `${fontSize - 1}px`;
                else terminal.style.fontSize = `${fontSize + 1}px`;
            }
        });

        document.getElementById("terminalInput").addEventListener("submit", () => {
            submit();
        });

        setPrompt(genPrompt(ENV.CWD, true));
        // Listeners need to be global to avoid losing track of the thumb
        document.addEventListener("mousemove", thumbDrag);
        document.addEventListener("mouseup", thumbDragEnd);
    }, []);

    useEffect(() => {
        // Set the prompt and color
        let terminalHolder = document.getElementById("terminalHolder");
        if(!terminalHolder) return;
        let newPrompt = genPrompt(ENV.CWD, true);
        setPrompt(newPrompt);
        terminalHolder.style.color = ENV.COLOR;
        document.getElementById("terminalPrompt").innerHTML = newPrompt;
    });

    /**
     * Initiates the terminal thumb drag
     */
    function thumbDragStart() {
        isDragging = true;
    }

    /**
     * Handles the drag event for the terminal thumb
     * @param e {MouseEvent} The mouse move event
     */
    function thumbDrag(e) {
        if (!isDragging) return;
        let thumb = document.getElementById('terminalThumb');
        let newHeight = thumb.getBoundingClientRect().top - e.clientY + terminalHeight;
        resize(newHeight);
    }

    /**
     * Terminates the terminal thumb drag
     */
    function thumbDragEnd() {
        isDragging = false;
    }

    /**
     * Resizes the terminal to the given height
     * @param height {number} The height to resize to
     */
    function resize(height) {
        let terminal = document.getElementById('terminal');
        let terminalFileHandler = document.getElementById('terminalFileHandler');
        // Ensure the terminal is not too tall
        if (height > window.innerHeight - 120)
            height = window.innerHeight - 120;
        else if (height < 90)
            height = 90;

        // Resize the terminal to the given height
        terminal.style.height = `${height}px`;
        terminal.style.display = "block";
        terminalFileHandler.style.height = `${height}px`;
        terminalFileHandler.style.display = "block";
        terminalFileHandler.style.visibility = "hidden";
        document.getElementById('terminalInput').focus();
        document.getElementById('terminalClose').style.visibility = "visible";
        ENV.CLOSED = false;
        setENV(ENV);
        terminalHeight = height;
    }

    /**
     * Submits the command in the terminal input
     */
    async function submit() {
        let terminal = document.getElementById('terminal');
        let terminalInput = document.getElementById('terminalInput');
        let terminalBottom = document.getElementById('terminalBottom');
        let terminalOutput = document.getElementById('terminalOutput');

        // Sanitize the command from the input
        let command = terminalInput.innerText.trim().replace(/\r?\n\r?\n|\r\r/g, " ").replace(/\r?\n|\r/g, "");
        command = command.replace(/\xa0/g, " ");
        // Clear the terminal input area
        terminalInput.innerText = "";
        terminalBottom.style.visibility = "hidden";

        // Add the command to the history
        if (prevCommands[0] === "" && command.length > 0) setPrevCommands([command, ...prevCommands.slice(1)]);
        else if (prevCommands[prevCommands.length - 1] !== command && command.length > 0) setPrevCommands([...prevCommands, command]);

        setDraftCommand("");
        setCommandIndex(-1);

        if (!terminalOutput.innerHTML.endsWith("<br>") && terminalOutput.innerHTML) terminalOutput.innerHTML += "<br>";
        terminalOutput.innerHTML += `<span>${prompt + command}</span><br>`;

        let lastColor;
        Commands.ENV = ENV;

        // Parse the command and update the environment
        for await (let partial of Commands.parseCommand(command.replace(/\\e/g, "\u001b"))) {

            // Carry over the last color to the next line
            if (lastColor) partial = lastColor + partial;

            // Update the terminal output with text segment
            if (ANSI.isColored(partial)) {
                let coloredResult = ANSI.colorText(partial);
                lastColor = coloredResult.lastColor;
                for (let element of coloredResult.elems)
                    terminalOutput.appendChild(element);
            }
            else {
                let span = document.createElement('span');
                span.innerText = partial;
                terminalOutput.appendChild(span);
            }

            terminal.scrollTop = terminal.scrollHeight;
        }
        setENV(Commands.ENV);
        terminalBottom.style.visibility = "visible";
        document.getElementById('terminalInput').focus();
    }

    /**
     * Handles the input event
     * @param e {object} The input event
     */
    function onInput(e) {
        // Submit the command if the user presses enter
        if (e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText")
            submit();

        // Scroll the terminal output to the bottom on input
        let terminalOutput = document.getElementById('terminalOutput');
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    /**
     * Handles the key down event
     * @param e {object} The key down event
     */
    function onKeyDown(e) {
        let newI = commandIndex;
        let terminalInput = document.getElementById('terminalInput');
        // Handle the arrow keys to navigate the command history
        if (e.code === "ArrowUp") {
            // Save the draft command if it is not in the history
            if (commandIndex === -1 && terminalInput.innerText.length > 0)
                setDraftCommand(terminalInput.innerText.replace("\n", "").replace("\r", ""));

            if (commandIndex < prevCommands.length - 1) {
                setCommandIndex(commandIndex + 1);
                newI++;
            }
            terminalInput.innerText = prevCommands[prevCommands.length - 1 - newI];
        }
        else if (e.code === "ArrowDown") {
            if (commandIndex > -1) {
                setCommandIndex(commandIndex - 1);
                newI--;
            }
            terminalInput.innerText = newI > -1 ? prevCommands[prevCommands.length - 1 - newI] : draftCommand;
        }
    }

    /**
     * Handles the drag enter event for the terminal
     * @param e {DragEvent} The drag event
     */
    function onDragEnter(e) {
        enterEvents += 1;
        e.preventDefault();

        if (!e.dataTransfer.items || e.dataTransfer.items.length === 0 || e.dataTransfer.items[0].kind !== "file") return;

        document.getElementById('terminalFileHandler').style.visibility = "visible";
    }

    /**
     * Handles the drag leave event for the terminal
     * @param e {DragEvent} The drag event
     */
    function onDragLeave(e) {
        leaveEvents += 1;
        e.preventDefault();

        if (leaveEvents < enterEvents) return;

        document.getElementById('terminalFileHandler').style.visibility = "hidden";
    }

    /**
     * Handles the drop event for the terminal
     * @param e {DragEvent} The drag event
     */
    function onDrop(e) {
        enterEvents = 0;
        leaveEvents = 0;
        e.preventDefault();

        let files = e.dataTransfer.files;
        for (let file of files) {

            if (!file.type.startsWith("text")) {
                showDialog("Invalid File", `'${file.name}' is not a text file`);
                continue;
            }

            let reader = new FileReader();
            reader.onload = (e) => {
                try {
                    let text = e.target.result;

                    let mntPath = SysEnv.MOUNT_FOLDER + "/" + file.name;
                    masterFileSystem.writeText(mntPath, text);

                    showDialog("Copied File", `Copied to '${mntPath}'`);
                }catch (e) {
                    showDialog("Error", e.message);
                }
            };
            reader.readAsText(file);
        }

        document.getElementById('terminalFileHandler').style.visibility = "hidden";
    }

    /**
     * Exits the terminal
     */
    async function exit() {
        Commands.ENV = ENV;
        await Commands.exit([]).next();
        setENV(Commands.ENV);
    }

    return (
        <div id="terminalHolder" className='w3-row gone'>
            <div id='terminalFileHandler'>
                <span id="terminalFileIndicator">Drag Files Here</span>
            </div>
            <div id='terminalThumb' onMouseDown={thumbDragStart}><span id='terminalThumbDots'>• • •</span></div>
            <div id="terminalHeader" onClick={() => {
                if (ENV.CLOSED && Date.now() - ENV.CLOSE_TIME > 500) resize(210);
            }}>
                <span>/bin/mash</span>
                <button id="terminalClose" className='w3-button' onClick={exit}>X</button>
            </div>
            <div id='terminal' onClick={(e) => {
                // Focus the terminal input if the user clicks on the terminal
                // Ensure the user is not selecting text, and it is a single click
                if (e.detail === 1 && window.getSelection().isCollapsed)
                    document.getElementById('terminalInput').focus();
            }} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
                <div id="terminalOutput"></div>
                <div id="terminalBottom">
                    <div id="terminalPrompt"></div>
                    <div id="terminalInput" contentEditable="true" onInput={onInput} onKeyDown={onKeyDown}></div>
                </div>
            </div>
        </div>
    );
}


export default TerminalDiv;
