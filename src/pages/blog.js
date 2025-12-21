import React from "react";

import { FlexTile } from "@/components/tiles/Tiles";
import FlexWrapper from "@/components/wrappers/FlexWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";

export default function Blog() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Blog",
        "A repository for more freeform thoughts",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        []
    );
    return (
        <FlexWrapper pageInfo={pageInfo}>
            <FlexTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/predictChain.png",
                        titleLink: "/blog/blogOne"
                    })
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor.
            </FlexTile>

            <FlexTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/predictChain.png",
                        titleLink: "/blog/blogTwo"
                    })
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor.
            </FlexTile>

            <FlexTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/predictChain.png",
                        titleLink: "/blog/blogThree"
                    })
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor.
            </FlexTile>

            <FlexTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/predictChain.png",
                        titleLink: "/blog/blogFour"
                    })
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor.
            </FlexTile>
        </FlexWrapper>
    );
}
