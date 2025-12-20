import React, { useEffect, useState } from "react";

import Link from "next/link";

import Wrapper, { PageInfo } from "@/components/Wrapper";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";


const authQuotes = [
    "You appear to have been misinformed.",
    "You're not from around here, ain't ya?",
    "Curiosity killed the cat.",
    "You have somehow found this webpage, not intended for you.",
    "The darkest pit of this server has opened up to swallow you whole ... so don't keep the errors waiting, old friend.",
    "Danger!  Keep out!",
    "A riddle wrapped in a mystery inside an enigma.",
    "You shall not pass.",
    "There is a way out planned for you.",
    "All your base are belong to us",
    "I'm sorry, Dave.  I'm afraid I can't do that."
];

export default function Unauthorized() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(authQuotes[Math.floor(Math.random() * authQuotes.length)]);
    }, []);

    let pageInfo = new PageInfo("403", "Forbidden", quote, { backgroundColor: "#000000" });
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
                        <b>We have detected an unauthorized access attempt</b>
                    </h3>
                    <span style={{ margin: "15px 0px", display: "block" }}>
                        You either do not have the permissions to view the requested page or your authorization token
                        has expired. If the latter is the case, attempt to re-authenticate and access the path through
                        the original means. If the former is the case, you do not belong here. Searching in areas that
                        you are not meant to go serves the good of nobody.
                    </span>
                </div>
                <Link
                    className={`w3-container w3-row ${tileStyles.displayTile} ${tileStyles.choiceTile} ${tileStyles.confirmTile}`}
                    href="/home">
                    <b>Back to Safety</b>
                </Link>
            </div>
        </Wrapper>
    );
}
