import React from "react";
import HTMLReactParser from 'html-react-parser';
import Latex from 'react-latex-next';


/**
 * A class for creating a tile to display on a page
 */
class Tile {

    /**
     * @param title {string} The title of the tile
     * @param content {string} The content of the tile
     * @param thumbnail {string} The thumbnail image for the tile
     * @param gallery {boolean} Whether the tile is a gallery
     * @param imgStyle {object} The style of the image
     * @param tags {string[]} The tags for the tile
     * @param gitLink {string} The link to the git repository
     * @param gitTitle {string} The title of the git repository link
     * @param extraLinks {string[]} Extra links to display
     * @param extraTitles {string[]} The titles of the extra links
     * @param titleLink {string} The link that the title should go to
     * @param style {object} The style of the tile
     * @param latex {boolean} Whether the content should be rendered as latex
     */
    constructor(title, content, thumbnail = "", gallery = false, imgStyle = {}, tags = [], gitLink = "", gitTitle = "", extraLinks = [], extraTitles = [], titleLink = "", style = {}, latex = false){
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.thumbnail = thumbnail;
        this.gallery = gallery;
        this.style = style;
        this.imgStyle = imgStyle;
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

    let tagClasses = (dark ? "darkTag ": "") + "w3-mobile w3-row w3-col";
    return (
        <div className="w3-row">
            {tile.gitLink ?
                <div className={"gitLink "+tagClasses}>
                    <img className="w3-col" alt='gitLink'/>
                    <div className="w3-rest"><a href={tile.gitLink} target="_blank" rel="noreferrer">
                        {tile.gitTitle ? tile.gitTitle : tile.title}
                    </a></div>
                </div> : null
            }
            {tile.extraLinks ?
                tile.extraLinks.map((extraLink, i) => {
                return  <div className={"extraLink "+tagClasses} key={'extraLink'+tile.extraTitles[i]}>
                        <img className="w3-col" alt='extraLink'/>
                    <div className="w3-rest"><a href={extraLink} target="_blank" rel="noreferrer">
                        {tile.extraTitles[i]}
                    </a></div>
                </div>;
                }) : null
            }
            {(tile.tags ? tile.tags : []).map((tag, i) =>
                <div className={"w3-col tag "+tag+"Tag w3-mobile"} key={tag}>
                    <img className="w3-col" alt={tag}/>
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
    return <div id="tileHolder" className="w3-display-container" style={pageInfo.holderStyle}>
        {buildTags(pageInfo, true)}
        {
            tiles.map((tile, i) =>{

                if(!tile.tags) tile.tags = [];
                let contentStyle = tile.thumbnail && !tile.gallery ? {} : {width: "100%", marginTop: "10px"};
                let imgStyle = tile.imgStyle ? tile.imgStyle : {};
                let displayWidth = !tile.gallery ? "col" : "row";
                let tileStyle = tile.style ? tile.style : {};
                let titleId = pageInfo.pageName+"Tile"+i+"Title";

                let titleElement;
                let titleStyle = !tile.gallery ? {} : {display: "block", margin: "auto", textAlign: "center"};
                if(tile.title.startsWith("#")) titleElement = <h2><b id={titleId}>{HTMLReactParser(tile.title.substring(1))}</b></h2>;
                else titleElement = <b id={titleId} style={titleStyle}>{HTMLReactParser(tile.title)}</b>;

                if(tile.titleLink)
                    titleElement = <a href={tile.titleLink}><u>{titleElement}</u></a>;

                let titleContent = tile.content && tile.latex ? <Latex>{tile.content}</Latex> : tile.content ? HTMLReactParser(tile.content) : "";
                let tileContentElem = tile.content ? <span id={pageInfo.pageName+"Tile"+i+"Content"} style={{margin: "15px 0px", display: "block"}}>{titleContent}</span> : <></>;
                let className = "displayTile w3-container w3-row"+(tile.gallery ? " galleryTile" : "");

                return <div id={pageInfo.pageName+"Tile"+i} className={className} key={pageInfo.pageName+"Tile"+i} style={tileStyle}>
                    
                    {tile.thumbnail ? <img className={`w3-${displayWidth} w3-mobile`} src={tile.thumbnail} alt='gitLogo' style={imgStyle}/> : null}

                    <div className={`w3-${displayWidth} w3-mobile`} style={contentStyle}>
                        <span>{titleElement}</span><br/>
                        {tileContentElem}
                        {buildTags(tile)}
                    </div>
                </div>;
            })
        }
    </div>;
}


export { buildPage, PageInfo, Tile };
