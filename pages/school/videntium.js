import React, { Component } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

class Videntium extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Videntium is an online map viewer for map files generated by <i>Imperium</i>.  
                    Users can upload any Imperium map file to the website and view its various attributes.
                    Users of the site can create an account that is stored in a database, store uploaded maps
                    to a separate database and choose to share those maps publicly with all users.`
            },
            {
                title: "Features and Function",
                content: `Built using AWS Cloud9, Videntium is served to the user through PHP from AWS servers.
                    The two MySQL databases that Videntium uses as storage are created and managed by PHPMyAdmin for
                    easier management.  The map viewer allows the user to toggle between different views of their
                    map using colored filters and text boxes to show information about the various provinces on the map.`,
                thumbnail: "/media/image/videntiumMap.png"
            },
            {
                title: "Implementation",
                content: `The interpretation of uploaded maps is preformed on the front-end using code from Imperium that
                    was translated from Java to JavaScript.  This allows the browser to preform the same viewing and
                    information interaction as within the same, although the process is considerably lighter without the
                    rest of the game's code running along side of it.`,
            },
            {
                title: "Map Sharing",
                content: `Users of Videntium are also able to make their maps public to all users of the website.
                    On the page that display's a user's private maps, all maps that are shared publicly are also shown.
                    These maps contain information such as the owner's name and the name of the map file.  The user can
                    then load their personal maps or those publicly available into the viewer.`,
                thumbnail: "/media/image/videntiumDB.png"
            },
        ];
        let pageInfo = {
            pageName: "school/videntium",
            holderStyle: {backgroundColor: "#876eba", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/Videntium",
            gitTitle: "Videntium",
            tags: ["academic", "php", "js", "html"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Videntium</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Online map viewer for Imperium written in PHP</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default Videntium;