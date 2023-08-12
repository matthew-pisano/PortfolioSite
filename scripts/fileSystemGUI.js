import {masterFileSystem, pathJoin} from './fileSystem';
import {SysEnv} from "./utils";

function newCustomFile() {
    let customFolder = masterFileSystem.getItem(pathJoin(SysEnv.PUBLIC_FOLDER, "custom"));
    let newFileName = "newFile";
    let newFileIndex = 0;

    for(let file of customFolder.subTree)
        if(file.name.includes(newFileName)) newFileIndex++;

    newFileName += newFileIndex !== 0 ? newFileIndex : "";
    masterFileSystem.touch(pathJoin(SysEnv.PUBLIC_FOLDER, "custom", newFileName));
}

function createContextMenu(mouseEvent, items) {

    for(let elem of document.getElementsByClassName("contextMenu")) elem.remove();

    let contextMenu = document.createElement("div");
    contextMenu.className = "contextMenu";

    function itemClick(itemFunction) {
        itemFunction();
        for (let elem of document.getElementsByClassName("contextMenu")) elem.remove();
    }

    for(let itemName of Object.keys(items)){
        let itemButton = document.createElement("button");
        itemButton.className = "contextMenuItem w3-button";
        itemButton.innerText = itemName;
        itemButton.onclick = () => itemClick(items[itemName]);
        contextMenu.appendChild(itemButton);
    }

    contextMenu.style.left = mouseEvent.pageX + 'px';
    contextMenu.style.top = mouseEvent.pageY + 'px';
    document.documentElement.appendChild(contextMenu);
}

export { newCustomFile, createContextMenu }