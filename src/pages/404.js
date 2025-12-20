import React, { useEffect, useState } from "react";

import Link from "next/link";

import Wrapper, { PageInfo } from "@/components/Wrapper";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";

const lostQuotes = [
    "How did we get here?",
    "Not all who wander are lost...",
    `"General AI will be humanity's last, greatest invention.  After that, we can only hope that its goals align with ours."`,
    "Why is everything chrome?",
    '"There is little difference between being lost and exploring." -Don Eldon',
    "Onward!  Into the great unknown...",
    '"Our only true failure would be to not explore at all." -Ernest Shackleton',
    '"Only those who will risk going too far can possibly know how far one can go." -T.S. Eliot',
    "I'm not taking myself too seriously, you're taking my seriousness too seriously.",
    "I have a feeling that you're ... right where you want to be",
    "It's dangerous to go alone, take this: 🗡️",
    "Nobody expects the Spanish Inquisition!!",
    "Lerroooyyyyy Jeeennnkkkinnnssss!",
    "What did Ilya see...?",
    "You know, I used to be an adventurer like you, but then I took an arrow to the knee"
];

export default function PageNotFound() {
    const [quote, setQuote] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        setQuote(lostQuotes[Math.floor(Math.random() * lostQuotes.length)]);
        setLocation(window.location.href);
    }, []);

    function nextLink() {
        let rand = Math.random() + 1;
        if (rand > 1.1) return "/" + rand.toString(36).substring(6);
        return "/babble";
    }

    let pageInfo = new PageInfo("404", "Page Not Found", quote, { backgroundColor: "#000000" }, ["help"]);

    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1 style={{ margin: "auto", width: "auto", textAlign: "center" }}>
                    <b style={{ color: "#ff0000" }}>{pageInfo.title}</b>
                </h1>
                <br />
                <h3 style={{ margin: "auto", width: "auto", textAlign: "center" }}>{pageInfo.summary}</h3>
            </div>
            <div
                className={`w3-display-container ${tileStyles.tileHolder}`}
                style={{ backgroundColor: "#000000", marginTop: "200px" }}>
                <div className={`w3-container w3-row ${tileStyles.displayTile}`}>
                    <h3>
                        <b>Something&apos;s Not Right</b>
                    </h3>
                    <span style={{ margin: "15px 0px", display: "block" }}>
                        The page <i style={{ backgroundColor: "#454545", borderRadius: "4px" }}>{location}</i> does not
                        seem to exist. These are uncharted waters, it would be wise to return home.
                        <br />
                        <br />
                        ...this your last chance. After this there is no turning back. You click the blue link, the
                        story ends. You wake up in your bed and believe whatever you want to. You click the red link,
                        you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I&apos;m
                        offering is the truth. Nothing more.
                    </span>
                </div>
                <Link
                    className={`w3-container w3-row ${tileStyles.displayTile} ${tileStyles.choiceTile} ${tileStyles.confirmTile}`}
                    href="/home">
                    <b>Back to Safety</b>
                </Link>
                <Link
                    className={`w3-container w3-row ${tileStyles.displayTile} ${tileStyles.choiceTile} ${tileStyles.denyTile}`}
                    href={nextLink()}>
                    <b>Continue Onwards</b>
                </Link>
            </div>
        </Wrapper>
    );
}
