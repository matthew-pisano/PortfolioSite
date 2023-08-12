import React from "react";
import parse from 'html-react-parser';
import Latex from 'react-latex-next';
import { showPage } from "./common";

function buildTags(tags){
    return (
        <div className="w3-row">
            {tags.gitLink ?
                <div className="gitLink w3-row w3-mobile w3-col">
                    <img className="w3-col" alt='gitLink'/>
                    <a className="w3-col" href={tags.gitLink} target="_blank" rel="noreferrer">{tags.gitTitle ? tags.gitTitle : tags.title}</a>
                </div> : <span></span>
            }
            {tags.extraLinks ?
                tags.extraLinks.map((extraLink, i) => {
                return  <div className="extraLink w3-row w3-mobile w3-col" key={'extraLink'+tags.extraTitles[i]}>
                        <img className="w3-col" alt='extraLink'/>
                        <a className="w3-col" href={extraLink} target="_blank" rel="noreferrer">{tags.extraTitles[i]}</a>
                    </div>;
                }) : <span></span>
            }
            {(tags.tags ? tags.tags : []).map((tag, i) => 
                <div className={"w3-col tag "+tag+"Tag w3-mobile"} key={tag}>
                    <img className="w3-col" alt={tag}/>
                    <span className="w3-col"></span>
                </div>
                )
            }
        </div>
    );
}

function buildPage(pageInfo, tiles){
    pageInfo.pageName = pageInfo.pageName.split("/").join("");
    return <div id={pageInfo.pageName+"TileHolder"} className="tileHolder inner w3-display-container" style={pageInfo.holderStyle}>
        {buildTags(pageInfo)}
        {pageInfo.title ? 
            <h1 className="pageTitle" style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1> : <span></span>}
        {
            tiles.map((tile, i) =>{
                //console.log("Mapping tile "+i);
                if(!tile.tags) tile.tags = [];
                let contentStyle = tile.thumbnail && !(tile.type === "gallery") ? {} : {width: "100%"};
                let imgStyle = tile.thumbnail && !(tile.type === "gallery") ? {} : {display: "block", margin: "auto"};
                let displayWidth = tile.type === "gallery" ? "row" : "col";
                let tileStyle = tile.style ? tile.style : {};
                let titleId = pageInfo.pageName+"Tile"+i+"Title";

                let titleElement;
                if(tile.title.startsWith("#")) titleElement = <h2><b id={titleId}>{parse(tile.title.substring(1))}</b></h2>;
                else titleElement = <b id={titleId}>{parse(tile.title)}</b>;

                if(tile.titleLink){
                    let gotoLink = () => {window.location.replace(tile.titleLink);};
                    titleElement = <u style={{cursor: "pointer"}} onClick={gotoLink}>
                        {titleElement}
                    </u>;
                }

                let tileContent = parse(tile.content);
                if(tile.latex) tileContent = <Latex>{tile.content}</Latex>;

                return <div id={pageInfo.pageName+"Tile"+i} className="displayTile w3-container w3-row" key={pageInfo.pageName+"Tile"+i} style={tileStyle}>
                    
                    {tile.thumbnail ? <img className={`w3-${displayWidth} w3-mobile`} src={tile.thumbnail} alt='gitLogo' style={imgStyle}/> : <span></span>}

                    <div className={`w3-${displayWidth} w3-mobile`} style={contentStyle}>
                        <span>{titleElement}</span><br/>
                        <span id={pageInfo.pageName+"Tile"+i+"Content"} style={{margin: "15px 0px", display: "block"}}>{tileContent}</span>
                        {buildTags(tile)}
                    </div>
                </div>;
            })
        }
    </div>;
}

export { buildPage }