import React, { useEffect, useState } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import {Wrapper} from '../scripts/wrapper';
import {DefaultWrapper} from "../scripts/defaultWrapper";


const lostQuotes = ['How did we get here?', 'Not all who wander are lost...', 
        `"General AI will be humanity's last, greatest invention.  After that, we can only hope that its goals align with ours."`,
        'Why is everything chrome?', '"There is little difference between being lost and exploring." -Don Eldon',
        'Onward!  Into the great unknown...', '"Our only true failure would be to not explore at all." -Ernest Shackleton',
        '"Only those who will risk going too far can possibly know how far one can go." -T.S. Eliot',
        "I'm not taking myself too seriously, you're taking my seriousness too seriously.",
        "I have a feeling that you're ... right where you want to be", "It's dangerous to go alone, take this: 🗡️",
        "Nobody expects the Spanish Inquisition!!", "Lerroooyyyyy Jeeennnkkkinnnssss!"];


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
        title: "Page Not Found",
        summary: quote,
        pageName: "404",
        holderStyle: {backgroundColor: "#000000"},
        tags: ["help"]
    };
    
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
};

export default PageNotFound;