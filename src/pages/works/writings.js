import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { GalleryTile } from "@/components/tiles/Tiles";
import FlexWrapper from "@/components/wrappers/FlexWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";
import { compiledPythonInfo } from "@/pages/works/writings/compiled-python";
import { onArbitraryCognition } from "@/pages/works/writings/on-arbitrary-cognitive-execution";
import { onGeneralTransformersInfo } from "@/pages/works/writings/on-general-transformers";
import tileStyles from "@/styles/tiles/Tiles.module.css";

/**
 * A preview tile on the writings landing page
 * @param children {JSXAttribute} The children of the tile
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param date {Date} The date of writing of the piece
 * @constructor
 */
function PreviewTile({ children, tileInfo, date }) {
    return (
        <GalleryTile tileInfo={tileInfo} style={{ height: "320px" }}>
            {children}
            <p style={{ fontSize: "small" }}>{date.toLocaleDateString("en-US")}</p>
        </GalleryTile>
    );
}

PreviewTile.propTypes = {
    children: PropTypes.node,
    tileInfo: PropTypes.object.isRequired,
    date: PropTypes.any.isRequired
};

export default function Writings() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Writings and Essays",
        "A repository for my more freeform thoughts",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        []
    );
    return (
        <FlexWrapper pageInfo={pageInfo}>
            <PreviewTile
                tileInfo={
                    new TileInfo({
                        title: <>{onArbitraryCognition.title}</>,
                        thumbnail: "/media/image/pages/writings/on-arbitrary-cognitive-execution/drawing-hands.webp",
                        titleLink: "/works/writings/on-arbitrary-cognitive-execution"
                    })
                }
                date={onArbitraryCognition.pubDate}>
                {onArbitraryCognition.subtitle}
            </PreviewTile>
            <PreviewTile
                tileInfo={
                    new TileInfo({
                        title: <>{compiledPythonInfo.title}</>,
                        thumbnail: "/media/image/pages/writings/compiled-python/python-low.webp",
                        thumbnailTag: (
                            <Link
                                href={"https://www.flickr.com/photos/28342603@N02"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${tileStyles.displayTileCreditLink}`}>
                                Image Credit: Mark Gillow
                            </Link>
                        ),
                        titleLink: "/works/writings/compiled-python"
                    })
                }
                date={compiledPythonInfo.pubDate}>
                {compiledPythonInfo.subtitle}
            </PreviewTile>
            <PreviewTile
                tileInfo={
                    new TileInfo({
                        title: <>{onGeneralTransformersInfo.title}</>,
                        thumbnail: "/media/image/pages/writings/on-general-transformers/hanoi-low.jpg",
                        titleLink: "/works/writings/on-general-transformers"
                    })
                }
                date={onGeneralTransformersInfo.pubDate}>
                {onGeneralTransformersInfo.subtitle}
            </PreviewTile>
        </FlexWrapper>
    );
}
