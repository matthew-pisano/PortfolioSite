import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { TileTag } from "@/components/Tags";
import { Tile, TRANSLUCENT } from "@/components/Tiles";
import { PageInfo, TileInfo } from "@/components/Wrapper";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";
import wrapperStyles from "@/styles/Wrapper.module.css";

export default function MipsCmd() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "MIPS Terminal",
        "A simple command processor written in the MIPS assembly language",
        { backgroundColor: PageColor.SEGFAULT_MOSS },
        [TileTag.ACADEMIC, TileTag.ASSEMBLY]
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
                    The MIPS command processor processes commands and displays their outputs using the{" "}
                    <Link href="https://courses.missouristate.edu/kenvollmar/mars/download.htm" target="_blank">
                        Mars simulator
                    </Link>
                    . Developed as part of my college assembly course, the command processor leverages the low-level
                    properties of assembly to carry out its functions using very lightweight code.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: (
                            <>
                                NOTE: As I am currently teaching the class that this assignment was originally submitted
                                to, the source code has been made temporarily unavailable.
                            </>
                        )
                    })
                }
                style={{ backgroundColor: TRANSLUCENT }}
            />

            <Tile tileInfo={new TileInfo({ title: <>Features and Function</>, thumbnail: "/media/image/mipscmd.png" })}>
                <p>
                    This command processor in input from the <i>Mars</i> console emulator, and outputs to that same
                    interface. It has the ability to preform mathematical operations, bidirectional decimal and
                    hexadecimal conversions, produce MIDI audio output, and display sections of its memory to the user.
                    It also has the ability to draw using one of <i>Mars</i>'s virtual screens.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Live Demo</>, titleLink: "https://mips.matthewpisano.com" })}>
                <iframe
                    className={wrapperStyles.hideOnMobile}
                    src="https://mips.matthewpisano.com"
                    width="100%"
                    height="500px"
                    style={{ border: "none", borderRadius: "10px" }}
                    title="MIPS Terminal"></iframe>
                <p className={wrapperStyles.showOnMobile}>
                    The live demo of the terminal is not available on smaller screens. Please visit{" "}
                    <Link href="https://mips.matthewpisano.com" target="_blank">
                        mips.matthewpisano.com
                    </Link>{" "}
                    for a better viewing experience.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
