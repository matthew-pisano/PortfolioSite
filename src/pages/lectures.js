import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { PageInfo, Tile, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Lectures() {
    let tiles = [
        new Tile(
            <h2>Overview</h2>,
            (
                <>
                    This page serves as a place to aggregate and link to some of the notable lectures or presentations
                    that I have given throughout my education and career. Topics range from my own research to general
                    education in subject areas of my expertise.
                </>
            )
        ),
        new Tile(
            <>Computer Architecture and Organization Lecture Series</>,
            <></>,
            "/media/image/suny-ulster.png",
            ["academic", "assembly"],
            []
        ),
        new Tile(
            <>Bergeron: Combating Adversarial Attacks by Emulating a Conscience</>,
            <>Thesis presentation; also presented at the RPI Graduate Research Symposium</>,
            "/media/image/rpi.png",
            ["research", "academic", "ai", "alignment"],
            [
                new TileLink("/media/documents/Bergeron+Thesis+Presentation.pdf", "Slides"),
                new TileLink("/media/video/Bergeron+Thesis+Presentation.mp4", "Recording")
            ]
        ),
        new Tile(
            <>Bergeron: Towards Language Models with a Conscience</>,
            (
                <>
                    Lecture for the RPI 2024 cognitive science lecture series; also presented as a guest lecturer for
                    RPI's topics in cognitive science course
                </>
            ),
            "/media/image/rpi.png",
            ["research", "academic", "ai", "alignment"],
            [
                new TileLink("/media/documents/Bergeron+Cog+Sci+Series.pdf", "Slides"),
                new TileLink("https://vimeo.com/showcase/10930583/video/916811537", "Recording")
            ]
        ),
        new Tile(
            <>Deep Reinforcement Learning and Its Neudoscientific Implications</>,
            <></>,
            "/media/image/rpi.png",
            ["research", "academic", "ai"],
            [new TileLink("/media/documents/Deep+RL+and+Implications.pdf", "Slides")]
        ),
        new Tile(
            <>Moral High Ground: A Conversational Benchmark for LLM Moral Alignment</>,
            <></>,
            "/media/image/ibm-research.png",
            ["research", "ai", "alignment"]
        ),
        new Tile(
            <>PredictChain: Empowering Collaboration for AI in a Blockchain-based Marketplaces</>,
            <></>,
            "/media/image/chainscience.png",
            ["research", "ai"],
            [new TileLink("/media/documents/PredictChain+ChainScience+23.pdf", "Slides")]
        ),
        new Tile(
            <>Homophone Decoding & Speech Based Emotion Detection</>,
            <></>,
            "/media/image/rpi.png",
            ["research", "academic", "ai"],
            [new TileLink("/media/documents/Homophone+Decoding.pdf", "Slides")]
        ),
        new Tile(
            <>On Picard Groups and Jacobians of Directed Graphs</>,
            <></>,
            "/media/image/suny-new-paltz.jpg",
            ["research", "academic"],
            [new TileLink("/media/documents/JMMPresentation.pdf", "Slides")]
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Lectures and Presentations",
        "A series of notable lectures or presentations that I have given",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        [],
        []
    );

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
