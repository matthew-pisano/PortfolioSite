import React, { Component } from 'react';
import * as common from './common';
import { Constants } from './Utils';
class Babble extends Component {
    static tiles = [
        {
            title: "_",
            content: ``
        },
        {
            title: "_",
            content: ``,
            thumbnail: ""
        },
        {
            title: "_",
            content: ``,
            thumbnail: ""
        },
        {
            title: "_",
            content: ``,
            thumbnail: ""
        }
    ];

    render() {
        let pageInfo = {
            pageName: "babble",
            holderStyle: {backgroundColor: "#5a3afa00", borderRadius: "10px"},
            tags: ["help"]
        };
        Constants.babbleTiles = Babble.tiles;
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Babble</b></h1><br/>
                </div>
                {common.build(pageInfo, Babble.tiles)}
            </div>
        );
    }
}

export default Babble;