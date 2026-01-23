import React from "react";

import PropTypes from "prop-types";

import { GalleryTile } from "@/components/tiles/Tiles";
import FlexWrapper from "@/components/wrappers/FlexWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";
import tileStyles from "@/styles/pageTiles.module.css";

/**
 * A blog tile on the landing page
 * @param children {JSXAttribute} The children of the tile
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param date {Date} The date of writing of the blog
 * @constructor
 */
function BlogTile({ children, tileInfo, date }) {
    return (
        <GalleryTile tileInfo={tileInfo}>
            {children}
            <p style={{ fontSize: "small" }}>{date.toLocaleDateString("en-US")}</p>
        </GalleryTile>
    );
}

BlogTile.propTypes = {
    children: PropTypes.node,
    tileInfo: PropTypes.object.isRequired,
    date: PropTypes.any.isRequired
};

export default function Blog() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Blog",
        "A repository for more freeform thoughts",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        []
    );
    return (
        <FlexWrapper pageInfo={pageInfo} className={tileStyles.blogLanding}>
            <BlogTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/void.png",
                        titleLink: "/blog/onAGITransformers"
                    })
                }
                date={new Date(2025, 11, 18)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </BlogTile>

            <BlogTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/void.png",
                        titleLink: "/blog/blogTwo"
                    })
                }
                date={new Date(2025, 11, 18)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </BlogTile>

            <BlogTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/void.png",
                        titleLink: "/blog/blogThree"
                    })
                }
                date={new Date(2025, 11, 18)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </BlogTile>

            <BlogTile
                tileInfo={
                    new TileInfo({
                        title: <>Lorem Ipsum</>,
                        thumbnail: "/media/image/void.png",
                        titleLink: "/blog/blogFour"
                    })
                }
                date={new Date(2025, 11, 18)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </BlogTile>
        </FlexWrapper>
    );
}
