import React from "react";

import PropTypes from "prop-types";

import { GalleryTile } from "@/components/tiles/Tiles";
import FlexWrapper from "@/components/wrappers/FlexWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";
import { blogInfo as genTransformers } from "@/pages/works/blog/on-general-transformers";

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
        <FlexWrapper pageInfo={pageInfo}>
            <BlogTile
                tileInfo={
                    new TileInfo({
                        title: <>{genTransformers.title}</>,
                        thumbnail: "/media/image/pages/blog/on-general-transformers/hanoi-low.jpg",
                        titleLink: "/works/blog/on-general-transformers"
                    })
                }
                date={genTransformers.date}>
                {genTransformers.subtitle}
            </BlogTile>
        </FlexWrapper>
    );
}
