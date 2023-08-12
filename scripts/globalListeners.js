import $ from 'jquery';

let tilePositions = {};

function slideTilesOnScroll() {
    let tileHolder = document.getElementsByClassName("tileHolder")[0];
    if(!tileHolder) return;

    let tiles = tileHolder.children;
    for(let tileElement of tiles){
        if(tileElement.id === "") continue;
        let tile = document.getElementById(tileElement.id);
        if(tilePositions[tileElement.id] === undefined)
            tilePositions[tileElement.id] = {isOffset: false, default: "3%", initial: true};

        let viewportOffset = tile.getBoundingClientRect();
        let top = viewportOffset.top;
        if(top <= window.innerHeight && tilePositions[tileElement.id].isOffset){
            $("#"+tileElement.id).animate({"margin-left": tilePositions[tileElement.id].default}, 700);
            tilePositions[tileElement.id].isOffset = false;
        }
        else if(top > window.innerHeight && !tilePositions[tileElement.id].isOffset && tilePositions[tileElement.id].initial){
            $("#"+tileElement.id).animate({"margin-left": "90%"}, 0);
            tilePositions[tileElement.id].isOffset = true;
            tilePositions[tileElement.id].initial = false;
        }
    }
}


function onGlobalClick(evt) {
    for(let elem of document.getElementsByClassName("menuDropdown"))
        elem.style.display = "none";

    if(!evt.target.className.includes("contextMenu"))
        for(let elem of document.getElementsByClassName("contextMenu"))
            elem.remove();
}


function onGlobalContextMenu(evt) {
    if (!evt.target.className.includes("contextMenu"))
        for (let elem of document.getElementsByClassName("contextMenu"))
            elem.remove();
}


if (typeof window !== "undefined") {
    document.documentElement.addEventListener('click', onGlobalClick, true);
    document.body.addEventListener('contextmenu', onGlobalContextMenu, true);
    window.onscroll = (event) => {slideTilesOnScroll();};
}
