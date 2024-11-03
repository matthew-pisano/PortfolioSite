import React from 'react';

import Wrapper from '@/components/Wrapper';
import {buildPage, PageInfo, Tile, TileLink} from '@/lib/pageBuilder';
import styles from "@/styles/Wrapper.module.css";


export default function SCP() {

    let tiles = [
        new Tile(
            "[EXTERNAL ARCHIVE]",
            `Additional documentation and arrival material collected and organized by
                the foundation to aid in cleanup efforts and ensuring another incident does not 
                happen again.`
        ),
        new Tile(
            "Special Containment Procedures",
            `SCP-672<span style="color: black">██</span> is to be kept at high-security Site-162, in a standard 
                humanoid accommodation chamber within a sector currently under the supervision of the 
                <span style="color: black">████████</span>.  Mobile Task Force unit <span style="color: black">██████</span>-10 
                ("<span style="color: black">███████</span>"), is to be set on high alert and stationed no more than 5km away
                from the containment site at all times.`
        ),
        new Tile(
            "Description",
            `SCP-672<span style="color: black">██</span> was <span style="color: black">██████ ████ ██ ████████████</span>
                as into <span style="color: black">███████ ██████ ████████ ████████████████</span>, <span style="color: black">██</span>. 
                Originally created as part of <i>Project <span style="color: black">███████████</span></i> by the 
                <span style="color: black">██████████████</span> research division of Mathesis International, 
                <span style="color: black">███████ █████ ██████████████████████████</span>.
                <span style="color: black">██████████████████████ ████████████████ █████████████████ ██████████ ███████ ███████████</span> after
                the initial incident.  Researcher L<span style="color: black">███████</span> P<span style="color: black">█████</span> <span style="color: black">████████</span>.
                <span style="color: black">██████████</span>, is a <span style="color: black">█████████████████████████████ ███████████
                █████████████████████████ ███████████████████████</span> and <span style="color: black">█████████████████████ ████████████████████████
                ███████████ ████████████████████ █████████████████████ ██████████████ ███████████████████████</span>.`,
            "/media/image/imageOf.png"
        ),
        new Tile(
            `Addendum 672<span style="color: black">██</span>.1: Timeline of Events`,
            `The following is a series of internal Mathesis <span style="color: black">██████████████</span> research
                division e-mails describing the events of <span 
                style="color: black">██</span>/<span style="color: black">██</span>/<span style="color: black">████</span>.<br>
                <br><b>[BEGIN LOG]</b>
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: admn, intellidir, <span style="color: black">███████████</span>head<br>
                Subject: Please Advise<br>
                After much deliberation, myself, along with the others, have agreed that the chief intelligence has become quite worrying.<br>
                We strongly ask your consent to investigate, and even suspend the project if necessary.
                <br><br>
                Further documentation has been attached.<br>
                ------------<br>
                From: <span style="color: black">███████████</span>head<br>
                To: pisanleo@mathesisinternational.net<br>
                Subject: RE: Please Advise<br>
                I understand your concern. I will leave this decision up to you, our jobs depend on this success.<br>
                ------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: <span style="color: black">███████████</span>head<br>
                Subject: Singularity<br>
                After further analysis, we have come to a dreaded conclusion.  The chief intelligence has achieved post-human intelligence, at least.
                A machine like this, we cannot hope to control. Our only option is to terminate it.  Only today it has
                <span style="color: black">█████████████████████ ████████████████████████
                ███████████ ████████████████████ █████████████████████ ██████████████ ███████████████████████</span><br>
                ------------<br>
                <b>[25 ENTRIES EXPUNGED]</b>
                <br>------------<br>
                From: pisanleo@mathesisinternational.net<br>
                To: <span style="color: black">███████████</span>head<br>
                Subject: <span style="color: black">█████████</span><br>
                <span style="color: black">███████████ ██████████████████
                ███████████ ██████████████████████ ██████████████ ████████ ██████████████</span><br>
                There is no forgiveness now.<br>
                <b>[END LOG]</b>`,
        ),
        new Tile(
            `Addendum 672<span style="color: black">██</span>.1: Interview with surviving <span style="color: black">███████████</span>`,
            `<b>[DATA EXPUNGED]</b>`,
        ),
        new Tile(
            `Addendum 672<span style="color: black">██</span>.2: Video surveillance of original incident at Mathesis Labs`,
            `<a href="/assets/surveil.mp4">surveil.mp4</a>`,
        )
    ];
    let pageInfo = new PageInfo(
        "scp", "SCP-672██",
        "", {backgroundColor: "#872929"},
        ["keter", "research", "ai"],
        [new TileLink("https://scp-wiki.wikidot.com/scp-redacted", "██████ Entry")]
    );
    return (<Wrapper pageName={pageInfo.pageName}>
        <div className={`${styles.titleCard}`}>
            <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1><br/>
        </div>
        {buildPage(pageInfo, tiles)}
    </Wrapper>);

}
