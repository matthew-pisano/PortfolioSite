import React from "react";

import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";

import styles from "@/styles/ContextMenu.module.css";
import sidebarStyles from "@/styles/Sidebar.module.css";

/**
 * The root element of the context menu
 */
let contentMenuRoot;

/**
 * The context menu component
 * @param top {number} The top position of the context menu
 * @param left {number} The left position of the context menu
 * @param selectedFile {File} The file that was right-clicked
 * @param actions {object} The actions to be displayed in the context menu
 * @returns {JSX.Element} The context menu
 * @constructor
 */
function ContextMenu({ top, left, selectedFile, actions }) {
    return (
        <div
            className={`contextMenu ${styles.contextMenu}`}
            style={{ top: top, left: left }}
            data-refdata={JSON.stringify(selectedFile.serialize())}
            onContextMenu={(e) => e.preventDefault()}>
            {Object.keys(actions).map((itemName, index) => {
                return (
                    <button
                        key={index}
                        className={`w3-button ${styles.contextMenuItem}`}
                        onClick={() => {
                            actions[itemName]();
                            destroyContextMenu();
                        }}>
                        {itemName}
                    </button>
                );
            })}
        </div>
    );
}

ContextMenu.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    selectedFile: PropTypes.any,
    actions: PropTypes.object
};

/**
 * Creates a context menu at the specified position with the specified actions
 * @param top {number} The top position of the context menu
 * @param left {number} The left position of the context menu
 * @param selectedFile {File} The file that was right-clicked
 * @param actions {object} The actions to be displayed in the context menu
 */
function createContextMenu(top, left, selectedFile, actions) {
    if (contentMenuRoot !== undefined) contentMenuRoot.unmount(); // Unmount the previous context menu

    let fileName = selectedFile.name.split(".")[0];
    document.getElementById(fileName + "-File").classList.add(sidebarStyles.selectedSidebarLink);

    contentMenuRoot = ReactDOM.createRoot(document.getElementById("contextMenuHolder"));
    contentMenuRoot.render(<ContextMenu top={top} left={left} selectedFile={selectedFile} actions={actions} />);
}

/**
 * Destroys the context menu and removes the selected file styling
 */
function destroyContextMenu() {
    if (contentMenuRoot === undefined) return;

    let curSelectedFile = JSON.parse(
        document.getElementById("contextMenuHolder").children[0].getAttribute("data-refdata")
    );
    let fileName = curSelectedFile.name.split(".")[0];

    contentMenuRoot.unmount();
    contentMenuRoot = undefined;

    let pagePath = window.location.pathname === "/" ? "/home" : window.location.pathname;
    let selectedLink = document.querySelectorAll(`.sidebarItem[linkpath="${pagePath}"]`)[0];
    let fileElement = document.getElementById(fileName + "-File");
    if (selectedLink.id !== fileName + "-File" && fileElement)
        fileElement.classList.remove(sidebarStyles.selectedSidebarLink);
}

export { createContextMenu, destroyContextMenu };
