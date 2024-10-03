import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import {buildClientside, buildServerside} from '../fileSystem/buildfs';
import TerminalDiv from '../terminal/terminal';
import PropTypes from "prop-types";
import {Sidebar} from "./sidebar";
import {HeaderMenu, MenuDrop, savePage, StatusFooter} from "./margins";
import {setTheme} from "../themes";

let dehydratedInfo;
if (typeof window === 'undefined') dehydratedInfo = buildServerside();
else dehydratedInfo = buildClientside();


/**
 * Execute a command in the terminal.  This function is called when a command is passed in the URL.
 */
function executeCommand() {
    let terminal = document.getElementById('terminal');
    // Open the terminal to a specific size if specified in the URL
    let termSize = parseInt(new URLSearchParams(window.location.search).get("ts"));
    if(termSize && !isNaN(termSize)) terminal.dispatchEvent(new CustomEvent("openTo", {detail: termSize}));
    else terminal.dispatchEvent(new CustomEvent("openTo", {detail: 550}));
    // Set the font size if specified in the URL
    let fontSize = parseInt(new URLSearchParams(window.location.search).get("fs"));
    if(fontSize && !isNaN(fontSize)) terminal.style.fontSize = `${fontSize}px`;
    // Execute the command
    let command = new URLSearchParams(window.location.search).get("exe");
    document.getElementById('terminalInput').innerText = command;
    document.getElementById('terminalInput').dispatchEvent(new Event("submit"));
}


/**
 * Add event listeners to the wrapper element.  This function is called when the wrapper is mounted.
 */
function addWrapperListeners() {
    // Capture CTRL + S to save the page
    document.addEventListener('keydown', evt => {
        if (evt.ctrlKey && evt.key === 's' && !evt.shiftKey && !evt.altKey) {
            // Prevent the Save dialog to open
            evt.preventDefault();
            savePage(window.location.pathname);
        }
    });
}

/**
 * The wrapper for all pages on the site.  This component is the parent of all other components, containing the main page content along with the margin menus and the terminal.
 * @param children {JSX.Element} The page content tiles and other elements
 * @param pageName {string} The name of the page
 * @param pageStyle {object} The style of the page element
 * @return {JSX.Element} The wrapper for the page
 */
function Wrapper({children, pageName, pageStyle}) {
    const [currentPath, setCurrentPath] = useState(null);

    // Initialize the sidebar state and load the saved hierarchy
    useEffect(() => {

        // Remove the dehydrated info from the page
        if(document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();

        setCurrentPath(window.location.pathname);
        addWrapperListeners();
        // If a command is passed in the URL, execute it in the terminal
        if(new URLSearchParams(window.location.search).get("exe")) executeCommand();
        setTheme(localStorage.getItem("theme"));
    }, []);

    return (
        <div id="wrapper" className="w3-display-container">
            <Head><title>{pageName.substring(pageName.lastIndexOf("/") + 1) + ".html"}</title></Head>
            <HeaderMenu currentPath={currentPath}/>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <Sidebar/>
                <div id="page" className="page container w3-rest" style={pageStyle}>
                    {children}
                </div>
            </div>

            <div id="dialogBox">
                <img id="dialogBoxIcon" src="/assets/personal.png" alt=''/>
                <span id="dialogBoxTitle"></span>
                <p id="dialogBoxBody"></p>
            </div>

            <TerminalDiv/>

            <StatusFooter currentPath={currentPath} pageName={pageName}/>
            <span id="dehydrateInfo" style={{display: "none"}}>{dehydratedInfo}</span>

            <div id="contextMenuHolder"></div>
        </div>
    );
}
Wrapper.propTypes = { children: PropTypes.element, pageName: PropTypes.string, pageStyle: PropTypes.object };


export default Wrapper;
