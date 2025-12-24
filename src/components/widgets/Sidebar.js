import React, { useEffect, useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { createContextMenu, destroyContextMenu } from "@/components/widgets/ContextMenu";
import { FileSystem, masterFileSystem, mergeClientDirectory, pathJoin } from "@/lib/fileSystem/fileSystem";
import { Perms, SysEnv } from "@/lib/fileSystem/fileSystemMeta";
// eslint-disable-next-line no-unused-vars
import { Directory, File } from "@/lib/fileSystem/fileSystemObjects";
import { showDialog } from "@/lib/util/utils";
import styles from "@/styles/Sidebar.module.css";
import wrapperStyles from "@/styles/Wrapper.module.css";

/**
 * Create a directory element in the sidebar
 * @param directory {Directory} The directory to create
 * @param path {string} The path of the directory
 * @return {JSX.Element} The directory element
 */
function buildDirectory(directory, path) {
    let name = directory.name + "-Folder";
    let dirStyle = directory.name === "public" ? { borderStyle: "none" } : {};
    return (
        <div key={name} id={name} className={`${styles.sidebarItem} ${styles.sidebarFolderItem}`} style={dirStyle}>
            <div className={`${styles.sidebarFolderHeader}`}>
                <img className={`${styles.folderIcon}`} alt="" />
                <span>{directory.name}</span>
            </div>

            <div id={directory.name + "Content"} className={`${styles.sidebarItemContent}`}>
                {directory.subTree.map((child) => buildHierarchy(child, path + "/" + directory.name))}
            </div>
        </div>
    );
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
    } else {
        urlPath = `/display?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`;
        linkPath = `${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`;
        editIcon = (
            <img
                className={`${styles.editorButton}`}
                alt=""
                onClick={() => {
                    window.location.replace(`/edit?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), file.name)}`);
                }}
            />
        );
    }

    let parentFolder = pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""));

    let onContextMenu = (e) => {
        createContextMenu(e.clientY, e.clientX, file, {
            rename: () => renameFile(file, parentFolder),
            remove: () => removeCustom(file, parentFolder)
        });
        // Prevent the default context menu from appearing
        e.preventDefault();
    };

    let pageLink;
    if (urlPath.startsWith("/display"))
        pageLink = (
            <a id={fileName + "-FileLink"} href={urlPath}>
                {file.name}
            </a>
        );
    else
        pageLink = (
            <Link id={fileName + "-FileLink"} href={urlPath}>
                {file.name}
            </Link>
        );

    return (
        <div
            key={fileName + "-File"}
            id={fileName + "-File"}
            linkpath={linkPath}
            onContextMenu={onContextMenu}
            className={`${styles.sidebarItem} ${styles.sidebarLink}`}>
            <img className={`${styles.htmlIcon}`} alt="" />
            {pageLink}
            {editIcon}
        </div>
    );
}

/**
 * Build the hierarchy of the file system
 * @param tree {Directory|File} The tree to build
 * @param path {string} The path of the tree
 * @return {JSX.Element} The tree element
 */
function buildHierarchy(tree, path = "") {
    // Create a directory if the tree is a directory, otherwise create a file
    if (tree instanceof Directory) return buildDirectory(tree, path);
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
    renamer.className = styles.fileRenamer;
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
    let clickEvent = (evt) => {
        if (evt.target.id !== renamer.id) renameFile();
    };
    renamer.oninput = (e) => {
        // Rename the file if the user presses enter
        if (["insertParagraph", "insertLineBreak"].includes(e.inputType)) {
            renameFile();
            document.documentElement.removeEventListener("click", clickEvent, true);
        }
    };

    document.documentElement.addEventListener("click", clickEvent, true);
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
    for (let i = 0; i < subTree.length; i++) if (subTree[i].name === name) return subTree.splice(i, 1)[0];
    return null;
}

/**
 * Build the sidebar from the public folder using a custom ordering
 * @return {JSX.Element} The ordered sidebar
 */
function buildSidebar() {
    let publicFolder = masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER).copy();
    let subTreeCopy = [...publicFolder.subTree];
    let homeFile = spliceFromSubTree(subTreeCopy, "home.html");
    let helpFile = spliceFromSubTree(subTreeCopy, "help.html");
    let aboutFile = spliceFromSubTree(subTreeCopy, "about.html");
    let worksFolder = spliceFromSubTree(subTreeCopy, "works");
    let researchFolder = spliceFromSubTree(subTreeCopy, "research");
    let customFolder = spliceFromSubTree(subTreeCopy, "custom");
    subTreeCopy = [homeFile, aboutFile, helpFile, worksFolder, researchFolder, ...subTreeCopy, customFolder];
    publicFolder.subTree = subTreeCopy;
    return buildHierarchy(publicFolder);
}

/**
 * The sidebar component that displays the file system hierarchy, used for navigation and file management
 * @returns {JSX.Element} The sidebar component
 */
function Sidebar() {
    const [explorerTree, setExplorerTree] = useState(buildSidebar());
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        // Close the sidebar on mobile
        if (window.innerWidth < 600) setSidebarOpen(false);

        // Load the custom hierarchy from local storage
        let savedHierarchy = localStorage.getItem("hierarchy");
        if (savedHierarchy) {
            try {
                let clientFileSystem = FileSystem.deserialize(JSON.parse(savedHierarchy));
                mergeClientDirectory(
                    masterFileSystem.getItem(SysEnv.HOME_FOLDER),
                    clientFileSystem.getItem(SysEnv.HOME_FOLDER)
                );
            } catch (e) {
                // Remove the hierarchy from local storage if it fails to load
                console.error("Failed to load custom hierarchy from local storage: " + e);
                localStorage.removeItem("hierarchy");
            }
        }

        setExplorerTree(buildSidebar());

        // Update the sidebar when the file system is updated
        masterFileSystem.registerCallback(() => {
            setExplorerTree(buildSidebar());
        });

        let destroyContextMenuEvent = (evt) => {
            if (!evt.target.className.includes("contextMenu")) destroyContextMenu();
        };
        document.documentElement.addEventListener("click", destroyContextMenuEvent, true);
        document.body.addEventListener("contextmenu", destroyContextMenuEvent, true);
    }, []);

    useEffect(() => {
        // Highlight the current page in the sidebar
        let pagePath = window.location.pathname === "/" ? "/home" : window.location.pathname;
        if (pagePath.endsWith("display") || pagePath.endsWith("edit"))
            pagePath = window.location.search.split("file=")[1];
        let selectedLink = document.querySelectorAll(`.${styles.sidebarItem}[linkpath="${pagePath}"]`)[0];
        if (selectedLink) selectedLink.classList.add(styles.selectedSidebarLink);
    }, [explorerTree]);

    useEffect(() => {
        if (sidebarOpen) document.getElementById("page").classList.add(wrapperStyles.hideOnMobile);
        else document.getElementById("page").classList.remove(wrapperStyles.hideOnMobile);
    }, [sidebarOpen]);

    let sidebarStateCls = sidebarOpen ? styles.openSidebar : styles.closeSidebar;
    return (
        <div id="sidebar" className={`${sidebarStateCls} ${styles.sidebar}`}>
            <div id="sidebarHeader" className={`${sidebarStateCls} ${styles.sidebarHeader}`}>
                <button
                    id="sidebarToggle"
                    className={`w3-button ${styles.sidebarToggle}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}></button>
                <span
                    id="sidebarTitle"
                    className={`${styles.sidebarItem} ${styles.sidebarTitle}`}
                    style={{ display: sidebarOpen ? "inline" : "none" }}>
                    Explorer
                </span>
            </div>
            <div id="sidebarBody" className={`${styles.sidebarBody}`}>
                <div
                    id="sidebarContent"
                    className={`${styles.sidebarContent}`}
                    style={{ display: sidebarOpen ? "block" : "none" }}>
                    {explorerTree}
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = { changeSidebarState: PropTypes.func };

export default Sidebar;
export { renameFile };
