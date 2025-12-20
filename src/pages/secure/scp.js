import React from "react";

import { TileLink } from "@/components/tiles/Links";
import { TileTag } from "@/components/tiles/Tags";
import { Tile } from "@/components/tiles/Tiles";
import DefaultWrapper from "@/components/wrappers/DefaultWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { redact } from "@/lib/util/utils";

let redactedDate = (
    <>
        {redact(4)}/{redact(4)}/{redact(4)}
    </>
);

export default function SCP() {
    let anomalyId = <>672{redact(4)}</>;
    let pageInfo = new PageInfo(
        "scp",
        "SCP-672██",
        "",
        { backgroundColor: PageColor.FOUNDATION_RED },
        [TileTag.KETER, TileTag.RESEARCH, TileTag.AI],
        (
            <>
                <TileLink href={"https://scp-wiki.wikidot.com/scp-redacted"}>██████ Entry</TileLink>
            </>
        )
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <>[EXTERNAL ARCHIVE]</> })}>
                Additional documentation and arrival material collected and organized by the foundation to aid in
                cleanup efforts and ensuring another incident does not happen again.
            </Tile>
            <Tile tileInfo={new TileInfo({ title: <>Special Containment Procedures</> })}>
                SCP-{anomalyId} is to be kept at high-security Site-162, in a standard humanoid accommodation chamber
                within a sector currently under the supervision of the {redact(10)}. Mobile Task Force unit {redact(6)}
                -10 ("
                {redact(12)}
                "), is to be set on high alert and stationed no more than 5km away from the containment site at all
                times.
            </Tile>
            <Tile tileInfo={new TileInfo({ title: <>Description</>, thumbnail: "/media/image/imageOf.png" })}>
                SCP-{anomalyId} was {redact(30)} as into {redact(60)}. Originally created as part of <i>Project</i>{" "}
                {redact(10)} by the {redact(15)} research division of Mathesis International, {redact(90)} after the
                initial incident. Researcher L{redact(6)} P{redact(6)} {redact(17)}.{redact(10)}, is a {redact(80)} and{" "}
                {redact(200)}.
            </Tile>
            <Tile tileInfo={new TileInfo({ title: <>Addendum {anomalyId}.1: Timeline of Events</> })}>
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
                post-human intelligence, at least. A machine like this, we cannot hope to control. Our only option is to
                terminate it. Only today it has {redact(500)}
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
            </Tile>
            <Tile
                tileInfo={
                    new TileInfo({
                        title: (
                            <>
                                Addendum {anomalyId}.1: Interview with surviving {redact(14)}
                            </>
                        )
                    })
                }>
                <b>[DATA EXPUNGED]</b>
            </Tile>
            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Addendum {anomalyId}.2: Video surveillance of original incident at Mathesis Labs</>
                    })
                }>
                <a href="/assets/surveil.mp4">surveil.mp4</a>
            </Tile>
        </DefaultWrapper>
    );
}
