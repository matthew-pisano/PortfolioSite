import React from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/w3.css';
import './common.css';
import $ from 'jquery';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';
import {v4} from "uuid";
const jQuery = $;

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
let customNames = {};
let collapseSidebar;
jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
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
    const elements = document.querySelectorAll('.page');
    Array.from(elements).forEach((element, index) => {
        element.style.display = "none";
    });
    if(page)
        document.getElementById(page).style.display = "block";
}
function setActiveEditor(active){
  activeEditor = active;
  const elements = document.querySelectorAll('.activePage');
    Array.from(elements).forEach((element, index) => {
        element.style.display = !activeEditor ? "block" : "none";
    });

  document.getElementById("fileEditor").style.display = !activeEditor ? "none" : "block";
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
  let div = document.createElement("DIV");
  div.className = "sidebarItem w3-row";
  div.style.marginLeft = "10px";
  div.appendChild(document.createElement("IMG"));
  let button = document.createElement("BUTTON");
  button.className = "w3-button lightText";
  let count = "";
  let takenNames = [];
  for(let id in customNames){
    console.log("Id: "+id);
    takenNames.push(customNames[id].name);
  }
  while(takenNames.includes("new"+count+".html")){
      if(count === "") count = 1;
      else count ++;
  }
  let fileName = "new"+count+".html";
  let fileId = v4();
  div.id = fileId+"-customContainer";
  customNames[""+fileId] = {name: fileName, content: ""};
  button.innerText = fileName;
  button.onclick = () => {
    console.log("selecetd file: "+fileId);
    selectedFile = fileId;
    showPage("customPage");
    if(customNames[fileId].content.length > 0)
      document.getElementById("customPage").innerHTML = customNames[fileId].content;
    else
      document.getElementById("customPage").innerHTML = '<p style="margin: auto; background-color: #de3a3d">This page is Empty! Edit its content to fill the void!</p>';
    setActiveEditor();
  };
  div.appendChild(button);
  let editImg = document.createElement("IMG");
  editImg.src = "github.png";
  editImg.onclick = () => {
      document.getElementById("editorContent").innerText = customNames[fileId].content;
      refreshLineNums();
      setActiveEditor(fileId);
  };
  div.appendChild(editImg);
  document.getElementById("publicContent").appendChild(div);
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
    console.log("Key: "+evt.key)
    if(""+evt.key === "Enter"){
      console.log("New Name: "+customRename.value);
      customNames[selectedFile].name = customRename.value;
      customFile.innerText = customRename.value+".html";
      
      activeContainer.innerHTML = '';
      activeContainer.appendChild(customFileIcon);
      activeContainer.appendChild(customFile);
      activeContainer.appendChild(customEdit);
    }
  }
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
      customNames[activeEditor].content = editorContent.innerText.replace("\t", "    ");
      refreshLineNums();
  });
}
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
}

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
