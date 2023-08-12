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

    let genPrompt = (cwd) => {
        if (resolvePath(ENV.CWD, cwd) === SysEnv.HOME_FOLDER) cwd = "~";
        return "[" + cwd + "]$ ";
    };

    const [prompt, setPrompt] = useState(genPrompt(SysEnv.HOME_FOLDER));

    useEffect(() => {
        document.getElementById("terminalHolder").style.display = "block";
    }, []);

    useEffect(() => {
        let terminalHolder = document.getElementById("terminalHolder");
        if(!terminalHolder) return;
        setPrompt(genPrompt(ENV.CWD));
        terminalHolder.style.color = ENV.COLOR;
    });

    const dragStart = (e) => {
        let resizable = document.getElementById('terminal');
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    };

    const resize = (e, heightOverride) => {
        let height = heightOverride ? heightOverride : initialSize + initialPos - e.clientY + 50;
        if (height > window.innerHeight - 80) height = window.innerHeight - 80;
        console.log("Resizing terminal", height, ENV.CLOSED, "max:", window.innerHeight);
        if (height > 200) {
            document.getElementById('terminal').style.height = `${height}px`;
            document.getElementById('terminalOutput').style.height = `${height - 80}px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            document.getElementById('terminalClose').style.visibility = "visible";
            document.getElementById('terminalInput').focus();
            ENV.CLOSED = false;
            setENV(ENV);
        }
        else if (ENV.CLOSED) {
            document.getElementById('terminal').style.height = `200px`;
            document.getElementById('terminalOutput').style.height = `130px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            document.getElementById('terminalClose').style.visibility = "visible";
            ENV.CLOSED = false;
            setENV(ENV);
        }
        else {
            ENV.CLOSED = true;
            setENV(ENV);
            closeTerminal();
        }
    };

    const onInput = (e) => {
        // console.log("Got input:", e.nativeEvent);
        let terminalOutput = document.getElementById('terminalOutput');
        if (e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText") {
            let terminalInput = document.getElementById('terminalInput');
            // console.log("Untrimmed command:", terminalInput.innerText.split());
            let command = terminalInput.innerText.trim().replace(/\r?\n\r?\n|\r\r/g, " ").replace(/\r?\n|\r/g, "");
            // console.log("Got command: "+command);
            terminalInput.innerText = "";

            if (prevCommands[0] === "" && command.length > 0) setPrevCommands([command, ...prevCommands.slice(1)]);
            else if (prevCommands[prevCommands.length - 1] !== command && command.length > 0) setPrevCommands([...prevCommands, command]);

            setDraftCommand("");
            setCommandIndex(-1);

            const { result: result, env: newEnv } = Commands.parseCommand(command, ENV);
            setENV(newEnv);

            terminalOutput.innerText += "\n" + prompt + command + "\n" + result + "\n";
        }
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };

    const onKeyDown = (e) => {
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
    };

    return (
        <div id="terminalHolder" style={{display: "none"}} className='w3-row'>
            <div id='terminalThumb'
                draggable='true'
                onDragStart={dragStart}
                onDragEnd={resize}
            />
            <div id='terminal' onClick={() => {
                if (ENV.CLOSED && Date.now() - ENV.CLOSE_TIME > 500) resize(null, 210);
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
