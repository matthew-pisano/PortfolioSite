import React from "react";

import Wrapper from "@/components/Wrapper";
import { buildPage, PageInfo, Tile, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { redact } from "@/lib/utils";
import styles from "@/styles/Wrapper.module.css";

let redactedDate = (
    <>
        {redact(4)}/{redact(4)}/{redact(4)}
    </>
);

export default function SCP() {
    let tiles = [
        new Tile(
            <>[EXTERNAL ARCHIVE]</>,
            (
                <>
                    Additional documentation and arrival material collected and organized by the foundation to aid in
                    cleanup efforts and ensuring another incident does not happen again.
                </>
            )
        ),
        new Tile(
            <>Special Containment Procedures</>,
            (
                <>
                    SCP-672{redact(4)} is to be kept at high-security Site-162, in a standard humanoid accommodation
                    chamber within a sector currently under the supervision of the {redact(10)}. Mobile Task Force unit{" "}
                    {redact(6)}-10 ("
                    {redact(12)}
                    "), is to be set on high alert and stationed no more than 5km away from the containment site at all
                    times.
                </>
            )
        ),
        new Tile(
            <>Description</>,
            (
                <>
                    SCP-672{redact(4)} was {redact(30)} as into {redact(60)}. Originally created as part of{" "}
                    <i>Project</i> {redact(10)} by the {redact(15)} research division of Mathesis International,{" "}
                    {redact(90)} after the initial incident. Researcher L{redact(6)} P{redact(6)} {redact(17)}.
                    {redact(10)}, is a {redact(80)} and {redact(200)}.
                </>
            ),
            "/media/image/imageOf.png"
        ),
        new Tile(
            <>Addendum 672{redact(4)}.1: Timeline of Events</>,
            (
                <>
                    The following is a series of internal Mathesis {redact(10)} research division e-mails describing the
                    events of {redactedDate}.<br />
                    <br />
                    <b>[BEGIN LOG]</b>
                    <br />
                    ------------
                    <br />
                    From: pisanleo@mathesisinternational.net
                    <br />
                    To: admn, intellidir, {redact(10)}head
                    <br />
                    Subject: Please Advise
                    <br />
                    After much deliberation, myself, along with the others, have agreed that the chief intelligence has
                    become quite worrying.
                    <br />
                    We strongly ask your consent to investigate, and even suspend the project if necessary.
                    <br />
                    <br />
                    Further documentation has been attached.
                    <br />
                    ------------
                    <br />
                    From: {redact(10)}head
                    <br />
                    To: pisanleo@mathesisinternational.net
                    <br />
                    Subject: RE: Please Advise
                    <br />
                    I understand your concern. I will leave this decision up to you, our jobs depend on this success.
                    <br />
                    ------------
                    <br />
                    From: pisanleo@mathesisinternational.net
                    <br />
                    To: {redact(10)}head
                    <br />
                    Subject: Singularity
                    <br />
                    After further analysis, we have come to a dreaded conclusion. The chief intelligence has achieved
                    post-human intelligence, at least. A machine like this, we cannot hope to control. Our only option
                    is to terminate it. Only today it has {redact(500)}
                    <br />
                    ------------
                    <br />
                    <b>[25 ENTRIES EXPUNGED]</b>
                    <br />
                    ------------
                    <br />
                    From: pisanleo@mathesisinternational.net
                    <br />
                    To: {redact(10)}head
                    <br />
                    Subject: {redact(35)}
                    <br />
                    {redact(60)}
                    <br />
                    There is no forgiveness now.
                    <br />
                    <b>[END LOG]</b>
                </>
            )
        ),
        new Tile(
            (
                <>
                    Addendum 672{redact(4)}.1: Interview with surviving {redact(14)}
                </>
            ),
            (
                <>
                    <b>[DATA EXPUNGED]</b>
                </>
            )
        ),
        new Tile(
            <>Addendum 672{redact(4)}.2: Video surveillance of original incident at Mathesis Labs</>,
            (
                <>
                    <a href="/assets/surveil.mp4">surveil.mp4</a>
                </>
            )
        )
    ];
    let pageInfo = new PageInfo(
        "scp",
        "SCP-672██",
        "",
        { backgroundColor: PageColor.FOUNDATION_RED },
        ["keter", "research", "ai"],
        [new TileLink("https://scp-wiki.wikidot.com/scp-redacted", "██████ Entry")]
    );
    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1 style={{ margin: "auto", width: "100%", textAlign: "center" }}>{pageInfo.title}</h1>
                <br />
            </div>
            {buildPage(pageInfo, tiles)}
        </Wrapper>
    );
}
