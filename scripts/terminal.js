import React, { useState, useEffect } from 'react';
import * as common from './common';
import * as pathlib from 'path';
import { resolvePath, parseCommand, homeDir, eightBall } from './terminalCommands';


let terminalClosed = true;
let closeTime = 0;

const closeTerminal = () => {
    console.log("Closing terminal...");
    document.getElementById('terminal').style.height = `30px`;
    document.getElementById('terminalOutput').style.height = `0px`;
    document.getElementById('terminalBottom').style.visibility = "hidden";
    document.getElementById('terminalClose').style.visibility = "hidden";
    terminalClosed = true;
    closeTime = Date.now();
};


const TerminalDiv = () => {

    function genPrompt(cwd) {
        if(parseCommand(cwd) === homeDir) cwd = "~";
        return "["+cwd+"]$ ";
    };

    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    //const [terminalClosed, setTerminalClosed] = useState(true);
    const [prompt, setPrompt] = useState(genPrompt(homeDir));
    const [cwd, setCwd] = useState(homeDir);
    const [prevCommands, setPrevCommands] = useState([""]);
    const [draftCommand, setDraftCommand] = useState("");
    const [commandIndex, setCommandIndex] = useState(-1);

    useEffect(() => {
        setPrompt(genPrompt(cwd))
    }, [cwd]);

    const helpMsg = `--<Help Menu>--
    GRU mash, version 5.1.16(1)-release (x86_64-cloud-manix-gru)
    These shell commands are defined internally.  Type 'help' to see this list.

    help [options] - print this message
    echo [*msg] - echoes each of the arguments on a new line
    touch [fileName] - creates a file with the name given in the argument
    ren [oldName] [newName] - renames an existing file to the given new name
    rm [fileName] - removes the file with the name given in the argument
    cls | clear - clears the output of the terminal
    cd [path] - changes the current working directory to thr given path
    ls [path] - gives information on the file or folder that matches the given path
    cat [filePath] - prints our the contents of the given file
    open [fileName] - opens the file with the given name
    color [color] - sets the terminal text color to the given color in the form #rrggbb
    dir - Why?
    neofetch - displays system and software information
    whoami - displays the current user
    exit - clears the terminal and closes it
    `;
    const forceHelp = `--Secret Help--
    MAthesis SHell (mash) extended capabilities.
    Sensitive documents are exposed to these commands.  Use with caution.

    open [rick | poland | void | scp | babble] - opens the file with the given name
    mir - ??
    launch [warhead_id] [lat] [long] - ██████████████
    haltingproblem - Computes the ideal turing machine to solve the halting problem
    eightball [query] - ${eightBall()}`;
    const neofetch = `
       lWMMMMMMMMMWl        lWMMMMMMMMMWl       guest@mathesisConsole
     ,;kWMMMMMMMMMWk;,,  ,,;kWMMMMMMMMMWk;,     ---------------------
    WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW    OS: primOS 10.02.1 x86_64-cloud-manix-gru
    MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM    Host: ████████
    MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM    kernel: 7.05.01-server
    MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM    Uptime: █████
    MMMMMMWl       lWMMMMMMWl       lWMMMMMM    Packages: 443 (████), 24 (██)
    MMMMMMWl       ,xkkkkkkx,       lWMMMMMM    Shell: mash 5.1.16(1)-release
    MMMMMMWl                        lWMMMMMM    Terminal: cloudTerminal
    MMMMMMWl       .,,,,,,,,.       lWMMMMMM    CPU: ██th Gen ██████ █-██
    MMMMMMWl       lNWWWWWWNl       lWMMMMMM    Memory: ██████TiB / ██████TiB
    MMMMMMWl       lWM    MWl       lWMMMMMM
    MMMMMMWl       lWM    MWl       lWMMMMMM
      kKMMWl       lWM    MWl       lWMMKk
       lWMWl       lWM    MWl       lWMWl   
       lWMWl       lWM    MWl       lWMWl`;

    const dragStart = (e) => {
        let resizable = document.getElementById('terminal');
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    };
    
    const resize = (e, heightOverride) => {
        let height = heightOverride ? heightOverride : initialSize + initialPos - e.clientY + 50;
        if(height > window.innerHeight - 80) height = window.innerHeight - 80;
        console.log("Resizing terminal", height, terminalClosed, "max:", window.innerHeight);
        if(height > 200){
            document.getElementById('terminal').style.height = `${height}px`;
            document.getElementById('terminalOutput').style.height = `${height - 80}px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            document.getElementById('terminalClose').style.visibility = "visible";
            document.getElementById('terminalInput').focus();
            terminalClosed = false;
        }
        else if(terminalClosed){
            document.getElementById('terminal').style.height = `200px`;
            document.getElementById('terminalOutput').style.height = `130px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            document.getElementById('terminalClose').style.visibility = "visible";
            terminalClosed = false;
        }
        else closeTerminal();
    };

    const onInput = (e) => {
        // console.log("Got input:", e.nativeEvent);
        let terminalOutput = document.getElementById('terminalOutput');
        if(e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText"){
            let terminalInput = document.getElementById('terminalInput');
            // console.log("Untrimmed command:", terminalInput.innerText.split());
            let command = terminalInput.innerText.trim().replace(/\r?\n\r?\n|\r\r/g, " ").replace(/\r?\n|\r/g, "");
            console.log("Got command: "+command);
            terminalInput.innerText = "";

            if(prevCommands[0] === "" && command.length > 0) setPrevCommands([command, ...prevCommands.slice(1)]);
            else if(prevCommands[prevCommands.length-1] !== command && command.length > 0) setPrevCommands([...prevCommands, command]);

            setDraftCommand("");
            setCommandIndex(-1);
            
            terminalOutput.innerText += "\n"+prompt+parseCommand(command);
        }
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };
    
    const onKeyDown = (e) => {
        let newI = commandIndex;
        let terminalInput = document.getElementById('terminalInput');
        if(e.code === "ArrowUp"){
            if(commandIndex === -1 && terminalInput.innerText.length > 0) {
                setDraftCommand(terminalInput.innerText.replace("\n", "").replace("\r", ""));
                console.log("Saving command '"+terminalInput.innerText.replace("\n", "").replace("\r", "")+"'");
            }
            if(commandIndex < prevCommands.length - 1) {
                setCommandIndex(commandIndex + 1);
                newI ++;
            }
            console.log("Prev commands:", prevCommands, ", index:", prevCommands.length-1-newI);
            console.log("Loading command '"+prevCommands[prevCommands.length-1-newI]+"'");
            terminalInput.innerText = prevCommands[prevCommands.length-1-newI];
        }
        else if(e.code === "ArrowDown"){
            if(commandIndex > -1) {
                setCommandIndex(commandIndex - 1);
                newI --;
            }
            terminalInput.innerText = newI > -1 ? prevCommands[prevCommands.length-1-newI] : draftCommand;
        }
    };

    return(
        <div id="terminalHolder" className='w3-row'>
            <div id='terminalThumb'
                draggable = 'true'
                onDragStart = {dragStart} 
                onDragEnd = {resize}
            />
            <div id='terminal' onClick={() => {
                if(terminalClosed && Date.now() - closeTime > 500) resize(null, 210);
            }}>
                <div><span>Terminal</span>
                    <button id="terminalClose" className='w3-button' style={{float: "right", marginRight: "10px", visibility: "hidden"}}
                        onClick={() => closeTerminal()}>X</button></div>
                <div id="terminalOutput" onClick={() => document.getElementById('terminalInput').focus()}></div>
                <div id="terminalBottom" style={{visibility: "hidden"}}>
                    <div id="terminalPrompt" style={{marginLeft: (9*prompt.length+5)+"px"}}>{prompt}</div>
                    <div id="terminalInput" contentEditable="true" onInput={onInput} onKeyDown={onKeyDown}></div>
                </div>
            </div>
        </div>
    );
    
};

export default TerminalDiv;
export {closeTerminal};
