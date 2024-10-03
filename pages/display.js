import React, { useEffect, useState } from 'react';
import {masterFileSystem} from "../scripts/fileSystem/buildfs";
import Wrapper from "../scripts/pageComponents/wrapper";
import parse from "html-react-parser";
import {Directory} from "../scripts/fileSystem/fileSystemObjects";
import {PageInfo} from "../scripts/pageBuilder";
import {Perms} from "../scripts/fileSystem/fileSystemMeta";


function Display() {

    const [pageText,  setPageText] = useState("");
    let pageInfo = new PageInfo("display", "Display", "Displaying the contents of a file");

    useEffect(() => {
        let filePath = new URLSearchParams(window.location.search).get("file");
        if (!filePath) {
            setPageText("No file specified!");
            return;
        }

        let currentFile = masterFileSystem.getItem(filePath);
        // Show error message if file is not found, is a directory, or does not have read permissions
        if(!currentFile) setPageText(`Cannot find file at ${filePath}!`);
        else if(currentFile.constructor === Directory) setPageText("Cannot open a directory!");
        else if(!currentFile.permission.includes(Perms.READ)) setPageText(`Insufficient permissions to access source of ${filePath}!`);
        else {
            // Load the file text into the page
            let pageText = filePath.endsWith(".html") ? currentFile.text : currentFile.text.replaceAll("\n", "<br>");
            setPageText(pageText ? pageText : "<h3><i>[Empty file]</i></h3>");
        }
    }, []);

    return (<Wrapper pageName={pageInfo.pageName}>
        {parse(pageText)}
    </Wrapper>);
}


export default Display;