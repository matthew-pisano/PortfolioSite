import React, { Component } from 'react';

class Simplex extends Component {

    render() {
        return (
            <div id="simplexPage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Simplex</b><br/>
                        An math-oriented interpreted scripting language built in Java</h1>
                </div>
                <div id="tileHolder" className="inner w3-display-container" style={{backgroundColor: "#824ab6", borderRadius: "10px"}}>
                    <div className="w3-row">
                        <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col"/><a className="w3-col" href="https://github.com/ReactorDevelopment/SimplexIDE">Simplex</a></div>
                        <div className="w3-col tag personalTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        <div className="w3-col tag javaTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                        <div className="w3-col tag androidTag w3-mobile"><img className="w3-col"/><span className="w3-col"></span></div>
                    </div>
                    <div id="tile1" className="displayTile w3-container w3-row">
                        <div className="w3-rest" style={{width: "100%"}}>
                            <h2><b>Overview</b></h2>
                            <p>Simplex's focus is on mathematic and scientific calculations
                                as it offers built-in matrix operations (multiplication, determinates, etc.) as well as several scientific and fundamental constants.
                                <br/>It is strictly typed like languages such C or Java, but has a similar syntax to python with type hinting.</p>
                        </div>
                    </div>
                    <div id="tile2" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile">
                            <p><b>Companion Android App</b></p>
                            <p>The goal of the Simplex Android IDE is to both allow easy mobile programming and serve as an educational tool.
                                When a user of the app is ready to build their program, they have the option to peer into the inner structure of the language.
                                They are able to see each of the three stages, Lexing, Parsing, and Interpreting, and how the code is structured within each,
                                from being split into tokens, to parsed into a tree, to the context given during interpretation.  With this tool, the hope is
                                that any users new to programming would gain a deeper understanding of what goes on behind the scenes.
                            </p>
                        </div>
                    </div>
                    <div id="tile3" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile">
                            <p><b>Processing Its Source</b></p>
                            <p>When source code is given to the Simplex interpreter, it first encounters the lexer.  These operations split the code
                                into tokens seperated into groups like 'numbers' or 'keywords'.  Once the code has been parsed into tokens, each line
                                of the program is fed into the parser which creates the core data structure of the program, a list of binary trees.  Once
                                the structure of the program is formed, the list if given to the interpreter.  The interpreter is the code that gives context
                                the nodes of the tree, reserved words are given their exact classNameifications and variable ids are given their proper types,
                                among other things.  After this step, the program is ready for execution.
                            </p>
                        </div>
                    </div>
                    <div id="tile4" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile">
                            <p><b>Execution</b></p>
                            <p>After a program has been built into its data structure, it is ready for execution.  By the time of execution, all variables and
                                functions have been loaded into memory with their initial values, so executuion begins at the begining and goes line by line.
                            </p>
                            <p>As each line is hit, any expressions in that line are resolved to their real values, reading the index of an array for example,
                                and functions have the real values or their arguments given to them for their execution.
                            </p>
                        </div>
                    </div>
                    <div id="tile5" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="github.png"/>
                        <div className="w3-col w3-mobile">
                            <p><b>Scientific Focus</b></p>
                            <p>One of the other notable features of Simplex is its concentration on making some physics or mathematical operations easier.  
                                The language comes with a wide array of built-in mathematical and physical constants and functions.  
                                These include constants like <i>PI</i> or the speed of light (<i>c</i>), or functions like sine.  
                                Additionally, Simplex options for array manipulation that are not present in many other languages.  
                                This comes from the fact that each array is treated as a matrix.  This allows for adding any N-Dimensional arrays together, 
                                which sum just as arrays would in linear algebra.  Integer of Double arrays can also be multiplied together to get the dot or 
                                cross product of the two matrices.  This becomes even more useful when used with the built-in determinate and inverse functions 
                                that can be used on the arrays.</p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Simplex;