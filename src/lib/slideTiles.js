import $ from "jquery";


/**
 * Keeps track of the current tile positions
 * @type {{string: {isOffset: boolean, default: string, initial: boolean}}}
 */
let slideTiles = {};


/**
 * Slides the tiles into view as the user scrolls down the page
 */
function slideTilesOnScroll() {
    let tileHolder = document.getElementById("tileHolder");
    if (!tileHolder) return;

    let tiles = tileHolder.children;
    // For each tile, check if it is in view
    for (let tileElement of tiles) {

        if (tileElement.id === "") continue;
        let tile = document.getElementById(tileElement.id);
        let defaultMargin = 3;
        // If the tile is not in the tile positions, add it
        if (slideTiles[tileElement.id] === undefined)
            slideTiles[tileElement.id] = {isOffset: false, default: defaultMargin, initial: true};

        let viewportOffset = tile.getBoundingClientRect();
        let top = viewportOffset.top;
        let jTile = $("#" + tileElement.id);
        // If the tile is in view and offset, slide it into view
        if (top <= window.innerHeight && slideTiles[tileElement.id].isOffset) {
            jTile.animate({"margin-left": slideTiles[tileElement.id].default + "%"}, {duration: 700, queue: false});
            let rightMargin = window.innerWidth < 600 ? 0 : 20;
            jTile.animate({"margin-right": rightMargin + "px"}, {duration: 700, queue: false});
            slideTiles[tileElement.id].isOffset = false;
        }
        // Sides the tile off screen if it is out of view as the page initially loads
        else if (top > window.innerHeight && !slideTiles[tileElement.id].isOffset && slideTiles[tileElement.id].initial) {
            jTile.animate({"margin-left": "90%"}, 0);
            jTile.animate({"margin-right": "-87%"}, 0);
            slideTiles[tileElement.id].isOffset = true;
            slideTiles[tileElement.id].initial = false;
        }
    }
}

export {slideTilesOnScroll};
