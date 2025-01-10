import React, {useEffect} from 'react';

import Wrapper from '@/components/Wrapper';
import {buildPage, PageInfo, Tile} from '@/lib/pageBuilder';
import styles from "@/styles/Wrapper.module.css";


/**
 * Generate a random string of text
 * @param len {number} Length of the string to generate
 * @return {string} Random string of text
 */
function randText(len){
    let randStr = "";
    let alphabet = "aaaaabcdeeeeeefghhhiiiijklmnnnopqrsttttttuvwxyz         '";
    while(randStr.length < len) randStr += alphabet[Math.floor(Math.random()*alphabet.length)];
    return randStr;
}


/**
 * Pulses the background between different shades of red
 */
async function backgroundGradient() {
    let grayDirection = 2;
    let grayState = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        // Update background with red bias
        let redBias = Math.log(grayState) + 20;
        document.getElementById("wrapperContent").style.backgroundColor = "rgba(" + (grayState + redBias) + ", " + (grayState - redBias) + ", " + (grayState - redBias) + ")";

        // Update the brightness of the background
        grayState += grayDirection;
        if (grayState >= 40) grayDirection = -2;
        else if (grayState <= 0) grayDirection = 2;
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}


/**
 * Babbler function to generate random text and update the page tiles with it in an infinite loop
 */
async function babelTilesStep(){
    // Update the title card with random text
    document.getElementsByClassName(styles.titleCard)[0].children[0].children[0].innerText = randText(Math.floor(Math.random()*5)+10);

    let radii = ["10px", "20px", "50px"];
    let tileIndex = 0;
    // For each tile on the page
    while(document.getElementById("babbleTile"+tileIndex+"Title")) {

        document.getElementById("babbleTile"+tileIndex).style.borderRadius = radii[Math.floor(Math.random()*radii.length)];
        let titleElem = document.getElementById("babbleTile"+tileIndex+"Title");

        if(!titleElem.classList.contains("forceWrap")) titleElem.classList.add("forceWrap");
        let contentElem = document.getElementById("babbleTile"+tileIndex).children[0].children[2];
        if(!contentElem.classList.contains("forceWrap")) contentElem.classList.add("forceWrap");

        // Add random text to the tile
        titleElem.innerHTML = randText(Math.floor(Math.random()*20)+10);
        contentElem.innerHTML = randText(Math.floor(Math.random()*300)+100);
        titleElem.style.fontSize = Math.floor(Math.random()*15)+15 + "px";
        contentElem.style.fontSize = Math.floor(Math.random()*10)+10 + "px";
        for (let i =0; i < Math.floor(Math.random()*5); i++)
            contentElem.innerHTML += "<br><br>&nbsp;" + randText(Math.floor(Math.random()*400)+100);
        tileIndex++;
    }
}


/**
 * Infinite loop to update the page with random text
 */
async function babbleLoop() {
    backgroundGradient();
    // eslint-disable-next-line no-constant-condition
    while(true){
        await babelTilesStep();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}


export default function Babble() {

    let tiles = [
        new Tile(<>_</>, <></>),
        new Tile(<>_</>, <></>),
        new Tile(<>_</>, <></>),
        new Tile(<>_</>, <></>),
        new Tile(<>_</>, <></>),
    ];
    let pageInfo = new PageInfo(
        "babble",
        "",
        "",
        {backgroundColor: "#5a3afa00"},
        ["help"]
    );

    // Start the babble loop when the page loads
    useEffect(() => {babbleLoop();}, []);

    return (<Wrapper pageName={pageInfo.pageName}>
        <div className={`${styles.titleCard}`}>
            <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b></b></h1><br/>
        </div>
        {buildPage(pageInfo, tiles)}
    </Wrapper>);
}
