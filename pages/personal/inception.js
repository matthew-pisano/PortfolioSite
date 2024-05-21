import React from 'react';
import {PageInfo, Tile} from '../../scripts/pageBuilder';
import DefaultWrapper from "../../scripts/pageComponents/defaultWrapper";


function Inception() {

    let tiles = [
        new Tile(
            "#Overview",
            `Inception Collage uses Java's built in graphics libraries, AWT and Swing, to allow users to
                create picture mosaics using a GUI.`
        ),
        new Tile(
            "Features and Function",
            `The GUI allows the user to select one image file as the basis of the mosaic, this is the
                image that the smaller images will compose.  The user then selects any number of other images.  These
                will be overlayed on top of the background image based on their color and composition.  With enough of these
                images, the illusion of the original image appears.  When zooming in on the new, large image, however,
                all of its constituent images are revealed.`,
            "/media/image/inceptionDog.bmp"
        ),
    ];
    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "Inception Collage",
        "Assembles one image mosaic from many, smaller images",
        {backgroundColor: "#919ba8"},
        ["personal", "java"],
        "https://github.com/matthew-pisano/InceptionCollage",
        "Inception"
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}


export default Inception;