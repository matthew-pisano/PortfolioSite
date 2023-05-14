import React, { Component } from 'react';
import * as common from '../scripts/common';
import PropTypes from 'prop-types';
class Inception extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Inception Collage uses Java's built in graphics libraries, AWT and Swing, to allow users to
                    create picture mosaics using a GUI.`
            },
            {
                title: "Features and Function",
                content: `The GUI allows the user to select one image file as the basis of the mosaic, this is the
                    image that the smaller images will compose.  The user then selects any number of other images.  These
                    will be overlayed on top of the background image based on their color and composition.  With enough of these
                    images, the illusion of the original image appears.  When zooming in on the new, large image, however,
                    all of its constituent images are revealed.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/inceptionDog.bmp"
            },
        ];
        let pageInfo = {
            pageName: "inception",
            holderStyle: {backgroundColor: "#919ba8", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/InceptionCollage",
            gitTitle: "Inception",
            tags: ["personal", "java"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Inception Collage</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Assembles one image mosaic from many, smaller images</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default Inception;