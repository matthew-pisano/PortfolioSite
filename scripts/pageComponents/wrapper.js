import React, {useEffect, useState} from 'react';
import '../globalListeners';
import Head from 'next/head';
import {dehydratedInfo, masterFileSystem, setMasterFileSystem, setPageRegistry} from '../fileSystem/buildfs';
import TerminalDiv from '../terminal/terminal';
import PropTypes from "prop-types";
import {Sidebar} from "./sidebar";
import {HeaderMenu, MenuDrop, savePage, StatusFooter} from "./margins";


/**
 * The wrapper for all pages on the site.  This component is the parent of all other components, containing the main page content along with the margin menus and the terminal.
 * @param children {JSX.Element} The page content tiles and other elements
 * @param pageName {string} The name of the page
 * @return {JSX.Element} The wrapper for the page
 */
function Wrapper({children, pageName}) {
    const [currentPath, setCurrentPath] = useState(null);

    // Initialize the sidebar state and load the saved hierarchy
    useEffect(() => {

        // Remove the dehydrated info from the page
        if(document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();

        setCurrentPath(window.location.pathname);

        // Load the saved hierarchy from local storage
        let savedHierarchy = localStorage.getItem("hierarchy");
        if(savedHierarchy) {
            console.log("Loading saved hierarchy!");
            let hydratedInfo = JSON.parse(savedHierarchy);
            
            setPageRegistry(hydratedInfo.pageRegistry);
            setMasterFileSystem(hydratedInfo.hierarchy);
            masterFileSystem.update();
        }

        // Add the terminal button to the menu bar
        document.getElementById("terminalButton").classList.remove("gone");

        // Capture CTRL + S
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.key === 's' && !e.shiftKey && !e.altKey) {
                // Prevent the Save dialog to open
                e.preventDefault();
                savePage(window.location.pathname);
            }
        });

        // Capture CTRL + ALT + T
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.altKey && e.key === 't' && !e.shiftKey) {
                // Prevent the Save dialog to open
                e.preventDefault();
                document.getElementById("terminalHeader").click();
            }
        });

        // If a command is passed in the URL, execute it in the terminal
        let execCmd = new URLSearchParams(window.location.search).get("exe");
        if(execCmd) {
            let terminal = document.getElementById('terminal');
            // Open the terminal to a specific size if specified in the URL
            let termSize = parseInt(new URLSearchParams(window.location.search).get("ts"));
            if(termSize && !isNaN(termSize)) terminal.dispatchEvent(new CustomEvent("openTo", {detail: termSize}));
            else terminal.dispatchEvent(new CustomEvent("openTo", {detail: 550}));
            // Set the font size if specified in the URL
            let fontSize = parseInt(new URLSearchParams(window.location.search).get("fs"));
            if(fontSize && !isNaN(fontSize)) terminal.style.fontSize = `${fontSize}px`;
            // Execute the command
            document.getElementById('terminalInput').innerText = execCmd;
            document.getElementById('terminalInput').dispatchEvent(new Event("submit"));
        }

    }, []);

    return (
        <div id="wrapper" className="w3-display-container">
            <Head><title id="siteTitle">{pageName.substring(pageName.lastIndexOf("/") + 1) + ".html"}</title></Head>

            <HeaderMenu/>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <MenuDrop currentPath={currentPath}/>
                <Sidebar/>
                {children}
            </div>

            <div id="dialogBox">
                <img src="/assets/personal.png" style={{width: '20px'}}/>
                <span id="dialogBoxTitle">Message Title</span>
                <p id="dialogBoxBody">Message Body</p>
            </div>

            <TerminalDiv/>

            <StatusFooter currentPath={currentPath} pageName={pageName}/>
            <span id="dehydrateInfo" style={{display: "none"}}>{dehydratedInfo}</span>
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.element,
    pageName: PropTypes.string
};


export default Wrapper;