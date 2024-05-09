import React, { Component } from 'react';
import {buildPage, PageInfo, Tile} from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';
import {DefaultWrapper} from "../../scripts/defaultWrapper";

class MipsCmd extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            new Tile(
                "#Overview",
                `The MIPS command processor processes commands and displays their outputs using the 
                    <a href='https://courses.missouristate.edu/kenvollmar/mars/download.htm' target='_blank'>Mars simulator</a>.
                    Developed as part of a college assembly course, the command processor leverages the low-level
                    properties of assembly to carry out its functions using very lightweight code.`
            ),
            new Tile(
                "Features and Function",
                `This command processor in input from the <i>Mars</i> console emulator, and outputs to that
                    same interface.  It has the ability to preform mathematical operations, bi-directional decimal and hexadecimal
                    conversions, produce MIDI audio output, and display sections of its memory to the user.  It also has the ability
                    to draw using one of <i>Mars</i>'s virtual screens.`,
                "/media/image/mipscmd.png"
            ),
        ];
        let pageInfo = new PageInfo(
            typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
            "MIPS Terminal",
            "A simple command processor written in the MIPS assembly language",
            {backgroundColor: "#bf564d"},
            ["academic", "assembly"],
            "https://github.com/matthew-pisano/MIPS-Command-Processor",
            "MIPS Cmd"
        );
        return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
    }
}

export default MipsCmd;