import React, { useEffect, useState } from 'react';
import {buildPage, PageInfo, Tile} from '../scripts/pageBuilder';
import Wrapper from '../scripts/wrapper';


const authQuotes = ["You appear to have been misinformed.", "You're not from around here, ain't ya?",
        "Curiosity killed the cat.", "You have somehow found this webpage, not intended for you.",
        "The darkest pit of this server has opened up to swallow you whole ... so don't keep the errors waiting, old friend.",
        "Danger!  Keep out!", "A riddle wrapped in a mystery inside an enigma.", "You shall not pass.",
        "There is a way out planned for you.", "All your base are belong to us", "I'm sorry, Dave.  I'm afraid I can't do that.",];


function Unauthorized() {

    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(authQuotes[Math.floor(Math.random()*authQuotes.length)]);
    }, []);

    let tiles = [
        new Tile(
            "We have detected an unauthorized access attempt",
            `You either do not have the permissions to view the requested page or your authorization
                token has expired.  If the latter is the case, attempt to re-authenticate and access the
                path through the original means.  If the former is the case, you do not belong here.
                Searching in areas that you are not meant to go serves the good of nobody.`
        ),
        new Tile(
            "Back to Safety",
            "", "", false, {}, [], "", "", [], [],
            "home",
            {backgroundColor: "#225799", textAlign: "center", fontSize: "20px"}
        ),
    ];
    let pageInfo = new PageInfo(
        "403",
        "Forbidden",
        quote,
        {backgroundColor: "#000000"}
    );
    return (<Wrapper pageName={pageInfo.pageName}>
        <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b style={{color: "#ff0000"}}>{pageInfo.title}</b></h1><br/>
                <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>{pageInfo.summary}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
}


export default Unauthorized;