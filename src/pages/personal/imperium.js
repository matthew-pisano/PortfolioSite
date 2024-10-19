import React from 'react';
import {PageInfo, Tile} from '@/lib/pageBuilder';
import DefaultWrapper from "@/components/defaultWrapper";


function Imperium() {
    let tiles = [
        new Tile(
            "#Overview",
            `Imperium is an application developed for android without any game engines or development 
                frameworks.<br>
                Its motivations are twofold: to develop a genuinely enjoyable Android emulation of the 
                <i>RISK</i> board game and other grand strategy games for the PC platform and to develop a low level expertise in 
                Android for myself by building everything from scratch.`
        ),
        new Tile(
            "Development",
            `Starting as a side-project, Imperium soon became a learning exercise in Android and Java development. 
                Utilizing many techniques such as thread management, Android layout design, knowledge of the Android file system and permissions, 
                and general game design, the making of Imperium greatly expanded my knowledge of Java, Android, and software development.`,
            "/media/image/imperiumLogo.png"
        ),
        new Tile(
            "Publishing and Best Practices",
            `Published to the Google Play store in early 2020, Imperium has amassed several thousand downloads.  
                Adherence to Google Play guidelines and standards has resulted in an enjoyable experience for many users.  
                Local multiplayer is also supported resulting in many users being reached by recommendations.`,
            "/media/image/imperiumGooglePlay.png"
        ),
        new Tile(
            "Features and Game-play",
            `Imperium implements many features present in the grand strategy games it emulates.  
                Users can save and reload save files, play, pause or skip music of its soundtrack, access an inbuilt tutorial, 
                and choose from multiple maps and three modes of game-play.  In a game, a user can zoom and pan around a large image composed of many, 
                smaller bitmaps representing provinces that can be captured, engaging enemy units until they own every province on the map.  
                The modes increase in complexity, starting from the basic rules of <i>RISK</i> with devastation of provinces and attrition added next, 
                up to diplomacy and historical scenarios at its most complex.  Statistics of a player's game are recorded and saved for access by 
                the player in-game.`,
            "/media/image/imperiumMap.png"
        )
    ];
    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "Imperium",
        "A historical grand strategy game for android devices",
        {backgroundColor: "#c4c889"},
        ["personal", "java", "android"],
        "https://github.com/matthew-pisano/Imperium",
        "Imperium",
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}


export default Imperium;