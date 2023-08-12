import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import * as common from './common';
import {masterFileSystem, Directory, pageRegistry, dehydrateInfo, setPageRegistry, setMasterFileSystem, pathJoin} from './fileSystem';
import TerminalDiv from './terminal/terminal';
import {currentCustom, Permissions as Perms, SysEnv} from "./utils";
import $ from "jquery";
import {createContextMenu, newCustomFile} from "./fileSystemGUI";


function elementsFromTree(tree, path=""){
    if(tree.constructor === Directory){
        let name = tree.name+"-Folder";
        return <div key={name} id={name} className="sidebarItem sidebarFolder w3-row">
            <img className='folderIcon' alt='folder'/>
            <button className="w3-button lightText" onClick={
                () => {
                    document.getElementById("langStatus").innerText = "";
                    document.getElementById("encodingStatus").innerText = "";
                    document.getElementById("linesStatus").innerText = "";
                    document.getElementById("sizeStatus").innerText = "Children: "+tree.subTree.length;
                    document.getElementById("itemStatus").innerText = tree.name;
                }
            }>{tree.name}</button>

            <div id={tree.name+"Content"} className="w3-row sidebarContent">
                {tree.subTree.map(child => elementsFromTree(child, path+"/"+tree.name))}
            </div>
        </div>;
    }
    else {
        let urlPath;
        let editIcon = null;
        let name = tree.name.split(".")[0];
        if(pageRegistry[pathJoin(SysEnv.HOME_FOLDER, path.substring(1), tree.name)])
            urlPath = pathJoin(path.replace("public", ""), name);
        else {
            urlPath = `/display?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), tree.name)}`;
            editIcon = <img className='editButton' alt='html' onClick={() => {
                window.location.replace(`/edit?file=${pathJoin(SysEnv.HOME_FOLDER, path.substring(1), tree.name)}`);
            }}/>;
        }

        return <div key={name+"-File"} id={name+"-File"} className="sidebarItem w3-row">
            <img className='htmlIcon' alt='html'/>
            <a id={name+"-FileLink"} className="w3-button lightText" style={{padding: 0}} href={urlPath} onContextMenu={(e) => {
                createContextMenu(e, {
                    rename: () => {
                        if(tree.permission.includes(Perms.WRITE)){
                            let renamer = document.createElement("textarea");
                            renamer.id = name+"-FileRenamer";
                            renamer.className = "fileRenamer";
                            renamer.value = tree.name;
                            let fileLink = document.getElementById(name+"-FileLink");
                            fileLink.replaceWith(renamer);
                            let rename = () => {
                                renamer.remove();
                                let parentFolder = pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""));
                                if(!masterFileSystem.exists(pathJoin(parentFolder, tree.name))) return;
                                masterFileSystem.cp(pathJoin(parentFolder, tree.name), pathJoin(parentFolder, renamer.value.replace("\n", "")));
                                masterFileSystem.rm(pathJoin(parentFolder, tree.name));
                            };
                            let clickEvent =  (evt) => {if(evt.target.id !== renamer.id) rename();};
                            renamer.oninput = (e) => {
                                if (["insertParagraph", "insertLineBreak"].includes(e.inputType)) {
                                    rename();
                                    document.documentElement.addEventListener('click', clickEvent, true);
                                }
                            };
                            document.documentElement.addEventListener('click', clickEvent, true);
                        }
                        else alert("You do not have permission to rename this file!");
                    },
                    remove: () => {
                        if(tree.permission.includes(Perms.WRITE))
                            masterFileSystem.rm(pathJoin(SysEnv.HOME_FOLDER, path.replace("/", ""), tree.name));
                        else alert("You do not have permission to remove this file!");
                    }
                });
                e.preventDefault();
            }}>{tree.name}</a>
            {editIcon}
        </div>;
    }

}


// eslint-disable-next-line react/prop-types
const Wrapper = ({children, pageName}) => {
    const [explorerTree,   setExplorerTree] = useState(elementsFromTree(masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER)));
    const [customFile, setCustomFile] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    masterFileSystem.registerCallback((updateTime) => {
        setExplorerTree(elementsFromTree(masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER)));
    });

    useEffect(() => {
        if(document.getElementById("dehydrateInfo")) document.getElementById("dehydrateInfo").remove();
        
        let savedHierarchy = localStorage.getItem("hierarchy");
        if(savedHierarchy) {
            console.log("Loading saved hierarchy!");
            let hydratedInfo = JSON.parse(savedHierarchy);
            
            setPageRegistry(hydratedInfo.pageRegistry);
            setMasterFileSystem(hydratedInfo.hierarchy);
            masterFileSystem.update();
        }

        setCustomFile(currentCustom(masterFileSystem).result);
    }, []);


    function toggleSidebar(animate=true){
        let sidebarMax = 215;
        let sidebarMin = 50;
        document.getElementById("collapseSidebar").innerText = sidebarOpen ? ">" : "<";
        if(sidebarOpen){
            $(".sidebarItem").invisible();
            document.getElementById("sidebarContent").style.display = "none";
            document.getElementById("sidebar").classList.remove("openSidebar");
            document.getElementById("explorerTitle").style.display = "none";
            document.getElementById("collapseHolder").classList.remove("openSidebar");
            document.getElementById("pageHolder").classList.remove("smallInvisible");
            $("#sidebarContent").animate({"width": "0px"}, animate ? 200 : 0);
        }
        else{
            document.getElementById("sidebarContent").style.display = "block";
            $("#sidebarContent").animate({"width": "100%"}, animate ? 200 : 0);
            document.getElementById("sidebar").classList.add("openSidebar");
            document.getElementById("collapseHolder").classList.add("openSidebar");
            document.getElementById("pageHolder").classList.add("smallInvisible");
            document.getElementById("explorerTitle").style.display = "inline";
            $(".sidebarItem").visible();
        }

        for(let tag of [".page", "#terminalHolder", ".titleCard", "#fileEditor"])
            $(tag).animate({"margin-left": (sidebarOpen ? sidebarMin : sidebarMax)+"px"}, animate ? 200 : 0);
        setSidebarOpen(!sidebarOpen);
    }

    function pageStats(){
        for(let key of Object.keys(pageRegistry))
            if(pageRegistry[key].name === pageName+".html")
                return {lines: Math.round(pageRegistry[key].size/140.6), size: pageRegistry[key].size};

        if(customFile)
            return {lines: customFile.text.split(/\r\n|\r|\n/).length, size: customFile.text.length};
        return {lines: 0, size: 0};
    }

    return (
        <div className="w3-display-container">
            <Head>
                <title id="siteTitle">{pageName.substring(pageName.lastIndexOf("/")+1)+".html"}</title>
            </Head>
            <header className="menuBar w3-row" style={{top: '0px'}}>
                <button id="fileButton" className="menuItem lightText w3-button w3-col" 
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); common.$("#fileDropdown").fadeToggle();}}>File</button>
                <button id="editButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); common.$("#editDropdown").fadeToggle();}}>Edit</button>
                <button id="terminalButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); common.$("#terminalDropdown").fadeToggle();}}>Terminal</button>
                <button id="helpButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); common.$("#helpDropdown").fadeToggle();}}>Help</button>
                <button id="contactButton" className="menuItem lightText w3-button w3-col"
                    onClick={async () => {await new Promise(r => setTimeout(r, 20)); common.$("#contactDropdown").fadeToggle();}}>Contact Info</button>
            </header>

            <span id="dehydrateInfo" style={{display: "none"}}>{dehydrateInfo}</span>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <div id="menuDropHolder">
                    <div id="fileDropdown" className="menuDropdown w3-col">
                        <button id="newAction" className="w3-button lightText menuDropItem"
                            onClick={() => {newCustomFile(); }}>New</button>
                        <button id="saveAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                if(document.getElementById("editorSave")) document.getElementById("editorSave").click();
                                else alert("This file is not in editing mode!");
                            }}>Save</button>
                        <button id="resetAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                delete localStorage.hierarchy;
                                window.location.reload();
                            }}>Reset</button>
                    </div>
                    <div id="editDropdown" className="menuDropdown w3-col">
                        <button id="editCurrentAction" className="w3-button lightText menuDropItem"
                            onClick={() => {
                                let current = currentCustom(masterFileSystem);
                                if(!current.result) alert("The current page is not editable");
                                else window.location.replace(`edit?file=${current.path}`);

                            }}>Edit Current Page</button>
                    </div>
                    <div id="terminalDropdown" className="menuDropdown w3-col">
                        <button id="showTerminal" className="w3-button lightText menuDropItem"
                            onClick={() => {document.getElementById("terminal").click();}}>Open Terminal</button>
                    </div>
                    <div id="helpDropdown" className="menuDropdown w3-col">
                    
                        <button id="helpAction" className="w3-button lightText menuDropItem"
                            onClick={() => window.location.replace("/help")}>help.html</button>
                        <a className="lightText menuDropItem" style={{display: "block"}} href='https://github.com/matthew-pisano/PortfolioSite#readme' 
                            target={"_blank"} rel="noreferrer">README</a>
                    </div>
                    <div id="contactDropdown" className="menuDropdown w3-col">
                        <p className="lightText menuDropItem">Phone: +1 (845)-706-0677</p>
                        <p className="lightText menuDropItem">Email: matthewplisano14@gmail.com</p>
                        <a className="lightText menuDropItem" style={{display: "block"}} href='https://www.linkedin.com/in/matthew-pisano' 
                            target={"_blank"} rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div id="sidebar" className="w3-col openSidebar">
                    <div id="collapseHolder" className="w3-cell-row openSidebar">
                        <button id="collapseSidebar" className="w3-button w3-cell" onClick={toggleSidebar}>&#60;</button>
                        <h4 id="explorerTitle" className="sidebarItem lightText w3-cell">Explorer</h4>
                    </div>
                    <div id="sidebarContent" className="w3-display-container w3-row">{explorerTree}</div>
                </div>
            </div>
            <div id="pageHolder">{children}</div>
            <TerminalDiv/>
            <footer className="commandBar w3-row" style={{bottom: '0px'}}>
                <div id="langStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>HTML</div>
                <div id="encodingStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>UTF-8</div>
                <div id="linesStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageStats().lines+" Lines"}</div>
                <div id="sizeStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageStats().size+"B"}</div>
                <div id="itemStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageName+".html"}</div>
            </footer>
        </div>
    );
};


export {Wrapper};