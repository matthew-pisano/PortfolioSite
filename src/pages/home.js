import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GitLink, PageInfo, SectionTile, Tile, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { Constants } from "@/lib/utils";

export default function Home() {
    let tiles = [
        new SectionTile(<>Featured Research</>),
        new Tile(
            <>Bergeron</>,
            (
                <>
                    <i>Bergeron</i> is a framework that protects models against both natural language adversarial
                    attacks and its own bias toward mis-alignment. This is done through the usage of a secondary model
                    that judges the prompts to and responses from that primary model. This leaves the primary model and
                    the end user less exposed to potential threats.
                    <br />
                    <br />
                    This can be thought of attaching a conscience to these models to help guide them toward aligned
                    responses.
                </>
            ),
            "/media/image/bergeron.png",
            ["research", "academic", "ai", "alignment", "python"],
            [
                new GitLink("https://github.com/matthew-pisano/Bergeron", "Bergeron"),
                new TileLink("https://arxiv.org/abs/2312.00029", "Research Paper")
            ],
            "research/bergeron"
        ),
        new Tile(
            <>Moral High Ground</>,
            (
                <>
                    As part of my employment with <i>IBM Research</i>, this research aims to better instill moral values
                    and principles into LLMs through the usage of text-based games. Here, we develop a benchmark of
                    these games in conversational format that run using <i>Microsoft's</i> TextWorld environment. We use
                    both fine-tuning and instruction-tuning methods to use these games to improve the moral reasoning
                    abilities of several LLMs.
                </>
            ),
            "/media/image/tw-llm.png",
            ["research", "academic", "ai", "alignment", "python"],
            [],
            "research/highGround"
        ),
        new Tile(
            <>PredictChain</>,
            (
                <>
                    <i>PredictChain</i> is a decentralized artificial intelligence marketplace. It utilizes the Algorand
                    blockchain to allow users to host instances of this marketplace, with the goal of more freely
                    distributing AI models, data, and compute among all users. Won 1st place in the 2023 Mega-Ace
                    hackathon.
                </>
            ),
            "/media/image/predictChain.png",
            ["research", "academic", "ai", "python", "hack"],
            [
                new GitLink("https://github.com/predict-chain/predict-chain", "PredictChain"),
                new TileLink("https://arxiv.org/abs/2307.15168", "Research Paper")
            ],
            "research/predictChain"
        ),
        new Tile(
            <>Homophone Decoding & Speech Based Emotion Detection</>,
            (
                <>
                    This study, commissioned as a part of an RPI-IBM collaboration focused on developing an automatic
                    speech recognition (ASR) model with better accuracy on homophones; words that sound similar, but
                    have different meanings. These could either be true homophones, or false homophones that merely
                    sound similar to the ground-truth words. Our techniques involved using corrector large language
                    models to help the composite model generate more context-sensitive predictions and fine-tuning on
                    hard datasets that contained noisy samples and frequent use of homophones.
                </>
            ),
            "",
            ["research", "academic", "ai", "python"],
            [
                new GitLink("https://github.com/AIRC-ASR/AIRC-ASR-Experimental", "AIRC ASR"),
                new TileLink("/media/documents/Homophone+Decoding.pdf", "Slides")
            ]
        ),
        new SectionTile(<>Featured Projects</>),
        new Tile(
            <h2>Masm</h2>,
            (
                <>
                    <i>Masm</i> is an assembler and interpreter for MIPS assembly programs. Written in C++, is it able
                    to quickly parse, assemble, and execute even complex MIPS programs. Masm takes in one or more
                    assembly source code files, processes the instructions within the code, transforms them into
                    executable MIPS machine code, and executes the program on a virtual CPU. Additionally, it handles
                    both input and output through a standard console interface, so it can integrate into shell
                    pipelines.
                </>
            ),
            "/media/image/assembly.png",
            ["personal", "cpp", "assembly", "python"],
            [new GitLink("https://github.com/matthew-pisano/masm", "Masm")],
            "personal/masm"
        ),
        new Tile(
            <>Universal Models</>,
            (
                <>
                    The <i>Universal Models</i> library serves as an adapter between Hugging Face Transformers and
                    several other APIs. All models from these different sources can be instantiated and interacted with
                    in the same way as regular, local <i>Transformers</i> models. This allows for the easy integration
                    of these models into projects that need generation from models from different sources.
                </>
            ),
            "",
            ["personal", "ai", "python"],
            [
                new GitLink("https://github.com/matthew-pisano/UniversalModels", "UniversalModels"),
                new TileLink("https://pypi.org/project/universalmodels/", "PyPi Project")
            ],
            "personal/univmodels"
        ),
        new Tile(
            <>Manifest Destiny</>,
            (
                <>
                    A highly parallelized population growth simulator. It is based on a cellular automata model of the
                    United States during its period of rapid Westward expansion from 1763 to 1863.
                </>
            ),
            "/media/image/1763-timelapse.gif",
            ["academic", "clang", "cuda", "collab"],
            [
                new GitLink("https://github.com/matthew-pisano/ManifestDestiny", "ManifestDestiny"),
                new TileLink(
                    "https://github.com/matthew-pisano/ManifestDestiny/blob/master/docs/manifest-destiny-report.pdf",
                    "Research Paper"
                )
            ],
            "school/destiny"
        ),
        new Tile(
            <>Image-Crypt</>,
            (
                <>
                    A image-based document encoder and decoder that stores text within an image using small amounts of
                    noise.
                </>
            ),
            "/media/image/secret-message.png",
            ["personal", "cpp"],
            [new GitLink("https://github.com/matthew-pisano/ImageCrypt", "ImageCrypt")],
            "personal/imageCrypt"
        ),
        new Tile(
            <>LLM Augmented Information Retrieval</>,
            (
                <>
                    A Solr information retrieval system with the capabilities of a large language model. Uses a language
                    model to improve retrieved results through query expansion, term re-weighting, and document
                    re-ranking.
                </>
            ),
            "",
            ["academic", "ai", "python"],
            [new GitLink("https://github.com/matthew-pisano/LLMRetrieval", "LLM Retrieval")]
        ),
        new Tile(
            <>Mathesis</>,
            (
                <>
                    Research into the creation of a fine-tuned GPT-3 teaching assistant that will enable the transparent
                    use of the technology between instructor and student to create a more active and participatory
                    learning environment.
                </>
            ),
            "/assets/mathesis.png",
            ["research", "academic", "ai", "python"],
            [new GitLink("https://github.com/GPT-Pedagogy/GPT-Pedagogy", "Mathesis")]
        ),
        new Tile(
            <>Simplex</>,
            (
                <>
                    A math-oriented interpreted scripting language built in Java.
                    <br />
                    Simplex's focus is on mathematical and scientific calculations as it offers built-in matrix
                    operations (multiplication, determinants, etc.) as well as many scientific and fundamental
                    constants.
                    <br />
                    <br />
                    Simplex also features an IDE to both help programming and educate users on how programming languages
                    work.
                </>
            ),
            "/media/image/simplexCode.jpg",
            ["personal", "java", "android"],
            [new GitLink("https://github.com/matthew-pisano/SimplexIDE", "Simplex")],
            "personal/simplex"
        ),
        new Tile(
            <>Imperium</>,
            (
                <>
                    Imperium is an android grand strategy game modeled after other popular titles on the PC platform.
                    <br />
                    <br />
                    The goal of this project is to provide mobile users with a fun empire simulator in either historical
                    settings within Europe or blank maps with game play more similar to the <i>RISK</i> board game.
                </>
            ),
            "/media/image/imperiumLogo.png",
            ["personal", "java", "android"],
            [new GitLink("https://github.com/matthew-pisano/Imperium", "Imperium")],
            "personal/imperium"
        ),
        new SectionTile(<>Hackathons</>),
        new Tile(
            <>PredictChain</>,
            (
                <>
                    <i>PredictChain</i> is a decentralized artificial intelligence marketplace. It utilizes the Algorand
                    blockchain to allow users to host instances of this marketplace, with the goal of more freely
                    distributing AI models, data, and compute among all users. Won 1st place in the 2023 Mega-Ace
                    hackathon.
                </>
            ),
            "/media/image/predictChain.png",
            ["research", "academic", "ai", "python", "hack"],
            [
                new GitLink("https://github.com/predict-chain/predict-chain", "PredictChain"),
                new TileLink("https://arxiv.org/abs/2307.15168", "Research Paper")
            ],
            "research/predictChain"
        ),
        new Tile(
            <>Anonymous Hiring</>,
            (
                <>
                    This project was part of the HvTechFest Hackathon 2021.
                    <br />
                    The idea is to build a web platform for employers and employees, where the employer hires employees
                    anonymously purely based on their talent. Through this project the team hopes of tackling racial
                    discrimination and gender biases in the hiring process.
                </>
            ),
            "",
            ["hack", "collab", "js", "python", "html"],
            [new GitLink("https://github.com/OpenHubHackathonGreen/Anonymous-Hires", "Anon Hires")],
            "anonHires"
        )
    ];
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
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
