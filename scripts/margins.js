import $ from "jquery";
import React from "react";
import {newCustomFile} from "./fileSystem/fileSystemGUI";
import {showDialog, SysEnv} from "./utils";
import {masterFileSystem, pageRegistry} from "./fileSystem/buildfs";
import {renameCustom} from "./sidebar";
import {pathJoin} from "./fileSystem/fileSystem";
import PropTypes from "prop-types";
import Wrapper from "./wrapper";


/**
 * Save the current custom page to the master file system
 * @param currentPath {string} The current path of the page
 */
async function savePage(currentPath) {

    // If the current path is not editing a custom file, show a dialog box error
    if (!document.codeEditor) {
        if (currentPath && currentPath.endsWith("display"))
            showDialog("File Cannot Be Saved", "This file must be in edit mode before saving!");
        else showDialog("Permission Denied", "You do not have permission to edit or create this file!");
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
    // Cancel if already editing
    if(currentPath.endsWith("edit")) return;

    let filePath = new URLSearchParams(window.location.search).get("file");
    let file = masterFileSystem.getItem(filePath);
    let isPage = "/home/guest/public"+(window.location.pathname === "/" ? "/home" : window.location.pathname)+".html" in pageRegistry;

    // If the current path is not a custom file and the file is not a page, show a dialog box error
    if (!isPage && !file)
        showDialog("File Not Found", "The file that you are attempting to edit does not exist!");
    // If the current path is not a custom file, show a dialog box error
    else if(isPage)
        showDialog("Permission Denied", "You do not have permission to edit this file!");
    // Open the editor
    else window.location.replace(`/edit?file=${filePath}`);

}


/**
 * Rename the current page if it is a custom file
 * @param currentPath {string} The current path of the page
 */
function renamePage(currentPath) {
    let filePath = new URLSearchParams(window.location.search).get("file");
    // If the current path is not a custom file, show a dialog box error
    if(filePath === null || (!currentPath.endsWith("display") && !currentPath.endsWith("edit")))
        showDialog("Permission Denied", "You do not have permission to edit this file!");
    else {
        let file = masterFileSystem.getItem(filePath);
        renameCustom(file, filePath.substring(0, filePath.lastIndexOf("/")));
    }

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
 * Header menu for the site that contains the file, edit, terminal, help, and contact info buttons
 * @return {JSX.Element} The header menu
 */
function HeaderMenu() {
    return (
        <header className="menuBar w3-row" style={{top: '0px'}}>
            <button id="fileButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {
                        await new Promise(r => setTimeout(r, 20));
                        $("#fileDropdown").fadeToggle();
                    }}>File
            </button>
            <button id="editButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {
                        await new Promise(r => setTimeout(r, 20));
                        $("#editDropdown").fadeToggle();
                    }}>Edit
            </button>
            <button id="terminalButton" className="menuItem lightText w3-button w3-col gone"
                    onClick={async () => {
                        await new Promise(r => setTimeout(r, 20));
                        $("#terminalDropdown").fadeToggle();
                    }}>Terminal
            </button>
            <button id="helpButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {
                        await new Promise(r => setTimeout(r, 20));
                        $("#helpDropdown").fadeToggle();
                    }}>Help
            </button>
            <button id="contactButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {
                        await new Promise(r => setTimeout(r, 20));
                        $("#contactDropdown").fadeToggle();
                    }}>Contact Info
            </button>
        </header>
    );
}


/**
 * Drop down menu for the file, edit, terminal, help, and contact info buttons
 * @param currentPath {string} The current path of the page
 * @return {JSX.Element} The drop down menu
 */
function MenuDrop({currentPath}) {
    return (
        <div id="menuDropHolder">
            <div id="fileDropdown" className="menuDropdown w3-col">
                <button id="newAction" className="w3-button lightText menuDropItem"
                        onClick={() => {
                            newCustomFile();
                        }}>New
                </button>
                <button id="saveAction" className="w3-button lightText menuDropItem"
                        onClick={() => savePage(currentPath)}>Save
                </button>
                <button id="resetAction" className="w3-button lightText menuDropItem"
                        onClick={() => resetFileSystem()}>Reset
                </button>
            </div>
            <div id="editDropdown" className="menuDropdown w3-col">
                <button id="editCurrentAction" className="w3-button lightText menuDropItem"
                        onClick={() => editPage(currentPath)}>Edit Current Page
                </button>
                <button id="renameCurrentAction" className="w3-button lightText menuDropItem"
                        onClick={() => renamePage(currentPath)}>Rename Current Page
                </button>
            </div>
            <div id="terminalDropdown" className="menuDropdown w3-col">
                <button id="showTerminal" className="w3-button lightText menuDropItem"
                        onClick={() => {
                            document.getElementById("terminalHeader").click();
                        }}>Open Terminal
                </button>
                <button id="hideTerminal" className="w3-button lightText menuDropItem"
                        onClick={() => {
                            document.getElementById("terminal").dispatchEvent(new CustomEvent("close"));
                        }}>Close Terminal
                </button>
            </div>
            <div id="helpDropdown" className="menuDropdown w3-col">

                <button id="helpAction" className="w3-button lightText menuDropItem"
                        onClick={() => window.location.replace("/help")}>help.html
                </button>
                <a className="lightText menuDropItem" style={{display: "block"}} href='https://github.com/matthew-pisano/PortfolioSite#readme'
                   target={"_blank"} rel="noreferrer">README</a>
                <button id="terminalHelpAction" className="w3-button lightText menuDropItem"
                        onClick={() => {
                            document.getElementById('terminal').dispatchEvent(new CustomEvent("openTo", {detail: 550}));
                            document.getElementById('terminalInput').innerText = "help";
                            document.getElementById('terminalInput').dispatchEvent(new Event("submit"));
                        }}>Terminal Help
                </button>
            </div>
            <div id="contactDropdown" className="menuDropdown w3-col">
                <p className="lightText menuDropItem">Phone: +1 (845)-706-0677</p>
                <p className="lightText menuDropItem">Email: matthewpisano14@gmail.com</p>
                <a className="lightText menuDropItem" style={{display: "block"}} href='https://www.linkedin.com/in/matthew-pisano'
                   target={"_blank"} rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    );
}

MenuDrop.propTypes = {
    currentPath: PropTypes.string.isRequired
};


/**
 * Footer for the site that contains the language, encoding, lines, size, and file name status
 * @param currentPath {string} The current path of the page
 * @param pageName {string} The name of the page
 * @return {JSX.Element} The footer status
 */
function StatusFooter({currentPath, pageName}) {

    let pStats = getPageStats(currentPath);
    return (
        <footer className="commandBar w3-row" style={{bottom: '0px'}}>
            <div id="langStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>HTML</div>
            <div id="encodingStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>UTF-8</div>
            <div id="linesStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pStats.lines + " Lines"}</div>
            <div id="sizeStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pStats.size <= 1024 ? pStats.size + "B" : Math.round(pStats.size / 102.4) / 10 + "kB"}</div>
            <div id="itemStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageName + ".html"}</div>
        </footer>
    );
}

StatusFooter.propTypes = {
    currentPath: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired
};

export {HeaderMenu, MenuDrop, StatusFooter, savePage};