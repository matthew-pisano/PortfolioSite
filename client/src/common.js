import $ from 'jquery';
import {v4} from "uuid";
$.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
let tilePositions = null;
let sidebarOpen = false;
let sidebarMax = "200px";
let sidebarMin = "50px";
let menuBindings = {
    "fileButton": "fileDropdown",
    "editButton": "editDropdown",
    "helpButton": "helpDropdown"
};
let activeEditor = undefined;
let selectedFile = undefined;
let pages = {
    home: {name: "home.html"},
    imperium: {name: "imperium.html"},
    simplex: {name: "simplex.html"},
    mipsCmd: {name: "mipsCmd.html"}
};
let collapseSidebar;
function toggleSidebar(){
    if(sidebarOpen){
        collapseSidebar.innerText = ">";
        $(".sidebarItem").invisible();
        $("#sidebar").animate({"width": sidebarMin});
        $("#sidebarContent").animate({"width": "0px"});
        $(".page").animate({"margin-left": sidebarMin});
        $(".titleCard").animate({"margin-left": sidebarMin});
        $("#fileEditor").animate({"margin-left": sidebarMin});
        sidebarOpen = false;
    }
    else{
        collapseSidebar.innerText = "<";
        $(".page").animate({"margin-left": sidebarMax});
        $(".titleCard").animate({"margin-left": sidebarMax});
        $("#fileEditor").animate({"margin-left": sidebarMax});
        $("#sidebarContent").animate({"width": "100%"});
        $("#sidebar").animate({"width": sidebarMax});
        $(".sidebarItem").visible();
        sidebarOpen = true;
    }
}
function showPage(page){
    console.log("Showing page "+page);
    const elements = document.querySelectorAll('.page');
    Array.from(elements).forEach((element, index) => {
        element.style.display = "none";
    });
    if(page){
        document.getElementById("pageTitle").innerText = pages[page].name;
        let pageElem = document.getElementById(page+"Page");
        if(!pageElem) return;
        pageElem.style.display = "block";
        document.getElementById("fileEditor").style.display = "none";
        let lineNum = pageElem.innerHTML.split(/\r\n|\r|\n/).length;
        document.getElementById("linesStatus").innerText = (lineNum > 1 ? lineNum-1 : 1)+" Lines";
        document.getElementById("sizeStatus").innerText = pageElem.innerHTML.length+"B";
        document.getElementById("itemStatus").innerText = pages[page].name;
        document.getElementById("langStatus").innerText = "HTML";
        document.getElementById("encodingStatus").innerText = "UTF-8";
    }
}
function setActiveEditor(active){
    activeEditor = active;
    console.log("Setting active editor to "+activeEditor);
    const elements = document.querySelectorAll('.activePage');
    Array.from(elements).forEach((element, index) => {
        element.style.display = !activeEditor ? "block" : "none";
    });
    document.getElementById("fileEditor").style.display = activeEditor ? "block" : "none";
    if(!activeEditor) {
        document.getElementById("editorLines").innerHTML = "1";
        document.getElementById("editorContent").innerHTML = "";
    }
    else
        showPage();
}
function refreshLineNums(){
    let lineNum = document.getElementById("editorContent").children.length;
    if(lineNum === 0) lineNum = 1;
    let editorLines = document.getElementById("editorLines");
    editorLines.innerHTML = "";
    for(let i=1; i<=lineNum; i++)
        editorLines.innerHTML += i+"<br>";
}
function newFile(){
    let customFileDiv = document.createElement("DIV");
    customFileDiv.className = "page container w3-rest lightText";
    customFileDiv.style.display = "none";
    customFileDiv.style.marginTop = "35px";
    let explorerDiv = document.createElement("DIV");
    explorerDiv.className = "sidebarItem w3-row";
    explorerDiv.style.marginLeft = "10px";
    let icon = document.createElement("IMG");
    icon.className = "htmlIcon";
    explorerDiv.appendChild(icon);
    let button = document.createElement("BUTTON");
    button.className = "w3-button lightText";
    let count = "";
    let takenNames = [];
    for(let id in pages){
        console.log("Id: "+id);
        takenNames.push(pages[id].name);
    }
    while(takenNames.includes("new"+count+".html")){
        if(count === "") count = 1;
        else count ++;
    }
    let fileName = "new"+count+".html";
    let fileId = v4();
    explorerDiv.id = fileId+"-customContainer";
    customFileDiv.id = fileId+"Page";
    if(sidebarOpen)
        customFileDiv.style.marginLeft = sidebarMax;
    else
        customFileDiv.style.marginLeft = sidebarMax;
    pages[fileId] = {name: fileName, content: ""};
    button.innerText = fileName;
    button.onclick = () => {
        console.log("selecetd file: "+fileId);
        selectedFile = fileId;
        showPage(fileId);
        setActiveEditor();
    };
    explorerDiv.appendChild(button);
    let editImg = document.createElement("IMG");
    editImg.className = "editButton";
    editImg.onclick = () => {
        document.getElementById("editorContent").innerText = pages[fileId].content;
        refreshLineNums();
        setActiveEditor(fileId);
    };
    explorerDiv.appendChild(editImg);
    document.getElementById("publicContent").appendChild(explorerDiv);
    document.getElementById("wrapperContent").appendChild(customFileDiv);
    button.onclick();
}
function renameActive(){
    console.log("renaming: "+selectedFile);
    let activeContainer = document.getElementById(selectedFile+"-customContainer");
    let customFileIcon = activeContainer.children[0];
    let customFile = activeContainer.children[1];
    let customEdit = activeContainer.children[2];
    activeContainer.innerHTML = '';
    let customRename = document.createElement("INPUT");
    customRename.id = "customRename";
    customRename.className = "w3-input";
    customRename.style.backgroundColor = "#2a2b2c";
    customRename.style.height = "25px";
    customRename.style.color = "azure";
    customRename.onkeyup = (evt) => {
        console.log("Key: "+evt.key);
        if(""+evt.key === "Enter"){
            console.log("New Name: "+customRename.value);
            pages[selectedFile].name = customRename.value.endsWith(".html") ? customRename.value : customRename.value+".html";
            document.getElementById("pageTitle").innerText = pages[selectedFile].name;
            customFile.innerText = customRename.value;
            
            activeContainer.innerHTML = '';
            activeContainer.appendChild(customFileIcon);
            activeContainer.appendChild(customFile);
            activeContainer.appendChild(customEdit);
        }
    };
    activeContainer.appendChild(customRename);
    customRename.focus();
}
window.onload = () => {
    collapseSidebar = document.getElementById("collapseSidebar");
    collapseSidebar.onclick = toggleSidebar;

    let menuItems = document.getElementsByClassName("menuItem");
    for(let menuItem of menuItems){
        menuItem.onclick = () => {
            $("#"+menuBindings[menuItem.id]).fadeToggle();
        };
    }
    toggleSidebar();
    showPage("home");
    document.getElementById("newAction").onclick = () => {
        $("#fileDropdown").fadeToggle();
        newFile();
    };
    document.getElementById("renameAction").onclick = () => {
        $("#editDropdown").fadeToggle();
        renameActive();
    };
    let editorContent = document.getElementById("editorContent");
    editorContent.addEventListener('input', (event) => {
        pages[activeEditor].content = editorContent.innerText.replace("\t", "    ");
        if(editorContent.innerText.length > 0){
            document.getElementById(activeEditor+"Page").innerHTML = pages[activeEditor].content;
            let pageElem = document.getElementById(activeEditor+"Page");
            let lineNum = pageElem.innerHTML.split(/\r\n|\r|\n/).length;
            document.getElementById("linesStatus").innerText = (lineNum > 1 ? lineNum-1 : 1)+" Lines";
            document.getElementById("sizeStatus").innerText = pageElem.innerHTML.length+"B";
        }
        else
            document.getElementById(activeEditor+"Page").innerHTML = '<p style="margin: auto; background-color: #de3a3d">This page is Empty! Edit its content to fill the void!</p>';
        refreshLineNums();
    });
};
window.onscroll = (event) => {
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
export {$, showPage};