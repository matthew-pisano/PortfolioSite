import React from 'react';
import {PageInfo, Tile} from '../../scripts/pageBuilder';
import DefaultWrapper from "../../scripts/pageComponents/defaultWrapper";


function Videntium() {

    let tiles = [
        new Tile(
            "#Overview",
            `Videntium is an online map viewer for map files generated by <i>Imperium</i>.  
                Users can upload any Imperium map file to the website and view its various attributes.
                Users of the site can create an account that is stored in a database, store uploaded maps
                to a separate database and choose to share those maps publicly with all users.`
        ),
        new Tile(
            "Features and Function",
            `Built using AWS Cloud9, Videntium is served to the user through PHP from AWS servers.
                The two MySQL databases that Videntium uses as storage are created and managed by PHPMyAdmin for
                easier management.  The map viewer allows the user to toggle between different views of their
                map using colored filters and text boxes to show information about the various provinces on the map.`,
            "/media/image/videntiumMap.png"
        ),
        new Tile(
            "Implementation",
            `The interpretation of uploaded maps is preformed on the front-end using code from Imperium that
                was translated from Java to JavaScript.  This allows the browser to preform the same viewing and
                information interaction as within the same, although the process is considerably lighter without the
                rest of the game's code running along side of it.`,
        ),
        new Tile(
            "Map Sharing",
            `Users of Videntium are also able to make their maps public to all users of the website.
                On the page that display's a user's private maps, all maps that are shared publicly are also shown.
                These maps contain information such as the owner's name and the name of the map file.  The user can
                then load their personal maps or those publicly available into the viewer.`,
            "/media/image/videntiumDB.png"
        ),
    ];
    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "Videntium",
        "Online map viewer for Imperium written in PHP",
        {backgroundColor: "#6f63a6"},
        ["academic", "php", "js", "html"],
        "https://github.com/matthew-pisano/Videntium",
        "Videntium"
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}


export default Videntium;