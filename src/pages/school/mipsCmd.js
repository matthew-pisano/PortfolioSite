import { PageColor } from "@/lib/themes";
import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { PageInfo, Tile, TRANSLUCENT } from "@/lib/pageBuilder";
import { genPageTitle } from "@/lib/utils";

export default function MipsCmd() {
    let tiles = [
        new Tile(
            <h2>Overview</h2>,
            (
                <>
                    The MIPS command processor processes commands and displays their outputs using the{" "}
                    <Link href="https://courses.missouristate.edu/kenvollmar/mars/download.htm" target="_blank">
                        Mars simulator
                    </Link>
                    . Developed as part of my college assembly course, the command processor leverages the low-level
                    properties of assembly to carry out its functions using very lightweight code.
                </>
            )
        ),
        new Tile(
            (
                <>
                    NOTE: As I am currently teaching the class that this assignment was originally submitted to, the
                    source code has been made temporarily unavailable.
                </>
            ),
            ``,
            "",
            [],
            [],
            "",
            { backgroundColor: TRANSLUCENT }
        ),
        new Tile(
            <>Features and Function</>,
            (
                <>
                    This command processor in input from the <i>Mars</i> console emulator, and outputs to that same
                    interface. It has the ability to preform mathematical operations, bidirectional decimal and
                    hexadecimal conversions, produce MIDI audio output, and display sections of its memory to the user.
                    It also has the ability to draw using one of <i>Mars</i>'s virtual screens.
                </>
            ),
            "/media/image/mipscmd.png"
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "MIPS Terminal",
        "A simple command processor written in the MIPS assembly language",
        { backgroundColor: PageColor.SEGFAULT_MOSS },
        ["academic", "assembly"]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
