import {FileSystem, masterFileSystem, pathJoin} from "../fileSystem/fileSystem";
import {showDialog} from "../utils";
import {createContextMenu, destroyContextMenu} from "./contextMenu";
import React, {useEffect, useState} from "react";
import {Directory, File} from "../fileSystem/fileSystemObjects";
import $ from "jquery";
import {Perms, SysEnv} from "../fileSystem/fileSystemMeta";


/**
 * The persistent state of the sidebar
 * @type {boolean}
 */
let sidebarOpen = true;


/**
 * Create a directory element in the sidebar
 * @param directory {Directory} The directory to create
 * @param path {string} The path of the directory
 * @return {JSX.Element} The directory element
 */
function buildDirectory(directory, path) {
    let name = directory.name + "-Folder";
    let dirStyle = directory.name === "public" ? {borderStyle: "none"} : {};
    return <div key={name} id={name} className="sidebarItem sidebarFolder w3-row" style={dirStyle}>
            <div className="sidebarFolderHeader">
                <img className='folderIcon' alt=''/>
                <span>{directory.name}</span>
            </div>

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
    let fileName = file.name.split(".")[0];

    let urlPath;
    let linkPath;
    // Link to the file if it is a page, otherwise link to the display page to show a custom file
    if (masterFileSystem.getItem(pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)).isPage()) {
        urlPath = pathJoin(path.replace("public", ""), fileName);
        linkPath = urlPath;
    }
    else {
        urlPath = `/display?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`;
        linkPath = `${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`;
        editIcon = <img className='editorButton' alt='' onClick={() => {
            window.location.replace(`/edit?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`);
        }}/>;
    }

    let parentFolder = pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""));

    // eslint-disable-next-line react/no-unknown-property
    return <div key={fileName + "-File"} id={fileName + "-File"} className="sidebarItem sidebarLink w3-row" linkpath={linkPath} onContextMenu={(e) => {
        createContextMenu(e.clientY, e.clientX, file, {rename: () => renameFile(file, parentFolder), remove: () => removeCustom(file, parentFolder)});
        // Prevent the default context menu from appearing
        e.preventDefault();
    }}>
        <img className='htmlIcon' alt=''/>
        <a id={fileName + "-FileLink"} href={urlPath}>{file.name}</a>
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
 * Rename a file in the file system
 * @param file {File} The file to rename
 * @param parentPath {string} The parentPath of the file
 */
function renameFile(file, parentPath) {

    if (!file || !parentPath) {
        showDialog("File Not Found", "The file that you are attempting to rename does not exist!");
        return;
    }

    let fileName = file.name.split(".")[0];
    // Check if the user has permission to rename the file
    if (!file.permission.includes(Perms.WRITE)) {
        showDialog("Permission Denied", "You do not have permission to rename this file!");
        return;
    }

    // Create a text area to rename the file
    let renamer = document.createElement("textarea");
    renamer.id = fileName + "-FileRenamer";
    renamer.className = "fileRenamer";
    renamer.value = file.name;
    // Replace the file link with the renamer
    let fileLink = document.getElementById(fileName + "-FileLink");
    fileLink.replaceWith(renamer);

    let renameFile = () => {
        // Replace the renamer with the file link and rename the file in the file system
        renamer.replaceWith(fileLink);
        let oldPath = pathJoin(parentPath, file.name);
        let newPath = pathJoin(parentPath, renamer.value.replace("\n", ""));

        if (!masterFileSystem.exists(oldPath)) return;
        if (newPath === oldPath) return;

        masterFileSystem.cp(oldPath, newPath);
        masterFileSystem.rm(oldPath);
    };

    // Remove the renamer if the user clicks outside of it and cancel the rename
    let clickEvent = (evt) => { if (evt.target.id !== renamer.id) renameFile(); };
    renamer.oninput = (e) => {
        // Rename the file if the user presses enter
        if (["insertParagraph", "insertLineBreak"].includes(e.inputType)) {
            renameFile();
            document.documentElement.removeEventListener('click', clickEvent, true);
        }
    };

    document.documentElement.addEventListener('click', clickEvent, true);
}


/**
 * Remove a file from the file system
 * @param file {File} The file to remove
 * @param parentPath {string} The parentPath of the file
 */
function removeCustom(file, parentPath) {

    if (!file || !parentPath) {
        showDialog("File Not Found", "The file that you are attempting to remove does not exist!");
        return;
    }

    // Check if the user has permission to remove the file
    if (!file.permission.includes(Perms.WRITE)) {
        showDialog("Permission Denied", "You do not have permission to remove this file!");
        return;
    }

    let filePath = pathJoin(parentPath, file.name);
    // Remove the file from the file system
    masterFileSystem.rm(filePath);

    // Redirect to the home page if the file being removed is the current file
    if (window.location.search.split("file=")[1] === filePath) window.location.replace("/");
}


/**
 * Splice the file or directory from a directory's subTree.  Used for manually ordering the sidebar items
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
    let aboutFolder = spliceFromSubTree(subTreeCopy, "about");
    let researchFolder = spliceFromSubTree(subTreeCopy, "research");
    let hackFolder = spliceFromSubTree(subTreeCopy, "hackathons");
    let customFolder = spliceFromSubTree(subTreeCopy, "custom");
    subTreeCopy = [homeFile, helpFile, aboutFolder, researchFolder, ...subTreeCopy, hackFolder, customFolder];
    publicFolder.subTree = subTreeCopy;
    return buildHierarchy(publicFolder);
}


/**
 * Set the state of the sidebar
 * @param openState {boolean} The state to set the sidebar to, toggles state if not explicitly provided
 * @param animate {boolean} Whether to animate the sidebar state change
 */
function setSidebarState(openState =! sidebarOpen, animate = true){
    let pageElement = document.getElementsByClassName("page")[0];
    if(!openState){
        // Close the sidebar
        document.getElementById("sidebarContent").style.display = "none";
        document.getElementById("sidebar").classList.replace("openSidebar", "closeSidebar");
        document.getElementById("collapseHolder").classList.replace("openSidebar", "closeSidebar");
        document.getElementById("explorerTitle").style.display = "none";

        pageElement.classList.add("closeSidebarPage");
        pageElement.classList.remove("openSidebarPage");

        $("#sidebarContent").animate({"width": "0px"}, animate ? 200 : 0);
    }
    else{
        // Open the sidebar
        document.getElementById("sidebarContent").style.display = "block";
        $("#sidebarContent").animate({"width": "100%"}, animate ? 200 : 0);
        document.getElementById("sidebar").classList.replace("closeSidebar", "openSidebar");
        document.getElementById("collapseHolder").classList.replace("closeSidebar", "openSidebar");
        pageElement.classList.remove("closeSidebarPage");

        pageElement.classList.add("openSidebarPage");

        document.getElementById("explorerTitle").style.display = "";
        $(".sidebarItem").visible();
    }

    sidebarOpen = openState;
}


/**
 * Merge the custom hierarchy with the hierarchy from the server, keeping custom files and updating from the server
 * @param serverFS The initial file system from the server
 * @param customFS The custom file system from the client
 */
function mergeCachedPages(serverFS, customFS) {
    let cachedCustomObjects = customFS.subTree.filter(obj => obj instanceof File && !obj.isPage());
    for (let customObj of cachedCustomObjects) serverFS.addChild(customObj, true);
    for (let dir of serverFS.subTree.filter(obj => obj instanceof Directory)) {
        let customDir = customFS.subTree.find(obj => obj.name === dir.name && obj instanceof Directory);
        if (customDir) mergeCachedPages(dir, customDir);
    }
}


/**
 * The sidebar component that displays the file system hierarchy, used for navigation and file management
 * @returns {JSX.Element} The sidebar component
 */
function Sidebar() {
    const [explorerTree, setExplorerTree] = useState(buildSidebar());

    useEffect(() => {
        // Close the sidebar on mobile
        if(window.innerWidth < 600)
            setSidebarState(false);

        // Load the custom hierarchy from local storage
        let savedHierarchy = localStorage.getItem("hierarchy");
        if (savedHierarchy) {
            let customFileSystem = FileSystem.deserialize(JSON.parse(savedHierarchy));
            mergeCachedPages(masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER), customFileSystem.getItem(SysEnv.PUBLIC_FOLDER));
        }

        setExplorerTree(buildSidebar());

        // Update the sidebar when the file system is updated
        masterFileSystem.registerCallback(() => {setExplorerTree(buildSidebar());});

        let destroyContextMenuEvent = (evt) => { if(!evt.target.className.includes("contextMenu")) destroyContextMenu(); };
        document.documentElement.addEventListener('click', destroyContextMenuEvent, true);
        document.body.addEventListener('contextmenu', destroyContextMenuEvent, true);

    }, []);

    useEffect(() => {
        // Highlight the current page in the sidebar
        let pagePath = window.location.pathname === "/" ? "/home" : window.location.pathname;
        if (pagePath.endsWith("display") || pagePath.endsWith("edit")) pagePath = window.location.search.split("file=")[1];
        let selectedLink = document.querySelectorAll(`.sidebarItem[linkpath="${pagePath}"]`)[0];
        if (selectedLink) selectedLink.classList.add("selectedSidebarLink");
    }, [explorerTree]);

    return (
        <div id="sidebar" className="w3-col openSidebar">
            <div id="collapseHolder" className="w3-cell-row openSidebar">
                <button id="collapseSidebar" className="w3-button w3-cell" onClick={() => setSidebarState()}></button>
                <span id="explorerTitle" className="sidebarItem w3-cell">Explorer</span>
            </div>
            <div id="sidebarContent" className="w3-display-container w3-row">{explorerTree}</div>
        </div>
    );
}


export {renameFile, Sidebar};
