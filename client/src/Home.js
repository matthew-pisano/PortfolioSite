import React, { Component } from 'react';
import * as common from './common';

class Home extends Component {

    render() {
        let tiles = [
            {
                title: "Simplex",
                content: `An math-oriented interpreted scripting language built in Java.<br>
                    Simplex's focus is on mathematic and scientific calculations as it offers built-in matrix operations 
                    (multiplication, determinants, etc.) as well as many scientific and fundamental constants.<br>
                    Simplex also features an IDE to both help programming and educate users on how programming languages work.`,
                thumbnail: "",
                gitLink: "https://github.com/ReactorDevelopment/SimplexIDE",
                tags: ["personal", "java", "android"]
            },
            {
                title: "Imperium",
                content: `Imperium is an android grand strategy game modeled after other popular titles on the PC platform.<br>
                    The goal of this project is to provide mobile users with a fun empire simulator in either historical 
                    settings within Europe or blank maps with game play more similar to the <i>RISK</i> board game.`,
                thumbnail: "",
                gitLink: "https://github.com/ReactorDevelopment/Imperium",
                tags: ["personal", "java", "android"]
            },
            {
                title: "MIPS Command Processor",
                content: `A simple command processor written in the MPIS assembly language.<br>
                    It has the ability to play sound, preform mathematical operations on decimal or 
                    hexadecimal numbers, analyze the memory of the program, and draw on the screen.`,
                thumbnail: "",
                gitLink: "https://github.com/ReactorDevelopment/MIPS-Command-Processor",
                gitTitle: "MIPS Cmd",
                tags: ["academic", "assembly"]
            },
            {
                title: "Inception Collage",
                content: `Java program that assembles one image from many smaller image.<br>
                    This can be used to create very large images with hundreds of smaller images composing it, making wonderful art. 
                    The program takes the average color over any given area of the larger canvas and displays whichever smaller image matches 
                    that color best in that spot.`,
                thumbnail: "",
                gitLink: "https://github.com/ReactorDevelopment/InceptionCollage",
                gitTitle: "Inception",
                tags: ["personal", "java"]
            }
        ];
        let pageInfo = {
            title: "Projects",
            holderStyle: {borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/InceptionCollage",
            gitTitle: "Inception",
            tags: ["personal", "java"]
        };
        return (
            <div id="homePage" className="page container w3-rest lightText">
                <div className="inner titleCard" style={{position: 'fixed', height: '300px', top: '50px', left: '0px', right: '0px'}}>
                    <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>Matthew Pisano<br/>
                        Student of Software Engineering</h1>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default Home;