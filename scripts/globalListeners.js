import $ from 'jquery';


/**
 * Keeps track of the current tile positions
 * @type {{string: {isOffset: boolean, default: string, initial: boolean}}}
 */
let tilePositions = {};

/**
 * Whether the menu bar is primed for animation by clicking it
 * @type {boolean}
 */
let primedMenuBar = false;

function setMenuBarPrimed(newStatus) {
    primedMenuBar = newStatus;
}

function isMenuBarPrimed() {
    return primedMenuBar;
}


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
 * Closes all dropdown menus and context menus when the user clicks outside of them
 * @param evt {MouseEvent} The click event
 */
function onGlobalClick(evt) {
    for(let elem of document.getElementsByClassName("menuDropdown"))
        elem.style.display = "none";
    primedMenuBar = false;
}

/**
 * Prevents the default behavior of dragging and dropping
 * @param evt {DragEvent} The drag event
 */
function onGlobalDrop(evt) {
    evt.preventDefault();
}

/**
 * Prevents the default behavior of dragging over
 * @param evt {DragEvent} The drag event
 */
function onGlobalDragOver(evt) {
    evt.preventDefault();
}


// Add the global listeners to the document
if (typeof window !== "undefined") {
    document.documentElement.addEventListener('click', onGlobalClick, true);
    document.body.addEventListener('drop', onGlobalDrop, false);
    document.body.addEventListener('dragover', onGlobalDragOver, false);
    window.onscroll = (event) => {slideTilesOnScroll();};
}

export {setMenuBarPrimed, isMenuBarPrimed};
