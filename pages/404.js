import React, { useEffect, useState } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import {Wrapper} from '../scripts/wrapper';


const lostQuotes = ['How did we get here?', 'Not all who wander are lost...', 
        `"General AI will be humanity's last, greatest invention.  After that, we can only hope that its goals align with ours."`,
        'Why is everything chrome?', '"There is little difference between being lost and exploring." -Don Eldon',
        'Onward!  Into the great unknown...', '"Our only true failure would be to not explore at all." -Ernest Shackleton',
        '"Only those who will risk going too far can possibly know how far one can go." -T.S. Eliot',
        "I'm not taking myself too seriously, you're taking my seriousness too seriously.",
        "I have a feeling that you're ... right where you want to be"];


const PageNotFound = () => {

    const [quote, setQuote] = useState();
    const [location, setLocation] = useState();

    useEffect(() => {
        setQuote(lostQuotes[Math.floor(Math.random()*lostQuotes.length)]);
        setLocation(window.location.href);
    }, []);

    function nextLink() {
        let rand = Math.random() + 1;
        if(rand > 1.1) return "/"+rand.toString(36).substring(6);
        return "/babble";
    }

    let tiles = [
        {
            title: "Something's Not Right",
            content: `The page <i style="background-color: #454545; border-radius: 4px">'${location}'</i>
            does not seem to exist.  These are uncharted waters, it would be wise to return home.<br><br>
            ...This your last chance.  After this there is no turning back.  You take the blue pill, the story ends.
            You wake up in your bed and believe whatever you want to. You take the red pill, you stay in Wonderland, 
            and I show you how deep the rabbit hole goes.  Remember, all I'm offering is the truth.  Nothing more.`
        },
        {
            title: "Back to Safety",
            titleLink: "home",
            content: ``,
            style: {backgroundColor: "#225799", textAlign: "center", fontSize: "20px"}
        },
        {
            title: "Continue Onwards",
            titleLink: nextLink(),
            content: ``,
            style: {backgroundColor: "#9e1111", backgroundImage: 'url("/matrix.gif")', textAlign: "center", fontSize: "20px"}
        },
    ];
    let pageInfo = {
        pageName: "404",
        holderStyle: {backgroundColor: "#000000", borderRadius: "10px"},
        tags: ["help"]
    };
    
    return (<Wrapper pageName={pageInfo.pageName}>
        <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Page Not Found</b></h1><br/>
                <h3 id="quote" style={{margin: "auto", width: "auto", textAlign: "center"}}>{quote}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
};

export default PageNotFound;