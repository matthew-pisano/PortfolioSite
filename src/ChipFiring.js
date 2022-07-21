import React, { Component } from 'react';
import * as common from './common';
class ChipFiring extends Component {

    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Under Construction`
            },
            {
                title: "",
                content: ``,
                thumbnail: ""
            },
        ];
        let pageInfo = {
            pageName: "chipFiring",
            holderStyle: {backgroundColor: "#4d7bd0", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/",
            gitTitle: "Chip Firing",
            tags: ["research", "academic"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Chip Firing</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A research project to examine patterns in chip firing games</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default ChipFiring;