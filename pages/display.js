import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, currentCustom, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";

const Display = () => {
    const [pageText,  setPageText] = useState("");
    const [pagePath, setPagePath] = useState("");

    useEffect(() => {
        const {path: customPath, result: customResult} = currentCustom(masterFileSystem);
        if(!customResult) setPageText(`Cannot find file at ${customPath}!`);
        else if(customResult.constructor === Directory) setPageText("Cannot open a directory!");
        else {
            setPageText(customResult.text);
            setPagePath(customPath);
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