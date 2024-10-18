import {Directory} from "./fileSystemObjects";
import {FileSystem} from "./fileSystem";
import {bootstrapServerside} from "./bootstrap";


/**
 * The master file system of the program
 * @type {FileSystem}
 */
let masterFileSystem;


/**
 * Sets the master file system to a new file system
 * @param hierarchyDict {object} The dictionary representation of the new hierarchy
 */
function setMasterFileSystem(hierarchyDict) {
    console.log("Setting master file system", hierarchyDict);
    let newMaster = new FileSystem(Directory.deserialize(hierarchyDict));
    if (masterFileSystem !== undefined) newMaster.callbacks = masterFileSystem.callbacks;
    masterFileSystem = newMaster;
    masterFileSystem.update();
}


/**
 * Builds the file system on the client side by rehydrating the page registry and the master file system
 * @returns {string} The dehydrated info
 */
function buildClientside() {
    let dehydrateElem = document.getElementById("dehydrateInfo");
    // The dehydrated info is stored in a hidden element on the page
    let savedHierarchy = localStorage.getItem("hierarchy");
    let dehydratedInfo = savedHierarchy ? savedHierarchy : dehydrateElem.innerText;
    setMasterFileSystem(JSON.parse(dehydratedInfo).hierarchy);
    return dehydrateElem.innerText;
}


/**
 * Builds the file system on the server side and returns the dehydrated info
 * @returns {string} The dehydrated info
 */
function buildServerside() {
    let serverSideFS = bootstrapServerside();
    setMasterFileSystem(serverSideFS.hierarchy.serialize());
    // Create the dehydrated info from the server file system and page registry
    return JSON.stringify(serverSideFS.serialize());
}


export { masterFileSystem, buildClientside, buildServerside };
