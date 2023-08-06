import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import * as common from './common';
import { masterFileSystem, Directory, pageRegistry, dehydrateInfo, setPageRegistry, setMasterFileSystem } from './fileSystem';
import TerminalDiv from './terminal/terminal';
import {SysEnv} from "./utils";


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
        let name = tree.name.substring(0, tree.name.indexOf("."));
        let urlPath = path.replace("public", "")+"/"+name;
        urlPath = urlPath.replace("//", "/");

        return <div key={name+"-File"} id={name+"-File"} className="sidebarItem w3-row" style={{marginLeft: common.folderIndent}}>
            <img className='htmlIcon' alt='html'/>
            <a className="w3-button lightText" style={{padding: 0}} href={urlPath}>{tree.name}</a>
        </div>;
    }

}


// eslint-disable-next-line react/prop-types
const Wrapper = ({children, pageName}) => {
    const [explorerTree,   setExplorerTree] = useState(elementsFromTree(masterFileSystem.getItem(SysEnv.PUBLIC_FOLDER)));

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
    }, []);

    function pageSize(){
        for(let key of Object.keys(pageRegistry))
            if(pageRegistry[key].name === pageName+".html")
                return pageRegistry[key].size;
        
        return 0;
    }

    return (
        <div className="w3-display-container">
            <Head>
                <title id="siteTitle">{pageName.substring(pageName.lastIndexOf("/")+1)+".html"}</title>
            </Head>
            <header className="menuBar w3-row" style={{top: '0px'}}>
                <button id="fileButton" className="menuItem lightText w3-button w3-col" 
                    onClick={() => common.$("#fileDropdown").fadeToggle()}>File</button>
                <button id="editButton" className="menuItem lightText w3-button w3-col"
                    onClick={() => common.$("#editDropdown").fadeToggle()}>Edit</button>
                <button id="helpButton" className="menuItem lightText w3-button w3-col"
                    onClick={() => common.$("#helpDropdown").fadeToggle()}>Help</button>
                <button id="contactButton" className="menuItem lightText w3-button w3-col"
                    onClick={() => common.$("#contactDropdown").fadeToggle()}>Contact Info</button>
            </header>

            <span id="dehydrateInfo" style={{display: "none"}}>{dehydrateInfo}</span>

            <div id="wrapperContent" className="w3-display-container w3-row">
                <div id="menuDropHolder">
                    <div id="fileDropdown" className="menuDropdown w3-col">
                        <button id="newAction" className="w3-button lightText menuDropItem"
                            onClick={() => {common.$("#fileDropdown").fadeOut();}}>New</button>
                        <br></br>
                        <button id="removeAction" className="w3-button lightText menuDropItem"
                            onClick={() => {common.$("#fileDropdown").fadeOut();}}>Remove</button>
                    </div>
                    <div id="editDropdown" className="menuDropdown w3-col">
                        <button id="renameAction" className="w3-button lightText menuDropItem"
                            onClick={() => {common.$("#editDropdown").fadeOut();}}>Rename</button>
                    </div>
                    <div id="helpDropdown" className="menuDropdown w3-col">
                    
                        <button id="helpAction" className="w3-button lightText menuDropItem"
                            onClick={() => common.showPage("help")}>help.html</button>
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
                    <div id="collapseHolder" className="w3-cell-row">
                        <button id="collapseSidebar" className="w3-button w3-cell" onClick={common.toggleSidebar}>&#60;</button>
                        <h4 id="explorerTitle" className="sidebarItem lightText w3-cell">Explorer</h4>
                    </div>
                    <div id="sidebarContent" className="w3-display-container w3-row">{explorerTree}</div>
                </div>
            </div>
            <div id="pageHolder">{children}</div>
            <div id="fileEditor" className="container w3-rest lightText w3-row" style={{display: 'none'}}>
                <div id="editorLines" className="w3-col">1</div>
                <div id="editorContent" className="w3-col"contentEditable="true"></div>
            </div>
            <TerminalDiv/>
            <footer className="commandBar w3-row" style={{bottom: '0px'}}>
                <div id="langStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>HTML</div>
                <div id="encodingStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>UTF-8</div>
                <div id="linesStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{Math.round(pageSize()/140.6)+" Lines"}</div>
                <div id="sizeStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageSize()+"B"}</div>
                <div id="itemStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>{pageName+".html"}</div>
            </footer>
        </div>
    );
};


export {Wrapper};