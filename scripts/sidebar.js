import {pathJoin} from "./fileSystem/fileSystem";
import {masterFileSystem, pageRegistry} from './fileSystem/buildfs';
import {Perms, showDialog, SysEnv} from "./utils";
import {createContextMenu} from "./fileSystem/fileSystemGUI";
import React from "react";
import {Directory, File} from "./fileSystem/fileSystemObjects";
import $ from "jquery";


/**
 * Create a directory element in the sidebar
 * @param directory {Directory} The directory to create
 * @param path {string} The path of the directory
 * @return {JSX.Element} The directory element
 */
function buildDirectory(directory, path) {
    let name = directory.name + "-Folder";
    let langStatus, encodingStatus, linesStatus, sizeStatus, itemStatus;
    return <div key={name} id={name} className="sidebarItem sidebarFolder w3-row">
            <img className='folderIcon' alt='folder'/>
            <button className="w3-button lightText" onMouseEnter={() => {
                // Save the current status information and update the status bar with the directory information
                langStatus = document.getElementById("langStatus").innerText;
                encodingStatus = document.getElementById("encodingStatus").innerText;
                linesStatus = document.getElementById("linesStatus").innerText;
                sizeStatus = document.getElementById("sizeStatus").innerText;
                itemStatus = document.getElementById("itemStatus").innerText;

                document.getElementById("langStatus").innerText = "";
                document.getElementById("encodingStatus").innerText = "";
                document.getElementById("linesStatus").innerText = "";
                document.getElementById("sizeStatus").innerText = directory.subTree.length > 1 ? `${directory.subTree.length} Children` : `${directory.subTree.length} Child`;
                document.getElementById("itemStatus").innerText = directory.name+"/";
            }}
            onMouseLeave={() => {
                // Restore the status bar to its previous state
                document.getElementById("langStatus").innerText = langStatus;
                document.getElementById("encodingStatus").innerText = encodingStatus;
                document.getElementById("linesStatus").innerText = linesStatus;
                document.getElementById("sizeStatus").innerText = sizeStatus;
                document.getElementById("itemStatus").innerText = itemStatus;
            }}>{directory.name}</button>

            <div id={directory.name + "Content"} className="w3-row sidebarContent">
                {directory.subTree.map(child => buildHierarchy(child, path + "/" + directory.name))}
            </div>
        </div>;
}


/**
 * Create a file element in the sidebar
 * @param file {File} The file to create
 * @param path {string} The path of the file
 * @return {JSX.Element} The file element
 */
function buildFile(file, path) {
    let editIcon = null;
    let name = file.name.split(".")[0];

    let urlPath;
    // Link to the file if it is a page, otherwise link to the display page to show a custom file
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
                // Rename the file
                rename: () => {
                    // Check if the user has permission to rename the file
                    if (!file.permission.includes(Perms.WRITE)) {
                        showDialog("Permission Denied", "You do not have permission to rename this file!");
                        return;
                    }

                    // Create a text area to rename the file
                    let renamer = document.createElement("textarea");
                    renamer.id = name + "-FileRenamer";
                    renamer.className = "fileRenamer";
                    renamer.value = file.name;
                    // Replace the file link with the renamer
                    let fileLink = document.getElementById(name + "-FileLink");
                    fileLink.replaceWith(renamer);
                    let rename = () => {
                        renamer.remove();
                        let parentFolder = pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""));
                        if (!masterFileSystem.exists(pathJoin(parentFolder, file.name))) return;
                        masterFileSystem.cp(pathJoin(parentFolder, file.name), pathJoin(parentFolder, renamer.value.replace("\n", "")));
                        masterFileSystem.rm(pathJoin(parentFolder, file.name));
                    };
                    let clickEvent = (evt) => { if (evt.target.id !== renamer.id) rename(); };
                    renamer.oninput = (e) => {
                        // Rename the file if the user presses enter
                        if (["insertParagraph", "insertLineBreak"].includes(e.inputType)) {
                            rename();
                            document.documentElement.addEventListener('click', clickEvent, true);
                        }
                    };
                    // Remove the renamer if the user clicks outside of it and cancel the rename
                    document.documentElement.addEventListener('click', clickEvent, true);
                },
                // Remove the file
                remove: () => {
                    // Check if the user has permission to remove the file
                    if (!file.permission.includes(Perms.WRITE)) {
                        showDialog("Permission Denied", "You do not have permission to remove this file!");
                        return;
                    }
                    // Remove the file from the file system
                    masterFileSystem.rm(pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""), file.name));
                }
            });
            // Prevent the default context menu from appearing
            e.preventDefault();
        }}>{file.name}</a>
        {editIcon}
    </div>;
}


/**
 * Build the hierarchy of the file system
 * @param tree {Directory|File} The tree to build
 * @param path {string} The path of the tree
 * @return {JSX.Element} The tree element
 */
function buildHierarchy(tree, path = "") {
    // Create a directory if the tree is a directory, otherwise create a file
    if (tree.constructor === Directory) return buildDirectory(tree, path);
    else return buildFile(tree, path);
}


/**
 * Splice the file or directory from a directory's subTree
 * @param subTree {(Directory|File)[]} The subTree to splice from
 * @param name {string} The name of the file or directory to splice
 * @return {File|Directory} The spliced file or directory
 */
function spliceFromSubTree(subTree, name) {
    for(let i=0; i<subTree.length; i++)
        if(subTree[i].name === name) return subTree.splice(i,1)[0];
    return null;
}


/**
 * Build the sidebar from the public folder using a custom ordering
 * @return {JSX.Element} The ordered sidebar
 */
function buildSidebar() {

    let publicFolder = masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER).copy();
    let subTreeCopy = [...publicFolder.subTree];
    let helpFile = spliceFromSubTree(subTreeCopy, "help.html");
    let homeFile = spliceFromSubTree(subTreeCopy, "home.html");
    let researchFolder = spliceFromSubTree(subTreeCopy, "research");
    let hackFolder = spliceFromSubTree(subTreeCopy, "hackathons");
    let customFolder = spliceFromSubTree(subTreeCopy, "custom");
    let aboutFolder = spliceFromSubTree(subTreeCopy, "about");
    subTreeCopy = [homeFile, helpFile, researchFolder, ...subTreeCopy, hackFolder, aboutFolder, customFolder];
    publicFolder.subTree = subTreeCopy;
    return buildHierarchy(publicFolder);
}


/**
 * The persistent state of the sidebar
 * @type {boolean}
 */
let sidebarOpen = true;


/**
 * Set the state of the sidebar
 * @param openState {boolean} The state to set the sidebar to, toggles state if not explicitly provided
 * @param animate {boolean} Whether to animate the sidebar state change
 */
function setSidebarState(openState =! sidebarOpen, animate = true){
    let sidebarMax = 230;
    let sidebarMin = 50;
    if(!openState){
        $(".sidebarItem").invisible();
        document.getElementById("sidebarContent").style.display = "none";
        document.getElementById("sidebar").classList.replace("openSidebar", "closeSidebar");
        document.getElementById("explorerTitle").style.display = "none";
        document.getElementById("collapseHolder").classList.replace("openSidebar", "closeSidebar");
        document.getElementsByClassName("page")[0].classList.remove("sidebarOpenPage");
        $("#sidebarContent").animate({"width": "0px"}, animate ? 200 : 0);
    }
    else{
        document.getElementById("sidebarContent").style.display = "block";
        $("#sidebarContent").animate({"width": "100%"}, animate ? 200 : 0);
        document.getElementById("sidebar").classList.replace("closeSidebar", "openSidebar");
        document.getElementById("collapseHolder").classList.replace("closeSidebar", "openSidebar");
        document.getElementsByClassName("page")[0].classList.add("sidebarOpenPage");
        document.getElementById("explorerTitle").style.display = "";
        $(".sidebarItem").visible();
    }

    $(".page").animate({"margin-left": (openState ? sidebarMax : sidebarMin )+"px"}, animate ? 200 : 0);
    sidebarOpen = openState;
}

export {buildSidebar, setSidebarState};