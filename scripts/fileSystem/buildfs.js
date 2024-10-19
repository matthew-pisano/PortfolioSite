import {FileSystem} from "./fileSystem";
import {bootstrapServerside} from "./bootstrap";


/**
 * The master file system of the program
 * @type {FileSystem}
 */
let masterFileSystem;


/**
 * Builds the file system on the client side by rehydrating the page registry and the master file system
 * @returns {string} The dehydrated info
 */
function buildClientside() {
    let dehydrateElem = document.getElementById("dehydrateInfo");
    // The dehydrated info is stored in a hidden element on the page
    let savedHierarchy = localStorage.getItem("hierarchy");
    let dehydratedInfo = savedHierarchy ? savedHierarchy : dehydrateElem.innerText;
    masterFileSystem = FileSystem.deserialize(JSON.parse(dehydratedInfo));
    return dehydrateElem.innerText;
}


/**
 * Builds the file system on the server side and returns the dehydrated info
 * @returns {string} The dehydrated info
 */
function buildServerside() {
    masterFileSystem = bootstrapServerside();
    // Create the dehydrated info from the server file system and page registry
    return JSON.stringify(masterFileSystem.serialize());
}


export { masterFileSystem, buildClientside, buildServerside };
