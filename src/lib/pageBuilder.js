import React from "react";
import HTMLReactParser from 'html-react-parser';
import Latex from 'react-latex-next';
import tagStyles from '../styles/tags.module.css';
import tileStyles from '../styles/pageTiles.module.css';


/**
 * A class for creating a tile to display on a page
 */
class Tile {

    /**
     * @param title {string} The title of the tile
     * @param content {string} The content of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param gallery {boolean} Whether the tile is a gallery
     * @param tags {string[]} The tags for the tile
     * @param gitLink {string} The link to the git repository
     * @param gitTitle {string} The title of the git repository link
     * @param extraLinks {string[]} Extra links to display
     * @param extraTitles {string[]} The titles of the extra links
     * @param titleLink {string} The link that the title should go to
     * @param style {object} The style of the tile
     * @param latex {boolean} Whether the content should be rendered as latex
     */
    constructor(title, content, thumbnail = "", gallery = false, tags = [], gitLink = "", gitTitle = "", extraLinks = [], extraTitles = [], titleLink = "", style = {}, latex = false){
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.thumbnail = thumbnail;
        this.gallery = gallery;
        this.style = style;
        this.titleLink = titleLink;
        this.latex = latex;
        this.gitLink = gitLink;
        this.gitTitle = gitTitle;
        this.extraLinks = extraLinks;
        this.extraTitles = extraTitles;
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
     * @param gitLink {string} The link to the git repository
     * @param gitTitle {string} The title of the git repository link
     * @param extraLinks {string[]} Extra links to display
     * @param extraTitles {string[]} The titles of the extra links
     */
    constructor(pageName, title, summary, holderStyle = {}, tags = [], gitLink = "", gitTitle = "", extraLinks = [], extraTitles = []){
        this.pageName = pageName;
        this.title = title;
        this.summary = summary;
        this.holderStyle = holderStyle;
        this.gitLink = gitLink;
        this.gitTitle = gitTitle;
        this.extraLinks = extraLinks;
        this.extraTitles = extraTitles;
        this.tags = tags;
    }
}


/**
 * Builds the tags for a page or tile
 * @param tile {Tile | PageInfo} The tiles to build tags for
 * @param dark {boolean} Whether the tags should be dark or darker
 * @return {JSX.Element} The tags JSX DIV element
 */
function buildTags(tile, dark = false){

    let tagClasses = `w3-mobile w3-row w3-col ${dark ? tagStyles.darkTag : ""}`;
    return (
        <div className="w3-row">
            {tile.gitLink ?
                <div className={`${tagClasses} ${tagStyles.gitLink}`}>
                    <img className="w3-col" alt='gitLink'/>
                    <div className="w3-rest">
                        <a href={tile.gitLink} target="_blank" rel="noreferrer">
                            {tile.gitTitle ? tile.gitTitle : tile.title}
                        </a>
                    </div>
                </div> : null
            }
            {tile.extraLinks ?
                tile.extraLinks.map((extraLink, i) => {
                return <div className={`${tagClasses} ${tagStyles.extraLink}`} key={'extraLink'+tile.extraTitles[i]}>
                    <img className="w3-col" alt='extraLink'/>
                    <div className="w3-rest">
                        <a href={extraLink} target="_blank" rel="noreferrer">{tile.extraTitles[i]}</a>
                    </div>
                </div>;
                }) : null
            }
            {(tile.tags || []).map((tagName, i) =>
                <div className={`w3-col w3-mobile ${tagStyles.tag} ${tagStyles[tagName+'Tag']}`} key={tagName}>
                    <img className="w3-col" alt={tagName}/>
                    <div className="w3-rest"></div>
                </div>
                )
            }
        </div>
    );
}


/**
 * Builds a page from the given pageInfo and tiles
 * @param pageInfo {PageInfo} The page information for making the title and page-level tags
 * @param tiles {Tile[]} The tiles to display on the page
 * @return {JSX.Element} The page JSX DIV element
 */
function buildPage(pageInfo, tiles){

    pageInfo.pageName = pageInfo.pageName.split("/").join("");
    return <div id="tileHolder" className={`w3-display-container ${tileStyles.tileHolder}`} style={pageInfo.holderStyle}>
        {buildTags(pageInfo, true)}
        {
            tiles.map((tile, i) =>{
                let contentTypeClass = tile.gallery ? tileStyles.galleryTileContent :
                    !tile.thumbnail ? tileStyles.textOnlyTileContent : "";
                let className = `w3-container w3-row ${tileStyles.displayTile}`;
                let titleClass = `${tileStyles.displayTileTitle} ${tile.gallery ? tileStyles.galleryTileTitle : ""}`;
                let imageClass = tile.gallery ? tileStyles.galleryTileThumbnail : "";

                return <div className={className} key={pageInfo.pageName+"Tile"+i} style={tile.style}>
                    {tile.thumbnail ?
                        <div className={`w3-mobile w3-col ${tileStyles.displayTileThumbnail} ${imageClass}`}>
                            <img src={tile.thumbnail} alt='gitLogo'/>
                        </div> : null}
                    <div className={`w3-mobile ${tileStyles.displayTileContent} ${contentTypeClass}`}>
                        {tile.titleLink ?
                            <a className={titleClass} href={tile.titleLink}><u>{HTMLReactParser(tile.title)}</u></a> :
                            <b className={titleClass}>{HTMLReactParser(tile.title)}</b>}
                        <br/>
                        {tile.content ?
                            <span>
                                {tile.latex ? <Latex>{tile.content}</Latex> : HTMLReactParser(tile.content)}
                            </span> : null}
                        {buildTags(tile)}
                    </div>
                </div>;
            })
        }
    </div>;
}


export {buildPage, PageInfo, Tile};
