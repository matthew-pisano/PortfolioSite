import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";

const Custom = () => {
    const [pageText,  setPageText] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let customPath = urlParams.get("file") ? urlParams.get("file") : "";
        let customItem = masterFileSystem.getItem(customPath);
        if(!customItem) setPageText(`Cannot find file at ${customPath}!`);
        else if(customItem.constructor === Directory) setPageText("Cannot open a directory!");
        else setPageText(customItem.text);
    }, []);

    let pageInfo = {
        pageName: "custom",
    };
    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                {parse(pageText)}
            </div>
        </Wrapper>);
};

export default Custom;