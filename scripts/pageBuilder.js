import React from "react";
import HTMLReactParser from 'html-react-parser';
import Latex from 'react-latex-next';

function buildTags(tags, dark= false){
    let tagClasses = (dark ? "darkTag ": "") + "w3-row w3-mobile w3-col";
    return (
        <div className="w3-row">
            {tags.gitLink ?
                <div className={"gitLink "+tagClasses}>
                    <img className="w3-col" alt='gitLink'/>
                    <a className="w3-col" href={tags.gitLink} target="_blank" rel="noreferrer">{tags.gitTitle ? tags.gitTitle : tags.title}</a>
                </div> : null
            }
            {tags.extraLinks ?
                tags.extraLinks.map((extraLink, i) => {
                return  <div className={"extraLink "+tagClasses} key={'extraLink'+tags.extraTitles[i]}>
                        <img className="w3-col" alt='extraLink'/>
                        <a className="w3-col" href={extraLink} target="_blank" rel="noreferrer">{tags.extraTitles[i]}</a>
                    </div>;
                }) : null
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
        {buildTags(pageInfo, true)}
        {pageInfo.title ? 
            <h1 className="pageTitle" style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1> : null}
        {
            tiles.map((tile, i) =>{
                //console.log("Mapping tile "+i);
                if(!tile.tags) tile.tags = [];
                let contentStyle = tile.thumbnail && !tile.gallery ? {} : {width: "100%"};
                let imgStyle = tile.thumbnail && !tile.gallery ? {} : {display: "block", margin: "auto", width: "90%", maxWidth: "800px"};
                let displayWidth = !tile.gallery ? "col" : "row";
                let tileStyle = tile.style ? tile.style : !tile.gallery ? {} : {width: "75%", maxWidth: "850px", marginRight: "auto", marginLeft: "auto"};
                let titleId = pageInfo.pageName+"Tile"+i+"Title";

                let titleElement;
                let titleStyle = !tile.gallery ? {} : {display: "block", margin: "auto", textAlign: "center"};
                if(tile.title.startsWith("#")) titleElement = <h2><b id={titleId}>{HTMLReactParser(tile.title.substring(1))}</b></h2>;
                else titleElement = <b id={titleId} style={titleStyle}>{HTMLReactParser(tile.title)}</b>;

                if(tile.titleLink){
                    let gotoLink = () => {window.location.replace(tile.titleLink);};
                    titleElement = <u style={{cursor: "pointer"}} onClick={gotoLink}>
                        {titleElement}
                    </u>;
                }
                let titleContent = tile.content && tile.latex ? <Latex>{tile.content}</Latex> : tile.content ? HTMLReactParser(tile.content) : "";
                let tileContentElem = tile.content ? <span id={pageInfo.pageName+"Tile"+i+"Content"} style={{margin: "15px 0px", display: "block"}}>{titleContent}</span> : <></>;


                return <div id={pageInfo.pageName+"Tile"+i} className="displayTile w3-container w3-row" key={pageInfo.pageName+"Tile"+i} style={tileStyle}>
                    
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

export { buildPage };