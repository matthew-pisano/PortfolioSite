import React, { Component } from 'react';

class Imperium extends Component {

    render() {
        return (
            <div id="imperiumPage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Imperium</b><br/>
                        A historical grand strategy game for android devices</h1>
                </div>
                <div id="tileHolder" className="inner w3-display-container" style={{backgroundColor: "#824ab6", borderRadius: "10px"}}>
                    <div className="w3-row">
                        <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col" alt='gitLink'/><a className="w3-col" href="https://github.com/ReactorDevelopment/Imperium">Imperium</a></div>
                        <div className="w3-col tag personalTag w3-mobile"><img className="w3-col" alt='personal'/><span className="w3-col"></span></div>
                        <div className="w3-col tag javaTag w3-mobile"><img className="w3-col" alt='java'/><span className="w3-col"></span></div>
                        <div className="w3-col tag androidTag w3-mobile"><img className="w3-col" alt='android'/><span className="w3-col"></span></div>
                    </div>
                    <div id="tile1" className="displayTile w3-container w3-row">
                        <div className="w3-rest" style={{width: "100%"}}>
                            <h2><b>Overview</b></h2>
                            <p>Imperium is an application developed for android without any game engines or development frameworks.<br/>
                            Its motivations are twofold: to develop a geniunley enjoyable Android emulation of the RISK boardgame and other
                            grand strategy games for the PC platform and to develop a low level expertise in Android for myself by building 
                            everything from scratch.</p>
                        </div>
                    </div>
                    <div id="tile2" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/github.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b>Development</b></p>
                            <p>Starting as a side-project, <i>Imperium</i> soon became a learning excercise in Android and Java development.
                            Utilizing many techniques such as thread management, Android layout design, knowledge of the Android file system and
                            permissions, and general game design, the making of <i>Imperium</i> greatly expanded my knowledge of Java, Android, and software development.
                            </p>
                        </div>
                    </div>
                    <div id="tile3" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/github.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b>Publishing and Best Practices</b></p>
                            <p>Published to the Google Play store in early 2020, <i>Imperium</i> has ammased several thousand downloads.  Adherence to
                            Google Play guidelines and standards has resulted in an enjoyable experience for many users.  Local multiplayer
                            is also supported resulting in many users being reached by recommendations.
                            </p>
                        </div>
                    </div>
                    <div id="tile4" className="displayTile w3-container w3-row">
                        <img className="w3-col w3-mobile" src="assets/github.png" alt='gitLogo'/>
                        <div className="w3-col w3-mobile">
                            <p><b>Features and Gameplay</b></p>
                            <p><i>Imperium</i> implements many features present in the grand strategy games it emulates.  Users can save and
                            reload save files, play, pause or skip music of its soundtrack, access an inbuilt tutorial, and choose from multiple
                            maps and three modes of gameplay.  In a game, a user can zoom and pan around a large image composed of many, smaller
                            bitmaps representing capturable provinces, engaging enemy units until they own every province on the map.  The modes
                            increase in complexity, starting from the basic rules of RISK with davastation of provinces and attrition added next,
                             up to diplomacy and historical scenarios at its most complex.  Statistics of a player&apos;s game are recorded and saved 
                             for access by the player ingame.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Imperium;