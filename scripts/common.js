import $ from 'jquery';
import { babbleLoop } from './utils';
import 'katex/dist/katex.min.css';
import { masterFileSystem, pageRegistry } from './fileSystem';


let tilePositions = null;
let sidebarOpen = true;
let pageLoaded = false;

let folderIndent = "0px";
let menuBindings = {
    "fileButton": "fileDropdown",
    "editButton": "editDropdown",
    "terminalButton": "terminalDropdown",
    "helpButton": "helpDropdown",
    "contactButton": "contactDropdown",
};
let activeEditor = undefined;
let selectedPageId = undefined;

// TODO: Move this and other wrapper-related functions ot Wrapper


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
    // console.log("Loading page...");

    /*let startId = newFile("start.html", false);
    setFileContent(startId, startStr);
    let parsed = scriptParse(pages[startId].content, true);
    document.getElementById(startId+"Page").innerHTML = parsed.content;
    eval(parsed.scripts);*/

    document.documentElement.addEventListener('click', (evt) => {
        for(let elem of document.getElementsByClassName("menuDropdown"))
            elem.style.display = "none";
        if(!evt.target.className.includes("contextMenu"))
            for(let elem of document.getElementsByClassName("contextMenu"))
                elem.remove();


        if(evt.target.id !== "customRename" && document.getElementById("customRename"))
            finishRenaming(selectedPageId, document.getElementById("customRename").value);
    }, true);

    document.body.addEventListener('contextmenu', (evt) => {
        if (!evt.target.className.includes("contextMenu"))
            for (let elem of document.getElementsByClassName("contextMenu"))
                elem.remove();
    }, true);
    
    pageLoaded = true;
}

function slideTilesOnScroll() {
    let tileHolder = document.getElementsByClassName("tileHolder")[0];
    if(!tileHolder) return;

    if(tilePositions === null)
        tilePositions = {};
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

    window.onscroll = (event) => {slideTilesOnScroll();};

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

  
export {$, showPage, folderIndent, init};