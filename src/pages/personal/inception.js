import React from 'react';

import DefaultWrapper from "@/components/DefaultWrapper";
import {GitLink, PageInfo, Tile} from '@/lib/pageBuilder';
import {genPageTitle} from "@/lib/utils";


export default function Inception() {

    let tiles = [
        new Tile(
            "<h2>Overview</h2>",
            `Inception Collage uses Java's built in graphics libraries, AWT and Swing, to 
                allow users to create picture mosaics using a GUI.`
        ),
        new Tile(
            "Features and Function",
            `The GUI allows the user to select one image file as the basis of the mosaic, this 
                is the image that the smaller images will compose.  The user then selects any number 
                of other images.  These will be overlaid on top of the background image based on 
                their color and composition.  With enough of these images, the illusion of the 
                original image appears.  When zooming in on the new, large image, however,
                all of its constituent images are revealed.`,
            "/media/image/inceptionDog.bmp"
        ),
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Inception Collage",
        "Assembles one image mosaic from many, smaller images",
        {backgroundColor: "#919ba8"},
        ["personal", "java"],
        [new GitLink("https://github.com/matthew-pisano/InceptionCollage", "Inception")]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}
