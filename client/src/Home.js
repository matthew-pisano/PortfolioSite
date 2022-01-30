import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div id="homePage" className="page container w3-rest lightText">
                <div className="inner titleCard" style={{position: 'fixed', height: '300px', top: '50px', left: '0px', right: '0px'}}>
                    <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>Matthew Pisano<br/>
                        Student of Software Engineering</h1>
                </div>
                <div id="tileHolder" className="inner w3-display-container">
                    <h1 className="" style={{margin: 'auto', width: '100%', textAlign: 'center'}}>Projects</h1>
                    <div id="tile1" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile w3-row">
                            <p><b>Simplex</b></p>
                            <p>An math-oriented interpreted scripting language built in Java. <br/>Simplex's focus is on mathematic and scientific calculations
                                as it offers built-in matrix operations (multiplication, determinates, etc.) as well as many scientific and fundamental constants.
                                <br/>Simplex also features an IDE to both help programming and educate users on how programming languages work.
                            </p>
                            <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col"/><a className="w3-col" href="https://github.com/ReactorDevelopment/SimplexIDE">Simplex</a></div>
                            <div className="w3-col tag personalTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag javaTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag androidTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        </div>
                    </div>
                    <div id="tile2" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile w3-row">
                            <p><b>Imperium</b></p>
                            <p>Imperium is an android grand strategy game modeled after other popular titles on the PC platform.  The goal of this project is to
                                provide mobile users with a fun empire simulatior in either histoical settings within Europe or blank maps with gameplay more
                                similar to the <i>RISK</i> board game.
                            </p>
                            <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col"/><a className="w3-col" href="https://github.com/ReactorDevelopment/Imperium">Imperium</a></div>
                            <div className="w3-col tag personalTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag javaTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag androidTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        </div>
                    </div>
                    <div id="tile3" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile w3-row">
                            <p><b>MIPS Command Processor</b></p>
                            <p>A simple command processor written in the MPIS assembly language.  It has the ability to play sound, preform mathematical
                                operations on decimal or hexadeciman numbers, analyze the memory of the program, and draw on the screen.
                            </p>
                            <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col"/><a className="w3-col" href="https://github.com/ReactorDevelopment/MIPS-Command-Processor">MIPS Cmd</a></div>
                            <div className="w3-col tag academicTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag assemblyTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        </div>
                    </div>
                    <div id="tile4" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile w3-row">
                            <p><b>Ineception Collage</b></p>
                            <p>Java program that assembles one image from many smaller image.<br/>
                                This can be used to create very large images with hundresd of smaller images composing it, making wonderful art.
                                The program takes the average color over any given area of the larger canvas and displays whichever smaller image matches that color best
                                in that spot.</p>
                            <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col"/><a className="w3-col" href="https://github.com/ReactorDevelopment/InceptionCollage">Ineption Collage</a></div>
                            <div className="w3-col tag personalTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                            <div className="w3-col tag javaTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;