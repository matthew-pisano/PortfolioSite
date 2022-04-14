import React, { Component } from 'react';

class MipsCmd extends Component {

    render() {
        return (
            <div id="mipsCmdPage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>MIPS Command Processor</b><br/>
                        A simple command processor written in the MPIS assembly language.</h1>
                </div>
                <div id="tileHolder" className="inner w3-display-container" style={{backgroundColor: "#824ab6", borderRadius: "10px"}}>
                    <div className="w3-row">
                        <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col" alt='gitLink'/><a className="w3-col" href="https://github.com/ReactorDevelopment/MIPS-Command-Processor">MIPS Cmd</a></div>
                        <div className="w3-col tag personalTag w3-mobile"><img className="w3-col" alt='personal'/><span className="w3-col"></span></div>
                        <div className="w3-col tag javaTag w3-mobile"><img className="w3-col" alt='java'/><span className="w3-col"></span></div>
                        <div className="w3-col tag androidTag w3-mobile"><img className="w3-col" alt='android'/><span className="w3-col"></span></div>
                    </div>
                    <div id="tile1" className="displayTile w3-container w3-row">
                        <div className="w3-rest" style={{width: "100%"}}>
                            <h2><b>Overview</b></h2>
                            <p>The MIPS command processor processes commands and displays their outputs using the <a href='https://courses.missouristate.edu/kenvollmar/mars/download.htm'>Mars simulator</a>.
                            Developed as part of a college assembly course, the command processor uses 
                            </p>
                        </div>
                    </div>
                    <div id="tile2" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/github.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b></b></p>
                            <p></p>
                        </div>
                    </div>
                    <div id="tile3" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/ithub.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b></b></p>
                            <p></p>
                        </div>
                    </div>
                    <div id="tile4" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/github.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b></b></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default MipsCmd;