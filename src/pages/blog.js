import React from "react";

import FlexWrapper from "@/components/FlexWrapper";
import { PageInfo, GalleryTile } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

/**
 * A class for creating a flex tile to display on a page
 */
class FlexTile extends GalleryTile {
    /**
     * A class for creating a tile to display on a page
     * @param title {JSXElement} The title of the tile
     * @param content {JSXElement} The content of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param tags {string[]} The tags for the tile
     * @param titleLink {string} The link that the title should go to
     */
    constructor(title, content, thumbnail = "", tags = [], titleLink = "") {
        super(title, content, thumbnail, tags, [], titleLink, { margin: "0px", maxWidth: "500px" }, "");
    }
}

export default function Blog() {
    let tiles = [
        new FlexTile(
            <h2>Lorem Ipsum</h2>,
            (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor.
                </>
            ),
            "/media/image/predictChain.png",
            [],
            "/blog/blogOne"
        ),
        new FlexTile(
            <h2>Lorem Ipsum</h2>,
            (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor.
                </>
            ),
            "/media/image/predictChain.png",
            [],
            "/blog/blogTwo"
        ),
        new FlexTile(
            <h2>Lorem Ipsum</h2>,
            (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor.
                </>
            ),
            "/media/image/predictChain.png",
            [],
            "/blog/blogThree"
        ),
        new FlexTile(
            <h2>Lorem Ipsumc</h2>,
            (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor.
                </>
            ),
            "/media/image/predictChain.png",
            [],
            "/blog/blogFour"
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Blog",
        "A repository for more freeform thoughts",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        []
    );
    return <FlexWrapper pageInfo={pageInfo} tiles={tiles} />;
}
