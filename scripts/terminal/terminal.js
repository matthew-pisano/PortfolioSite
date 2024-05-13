import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { SysEnv } from '../utils';
import { Commands } from './commands';


/**
 * The terminal div component
 * @return {JSX.Element} The terminal div
 */
const TerminalDiv = () => {

    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [prevCommands, setPrevCommands] = useState([""]);
    const [draftCommand, setDraftCommand] = useState("");
    const [commandIndex, setCommandIndex] = useState(-1);
    const [ENV, setENV] = useState({ CWD: SysEnv.HOME_FOLDER, HOME: SysEnv.HOME_FOLDER, COLOR: "#ffffff", CLOSED: true, CLOSE_TIME: 0 });

    /**
     * Generates the prompt string
     * @param cwd {string} The current working directory
     * @return {string} The prompt string
     */
    function genPrompt (cwd) {
        if (cwd.startsWith(SysEnv.HOME_FOLDER)) cwd = cwd.replace(SysEnv.HOME_FOLDER, "~");
        return `[${SysEnv.USER}]-(${cwd})$ `;
    }

    const [prompt, setPrompt] = useState(genPrompt(SysEnv.HOME_FOLDER));

    useEffect(() => {
        // Show the terminal thumb and add event listeners
        document.getElementById("terminalHolder").classList.remove('gone');

        document.getElementById("terminal").addEventListener("openTo", (evt) => {
            resize(evt.detail ? evt.detail: 210);
        });

        document.getElementById("terminal").addEventListener("close", (evt) => {
            exit();
        });

        document.getElementById("terminalInput").addEventListener("submit", (evt) => {
            submit();
        });
    }, []);

    useEffect(() => {
        // Set the prompt and color
        let terminalHolder = document.getElementById("terminalHolder");
        if(!terminalHolder) return;
        setPrompt(genPrompt(ENV.CWD));
        terminalHolder.style.color = ENV.COLOR;
    });

    /**
     * Handles the drag start event
     * @param e {DragEvent} The drag event
     */
    function dragStart(e) {
        let resizable = document.getElementById('terminal');
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    }

    /**
     * Resizes the terminal to the given height
     * @param height {number} The height to resize to
     */
    function resize(height) {
        let terminal = document.getElementById('terminal');
        // Ensure the terminal is not too tall
        if (height > window.innerHeight - 120)
            height = window.innerHeight - 120;
        else if (height < 90)
            height = 90;

        // Resize the terminal to the given height
        terminal.style.height = `${height}px`;
        terminal.style.display = "block";
        document.getElementById('terminalInput').focus();
        document.getElementById('terminalClose').style.visibility = "visible";
        ENV.CLOSED = false;
        setENV(ENV);
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

        if (!terminalOutput.innerText.endsWith("\n") && terminalOutput.innerText) terminalOutput.innerText += "\n";
        terminalOutput.innerText += prompt + command + "\n";

        // Parse the command and update the environment
        for await (let line of Commands.parseCommand(command, ENV)) {
            setENV(Commands.ENV);
            // Update the terminal output with next line
            terminalOutput.innerText += line;
            terminal.scrollTop = terminal.scrollHeight;
        }

        terminalBottom.style.visibility = "visible";
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
     * Exits the terminal
     */
    async function exit() {
        Commands.ENV = ENV;
        await Commands.exit([]).next();
        setENV(Commands.ENV);
    }

    return (
        <div id="terminalHolder" className='w3-row gone'>
            <div id='terminalThumb'
                 draggable='true'
                 onDragStart={dragStart}
                 onDragEnd={(e) => resize(initialSize + initialPos - e.clientY)}
            />
            <div id="terminalHeader" onClick={() => {
                if (ENV.CLOSED && Date.now() - ENV.CLOSE_TIME > 500) resize(210);
            }}>
                <span>/bin/mash</span>
                <button id="terminalClose" className='w3-button' onClick={exit}>X</button>
            </div>
            <div id='terminal' onClick={() => document.getElementById('terminalInput').focus()}>
                <div id="terminalOutput"></div>
                <div id="terminalBottom">
                    <div id="terminalPrompt">{prompt}</div>
                    <div id="terminalInput" style={{marginLeft: (9 * prompt.length + 5) + "px"}} contentEditable="true" onInput={onInput} onKeyDown={onKeyDown}></div>
                </div>
            </div>
        </div>
    );

};

export default TerminalDiv;
