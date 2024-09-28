import {pathJoin} from './fileSystem';
import {masterFileSystem} from './buildfs';

import {SysEnv} from "./fileSystemMeta";


/**
 * The currently selected file in the context menu
 * @type {File}
 */
let curSelectedFile = null;


/**
 * Creates a new custom file in the public/custom folder
 */
function newCustomFile() {

    let customFolder = masterFileSystem.getItem(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    let newFileName = "newFile";
    let newFileIndex = 0;

    // Check if the file name already exists and increment the copy number if it does
    for(let file of customFolder.subTree)
        if(file.name.includes(newFileName)) newFileIndex++;

    // Append the copy number to the file name
    newFileName += newFileIndex !== 0 ? newFileIndex : "";
    // Create the new file
    masterFileSystem.touch(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", newFileName+".html"));

    window.location.href = "/edit?file="+pathJoin(SysEnv.PUBLIC_FOLDER, "custom", newFileName+".html");
}


/**
 * Creates a context menu at the mouse event location
 * @param mouseEvent {MouseEvent} The right-click mouse event
 * @param selectedFile {File} The file that was right-clicked
 * @param actions {object} The actions to be displayed in the context menu
 */
function createContextMenu(mouseEvent, selectedFile, actions) {
    curSelectedFile = selectedFile;

    // Remove any existing context menus
    for(let elem of document.getElementsByClassName("contextMenu")) elem.remove();

    let fileName = selectedFile.name.split(".")[0];
    document.getElementById(fileName + "-File").classList.add("selectedSidebarLink");

    let contextMenu = document.createElement("div");
    contextMenu.className = "contextMenu";
    contextMenu.style.left = mouseEvent.clientX + 'px';
    contextMenu.style.top = mouseEvent.clientY + 'px';

    // Create a button for each item in the context menu
    for(let itemName of Object.keys(actions)){
        let itemButton = document.createElement("button");
        itemButton.className = "contextMenuItem w3-button";
        itemButton.innerText = itemName;
        itemButton.onclick = () => {actions[itemName](); destroyContextMenu();};
        contextMenu.appendChild(itemButton);
    }

    document.documentElement.appendChild(contextMenu);
}


/**
 * Destroys the context menu and removes the selected file styling
 */
function destroyContextMenu() {
    for (let elem of document.getElementsByClassName("contextMenu"))
        elem.remove();
    if (curSelectedFile !== null) {
        let fileName = curSelectedFile.name.split(".")[0];
        curSelectedFile = null;

        let pagePath = window.location.pathname === "/" ? "/home" : window.location.pathname;
        let selectedLink = document.querySelectorAll(`.sidebarItem[linkpath="${pagePath}"]`)[0];
        if (selectedLink.id !== fileName + "-File")
            document.getElementById(fileName + "-File").classList.remove("selectedSidebarLink");
    }
}


export { newCustomFile, createContextMenu, destroyContextMenu };
