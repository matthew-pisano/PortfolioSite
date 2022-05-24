import React, { Component } from 'react';
import * as common from './common';
class MipsCmd extends Component {

    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `The MIPS command processor processes commands and displays their outputs using the 
                <a href='https://courses.missouristate.edu/kenvollmar/mars/download.htm' target='_blank'>Mars simulator</a>.
                Developed as part of a college assembly course, the command processor leverages the low-level
                properties of assembly to carry out its functions using very lightweight code.`
            },
            {
                title: "Features and Function",
                content: `This command processor in input from the <i>Mars</i> console emulator, and outputs to that
                    same interface.  It has the ability to preform mathematical operations, bi-directional decimal and hexadecimal
                    conversions, produce audio output, and display sections of its memory to the user.  It also has the ability
                    to draw using one of <i>Mars</i>'s virtual screens.`,
                thumbnail: ""
            },
        ];
        let pageInfo = {
            holderStyle: {backgroundColor: "#bf564d", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/MIPS-Command-Processor",
            gitTitle: "MIPS Cmd",
            tags: ["academic", "assembly"]
        };
        return (
            <div id="mipsCmdPage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>MIPS Command Processor</b><br/>
                        A simple command processor written in the MPIS assembly language.</h1>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default MipsCmd;