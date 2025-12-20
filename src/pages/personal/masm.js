import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { Tile } from "@/components/Tiles";
import { DownloadLink, GitLink, PageInfo, TileInfo } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Masm() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Masm",
        "A MIPS assembler and interpreter",
        { backgroundColor: PageColor.SUDO_TEAL },
        ["personal", "cpp", "assembly", "python"],
        [
            new GitLink("https://github.com/matthew-pisano/masm", "Masm"),
            new DownloadLink("https://github.com/matthew-pisano/masm/releases/latest", "Download Masm")
        ]
    );

    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile
                tileInfo={
                    new TileInfo({
                        title: <h2>Overview</h2>,
                        thumbnail: "/media/image/assembly.png"
                    })
                }>
                <>
                    Masm is an assembler and interpreter for MIPS assembly programs. Written in C++, is it able to
                    quickly parse, assemble, and execute even complex MIPS programs. Masm takes in one or more assembly
                    source code files, processes the instructions within the code, transforms them into executable MIPS
                    machine code, and executes the program on a virtual CPU. Additionally, it handles both input and
                    output through a standard console interface, so it can integrate into shell pipelines.
                    <p>
                        Originally designed to function as a part of the Assembly course that I teach, it faithfully
                        translates the inner-workings of a MIPS CPU into well-documented C++ code and has the ability to
                        generate intermediate tokens and memory representations.
                    </p>
                </>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Development</> })}>
                <>
                    Masm was originally designed to be used as a teaching tool for the assembly course that I teach at
                    SUNY Ulster. This repository also comes with a program that can output the intermediate steps of
                    processing before source code is turned into executable machine code.
                    <br />
                    Developed with my course in mind, Masm is able to process all of the major language features we
                    cover, namely:
                    <ul>
                        <li>Core MIPS ISA instructions</li>
                        <li>Extended pseudo-instructions</li>
                        <li>Syscalls</li>
                        <li>Memory segmentation and allocation directives</li>
                        <li>Macros and includes</li>
                        <li>Memory-mapped I/O</li>
                    </ul>
                </>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Implementation</> })}>
                <>
                    Masm is written primarily in C++ with additional bindings written in Python. It implements the core
                    features of the MIPS instruction set architecture and handles memory in the big-endian format.
                    Incoming source code is first split into tokens that are further processed by a parser. This parser
                    transforms program tokens into executable machine code and static data inside of a memory layout.
                    This memory layout is then sent to the interpreter where the instructions are executed on a virtual
                    CPU using a virtualized address space. This memory space can store up to 4GiB of data with working
                    implementations of the stack and heap spaces. During execution, the CPU operates on a register file
                    containing 32 registers that can hold 32 bits of data each.
                    <p>
                        Masm has two main execution modes: syscall and MMIO. Syscall mode, the default, uses syscalls to
                        take input from the user and send output back. In this mode, accessing the MMIO registers will
                        produce no effect. In MMIO mode, the keyboard I/O syscalls are disabled and the program
                        communicates with the user exclusively through the memory-mapped I/O registers.
                    </p>
                </>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Python Bindings</> })}>
                <>
                    In addition to the main program executable, this project also exposes Python bindings that can call
                    the functionality of Masm directly from within a Python program. Using the <code>pymasm</code>{" "}
                    package, the tokenizer, parser, and interpreter can all be executed with their outputs visible to
                    the program. This allows easier integration of Masm into scripts or web server applications.
                </>
            </Tile>
        </DefaultWrapper>
    );
}
