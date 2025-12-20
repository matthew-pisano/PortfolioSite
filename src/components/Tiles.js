import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { buildTags, resetTilesOnScroll } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";

const TRANSLUCENT = "rgba(139,166,175,0.45)";
const TRANSLUCENT_TEXT = "rgb(238,251,255)";

/**
 * Data class to encapsulate the elements that comprise a tile
 */
class TileElements {
    constructor(tileId, tileThumbnail, tileTitle, tileContent) {
        this.tileId = tileId;
        this.tileThumbnail = tileThumbnail;
        this.tileTitle = tileTitle;
        this.tileContent = tileContent;
    }
}

/**
 * Creates the elements that comprise a tile from the given tile info
 * @param tileInfo {TileInfo}
 * @param children {JSXElement} The children of the tile
 */
function tileFactory(tileInfo, children = null) {
    const tileId = tileInfo.anchor ? tileInfo.anchor : "pageTile-" + crypto.randomUUID();

    // The title of the tile, either a link or in bold
    let tileTitle = (
        <>
            {tileInfo.titleLink ? (
                <Link className={`${tileStyles.displayTileTitle}`} href={tileInfo.titleLink}>
                    <u>{tileInfo.title}</u>
                </Link>
            ) : (
                <b className={`${tileStyles.displayTileTitle}`}>{tileInfo.title}</b>
            )}

            {tileInfo.anchor ? (
                <Link href={`#${tileInfo.anchor}`} className={`${tileStyles.anchorLink}`} onClick={resetTilesOnScroll}>
                    <img className={`${tileStyles.anchorIcon}`} alt="" />
                </Link>
            ) : null}
        </>
    );

    // The thumbnail image for the tile, if it exists
    let tileThumbnail = tileInfo.thumbnail ? (
        <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail}`}>
            <img src={tileInfo.thumbnail} alt="gitLogo" />
        </div>
    ) : null;

    // The content element for the tile
    let contentTypeClass = !tileInfo.thumbnail ? tileStyles.textOnlyTileContent : "";
    let tileContent = children ? (
        <div style={{ position: "relative" }}>
            <div className={`${tileStyles.displayTileContent} ${contentTypeClass}`}>{children}</div>
        </div>
    ) : null;

    return new TileElements(tileId, tileThumbnail, tileTitle, tileContent);
}

/**
 * A tile object within a page
 * @param children {JSXElement} The children of the tile
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param style {object} The style of the tile
 */
function Tile({ children, tileInfo, style }) {
    let tileElements = tileFactory(tileInfo, children);
    return (
        <div
            id={tileElements.tileId}
            className={`w3-container w3-row ${tileStyles.displayTile}`}
            style={style}
            data-refdata={"unslid"}>
            {tileElements.tileThumbnail}

            <div className={`w3-mobile w3-rest`}>
                <h4 className={`${tileStyles.displayContentTitle}`}>{tileElements.tileTitle}</h4>
                {tileElements.tileContent}
                {buildTags(tileInfo.tags, tileInfo.links)}
            </div>
        </div>
    );
}

Tile.propTypes = {
    children: PropTypes.node,
    tileInfo: PropTypes.object.isRequired,
    style: PropTypes.object
};

/**
 * A section tile object within a page
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param style {object} The style of the tile
 */
function SectionTile({ tileInfo, style }) {
    style = { ...style, backgroundColor: TRANSLUCENT, color: TRANSLUCENT_TEXT };

    let tileElements = tileFactory(tileInfo);
    return (
        <div
            id={tileElements.tileId}
            className={`w3-container w3-row ${tileStyles.displayTile}`}
            style={style}
            data-refdata={"unslid"}>
            {tileElements.tileThumbnail}

            <div className={`w3-mobile w3-rest`}>
                <h2 className={`${tileStyles.displayContentTitle}`}>{tileElements.tileTitle}</h2>
            </div>
        </div>
    );
}

SectionTile.propTypes = {
    tileInfo: PropTypes.object.isRequired,
    style: PropTypes.object
};

/**
 * A gallery tile object within a page to highlight an image
 * @param children {JSXElement} The children of the tile
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param style {object} The style of the tile
 */
function GalleryTile({ children, tileInfo, style }) {
    let tileElements = tileFactory(tileInfo);
    return (
        <div
            id={tileElements.tileId}
            className={`w3-container w3-row ${tileStyles.displayTile}`}
            style={style}
            data-refdata={"unslid"}>
            <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail} ${tileStyles.galleryTileThumbnail}`}>
                <img src={tileInfo.thumbnail} alt="gitLogo" />
            </div>

            <div className={`w3-mobile w3-rest`}>
                <h4 className={`${tileStyles.displayContentTitle}`}>
                    <b className={`${tileStyles.displayTileTitle} ${tileStyles.galleryTileTitle}`}>{tileInfo.title}</b>
                </h4>
                <div style={{ position: "relative" }}>
                    <div className={`${tileStyles.displayTileContent} ${tileStyles.galleryTileContent}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

GalleryTile.propTypes = {
    children: PropTypes.node,
    tileInfo: PropTypes.object.isRequired,
    style: PropTypes.object
};

export { Tile, SectionTile, GalleryTile };
