import * as index from './index.js';
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

function toggleSidebar(){
    if(sidebarOpen){
        index.collapseSidebar.innerText = ">";
        $(".sidebarItem").invisible();
        $("#sidebar").animate({"width": "60px"});
        $("#sidebarContent").animate({"width": "0px"});
        $("#fileContent").animate({"margin-left": "60px"});
        $("#fileEditor").animate({"margin-left": "60px"});
        sidebarOpen = false;
    }
    else{
        index.collapseSidebar.innerText = "<";
        $("#fileContent").animate({"margin-left": sidebarMax});
        $("#fileEditor").animate({"margin-left": sidebarMax});
        $("#sidebarContent").animate({"width": "100%"});
        $("#sidebar").animate({"width": sidebarMax});
        $(".sidebarItem").visible();
        sidebarOpen = true;
    }
}
/*function setActiveEditor(active){
    activeEditor = active;
    document.getElementById("fileContent").style.display = !activeEditor ? "block" : "none";
    document.getElementById("fileEditor").style.display = !activeEditor ? "none" : "block";
    if(!activeEditor) {
        document.getElementById("editorLines").innerHTML = "1";
        document.getElementById("editorContent").innerHTML = "";
    }
}*/
/*function newFile(){
    let div = document.createElement("DIV");
    div.className = "sidebarItem w3-row";
    div.style.marginLeft = "10px";
    div.appendChild(document.createElement("IMG"));
    let button = document.createElement("BUTTON");
    button.className = "w3-button lightText";
    let count = "";
    while(customNames["new"+count+".html"] !== undefined){
        if(count === "") count = 1;
        else count ++;
    }
    let fileName = "new"+count+".html";
    customNames[fileName] = "";
    button.innerText = fileName;
    button.onclick = () => {
        document.getElementById("fileContent").innerHTML = customNames[fileName];
        setActiveEditor();
    };
    div.appendChild(button);
    let editImg = document.createElement("IMG");
    editImg.className = "htmlIcon";
    editImg.onclick = () => {
        document.getElementById("editorContent").innerText = customNames[fileName];
        refreshLineNums();
        setActiveEditor(fileName);
    };
    div.appendChild(editImg);
    document.getElementById("publicContent").appendChild(div);
}*/
window.onload = () => {
    let collapseSidebar = document.getElementById("collapseSidebar");
    collapseSidebar.onclick = toggleSidebar;

    let menuItems = document.getElementsByClassName("menuItem");
    for(let menuItem of menuItems){
        menuItem.onclick = () => {
            $("#"+menuBindings[menuItem.id]).fadeToggle();
        };
    }
    toggleSidebar();
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
    console.log(aboveBottom);
};