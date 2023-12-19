import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem} from "../scripts/fileSystem/fileSystem";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";
import {Perms} from "../scripts/utils";

const Display = () => {
    const [pageText,  setPageText] = useState("");

    useEffect(() => {
        let filePath = new URLSearchParams(window.location.search).get("file");
        let currentFile = masterFileSystem.getItem(filePath ? filePath : "/");

        if(!currentFile) setPageText(`Cannot find file at ${filePath}!`);
        else if(currentFile.constructor === Directory) setPageText("Cannot open a directory!");
        else if(!currentFile.permission.includes(Perms.WRITE)) setPageText(`Insufficient permissions to access source of ${filePath}!`);
        else setPageText(currentFile.text);
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