import React, { Component } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

class Imperium extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Imperium is an application developed for android without any game engines or development 
                    frameworks.<br>
                    Its motivations are twofold: to develop a genuinely enjoyable Android emulation of the 
                    <i>RISK</i> board game and other grand strategy games for the PC platform and to develop a low level expertise in 
                    Android for myself by building everything from scratch.`
            },
            {
                title: "Development",
                content: `Starting as a side-project, Imperium soon became a learning exercise in Android and Java development. 
                    Utilizing many techniques such as thread management, Android layout design, knowledge of the Android file system and permissions, 
                    and general game design, the making of Imperium greatly expanded my knowledge of Java, Android, and software development.`,
                thumbnail: "/media/image/imperiumLogo.png"
            },
            {
                title: "Publishing and Best Practices",
                content: `Published to the Google Play store in early 2020, Imperium has amassed several thousand downloads.  
                    Adherence to Google Play guidelines and standards has resulted in an enjoyable experience for many users.  
                    Local multiplayer is also supported resulting in many users being reached by recommendations.`,
                thumbnail: "/media/image/imperiumGooglePlay.png"
            },
            {
                title: "Features and Game-play",
                content: `Imperium implements many features present in the grand strategy games it emulates.  
                    Users can save and reload save files, play, pause or skip music of its soundtrack, access an inbuilt tutorial, 
                    and choose from multiple maps and three modes of game-play.  In a game, a user can zoom and pan around a large image composed of many, 
                    smaller bitmaps representing provinces that can be captured, engaging enemy units until they own every province on the map.  
                    The modes increase in complexity, starting from the basic rules of <i>RISK</i> with devastation of provinces and attrition added next, 
                    up to diplomacy and historical scenarios at its most complex.  Statistics of a player's game are recorded and saved for access by 
                    the player in-game.`,
                thumbnail: "/media/image/imperiumMap.png"
            }
        ];
        let pageInfo = {
            pageName: "personal/imperium",
            holderStyle: {backgroundColor: "#babd93", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/Imperium",
            gitTitle: "Imperium",
            tags: ["personal", "java", "android"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Imperium</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A historical grand strategy game for android devices</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default Imperium;