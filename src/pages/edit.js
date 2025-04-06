import React, { useEffect } from "react";

import { html } from "@codemirror/lang-html";
import { Compartment, EditorState } from "@codemirror/state";
import { lineNumbers } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";

import Wrapper from "@/components/Wrapper";
import { masterFileSystem } from "@/lib/fileSystem/fileSystem";
import { Perms } from "@/lib/fileSystem/fileSystemMeta";
import { Directory } from "@/lib/fileSystem/fileSystemObjects";
import { PageInfo } from "@/lib/pageBuilder";

export default function Edit() {
    let pageInfo = new PageInfo("edit", "Edit", "Edit the contents of a file");

    useEffect(() => {
        let errorMsg = null;
        let filePath = new URLSearchParams(window.location.search).get("file");
        let currentFile;

        if (!filePath) errorMsg = "No file specified!";
        else {
            currentFile = masterFileSystem.getItem(filePath);
            if (!currentFile) errorMsg = `Cannot find file at ${filePath}!`;
            else if (currentFile.constructor === Directory) errorMsg = "Cannot open a directory!";
            else if (!currentFile.permission.includes(Perms.WRITE))
                errorMsg = `Insufficient permissions to write ${filePath}!`;
        }

        if (errorMsg) {
            let errElem = document.createElement("p");
            errElem.innerText = errorMsg;
            document.getElementById("page").appendChild(errElem);
            return;
        }

        // Add a listener to prompt the user before leaving the page if changes have been made
        let updateListenerExtension = EditorView.updateListener.of((v) => {
            if (v.changedRanges.length) {
                // Only prompt the user if the page has loaded and changes have been made
                if (EditorView.hasLoaded)
                    window.onbeforeunload = function () {
                        return confirm("Confirm refresh");
                    };
                else EditorView.hasLoaded = true;
            }
        });

        // Set up the editor
        let state = EditorState.create({
            extensions: [
                basicSetup,
                updateListenerExtension,
                EditorView.theme(
                    {
                        ".ͼe": { color: "#3ddb42" },
                        ".ͼd": { color: "#00bacf" },
                        ".ͼb": { color: "#0098cf" },
                        ".ͼc": { color: "#1bc24f" },
                        ".ͼm": { color: "#989898" },
                        ".ͼj": { color: "#009afa" }
                    },
                    { dark: true }
                ),
                lineNumbers(),
                new Compartment().of(html())
            ]
        });
        let editor = new EditorView({
            state,
            parent: document.getElementById("page")
        });

        document.getElementsByClassName("cm-editor")[0].minHeight = `${Math.round(window.innerHeight * 0.7)}px`;

        editor.update([
            editor.state.update({ changes: { from: 0, to: state.doc.length, insert: currentFile.text() } })
        ]);
        // Save the editor to the document object for later use
        document.codeEditor = editor;
    }, []);

    return <Wrapper pageName={pageInfo.pageName} />;
}
