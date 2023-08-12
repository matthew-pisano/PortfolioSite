import React, { useEffect, useState } from 'react';
import {Directory, masterFileSystem, pathJoin} from "../scripts/fileSystem";
import {Constants, currentCustom, SysEnv} from "../scripts/utils";
import {Wrapper} from "../scripts/wrapper";
import {gutter, GutterMarker, lineNumbers, EditorViewConfig} from "@codemirror/view";
import {EditorState, Compartment} from "@codemirror/state";
import {basicSetup, EditorView} from "codemirror";
import {html} from "@codemirror/lang-html";

const Edit = () => {
    const [pagePath, setPagePath] = useState("");
    const [codeEditor, setCodeEditor] = useState(null);

    let pageInfo = {
        pageName: "edit",
    };

    useEffect(() => {
        let errorMsg = null;
        const {path: customPath, result: customResult} = currentCustom(masterFileSystem);
        if(!customResult) errorMsg = `Cannot find file at ${customPath}!`;
        else if(customResult.constructor === Directory) errorMsg = "Cannot open a directory!";
        else setPagePath(customPath);

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
        const update = editor.state.update({changes: {from: 0, to: state.doc.length, insert: customResult.text}});
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