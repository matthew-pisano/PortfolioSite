import React, {useEffect, useState} from 'react';
import '../scripts/globalListeners';

import Head from 'next/head';
import {dehydrateInfo, masterFileSystem, pageRegistry, pathJoin, setMasterFileSystem, setPageRegistry} from './fileSystem/fileSystem';
import TerminalDiv from './terminal/terminal';
import {Perms, SysEnv} from "./utils";
import $ from "jquery";
import {newCustomFile} from "./fileSystem/fileSystemGUI";
import PropTypes from "prop-types";
import {buildHierarchy} from "./sidebar";


function spliceFromSubTree(subTree, name) {
    for(let i=0; i<subTree.length; i++)
        if(subTree[i].name === name) return subTree.splice(i,1)[0];
    return null;
}

function buildSidebar() {
    let publicFolder = masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER).copy();
    let subTreeCopy = [...publicFolder.subTree];
    let helpFile = spliceFromSubTree(subTreeCopy, "help.html");
    let homeFile = spliceFromSubTree(subTreeCopy, "home.html");
    let researchFolder = spliceFromSubTree(subTreeCopy, "research");
    let hackFolder = spliceFromSubTree(subTreeCopy, "hackathons");
    let customFolder = spliceFromSubTree(subTreeCopy, "custom");
    let aboutFolder = spliceFromSubTree(subTreeCopy, "about");
    subTreeCopy = [homeFile, helpFile, researchFolder, ...subTreeCopy, hackFolder, aboutFolder, customFolder];
    publicFolder.subTree = subTreeCopy;
    return buildHierarchy(publicFolder);
}


// eslint-disable-next-line react/prop-types
const Wrapper = ({children, pageName}) => {
    const [explorerTree,   setExplorerTree] = useState(buildSidebar());
    const [currentPath, setCurrentPath] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    masterFileSystem.registerCallback((updateTime) => {
        setExplorerTree(buildSidebar());
    });

    useEffect(() => {
        if(window.innerWidth < 600) setSidebarState(false);

        if(document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();

        setCurrentPath(window.location.pathname);
        
        let savedHierarchy = localStorage.getItem("hierarchy");
        if(savedHierarchy) {
            console.log("Loading saved hierarchy!");
            let hydratedInfo = JSON.parse(savedHierarchy);
            
            setPageRegistry(hydratedInfo.pageRegistry);
            setMasterFileSystem(hydratedInfo.hierarchy);
            masterFileSystem.update();
        }

        document.getElementById("terminalButton").classList.remove("gone");

        // Capture CTRL + S
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.key === 's') {
                // Prevent the Save dialog to open
                e.preventDefault();
                document.getElementById("saveAction").click();
            }
        });
    }, []);

    function setSidebarState(openState=!sidebarOpen, animate=true){
        let sidebarMax = 230;
        let sidebarMin = 50;
        if(!openState){
            $(".sidebarItem").invisible();
            document.getElementById("sidebarContent").style.display = "none";
            document.getElementById("sidebar").classList.replace("openSidebar", "closeSidebar");
            document.getElementById("explorerTitle").style.display = "none";
            document.getElementById("collapseHolder").classList.replace("openSidebar", "closeSidebar");
            document.getElementsByClassName("page")[0].classList.remove("sidebarOpenPage");
            $("#sidebarContent").animate({"width": "0px"}, animate ? 200 : 0);
        }
        else{
            document.getElementById("sidebarContent").style.display = "block";
            $("#sidebarContent").animate({"width": "100%"}, animate ? 200 : 0);
            document.getElementById("sidebar").classList.replace("closeSidebar", "openSidebar");
            document.getElementById("collapseHolder").classList.replace("closeSidebar", "openSidebar");
            document.getElementsByClassName("page")[0].classList.add("sidebarOpenPage");
            document.getElementById("explorerTitle").style.display = "";
            $(".sidebarItem").visible();
        }

        $(".page").animate({"margin-left": (openState ? sidebarMax : sidebarMin )+"px"}, animate ? 200 : 0);
        setSidebarOpen(openState);
    }

    function getPageStats(){
        let fileSize = 0;
        let fileLines = 0;

        if(currentPath !== null && (currentPath.endsWith("display") || currentPath.endsWith("edit"))) {
            let filePath = new URLSearchParams(window.location.search).get("file");
            let customFile = masterFileSystem.getItem(filePath);
            if(customFile !== null && customFile.text !== undefined){
                fileSize = customFile.text.length;
                fileLines = customFile.text.split(/\r\n|\r|\n/).length;
            }
        }
        else if(currentPath !== null) {
            let fullCurrentPath = pathJoin(SysEnv.PUBLIC_FOLDER, currentPath !== "/" ? currentPath.substring(1): "home.html");
            fullCurrentPath = fullCurrentPath.endsWith(".html") ? fullCurrentPath : fullCurrentPath+".html";
            if(Object.keys(pageRegistry).includes(fullCurrentPath)){
                fileSize = pageRegistry[fullCurrentPath].size;
                fileLines = Math.round(fileSize/140.6);
            }
        }

        return {lines: fileLines, size: fileSize};
    }

    let pStats = getPageStats();

    return (
        <div id="wrapper" className="w3-display-container">
            <Head>
                <title id="siteTitle">{pageName.substring(pageName.lastIndexOf("/")+1)+".html"}</title>
            </Head>
            <header className="menuBar w3-row" style={{top: '0px'}}>
                <button id="fileButton" className="menuItem lightText w3-button w3-col" 
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); $("#fileDropdown").fadeToggle();}}>File</button>
                <button id="editButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); $("#editDropdown").fadeToggle();}}>Edit</button>
                <button id="terminalButton" className="menuItem lightText w3-button w3-col gone"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); $("#terminalDropdown").fadeToggle();}}>Terminal</button>
                <button id="helpButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); $("#helpDropdown").fadeToggle();}}>Help</button>
                <button id="contactButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); $("#contactDropdown").fadeToggle();}}>Contact Info</button>
            </header>

            <span id="dehydrateInfo" style={{display: "none"}}>{dehydrateInfo}</span>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <div id="menuDropHolder">
                    <div id="fileDropdown" className="menuDropdown w3-col">
                        <button id="newAction" className="w3-button lightText menuDropItem"
                            onClick={() => {newCustomFile(); }}>New</button>
                        <button id="saveAction" className="w3-button lightText menuDropItem"
                            onClick={async () => {
                                if (!document.codeEditor) {
                                    alert("This file is not in editing mode!");
                                    return;
                                }

                                let editorText = document.codeEditor.state.doc.toString();
                                let filePath = new URLSearchParams(window.location.search).get("file");
                                masterFileSystem.writeText(filePath, editorText.replace("\t", ""));
                                window.onbeforeunload = null;
                                // Visual saving feedback
                                document.getElementsByClassName("cm-editor")[0].style.backgroundColor = "#626262";
                                await new Promise(r => setTimeout(r, 200));
                                document.getElementsByClassName("cm-editor")[0].style.backgroundColor = "";
                            }}>Save</button>
                        <button id="resetAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                if(confirm("Do you really want to reset the system?")) {
                                    delete localStorage.hierarchy;
                                    window.location.replace("/");
                                }
                            }}>Reset</button>
                    </div>
                    <div id="editDropdown" className="menuDropdown w3-col">
                        <button id="editCurrentAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                let filePath = new URLSearchParams(window.location.search).get("file");
                                //let current = masterFileSystem.getItem(filePath ? filePath : "/");
                                //if(!current.permission.includes(Perms.WRITE)) alert("The current page is not editable");
                                if(currentPath.endsWith("edit")) return;
                                if(filePath === null || !currentPath.endsWith("display")) alert("The current page is not editable");
                                else window.location.replace(`/edit?file=${filePath}`);

                            }}>Edit Current Page</button>
                    </div>
                    <div id="terminalDropdown" className="menuDropdown w3-col">
                        <button id="showTerminal" className="w3-button lightText menuDropItem"
                            onClick={() => {document.getElementById("terminal").click();}}>Open Terminal</button>
                        <button id="hideTerminal" className="w3-button lightText menuDropItem"
                            onClick={() => {document.getElementById("terminal").dispatchEvent(new CustomEvent("close"));}}>Close Terminal</button>
                    </div>
                    <div id="helpDropdown" className="menuDropdown w3-col">
                    
                        <button id="helpAction" className="w3-button lightText menuDropItem"
                            onClick={() => window.location.replace("/help")}>help.html</button>
                        <a className="lightText menuDropItem" style={{display: "block"}} href='https://github.com/matthew-pisano/PortfolioSite#readme' 
                            target={"_blank"} rel="noreferrer">README</a>
                        <button id="terminalHelpAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                document.getElementById('terminal').dispatchEvent(new CustomEvent("openTo", {detail: 550}));
                                document.getElementById('terminalInput').innerText = "help";
                                document.getElementById('terminalInput').dispatchEvent(new Event("submit"));
                            }}>Terminal Help</button>
                    </div>
                    <div id="contactDropdown" className="menuDropdown w3-col">
                        <p className="lightText menuDropItem">Phone: +1 (845)-706-0677</p>
                        <p className="lightText menuDropItem">Email: matthewplisano14@gmail.com</p>
                        <a className="lightText menuDropItem" style={{display: "block"}} href='https://www.linkedin.com/in/matthew-pisano' 
                            target={"_blank"} rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div id="sidebar" className="w3-col openSidebar">
                    <div id="collapseHolder" className="w3-cell-row openSidebar">
                        <button id="collapseSidebar" className="w3-button w3-cell" onClick={() => setSidebarState()}></button>
                        <h4 id="explorerTitle" className="sidebarItem lightText w3-cell">Explorer</h4>
                    </div>
                    <div id="sidebarContent" className="w3-display-container w3-row">{explorerTree}</div>
                </div>
            </div>
            {children}
            <TerminalDiv/>
            <footer className="commandBar w3-row" style={{bottom: '0px'}}>
                <div id="langStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>HTML</div>
                <div id="encodingStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>UTF-8</div>
                <div id="linesStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pStats.lines+" Lines"}</div>
                <div id="sizeStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pStats.size <= 1024 ? pStats.size+"B" : Math.round(pStats.size/102.4)/10+"kB"}</div>
                <div id="itemStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageName+".html"}</div>
            </footer>
        </div>
    );
};

Wrapper.propTypes = {
    pageName: PropTypes.string
};


export {Wrapper};