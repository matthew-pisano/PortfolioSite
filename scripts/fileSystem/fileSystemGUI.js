import {pathJoin} from './fileSystem';
import {masterFileSystem} from './buildfs';
import {SysEnv} from "../utils";


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
}


/**
 * Handles the click event of an item in the context menu
 * @param itemFunction {function} The function to be executed when the item is clicked
 */
function itemClick(itemFunction) {
    itemFunction();
    // Remove all context menus after the item is clicked
    for (let elem of document.getElementsByClassName("contextMenu")) elem.remove();
}


/**
 * Creates a context menu at the mouse event location
 * @param mouseEvent {MouseEvent} The right-click mouse event
 * @param items {object} The items to be displayed in the context menu
 */
function createContextMenu(mouseEvent, items) {

    // Remove any existing context menus
    for(let elem of document.getElementsByClassName("contextMenu")) elem.remove();

    let contextMenu = document.createElement("div");
    contextMenu.className = "contextMenu";
    contextMenu.style.left = mouseEvent.pageX + 'px';
    contextMenu.style.top = mouseEvent.pageY + 'px';

    // Create a button for each item in the context menu
    for(let itemName of Object.keys(items)){
        let itemButton = document.createElement("button");
        itemButton.className = "contextMenuItem w3-button";
        itemButton.innerText = itemName;
        itemButton.onclick = () => itemClick(items[itemName]);
        contextMenu.appendChild(itemButton);
    }

    document.documentElement.appendChild(contextMenu);
}

export { newCustomFile, createContextMenu };