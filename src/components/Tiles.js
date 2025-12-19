import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { resetTilesOnScroll } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";

/**
 * A tile object within a page
 * @param children {JSXElement} The children of the tile
 * @param tileInfo {TileInfo} Metadata for the tile
 * @param style {object} The style of the tile
 */
function Tile({ children, tileInfo, style }) {
    const tileId = tileInfo.anchor ? tileInfo.anchor : "pageTile-" + crypto.randomUUID();

    // Element that serves as a page anchor link
    let anchorElem = tileInfo.anchor ? (
        <Link href={`#${tileInfo.anchor}`} className={`${tileStyles.anchorLink}`} onClick={resetTilesOnScroll}>
            <img className={`${tileStyles.anchorIcon}`} alt="" />
        </Link>
    ) : null;

    // The title of the tile, either a link or in bold
    let titleTextElem = tileInfo.titleLink ? (
        <Link className={`${tileStyles.displayTileTitle}`} href={tileInfo.titleLink}>
            <u>{tileInfo.title}</u>
        </Link>
    ) : (
        <b className={`${tileStyles.displayTileTitle}`}>{tileInfo.title}</b>
    );

    // The title element for the tile, either an h2 or h4 depending on the tile type
    let titleElem = (
        <h4 className={`${tileStyles.displayContentTitle}`}>
            {titleTextElem}
            {anchorElem}
        </h4>
    );

    // The thumbnail image for the tile, if it exists
    let thumbnailElem = tileInfo.thumbnail ? (
        <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail}`}>
            <img src={tileInfo.thumbnail} alt="gitLogo" />
        </div>
    ) : null;

    // The content element for the tile
    let contentTypeClass = !tileInfo.thumbnail ? tileStyles.textOnlyTileContent : "";
    let contentElem = children ? (
        <div style={{ position: "relative" }}>
            <div className={`${tileStyles.displayTileContent} ${contentTypeClass}`}>{children}</div>
        </div>
    ) : null;

    return (
        <div
            id={tileId}
            className={`w3-container w3-row ${tileStyles.displayTile}`}
            key={tileId}
            style={style}
            data-refdata={"unslid"}>
            {thumbnailElem}

            <div className={`w3-mobile w3-rest`}>
                {titleElem}
                {contentElem}
            </div>
        </div>
    );
}

Tile.propTypes = {
    children: PropTypes.node,
    tileInfo: PropTypes.object.isRequired,
    style: PropTypes.object
};

export { Tile };
