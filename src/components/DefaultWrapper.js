import styles from "@/styles/Wrapper.module.css";
import PropTypes from "prop-types";
import {buildPage} from "@/lib/pageBuilder";
import Wrapper from "@/components/Wrapper";
import React, {useEffect} from "react";
import $ from 'jquery';


/**
 * Keeps track of the current tile positions
 * @type {{string: {isOffset: boolean, default: string, initial: boolean}}}
 */
let tilePositions = {};


/**
 * Slides the tiles into view as the user scrolls down the page
 */
function slideTilesOnScroll() {
    let tileHolder = document.getElementById("tileHolder");
    if(!tileHolder) return;

    let tiles = tileHolder.children;
    // For each tile, check if it is in view
    for(let tileElement of tiles){

        if(tileElement.id === "") continue;
        let tile = document.getElementById(tileElement.id);
        let defaultMargin = 3;
        // If the tile is not in the tile positions, add it
        if(tilePositions[tileElement.id] === undefined)
            tilePositions[tileElement.id] = {isOffset: false, default: defaultMargin, initial: true};

        let viewportOffset = tile.getBoundingClientRect();
        let top = viewportOffset.top;
        let jTile = $("#"+tileElement.id);
        // If the tile is in view and offset, slide it into view
        if(top <= window.innerHeight && tilePositions[tileElement.id].isOffset){
            jTile.animate({"margin-left": tilePositions[tileElement.id].default+"%"}, {duration: 700, queue: false});
            let rightMargin = window.innerWidth < 600 ? 0 : 20;
            jTile.animate({"margin-right": rightMargin+"px"}, {duration: 700, queue: false});
            tilePositions[tileElement.id].isOffset = false;
        }
        // Sides the tile off screen if it is out of view as the page initially loads
        else if(top > window.innerHeight && !tilePositions[tileElement.id].isOffset && tilePositions[tileElement.id].initial){
            jTile.animate({"margin-left": "90%"}, 0);
            jTile.animate({"margin-right": "-87%"}, 0);
            tilePositions[tileElement.id].isOffset = true;
            tilePositions[tileElement.id].initial = false;
        }
    }
}


/**
 * Default wrapper for pages that do not need any special handling.
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @param tiles {Tile[]} Tiles to be displayed on the page
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function DefaultWrapper({pageInfo, tiles}) {

    useEffect(() => {
        window.onscroll = slideTilesOnScroll;
    }, []);

    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1><br/>
                <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>{pageInfo.summary}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </Wrapper>
    );
}
DefaultWrapper.propTypes = { pageInfo: PropTypes.any, tiles: PropTypes.array };


export default DefaultWrapper;
