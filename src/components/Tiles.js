import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { resetTilesOnScroll } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";

/**
 * A tile object within a page
 * @param children {JSXElement} The children of the tile
 * @param title {JSXElement} The title element of the tile
 * @param thumbnail {string} A link to the thumbnail picture
 * @param tags {string[]} An array of tag names for the tile
 * @param links {TileLink[]} Any links to associate with the tile
 * @param titleLink {string} Where to link the title text to
 * @param style {object} The style of the tile
 * @param anchor {string} The anchor text for the tile
 */
function Tile({ children, title, thumbnail, tags, links, titleLink, style, anchor }) {
    const tileId = anchor ? anchor : "pageTile-" + crypto.randomUUID();

    // Element that serves as a page anchor link
    let anchorElem = anchor ? (
        <Link href={`#${anchor}`} className={`${tileStyles.anchorLink}`} onClick={resetTilesOnScroll}>
            <img className={`${tileStyles.anchorIcon}`} alt="" />
        </Link>
    ) : null;

    // The title of the tile, either a link or in bold
    let titleTextElem = titleLink ? (
        <Link className={`${tileStyles.displayTileTitle}`} href={titleLink}>
            <u>{title}</u>
        </Link>
    ) : (
        <b className={`${tileStyles.displayTileTitle}`}>{title}</b>
    );

    // The title element for the tile, either an h2 or h4 depending on the tile type
    let titleElem = (
        <h4 className={`${tileStyles.displayContentTitle}`}>
            {titleTextElem}
            {anchorElem}
        </h4>
    );

    // The thumbnail image for the tile, if it exists
    let thumbnailElem = thumbnail ? (
        <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail}`}>
            <img src={thumbnail} alt="gitLogo" />
        </div>
    ) : null;

    // The content element for the tile
    let contentTypeClass = !thumbnail ? tileStyles.textOnlyTileContent : "";
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
    title: PropTypes.node.isRequired,
    thumbnail: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.object),
    titleLink: PropTypes.string,
    style: PropTypes.object,
    anchor: PropTypes.string
};

export { Tile };
