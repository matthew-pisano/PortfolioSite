import React, { useEffect } from "react";

import Wrapper, { PageInfo } from "@/components/wrappers/Wrapper";
import { masterFileSystem } from "@/lib/fileSystem/fileSystem";
import { Perms } from "@/lib/fileSystem/fileSystemMeta";
import { Directory } from "@/lib/fileSystem/fileSystemObjects";
import styles from "@/styles/wrappers/DisplayWrapper.module.css";

export default function Display() {
    let pageInfo = new PageInfo("display", "Display", "Displaying the contents of a file");

    useEffect(() => {
        let filePath = new URLSearchParams(window.location.search).get("file");
        let displayFrame = document.getElementById("displayFrame");
        if (!filePath) {
            displayFrame.srcdoc = "No file specified!";
            return;
        }

        let currentFile = masterFileSystem.getItem(filePath);
        // Show error message if file is not found, is a directory, or does not have read permissions
        if (!currentFile) displayFrame.srcdoc = `Cannot find file at ${filePath}!`;
        else if (currentFile instanceof Directory) displayFrame.srcdoc = "Cannot open a directory!";
        else if (!(currentFile.permission & Perms.READ))
            displayFrame.srcdoc = `Insufficient permissions to access source of ${filePath}!`;
        else {
            // Load the file text into the page
            let pageText = currentFile.text();
            displayFrame.srcdoc = pageText ? pageText : "<h3><i>[Empty file]</i></h3>";
        }
    }, []);

    return (
        <Wrapper pageName={pageInfo.pageName} pageClass={styles.displayPage}>
            <iframe id="displayFrame" className={styles.displayFrame} frameBorder="0"></iframe>
        </Wrapper>
    );
}
