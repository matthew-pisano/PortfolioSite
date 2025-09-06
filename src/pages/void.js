import React, { useEffect } from "react";

import styles from "@/styles/Terminal.module.css";

export default function Void() {
    useEffect(() => {
        document.body.style.height = "100%";
        document.getElementById("__next").style.height = "100%";
        // Set window title
        document.title = "How did we get here?";
    }, []);

    /* View in fullscreen */
    function openFullscreen() {
        console.log("Entering void");
        if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
        else if (document.documentElement.webkitRequestFullscreen)
            /* Safari */
            document.documentElement.webkitRequestFullscreen();
        else if (document.documentElement.msRequestFullscreen)
            /* IE11 */
            document.documentElement.msRequestFullscreen();
        document.getElementById("enterVoid").style.display = "none";
        document.getElementById("exitVoid").style.display = "block";
    }

    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) /* Safari */ document.webkitExitFullscreen();
        else if (document.msExitFullscreen) /* IE11 */ document.msExitFullscreen();
        document.getElementById("exitVoid").style.display = "none";
        document.getElementById("enterVoid").style.display = "block";
    }

    return (
        <div style={{ height: "100%" }}>
            <div className={`${styles.void}`}></div>
            <div
                id="exitVoid"
                className={`${styles.voidControl}`}
                style={{ display: "none" }}
                onClick={closeFullscreen}>
                [EXIT]
            </div>
            <div id="enterVoid" className={`${styles.voidControl}`} onClick={openFullscreen}>
                [ENTER]
            </div>
        </div>
    );
}
