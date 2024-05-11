import React, { useEffect, useState } from 'react';
import {masterFileSystem} from "../scripts/fileSystem/buildfs";
import Wrapper from "../scripts/wrapper";
import parse from "html-react-parser";
import {Perms} from "../scripts/utils";
import {Directory} from "../scripts/fileSystem/fileSystemObjects";

const Display = () => {
    const [pageText,  setPageText] = useState("");

    useEffect(() => {
        let filePath = new URLSearchParams(window.location.search).get("file");
        let currentFile = masterFileSystem.getItem(filePath ? filePath : "/");

        if(!currentFile) setPageText(`Cannot find file at ${filePath}!`);
        else if(currentFile.constructor === Directory) setPageText("Cannot open a directory!");
        else if(!currentFile.permission.includes(Perms.READ)) setPageText(`Insufficient permissions to access source of ${filePath}!`);
        else {
            let pageText = filePath.endsWith(".html") ? currentFile.text : currentFile.text.replaceAll("\n", "<br>");
            setPageText(pageText);
        }
    }, []);

    let pageInfo = {
        pageName: "display",
    };
    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                {parse(pageText)}
            </div>
        </Wrapper>);
};

export default Display;