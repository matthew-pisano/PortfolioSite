//import * as index from './index.js';
let tilePositions = null;
let sidebarOpen = false;
let sidebarMax = "200px";
let menuBindings = {
    "fileButton": "fileDropdown",
    "editButton": "editDropdown",
    "helpButton": "helpDropdown"
};
let activeEditor = undefined;
let customNames = {};
let $ = index.$;
$.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

window.onload = () => {
    let collapseSidebar = document.getElementById("collapseSidebar");
    collapseSidebar.onclick = index.toggleSidebar;

    let menuItems = document.getElementsByClassName("menuItem");
    for(let menuItem of menuItems){
        menuItem.onclick = () => {
            $("#"+menuBindings[menuItem.id]).fadeToggle();
        };
    }
    index.toggleSidebar();
    document.getElementById("homeFile").onclick = () => {
        window.location.replace("/home");
    };
    document.getElementById("simplexFile").onclick = () => {
        window.location.replace("/simplex");
    };
    document.getElementById("bioFile").onclick = () => {
        window.location.replace("/bio");
    };
    document.getElementById("helpFile").onclick = () => {
        window.location.replace("/help");
    };
    document.getElementById("newAction").onclick = () => {
        $("#fileDropdown").fadeToggle();
        index.newFile();
    };
    let editorContent = document.getElementById("editorContent");
    editorContent.addEventListener('input', (event) => {
        customNames[activeEditor] = editorContent.innerText.replace("\t", "    ");
        index.refreshLineNums();
    });
    index.showPage("home");
};
window.onscroll = (e) => {
    if(document.getElementById("tileHolder") === null) return;
    if(tilePositions === null)
        tilePositions = {};
    let tiles = document.getElementById("tileHolder").children;
    let aboveBottom = 0;
    for(let tileElement of tiles){
        if(tileElement.id === "") continue;
        let tile = document.getElementById(tileElement.id);
        if(tilePositions[tileElement.id] === undefined)
            tilePositions[tileElement.id] = {isOffset: false, default: "5%", initial: true};
        
        let viewportOffset = tile.getBoundingClientRect();
        let top = viewportOffset.top;
        if(top <= window.innerHeight && tilePositions[tileElement.id].isOffset){
            aboveBottom ++;
            $("#"+tileElement.id).animate({"margin-left": tilePositions[tileElement.id].default}, 700);
            tilePositions[tileElement.id].isOffset = false;
        }
        else if(top > window.innerHeight && !tilePositions[tileElement.id].isOffset && tilePositions[tileElement.id].initial){
            $("#"+tileElement.id).animate({"margin-left": "90%"}, 0);
            tilePositions[tileElement.id].isOffset = true;
            tilePositions[tileElement.id].initial = false;
        }
    }
    //console.log(aboveBottom);
};