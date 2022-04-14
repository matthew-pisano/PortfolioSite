import React from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/w3.css';
import './common.css';
import $ from 'jquery';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';
import {v4} from "uuid";

let tilePositions = null;
let sidebarOpen = false;
let sidebarMax = "200px";
let menuBindings = {
    "fileButton": "fileDropdown",
    "editButton": "editDropdown",
    "helpButton": "helpDropdown"
};
let activeEditor = undefined;
let selectedFile = undefined;
let customPages = {};
let pageInfo = {
  homePage: {
    pageLen: 404,
    pageType: "html"
  },
  imperiumPage: {
    pageLen: 404,
    pageType: "html"
  },
  simplexPage: {
    pageLen: 404,
    pageType: "html"
  },
  mipsCmdPage: {
    pageLen: 404,
    pageType: "html"
  }
};
let collapseSidebar;
$.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
function toggleSidebar(){
  if(sidebarOpen){
      collapseSidebar.innerText = ">";
      $(".sidebarItem").invisible();
      $("#sidebar").animate({"width": "60px"});
      $("#sidebarContent").animate({"width": "0px"});
      $(".page").animate({"margin-left": "60px"});
      $(".titleCard").animate({"margin-left": "60px"});
      $("#fileEditor").animate({"margin-left": "60px"});
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
    document.getElementById(page).style.display = "block";
    document.getElementById("fileEditor").style.display = "none";
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
  else{
      showPage();
  }
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
  for(let id in customPages){
    console.log("Id: "+id);
    takenNames.push(customPages[id].name);
  }
  while(takenNames.includes("new"+count+".html")){
      if(count === "") count = 1;
      else count ++;
  }
  let fileName = "new"+count+".html";
  let fileId = v4();
  explorerDiv.id = fileId+"-customContainer";
  customPages[fileId] = {name: fileName, content: ""};
  button.innerText = fileName;
  button.onclick = () => {
    console.log("selecetd file: "+fileId);
    selectedFile = fileId;
    showPage("customPage");
    if(customPages[fileId].content.length > 0)
      document.getElementById("customPage").innerHTML = customPages[fileId].content;
    else
      document.getElementById("customPage").innerHTML = '<p style="margin: auto; background-color: #de3a3d">This page is Empty! Edit its content to fill the void!</p>';
    document.getElementById("linesStatus").innerText = (customPages[fileId].content.split(/\r\n|\r|\n/).length-1)+" lines";
    document.getElementById("sizeStatus").innerText = customPages[fileId].content.length+"B";
    setActiveEditor();
  };
  explorerDiv.appendChild(button);
  let editImg = document.createElement("IMG");
  editImg.className = "editButton";
  editImg.onclick = () => {
    document.getElementById("editorContent").innerText = customPages[fileId].content;
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
      customPages[selectedFile].name = customRename.value;
      customFile.innerText = customRename.value+".html";
      
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

  document.getElementById("homeFile").onclick = () => {
    showPage("homePage");
  };
  document.getElementById("simplexFile").onclick = () => {
    showPage("simplexPage");
  };
  document.getElementById("imperiumFile").onclick = () => {
    showPage("imperiumPage");
  };
  document.getElementById("bioFile").onclick = () => {
  };
  document.getElementById("helpFile").onclick = () => {
  };
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
    document.getElementById(activeEditor).innerHTML = editorContent.innerText.replace("\t", "    ");
    customPages[activeEditor].content = editorContent.innerText.replace("\t", "    ");
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

ReactDOM.render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {
  collapseSidebar, $, newFile, refreshLineNums
};