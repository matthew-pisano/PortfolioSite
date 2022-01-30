import React from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/w3.css';
import './common.css';
import $ from 'jquery';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';
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
  while(customNames["new"+count+".html"] !== undefined){
      if(count === "") count = 1;
      else count ++;
  }
  let fileName = "new"+count+".html";
  customNames[fileName] = "";
  button.innerText = fileName;
  button.onclick = () => {
    showPage("customPage");
    document.getElementById("customPage").innerHTML = customNames[fileName];
    setActiveEditor();
  };
  div.appendChild(button);
  let editImg = document.createElement("IMG");
  editImg.src = "github.png";
  editImg.onclick = () => {
      document.getElementById("editorContent").innerText = customNames[fileName];
      refreshLineNums();
      setActiveEditor(fileName);
  };
  div.appendChild(editImg);
  document.getElementById("publicContent").appendChild(div);
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
  document.getElementById("bioFile").onclick = () => {
  };
  document.getElementById("helpFile").onclick = () => {
  };
  document.getElementById("newAction").onclick = () => {
    $("#fileDropdown").fadeToggle();
    newFile();
  };
  let editorContent = document.getElementById("editorContent");
  editorContent.addEventListener('input', (event) => {
      customNames[activeEditor] = editorContent.innerText.replace("\t", "    ");
      refreshLineNums();
  });
}
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
