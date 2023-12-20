import {Directory, masterFileSystem, pageRegistry, pathJoin} from "./fileSystem/fileSystem";
import {Perms, SysEnv} from "./utils";
import {createContextMenu} from "./fileSystem/fileSystemGUI";
import React from "react";


function buildDirectory(directory, path) {
    let name = directory.name + "-Folder";
    return <div key={name} id={name} className="sidebarItem sidebarFolder w3-row">
            <img className='folderIcon' alt='folder'/>
            <button className="w3-button lightText" onClick={
                () => {
                    document.getElementById("langStatus").innerText = "";
                    document.getElementById("encodingStatus").innerText = "";
                    document.getElementById("linesStatus").innerText = "";
                    document.getElementById("sizeStatus").innerText = "Children: " + directory.subTree.length;
                    document.getElementById("itemStatus").innerText = directory.name;
                }
            }>{directory.name}</button>

            <div id={directory.name + "Content"} className="w3-row sidebarContent">
                {directory.subTree.map(child => buildHierarchy(child, path + "/" + directory.name))}
            </div>
        </div>;
}


function buildFile(file, path) {
    let editIcon = null;
    let name = file.name.split(".")[0];

    let urlPath;
    if (pageRegistry[pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)])
        urlPath = pathJoin(path.replace("public", ""), name);
    else {
        urlPath = `/display?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`;
        editIcon = <img className='editButton' alt='html' onClick={() => {
            window.location.replace(`/edit?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`);
        }}/>;
    }

    return <div key={name + "-File"} id={name + "-File"} className="sidebarItem w3-row">
        <img className='htmlIcon' alt='html'/>
        <a id={name + "-FileLink"} className="w3-button lightText" style={{padding: 0}} href={urlPath} onContextMenu={(e) => {
            createContextMenu(e, {
                rename: () => {
                    if (file.permission.includes(Perms.WRITE)) {
                        let renamer = document.createElement("textarea");
                        renamer.id = name + "-FileRenamer";
                        renamer.className = "fileRenamer";
                        renamer.value = file.name;
                        let fileLink = document.getElementById(name + "-FileLink");
                        fileLink.replaceWith(renamer);
                        let rename = () => {
                            renamer.remove();
                            let parentFolder = pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""));
                            if (!masterFileSystem.exists(pathJoin(parentFolder, file.name))) return;
                            masterFileSystem.cp(pathJoin(parentFolder, file.name), pathJoin(parentFolder, renamer.value.replace("\n", "")));
                            masterFileSystem.rm(pathJoin(parentFolder, file.name));
                        };
                        let clickEvent = (evt) => {
                            if (evt.target.id !== renamer.id) rename();
                        };
                        renamer.oninput = (e) => {
                            if (["insertParagraph", "insertLineBreak"].includes(e.inputType)) {
                                rename();
                                document.documentElement.addEventListener('click', clickEvent, true);
                            }
                        };
                        document.documentElement.addEventListener('click', clickEvent, true);
                    } else alert("You do not have permission to rename this file!");
                },
                remove: () => {
                    if (file.permission.includes(Perms.WRITE))
                        masterFileSystem.rm(pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""), file.name));
                    else alert("You do not have permission to remove this file!");
                }
            });
            e.preventDefault();
        }}>{file.name}</a>
        {editIcon}
    </div>;
}

export function buildHierarchy(tree, path = "") {
    if (tree.constructor === Directory) return buildDirectory(tree, path);
    else return buildFile(tree, path);
}