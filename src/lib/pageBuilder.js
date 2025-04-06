import React from "react";

import Link from "next/link";

import tileStyles from "@/styles/pageTiles.module.css";
import tagStyles from "@/styles/tags.module.css";

const TRANSLUCENT = "rgba(139,166,175,0.45)";

class TileLink {
    /**
     * A class for creating a link to display on a page
     * @param link {string} The link to the page
     * @param title {string} The title of the link
     */
    constructor(link, title) {
        this.link = link;
        this.title = title;
    }
}

class GitLink extends TileLink {
    /**
     * A class for creating a link to a git repository
     * @param link {string} The link to the git repository
     * @param title {string} The title of the git repository
     */
    constructor(link, title) {
        super(link, title);
    }
}

/**
 * A class for creating a tile to display on a page
 */
class Tile {
    /**
     * @param title {JSXElement} The title of the tile
     * @param content {JSXElement} The content of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param tags {string[]} The tags for the tile
     * @param links {TileLink[]} Links to display
     * @param titleLink {string} The link that the title should go to
     * @param style {object} The style of the tile
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor(title, content, thumbnail = "", tags = [], links = [], titleLink = "", style = {}, anchor = "") {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.thumbnail = thumbnail;
        this.style = style;
        this.titleLink = titleLink;
        this.links = links;
        this.anchor = anchor;
    }
}

class GalleryTile extends Tile {
    /**
     * @param title {JSXElement} The title of the tile
     * @param content {JSXElement} The content of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param tags {string[]} The tags for the tile
     * @param links {TileLink[]} Links to display
     * @param titleLink {string} The link that the title should go to
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor(title, content, thumbnail = "", tags = [], links = [], titleLink = "", anchor = "") {
        super(title, content, thumbnail, tags, links, titleLink, {}, anchor);
    }
}

class SectionTile extends Tile {
    /**
     * @param title {JSXElement} The title of the tile
     * @param style {object} The style of the tile
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor(title, anchor = "", style = { backgroundColor: TRANSLUCENT }) {
        super(title, "", "", [], [], "", style, anchor);
    }
}

/**
 * Metadata for a page
 */
class PageInfo {
    pageName;

    /**
     * @param pageName {string} The name of the page
     * @param title {string} The title of the page
     * @param summary {string} A brief summary of the page
     * @param holderStyle {object} The style of the page holder
     * @param tags {string[]} The tags for the page
     * @param links {TileLink[]} Links to display at the top of the page
     */
    constructor(pageName, title, summary, holderStyle = {}, tags = [], links = []) {
        this.pageName = pageName;
        this.title = title;
        this.summary = summary;
        this.holderStyle = holderStyle;
        this.links = links;
        this.tags = tags;
    }
}

/**
 * Builds the tags for a page or tile
 * @param tile {Tile | PageInfo} The tiles to build tags for
 * @param dark {boolean} Whether the tags should be dark or darker
 * @return {JSX.Element} The tags JSX DIV element
 */
function buildTags(tile, dark = false) {
    let tagClasses = `w3-mobile w3-row w3-col ${dark ? tagStyles.darkTag : ""}`;
    return (
        <div className="w3-row">
            {(tile.links || []).map((tileLink, i) => {
                tagClasses += " " + (tileLink instanceof GitLink ? tagStyles.gitLink : tagStyles.extraLink);
                return (
                    <div className={`${tagClasses}`} key={"tileLink" + tileLink.title}>
                        <img className="w3-col" alt="tileLink" />
                        <div className="w3-rest">
                            <Link href={tileLink.link} target="_blank" rel="noreferrer">
                                {tileLink.title}
                            </Link>
                        </div>
                    </div>
                );
            })}
            {(tile.tags || []).map((tagName, i) => (
                <div className={`w3-col w3-mobile ${tagStyles.tag} ${tagStyles[tagName + "Tag"]}`} key={tagName}>
                    <img className="w3-col" alt={tagName} />
                    <div className="w3-rest"></div>
                </div>
            ))}
        </div>
    );
}

/**
 * Builds the tiles for a page
 * @param tiles {Tile[]} The tiles to build
 * @returns {JSX.Element[]} The tiles JSX DIV elements
 */
function buildTiles(tiles) {
    return tiles.map((tile, i) => {
        let className = `w3-container w3-row ${tileStyles.displayTile}`;
        let titleClass = `${tileStyles.displayTileTitle} ${tile instanceof GalleryTile ? tileStyles.galleryTileTitle : ""}`;
        let imageClass = tile instanceof GalleryTile ? tileStyles.galleryTileThumbnail : "";
        let contentTypeClass =
            tile instanceof GalleryTile
                ? tileStyles.galleryTileContent
                : !tile.thumbnail
                  ? tileStyles.textOnlyTileContent
                  : "";

        let anchorElem = tile.anchor ? (
            <Link href={`#${tile.anchor}`} className={`${tileStyles.anchorLink}`}>
                <img className={`${tileStyles.anchorIcon}`} alt="" />
            </Link>
        ) : null;
        let titleElem = tile.titleLink ? (
            <Link className={titleClass} href={tile.titleLink}>
                <u>{tile.title}</u>
            </Link>
        ) : (
            <b className={titleClass}>{tile.title}</b>
        );

        let tileId = tile.anchor ? tile.anchor : "pageTile" + i;

        return (
            <div id={tileId} className={className} key={"pageTile" + i} style={tile.style} data-refdata={"unslid"}>
                {tile.thumbnail ? (
                    <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail} ${imageClass}`}>
                        <img src={tile.thumbnail} alt="gitLogo" />
                    </div>
                ) : null}

                <div className={`w3-mobile w3-rest ${tileStyles.displayTileContent} ${contentTypeClass}`}>
                    {tile instanceof SectionTile ? (
                        <h2>
                            {titleElem}
                            {anchorElem}
                        </h2>
                    ) : (
                        <h4>
                            {titleElem}
                            {anchorElem}
                        </h4>
                    )}

                    {tile.content ? <span>{tile.content}</span> : null}

                    {buildTags(tile)}
                </div>
            </div>
        );
    });
}

/**
 * Builds a page from the given pageInfo and tiles
 * @param pageInfo {PageInfo} The page information for making the title and page-level tags
 * @param tiles {Tile[]} The tiles to display on the page
 * @return {JSX.Element} The page JSX DIV element
 */
function buildPage(pageInfo, tiles) {
    pageInfo.pageName = pageInfo.pageName.split("/").join("");
    return (
        <div id="tileHolder" className={`w3-display-container ${tileStyles.tileHolder}`} style={pageInfo.holderStyle}>
            {buildTags(pageInfo, true)}
            {buildTiles(tiles)}
        </div>
    );
}

export { buildPage, PageInfo, Tile, GalleryTile, SectionTile, TileLink, GitLink, TRANSLUCENT };
