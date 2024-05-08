import React, { Component } from 'react';
import {buildPage, PageInfo} from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';
import {DefaultWrapper} from "../../scripts/defaultWrapper";

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
                thumbnail: "/media/image/inceptionDog.bmp"
            },
        ];
        let pageInfo = new PageInfo({
            title: "Inception Collage",
            summary: "Assembles one image mosaic from many, smaller images",
            pageName: "personal/inception",
            holderStyle: {backgroundColor: "#919ba8"},
            gitLink: "https://github.com/matthew-pisano/InceptionCollage",
            gitTitle: "Inception",
            tags: ["personal", "java"]
        });
        return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
    }
}

export default Inception;