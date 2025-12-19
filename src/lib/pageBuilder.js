import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import tileStyles from "@/styles/pageTiles.module.css";
import tagStyles from "@/styles/tags.module.css";

const TRANSLUCENT = "rgba(139,166,175,0.45)";
const TRANSLUCENT_TEXT = "rgb(238,251,255)";

/**
 * A class for creating a link to display on a page
 */
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

/**
 * A class for creating a link to a git repository
 */
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
 * A class for creating a link to a download page
 */
class DownloadLink extends TileLink {
    /**
     * A class for creating a link to a download page
     * @param link {string} The link to the download page
     * @param title {string} The title of the download page
     */
    constructor(link, title) {
        super(link, title);
    }
}

/**
 * A class for creating an in-place page link to display on a page
 */
class PageLink extends TileLink {
    /**
     * A class for creating an in-place page link to display on a page
     * @param link {string} The link to the page
     * @param title {string} The title of the link
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
     * A class for creating a tile to display on a page
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

/**
 * A class for creating a gallery tile to display on a page
 */
class GalleryTile extends Tile {
    /**
     * A class for creating a gallery tile to display on a page
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

/**
 * A class for creating a section tile to display on a page
 */
class SectionTile extends Tile {
    /**
     * A class for creating a section tile to display on a page
     * @param title {JSXElement} The title of the tile
     * @param style {object} The style of the tile
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor(title, anchor = "", style = { backgroundColor: TRANSLUCENT, color: TRANSLUCENT_TEXT }) {
        super(title, <></>, "", [], [], "", style, anchor);
    }
}

/**
 * A class for creating a book tile to display on a page
 */
class BookTile extends Tile {
    /**
     * A class for creating a book tile to display on a page
     * @param title {JSXElement} The title of the book tile
     * @param author {string} The author of the book
     * @param synopsis {JSXElement} A brief synopsis of the book
     * @param thoughts {JSXElement} My thoughts on the book
     * @param footnotes {JSXElement} Any footnotes to include
     * @param thumbnail {string} The thumbnail image/cover for the book
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor(title, author, synopsis, thoughts, footnotes, thumbnail, anchor) {
        let content = (
            <>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Author:</i>
                    </b>{" "}
                    {author}
                </span>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Synopsis:</i>
                    </b>{" "}
                    {synopsis}
                </span>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Thoughts:</i>
                    </b>{" "}
                    {thoughts}
                </span>
                <span className={tileStyles.bookTileSection}>
                    {footnotes.props.children ? <hr /> : null}
                    {footnotes}
                </span>
            </>
        );
        super(title, content, thumbnail, [], [], "", {}, anchor);
    }
}

/**
 * Metadata for a page
 */
class PageInfo {
    pageName;

    /**
     * Metadata for a page
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
 * A footnote reference to appear in the text
 * @param idx The index of the footnote
 * @param anchor The anchor of the book the footnote is in
 * @returns {JSX.Element} A footnote reference in the main text body
 * @constructor
 */
function FootRef({ idx, anchor }) {
    return (
        <Link href={`#footnote-${anchor}-${idx}`}>
            <sup id={`footref-${anchor}-${idx}`}>{idx}</sup>
        </Link>
    );
}
FootRef.propTypes = { idx: PropTypes.number.isRequired, anchor: PropTypes.string.isRequired };

/**
 * A footnote to appear at the bottom of the text
 * @param idx The index of the footnote
 * @param anchor The anchor of the book the footnote is in
 * @param style The style to apply to the footnote
 * @param children The content of the footnote
 * @returns {JSX.Element} A footnote at the bottom of the text
 * @constructor
 */
function FootNote({ idx, anchor, style, children }) {
    return (
        <span style={{ ...style, textIndent: 0, display: "block", marginBottom: "10px" }}>
            <Link href={`#footref-${anchor}-${idx}`}>
                <sup id={`footnote-${anchor}-${idx}`}>{idx}</sup>
            </Link>{" "}
            <small>{children}</small>
        </span>
    );
}
FootNote.propTypes = {
    idx: PropTypes.number.isRequired,
    anchor: PropTypes.string.isRequired,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

/**
 * Resets the horizontal position of all tiles by removing the hiddenTile class
 */
function resetTilesOnScroll() {
    let tileHolder = document.getElementById("tileHolder");
    if (!tileHolder) return;

    for (let tileElement of tileHolder.children) tileElement.classList.remove(tileStyles.hiddenTile);
}

/**
 * Builds a link to display on a tile
 * @param tileLink {TileLink} The tile link to build
 * @param dark {boolean} Whether the link should be dark or darker
 * @returns {JSX.Element} The link JSX DIV element
 */
function buildLink(tileLink, dark = false) {
    let linkStyle = tagStyles.extraLink;
    if (tileLink instanceof GitLink) linkStyle = tagStyles.gitLink;
    else if (tileLink instanceof DownloadLink) linkStyle = tagStyles.downloadLink;
    else if (tileLink instanceof PageLink) linkStyle = tagStyles.pageLink;
    if (dark) linkStyle += ` ${tagStyles.darkTag}`;

    let target = tileLink instanceof PageLink ? "_self" : "_blank";
    return (
        <div className={`w3-mobile w3-col ${linkStyle}`} key={"tileLink" + tileLink.title}>
            <img className="w3-col" alt="tileLink" />
            <div className="w3-rest">
                <Link href={tileLink.link} target={target} rel="noreferrer" onClick={resetTilesOnScroll}>
                    {tileLink.title}
                </Link>
            </div>
        </div>
    );
}

/**
 * Builds the tags for a page or tile
 * @param tile {Tile | PageInfo} The tiles to build tags for
 * @param dark {boolean} Whether the tags should be dark or darker
 * @return {JSX.Element} The tags JSX DIV element
 */
function buildTags(tile, dark = false) {
    return (
        <div className={`w3-row ${tagStyles.tagHolder}`}>
            {(tile.links || []).map((tileLink) => buildLink(tileLink, dark))}
            {(tile.tags || []).map((tagName) => (
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
                  : tile instanceof BookTile
                    ? tileStyles.bookTileContent
                    : "";

        // Element that serves as a page anchor link
        let anchorElem = tile.anchor ? (
            <Link href={`#${tile.anchor}`} className={`${tileStyles.anchorLink}`} onClick={resetTilesOnScroll}>
                <img className={`${tileStyles.anchorIcon}`} alt="" />
            </Link>
        ) : null;
        // The title of the tile, either a link or in bold
        let titleTextElem = tile.titleLink ? (
            <Link className={titleClass} href={tile.titleLink}>
                <u>{tile.title}</u>
            </Link>
        ) : (
            <b className={titleClass}>{tile.title}</b>
        );
        // The title element for the tile, either an h2 or h4 depending on the tile type
        let titleElem =
            tile instanceof SectionTile ? (
                <h2 className={`${tileStyles.displayContentTitle}`}>
                    {titleTextElem}
                    {anchorElem}
                </h2>
            ) : (
                <h4 className={`${tileStyles.displayContentTitle}`}>
                    {titleTextElem}
                    {anchorElem}
                </h4>
            );
        // The thumbnail image for the tile, if it exists
        let thumbnailElem = tile.thumbnail ? (
            <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail} ${imageClass}`}>
                <img src={tile.thumbnail} alt="gitLogo" />
            </div>
        ) : null;
        // The content element for the tile
        let contentElem = tile.content ? (
            <div style={{ position: "relative" }}>
                <div className={`${tileStyles.displayTileContent} ${contentTypeClass}`}>{tile.content}</div>
            </div>
        ) : null;

        let tileId = tile.anchor ? tile.anchor : "pageTile" + i;
        return (
            <div id={tileId} className={className} key={tileId} style={tile.style} data-refdata={"unslid"}>
                {thumbnailElem}

                <div className={`w3-mobile w3-rest`}>
                    {titleElem}
                    {contentElem}
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

export {
    buildPage,
    resetTilesOnScroll,
    PageInfo,
    Tile,
    GalleryTile,
    SectionTile,
    BookTile,
    TileLink,
    GitLink,
    DownloadLink,
    PageLink,
    TRANSLUCENT,
    FootRef,
    FootNote
};
