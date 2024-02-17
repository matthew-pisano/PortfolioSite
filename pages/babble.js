import React, { useEffect } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import { Wrapper } from '../scripts/wrapper';
import {Constants} from "../scripts/utils";


let grayState = 30;
let grayDirection = 2;
let redBias = Math.log(grayState)+20;

function randText(len){
    let randStr = "";
    while(randStr.length < len) randStr += Constants.alphabet[Math.floor(Math.random()*Constants.alphabet.length)];
    return randStr;
}

async function babbler(){
    document.getElementsByClassName("titleCard")[0].children[0].children[0].innerText = randText(Math.floor(Math.random()*5)+10);

    let radii = ["10px", "20px", "50px", "75px"];
    let tileIndex = 0;
    while(document.getElementById("babbleTile"+tileIndex+"Title")) {

        document.getElementById("babbleTileHolder").style.borderRadius = radii[Math.floor(Math.random()*radii.length)];
        let titleElem = document.getElementById("babbleTile"+tileIndex+"Title");

        if(!titleElem.classList.contains("forceWrap")) titleElem.classList.add("forceWrap");
        let contentElem = document.getElementById("babbleTile"+tileIndex).children[0].children[2];
        if(!contentElem.classList.contains("forceWrap")) contentElem.classList.add("forceWrap");

        titleElem.innerHTML = randText(Math.floor(Math.random()*20)+10);
        contentElem.innerHTML = randText(Math.floor(Math.random()*300)+100);
        document.body.style.backgroundColor = "rgb("+(grayState+redBias)+", "+(grayState-redBias)+", "+(grayState-redBias)+")";

        grayState += grayDirection;
        redBias = Math.log(grayState)+20;
        if(grayState >= 200) grayDirection = -2;
        else if(grayState <= 30) grayDirection = 2;
        await new Promise(resolve => setTimeout(resolve, 500));
        tileIndex++;
    }
}

async function babbleLoop() {
    await new Promise(resolve => setTimeout(resolve, 200));
    console.log("Starting babble");
    // eslint-disable-next-line no-constant-condition
    while(true){
        babbler();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

const Babble = () => {
    let tiles = [
        {
            title: "_",
            content: ``
        },
        {
            title: "_",
            content: ``,
        },
        {
            title: "_",
            content: ``,
        },
        {
            title: "_",
            content: ``,
        }
    ];
    let pageInfo = {
        pageName: "babble",
        holderStyle: {backgroundColor: "#5a3afa00", borderRadius: "10px"},
        tags: ["help"]
    };

    useEffect(() => {
        babbleLoop();
    }, []);

    return (<Wrapper pageName={pageInfo.pageName}>
        <div className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b></b></h1><br/>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
};

export default Babble;