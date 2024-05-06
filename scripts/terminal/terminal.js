import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { SysEnv } from '../utils';
import { resolvePath, Commands, closeTerminal } from './commands';


const TerminalDiv = () => {

    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [prevCommands, setPrevCommands] = useState([""]);
    const [draftCommand, setDraftCommand] = useState("");
    const [commandIndex, setCommandIndex] = useState(-1);
    const [ENV, setENV] = useState({ CWD: SysEnv.HOME_FOLDER, HOME: SysEnv.HOME_FOLDER, COLOR: "#ffffff", CLOSED: true, CLOSE_TIME: 0 });

    function genPrompt (cwd) {
        if (cwd.startsWith(SysEnv.HOME_FOLDER)) cwd = cwd.replace(SysEnv.HOME_FOLDER, "~");
        return "[" + cwd + "]$ ";
    }

    const [prompt, setPrompt] = useState(genPrompt(SysEnv.HOME_FOLDER));

    useEffect(() => {
        document.getElementById("terminalHolder").classList.remove('gone');

        document.getElementById("terminal").addEventListener("openTo", (evt) => {
            resize(evt.detail ? evt.detail: 210);
        });

        document.getElementById("terminal").addEventListener("close", (evt) => {
            resize(0);
        });

        document.getElementById("terminalInput").addEventListener("submit", (evt) => {
            submit();
        });
    }, []);

    useEffect(() => {
        let terminalHolder = document.getElementById("terminalHolder");
        if(!terminalHolder) return;
        setPrompt(genPrompt(ENV.CWD));
        terminalHolder.style.color = ENV.COLOR;
    });

    function dragStart(e) {
        let resizable = document.getElementById('terminal');
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    }

    function resize(height) {
        if (height > window.innerHeight - 80) height = window.innerHeight - 80;
        if ((height > 200 || ENV.CLOSED) && height > 90) {
            document.getElementById('terminal').style.height = `${height}px`;
            document.getElementById('terminalOutput').style.height = `${height - 80}px`;
            $('#terminalClose').visible();
            $('#terminalBottom').visible();
            document.getElementById('terminalInput').focus();
            ENV.CLOSED = false;
            setENV(ENV);
        }
        else {
            ENV.CLOSED = true;
            setENV(ENV);
            closeTerminal();
        }
    }

    function submit() {
        let terminalInput = document.getElementById('terminalInput');
        let terminalOutput = document.getElementById('terminalOutput');
        // console.log("Untrimmed command:", terminalInput.innerText.split());
        let command = terminalInput.innerText.trim().replace(/\r?\n\r?\n|\r\r/g, " ").replace(/\r?\n|\r/g, "");
        command = command.replace(/\xa0/g, " ");
        // console.log("Got command: "+command);
        terminalInput.innerText = "";

        if (prevCommands[0] === "" && command.length > 0) setPrevCommands([command, ...prevCommands.slice(1)]);
        else if (prevCommands[prevCommands.length - 1] !== command && command.length > 0) setPrevCommands([...prevCommands, command]);

        setDraftCommand("");
        setCommandIndex(-1);

        const { result: result, env: newEnv } = Commands._parseCommand(command, ENV);
        setENV(newEnv);

        terminalOutput.innerText += "\n" + prompt + command + "\n" + result + "\n";
    }
    function onInput(e) {
        // console.log("Got input:", e.nativeEvent);
        if (e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText")
            submit();

        let terminalOutput = document.getElementById('terminalOutput');
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function onKeyDown(e) {
        let newI = commandIndex;
        let terminalInput = document.getElementById('terminalInput');
        if (e.code === "ArrowUp") {
            if (commandIndex === -1 && terminalInput.innerText.length > 0) {
                setDraftCommand(terminalInput.innerText.replace("\n", "").replace("\r", ""));
                console.log("Saving command '" + terminalInput.innerText.replace("\n", "").replace("\r", "") + "'");
            }
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

    return (
        <div id="terminalHolder" className='w3-row gone'>
            <div id='terminalThumb'
                draggable='true'
                onDragStart={dragStart}
                onDragEnd={(e) => resize(initialSize + initialPos - e.clientY + 50)}
            />
            <div id='terminal' onClick={() => {
                if (ENV.CLOSED && Date.now() - ENV.CLOSE_TIME > 500) resize(210);
            }}>
                <div><span>/bin/mash</span>
                    <button id="terminalClose" className='w3-button' style={{ float: "right", marginRight: "10px", visibility: "hidden" }}
                        onClick={() => {
                            closeTerminal();
                            ENV.CLOSED = true;
                            ENV.CLOSE_TIME = Date.now();
                            setENV(ENV);
                        }}>X</button></div>
                <div id="terminalOutput" onClick={() => document.getElementById('terminalInput').focus()}></div>
                <div id="terminalBottom" style={{ visibility: "hidden" }}>
                    <div id="terminalPrompt">{prompt}</div>
                    <div id="terminalInput" style={{ marginLeft: (9 * prompt.length + 5) + "px" }} contentEditable="true" onInput={onInput} onKeyDown={onKeyDown}></div>
                </div>
            </div>
        </div>
    );

};

export default TerminalDiv;
export { closeTerminal };
