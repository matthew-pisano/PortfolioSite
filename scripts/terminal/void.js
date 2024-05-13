/**
 * This script is responsible for the void effect by setting the body to a void
 */
function addFullscreenEvents() {
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


/**
 * Sets the body to a void and allows the user to fullscreen the void
 */
async function *toVoid(){
    addFullscreenEvents();

    let voidStr = "I T - C O N S U M E S - A L L";
    await new Promise(resolve => setTimeout(resolve, 500));

    // Slowly print the void string
    for (let letter of voidStr) {
        yield letter;
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    // Replace the body with a void
    document.body.style.height = "100%";
    document.body.innerHTML = `<div class="void"></div>

        <div id="exitVoid" style="display:none; width: 100%; height: 50px; background-color: black; 
        position: fixed; bottom: 0px; color: azure; text-align: center; cursor: pointer"
        onClick="window.closeFullscreen()">[EXIT]</div>
        <div id="enterVoid" style="width: 100%; height: 50px; background-color: black; 
        position: fixed; bottom: 0px; color: azure; text-align: center; cursor: pointer"
        onClick="window.openFullscreen()">[ENTER]</div>`;
    document.getElementById("siteTitle").innerText = "How did we get here?";
}

export default toVoid;