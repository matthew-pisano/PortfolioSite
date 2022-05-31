import React, { useState } from 'react';
import * as common from './common';

const TerminalDiv = () => {
    const homeDir = "/home/user/";
    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [terminalClosed, setTerminalClosed] = useState(true);
    const [cwd, protoSetCwd] = useState(homeDir);
    const [prevCommands, setPrevCommands] = useState([""]);
    const [draftCommand, setDraftCommand] = useState("");
    const [commandIndex, setCommandIndex] = useState(-1);
    const helpMsg = "Help";
    const genPrompt = (newCwd) => {
        return "["+(newCwd ? newCwd : cwd)+"]$ ";
    };
    const setCwd = (newCwd) => {
        if(newCwd[newCwd.length-1] !== "/") newCwd += "/";
        protoSetCwd(newCwd);
        document.getElementById('terminalPrompt').innerText = genPrompt();
        document.getElementById('terminalInput').style.marginLeft = (9*genPrompt(newCwd).length+5)+"px";
        return "["+cwd+"]$ ";
    };
    const initial = (e) => {
        let resizable = document.getElementById('terminal');
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    };
    
    const resize = (e) => {
        let height = initialSize + initialPos - e.clientY + 50;
        console.log(height, terminalClosed);
        if(height > 200){
            document.getElementById('terminal').style.height = `${height}px`;
            document.getElementById('terminalOutput').style.height = `${height - 80}px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            setTerminalClosed(false);
        }
        else if(terminalClosed){
            document.getElementById('terminal').style.height = `200px`;
            document.getElementById('terminalOutput').style.height = `130px`;
            document.getElementById('terminalBottom').style.visibility = "visible";
            setTerminalClosed(false);
        }
        else{
            document.getElementById('terminal').style.height = `30px`;
            document.getElementById('terminalOutput').style.height = `0px`;
            document.getElementById('terminalBottom').style.visibility = "hidden";
            setTerminalClosed(true);
        }
        
    };
    
    const onInput = (e) => {
        //console.log(e);
        let terminalOutput = document.getElementById('terminalOutput');
        if(e.nativeEvent.inputType === "insertParagraph"){
            let command = document.getElementById('terminalInput').innerText.trim();
            console.log("Got command: "+command);
            document.getElementById('terminalInput').innerText = "";
            if(prevCommands[prevCommands.length-1] !== command) prevCommands.push(command);
            setDraftCommand("");
            let commandOut = parseCommand(command);
            terminalOutput.innerText += "\n"+commandOut;
        }
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    };
    
    function parseCommand(command){
        let tokens = command.split(" ");
        //console.log(tokens);
        let targetPath = false;
        let outStr = genPrompt()+command;
        let absPath = "";
        for(let i=0; i<tokens.length; i++){
            if(tokens[i] === ".") tokens[i] = cwd;
            else if(tokens[i] === "..") tokens[i] = cwd.substring(0, cwd.substring(0, cwd.length-1).lastIndexOf("/"));
            else if(tokens[i] === "~") tokens[i] = homeDir;
        }
        //console.log(tokens);
        function resolvePath(path){
            absPath = path ? path : cwd;
            if(tokens.length > 1 && path[0] === "/") targetPath = common.navHierarchy(path);
            else if(tokens.length > 1){
                targetPath = common.navHierarchy(cwd+path);
                absPath = cwd+absPath;
            }
        }
        switch (tokens[0]) {
            case '':
                return outStr;
            case 'echo':
                for(let i=1; i<tokens.length; i++) outStr += "\n"+tokens[i];
                return outStr;
            case 'touch':
                if(tokens.length > 1){
                    let newName = tokens[1].endsWith(".html") ? tokens[1] : tokens[1]+".html";
                    for(let pageId in common.pages)
                        if(common.pages[pageId].name === newName)
                            return outStr+"\n File '"+newName+"' already exists";
                        
                    common.newFile(newName);
                    return outStr+"\nCreated file '"+newName+"'";
                }
                return outStr+"\touch command requires an argument";
            case 'ren':
                if(tokens.length > 2){
                    let oldName = tokens[1].replace(".html", "");
                    let newName = tokens[2].endsWith(".html") ? tokens[2] : tokens[2]+".html";
                    let oldId = null;
                    console.log(oldName, common.pages);
                    for(let pageId in common.pages)
                        if(common.pages[pageId].name.replace(".html", "") === oldName){
                            oldId = pageId;
                            break;
                        }
                    if(!oldId) return outStr+"\nFile: '"+oldName+"' does not exist";
                    common.finishRenaming(oldId, newName);
                    return outStr+"\nRenamed file '"+oldName+"' to '"+newName+"'";
                }
                return outStr+"\touch command requires an argument";
            case 'cls':
            case 'clear':
                document.getElementById("terminalOutput").innerText = "";
                return outStr;
            case 'help':
                return outStr+"\n"+helpMsg;
            case 'cd':
                if(tokens.length === 1){
                    setCwd(homeDir);
                    return outStr;
                }
                resolvePath(tokens[1]);
                targetPath = common.navHierarchy(absPath);
                if(targetPath) setCwd(absPath);
                else return outStr+"\nCould not find path: '"+absPath+"'";
                return outStr;
            case 'ls':
                resolvePath(tokens[1]);
                targetPath = common.navHierarchy(tokens.length < 2 ? cwd : absPath);
                if(targetPath){
                    for(let i=0; i<targetPath.subTree.length; i++)
                        outStr += "\n"+targetPath.subTree[i].name;
                }
                else return outStr+"\nCould not find path: '"+absPath+"'";
                return outStr;
            case 'cat':
                if(tokens.length < 2) return outStr+"\ncat command requires an argument";
                resolvePath(tokens[1]);
                targetPath = common.navHierarchy(absPath);
                if(!targetPath) return outStr+"\nCould not find path: '"+absPath+"'";
                if(!targetPath.subTree){
                    for(let i=0; i<Object.keys(common.pages).length; i++){
                        let key = Object.keys(common.pages)[i];
                        console.log("Checking ", targetPath.name, common.pages[key].name);
                        if(targetPath.name === common.pages[key].name){
                            let pageContent = common.pages[key].content;
                            if(!pageContent) pageContent = document.getElementById(key+"Page").innerHTML;
                            return outStr+"\n"+pageContent;
                        }
                    }
                    return outStr+"\nFile: '"+targetPath.name+"' does not exist";
                }
                else return outStr+"\nPath: '"+absPath+"' must be a file";
            default:
                return outStr+"\nUnknown command: '"+command+"'";
        }
    }
    
    const onKeyDown = (e) => {
        let newI = commandIndex;
        if(e.code === "ArrowUp"){
            if(commandIndex === -1) setDraftCommand(document.getElementById('terminalInput').innerText);
            if(commandIndex < prevCommands.length - 1) {
                setCommandIndex(commandIndex + 1);
                newI ++;
            }
            document.getElementById('terminalInput').innerText = prevCommands[prevCommands.length-1-newI];
        }
        else if(e.code === "ArrowDown"){
            if(commandIndex > -1) {
                setCommandIndex(commandIndex - 1);
                newI --;
            }
            document.getElementById('terminalInput').innerText = newI > -1 ? prevCommands[prevCommands.length-1-newI] : draftCommand;
        }
    };
    return(
        <div id="terminalHolder" className=' w3-row'>
            <div id='terminalThumb'
                draggable = 'true'
                onDragStart = {initial} 
                onDragEnd = {resize}
            />
            <div id='terminal' onClick={() => document.getElementById("terminalInput").focus()}>
                <span>Terminal</span>
                <div id="terminalOutput"></div>
                <div id="terminalBottom" style={{visibility: "hidden"}}>
                    <div id="terminalPrompt">{genPrompt()}</div>
                    <div id="terminalInput" contentEditable="true" onInput={onInput} onKeyDown={onKeyDown}></div>
                </div>
            </div>
        </div>
    );
    
};

export default TerminalDiv;
