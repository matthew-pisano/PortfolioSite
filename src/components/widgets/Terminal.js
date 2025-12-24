import React, { useEffect, useState } from "react";

import { ANSI, SysEnv } from "@/lib/fileSystem/fileSystemMeta";
import { Commands } from "@/lib/terminal/commands";
import { EventHandlers } from "@/lib/terminal/eventHandlers";
import { Constants } from "@/lib/util/utils";
import styles from "@/styles/Terminal.module.css";

/**
 * The terminal div component
 * @return {JSX.Element} The terminal component
 */
function Terminal() {
    const [cwd, setCwd] = useState(Commands.ENV.CWD);
    const [termColor, setTermColor] = useState(Commands.ENV.COLOR);
    const [closed, setClosed] = useState(true);

    /**
     * Generates the prompt string
     * @param cwd {string} The current working directory
     * @param colored {boolean} Whether to color the prompt
     * @return {string} The prompt string
     */
    function genPrompt(cwd, colored) {
        if (cwd.startsWith(SysEnv.HOME_FOLDER)) cwd = cwd.replace(SysEnv.HOME_FOLDER, "~");
        let rawText;
        if (colored) {
            rawText = `[${ANSI.GREEN}${SysEnv.USER}${ANSI.DEFAULT}@${ANSI.GREEN}${SysEnv.HOSTNAME}${ANSI.DEFAULT}]-(${ANSI.CYAN}${cwd}${ANSI.DEFAULT})$\xa0`;
            return ANSI.colorText(rawText).text;
        }
        return `[${SysEnv.USER}@${SysEnv.HOSTNAME}]-(${cwd})$\xa0`;
    }

    const [prompt, setPrompt] = useState(genPrompt(SysEnv.HOME_FOLDER, true));

    useEffect(() => {
        // Show the terminal thumb and add event listeners
        document.getElementById("terminal").classList.remove("gone");

        let terminalBody = document.getElementById("terminalBody");
        terminalBody.addEventListener("openTo", (evt) => {
            resize(evt.detail ? evt.detail : 210);
        });
        terminalBody.addEventListener("open", open);
        terminalBody.addEventListener("close", close);

        document.getElementById("terminalInput").addEventListener("submit", submit);

        // Add zoom functionality to the terminal
        terminalBody.addEventListener("wheel", (evt) => {
            if (evt.ctrlKey === true) {
                evt.preventDefault();
                let fontSize = parseFloat(window.getComputedStyle(terminalBody).fontSize);
                if (evt.deltaY > 0 && fontSize > 11) terminalBody.style.fontSize = `${fontSize - 1}px`;
                else if (evt.deltaY < 0 && fontSize < 40) terminalBody.style.fontSize = `${fontSize + 1}px`;
            }
        });

        Commands.ENV.COLOR = window.getComputedStyle(document.documentElement).getPropertyValue("--theme-text");
        setTermColor(Commands.ENV.COLOR);
        setPrompt(genPrompt(cwd, true));
        EventHandlers.initProperties();
        EventHandlers.addEventListeners(resize);
    }, []);

    useEffect(() => {
        // Set the prompt and color
        let terminal = document.getElementById("terminal");
        if (!terminal) return;
        let newPrompt = genPrompt(cwd, true);
        setPrompt(newPrompt);
        terminal.style.color = termColor;
        document.getElementById("terminalPrompt").innerHTML = newPrompt;
    }, [cwd, termColor]);

    /**
     * Opens/shows the terminal pageComponents
     */
    function open() {
        if (closed) resize(210);
    }

    /**
     * Closes/hides the terminal pageComponents and updates the environment
     */
    function close() {
        let terminalBody = document.getElementById("terminalBody");
        terminalBody.style.display = "none";
        let terminal = document.getElementById("terminal");
        terminal.style.height = `${Constants.minTerminalHeight}px`;
        document.getElementById("terminalFileHandler").style.height = `${Constants.minTerminalHeight}px`;
        document.getElementById("terminalOutput").innerText = "";
        document.getElementById("terminalClose").style.visibility = "hidden";
        EventHandlers.terminalHeight = Constants.minTerminalHeight;

        setClosed(true);
    }

    /**
     * Resizes the terminal to the given height
     * @param height {number} The height to resize to
     */
    function resize(height) {
        let terminal = document.getElementById("terminal");
        let terminalBody = document.getElementById("terminalBody");
        let terminalFileHandler = document.getElementById("terminalFileHandler");
        // Ensure the terminal is not too tall
        if (height > window.innerHeight - 300) height = window.innerHeight - 300;
        else if (height < Constants.minTerminalHeight + 50) height = Constants.minTerminalHeight + 50;
        EventHandlers.terminalHeight = height;

        // Resize the terminal to the given height
        terminal.style.height = `${height}px`;
        terminalBody.style.height = `${height - 55}px`;
        terminalFileHandler.style.height = `${height}px`;

        // If the terminal was closed, show its pageComponents
        if (closed) {
            terminalFileHandler.style.display = "block";
            terminalFileHandler.style.visibility = "hidden";
            document.getElementById("terminalClose").style.visibility = "visible";
            terminalBody.style.display = "block";

            setClosed(false);
        }

        document.getElementById("terminalInput").focus();
    }

    /**
     * Submits the command in the terminal input
     */
    async function submit() {
        let terminalInput = document.getElementById("terminalInput");
        let terminalTextArea = document.getElementById("terminalTextArea");
        let terminalOutput = document.getElementById("terminalOutput");

        // Sanitize the command from the input
        let command = terminalInput.innerText
            .trim()
            .replace(/\r?\n\r?\n|\r\r/g, " ")
            .replace(/\r?\n|\r/g, "");
        command = command.replace(/\xa0/g, " ");
        // Clear the terminal input area
        terminalInput.innerText = "";
        terminalTextArea.style.visibility = "hidden";

        // Add the command to the history
        EventHandlers.submitCommand(command);

        // Add new line to the terminal output if the last line does not end with a new line (avoiding extra new lines)
        if (terminalOutput.innerHTML && !terminalOutput.innerHTML.replaceAll("</span>", "").endsWith("<br>"))
            terminalOutput.innerHTML += "<br>";
        terminalOutput.innerHTML += `<span>${prompt + command}</span><br>`;
        // Replace escape characters with the actual escape character
        command = command.replace(/\\e/g, "\u001b");

        Commands.ENV.CWD = cwd;
        Commands.ENV.COLOR = termColor;

        // Parse the command and update the environment
        let outputGen = Commands.parseCommand(command);
        await processCommandOutput(outputGen);

        setCwd(Commands.ENV.CWD);
        setTermColor(Commands.ENV.COLOR);
        terminalTextArea.style.visibility = "visible";
        document.getElementById("terminalInput").focus();
    }

    /**
     * Processes the output generated from a command and updates the terminal output
     * @param outputGen {AsyncGenerator<string>} The output generator from the command
     * @returns {Promise<void>}
     */
    async function processCommandOutput(outputGen) {
        let terminalBody = document.getElementById("terminalBody");
        let terminalOutput = document.getElementById("terminalOutput");

        let lastColor = null;
        for await (let partial of outputGen) {
            // Carry over the last color to the next line
            if (lastColor) partial = lastColor + partial;
            // Sanitize the output to avoid accidental HTML injection
            partial = partial.replace(/</g, "&lt;").replace(/>/g, "&gt;");

            // Update the terminal output with text segment
            if (ANSI.isColored(partial)) {
                let coloredResult = ANSI.colorText(partial);
                lastColor = coloredResult.lastColor;
                partial = coloredResult.text;
            }
            terminalOutput.innerHTML += `<span>${partial}</span>`.replace(/\n/g, "<br>");

            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    return (
        <div id="terminal" className={`w3-row gone ${styles.terminal}`}>
            <div id="spriteContainer" className={`${styles.terminalSpriteContainer}`}></div>
            <div id="terminalFileHandler" className={styles.terminalFileHandler}>
                <span className={styles.terminalFileIndicator}>Drag Files Here</span>
            </div>
            <div id="terminalThumb" className={styles.terminalThumb} onMouseDown={EventHandlers.thumbDragStart}>
                <span className={styles.terminalThumbDots}>• • •</span>
            </div>
            <div id="terminalHeader" className={styles.terminalHeader} onClick={open}>
                <span>/bin/mash</span>
                <button id="terminalClose" className={`w3-button ${styles.terminalClose}`} onClick={close}>
                    X
                </button>
            </div>
            <div
                id="terminalBody"
                className={styles.terminalBody}
                onClick={(e) => {
                    // Focus the terminal input if the user clicks on the terminal
                    // Ensure the user is not selecting text, and it is a single click
                    if (e.detail === 1 && window.getSelection().isCollapsed)
                        document.getElementById("terminalInput").focus();
                }}
                onDragEnter={EventHandlers.onDragEnter}
                onDragLeave={EventHandlers.onDragLeave}
                onDrop={EventHandlers.onDrop}>
                <div id="terminalOutput" className={styles.terminalOutput}></div>
                <div id="terminalTextArea" className={styles.terminalTextArea}>
                    <div id="terminalPrompt" className={styles.terminalPrompt}></div>
                    <div
                        id="terminalInput"
                        className={styles.terminalInput}
                        contentEditable="true"
                        onKeyDown={(e) => EventHandlers.onKeyDown(e, submit)}></div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
