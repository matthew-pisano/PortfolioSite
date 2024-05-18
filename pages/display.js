import React, { useEffect, useState } from 'react';
import {masterFileSystem} from "../scripts/fileSystem/buildfs";
import Wrapper from "../scripts/wrapper";
import parse from "html-react-parser";
import {Perms} from "../scripts/utils";
import {Directory} from "../scripts/fileSystem/fileSystemObjects";
import {PageInfo} from "../scripts/pageBuilder";


function Display() {

    const [pageText,  setPageText] = useState("");
    let pageInfo = new PageInfo("display", "Display", "Displaying the contents of a file");

    useEffect(() => {
        let filePath = new URLSearchParams(window.location.search).get("file");
        let currentFile = masterFileSystem.getItem(filePath ? filePath : "/");

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
        <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
            {parse(pageText)}
        </div>
    </Wrapper>);
}


export default Display;