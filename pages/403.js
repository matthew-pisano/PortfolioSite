import React, { useEffect, useState } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import {Wrapper} from '../scripts/wrapper';


const authQuotes = ["You appear to have been misinformed.", "You're not from around here, ain't ya?",
        "Curiosity killed the cat.", "You have somehow found this webpage, not intended for you.",
        "The darkest pit of this server has opened up to swallow you whole ... so don't keep the errors waiting, old friend.",
        "Danger!  Keep out!", "A riddle wrapped in a mystery inside an enigma.", "You shall not pass.",
        "There is a way out planned for you."];


const Anauthorized = () => {

    const [quote, setQuote] = useState();
    const [location, setLocation] = useState();

    useEffect(() => {
        setQuote(authQuotes[Math.floor(Math.random()*authQuotes.length)]);
        setLocation(window.location.href);
    }, []);

    let tiles = [
        {
            title: "We have detected an unauthorized access attempt",
            content: `You either do not have the permissions to view the requested page or your authorization
                token has expired.  If the later is the case, attempt to re-authenticate and access the
                path through the original means.  If the former is the case, you do not belong here.
                Searching in areas that you are not meant to go serves the good of nobody.`
        },
        {
            title: "Back to Safety",
            titleLink: "home",
            content: ``,
            style: {backgroundColor: "#225799", textAlign: "center", fontSize: "20px"}
        },
    ];
    let pageInfo = {
        pageName: "403",
        holderStyle: {backgroundColor: "#000000", borderRadius: "10px"},
    };
    
    return (<Wrapper pageName={pageInfo.pageName}>
        <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b style={{color: "#ff0000"}}>Forbidden</b></h1><br/>
                <h3 id="quote" style={{margin: "auto", width: "auto", textAlign: "center"}}>{quote}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
};

export default Anauthorized;