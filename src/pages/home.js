import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { Tile, SectionTile } from "@/components/Tiles";
import { GitLink, PageInfo, TileInfo, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { Constants } from "@/lib/utils";

export default function Home() {
    let pageInfo = new PageInfo(
        "home",
        "Matthew Pisano",
        "Artificial Intelligence Alignment Researcher and Software Engineer",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        [],
        [
            new GitLink("https://github.com/matthew-pisano/", "GitHub"),
            new TileLink(Constants.resumeUrl, "Résumé"),
            new TileLink("https://www.linkedin.com/in/matthew-pisano", "LinkedIn"),
            new TileLink("https://orcid.org/0009-0001-5714-3585", "Orcid")
        ]
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <SectionTile tileInfo={new TileInfo({ title: <>Featured Research</> })} />
            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Bergeron</>,
                        thumbnail: "/media/image/bergeron.png",
                        tags: ["research", "academic", "ai", "alignment", "python"],
                        links: [
                            new GitLink("https://github.com/matthew-pisano/Bergeron", "Bergeron"),
                            new TileLink("https://arxiv.org/abs/2312.00029", "Research Paper")
                        ],
                        titleLink: "research/bergeron"
                    })
                }>
                <p>
                    <i>Bergeron</i> is a framework that protects models against both natural language adversarial
                    attacks and its own bias toward mis-alignment. This is done through the usage of a secondary model
                    that judges the prompts to and responses from that primary model. This leaves the primary model and
                    the end user less exposed to potential threats.
                </p>
                <p>
                    This can be thought of attaching a conscience to these models to help guide them toward aligned
                    responses.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Moral High Ground</>,
                        thumbnail: "/media/image/tw-llm.png",
                        tags: ["research", "academic", "ai", "alignment", "python"],
                        titleLink: "research/highGround"
                    })
                }>
                <p>
                    As part of my employment with <i>IBM Research</i>, this research aims to better instill moral values
                    and principles into LLMs through the usage of text-based games. Here, we develop a benchmark of
                    these games in conversational format that run using <i>Microsoft's</i> TextWorld environment. We use
                    both fine-tuning and instruction-tuning methods to use these games to improve the moral reasoning
                    abilities of several LLMs.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>On Picard Groups and Jacobians of Directed Graphs</>,
                        thumbnail: "/media/image/chipfiring.png",
                        tags: ["research", "academic", "python"],
                        links: [
                            new GitLink("https://github.com/matthew-pisano/ChipFiring", "Chip Firing"),
                            new TileLink(
                                "https://www.sciencedirect.com/science/article/pii/S0024379525000771",
                                "Research Paper"
                            )
                        ],
                        titleLink: "research/chipFiring"
                    })
                }>
                <p>
                    This research was performed by myself, an advisor at <i>SUNY New Paltz</i>, and one of his
                    colleagues. In this research, we focused on the study of Chip-Firing games and how different
                    combinations of directed and undirected edges affect its winning strategies. This falls primarily
                    within the fields of linear algebra, graph theory, and combinatorics.
                </p>
                <p>
                    This paper was accepted into the Joint Mathematics Meetings 2023 and published in the journal{" "}
                    <a
                        href="https://www.sciencedirect.com/science/article/pii/S0024379525000771"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i>Linear Algebra and its Applications</i>
                    </a>
                    , Volume 711, Pages 180-211 on April 15th 2025.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>PredictChain</>,
                        thumbnail: "/media/image/predictChain.png",
                        tags: ["research", "academic", "ai", "python", "hack"],
                        links: [
                            new GitLink("https://github.com/predict-chain/predict-chain", "PredictChain"),
                            new TileLink("https://arxiv.org/abs/2307.15168", "Research Paper")
                        ],
                        titleLink: "research/predictChain"
                    })
                }>
                <p>
                    <i>PredictChain</i> is a decentralized artificial intelligence marketplace. It utilizes the Algorand
                    blockchain to allow users to host instances of this marketplace, with the goal of more freely
                    distributing AI models, data, and compute among all users. Won 1st place in the 2023 Mega-Ace
                    hackathon.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Homophone Decoding & Speech Based Emotion Detection</>,
                        tags: ["research", "academic", "ai", "python"],
                        links: [
                            new GitLink("https://github.com/AIRC-ASR/AIRC-ASR-Experimental", "AIRC ASR"),
                            new TileLink("/media/documents/Homophone+Decoding.pdf", "Slides")
                        ]
                    })
                }>
                This study, commissioned as a part of an RPI-IBM collaboration focused on developing an automatic speech
                recognition (ASR) model with better accuracy on homophones; words that sound similar, but have different
                meanings. These could either be true homophones, or false homophones that merely sound similar to the
                ground-truth words. Our techniques involved using corrector large language models to help the composite
                model generate more context-sensitive predictions and fine-tuning on hard datasets that contained noisy
                samples and frequent use of homophones.
            </Tile>

            <SectionTile tileInfo={new TileInfo({ title: <>Featured Projects</> })} />

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Masm</>,
                        thumbnail: "/media/image/assembly.png",
                        tags: ["personal", "cpp", "assembly", "python"],
                        links: [new GitLink("https://github.com/matthew-pisano/masm", "Masm")],
                        titleLink: "personal/masm"
                    })
                }>
                <i>Masm</i> is an assembler and interpreter for MIPS assembly programs. Written in C++, is it able to
                quickly parse, assemble, and execute even complex MIPS programs. Masm takes in one or more assembly
                source code files, processes the instructions within the code, transforms them into executable MIPS
                machine code, and executes the program on a virtual CPU. Additionally, it handles both input and output
                through a standard console interface, so it can integrate into shell pipelines.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Universal Models</>,
                        tags: ["personal", "ai", "python"],
                        links: [
                            new GitLink("https://github.com/matthew-pisano/UniversalModels", "UniversalModels"),
                            new TileLink("https://pypi.org/project/universalmodels/", "PyPi Project")
                        ],
                        titleLink: "personal/univmodels"
                    })
                }>
                The <i>Universal Models</i> library serves as an adapter between Hugging Face Transformers and several
                other APIs. All models from these different sources can be instantiated and interacted with in the same
                way as regular, local <i>Transformers</i> models. This allows for the easy integration of these models
                into projects that need generation from models from different sources.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Manifest Destiny</>,
                        thumbnail: "/media/image/1763-timelapse.gif",
                        tags: ["academic", "clang", "cuda", "collab"],
                        links: [
                            new GitLink("https://github.com/matthew-pisano/ManifestDestiny", "ManifestDestiny"),
                            new TileLink(
                                "https://github.com/matthew-pisano/ManifestDestiny/blob/master/docs/manifest-destiny-report.pdf",
                                "Research Paper"
                            )
                        ],
                        titleLink: "school/destiny"
                    })
                }>
                A highly parallelized population growth simulator. It is based on a cellular automata model of the
                United States during its period of rapid Westward expansion from 1763 to 1863.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Image-Crypt</>,
                        thumbnail: "/media/image/secret-message.png",
                        tags: ["personal", "cpp"],
                        links: [new GitLink("https://github.com/matthew-pisano/ImageCrypt", "ImageCrypt")],
                        titleLink: "personal/imageCrypt"
                    })
                }>
                A image-based document encoder and decoder that stores text within an image using small amounts of
                noise.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>LLM Augmented Information Retrieval</>,
                        tags: ["academic", "ai", "python"],
                        links: [new GitLink("https://github.com/matthew-pisano/LLMRetrieval", "LLM Retrieval")]
                    })
                }>
                A Solr information retrieval system with the capabilities of a large language model. Uses a language
                model to improve retrieved results through query expansion, term re-weighting, and document re-ranking.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Mathesis</>,
                        thumbnail: "/assets/mathesis.png",
                        tags: ["research", "academic", "ai", "python"],
                        links: [new GitLink("https://github.com/GPT-Pedagogy/GPT-Pedagogy", "Mathesis")]
                    })
                }>
                Research into the creation of a fine-tuned GPT-3 teaching assistant that will enable the transparent use
                of the technology between instructor and student to create a more active and participatory learning
                environment.
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Simplex</>,
                        thumbnail: "/media/image/simplexCode.jpg",
                        tags: ["personal", "java", "android"],
                        links: [new GitLink("https://github.com/matthew-pisano/SimplexIDE", "Simplex")],
                        titleLink: "personal/simplex"
                    })
                }>
                A math-oriented interpreted scripting language built in Java.
                <p>
                    Simplex's focus is on mathematical and scientific calculations as it offers built-in matrix
                    operations (multiplication, determinants, etc.) as well as many scientific and fundamental
                    constants.
                </p>
                <p>
                    Simplex also features an IDE to both help programming and educate users on how programming languages
                    work.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Imperium</>,
                        thumbnail: "/media/image/imperiumLogo.png",
                        tags: ["personal", "java", "android"],
                        links: [new GitLink("https://github.com/matthew-pisano/Imperium", "Imperium")],
                        titleLink: "personal/imperium"
                    })
                }>
                Imperium is an android grand strategy game modeled after other popular titles on the PC platform.
                <p>
                    The goal of this project is to provide mobile users with a fun empire simulator in either historical
                    settings within Europe or blank maps with game play more similar to the <i>RISK</i> board game.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
