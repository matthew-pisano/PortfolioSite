import React, { createContext } from "react";

import Link from "next/link";

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
                capabilities of large language models and corresponding investments into them. As 2022 gave way to 2023,
                progress appeared to be accelerating without bounds, as if each new model represented a fundamental jump
                in capability over their predecessors. GPT-3.5 could answer simple questions and maintain a polite
                conversation and suddenly GPT-4 was passing the Bar exam only a few months later. Throughout 2023 and
                2024, the capabilities of these models continued to grow significantly, though not quite at its original
                clip
                <FootRef idx={1} context={footnoteContext} />. AlphaCode and AlphaEvolve
                <FootRef idx={2} /> were pushing the bounds of scientific discovery while coding assistant models were
                becoming ubiquitous among developers and engineers. Heading into 2025, the capabilities of coding models
                grew significantly with the popularization of agents and command-line coding tools. These frameworks,
                when combined with models possessing advanced reasoning training, resulted in a flood of artificially
                generated software, malware, and even mathematical proofs. Some are even using these models to solve a
                few of the more simple, yet still famous, Erdős problems <FootRef idx={3} context={footnoteContext} /> .
                At a cursory glance, it seems as if all tasks primarily solved through intellectual rigour will soon be
                completed (or at lest significantly aided) by transformer-based models.
            </p>
            <p>
                And yet, something still feels a little off about this. These accomplishments feel slightly hollow, on
                top of the usual "hollowness" often associated with the work of machines. Looking not only at the
                successes of these models, but also at their common failure modes, suggests that the outputs of these
                generative models appears somewhat "templated". As if these models have not fully generalized to their
                tasks, not quite reaching the depth of understanding that human experts can. Allow me to sketch out this
                rough feeling with a few examples.
            </p>
            <p>
                As the amount of LLM-generated code has grown, many have noticed a dip in quality that has coincided
                with this increase in quantity
                <FootRef idx={4} />. Especially in domains that are underrepresented in training data
                <FootRef idx={5} /> or those that require careful planning and analysis, generated code often falls
                short in terms of expected accuracy or security. Models may generate programs with subtle, or even
                blatant, security vulnerabilities
                <FootRef idx={6} />. They may generate code that appears roughly correct, but is not quite fit to the
                task at hand. Most obvious, they may behave erratically or have unexpected and catastrophic failure
                modes. Developers with their databases wiped or home directories delected can attest to this directly
                <FootRef idx={7} />.
            </p>
            <p>
                Technical debt has also become a hallmark of an artificially generated codebase. The frequency and
                consequence of this debt has led to some software engineers taking on full-time freelance work
                <FootRef idx={8} /> to untangle the spaghetti code that an LLM created yet could not solve for itself.
                This is likely a consequence of another well-documented shortcoming of these models: handling
                complexity. While this has improved over time with longer context windows and better performance on
                "Needle in a Haystack" benchmarks, the core issue still remains. As the scale and complexity of a
                project grows, models often struggle to fully grasp the relationships between functional units. Looking
                through a few of these codebases myself, it feels as if a set of engineers were hired one at a time,
                without communication or documentation, and tasked to work independently on a single project. Different
                files or modules feel disjoint with respect to some abstract sense of uniformity.
            </p>
            <p>
                In the domain of mathematics, LLMs has an impressive track record for solving complex problems and even
                for creating proofs to open questions. Looking loser, we find an eerily similar pattern. Many of these
                more complex and unique proofs have been with significant human aid. Those that have been solved
                primarily by a model are considered more mechanistic or formulaic by mathematicians
                <FootRef idx={9} />.
            </p>
            <p>
                None of this is to say that these models are not useful or even a hindrance to humans, they undoubtedly
                are (useful, that is). When used in conjunction with a human, both the quantity and quality of work can
                improve notably. My primary concern is with the claims of "generality" that come with each new model
                release or jump in capability. Additionally, the above is not meant as a well-formed argument by any
                means, each example is certainly up to interpretation or rationalization. However, these examples, and a
                more abstract feeling that is much more difficult to convey, have served as motivation for me. However,
                I am interested in a more thorough analysis of the theoretical capabilities and limitations of
                transformer-based generative models. Are these models undoubtedly capable of general, human-level
                intelligence with some extra data or more clever tweaks to the attention mechanism? Or are we witnessing
                a subtle (and decentralized) form of overfitting where models continue to attain higher and higher
                scores on benchmarks, but level-off in terms of performance on non-benchmarkable tasks? My intuition is
                that we are solidly in the latter scenario and the following will serve as my attempt at a more formal
                justification for this intuition.
            </p>
            <hr />
            <FootNote idx={1} context={footnoteContext}>
                At least, in my opinion, as I paid close attention to research papers and corporate releases.
            </FootNote>
            <FootNote idx={2}>
                See DeepMind's{" "}
                <Link
                    href={
                        "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
                    }>
                    announcement
                </Link>
                .
            </FootNote>
            <FootNote idx={3} context={footnoteContext}>
                At time of writing, this includes
                <Link
                    href={
                        "https://x.com/neelsomani/status/2010215162146607128?utm_source=www.theneurondaily.com&utm_medium=referral&utm_campaign=ai-cracks-legendary-erdos-problems"
                    }>
                    #397
                </Link>
                ,{" "}
                <Link
                    href={
                        "https://www.erdosproblems.com/728?utm_source=www.theneurondaily.com&utm_medium=referral&utm_campaign=ai-cracks-legendary-erdos-problems"
                    }>
                    #728
                </Link>
                , and <Link href={"https://x.com/AcerFur/status/2010054423398232080"}>#729</Link>.
            </FootNote>
            <FootNote idx={4} context={footnoteContext}>
                See this{" "}
                <Link href={"https://sloanreview.mit.edu/article/the-hidden-costs-of-coding-with-generative-ai/"}>
                    article
                </Link>{" "}
                from MIT's Sloan Management Review.
            </FootNote>
            <FootNote idx={5} context={footnoteContext}>
                For example, models can struggle on languages that appear less frequently in their training set like{" "}
                <Link
                    href={"https://datafloq.com/why-the-hardest-coding-languages-are-still-difficult-for-ai-in-2025/"}>
                    F# and Haskell
                </Link>
                .
            </FootNote>
            <FootNote idx={6} context={footnoteContext}>
                See an <Link href={"https://dl.acm.org/doi/10.1145/3610721"}>NYU study</Link> on GitHub copilot, this{" "}
                <Link href={"https://owaspai.org/docs/2_threats_through_use/"}>OWASP report</Link> on manipulation by
                bad actors, and another report from the{" "}
                <Link
                    href={
                        "https://cloudsecurityalliance.org/blog/2025/07/09/understanding-security-risks-in-ai-generated-code"
                    }>
                    Cloud Security Alliance
                </Link>
                .
            </FootNote>
            <FootNote idx={7} context={footnoteContext}>
                See a <Link href={"https://x.com/jasonlk/status/1946069562723897802?lang=en"}>Replit agent</Link>{" "}
                deleting a database or removing a user's{" "}
                <Link
                    href={
                        "https://www.reddit.com/r/ClaudeAI/comments/1pgxckk/claude_cli_deleted_my_entire_home_directory_wiped/"
                    }>
                    home directory
                </Link>
                , in addition to innumerable, similar horror stories.
            </FootNote>
            <FootNote idx={8} context={footnoteContext}>
                See this{" "}
                <Link href={"https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop"}>KUOW</Link> article
                on the subject.
            </FootNote>
            <FootNote idx={9} context={footnoteContext}>
                This{" "}
                <Link href={"https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems"}>
                    GitHub page
                </Link>{" "}
                gives a good real-time summary of results as they come out. Terence Tao has described LLMs trained for
                mathematical proof as "a really clever student who has memorized everything for the test but doesn’t
                have a deep understanding of the concept", according to the{" "}
                <Link href={"https://www.nytimes.com/2026/01/14/technology/ai-ideas-chat-gpt-openai.html"}>
                    New York Times
                </Link>
                . This is along with another widely reported quote that states that recent Erdős problem completions
                have been "low-hanging fruit", but I was unable to find the original source in my search.
            </FootNote>
        </BlogWrapper>
    );
}

export { blogInfo };
