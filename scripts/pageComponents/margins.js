import React, {useEffect} from "react";
import {showDialog} from "../utils";
import {masterFileSystem} from "../fileSystem/buildfs";
import {renameFile} from "./sidebar";
import {pathJoin} from "../fileSystem/fileSystem";
import PropTypes from "prop-types";
import {SysEnv} from "../fileSystem/fileSystemMeta";
import {setTheme} from "../themes";


/**
 * Whether the menu bar is primed for animation by clicking it
 * @type {boolean}
 */
let primedMenuBar = false;


/**
 * A menu that exists in the header bar and contains items
 */
class Menu {
    /**
     * @param name {string} The name of the menu
     * @param items {MenuItem[]} The items in the menu
     * @param hideOnMobile {boolean} Whether the menu should be hidden on mobile
     */
    constructor(name, items, hideOnMobile = false) {
        this.name = name;
        this.items = items;
        this.hideOnMobile = hideOnMobile;
    }
}


/**
 * An item in a menu that can be an action, link, or text
 */
class MenuItem {
    /**
     * @param name {string} The name of the item
     * @param itemType {string} The type of item: "action", "link", or "text"
     * @param data {object} The data of the item
     * @param usesCurrentPath {boolean} Whether the item uses the current path
     */
    constructor(name, itemType, data, usesCurrentPath = false, hideOnMobile = false) {
        this.name = name;
        this.itemType = itemType;
        this.data = data;
        this.usesCurrentPath = usesCurrentPath;
        this.hideOnMobile = hideOnMobile;
    }
}


/**
 * The header menu for the site that contains the file, edit, view, terminal, help, and contact info buttons
 * @type {Menu[]}
 */
let headerMenus = [
    new Menu("File", [
        new MenuItem("New", "action", newPage),
        new MenuItem("Save", "action", savePage, true),
        new MenuItem("Reset", "action", resetLocalStorage),
    ], true),
    new Menu("Edit", [
        new MenuItem("Edit Current Page", "action", editPage, true),
        new MenuItem("Rename Current Page", "action", renamePage, true),
    ], true),
    new Menu("View", [
        new MenuItem("Default", "action", () => setTheme("default")),
        new MenuItem("Classic", "action", () => setTheme("classic")),
        new MenuItem("Monochrome", "action", () => setTheme("monochrome")),
        new MenuItem("Light", "action", () => setTheme("light")),
    ], false),
    new Menu("Terminal", [
        new MenuItem("Open Terminal", "action", () => document.getElementById("terminal").dispatchEvent(new CustomEvent("open"))),
        new MenuItem("Close Terminal", "action", () => document.getElementById("terminal").dispatchEvent(new CustomEvent("close"))),
    ], true),
    new Menu("Help", [
        new MenuItem("help.html", "link", "/help"),
        new MenuItem("README", "link", "https://github.com/matthew-pisano/PortfolioSite#readme"),
        new MenuItem("Terminal Help", "action", () => {
            document.getElementById('terminal').dispatchEvent(new CustomEvent("openTo", {detail: 700}));
            document.getElementById('terminalInput').innerText = "help";
            document.getElementById('terminalInput').dispatchEvent(new Event("submit"));
        }, true, true),
    ]),
    new Menu("Contact", [
        new MenuItem("Phone", "text", "+1 (845)-706-0677"),
        new MenuItem("Email", "text", "matthewpisano14@gmail.com"),
        new MenuItem("LinkedIn", "link", "https://www.linkedin.com/in/matthew-pisano"),
    ]),
];


/**
 * Creates a new custom file in the public/custom folder
 */
function newPage() {

    let customFolder = masterFileSystem.getItem(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    let newFileName = "newFile";
    let newFileIndex = 0;

    // Check if the file name already exists and increment the copy number if it does
    for(let file of customFolder.subTree)
        if(file.name.includes(newFileName)) newFileIndex++;

    // Append the copy number to the file name
    newFileName += newFileIndex !== 0 ? newFileIndex : "";
    let newFilePath = pathJoin(SysEnv.PUBLIC_FOLDER, "custom", newFileName+".html");
    // Create the new file
    masterFileSystem.touch(newFilePath);
    // Redirect to the new file
    window.location.href = "/edit?file="+newFilePath;
}


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
    let isPage = "/home/guest/public"+(window.location.pathname === "/" ? "/home" : window.location.pathname)+".html" in masterFileSystem.pageRegistry;

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
        renameFile(file, filePath.substring(0, filePath.lastIndexOf("/")));
    }
}


/**
 * Reset the local storage of the site, deleting all custom files and resetting the site to its default state
 */
function resetLocalStorage() {
    if(confirm("Do you really want to reset the system?  This will delete all custom files and reset the site to its default state!")) {
        localStorage.clear();
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
        if(customFile !== null && customFile.text() !== undefined){
            fileSize = customFile.text().length;
            fileLines = customFile.text().split(/\r\n|\r|\n/).length;
        }
    }
    // If the current path is a page, get the size and estimated line count from the page registry
    else if(currentPath !== null) {
        let fullCurrentPath = pathJoin(SysEnv.PUBLIC_FOLDER, currentPath !== "/" ? currentPath.substring(1): "home.html");
        fullCurrentPath = fullCurrentPath.endsWith(".html") ? fullCurrentPath : fullCurrentPath+".html";
        if(Object.keys(masterFileSystem.pageRegistry).includes(fullCurrentPath)){
            fileSize = masterFileSystem.pageRegistry[fullCurrentPath].size;
            fileLines = Math.round(fileSize/140.6);
        }
    }

    if (fileSize === undefined) fileSize = 0;
    if (fileLines === undefined) fileLines = 0;

    return {lines: fileLines, size: fileSize};
}


/**
 * Clears all menu dropdowns
 */
function clearMenuDrops() {
    for(let elem of document.getElementsByClassName("menuDropdown"))
        elem.style.display = "none";
}


/**
 * Focuses the menu button and displays the menu dropdown
 * @param menuName {string} The name of the menu button
 */
function focusMenuButton(menuName) {
    clearMenuDrops();
    primedMenuBar = true;
    let leftEdge = document.getElementById(menuName+"Menu").getBoundingClientRect().left;
    document.getElementById(menuName+"MenuDropdown").style.marginLeft = leftEdge+"px";
    document.getElementById(menuName+"MenuDropdown").style.display = "inline-block";
}


/**
 * Header menu for the site that contains the file, edit, terminal, help, and contact info buttons
 * @param currentPath {string} The current path of the page
 * @return {JSX.Element} The header menu
 */
function HeaderMenu({currentPath}) {

    useEffect(() => {
        let handleClick = (evt) => {
            if (!evt.target.className.includes("menuItem")) primedMenuBar = false;
            clearMenuDrops();
        };
        document.documentElement.addEventListener('click', handleClick, true);
        document.documentElement.addEventListener('contextmenu', handleClick, true);
    }, []);

    function clickMenuButton(menuName) {
        if (!primedMenuBar) return focusMenuButton(menuName);
        primedMenuBar = false;
    }
    function mouseOverMenuButton(menuName) {
        if (primedMenuBar) return focusMenuButton(menuName);
    }

    return (
        <header className="menuBar w3-row" style={{top: '0px'}}>
            {
                headerMenus.map((menu, index) => {
                    let className = "menuItem w3-button w3-col";
                    if(menu.hideOnMobile) className += " hideOnMobile";
                    return (
                        <button key={index} id={menu.name.toLowerCase()+"Menu"} className={className}
                                onClick={() => clickMenuButton(menu.name.toLowerCase())}
                                onMouseOver={() => mouseOverMenuButton(menu.name.toLowerCase())}>
                            {menu.name}
                        </button>
                    );
                })
            }
            <MenuDrop currentPath={currentPath}/>
        </header>
    );
}
HeaderMenu.propTypes = { currentPath: PropTypes.string };


/**
 * Drop down menu for the file, edit, terminal, help, and contact info buttons
 * @param currentPath {string} The current path of the page
 * @return {JSX.Element} The drop down menu
 */
function MenuDrop({currentPath}) {
    return (
        <div id="menuDropHolder">
            {
                headerMenus.map((menu, index) => {
                    return (
                        <div key={index} id={menu.name.toLowerCase()+"MenuDropdown"} className="menuDropdown">
                            {
                                menu.items.map((item, index) => {
                                    let className = "menuDropItem w3-button";
                                    if(item.hideOnMobile) className += " hideOnMobile";
                                    if (item.itemType === "action") return (
                                        <button key={index} id={menu.name.toLowerCase().replace(/" "/g, "")+"Action"}
                                                className={className}
                                                onClick={() => {
                                                    if(item.usesCurrentPath) item.data(currentPath);
                                                    else item.data();
                                                }}>
                                            {item.name}
                                        </button>
                                    );
                                    else if (item.itemType === "link") {
                                        let target = item.data.startsWith("http") ? "_blank" : "_self";
                                        return (
                                            <a key={index} className="menuDropItem" style={{display: "block"}}
                                               href={item.data} target={target} rel="noreferrer">{item.name}</a>
                                        );
                                    }
                                    else return (
                                        <button key={index} className="menuDropItem w3-button"
                                                onClick={() => {
                                                    navigator.clipboard.writeText(item.data);
                                                    showDialog("Copied to Clipboard", item.data);
                                                }}>
                                            {item.name+" | " + item.data + " "}
                                            <img src="/assets/explorerIcon.svg" alt='' width="15px"/>
                                        </button>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}
MenuDrop.propTypes = { currentPath: PropTypes.string };


/**
 * Footer for the site that contains the language, encoding, lines, size, and file name status
 * @param currentPath {string} The current path of the page
 * @param pageName {string} The name of the page
 * @return {JSX.Element} The footer status
 */
function StatusFooter({currentPath, pageName}) {

    let pStats = getPageStats(currentPath);
    if (pStats.lines === undefined) pStats.lines = 0;
    if (pStats.size === undefined) pStats.size = 0;

    return (
        <footer className="infoBar w3-row" style={{bottom: '0px'}}>
            <div id="langStatus" className="infoBarItem w3-col" style={{float: 'right'}}>HTML</div>
            <div id="encodingStatus" className="infoBarItem w3-col" style={{float: 'right'}}>UTF-8</div>
            <div id="linesStatus" className="infoBarItem w3-col" style={{float: 'right'}}>{pStats.lines + " Lines"}</div>
            <div id="sizeStatus" className="infoBarItem w3-col" style={{float: 'right'}}>{pStats.size <= 1024 ? pStats.size + "B" : Math.round(pStats.size / 102.4) / 10 + "kB"}</div>
            <div id="itemStatus" className="infoBarItem w3-col" style={{float: 'right'}}>{pageName + ".html"}</div>
        </footer>
    );
}
StatusFooter.propTypes = { currentPath: PropTypes.string, pageName: PropTypes.string };


export {HeaderMenu, MenuDrop, StatusFooter, savePage};
