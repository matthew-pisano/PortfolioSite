function setActiveEditor(active){
    let editorContent = document.getElementById("editorContent");
    if(activeEditor){
        let parsed = scriptParse(pages[activeEditor].content, true);
        document.getElementById(activeEditor+"Page").innerHTML = parsed.content;
        eval(parsed.scripts);
    }
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
function newFile(fileName, openOnCreate = true){
    console.log("Creating file:", fileName);
    let takenNames = [];
    for(let id in pages){
        console.log("Id: "+id);
        takenNames.push(pages[id].name);
    }
    let count = "";
    while(takenNames.includes("new"+count+".html")){
        if(count === "") count = 1;
        else count ++;
    }
    if(!fileName) fileName = "new"+count+".html";

    let customFileDiv = document.createElement("DIV");
    customFileDiv.className = "page container w3-rest lightText";
    customFileDiv.style.display = "none";
    customFileDiv.style.marginTop = "35px";
    let explorerDiv = document.createElement("DIV");
    explorerDiv.className = "sidebarItem w3-row";
    explorerDiv.style.marginLeft = folderIndent;
    let icon = document.createElement("IMG");
    icon.className = "htmlIcon";
    explorerDiv.appendChild(icon);
    let button = document.createElement("BUTTON");
    button.className = "w3-button lightText";
    
    let pageId = "custom-"+v4();
    explorerDiv.id = pageId+"-File";
    customFileDiv.id = pageId+"Page";
    if(sidebarOpen)
        customFileDiv.style.marginLeft = sidebarMax+"px";
    else
        customFileDiv.style.marginLeft = sidebarMax+"px";
    pages[pageId] = {name: fileName, content: `<p style="margin: auto; background-color: #de3a3d">
        This page is Empty! Edit its content with the '<img class="editButton" style="width: 15px; margin: 0px">' icon to fill the void!</p>`};
    customFileDiv.innerHTML += pages[pageId].content;
    button.innerText = fileName;
    button.onclick = () => {
        console.log("selected file: "+pageId);
        selectedPageId = pageId;
        showPage(pageId, false, false);
        setActiveEditor();
    };
    explorerDiv.appendChild(button);
    let editImg = document.createElement("IMG");
    editImg.className = "editButton";
    editImg.onclick = () => {
        document.getElementById("editorContent").innerText = pages[pageId].content;
        refreshLineNums();
        setActiveEditor(pageId);
    };
    explorerDiv.appendChild(editImg);
    document.getElementById("customContent").appendChild(explorerDiv);
    document.getElementById("pageHolder").appendChild(customFileDiv);
    navHierarchy("/home/guest/public/custom")[0].subTree.push({name: fileName});
    if(openOnCreate) {
        button.onclick();
        toggleSidebar(false);
        toggleSidebar(false);
    }
    return pageId;
}
function setFileContent(pageId, content){
    pages[pageId].content = content;
    document.getElementById(pageId+"Page").innerHTML = scriptParse(pages[pageId].content).content;
}
function scriptParse(content, prepareScripts){
    let cutContent = content;
    let scripts = "";
    //console.log("Parsing script: "+content);
    let styleString = cutContent.substring(cutContent.indexOf("<style")+6, cutContent.indexOf("</style>"));
    cutContent = cutContent.replace(styleString, styleString.replace("body{", "#_bodyDiv_{"));
    while(cutContent.includes("<script")){
        let scriptStart = cutContent.indexOf(">", cutContent.indexOf("<script"))+1;
        if(scriptStart === 0) {
            cutContent = cutContent.replace("<script", "");
            continue;
        }
        let scriptEnd = cutContent.indexOf("</script>", scriptStart);
        scripts += cutContent.substring(scriptStart, scriptEnd);
        if(!scripts.trimEnd().endsWith(";")) scripts += ";";

        //Remove script from html
        cutContent = cutContent.slice(0, cutContent.indexOf("<script")) + cutContent.slice(scriptEnd+9);
    }
    cutContent = cutContent.replace('<body', '<div id="_bodyDiv_"').replace("</body>", "</div>");
    if(prepareScripts){
        //console.log(cutContent);
        while(cutContent.includes('onclick="')){
            let onclick = cutContent.substring(cutContent.indexOf('onclick="')+9, cutContent.indexOf('"', cutContent.indexOf('onclick="')+9));
            console.log("Got onclick: "+onclick);
            let clickId = v4();
            cutContent = cutContent.replace('onclick="'+onclick+'"', 'clicktag="'+clickId+'"');
            console.log(`'[clicktag="`+clickId+`"]'`);
            scripts += `console.log(document.querySelectorAll('ul'), document.querySelectorAll('[clicktag="`+clickId+`"]'));`;
            scripts += `document.querySelectorAll('[clicktag="`+clickId+`"]')[0].onclick = () => {`+onclick+`};`;
        }
        return {content: cutContent, scripts: scripts};
    }
    //console.log(cutContent, scripts);
    return {content: cutContent, scripts: null};
}
function renameActive(pageId){
    if(!pageId) pageId = selectedPageId;
    if(!pageId.startsWith("custom-")) return;
    console.log("renaming: "+pageId);
    stasis.container = document.getElementById(pageId+"-File");
    stasis.icon = stasis.container.children[0];
    stasis.expFile = stasis.container.children[1];
    stasis.edit = stasis.container.children[2];
    stasis.container.innerHTML = '';
    let customRename = document.createElement("INPUT");
    customRename.id = "customRename";
    customRename.className = "w3-input";
    customRename.style.backgroundColor = "#2a2b2c";
    customRename.style.height = "25px";
    customRename.style.color = "azure";
    customRename.onkeyup = (evt) => {
        //console.log("Key: "+evt.key);
        if(""+evt.key === "Enter")
            finishRenaming(selectedPageId, customRename.value);
    };
    if(!sidebarOpen) toggleSidebar();
    stasis.container.appendChild(customRename);
    customRename.focus();
}
function finishRenaming(pageId, newName){
    console.log("Renaming "+pageId+" as "+newName);
    if(!pageId) pageId = selectedPageId;
    if(newName) {
        // Rename the file within the hierarchy
        newName = newName.endsWith(".html") ? newName : newName+".html";
        let customList = navHierarchy("/home/guest/public/custom")[0].subTree;
        for(let i=0; i<customList.length; i++){
            if(customList[i].name === pages[pageId].name){
                customList[i].name = newName;
                break;
            }
        }
    }
    else newName = pages[pageId].name;
    console.log("New Name of "+pageId+": "+newName, pages);
    // Rename in pages
    pages[pageId].name = newName;
    document.getElementById("siteTitle").innerText = pages[pageId].name;
    if(!stasis.container) 
        stasis.container = document.getElementById(pageId+"-File");
    console.log(stasis.container);
    console.log(navHierarchy("/home/guest/public/custom")[0].subTree);
    if(stasis.container.children.length >= 3){
        stasis.icon = stasis.container.children[0];
        stasis.expFile = stasis.container.children[1];
        stasis.edit = stasis.container.children[2];
    }
    stasis.container.innerHTML = '';
    stasis.container.appendChild(stasis.icon);
    stasis.container.appendChild(stasis.expFile);
    stasis.container.appendChild(stasis.edit);
    stasis.container.children[1].innerText = newName;
    stasis = {container: null};
}
function removeFile(pageId){
    if(pageId){
        console.log("Removing "+pageId);
        if(!pageId) pageId = selectedPageId;
        let customList = navHierarchy("/home/guest/public/custom")[0].subTree;
        // Remove file from the hierarchy
        for(let i=0; i<customList.length; i++){
            if(customList[i].name === pages[pageId].name){
                customList.splice(i, 1);
                break;
            }
        }
        // Remove from pages
        delete pages[pageId];
        // Remove from explorer
        document.getElementById(pageId+"-File").remove();
        showPage("home");
    }
}

export {newFile, finishRenaming, removeFile};