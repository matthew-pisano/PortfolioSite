import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";

const Edit = () => {
    const [pageText,  setPageText] = useState("");
    const [pagePath, setPagePath] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let editPath = urlParams.get("file") ? urlParams.get("file") : "";
        let editItem = masterFileSystem.getItem(editPath);
        if(!editItem) setPageText(`Cannot find file at ${editPath}!`);
        else if(editItem.constructor === Directory) setPageText("Cannot open a directory!");
        else {
            setPageText(editItem.text);
            setPagePath(editPath);
        }
    }, []);

    let pageInfo = {
        pageName: "edit",
    };
    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div id="editorContent" contentEditable="true">
                    {pageText}
                </div>
                <button id="editorSave" className="w3-button" onClick={() => {
                    masterFileSystem.writeText(pagePath, document.getElementById("editorBox").innerText);
                }}>Save</button>
            </div>
        </Wrapper>);
};

export default Edit;