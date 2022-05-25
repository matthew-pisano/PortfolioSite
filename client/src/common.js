import $ from 'jquery';
import React from 'react';
import {v4} from 'uuid';
import startStr from './Start';
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
    mipsCmd: {name: "mipsCmd.html"},
    inception: {name: "inception.html"},
    neural: {name: "neural.html"},
    chipFiring: {name: "chipFiring.html"},
    videntium: {name: "videntium.html"},
    anonHires: {name: "anonHires.html"},
    start: {name: "start.html"},
};
let customStasis = {
    activeContainer: null, 
    customRename: null, 
    customFileIcon: null, 
    customFile: null, 
    customEdit: null
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
function build(pageInfo, tiles){
    return <div id="tileHolder" className="inner w3-display-container" style={pageInfo.holderStyle}>
        {pageInfo.title ? 
            <h1 className="" style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1> :
            <div className="w3-row">
                {pageInfo.gitLink ?
                    <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col" alt='gitLink'/>
                        <a className="w3-col" href={pageInfo.gitLink} target="_blank" rel="noreferrer">{pageInfo.gitTitle ? pageInfo.gitTitle : pageInfo.title}</a>
                    </div> : <span></span>
                }
                {pageInfo.paperLink ?
                    <div className="paperLink w3-row w3-mobile w3-col"><img className="w3-col" alt='paperLink'/>
                        <a className="w3-col" href={pageInfo.paperLink} target="_blank" rel="noreferrer">{pageInfo.paperTitle ? pageInfo.paperTitle : pageInfo.title}</a>
                    </div> : <span></span>
                }
                {pageInfo.tags.map((tag, i) => 
                    <div className={"w3-col tag "+tag+"Tag w3-mobile"} key={tag}><img className="w3-col" alt={tag}/><span className="w3-col"></span></div>)
                }
            </div>
        }
        {
            tiles.map((tile, i) =>{
                //console.log("Mapping tile "+i);
                if(!tile.tags) tile.tags = [];
                let contentStyle = tile.thumbnail && !(tile.type === "gallery") ? {} : {width: "100%"};
                let imgStyle = tile.thumbnail && !(tile.type === "gallery") ? {} : {display: "block", margin: "auto"};
                let displayWidth = tile.type === "gallery" ? "row" : "col";
                return <div id={"tile"+i} className="displayTile w3-container w3-row" key={"tile"+i}>
                    {tile.thumbnail ? <img className={`w3-${displayWidth} w3-mobile`} src={tile.thumbnail} alt='gitLogo' style={imgStyle}/> : <span></span>}
                    <div className={`w3-${displayWidth} w3-mobile`} style={contentStyle}>
                        {tile.title && tile.title.startsWith("#") ? <h2><b>{tile.title.replace("#", "")}</b></h2> : tile.title ? <p><b>{tile.title}</b></p> : <span></span>}
                        <p dangerouslySetInnerHTML={{__html: tile.content}}></p>
                        {tile.gitLink ?
                            <div className="gitLink w3-row w3-mobile w3-col"><img className="w3-col" alt='gitLink'/><a className="w3-col" href={tile.gitLink} target="_blank" rel="noreferrer">{tile.gitTitle ? tile.gitTitle : tile.title}</a></div> : <span></span>
                        }
                        {tile.tags.map((tag, i) => 
                            <div className={"w3-col tag "+tag+"Tag w3-mobile"} key={tag}><img className="w3-col" alt={tag}/><span className="w3-col"></span></div>)
                        }
                    </div>
                </div>;
            })
        }
    </div>;
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
        if(!pageElem){
            document.getElementById("linesStatus").innerText = "0 Lines";
            document.getElementById("sizeStatus").innerText = "0B";
            document.getElementById("itemStatus").innerText = pages[page].name;
            document.getElementById("langStatus").innerText = "HTML";
            document.getElementById("encodingStatus").innerText = "UTF-8";
            return;
        }
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
    let editorContent = document.getElementById("editorContent");
    if(activeEditor)
        eval(scriptParse(pages[activeEditor].content).scripts);
    /*if(activeEditor)
        setFileContent(activeEditor, editorContent.innerText.replace("\t", "    "));*/
    activeEditor = active;
    console.log("Setting active editor to "+activeEditor);
    const elements = document.querySelectorAll('.activePage');
    Array.from(elements).forEach((element, index) => {
        element.style.display = !activeEditor ? "block" : "none";
    });
    document.getElementById("fileEditor").style.display = activeEditor ? "block" : "none";
    if(!activeEditor) {
        editorContent.innerHTML = "1";
        editorContent.innerHTML = "";
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
function newFile(fileName){
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
    if(!fileName) fileName = "new"+count+".html";
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
    document.getElementById("customContent").appendChild(explorerDiv);
    document.getElementById("wrapperContent").appendChild(customFileDiv);
    button.onclick();
    return fileId;
}
function setFileContent(fileId, content){
    pages[fileId].content = content;
    document.getElementById(fileId+"Page").innerHTML = scriptParse(pages[fileId].content.replace("<body", "<div").replace("</body>", "</div>")).content;
}
function scriptParse(content){
    let cutContent = content;
    let scripts = "";
    //console.log("Parsing script: "+content);
    while(cutContent.includes("<script")){
        let scriptStart = cutContent.indexOf(">", cutContent.indexOf("<script"))+1;
        if(scriptStart === 0) {
            cutContent = cutContent.replace("<script", "");
            continue;
        }
        let scriptEnd = cutContent.indexOf("</script>", scriptStart);
        scripts += cutContent.substring(scriptStart, scriptEnd);
        if(!scripts.endsWith(";")) scripts += ";";
        //Remove script from html
        cutContent = cutContent.slice(0, cutContent.indexOf("<script")) + cutContent.slice(scriptEnd+9);
    }
    //console.log(cutContent, scripts);
    return {content: cutContent, scripts: scripts};
}
function renameActive(){
    console.log("renaming: "+selectedFile);
    customStasis.activeContainer = document.getElementById(selectedFile+"-customContainer");
    customStasis.customFileIcon = customStasis.activeContainer.children[0];
    customStasis.customFile = customStasis.activeContainer.children[1];
    customStasis.customEdit = customStasis.activeContainer.children[2];
    customStasis.activeContainer.innerHTML = '';
    let customRename = document.createElement("INPUT");
    customRename.id = "customRename";
    customRename.className = "w3-input";
    customRename.style.backgroundColor = "#2a2b2c";
    customRename.style.height = "25px";
    customRename.style.color = "azure";
    customRename.onkeyup = (evt) => {
        //console.log("Key: "+evt.key);
        if(""+evt.key === "Enter")
            finishRenaming(customRename);
    };
    customStasis.activeContainer.appendChild(customRename);
    customRename.focus();
}
function finishRenaming(customRename){
    if(customStasis.activeContainer === null) return;
    if(customRename.value === "") customRename.value = pages[selectedFile].name;
    console.log("New Name of "+selectedFile+": "+customRename.value);
    pages[selectedFile].name = customRename.value.endsWith(".html") ? customRename.value : customRename.value+".html";
    document.getElementById("pageTitle").innerText = pages[selectedFile].name;
    customStasis.customFile.innerText = customRename.value;
    
    customStasis.activeContainer.innerHTML = '';
    customStasis.activeContainer.appendChild(customStasis.customFileIcon);
    customStasis.activeContainer.appendChild(customStasis.customFile);
    customStasis.activeContainer.appendChild(customStasis.customEdit);
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
    let startId = newFile("start.html");
    setFileContent(startId, startStr);
    showPage("home");
    document.getElementById("newAction").onclick = () => {
        $("#fileDropdown").fadeToggle();
        newFile();
    };
    document.getElementById("renameAction").onclick = () => {
        $("#editDropdown").fadeToggle();
        renameActive();
    };
    document.body.addEventListener('click', (evt) => {
        $("#fileDropdown").fadeOut();
        $("#editDropdown").fadeOut();
        if(evt.target.id !== "customRename")
            finishRenaming(document.getElementById("customRename"));
    }, true); 
    let editorContent = document.getElementById("editorContent");
    editorContent.addEventListener('input', (event) => {
        let editorContent = document.getElementById("editorContent");
        setFileContent(activeEditor, editorContent.innerText.replace("\t", "    "));
        //pages[activeEditor].content = editorContent.innerText.replace("\t", "    ");
        if(editorContent.innerText.length > 0){
            //document.getElementById(activeEditor+"Page").innerHTML = pages[activeEditor].content;
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
export {$, showPage, build};