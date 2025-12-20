import React from "react";

import tagStyles from "@/styles/tags.module.css";

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
     * @param links {JSXElement} Links to display at the top of the page
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
 * Metadata for a tile
 */
class TileInfo {
    /**
     * A Metadata for a tile
     * @param title {JSXElement} The title of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param tags {string[]} The tags for the tile
     * @param links {JSXElement} Links to display
     * @param titleLink {string} The link that the title should go to
     * @param anchor {string} The name of the anchor link to the tile
     */
    constructor({ title, thumbnail = "", tags = [], links = [], titleLink = "", anchor = "" }) {
        this.title = title;
        this.tags = tags;
        this.thumbnail = thumbnail;
        this.titleLink = titleLink;
        this.links = links;
        this.anchor = anchor;
    }
}

/**
 * Builds the tags for a page or tile
 * @param tags {string[]} Names of tags to build
 * @param links {JSXElement} Links to add to the tile
 * @return {JSX.Element} The tags JSX DIV element
 */
function buildTags(tags, links) {
    return (
        <div className={`w3-row ${tagStyles.tagHolder}`}>
            {links}
            {(tags || []).map((tagName) => (
                <div className={`w3-col w3-mobile ${tagStyles.tag} ${tagStyles[tagName + "Tag"]}`} key={tagName}>
                    <img className="w3-col" alt={tagName} />
                    <div className="w3-rest"></div>
                </div>
            ))}
        </div>
    );
}

export { buildTags, PageInfo, TileInfo };
