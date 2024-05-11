import React, {useEffect, useState} from 'react';
import '../scripts/globalListeners';

import Head from 'next/head';
import {dehydratedInfo, masterFileSystem, pageRegistry, setMasterFileSystem, setPageRegistry} from './fileSystem/buildfs';
import {pathJoin} from './fileSystem/fileSystem';
import TerminalDiv from './terminal/terminal';
import {showDialog, SysEnv} from "./utils";
import $ from "jquery";
import {newCustomFile} from "./fileSystem/fileSystemGUI";
import PropTypes from "prop-types";
import {buildSidebar, setSidebarState} from "./sidebar";


/**
 * Get the statistics of the current page file from the master file system or page registry
 * @param currentPath {string} The current path of the page
 * @return {{size: number, lines: number}} The size and line count of the page
 */
function getPageStats(currentPath){
    let fileSize = 0;
    let fileLines = 0;

    // If the current path is a custom file, get the size and line count from the custom file
    if(currentPath !== null && (currentPath.endsWith("display") || currentPath.endsWith("edit"))) {
        let filePath = new URLSearchParams(window.location.search).get("file");
        let customFile = masterFileSystem.getItem(filePath);
        if(customFile !== null && customFile.text !== undefined){
            fileSize = customFile.text.length;
            fileLines = customFile.text.split(/\r\n|\r|\n/).length;
        }
    }
    // If the current path is a page, get the size and estimated line count from the page registry
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


/**
 * Save the current custom page to the master file system
 * @param currentPath {string} The current path of the page
 */
async function savePage(currentPath) {
    // If the current path is not editing a custom file, show a dialog box error
    if (!document.codeEditor) {
        if (currentPath.endsWith("display"))
            showDialog("File Cannot Be Saved", "This file must be in edit mode before saving!");
        else showDialog("Permission Denied", "You do not have permission to edit this file!");
        return;
    }

    // Save the file to the master file system
    let editorText = document.codeEditor.state.doc.toString();
    let filePath = new URLSearchParams(window.location.search).get("file");
    masterFileSystem.writeText(filePath, editorText.replace("\t", ""));
    // Clear the unsaved changes warning
    window.onbeforeunload = null;

    // Visual saving feedback
    showDialog("File Saved", "The file has been saved!");
    document.getElementsByClassName("cm-editor")[0].style.backgroundColor = "#626262";
    await new Promise(r => setTimeout(r, 200));
    document.getElementsByClassName("cm-editor")[0].style.backgroundColor = "";
}


/**
 * Edit the current page if it is a custom file
 * @param currentPath {string} The current path of the page
 */
function editPage(currentPath) {
    let filePath = new URLSearchParams(window.location.search).get("file");
    // Cancel if already editing
    if(currentPath.endsWith("edit")) return;
    // If the current path is not a custom file, show a dialog box error
    if(filePath === null || !currentPath.endsWith("display"))
        showDialog("Permission Denied", "You do not have permission to edit this file!");
    else window.location.replace(`/edit?file=${filePath}`);

}


/**
 * Reset the file system to its default state by deleting the hierarchy from local storage
 */
function resetFileSystem() {
    if(confirm("Do you really want to reset the system?  This will delete all custom files and reset the site to its default state!")) {
        delete localStorage.hierarchy;
        window.location.replace("/");
    }
}


// eslint-disable-next-line react/prop-types
const Wrapper = ({children, pageName}) => {
    const [explorerTree,   setExplorerTree] = useState(buildSidebar());
    const [currentPath, setCurrentPath] = useState(null);

    // Update the sidebar when the file system is updated
    masterFileSystem.registerCallback((updateTime) => {
        setExplorerTree(buildSidebar());
    });
    // Initialize the sidebar state and load the saved hierarchy
    useEffect(() => {
        // Close the sidebar on mobile
        if(window.innerWidth < 600) setSidebarState(false);
        // Remove the dehydrated info from the page
        if(document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();

        setCurrentPath(window.location.pathname);

        // Load the saved hierarchy from local storage
        let savedHierarchy = localStorage.getItem("hierarchy");
        if(savedHierarchy) {
            console.log("Loading saved hierarchy!");
            let hydratedInfo = JSON.parse(savedHierarchy);
            
            setPageRegistry(hydratedInfo.pageRegistry);
            setMasterFileSystem(hydratedInfo.hierarchy);
            masterFileSystem.update();
        }

        // Add the terminal button to the menu bar
        document.getElementById("terminalButton").classList.remove("gone");

        // Capture CTRL + S
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.key === 's') {
                // Prevent the Save dialog to open
                e.preventDefault();
                savePage(currentPath);
            }
        });
    }, []);

    let pStats = getPageStats(currentPath);
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

            <span id="dehydrateInfo" style={{display: "none"}}>{dehydratedInfo}</span>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <div id="menuDropHolder">
                    <div id="fileDropdown" className="menuDropdown w3-col">
                        <button id="newAction" className="w3-button lightText menuDropItem"
                            onClick={() => {newCustomFile(); }}>New</button>
                        <button id="saveAction" className="w3-button lightText menuDropItem"
                            onClick={() => savePage(currentPath)}>Save</button>
                        <button id="resetAction" className="w3-button lightText menuDropItem"
                            onClick={() => resetFileSystem()}>Reset</button>
                    </div>
                    <div id="editDropdown" className="menuDropdown w3-col">
                        <button id="editCurrentAction" className="w3-button lightText menuDropItem"
                            onClick={() => editPage(currentPath)}>Edit Current Page</button>
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
            <div id="dialogBox">
                <img src="/assets/personal.png" style={{width: '20px'}}/>
                <span id="dialogBoxTitle">Message Title</span>
                <p id="dialogBoxBody">Message Body</p>
            </div>
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


export default Wrapper;