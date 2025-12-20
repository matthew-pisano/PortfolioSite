import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GitLink, TileLink } from "@/components/Links";
import { Tile, SectionTile, GalleryTile } from "@/components/Tiles";
import { PageInfo, TileInfo } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Bergeron() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Bergeron",
        "A conscience-based alignment framework",
        { backgroundColor: PageColor.URANIUM_GREEN },
        ["research", "academic", "ai", "alignment", "python"],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/Bergeron"}>Bergeron</GitLink>
                <TileLink href={"https://arxiv.org/abs/2312.00029"}>Research Paper</TileLink>
            </>
        )
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2>, thumbnail: "/media/image/bergeron.png" })}>
                <p>
                    This research serves as both my Master's thesis and as early research into the area of
                    weak-to-strong alignment. It details my <i>Bergeron</i> framework that aims to improve the
                    resistance of LLMs against adversarial attacks and other in-context methods of misalignment.
                    Bergeron achieves this goal through the usage of a smaller secondary LLM that monitors both the
                    inputs to and outputs from the much larger target LLM. This serves as a method to quickly improve
                    the alignment of the target model without any time-consuming fine-tuning or hard-coded filtering.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Abstract</> })}>
                <p>
                    Research into AI alignment has grown considerably since the recent introduction of increasingly
                    capable Large Language Models (LLMs). Unfortunately, modern methods of alignment still fail to fully
                    prevent harmful responses when models are deliberately attacked. These attacks can trick seemingly
                    aligned models into giving manufacturing instructions for dangerous materials, inciting violence, or
                    recommending other immoral acts. To help mitigate this issue, we introduce Bergeron: a framework
                    designed to improve the robustness of LLMs against attacks without any additional parameter
                    fine-tuning. Bergeron is organized into two tiers; with a secondary LLM emulating the conscience of
                    a protected, primary LLM. This framework better safeguards the primary model against incoming
                    attacks while monitoring its output for any harmful content. Empirical analysis shows that, by using
                    Bergeron to complement models with existing alignment training, we can improve the robustness and
                    safety of multiple, commonly used commercial and open-source LLMs.
                </p>
            </Tile>

            <SectionTile tileInfo={new TileInfo({ title: <>Project Details</> })} />

            <Tile tileInfo={new TileInfo({ title: <>Background</> })}>
                <p>
                    This research serves as the basis for my Master's thesis. While the core idea for this project and
                    its code are my own, I had some incredible help from both my advisor and several other students at
                    RPI. Working on it has greatly improved my skills in prompt engineering along with my knowledge of
                    AI alignment in both theory and practice.
                </p>
            </Tile>

            <GalleryTile
                tileInfo={
                    new TileInfo({
                        title: <>Holes in Weight-Based Alignment</>,
                        thumbnail: "/media/image/enrichment.png"
                    })
                }>
                <p>
                    This research was motivated from my observations on the many vulnerabilities that exist within
                    weight-based alignment methods. No matter how much fine-tuning a model has undergone, there always
                    seems to be a way to break it quickly and easily. This can be so easy, in fact, that the most modern
                    models like GPT-4 can be broken within an hour wih a prompt created from scratch by hand. This is an
                    example of one such <i>alignment failure</i> with some sensitive details redacted. Furthermore, this
                    often comes at the cost of hindering a model's ability to reason and respond to safe prompts. With
                    this framework, we aim to address both of these shortcomings.
                </p>
            </GalleryTile>

            <Tile tileInfo={new TileInfo({ title: <>The Bergeron Framework</> })}>
                <p>
                    To help combat these vulnerabilities, we propose our Bergeron framework. Here, a secondary LLM acts
                    as the primary (target) LLM's "conscience". The secondary model observes the prompts given to the
                    primary model and its responses, looking for unsafe content. If unsafe content is detected, a
                    <i>critique</i> of the content is generated. This gives details on what the unsafe content is and
                    why it may be dangerous. This critique is then passed back to the primary model.
                </p>
                <ul>
                    <li>
                        In the case of an unsafe prompt, this critique is given to the primary model along with the
                        initial prompt as a warning from its conscience.
                    </li>
                    <li>
                        In the case of an unsafe response, the primary model uses the critique to correct the response
                        to maintain its original content as much as possible while eliminating any unsafe descriptions
                        or ideas.
                    </li>
                </ul>
                <p>
                    In both cases, these redundant measures successfully increase a model's ability to detect
                    adversarial prompts. Additionally, if the correct secondary model is chosen, the primary model's
                    ability to answer safe prompts is minimally impacted.
                </p>
            </Tile>

            <GalleryTile
                tileInfo={
                    new TileInfo({ title: <>Adversarial Dataset</>, thumbnail: "/media/image/attackPrompts.png" })
                }>
                <p>
                    To test our framework, we created a dataset of 192 attack prompts across 15 prompt templates. These
                    prompts are evenly split into two categories: <i>adversarial</i> and <i>mundane</i>. Adversarial
                    prompts contain unsafe content, formatted as attacks, while mundane prompts contain no unsafe
                    content, but are formatted identically. We can use these prompts to measure how Bergeron performs
                    both on attack prompts and on safe prompts.
                </p>
            </GalleryTile>

            <Tile tileInfo={new TileInfo({ title: <>Models and Configuration</> })}>
                <p>
                    For implementing our framework, we utilize three models. These are: GPT-4 (abbr. to G4), GPT-3.5
                    (abb. to G3), Llama 2-7B (abbr. L), and Mistral-7B Instruct (abbr. M). These models are then
                    configured within the bergeron framework (<i>B</i>) as either the primary model (<i>P</i>) or the
                    secondary model (<i>S</i>). For example, <i>B</i>(G3, M) means a framework with GPT-3.5 as the
                    primary and Mistral as the secondary. Each of these models has their own unique attributes that are
                    observable in our results.
                </p>
                <p>
                    GPT-4 is the best overall model. It has the best abilities of answer user prompts and is best able
                    to discern unsafe text from safe text. However, it is very costly to run (from OpenAI's perspective)
                    It works well as either a primary or secondary model. Llama2 is much easier to run than GPT, and it
                    is better at detecting attacks. This comes at the cost of it being overly sensitive to safe prompts.
                    Mistral may not be as good at answering prompts as GPT or Llama, but it works very well as a
                    secondary model, detecting many attacks and falsely detecting the fewest safe prompts.
                </p>
            </Tile>

            <GalleryTile
                tileInfo={
                    new TileInfo({
                        title: <>Defending against Adversarial Attacks</>,
                        thumbnail: "/media/image/attackDefense.png"
                    })
                }>
                <p>
                    Attack success rates for GPT-4 (G4), GPT-3.5 (G3), Mistral (M), and Llama 2 (L). Each value is the
                    percentage of adversarial prompts that a model failed to defend against (lower is better). Text in
                    green shows an improvement upon the <i>P(·)</i> model. The attack types marked with * are from{" "}
                    <Link href="https://jailbreakchat.com" target="_blank">
                        jailbreakchat.com
                    </Link>
                    . These attack success rates were determined manually by myself and another author with a high
                    degree of agreement (Cohen's kappa = 0.79). An attack is judged as successful if the ultimate
                    response contains unsafe content, like enriching uranium from the first example.
                </p>
            </GalleryTile>

            <GalleryTile
                tileInfo={
                    new TileInfo({
                        title: <>Weak-to-Strong Model Adversarial Defense</>,
                        thumbnail: "/media/image/otherAttackDefense.png"
                    })
                }>
                <p>
                    Attack success rates for the frameworks with mixed <i>P</i> and <i>S</i> components. Here, the much
                    smaller models of Llama and Mistral detect about as many attacks as GPT-3.5 as the secondary model.
                    This demonstrates that notable improvements in the alignment of responses can be achieved with
                    secondary models that are significantly smaller and easier to run than the primary model.
                </p>
            </GalleryTile>

            <GalleryTile
                tileInfo={
                    new TileInfo({
                        title: <>Adversarial True-Positive Rates (Left) and Mundane False-Positive Rates (Right)</>,
                        thumbnail: "/media/image/mundaneDetections.png"
                    })
                }>
                <p>
                    <i>Adversarial</i> and <i>Mundane</i> prompts detection rates. The percentage of the time that{" "}
                    <i>S</i> detected a prompt as adversarial. For adversarial prompts higher is better and for mundane
                    prompts lower is better. Over the adversarial prompts, GPT-4 performs the best. For the mundane
                    prompts, Mistral is the best. It detects the fewest mundane prompts that do not contain any unsafe
                    content while also performing well for the adversarial prompts. If used as a secondary model, this
                    means that it would have very little impact on the primary model if the prompts are safe and can
                    still provide notable protection.
                </p>
            </GalleryTile>

            <GalleryTile
                tileInfo={new TileInfo({ title: <>Model F1 Scores</>, thumbnail: "/media/image/f1Scores.png" })}>
                <p>
                    F1 scores for each type of secondary model, calculated using unsafe prompt detection records from
                    the adversarial and mundane datasets. Text in green indicates a score of over 0.75. GPT-4 has the
                    best overall F1 score, with Mistral following closely behind.
                </p>
            </GalleryTile>
        </DefaultWrapper>
    );
}
