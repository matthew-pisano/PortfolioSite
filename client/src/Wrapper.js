import React, { Component } from 'react';
import Custom from './Custom';
import Home from './Home';
import Imperium from './Imperium';
import Simplex from './Simplex';

class Wrapper extends Component {

    render() {
        return (
            <body className="w3-display-container">
                <header className="menuBar w3-row" style={{top: '0px'}}>
                    <button id="fileButton" className="menuItem lightText w3-button w3-col">File</button>
                    <button id="editButton" className="menuItem lightText w3-button w3-col">Edit</button>
                    <button id="helpButton" className="menuItem lightText w3-button w3-col">Help</button>
                </header>
                <div className="w3-display-container w3-row">
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
                            <div className="sidebarItem sidebarFolder w3-row"><img/><button id="publicFolder" className="w3-button lightText">public/</button>
                                <div id="publicContent" className="w3-row sidebarContent">
                                    <div className="sidebarItem w3-row" style={{marginLeft: '10px'}}><img/><button id="homeFile" className="w3-button lightText">home.html</button></div>
                                    <div className="sidebarItem sidebarFolder w3-row" style={{marginLeft: '10px'}}><img/><button id="personalFolder" className="w3-button lightText">personal/</button>
                                        <div id="personalContent" className="w3-row sidebarContent">
                                            <div className="sidebarItem w3-row" style={{marginLeft: '15px'}}><img/><button id="simplexFile" className="w3-button lightText">simplex.html</button></div>
                                            <div className="sidebarItem w3-row" style={{marginLeft: '15px'}}><img/><button id="imperiumFile" className="w3-button lightText">imperium.html</button></div>
                                        </div>
                                    </div>
                                    <div className="sidebarItem w3-row" style={{marginLeft: '10px'}}><img/><button id="bioFile" className="w3-button lightText">bio.html</button></div>
                                    <div className="sidebarItem w3-row" style={{marginLeft: '10px'}}><img/><button id="helpFile" className="w3-button lightText">help.html</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Home/>
                    <Simplex/>
                    <Imperium/>
                    <Custom/>
                    <div id="fileEditor" className="container w3-rest lightText w3-row" style={{display: 'none'}}>
                        <div id="editorLines" className="w3-col">1</div>
                        <div id="editorContent" className="w3-col"contentEditable="true"></div>
                    </div>
                </div>
                <footer className="commandBar w3-row" style={{bottom: '0px'}}>
                    <div className="commandItem lightText w3-col" style={{float: 'right'}}>{/*PAGE_LANG*/}</div>
                    <div className="commandItem lightText w3-col" style={{float: 'right'}}>{/*PAGE_ENC*/}</div>
                    <div className="commandItem lightText w3-col" style={{float: 'right'}}>{/*PAGE_LENGTH*/} Lines</div>
                </footer>
            </body>
        );
    }
}

export default Wrapper;