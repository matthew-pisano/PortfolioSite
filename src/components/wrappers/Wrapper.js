import React, { useEffect, useState } from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import { slideTilesOnScroll } from "@/components/tiles/Tiles";
import DialogBox from "@/components/widgets/DialogBox";
import { HeaderMenu, savePage, StatusFooter } from "@/components/widgets/Margins";
import Sidebar from "@/components/widgets/Sidebar";
import Terminal from "@/components/widgets/Terminal";
import { buildClientside, buildServerside } from "@/lib/fileSystem/fileSystem";
import { setTheme } from "@/lib/util/themes";
import styles from "@/styles/Wrapper.module.css";

/**
 * Execute a command in the terminal.  This function is called when a command is passed in the URL.
 */
function executeCommand() {
    let terminal = document.getElementById("terminal");
    let urlParams = new URLSearchParams(window.location.search);
    // Open the terminal to a specific size if specified in the URL
    let termSize = parseInt(urlParams.get("ts"));
    if (termSize && !isNaN(termSize)) terminal.dispatchEvent(new CustomEvent("openTo", { detail: termSize }));
    else terminal.dispatchEvent(new CustomEvent("openTo", { detail: 550 }));
    // Set the font size if specified in the URL
    let fontSize = parseInt(urlParams.get("fs"));
    if (fontSize && !isNaN(fontSize)) terminal.style.fontSize = `${fontSize}px`;
    // Execute the command
    document.getElementById("terminalInput").innerText = urlParams.get("exe");
    document.getElementById("terminalInput").dispatchEvent(new Event("submit"));
}

/**
 * Add event listeners to the wrapper element.  This function is called when the wrapper is mounted.
 */
function addWrapperListeners() {
    // Capture CTRL + S to save the page
    document.addEventListener("keydown", (evt) => {
        if (evt.ctrlKey && evt.key === "s" && !evt.shiftKey && !evt.altKey) {
            // Prevent the Save dialog to open
            evt.preventDefault();
            savePage(window.location.pathname);
        }
    });
}

/**
 * Metadata for a page
 */
class PageInfo {
    pageName;

    /**
     * Metadata for a page
     * @param pageName {string} The name of the page
     * @param title {string} The title of the page
     * @param summary {string} A brief summary of the page
     * @param holderStyle {object} The style of the page holder
     * @param tags {string[]} The tags for the page
     * @param links {JSXElement} Links to display at the top of the page
     */
    constructor(pageName, title, summary, holderStyle = {}, tags = [], links = []) {
        this.pageName = pageName;
        this.title = title;
        this.summary = summary;
        this.holderStyle = holderStyle;
        this.links = links;
        this.tags = tags;
    }
}

/**
 * Metadata for a tile
 */
class TileInfo {
    /**
     * A Metadata for a tile
     * @param title {JSXElement} The title of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param tags {string[]} The tags for the tile
     * @param links {JSXElement} Links to display
     * @param titleLink {string} The link that the title should go to
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor({ title, thumbnail = "", tags = [], links = [], titleLink = "", anchor = "" }) {
        this.title = title;
        this.tags = tags;
        this.thumbnail = thumbnail;
        this.titleLink = titleLink;
        this.links = links;
        this.anchor = anchor;
    }
}

/**
 * The wrapper for all pages on the site.  This component is the parent of all other components, containing the main page content along with the margin menus and the terminal.
 * @param children {JSX.Element} The page content tiles and other elements
 * @param pageName {string} The name of the page
 * @param pageClass {object} The class of the inner page element
 * @return {JSX.Element} The wrapper for the page
 */
function Wrapper({ children, pageName, pageClass }) {
    const [currentPath, setCurrentPath] = useState(null);

    let dehydratedInfo;
    if (typeof window === "undefined") dehydratedInfo = buildServerside();
    else if (document.getElementById("dehydrateInfo")) dehydratedInfo = buildClientside();

    // Initialize the sidebar state and load the saved hierarchy
    useEffect(() => {
        // Remove the dehydrated info from the page
        if (document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();

        setCurrentPath(window.location.pathname);
        addWrapperListeners();
        // If a command is passed in the URL, execute it in the terminal
        if (new URLSearchParams(window.location.search).get("exe")) executeCommand();
        setTheme(localStorage.getItem("theme"));
    }, []);

    return (
        <div id="wrapper" className={`w3-display-container ${styles.wrapper}`}>
            <Head>
                <title>{pageName.substring(pageName.lastIndexOf("/") + 1) + ".html"}</title>
            </Head>
            <HeaderMenu currentPath={currentPath} />

            <div id="wrapperContent" className={`${styles.wrapperContent}`} onScroll={slideTilesOnScroll}>
                <Sidebar />
                <div id="pageHolder" className={`${styles.pageHolder}`}>
                    <div id="page" className={`${styles.page} ${pageClass}`}>
                        {children}
                    </div>
                </div>
            </div>

            <DialogBox />
            <Terminal />
            <StatusFooter currentPath={currentPath} pageName={pageName} />
            <span id="dehydrateInfo" style={{ display: "none" }}>
                {dehydratedInfo}
            </span>

            <div id="contextMenuHolder"></div>
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    pageName: PropTypes.string,
    pageClass: PropTypes.object
};

export default Wrapper;
export { TileInfo, PageInfo };
