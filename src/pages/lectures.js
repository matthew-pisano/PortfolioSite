import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { PageInfo, Tile, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Lectures() {
    let deepRlLink =
        "https://www.cell.com/neuron/fulltext/S0896-6273(20)30468-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0896627320304682%3Fshowall%3Dtrue";
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
            (
                <>
                    This lecture series, given over the course of one semester, covers the core concepts of MIPS,
                    computer organization, and more advanced topics. This includes:
                    <ul>
                        <li>Basic assembly instructions</li>
                        <li>Procedures, procedure calls, and the stack</li>
                        <li>Addressing modes, parallel processing, and pipelining</li>
                        <li>I/O, interrupts, and exceptions</li>
                        <li>Floating point representations and operations</li>
                        <li>Memory hierarchy and caching</li>
                        <li>Virtual memory and virtual machines</li>
                        <li>Cloud computing</li>
                        <li>Exploits and vulnerabilities</li>
                    </ul>
                    <p>
                        The core portions of this course have remained unchanged to align with the policies and learning
                        objectives outlined by SUNY Ulster. In addition to the core topics, I have also made significant
                        revisions to the <i>cloud computing</i> and <i>vulnerabilities</i> sections of the course with
                        my own, novel material. These changes, in conjunction with the existing coursework, give
                        students a more well-rounded understanding of the field of computers and low-level
                        architectures.
                    </p>
                </>
            ),
            "/media/image/suny-ulster.png",
            ["academic", "assembly"],
            []
        ),
        new Tile(
            <>Bergeron: Combating Adversarial Attacks by Emulating a Conscience</>,
            (
                <>
                    My thesis lecture and defense concentrated on a novel strategy of aligning the behavior of large
                    language models with human preferences. It details my <i>Bergeron</i> framework that aims to improve
                    the resistance of LLMs against adversarial attacks and other in-context methods of misalignment.
                    Bergeron achieves this goal through the usage of a smaller secondary LLM that monitors both the
                    inputs to and outputs from the much larger target LLM. This serves as a method to quickly improve
                    the alignment of the target model without any time-consuming fine-tuning or hard-coded filtering.
                    <p>
                        The lecture I gave on this project served as both my Master's thesis defense and my presentation
                        at RPI's Graduate Research Symposium, into which my research was accepted. At the symposium, I
                        was invited to participate in both a seminar-style lecture and a poster presentation.
                    </p>
                </>
            ),
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
                    This presentation was an earlier revision of my thesis research which I tailored to a technical
                    audience that did not necessarily include experts in the field. It is distinct from my final
                    revision as it concentrates less on the technical details of my research and more on the broader
                    impacts that the implementation of my alignment architecture could have on the safety of model
                    outputs. This was presented both as part of RPI's 2024 series of Cognitive Science lectures and as a
                    guest lecture for both graduate and undergraduate students in RPI's{" "}
                    <i>Topics in Cognitive Science</i> course.
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
            (
                <>
                    This presentation is an adaptation of Matthew Botvinick's (et al.) 2020{" "}
                    <a href={deepRlLink} target="_blank" rel="noreferrer">
                        paper
                    </a>{" "}
                    by the same name. I had presented this as part of a series of talks given by students in RPI's{" "}
                    <i>Human and Machine Learning</i> course. The original paper serves as a review of current advances
                    in the field of reinforcement learning and how deep learning is enabling new discoveries. One of the
                    themes of the paper is how implementations of artificial reinforcement learning in modern algorithms
                    closely mirrors the processes that occur within biological brains. The authors highlight some
                    notable consequences of this idea, primarily the fact that RL models can be used to accurately
                    predict the RL mechanisms within organic learners.
                    <p>
                        A point that I stressed in my live presentation comes near the conclusion of the paper where the
                        authors highlight some caveats to the comparisons between artificial and natural learners.
                        Namely that, while artificial systems are very capable in specific areas, they have yet to fully
                        generalize to a human-level quality. At the time of publication, RL systems did (and still to an
                        extent do) struggle with credit assignment and learning efficiency; i.e. the amount of data that
                        a learner needs to see before learning the general case for a pattern.
                    </p>
                </>
            ),
            "/media/image/rpi.png",
            ["research", "academic", "ai"],
            [new TileLink("/media/documents/Deep+RL+and+Implications.pdf", "Slides")]
        ),
        new Tile(
            <>Moral High Ground: A Conversational Benchmark for LLM Moral Alignment</>,
            (
                <>
                    As a part of my research visitation at the <i>IBM Thomas J. Watson Research Center</i>, I had given
                    a presentation summarizing my research progress over the summer. This research concerned the
                    abilities of language models to navigate through a series of moral and ethical quandaries, presented
                    in the form of text-based games. My audience for this presentation consisted of other student
                    researchers and senior members of IBM's research teams.
                    <p>In the interest of confidentiality, I have omitted the original slide deck here.</p>
                </>
            ),
            "/media/image/ibm-research.png",
            ["research", "ai", "alignment"]
        ),
        new Tile(
            <>PredictChain: Empowering Collaboration for AI in a Blockchain-based Marketplaces</>,
            (
                <>
                    <i>PredictChain</i> is a decentralized artificial intelligence marketplace that I developed,
                    primarily along with another student at RPI. It utilizes the <i>Algorand</i> blockchain to allow
                    users to host instances of this marketplace, with the goal of more freely distributing AI models,
                    data, and compute among all users.
                    <p>
                        This project was presented at the 2023 Mega Ace Hackathon where it won first place globally and
                        several other awards including <i>Most Innovative Use of Technology</i>. The paper that I
                        co-wrote for this project was also accepted into the <i>ChainScience 2023</i> conference where
                        it was presented by one of my collaborators on the paper.
                    </p>
                </>
            ),
            "/media/image/chainscience.png",
            ["research", "ai"],
            [new TileLink("/media/documents/PredictChain+ChainScience+23.pdf", "Slides")]
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
                    <p>
                        I had given this presentation along with my collaborators on the project as well as our
                        principal investigator at RPI. Our audience consisted mainly of our grantors from IBM as we gave
                        this report on our successful progress.
                    </p>
                </>
            ),
            "/media/image/rpi.png",
            ["research", "academic", "ai"],
            [new TileLink("/media/documents/Homophone+Decoding.pdf", "Slides")]
        ),
        new Tile(
            <>On Picard Groups and Jacobians of Directed Graphs</>,
            (
                <>
                    This research was performed by myself, an advisor at <i>SUNY New Paltz</i>, and one of his
                    colleagues. In this research, we focused on the study of Chip-Firing games and how different
                    combinations of directed and undirected edges affect its winning strategies. This falls primarily
                    within the fields of linear algebra, graph theory, and combinatorics.
                    <p>
                        I created this presentation for the 2023 <i>Joint Mathematics Meetings</i> conference, where my
                        paper was accepted. At the conference, I was given the opportunity to present my work in a
                        seminar-style lecture to an audience of other interested conference attendees. Additionally, I
                        was invited back to New Paltz after graduation as a guest lecturer for their{" "}
                        <i>Math and Cookies</i> lecture series.
                    </p>
                </>
            ),
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
