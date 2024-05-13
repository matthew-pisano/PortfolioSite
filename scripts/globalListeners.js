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
    let tileHolder = document.getElementsByClassName("tileHolder")[0];
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
            jTile.animate({"margin-right": "20px"}, {duration: 700, queue: false});
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
 * Closes all dropdown menus and context menus when the user clicks outside of them
 * @param evt {MouseEvent} The click event
 */
function onGlobalClick(evt) {
    for(let elem of document.getElementsByClassName("menuDropdown"))
        elem.style.display = "none";

    if(!evt.target.className.includes("contextMenu"))
        for(let elem of document.getElementsByClassName("contextMenu"))
            elem.remove();
}


/**
 * Closes all context menus when the user right-clicks outside of them
 * @param evt {MouseEvent} The context menu event
 */
function onGlobalContextMenu(evt) {
    if (!evt.target.className.includes("contextMenu"))
        for (let elem of document.getElementsByClassName("contextMenu"))
            elem.remove();
}


// Add the global listeners to the document
if (typeof window !== "undefined") {
    document.documentElement.addEventListener('click', onGlobalClick, true);
    document.body.addEventListener('contextmenu', onGlobalContextMenu, true);
    window.onscroll = (event) => {slideTilesOnScroll();};
}
