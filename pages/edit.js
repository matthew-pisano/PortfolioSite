import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem} from "../scripts/fileSystem/fileSystem";
import {Wrapper} from "../scripts/wrapper";
import {gutter, GutterMarker, lineNumbers, EditorViewConfig} from "@codemirror/view";
import {EditorState, Compartment} from "@codemirror/state";
import {basicSetup, EditorView} from "codemirror";
import {html} from "@codemirror/lang-html";
import {Perms} from "../scripts/utils";

const Edit = () => {
    const [pagePath, setPagePath] = useState("");
    const [codeEditor, setCodeEditor] = useState(null);

    let pageInfo = {
        pageName: "edit",
    };

    useEffect(() => {
        let errorMsg = null;
        let filePath = new URLSearchParams(window.location.search).get("file");
        let currentFile = masterFileSystem.getItem(filePath ? filePath : "/");
        if(!currentFile) errorMsg = `Cannot find file at ${filePath}!`;
        else if(currentFile.constructor === Directory) errorMsg = "Cannot open a directory!";
        else if(!currentFile.permission.includes(Perms.WRITE)) errorMsg = `Insufficient permissions to write ${filePath}!`;
        else setPagePath(filePath);

        if(errorMsg){
            let errElem = document.createElement("p");
            errElem.innerText = errorMsg;
            document.getElementById(pageInfo.pageName+"Page").appendChild(errElem);
            document.getElementById("editorSave").remove();
            return;
        }

        let state = EditorState.create({
            extensions: [
                basicSetup,
                EditorView.theme({}, {dark: true}),
                lineNumbers(),
                new Compartment().of(html())
            ]
        });
        let editor = new EditorView({
            state,
            parent: document.getElementById(pageInfo.pageName+"Page"),
        });

        document.getElementsByClassName("cm-editor")[0].style.maxWidth = `${Math.round(window.innerWidth*0.9)}px`;
        document.getElementsByClassName("cm-editor")[0].style.maxHeight = `${Math.round(window.innerHeight*0.7)}px`;
        const update = editor.state.update({changes: {from: 0, to: state.doc.length, insert: currentFile.text}});
        editor.update([update]);
        setCodeEditor((editor));
    }, []);

    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <button id="editorSave" className="w3-button" onClick={async () => {
                    let editorText = codeEditor.state.doc.toString();
                    masterFileSystem.writeText(pagePath, editorText.replace("\t", ""));

                    // Visual saving feedback
                    document.documentElement.style.backgroundColor = "#626262";
                    document.getElementById("editorSave").innerText = "Saved!";
                    await new Promise(r => setTimeout(r, 200));
                    document.getElementById("editorSave").innerText = "Save";
                    document.documentElement.style.backgroundColor = "";
                }}>Save</button>
            </div>
        </Wrapper>);
};

export default Edit;