import React, { useEffect } from "react";

import { Tile } from "@/components/Tiles";
import Wrapper from "@/components/Wrapper";
import { buildTags, PageInfo, TileInfo } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";

/**
 * Generate a random string of text
 * @param len {number} Length of the string to generate
 * @return {string} Random string of text
 */
function randText(len) {
    let randStr = "";
    let alphabet = "aaaaabcdeeeeeefghhhiiiijklmnnnopqrsttttttuvwxyz         '";
    while (randStr.length < len) randStr += alphabet[Math.floor(Math.random() * alphabet.length)];
    return randStr;
}

/**
 * Pulses the background between different shades of red
 */
async function backgroundGradient() {
    let grayDirection = 2;
    let grayState = 0;

    while (true) {
        // Update background with red bias
        let redBias = Math.log(grayState) + 20;
        document.getElementById("wrapperContent").style.backgroundColor =
            "rgba(" + (grayState + redBias) + ", " + (grayState - redBias) + ", " + (grayState - redBias) + ")";

        // Update the brightness of the background
        grayState += grayDirection;
        if (grayState >= 40) grayDirection = -2;
        else if (grayState <= 0) grayDirection = 2;
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}

/**
 * Babbler function to generate random text and update the page tiles with it in an infinite loop
 */
async function babelTilesStep() {
    // Update the title card with random text
    document.getElementsByClassName(styles.titleCard)[0].children[0].children[0].innerText = randText(
        Math.floor(Math.random() * 5) + 10
    );

    let radii = ["10px", "20px", "50px"];
    let pageTiles = document.getElementsByClassName(tileStyles.displayTile);
    for (let tile of pageTiles) {
        tile.style.borderRadius = radii[Math.floor(Math.random() * radii.length)];
        let titleElem = tile.children[0].children[0];

        if (!titleElem.classList.contains("forceWrap")) titleElem.classList.add("forceWrap");
        let contentElem = tile.children[0].children[1];
        if (!contentElem.classList.contains("forceWrap")) contentElem.classList.add("forceWrap");

        // Add random text to the tile
        titleElem.innerHTML = randText(Math.floor(Math.random() * 20) + 10);
        contentElem.innerHTML = randText(Math.floor(Math.random() * 300) + 100);
        titleElem.style.fontSize = Math.floor(Math.random() * 15) + 15 + "px";
        contentElem.style.fontSize = Math.floor(Math.random() * 10) + 10 + "px";
        for (let i = 0; i < Math.floor(Math.random() * 5); i++)
            contentElem.innerHTML += "<br><br>&nbsp;" + randText(Math.floor(Math.random() * 400) + 100);
    }
}

/**
 * Infinite loop to update the page with random text
 */
async function babbleLoop() {
    backgroundGradient();

    while (true) {
        await babelTilesStep();
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
}

export default function Babble() {
    let pageInfo = new PageInfo("babble", "", "", { backgroundColor: "#5a3afa00" }, ["help"]);

    // Start the babble loop when the page loads
    useEffect(() => {
        babbleLoop();
    }, []);

    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1 style={{ margin: "auto", width: "auto", textAlign: "center" }}>
                    <b></b>
                </h1>
                <br />
            </div>
            <div
                id="tileHolder"
                className={`w3-display-container ${tileStyles.tileHolder}`}
                style={pageInfo.holderStyle}>
                {buildTags(pageInfo.tags, pageInfo.links, true)}
                <Tile tileInfo={new TileInfo({ title: <>_</> })}></Tile>
                <Tile tileInfo={new TileInfo({ title: <>_</> })}></Tile>
                <Tile tileInfo={new TileInfo({ title: <>_</> })}></Tile>
                <Tile tileInfo={new TileInfo({ title: <>_</> })}></Tile>
                <Tile tileInfo={new TileInfo({ title: <>_</> })}></Tile>
            </div>
        </Wrapper>
    );
}
