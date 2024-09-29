import React, {useEffect} from "react";
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";


let contentMenuRoot = null;


function ContextMenu({top, left, selectedFile, actions}) {
    useEffect(() => {
        let fileName = selectedFile.name.split(".")[0];
        document.getElementById(fileName + "-File").classList.add("selectedSidebarLink");
    }, []);

    return <div className={"contextMenu"} style={{top: top, left: left}} data-refdata={JSON.stringify(selectedFile.toDict())}>
        {
            Object.keys(actions).map((itemName, index) => {
                return <button key={index} className={"contextMenuItem w3-button"}
                               onClick={() => {actions[itemName](); destroyContextMenu();}}>
                    {itemName}
                </button>;
            })
        }
    </div>;
}
ContextMenu.propTypes = { top: PropTypes.number, left: PropTypes.number, selectedFile: PropTypes.any, actions: PropTypes.object };


/**
 * Creates a context menu at the specified position with the specified actions
 * @param top {number} The top position of the context menu
 * @param left {number} The left position of the context menu
 * @param selectedFile {File} The file that was right-clicked
 * @param actions {object} The actions to be displayed in the context menu
 */
function createContextMenu(top, left, selectedFile, actions) {
    if (contentMenuRoot !== null) contentMenuRoot.unmount(); // Unmount the previous context menu

    contentMenuRoot = ReactDOM.createRoot(document.getElementById("contextMenuHolder"));
    contentMenuRoot.render(<ContextMenu top={top} left={left} selectedFile={selectedFile} actions={actions}/>);
}

/**
 * Destroys the context menu and removes the selected file styling
 */
function destroyContextMenu() {
    if (contentMenuRoot === null) return;

    let curSelectedFile = JSON.parse(document.getElementById("contextMenuHolder").childNodes[0].getAttribute("data-refdata"));
    let fileName = curSelectedFile.name.split(".")[0];

    contentMenuRoot.unmount();
    contentMenuRoot = null;

    let pagePath = window.location.pathname === "/" ? "/home" : window.location.pathname;
    let selectedLink = document.querySelectorAll(`.sidebarItem[linkpath="${pagePath}"]`)[0];
    let fileElement = document.getElementById(fileName + "-File");
    if (selectedLink.id !== fileName + "-File" && fileElement)
        fileElement.classList.remove("selectedSidebarLink");
}

export {createContextMenu, destroyContextMenu};
