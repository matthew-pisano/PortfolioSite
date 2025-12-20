// noinspection JSAnnotator

import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { TileLink } from "@/components/Links";
import { Tile } from "@/components/Tiles";
import { PageInfo, TileInfo } from "@/components/Wrapper";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Lectures() {
    let deepRlLink =
        "https://www.cell.com/neuron/fulltext/S0896-6273(20)30468-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0896627320304682%3Fshowall%3Dtrue";

    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Lectures and Presentations",
        "A series of notable lectures or presentations that I have given",
        { backgroundColor: PageColor.SINGULARITY_BLUE }
    );

    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
                    This page serves as a place to aggregate and link to some of the notable lectures or presentations
                    that I have given throughout my education and career. Topics range from my own research to general
                    education in subject areas of my expertise.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Transformer Models: Architectures and Use Cases</>,
                        thumbnail: "/media/image/ibm.png",
                        tags: ["academic", "ai"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/IBM+Transformer+Models.pdf"}>Slides</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    I created this lecture for a session of IBM's internal lecture series. For these sessions,
                    knowledgeable members of an organization are invited to give a lecture on an area of their expertise
                    to a technical audience that may not consist of domain experts. Given IBM's recent acceleration in
                    the development of its AI technology, many members of my organization were developing along with
                    models which they may not have understood on a fundamental level. The aim of this lecture was to
                    provide a clearer picture of the inner-workings of the transformer architecture in a detailed, yet
                    accessible manner.
                </p>
                <p>
                    For the presentation slides, I included detailed diagrams, of my own design, for <i>BERT</i> and
                    IBM's <i>Granite</i>, along with a step-by-step expansion on the attention mechanism itself. Most
                    explanations of attention calculation, in my opinion, are either too technical or too simplified. To
                    convey this process in a more representative manner, I presented the calculations as a short
                    dialogue between several tokens within a sequence as their attention scores were updated over time.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Computer Architecture and Organization Lecture Series</>,
                        thumbnail: "/media/image/suny-ulster.png",
                        tags: ["academic", "assembly"]
                    })
                }>
                <p>
                    This lecture series, given over the course of one semester, covers the core concepts of MIPS,
                    computer organization, and more advanced topics. This includes:
                </p>
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
                    revisions to the <i>cloud computing</i> and <i>vulnerabilities</i> sections of the course with my
                    own, novel material. These changes, in conjunction with the existing coursework, give students a
                    more well-rounded understanding of the field of computing and low-level architectures.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Bergeron: Combating Adversarial Attacks by Emulating a Conscience</>,
                        thumbnail: "/media/image/rpi.png",
                        tags: ["research", "academic", "ai", "alignment"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/Bergeron+Thesis+Presentation.pdf"}>Slides</TileLink>
                                <TileLink href={"/media/video/Bergeron+Thesis+Presentation.mp4"}>Recording</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    My thesis lecture and defense concentrated on a novel strategy of aligning the behavior of large
                    language models with human preferences. It details my <i>Bergeron</i> framework that aims to improve
                    the resistance of LLMs against adversarial attacks and other in-context methods of misalignment.
                    Bergeron achieves this goal through the usage of a smaller secondary LLM that monitors both the
                    inputs to and outputs from the much larger target LLM. This serves as a method to quickly improve
                    the alignment of the target model without any time-consuming fine-tuning or hard-coded filtering.
                </p>
                <p>
                    The lecture I gave on this project served as both my Master's thesis defense and my presentation at
                    RPI's Graduate Research Symposium, into which my research was accepted. At the symposium, I was
                    invited to participate in both a seminar-style lecture and a poster presentation.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Bergeron: Towards Language Models with a Conscience</>,
                        thumbnail: "/media/image/rpi.png",
                        tags: ["research", "academic", "ai", "alignment"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/Bergeron+Cog+Sci+Series.pdf"}>Slides</TileLink>
                                <TileLink href={"https://vimeo.com/showcase/10930583/video/916811537"}>
                                    Recording
                                </TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    This presentation was an earlier revision of my thesis research which I tailored to a technical
                    audience that did not necessarily include experts in the field. It is distinct from my final
                    revision as it concentrates less on the technical details of my research and more on the broader
                    impacts that the implementation of my alignment architecture could have on the safety of model
                    outputs. This was presented both as part of RPI's 2024 series of Cognitive Science lectures and as a
                    guest lecture for both graduate and undergraduate students in RPI's{" "}
                    <i>Topics in Cognitive Science</i> course.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Deep Reinforcement Learning and Its Neuroscientific Implications</>,
                        thumbnail: "/media/image/rpi.png",
                        tags: ["research", "academic", "ai"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/Deep+RL+and+Implications.pdf"}>Slides</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    This presentation is an adaptation of Matthew Botvinick's (et al.) 2020{" "}
                    <a href={deepRlLink} target="_blank" rel="noreferrer">
                        paper
                    </a>{" "}
                    by the same name. I had presented this as part of a series of talks given by students in RPI's{" "}
                    <i>Human and Machine Learning</i> course. The original paper serves as a review of current advances
                    in the field of reinforcement learning and how deep learning is enabling new discoveries. One
                    notable theme of the paper is how implementations of artificial reinforcement learning often closely
                    mirror the processes that occur within biological brains. The authors highlight some notable
                    consequences of this idea, primarily the fact that RL models can be used to accurately predict the
                    RL mechanisms within organic learners.
                </p>
                <p>
                    A point that I stressed in my live presentation comes near the conclusion of the paper where the
                    authors highlight some caveats to the comparisons between artificial and natural learners. Namely
                    that, while artificial systems are very capable in specific areas, they have yet to fully generalize
                    to a human-level quality. At the time of publication, RL systems did (and still to an extent do)
                    struggle with credit assignment and learning efficiency; i.e. the amount of data that a learner
                    needs to see before learning the general case for a pattern.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Moral High Ground: A Conversational Benchmark for LLM Moral Alignment</>,
                        thumbnail: "/media/image/ibm-research.png",
                        tags: ["research", "ai", "alignment"]
                    })
                }>
                <p>
                    As a part of my research visitation at the <i>IBM Thomas J. Watson Research Center</i>, I had given
                    a presentation summarizing my research progress over the summer. This research concerned the
                    abilities of language models to navigate through a series of moral and ethical quandaries, presented
                    in the form of conversational text-based games. My audience for this presentation consisted of other
                    student researchers and senior members of IBM's research teams.
                </p>
                <p>In the interest of confidentiality, I have omitted the original slide deck here.</p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>PredictChain: Empowering Collaboration for AI in a Blockchain-based Marketplace</>,
                        thumbnail: "/media/image/chainscience.png",
                        tags: ["research", "ai"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/PredictChain+ChainScience+23.pdf"}>Slides</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    <i>PredictChain</i> is a decentralized artificial intelligence marketplace that I developed,
                    primarily along with another student at RPI. It utilizes the <i>Algorand</i> blockchain to allow
                    users to host instances of this marketplace, with the goal of more freely distributing AI models,
                    data, and compute among all users.
                </p>
                <p>
                    This project was presented at the 2023 Mega Ace Hackathon where it won first place globally along
                    with several other awards including <i>Most Innovative Use of Technology</i>. The paper that I
                    co-wrote for this project was also accepted into the <i>ChainScience 2023</i> conference where it
                    was presented by one of my collaborators on the paper.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Homophone Decoding & Speech Based Emotion Detection</>,
                        thumbnail: "/media/image/rpi.png",
                        tags: ["research", "academic", "ai"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/Homophone+Decoding.pdf"}>Slides</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    This study, commissioned as a part of an RPI-IBM collaboration, focused on developing an automatic
                    speech recognition (ASR) model with better accuracy on homophones; words that sound similar, but
                    have different meanings. These could either be true homophones, or false homophones that merely
                    sound similar to the ground-truth words. Our techniques involved using corrector large language
                    models to help the composite model generate more context-sensitive predictions, along with using
                    fine-tuning on hard datasets that contained noisy samples and frequent use of homophones.
                </p>
                <p>
                    I had given this presentation along with my collaborators on the project as well as our principal
                    investigator at RPI. Our audience consisted mainly of our grantors from IBM as we gave this report
                    on our successful progress.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>On Picard Groups and Jacobians of Directed Graphs</>,
                        thumbnail: "/media/image/jmm.jpg",
                        tags: ["research", "academic"],
                        links: (
                            <>
                                <TileLink href={"/media/documents/JMMPresentation.pdf"}>Slides</TileLink>
                            </>
                        )
                    })
                }>
                <p>
                    This research was performed by myself, an advisor at <i>SUNY New Paltz</i>, and one of his
                    colleagues. In this research, we focused on the study of Chip-Firing games and how different
                    combinations of directed and undirected edges affect its winning strategies. This falls primarily
                    within the fields of linear algebra, graph theory, and combinatorics.
                </p>
                <p>
                    I created this presentation for the 2023 <i>Joint Mathematics Meetings</i> conference, where my
                    paper was accepted. At the conference, I was given the opportunity to present my work in a
                    seminar-style lecture to an audience of other interested conference attendees. Additionally, I was
                    invited back to New Paltz after graduation as a guest lecturer for their <i>Math and Cookies</i>{" "}
                    lecture series.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
