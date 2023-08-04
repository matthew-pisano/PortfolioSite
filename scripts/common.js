import $ from 'jquery';
import { babbleLoop } from './utils';
import 'katex/dist/katex.min.css';
import { masterFileSystem, pageRegistry } from './fileSystem';


let tilePositions = null;
let sidebarOpen = true;
let pageLoaded = false;
let sidebarMax = 215;
let sidebarMin = 50;
let folderIndent = "0px";
let menuBindings = {
    "fileButton": "fileDropdown",
    "editButton": "editDropdown",
    "helpButton": "helpDropdown",
    "contactButton": "contactDropdown",
};
let activeEditor = undefined;
let selectedPageId = undefined;

function toggleSidebar(animate=true){
    document.getElementById("collapseSidebar").innerText = sidebarOpen ? ">" : "<";
    if(sidebarOpen){
        $(".sidebarItem").invisible();
        document.getElementById("sidebarContent").style.display = "none";
        document.getElementById("sidebar").classList.remove("openSidebar");
        document.getElementById("explorerTitle").style.display = "none";
        document.getElementById("collapseHolder").classList.remove("openSidebar");
        document.getElementById("pageHolder").classList.remove("smallInvisible");
        $("#sidebarContent").animate({"width": "0px"}, animate ? 200 : 0);
    }
    else{
        document.getElementById("sidebarContent").style.display = "block";
        $("#sidebarContent").animate({"width": "100%"}, animate ? 200 : 0);
        document.getElementById("sidebar").classList.add("openSidebar");
        document.getElementById("collapseHolder").classList.add("openSidebar");
        document.getElementById("pageHolder").classList.add("smallInvisible");
        document.getElementById("explorerTitle").style.display = "inline";
        $(".sidebarItem").visible();
    }

    for(let tag of [".page", "#terminalHolder", ".titleCard", "#fileEditor"])
        $(tag).animate({"margin-left": (sidebarOpen ? sidebarMin : sidebarMax)+"px"}, animate ? 200 : 0);
    sidebarOpen = !sidebarOpen;
}

function updatePageMetadata(pageName = "", lines = 0, size = 0){
    document.getElementById("linesStatus").innerText = `${lines} Lines`;
    document.getElementById("sizeStatus").innerText = `${size}B`;
    document.getElementById("itemStatus").innerText = pageName;
    document.getElementById("langStatus").innerText = "HTML";
    document.getElementById("encodingStatus").innerText = "UTF-8";
}

function showPage(pageId, isLanding = false, replaceLocation = true){
    console.log("Showing page "+pageId);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    tilePositions = null;
    const elements = document.querySelectorAll('.page');
    Array.from(elements).forEach((element, index) => {
        if(element.id !== pageId+"Page") 
            element.style.display = "none";
    });

    if(pageId){
        selectedPageId = pageId;

        if(replaceLocation) 
            //window.history.pushState({"page": pageId}, null, pageId);
            location.href = pageId;
            return;

        document.getElementById("siteTitle").innerText = pageRegistry[pageId].name;
        let pageElem = document.getElementById("__next");
        
        /*if(!pageElem){
            console.log("No element found for page "+pageId);
            updatePageMetadata();
            return;
        }*/
        //pageElem.style.display = "block";

        let files = document.getElementsByClassName("sidebarItem");
        for(let i=0; i<files.length; i++)
            files[i].classList.remove("selectedSideItem");
        let fileElem = document.getElementById(pageId+"-File");
        if(fileElem) fileElem.classList.add("selectedSideItem");

        document.getElementById("fileEditor").style.display = "none";
        let lineNum = pageElem.innerHTML.split(/\r\n|\r|\n/).length;
        updatePageMetadata(pageRegistry[pageId].name, Math.max(lineNum-1, 1), pageElem.innerHTML.length);
        if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 600 && !isLanding && pageLoaded && sidebarOpen)
            toggleSidebar();

        if(selectedPageId === "babble") babbleLoop();
    }
}

function init() {
    console.log("Loading page...");

    /*let startId = newFile("start.html", false);
    setFileContent(startId, startStr);
    let parsed = scriptParse(pages[startId].content, true);
    document.getElementById(startId+"Page").innerHTML = parsed.content;
    eval(parsed.scripts);*/

    document.body.addEventListener('click', (evt) => {
        for(let [buttonId, dropId] of Object.entries(menuBindings)){
            if(evt.target.id !== buttonId)
                $("#"+dropId).hide(0);
        }
        if(evt.target.id !== "customRename" && document.getElementById("customRename"))
            finishRenaming(selectedPageId, document.getElementById("customRename").value);
    }, true);

    let editorContent = document.getElementById("editorContent");
    editorContent.addEventListener('input', (event) => {
        let editorContent = document.getElementById("editorContent");
        setFileContent(activeEditor, editorContent.innerText.replace("\t", "    "));
        if(editorContent.innerText.length > 0){
            let pageElem = document.getElementById(activeEditor+"Page");
            let lineNum = pageElem.innerHTML.split(/\r\n|\r|\n/).length;
            document.getElementById("linesStatus").innerText = (lineNum > 1 ? lineNum-1 : 1)+" Lines";
            document.getElementById("sizeStatus").innerText = pageElem.innerHTML.length+"B";
        }
        refreshLineNums();
    });
    
    pageLoaded = true;
}

if (typeof window !== "undefined") {

    $.fn.visible = function() {
        return this.css('visibility', 'visible');
    };
    
    $.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    // Bind to window for global reference
    // window.showPage = showPage;

    init();

    window.onscroll = (event) => {
        if(document.getElementById(selectedPageId+"TileHolder") === null) return;
        if(tilePositions === null)
            tilePositions = {};
        let tiles = document.getElementById(selectedPageId+"TileHolder").children;
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
    };

    /* View in fullscreen */
    window.openFullscreen = () => {
        console.log("Entering void");
        if (document.documentElement.requestFullscreen)
            document.documentElement.requestFullscreen();
        else if (document.documentElement.webkitRequestFullscreen) /* Safari */
            document.documentElement.webkitRequestFullscreen();
        else if (document.documentElement.msRequestFullscreen) /* IE11 */
            document.documentElement.msRequestFullscreen();
        document.getElementById("enterVoid").style.display = "none";
        document.getElementById("exitVoid").style.display = "block";
    };
    
    /* Close fullscreen */
    window.closeFullscreen = () => {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.webkitExitFullscreen) /* Safari */
            document.webkitExitFullscreen();
        else if (document.msExitFullscreen) /* IE11 */
            document.msExitFullscreen();
        document.getElementById("exitVoid").style.display = "none";
        document.getElementById("enterVoid").style.display = "block";
    };
}

  
export {$, showPage, folderIndent, toggleSidebar, init};