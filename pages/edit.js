import React, { useEffect, useState } from 'react';
import {masterFileSystem} from "../scripts/fileSystem/buildfs";
import {Wrapper} from "../scripts/wrapper";
import {gutter, GutterMarker, lineNumbers, EditorViewConfig} from "@codemirror/view";
import {EditorState, Compartment} from "@codemirror/state";
import {basicSetup, EditorView} from "codemirror";
import {html} from "@codemirror/lang-html";
import {Perms} from "../scripts/utils";
import {Directory} from "../scripts/fileSystem/fileSystemObjects";

const Edit = () => {

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

        if(errorMsg){
            let errElem = document.createElement("p");
            errElem.innerText = errorMsg;
            document.getElementById(pageInfo.pageName+"Page").appendChild(errElem);
            return;
        }

        let updateListenerExtension = EditorView.updateListener.of(v => {
            if(v.changedRanges.length) {
                if (EditorView.hasLoaded)
                    window.onbeforeunload = function () {
                        return confirm("Confirm refresh");
                    };
                else EditorView.hasLoaded = true;
            }
        });


        let state = EditorState.create({
            extensions: [
                basicSetup,
                updateListenerExtension,
                EditorView.theme({
                    ".ͼe": {color: "#3ddb42"},
                    ".ͼd": {color: "#00bacf"},
                    ".ͼb": {color: "#0098cf"},
                    ".ͼc": {color: "#1bc24f"},
                    ".ͼm": {color: "#989898"},
                    ".ͼj": {color: "#009afa"},
                }, {dark: true}),
                lineNumbers(),
                new Compartment().of(html())
            ]
        });
        let editor = new EditorView({
            state, parent: document.getElementById(pageInfo.pageName+"Page"),
        });

        document.getElementsByClassName("cm-editor")[0].minHeight = `${Math.round(window.innerHeight*0.7)}px`;

        editor.update([editor.state.update({changes: {from: 0, to: state.doc.length, insert: currentFile.text}})]);
        document.codeEditor = editor;
    }, []);

    return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText"/>
        </Wrapper>);
};

export default Edit;