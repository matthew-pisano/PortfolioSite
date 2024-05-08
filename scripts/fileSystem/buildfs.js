import {Directory, Page} from "./fileSystemObjects";
import {FileSystem} from "./fileSystem";
import {masterFileSystem as serverFS, pageRegistry as serverRegistry, buildServerside} from "./serverside";


/**
 * The registry of preset, viewable HTML pages
 * @type {{string: Page}}
 */
let pageRegistry = {};

/**
 * The master file system of the program
 * @type {FileSystem}
 */
let masterFileSystem;

/**
 * The serialized information of the file system
 */
let dehydratedInfo;


/**
 * Builds the file system on the client side by rehydrating the page registry and the master file system
 */
function buildClientside() {

    let dehydrateElem = document.getElementById("dehydrateInfo");
    let hydratedInfo = JSON.parse(dehydrateElem.innerText);

    pageRegistry = hydratedInfo.pageRegistry;
    masterFileSystem = new FileSystem(Directory.fromDict(hydratedInfo.hierarchy), pageRegistry);
}

// If the program is currently running in the client environment
if (typeof window !== 'undefined') {
    buildClientside();
    // The dehydrated info is stored in a hidden element on the page
    dehydratedInfo = document.getElementById("dehydrateInfo").innerText;
}
// If the program is currently running in the server environment
else {
    buildServerside();
    masterFileSystem = serverFS;
    pageRegistry = serverRegistry;
    // Create the dehydrated info from the server file system and page registry
    dehydratedInfo = JSON.stringify({
        hierarchy: serverFS.hierarchy.constructor.toDict(serverFS.hierarchy),
        pageRegistry: serverRegistry
    });
}


/**
 * Sets the page registry to a new registry
 * @param newRegistry {{string: Page}} The new page registry
 */
function setPageRegistry(newRegistry) { pageRegistry = newRegistry; }


/**
 * Sets the master file system to a new file system
 * @param hierarchyDict {Object} The dictionary representation of the new hierarchy
 * @param copyCallbacks {boolean} Whether to copy the callbacks from the old file system
 */
function setMasterFileSystem(hierarchyDict, copyCallbacks = true) {
    let newMaster = new FileSystem(Directory.fromDict(hierarchyDict), pageRegistry);
    if (copyCallbacks) newMaster.callbacks = masterFileSystem.callbacks;
    masterFileSystem = newMaster;
}

export { pageRegistry, masterFileSystem, dehydratedInfo, setPageRegistry, setMasterFileSystem };