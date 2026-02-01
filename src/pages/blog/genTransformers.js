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
                <FootRef idx={2} context={footnoteContext} /> were pushing the bounds of scientific discovery while
                coding assistant models were becoming ubiquitous among developers and engineers. Heading into 2025, the
                capabilities of coding models grew significantly with the popularization of agents and command-line
                coding tools. These frameworks, when combined with models possessing advanced reasoning training,
                resulted in a flood of artificially generated software, malware, and even mathematical proofs. Some are
                even using these models to solve a few of the more simple, yet still famous, Erdős problems
                <FootRef idx={3} context={footnoteContext} />. At a cursory glance, it seems as if all tasks primarily
                solved through intellectual rigour will soon be completed (or at lest significantly aided) by
                transformer-based models.
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
                <FootRef idx={4} context={footnoteContext} />. Especially in domains that are underrepresented in
                training data
                <FootRef idx={5} context={footnoteContext} /> or those that require careful planning and analysis,
                generated code often falls short in terms of expected accuracy or security. Models may generate programs
                with subtle, or even blatant, security vulnerabilities
                <FootRef idx={6} context={footnoteContext} />. They may generate code that appears roughly correct, but
                is not quite fit to the task at hand. Most obvious, they may behave erratically or have unexpected and
                catastrophic failure modes. Developers with their databases wiped or home directories delected can
                attest to this directly
                <FootRef idx={7} context={footnoteContext} />.
            </p>
            <p>
                Technical debt has also become a hallmark of an artificially generated codebase. The frequency and
                consequence of this debt has led to some software engineers taking on full-time freelance work
                <FootRef idx={8} context={footnoteContext} /> to untangle the spaghetti code that an LLM created yet
                could not solve for itself. This is likely a consequence of another well-documented shortcoming of these
                models: handling complexity. While this has improved over time with longer context windows and better
                performance on "Needle in a Haystack" benchmarks, the core issue still remains. As the scale and
                complexity of a project grows, models often struggle to fully grasp the relationships between functional
                units. Looking through a few of these codebases myself, it feels as if a set of engineers were hired one
                at a time, without communication or documentation, and tasked to work independently on a single project.
                Different files or modules feel disjoint with respect to some abstract sense of uniformity.
            </p>
            <p>
                In the domain of mathematics, LLMs has an impressive track record for solving complex problems and even
                for creating proofs to open questions. Looking loser, we find an eerily similar pattern. Many of these
                more complex and unique proofs have been with significant human aid. Those that have been solved
                primarily by a model are considered more mechanistic or formulaic by mathematicians
                <FootRef idx={9} context={footnoteContext} />.
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
            <BlogSection>Necessary Conditions</BlogSection>
            <p>
                Before we can examine what general intelligence would like like when exhibited by an AI model, we must
                first identify a few capabilities that any generally intelligent agent must have. Unfortunately, there
                is only one
                <FootRef idx={10} context={footnoteContext} /> example of such an agent that currently exists.
                Fortunately, whomever is reading this is likely an example of such an agent: a human. This is
                significant because we each have a (largely) unobscured view into our own interiorities. Through
                observing our own behavior, how we interact with and learn about our environments, we can make some
                educated guesses as to some characteristics that are likely necessary conditions for a being of general
                intelligence (relative to ourselves, that is).
            </p>
            <p>
                So what abilities do we have, precisely, that allow us to quickly learn about our environments,
                generalize to new tasks from very few (or zero!) examples, execute preplanned procedures, etc. The bad
                news is that if we knew the answer to this question with a fine enough granularity, then we would
                already have artificial generally intelligent models. The good news is that a few of our mental
                capabilities stand out immediately.
            </p>
            <BlogSection level={2}>We are not Our Environments</BlogSection>
            <p>
                This first quality may appear to be embarrassingly obvious. However, it directly enables some abilities
                that we have largely been unsuccessful in emulating. Recall my usage of the concept of "interiority" a
                moment ago. We actually have an interiority. Over an arbitrary number of time steps, we can reason,
                practice, plan, and self-reflect without impacting our environment at all. Save for abnormal states of
                altered consciousness, we can imagine ourselves taking some action without actually taking that action
                and altering our environment. If we would like to sketch out a conversation, program, or mathematical
                proof, we can develop and refine our ideas over time without needing to speak a single word, type a
                single command, or commit any formulae to paper. Alright, but why do we need to have an internal state
                for this? Why can we not simply think directly within our environment without an extra layer of
                encapsulation?
            </p>
            <p>
                There are two primary advantages. Most apparently, it means that we can idempotently simulate
                modifications to our environment without actually making those modifications. Suppose that I would like
                to improvise something for breakfast. I do not have a recipie, but I do have some breakfast-making
                experience that I can pull from. If I decide to make an omelette, I can imagine approximately how much
                milk to mix with the eggs, which spices may complement the omelette's flavor, and I can imagine
                approximately what would happen if I kept the stove's heat too high or too low. Note that I do not
                actually have to step foot into the kitchen to foresee the unworkable consistency of over-milked eggs,
                the strange taste of cinnamon-sugar eggs, or the charred mess of a burnt meal. For better cooks than I,
                this may seem trivially intuitive, but this scenario demonstrates how we can develop an initial plan
                (eggs, scramble, milk, season, cook) and productively refine its parameters (ingredient ratios, slice
                mixes, cooking intensity) over time without needing to actually carry out any actions. More
                mechanistically, I can easily foresee the consequences of running <code>rm -rf /</code> without
                accidentally running the command on a computer (or myself if I was a machine).
            </p>
            <p>
                This is useful, though perhaps a similar effect could be achieved through the usage of situated
                cognition, writing or drawing out the consequences in advance? We could, but we would be losing some
                conceptual fidelity in doing so. This leads neatly into the second advantage of environment-self
                isolation. Those who design and engineer software regularly experience this "lossiness" on a regular
                basis. Suppose I design and implement a complex piece of software that had initially undergone a
                significant amount of planning before implementation. At some later date, I would like to make a
                revision to this software. Even with the help of comprehensive documentation, it will still take a
                little while to accustom myself to the code once again, to get a "feel" for how it is laid out and
                operates. Why is this? All of the code and documentation exists; I do not need to manipulate anything
                into a form that I can then understand. Back when I was originally planning the software's structure, I
                had within my mind a nuanced and multifaceted representation of the problem and planned solution. This
                includes potential implementations not taken, edge cases, and a mental mapping of what went where. When
                the software is finally written, much of this information is lost as my brain forgets over time. Of
                course, this information loss can be lessened with good documentation, but much of my subjective,
                internal representation cannot be concisely represented by text or diagrams. Now imagine that for every
                token written I forgot all of my internal representation and had to rebuild it just from what I had
                previously written down
                <FootRef idx={11} context={footnoteContext} />. If I was unable to isolate my subjective representation
                of the software from the environment, his would be the case. In reality, my mind does allow for this
                isolation so, once I have refreshed my knowledge, I can continue to directly manipulate the embedded
                form of my plan directly without needing to lossfully convert my feature-rich representation to
                feature-starved text at each step.
            </p>
            <hr />
            <FootNote idx={1} context={footnoteContext}>
                At least, in my opinion, as I paid close attention to research papers and corporate releases.
            </FootNote>
            <FootNote idx={2} context={footnoteContext}>
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
                At time of writing, this includes{" "}
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
            <FootNote idx={10} context={footnoteContext}>
                Or 8.273 billion examples, depending on your counting criteria.
            </FootNote>
            <FootNote idx={11} context={footnoteContext}>
                For anyone familiar with the Key-Value cache (or KV cache) optimization for LLMs, this is exactly the
                problem that the optimization is designed to solve! This does not completely solve our problem, though.
                I purely KV cached mind could faithfully reload its past states, but would still need to reason{" "}
                <i>within</i> its environment to incorporate new changes. KV caches can also become prohibitively
                expensive for very long contexts where each token representation needs to be cached.
            </FootNote>
        </BlogWrapper>
    );
}

export { blogInfo };
