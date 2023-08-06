import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";

const Display = () => {
    const [pageText,  setPageText] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let displayPath = urlParams.get("file") ? urlParams.get("file") : "";
        let displayItem = masterFileSystem.getItem(displayPath);
        if(!displayItem) setPageText(`Cannot find file at ${displayPath}!`);
        else if(displayItem.constructor === Directory) setPageText("Cannot open a directory!");
        else setPageText(displayItem.text);
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