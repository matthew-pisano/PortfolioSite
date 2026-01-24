import React, { createContext } from "react";

import { FootNote, FootRef } from "@/components/widgets/FootNote";
import BlogWrapper, { BlogInfo, BlogSection } from "@/components/wrappers/BlogWrapper";

const blogInfo = new BlogInfo(
    "On Generally Intelligent Transformers",
    "An exploration of the theoretical capabilities and limitations of transformer models",
    new Date(2026, 0, 22),
    "genTransformers"
);

// Create a context for the blog
const footnoteContext = createContext(null);

export default function GenTransformers() {
    return (
        <BlogWrapper
            pageName={blogInfo.anchor}
            title={blogInfo.title}
            subtitle={blogInfo.subtitle}
            date={blogInfo.date}
            footnoteContext={footnoteContext}>
            <BlogSection>Introduction</BlogSection>
            <p>
                It goes without saying that the past three years have represented an unprecedented growth in both the
                capabilities of large language models and corresponding investments. As 2022 gave way to 2023, progress
                appeared to be accelerating without bounds. It seemed as if new models represented fundamental jumps in
                capability over their predecessors. GPT-3.5 could answer simple questions and maintain a polite
                conversation and suddenly GPT-4 was passing the Bar exam only a few months later. Throughout 2023 and
                2024, the capabilities of these models continued to grow significantly, though not quite at its original
                clip
                <FootRef idx={1} context={footnoteContext} />. AlphaCode and AlphaGeometry were pushing the bounds of
                scientific discovery while coding assistant models were becoming ubiquitous among developers and
                engineers. Heading into 2025, the capabilities of coding models grew significantly with the
                popularization of agents and command-line coding tools. These frameworks, combined with models with
                advanced reasoning training, resulted in a flood of artificially generated software, malware, and even
                mathematical proofs. Some are even using these models to solve a few of the more simple, yet still
                famous, Erdős problems. At a cursory glance, it seems as if all tasks primarily solved through
                intellectual rigour will soon be completed (or at lest significantly aided) by transformer-based models.
            </p>
            <p>
                And yet, something still feels a little off about this. These accomplishments feel slightly hollow, on
                top of the usual "hollowness" often associated with the work of machines. Looking, not only as the
                successes of these models, but also at their common failure modes, the outputs of these generative
                models appears somewhat "templated". As if these models have not fully generalized to their tasks, not
                quite reaching the depth of understanding that human experts can. Allow me to sketch out this rough
                feeling with a few examples.
            </p>
            <p>
                As the amount of LLM-generated code has grown, many have noticed a dip in quality that has coincided
                with this increase in quantity. Especially in domains that are underrepresented in training data or
                those that require careful planning and analysis, generated code often falls short in terms of expected
                accuracy or security. Models may generate programs with subtle, or even blatant, security
                vulnerabilities. They may generate code that appears roughly correct, but is not quite fit to the task
                at hand. Most obvious, they may behave erratically or have unexpected and catastrophic failure modes.
                Developers with their databases wiped or home directories delected can attest to this directly.
            </p>
            <p>
                Technical debt has also become a hallmark of an artificially generated codebase. The frequency and
                consequence of this debt has led to some software engineers taking on full-time freelance work to
                untangle the spaghetti code that an LLM created yet could not solve for itself. This is likely a
                consequence of another well-documented shortcoming of these models: handling complexity. While this has
                improved over time with longer context windows and better performance on "Needle in a Haystack"
                benchmarks, the core issue still remains. As the scale and complexity of a project grows, models often
                struggle to fully grasp the relationships between functional units. Looking through a few of these
                codebases myself, it feels as if a set of engineers were hired one at a time, without communication or
                documentation. Different files or modules feel disjoint with respect to some abstract sense of
                uniformity.
            </p>
            <p>
                In the domain of mathematics, LLMs has an impressive track record for solving complex problems and even
                for creating proofs to open questions. Looking loser, we find an eerily similar pattern. Many of these
                more complex and unique proofs have been with significant human aid. Those that have been solved
                primarily by a model are considered more mechanistic or formulaic by mathematicians.
            </p>
            <p>
                None of this is to say that these models are not useful or even a hindrance to humans, they undoubtedly
                are. When used in conjunction with a human, both the quantity and quality of work can improve notably.
                My primary concern is with the claims of "generality" that come with each new model release or jump in
                capability. Additionally, the above is not meant as a well-formed argument by any means, each example is
                certainly up to interpretation or rationalization. However, these examples, and a more abstract feeling
                that is much more difficult to convey, have served as motivation for a more thorough analysis of the
                theoretical capabilities and limitations of transformer-based generative models. Are these models
                undoubtedly capable of general, human-level intelligence with some extra data or more clever tweaks to
                the attention mechanism? Or are we witnessing a subtle form of overfitting where models continue to
                attain higher ad higher scores on benchmarks, but level-off in terms of performance on non-benchmarkable
                tasks? My intuition is that we are solidly in the latter scenario.
            </p>
            <hr />
            <FootNote idx={1} context={footnoteContext}>
                At least, in my opinion, as I paid close attention to research papers and corporate releases.
            </FootNote>
        </BlogWrapper>
    );
}

export { blogInfo };
