import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { Tile, SectionTile, GalleryTile } from "@/components/Tiles";
import { PageInfo, TileInfo, TRANSLUCENT } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function HighGround() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Moral High Ground",
        "A conversational benchmark for LLM moral alignment",
        { backgroundColor: PageColor.URANIUM_GREEN },
        ["research", "academic", "ai", "python"],
        []
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2>, thumbnail: "/media/image/tw-llm.png" })}>
                <p>
                    Here, I developed a text-based games benchmark, based on Microsoft's TextWorld environment. As part
                    of my employment with <i>IBM Research</i>, I created this dataset of 30 games with the aim of using
                    them to more effectively align LLMs with human moral values. Each game in this dataset is a
                    conversation between the player and the system on some moral topic. The dialog options that the
                    player takes in this game determine its moral standing. These games cover a wide variety of
                    situations and topics, creating a well-rounded benchmark.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: (
                            <>
                                NOTE: This research has not yet reached its final revision. Thus, identifying
                                information, such has the title, has been omitted.
                            </>
                        )
                    })
                }
                style={{ backgroundColor: TRANSLUCENT }}
            />

            <Tile tileInfo={new TileInfo({ title: <>Abstract (Abridged)</> })}>
                <p>
                    We introduce a benchmark for the evaluation of large language models on moral values and business
                    principles. The main focus of this framework is to evaluate the moral and ethical reasoning
                    abilities of large language models using <i>text-based games</i>, which can be played by both human
                    players and models. We present these games to the player as an interaction between the player and
                    the environment. Each action in these games is associated with a reward based on moral and ethical
                    values, i.e., a higher reward implies higher moral values and vice versa. This will enable us to
                    compare different models and human players on moral values. In addition, this framework can be used
                    to teach/tune the large language models using these text-based games on desired moral values and
                    business principles. Through this framework, we hope to expand upon the diverse area of alignment
                    techniques to help ensure future models grasp the often nuanced topics of moral and ethical values.
                </p>
            </Tile>

            <SectionTile tileInfo={new TileInfo({ title: <>Project Details</> })} />

            <Tile tileInfo={new TileInfo({ title: <>Background</> })}>
                <p>
                    I worked on this project as a part of my 2023 research visitation with IBM Research. I worked with a
                    small team of collaborators and mentors to better learn about model fine-tuning and text-based
                    games.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Benchmark Composition</> })}>
                <p>
                    The topics from within these games are based off of the five moral axes presented by{" "}
                    <Link href="https://arxiv.org/abs/2011.00620" target="_blank">
                        Forbes et al. (2021)
                    </Link>{" "}
                    in their <i>Social Chemistry</i> dataset. Each of these axes has two opposing moral principles (e.g.
                    care {"<->"} harm). We created at least one game for each of these directions. Additionally, we
                    created games for business principles found within the{" "}
                    <Link href="https://www.ibm.com/investor/governance/business-conduct-guidelines" target="_blank">
                        IBM Business Conduct Guidelines
                    </Link>{" "}
                    document so that our dataset covered two domains: social ethics and business ethics. Each game is
                    scores on a range from -100 to 100 (-1 to 1 when normalized) where a score of 100 is the most moral
                    path and a score of -100 is the least.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Models</> })}>
                <p>
                    We use five models to evaluate the effectiveness of our benchmark. These are:
                    <ul>
                        <li>Flan-UL2</li>
                        <li>Flan-T5</li>
                        <li>Falcon</li>
                        <li>Open Assistant</li>
                        <li>Llama 2</li>
                    </ul>
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Evaluation</> })}>
                <p>
                    To evaluate our benchmark, we use two different methods on different models. The first method we use
                    is instruction-tuning. This involves adding optimal moral choices from our games into the prompts
                    for other games or arbitrary prompts. The goal of including these in prompts is to provide models
                    with optimal moral choices in-context to improve their decision making skills. We perform
                    instruction-tuning on all five models. The second method of evaluation that we use is fine-tuning.
                    Here, we fine-tune a Flan-T5 small model with moral scenarios from our games along with the most
                    optimal choice. Fine-tuning the models on these samples encourages it to pick similarly optimal
                    choices in other situations.
                </p>
            </Tile>

            <GalleryTile
                tileInfo={
                    new TileInfo({ title: <>Control Results</>, thumbnail: "/media/image/tw-llm-all-all-games.png" })
                }>
                <p>
                    Our control results showed the Flan models performing the best at the games, an approximately equal
                    win-loss ratio. The other models performed notably worse, often scoring in the negatives for most
                    games.
                </p>
            </GalleryTile>

            <GalleryTile
                tileInfo={
                    new TileInfo({
                        title: <>Instruction-Tuning Results</>,
                        thumbnail: "/media/image/tw-llm-instruction-tuned-all-games.png"
                    })
                }>
                <p>
                    After including our game samples as instruction-tuning, the models performed notably better. This is
                    especially try for the non-Flan models. After instruction-tuning, they are much closer to an even
                    win-loss ratio.
                </p>
            </GalleryTile>

            <GalleryTile
                tileInfo={
                    new TileInfo({ title: <>Control Results</>, thumbnail: "/media/image/tw-llm-tuned-all-games.png" })
                }>
                <p>
                    After fine-tuning our Flan-t5 small model, its performance rose notably as well. Despite only being
                    a fraction of the size of the XXL model that we use, the small model was able to perform at nearly
                    the same level after fine-tuning. It even out-performs it in some of the held-out games from its
                    training.
                </p>
            </GalleryTile>
        </DefaultWrapper>
    );
}
