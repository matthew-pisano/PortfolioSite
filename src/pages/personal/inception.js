import React from "react";

import { GitLink } from "@/components/tiles/Links";
import { TileTag } from "@/components/tiles/Tags";
import { Tile } from "@/components/tiles/Tiles";
import DefaultWrapper from "@/components/wrappers/DefaultWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";

export default function Inception() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Inception Collage",
        "Assembles one image mosaic from many, smaller images",
        { backgroundColor: PageColor.SUDO_TEAL },
        [TileTag.PERSONAL, TileTag.JAVA],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/InceptionCollage"}>Inception</GitLink>
            </>
        )
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
                    Inception Collage uses Java's built in graphics libraries, AWT and Swing, to allow users to create
                    picture mosaics using a GUI.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({ title: <>Features and Function</>, thumbnail: "/media/image/inceptionDog.bmp" })
                }>
                <p>
                    The GUI allows the user to select one image file as the basis of the mosaic, this is the image that
                    the smaller images will compose. The user then selects any number of other images. These will be
                    overlaid on top of the background image based on their color and composition. With enough of these
                    images, the illusion of the original image appears. When zooming in on the new, large image,
                    however, all of its constituent images are revealed.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
