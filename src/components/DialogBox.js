import React from "react";

import styles from "@/styles/DialogBox.module.css";

function DialogBox() {
    return (
        <div id="dialogBox" className={`${styles.dialogBox}`}>
            <img id="dialogBoxIcon" className={`${styles.dialogBoxIcon}`} src="/assets/personal.png" alt="" />
            <span id="dialogBoxTitle" className={`${styles.dialogBoxTitle}`}></span>
            <p id="dialogBoxBody"></p>
        </div>
    );
}

export default DialogBox;
