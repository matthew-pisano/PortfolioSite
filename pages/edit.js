import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, currentCustom, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import parse from "html-react-parser";

const Edit = () => {
    const [pageText,  setPageText] = useState("");
    const [pagePath, setPagePath] = useState("");

    function addListeners() {
        let editorContent = document.getElementById("editorContent");
        editorContent.addEventListener('input', (event) => {
            if(editorContent.innerText.length > 0){
                let lineNum = editorContent.innerText.split(/\r\n|\r|\n/).length;
                document.getElementById("linesStatus").innerText = (lineNum > 1 ? lineNum-1 : 1)+" Lines";
                document.getElementById("sizeStatus").innerText = editorContent.innerText.length+"B";
            }
            // refreshLineNums();
        });
    }

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
        pageName: "edit",
    };
    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div id="editorContent" contentEditable="true" onInput={() => {
                    console.log("Hello");
                }}>
                    {pageText}
                </div>
                <button id="editorSave" className="w3-button" onClick={() => {
                    let editorText = document.getElementById("editorContent").innerText;
                    masterFileSystem.writeText(pagePath, editorText.replace("\t", ""));
                }}>Save</button>
            </div>
        </Wrapper>);
};

export default Edit;