import DialogBox from "@/components/DialogBox";
import {slideTilesOnScroll} from "@/lib/slideTiles";
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import {buildClientside, buildServerside} from '@/lib/fileSystem/fileSystem';
import PropTypes from "prop-types";
import TerminalDiv from '@/components/Terminal';
import {Sidebar} from "@/components/Sidebar";
import {HeaderMenu, savePage, StatusFooter} from "./Margins";
import {setTheme} from "@/lib/themes";

import styles from '@/styles/Wrapper.module.css';


/**
 * Execute a command in the terminal.  This function is called when a command is passed in the URL.
 */
function executeCommand() {
    let terminal = document.getElementById('terminal');
    let urlParams = new URLSearchParams(window.location.search);
    // Open the terminal to a specific size if specified in the URL
    let termSize = parseInt(urlParams.get("ts"));
    if(termSize && !isNaN(termSize)) terminal.dispatchEvent(new CustomEvent("openTo", {detail: termSize}));
    else terminal.dispatchEvent(new CustomEvent("openTo", {detail: 550}));
    // Set the font size if specified in the URL
    let fontSize = parseInt(urlParams.get("fs"));
    if(fontSize && !isNaN(fontSize)) terminal.style.fontSize = `${fontSize}px`;
    // Execute the command
    document.getElementById('terminalInput').innerText = urlParams.get("exe");
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
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const changeSidebarState = (newState) => {setSidebarOpen(newState);};

    let dehydratedInfo;
    if (typeof window === 'undefined') dehydratedInfo = buildServerside();
    else if (document.getElementById("dehydrateInfo")) dehydratedInfo = buildClientside();

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

    let pageStateCls = sidebarOpen ? styles.openSidebarPage : styles.closeSidebarPage;
    return (
        <div id="wrapper" className={`w3-display-container ${styles.wrapper}`}>
            <Head><title>{pageName.substring(pageName.lastIndexOf("/") + 1) + ".html"}</title></Head>
            <HeaderMenu currentPath={currentPath}/>

            <div id="wrapperContent" className={`w3-display-container w3-row ${styles.wrapperContent}`} onScroll={slideTilesOnScroll}>
                <Sidebar changeSidebarState={changeSidebarState}/>
                <div id="page" className={`w3-rest ${styles.page} ${pageStateCls}`} style={pageStyle}>
                    {children}
                </div>
            </div>

            <DialogBox/>
            <TerminalDiv/>
            <StatusFooter currentPath={currentPath} pageName={pageName}/>
            <span id="dehydrateInfo" style={{display: "none"}}>{dehydratedInfo}</span>

            <div id="contextMenuHolder"></div>
        </div>
    );
}
Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.element), pageName: PropTypes.string, pageStyle: PropTypes.object };


export default Wrapper;
