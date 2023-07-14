let contentHtml = `
<style id="styler">
    .centered {
        width: 100%;
        margin: auto;
        text-align: center;
    }
    li:hover {
        background-color: #2a2a2a;
        border-radius: 10px;
    }
    #lister {
        border-radius: 10px;
        background-color: #3a3a3a;
        /*repl*/
    }
    #styleButton{
        border: 2px solid #797979;
        background-color: #3a3a3a;
    }
    body{
        background-color: #4e61b8;
    }
</style>
<body>
    <h1 class="centered">Welcome</h1><br>
    <h3 class="centered">to the HTML editor!</h3>

    <ul id="lister" class="w3-ul w3-card-4" style="margin: 30px">
        <li><h3>About</h3>
            <p>As a programmer and a student, I am passionate about teaching others what I already know.
            I enjoy showing others how my projects work and how all of its components come together.</p>
            <p>In my opinion, the most effective way of learning programming is for one to program for themselves.
            This is the purpose of this editor, to now only showcase my abilities, but to allow anyone who views this
            site to try out the same skills that built this website in the first place, albeit much simpler.</p>
        </li>
        <li><h3>Getting Started</h3>
            <p>To create an editable file, navigate to <b>File &gt; New</b> in the top menu bar, it will appear close
            to this one in the 'custom' folder.</p>
            <p>To rename a file, navigate to <b>Edit &gt; Rename</b> in the top menu bar and the currently selected file will be renamed</p>
        </li>
        <li><h3>Editing</h3>
            <p>Hitting the edit button next to the file in the editor will enter the text editor for that file.  Here, you can
            edit the contents of the file using HTML, embedded CSS and embedded JavaScript.  Once you are done editing, click on any of the files
            in the editor to return to viewing mode.</p>
        </li>
    </ul>
    <button id="styleButton" class="w3-button" onclick="noCSS()">Click to remove CSS</button>
</body>
<script>
    let styler = document.getElementById("styler");
    let baseStyle = styler.innerHTML;
    let hasCSS = true;
    function noCSS(){
        if(hasCSS){
            hasCSS = false;
            styler.innerHTML = "#_bodyDiv_{background-color: white; color: black;}";
            document.getElementById("styleButton").innerText = "Click to add CSS";
        }
        else{
            hasCSS = true;
            styler.innerHTML = baseStyle;
            document.getElementById("styleButton").innerText = "Click to remove CSS";
        }
    }
    //document.getElementById("lister").onclick = tester;
    async function rotate(){
        let state = 3;
        while(true){
            await new Promise(r => setTimeout(r, 2000));
            //console.log("State: "+state);
            state ++
            if(hasCSS){
                if(state === 4){
                    state = 0;
                    styler.innerHTML = baseStyle.replace("/*repl*/", "border-bottom: 1px groove #797979;");
                }
                else if(state === 1)
                    styler.innerHTML = baseStyle.replace("/*repl*/", "border-right: 1px groove #797979;");
                else if(state === 2)
                    styler.innerHTML = baseStyle.replace("/*repl*/", "border-top: 1px groove #797979;");
                else if(state === 3)
                    styler.innerHTML = baseStyle.replace("/*repl*/", "border-left: 1px groove #797979;");
            }
            //console.log(styler.innerHTML);
        }
    }
    rotate();
</script>
`;

export default contentHtml;