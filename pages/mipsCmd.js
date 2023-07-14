import React, { Component } from 'react';
import * as common from '../scripts/common';
import PropTypes from 'prop-types';
import {Wrapper} from '../scripts/wrapper';

class MipsCmd extends Component {

    static propTypes = {display: PropTypes.string};
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
                    conversions, produce MIDI audio output, and display sections of its memory to the user.  It also has the ability
                    to draw using one of <i>Mars</i>'s virtual screens.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/mipscmd.png"
            },
        ];
        let pageInfo = {
            pageName: "mipsCmd",
            holderStyle: {backgroundColor: "#bf564d", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/MIPS-Command-Processor",
            gitTitle: "MIPS Cmd",
            tags: ["academic", "assembly"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>MIPS Terminal</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A simple command processor written in the MIPS assembly language</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default MipsCmd;