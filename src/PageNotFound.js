import React, { Component } from 'react';
import * as common from './common';
import PropTypes from 'prop-types';

class PageNotFound extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "Something's Not Right",
                content: `The page <i style="background-color: #454545; border-radius: 4px">'${window.location.pathname}'</i>
                does not seem to exist.  These are uncharted waters, it would be wise to return home.<br><br>
                ...This your last chance.  After this there is no turning back.  You take the blue pill, the story ends.
                You wake up in your bed and believe whatever you want to. You take the red pill, you stay in Wonderland, 
                and I show you how deep the rabbit hole goes.  Remember, all I'm offering is the truth.  Nothing more.`
            },
            {
                title: "Back to Safety",
                titleLink: "home",
                content: ``,
                style: {backgroundColor: "#225799", textAlign: "center"}
            },
            {
                title: "Continue Onwards",
                titleLink: "babble",//(Math.random() + 1).toString(36).substring(6),
                content: ``,
                style: {backgroundColor: "#9e1111", backgroundImage: 'url("matrix.gif")', textAlign: "center"}
            },
        ];
        let pageInfo = {
            pageName: "help",
            holderStyle: {backgroundColor: "#000000", borderRadius: "10px"},
            tags: ["help"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Page Not Found</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>How did we get here?</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default PageNotFound;