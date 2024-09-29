import {Directory, Page} from "./fileSystemObjects";
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
 * @param pageRegistry {string: Page} The new page registry
 * @param copyCallbacks {boolean} Whether to copy the callbacks from the old file system
 */
function setMasterFileSystem(hierarchyDict, pageRegistry, copyCallbacks = true) {
    let newMaster = new FileSystem(Directory.fromDict(hierarchyDict), pageRegistry);
    if (masterFileSystem !== undefined && copyCallbacks) newMaster.callbacks = masterFileSystem.callbacks;
    masterFileSystem = newMaster;
}


/**
 * Rehydrates the file system from a dehydrated info string
 * @param dehydratedInfo {string} The dehydrated info string
 */
function rehydrateFilesystem(dehydratedInfo) {
    let hydratedInfo = JSON.parse(dehydratedInfo);
    setMasterFileSystem(hydratedInfo.hierarchy, hydratedInfo.pageRegistry);
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
    rehydrateFilesystem(dehydratedInfo);
    return dehydrateElem.innerText;
}


/**
 * Builds the file system on the server side and returns the dehydrated info
 * @returns {string} The dehydrated info
 */
function buildServerside() {
    let serverSideFS = bootstrapServerside();
    setMasterFileSystem(serverSideFS.hierarchy, serverSideFS.pageRegistry);
    // Create the dehydrated info from the server file system and page registry
    return JSON.stringify({
        hierarchy: serverSideFS.hierarchy.toDict(),
        pageRegistry: serverSideFS.pageRegistry
    });
}


export { masterFileSystem, buildClientside, buildServerside };
