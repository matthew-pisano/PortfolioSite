let contentHtml = `
<style>
    .centered {
        width: 100%;
        margin: auto;
        text-align: center;
    }
    li:hover {
        background-color: #2a2a2a;
    }
</style>
<body style="background-color: #3a3a3a">
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
</body>
<script>
    console.log("helloe");
    let strong = "doodee";
    function tester(){
        document.getElementById("lister").innerHTML = "Hello JavaScript!";
    }
    console.log(tester);
    document.getElementById("lister").onclick = tester;
</script>
`;

export default contentHtml;