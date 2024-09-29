import {pathJoin} from './fileSystem';
import {masterFileSystem} from './buildfs';

import {SysEnv} from "./fileSystemMeta";


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


export {newCustomFile};
