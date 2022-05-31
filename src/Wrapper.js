import React, {useState} from 'react';
import Home from './Home';
import Imperium from './Imperium';
import Simplex from './Simplex';
import MipsCmd from './MipsCmd';
import Inception from './Inception';
import Videntium from './Videntium';
import AnonHires from './AnonHires';
import * as common from './common';
import Neural from './Neural';
import TerminalDiv from './TerminalDiv';

const Wrapper = () => {
    function recurse(tree){
        if(tree.name.endsWith("/"))
            return <div className="sidebarItem sidebarFolder w3-row"><img className='folderIcon' alt='folder'/>
                <button id={tree.name.substring(0, tree.name.length-1)+"Folder"} className="w3-button lightText" onClick={
                    () => {
                        document.getElementById("langStatus").innerText = "";
                        document.getElementById("encodingStatus").innerText = "";
                        document.getElementById("linesStatus").innerText = "";
                        document.getElementById("sizeStatus").innerText = tree.subTree.length+" Children";
                        document.getElementById("itemStatus").innerText = tree.name;
                    }
                }>{tree.name}</button>
                <div id={tree.name.substring(0, tree.name.length-1)+"Content"} className="w3-row sidebarContent">
                    {
                        tree.subTree.map(child => recurse(child))
                    }
                </div>
            </div>;
        else
            return <div className="sidebarItem w3-row" style={{marginLeft: '10px'}}>
                <img className='htmlIcon' alt='html'/>
                <button id={tree.name.substring(0, tree.name.indexOf("."))+"File"} className="w3-button lightText" onClick={
                    () => common.showPage(tree.name.substring(0, tree.name.indexOf(".")))
                }>{tree.name}</button>
            </div>;
    }

    return (
        <div className="w3-display-container">
            <header className="menuBar w3-row" style={{top: '0px'}}>
                <button id="fileButton" className="menuItem lightText w3-button w3-col">File</button>
                <button id="editButton" className="menuItem lightText w3-button w3-col">Edit</button>
                <button id="helpButton" className="menuItem lightText w3-button w3-col">Help</button>
            </header>
            <div id="wrapperContent" className="w3-display-container w3-row">
                <div id="menuDropHolder">
                    <div id="fileDropdown" className="menuDropdown w3-col">
                        <button id="newAction" className="w3-button lightText menuDropItem">New</button>
                    </div>
                    <div id="editDropdown" className="menuDropdown w3-col">
                        <button id="renameAction" className="w3-button lightText menuDropItem">Rename</button>
                    </div>
                </div>
                <div id="sidebar" className="w3-col">
                    <button id="collapseSidebar" className="w3-button">&#60;</button>
                    <div id="sidebarContent" className="w3-display-container w3-row">
                        <p className="sidebarItem lightText" style={{borderStyle: 'none'}}>Explorer</p>
                        {recurse(common.navHierarchy("/home/user/public/"))}
                    </div>
                </div>
                <Home/>
                <Simplex/>
                <Imperium/>
                <MipsCmd/>
                <Inception/>
                <Videntium/>
                <AnonHires/>
                <Neural/>
                <TerminalDiv/>
                <div id="fileEditor" className="container w3-rest lightText w3-row" style={{display: 'none'}}>
                    <div id="editorLines" className="w3-col">1</div>
                    <div id="editorContent" className="w3-col"contentEditable="true"></div>
                </div>
            </div>
            <footer className="commandBar w3-row" style={{bottom: '0px'}}>
                <div id="langStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>HTML</div>
                <div id="encodingStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>UTF-8</div>
                <div id="linesStatus" className="commandItem lightText w3-col" style={{float: 'right'}}></div>
                <div id="sizeStatus" className="commandItem lightText w3-col" style={{float: 'right'}}></div>
                <div id="itemStatus" className="commandItem lightText w3-col" style={{float: 'right'}}>home.html</div>
            </footer>
        </div>
    );
};


export default Wrapper;