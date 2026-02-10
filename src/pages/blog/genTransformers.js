import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import { FootnoteProvider, Footnote, FootnoteList } from "@/components/widgets/FootNote";
import BlogWrapper, { BlogInfo, BlogSection } from "@/components/wrappers/BlogWrapper";

const blogInfo = new BlogInfo(
    "On Generally Intelligent Transformers",
    "An exploration of the theoretical capabilities and limitations of transformer models",
    new Date(2026, 0, 22),
    "genTransformers"
);

export default function GenTransformers() {
    return (
        <BlogWrapper
            pageName={blogInfo.anchor}
            title={blogInfo.title}
            subtitle={blogInfo.subtitle}
            date={blogInfo.date}>
            <FootnoteProvider label={blogInfo.anchor}>
                <BlogSection>Introduction</BlogSection>
                <p>
                    It goes without saying that the past three years have represented unprecedented growth in both the
                    capabilities of large language models and the corresponding investments into them. While
                    transformer-based language models had been in development since 2017, the catalyst of their current
                    surge in popularity (and capability) came from the launch of ChatGPT in late 2022. As 2022 gave way
                    to 2023, progress appeared to be accelerating without bounds, as if each new model represented a
                    fundamental jump in capability over their predecessors. GPT-3.5 could answer simple questions and
                    maintain a polite conversation, yet within only a few months, GPT-4 was suddenly passing the Bar
                    exam. Throughout 2023 and 2024, the capabilities of these models continued to grow significantly,
                    though not quite at its original clip
                    <Footnote>
                        At least, in my opinion, as I paid close attention to research papers and corporate releases.
                    </Footnote>
                    . AlphaCode and AlphaEvolve
                    <Footnote>
                        See DeepMind's{" "}
                        <Link
                            href={
                                "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
                            }>
                            announcement
                        </Link>
                        .
                    </Footnote>{" "}
                    were pushing the bounds of scientific discovery while coding assistant models were becoming
                    ubiquitous among developers and engineers. Heading into 2025, the capabilities of coding models grew
                    significantly with the popularization of agents and command-line coding tools. These frameworks,
                    when combined with models possessing advanced reasoning training, resulted in a flood of
                    artificially generated software, malware, and even mathematical proofs. Some are even using these
                    models to solve a few of the more simple, yet still famous, Erdős problems
                    <Footnote>
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
                    </Footnote>
                    . At a cursory glance, it seems as if all tasks primarily solved through intellectual rigour will
                    soon be completed (or at lest significantly aided) by transformer-based models.
                </p>
                <p>
                    And yet, something still feels a little off about this. These accomplishments feel slightly hollow,
                    on top of the usual "hollowness" often associated with the work of machines. Looking not only at the
                    successes of these models, but also at their common failure modes, suggests that the outputs of
                    these generative models appears somewhat "templated". As if these models have not fully generalized
                    to their tasks, not quite reaching the depth of understanding that human experts can. Allow me to
                    sketch out this rough feeling with a few examples.
                </p>
                <p>
                    As the amount of LLM-generated code has grown, many have noticed a dip in quality that has coincided
                    with this increase in quantity
                    <Footnote>
                        See this{" "}
                        <Link
                            href={"https://sloanreview.mit.edu/article/the-hidden-costs-of-coding-with-generative-ai/"}>
                            article
                        </Link>{" "}
                        from MIT's Sloan Management Review.
                    </Footnote>
                    . Especially in domains that are underrepresented in training data
                    <Footnote>
                        For example, models can struggle on languages that appear less frequently in their training set
                        like{" "}
                        <Link
                            href={
                                "https://datafloq.com/why-the-hardest-coding-languages-are-still-difficult-for-ai-in-2025/"
                            }>
                            F# and Haskell
                        </Link>
                        .
                    </Footnote>{" "}
                    or those that require careful planning and analysis, generated code often falls short in terms of
                    expected accuracy or security. Models may generate programs with subtle, or even blatant, security
                    vulnerabilities
                    <Footnote>
                        See an <Link href={"https://dl.acm.org/doi/10.1145/3610721"}>NYU study</Link> on GitHub copilot,
                        this <Link href={"https://owaspai.org/docs/2_threats_through_use/"}>OWASP report</Link> on
                        manipulation by bad actors, and another report from the{" "}
                        <Link
                            href={
                                "https://cloudsecurityalliance.org/blog/2025/07/09/understanding-security-risks-in-ai-generated-code"
                            }>
                            Cloud Security Alliance
                        </Link>
                        .
                    </Footnote>
                    . They may generate code that appears roughly correct, but is not quite fit to the task at hand.
                    Most obvious, they may behave erratically or have catastrophic failure modes. Developers with their
                    databases wiped or home directories deleted can attest to this directly
                    <Footnote>
                        See a{" "}
                        <Link href={"https://x.com/jasonlk/status/1946069562723897802?lang=en"}>Replit agent</Link>{" "}
                        deleting a database or removing a user's{" "}
                        <Link
                            href={
                                "https://www.reddit.com/r/ClaudeAI/comments/1pgxckk/claude_cli_deleted_my_entire_home_directory_wiped/"
                            }>
                            home directory
                        </Link>
                        , in addition to innumerable, similar horror stories.
                    </Footnote>
                    .
                </p>
                <p>
                    Technical debt has also become a hallmark of an artificially generated codebase. The frequency and
                    consequence of this debt has led to some software engineers taking on full-time freelance work
                    <Footnote>
                        See this{" "}
                        <Link href={"https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop"}>KUOW</Link>{" "}
                        article on the subject.
                    </Footnote>{" "}
                    to untangle the spaghetti code that an LLM had created yet could not maintain or debug on its own.
                    This is a consequence of another well-documented shortcoming of these models: handling complexity.
                    While this has improved over time with longer context windows and better performance on "Needle in a
                    Haystack" benchmarks, the core issue still remains. As the scale and complexity of a project grows,
                    models often struggle to fully grasp the relationships between functional units. Looking through a
                    few of these codebases myself, it feels as if a set of engineers were hired one at a time, without
                    communication or documentation, and tasked to work independently on a single project. Different
                    files or modules feel disjoint with respect to some abstract sense of uniformity.
                </p>
                <p>
                    In the domain of mathematics, LLMs have an impressive track record for solving complex problems and
                    even for creating proofs to open questions. Looking closer, we find an eerily similar pattern. Many
                    of these more complex and unique proofs have written been with significant human aid. Those that
                    have been solved primarily by a model are considered more mechanistic or formulaic by mathematicians
                    <Footnote>
                        This{" "}
                        <Link
                            href={
                                "https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems"
                            }>
                            GitHub page
                        </Link>{" "}
                        gives a good real-time summary of results as they come out. Terence Tao has described LLMs
                        trained for mathematical proof as "a really clever student who has memorized everything for the
                        test but doesn’t have a deep understanding of the concept", according to the{" "}
                        <Link href={"https://www.nytimes.com/2026/01/14/technology/ai-ideas-chat-gpt-openai.html"}>
                            New York Times
                        </Link>
                        . This is along with another widely reported quote that states that recent Erdős problem
                        completions have been "low-hanging fruit", but I was unable to find the original source in my
                        search.
                    </Footnote>
                    .
                </p>
                <p>
                    None of this is to say that these models are not useful or even a hindrance to humans, they
                    undoubtedly are (useful, that is). When used in conjunction with a human, both the quantity and
                    quality of work can improve notably. My primary concern is with the claims of "generality" that come
                    with each new model release or jump in capability. Additionally, the above is not meant as a
                    well-formed argument by any means, each example is certainly up to interpretation or
                    rationalization. However, these examples, and a more abstract feeling that is much more difficult to
                    convey, have served as motivation for me. I am interested in a more thorough analysis of the
                    theoretical capabilities and limitations of transformer-based generative models. Are these models
                    undoubtedly capable of general, human-level intelligence with some extra data or more clever tweaks
                    to the attention mechanism? Or are we witnessing a subtle (and decentralized) form of overfitting
                    where models continue to attain higher and higher scores on benchmarks, but level-off in terms of
                    performance on non-benchmarkable tasks? My intuition is that we are solidly in the latter scenario
                    and the following will serve as my attempt at a more formal justification for this intuition.
                </p>
                <p>
                    Throughout this essay, we will frequently be referencing "generality" or an artificial general
                    intelligence (AGI). Therefore, a more precise definition is in order. An agent (an AI system in this
                    case) that is "general" or "generally intelligent" is able to perform at, or over, human levels of
                    capability for the vast majority of cognitive tasks. Some narrow this definition to "the vast
                    majority of economically relevant tasks", but I would argue that solving such a task set would be
                    AI-complete
                    <Footnote>
                        A term coined by computer scientist Fanya Montalvo in 1988. A task (or set of tasks) is
                        considered AI-complete if it requires artificial general intelligence to solve. Any attempt to
                        solve such a problem would be tantamount to solving the problem of AGI in general.
                    </Footnote>{" "}
                    and thus a tautological distinction. The creation of an artificial (usually computer-based) general
                    agent is the metaphorical "holy grail" of AI research.
                </p>
                <BlogSection>Necessary Conditions</BlogSection>
                <p>
                    Before we can examine what general intelligence would like like when exhibited by an AI model, we
                    must first identify a few capabilities that any generally intelligent agent must have. From there,
                    we can understand the properties that many contemporary AI systems lack. Unfortunately, there is
                    only one
                    <Footnote>Or 8.273 billion examples, depending on your counting criteria.</Footnote> example of such
                    an agent that currently exists. Fortunately, whomever is reading this is (likely) an example of such
                    an agent: a human. This is significant because we each have a (largely) unobscured view into our own
                    interiorities. Through observing how we interact with and learn about our environments, we can make
                    some educated guesses as to which characteristics that a generally intelligent agent may need.
                </p>
                <p>
                    So what core cognitive abilities do we have, precisely? What allows us to quickly learn about our
                    environments, generalize to new tasks from very few (or zero!) examples, and execute preplanned
                    procedures? The bad news is that if we knew the full answer to this question, then we would have
                    already solved the task of creating an AGI. The good news is that we can easily identify a few of
                    our mental capabilities that enable our performance on a wide range of cognitive tasks.
                </p>
                <BlogSection level={2}>We are not Our Environments</BlogSection>
                <p>
                    This first quality may appear to be embarrassingly obvious. However, it directly enables some
                    abilities that we have largely been unsuccessful in emulating. Recall my usage of the concept of
                    "interiority" a moment ago: we actually have an interiority. Over an arbitrary number of time steps,
                    we can reason, practice, plan, and self-reflect without impacting our environment at all. Save for
                    abnormal states of altered consciousness, we can imagine ourselves taking some action without
                    actually taking that action and altering our environment. If we would like to sketch out a
                    conversation, program, or mathematical proof, we can develop and refine our ideas over time without
                    needing to speak a single word, type a single command, or commit any formulae to paper. Why do we
                    need to have an internal state for this, though? Why can we not simply think directly within our
                    environment without an extra layer of encapsulation?
                </p>
                <p>
                    There are two primary advantages. Most apparently, it means that we can idempotently simulate
                    modifications to our environment without actually making those modifications. Suppose that I would
                    like to improvise something for breakfast. I do not have a recipie, but I do have some
                    breakfast-making experience that I can pull from. If I decide to make an omelette, I can imagine
                    approximately how much milk to mix with the eggs, which spices may complement the omelette's flavor,
                    and what would happen if I kept the stove's heat too high or too low. Note that I do not actually
                    have to step foot into the kitchen to foresee the unworkable consistency of over-milked eggs, the
                    strange taste of cinnamon-sugar eggs, or the charred mess of a burnt meal. This again may seem
                    trivially intuitive, but our ability to simulate environmental actions is integral to our cognition.
                    We can, transparently and intuitively, develop an initial plan (scramble, milk, season, cook) and
                    productively refine its parameters (ingredient ratios, spice mixes, cooking intensity) over time
                    without needing to actually carry out any actions. More concisely, I can easily foresee the
                    consequences of running <code>rm -rf /</code> without accidentally running the command on a computer
                    (or myself if I was a machine).
                </p>
                <p>
                    This is useful, though could we not achieve a similar effect through the usage of situated
                    cognition, writing or drawing out the consequences in advance? We could, but we would be losing some
                    conceptual fidelity in doing so. This leads neatly into the second advantage of an environment-self
                    isolation. Those who design software regularly experience this "lossiness" on a regular basis.
                    Suppose I design and implement a complex piece of software. At some later date, I would like to make
                    a revision to this program. Even with the help of comprehensive documentation, it will still take a
                    little while to accustom myself to the code once again, to get a "feel" for how it is laid out and
                    operates (even when accounting for the time to physically read the documentation). Why is this? All
                    of the code and documentation exists; I do not need to manipulate anything into a form that I can
                    then understand. Back when I was originally planning the software's structure, I had within my mind
                    a nuanced and multifaceted representation of the problem and planned solution. This includes
                    potential implementations not taken, edge cases, and a mental mapping of what went where. After the
                    software is fully written, much of this information is lost as my brain forgets over time. Of
                    course, this information loss can be lessened with good documentation, but much of my subjective,
                    internal representation cannot be concisely represented by text or diagrams. Now imagine that, after
                    writing each element of my program, I forgot all of my internal representation and had to rebuild it
                    from scratch, using what I had previously written down as a reference
                    <Footnote>
                        For anyone familiar with the Key-Value cache (or KV cache) optimization for LLMs, this is
                        exactly the problem that the KV cache is designed to solve! This does not completely solve our
                        problem, though. A purely KV cached mind could faithfully reload its past states, but would
                        still need to reason <i>within</i> its environment to incorporate new changes. KV caches can
                        also become prohibitively expensive for very long contexts where each token representation needs
                        to be cached. By their very nature, dense embeddings require much more storage than their sparse
                        representations (tokens, in this case).
                    </Footnote>
                    . If I was unable to isolate my subjective representation of the software from the environment, this
                    would be the case. In reality, my mind does allow for this isolation so, once I have refreshed my
                    knowledge, I can continue to directly manipulate the embedded form of my plan directly without
                    needing to lossfully convert my feature-rich representation to feature-starved text at each step.
                </p>
                <BlogSection level={2}>Online Learning</BlogSection>
                <p>
                    Unlike most modern AI systems, humans do not undergo a clearly defined "training phase"
                    <Footnote>
                        One could perhaps point to sleeping or dreaming as an example of this. Many have theorized that
                        dreaming is a way for our brains to process the day's information and commit knowledge to long
                        term memory. There are rough similarities here, but it is not a perfect analog. While dreams may
                        reinforce some of our experiences, we do not explicitly dream of most of the things that we
                        learn about. As primarily social animals, social experiences are often the primary (although not
                        exclusive!) focus of our dreams. Sleeping, among other things, appears to primarily serve as a
                        filter and consolidator for recently learned information, not as the exclusive domain of
                        learning itself. See:{" "}
                        <Link href={"https://pmc.ncbi.nlm.nih.gov/articles/PMC4704085/"}>
                            Dreaming and Offline Memory Consolidation
                        </Link>{" "}
                        from the NIH.
                    </Footnote>{" "}
                    where we only learn new information and do not act upon it in any way. We learn in an "online"
                    manner. That is, we learn actively as we interact with our environment, instead of experiencing a
                    well-defined period of pure observation followed by a period of pure experimentation. This means
                    that, as we are learning, we can solicit feedback from a teacher or our environment. We can
                    immediately test out what we think we know and update our beliefs based on feedback. When we learn,
                    we are also able to clearly incorporate new beliefs into our world model without overwriting other,
                    unrelated information
                    <Footnote>
                        In AI research, this has a specific name: "catastrophic forgetting". Some architectures are less
                        susceptible to this than others, but transformers fall on the "more susceptible" end of the
                        spectrum. If you continually train a model on new information, eventually something will
                        contradict its training data. Over time, it will begin to gradually forget older information as
                        the associated weights are no longer being reinforced. After a long enough time, the model may
                        fully replace old information or abilities with new ones. Importantly, there is no priority
                        hierarchy for this replacement. New information will overwrite old, even if the old information
                        is much more valuable to the model. We will cover this in more detail shortly.
                    </Footnote>
                    . Since we can incorporate new knowledge as we interact with our environment, our internal
                    representation of the world (for the most part) stays relatively close to the ground truth of the
                    real world.
                </p>
                <p>
                    Our ability to automatically filter out irrelevant or incorrect information is central to online
                    learning. If our environment contains irrelevant stimuli, for example the time of day when learning
                    to identify images of tanks
                    <Footnote>
                        This specific example has become something of an urban legend/cautionary tale in many AI safety
                        circles. Though the exact origin of the "AI tank detector" story is difficult to track down, it
                        is likely a combination of a few different examples with varying degrees of embellishment. This{" "}
                        <Link href={"https://gwern.net/tank"}>gwern.net</Link> article does some great research on the
                        origins and implications of this story.
                    </Footnote>
                    , our brains automatically filter it out. This ensures that we can more easily create general
                    solutions to our problem instead of overfitting to situational details. This extends to sources of
                    information as well. Marvin Minsky captures this well within his concept of "imprimers". An imprimer
                    is a person, often a mentor or parent, from whom we readily take in information with a diminished
                    degree of skepticism. If a parent tells us of a reliable home remedy for an illness, we are more
                    likely to incorporate that knowledge than if a complete stranger had told us the same. This gives us
                    the ability to ignore (or to at least be skeptical of) irrelevant or untrustworthy information, even
                    after repeated exposure. If I read thousands of copies of a Reddit post on the benefits of putting
                    glue on cheese pizza, I know to ignore that information after only seeing a glue bottle's warning
                    label once or twice. Importantly, this is not a result of any external filtering process that
                    selects stimuli for us, this process occurs completely "in house".
                </p>
                <BlogSection level={2}>Self-Play</BlogSection>
                <p>
                    Self-play is intimately tied to our abilities to learn online. In humans, this process happens
                    internally, with ourselves
                    <Footnote>
                        Self-play as a concept is more widely known of in the context of reinforcement learning agents.
                        This is how AlphaZero could achieve superhuman performance in a wide range of adversarial games.
                        There are two key differences here. Firstly, this did not happen "online", only in a dedicated
                        training phase. Secondly, this was not an internal process like we humans have. It is more akin
                        to practicing an argument with one's (imperfect) clone that still has a fully isolated mental
                        state of their own.
                    </Footnote>
                    . If we see someone exhibit some feat of athleticism or hear someone making good use of rhetorical
                    techniques in an argument, we can rehearse and simulate ourselves emulating those actions. Anyone
                    who has played out a debate or series of game moves in their head has experienced this exact ability
                    of ours. In certain circumstances, like after a lost debate or game of chess, these replays may be
                    more compulsory than voluntary. The most significant consequence of this internal phenomena is that
                    we can learn and update our beliefs without needing additional external input. After the initial
                    catalyst, our self-play occurs entirely within our minds. We can rehearse our proving skills,
                    simulate a procedure, or refine our conversational skills without needing any external input or
                    making any modifications to our environment (a direct consequence of our mind-environment
                    isolation).
                </p>
                <p>
                    An important application of self-play manifests in our abilities to follow learned procedures. When
                    using self-play to simulate certain tasks, we can pull upon mental procedures that we had learned in
                    the past and execute them (fairly) reliably in order to reason through a problem. Examples could be
                    a method of logical inference, a strategy for playing a game, or a simple mathematical procedure. If
                    we know a well-defined method of unraveling a problem, we are reliably able to execute that method
                    within our main reasoning process as a sort of sub-routine. An important distinction to make here is
                    that these solutions are not a statistical inference (though many problem solving techniques do rely
                    upon this method). We can perform simple, rigidly defined procedures and reliably get exact answers
                    instead of an answer that may not always be correct, but still matches some learned distribution.
                </p>
                <p>
                    When we engage in mental self-play, we are always constrained by the mental resources that we can
                    summon. Famously, humans have a fairly limited pool of working memory from which we can draw
                    <Footnote>
                        When compared to computers, of course, but also{" "}
                        <Link href={"https://www.sciencedirect.com/science/article/abs/pii/S0959438809000269"}>
                            Chimpanzees
                        </Link>
                        , strangely. Though this is amusing to consider, one must remember that our minds have evolved
                        to fit their environment as our bodies have. If our ancestors only needed a limited working
                        memory to accomplish basic survival tasks, then our current allowment of working memory is all
                        that we need(ed).
                    </Footnote>
                    . Meaning that the complexity of procedures that our minds can execute is similarly limited. This is
                    especially true for procedures that require keeping track of a number of auxiliary or intermediate
                    states. In practice, however, this is not as constraining as it may seem. The procedures of logical
                    inference or experimental design are simple enough that we can still execute them reliably, which is
                    significantly more important. For more complex tasks, we can always fall back to situated cognition
                    and the use of external recording mediums (like paper or computers), though this is much less
                    efficient due to the lossful conversions mentioned above.
                </p>
                <BlogSection>The State of the Art</BlogSection>
                <p>
                    As of the time of writing, transformer models are very much the current state of the art, both in
                    the colloquial and literal sense. Colloquially, they still represent one of the most capable and
                    generalizable architectures that AI researchers have yet developed. In ths literal sense, these
                    models have been so capable and popular that the current "state of the art" of AI research seems to
                    have been wholly subsumed by them. The structure and training objectives of these models have led to
                    their lightning-in-a-bottle success over the past several years. However, I argue, the focus on this
                    very structure and training objective is a significant barrier between the current state of the art
                    and human-level generality.
                </p>
                <p>
                    Certain drawbacks of these models have been widely recognized and researched already. Examples
                    include the quadratic scaling of self-attention, the (relative) learning inefficiency of neural
                    networks, and the arbitrariness of tokenization. While these individual issues are important from a
                    practical lens, I am primarily interested in the theoretical limitations of a more generic class of
                    models. I will describe this class in more detail momentarily, but for now we need not worry about
                    the exact implementation of the models that I am about to discuss, only their learning methods and
                    behavior.
                </p>
                <BlogSection level={2}>Statistical Inference Models</BlogSection>
                <p>
                    From the 1950s to around the 1970s, the processing of natural language by computers was a highly
                    rule-based process. To borrow a phrase from Eliezer Yudkowsky and Nate Soares, these models were
                    built by hand, not grown like modern models. This allowed human programmers to have fine-grained
                    control over the behavior of their models. Despite some early success, the fact that humans had to
                    manually tweak their models to improve their performance quickly led to diminishing returns. After
                    some soul-searching among AI researchers, a different paradigm began to emerge in the 1980s. Instead
                    of manually inscribing rules and relations into their models, perhaps their models could learn this
                    for themselves through statistical inference. This motivated the development of models based on
                    N-grams, the Markov assumption, and bag-of-word principles. This time period began the shift of AI
                    being built by hand to being grown by distributions of training data. Even though these models were
                    less interpretable by humans, they were far more capable than their hand-crafted predecessors.
                    Richard Sutton dubbed this realization "The Bitter Lesson of Artificial Intelligence" in 2019.
                    Despite our best efforts to imbue AI with hand-curated knowledge, "blind" computation and learning
                    appears to win out, in the end. Hold onto this thought.
                </p>
                <p>
                    Where do modern language models fit into this? Similar to their much simpler forebearers, the main
                    training objective of these models is still to generate a distribution of tokens that matches the
                    distribution in the training data as closely as possible. This is achieved through the optimization
                    of next-token prediction. Every poem, proof, and program produced by these models comes from the
                    simple philosophy of:
                </p>
                <blockquote>
                    Conditional upon the sequence of tokens present in my current context, how can I sample from my
                    token vocabulary in a way that most closely matches what I would have seen in my training data.
                </blockquote>
                <p>
                    This can be roughly represented as <Latex>{`$t_{n+1} \\sim P_\\theta(t|t_1,\\ldots,t_n)$`}</Latex>{" "}
                    where <Latex>{`$t_{n+1}$`}</Latex> is the output token that we sample from our distribution,{" "}
                    <Latex>{`$\\theta$`}</Latex> is the set of learned parameters from training data, and{" "}
                    <Latex>{`$t_1,\\ldots,t_n$`}</Latex> represents the sequence of tokens present in the context.
                </p>
                <BlogSection level={2}>Pre-training and Fine-tuning</BlogSection>
                <p>
                    If we were only are examining the simple case of a model being pretrained on a single, static
                    dataset, this is where our analysis would end. Regardless of a model's internal implementation, if
                    it is given this type of dataset and a training objective that only maximizes prediction accuracy,
                    it should follow that our model is merely performing blind statistical inference, regardless of how
                    capable it is. Even if our model's architecture was inherently capable of learning emergent
                    behavior, this would be actively penalized during training. This is because any emergent behavior,
                    by definition, would not fall within the training distribution and would thus increase the
                    prediction's error relative to the distribution.
                </p>
                <p>
                    What if we add on a second layer of training, perhaps performing supervised fine-tuning on some
                    specific objective? Most autoregressive LLMs go through this phase in order to improve their
                    conversational/assistant capabilities or to encode within them knowledge of a specialized domain.
                    Hopefully the strong similarity between additional supervised fine-tuning and its original training
                    run is clear. Even though we are augmenting the model's target distribution with new material, we
                    are still merely updating the distribution that the model is being trained to predict. Since our
                    training objective is still predictive-error-minimization relative to a static distribution, our
                    model is still discouraged from making predictions that would not match its augmented distribution.
                </p>
                <BlogSection level={2}>Reinforcement Learning</BlogSection>
                <p>
                    Before we continue, I suppose it would be worth distinguishing the training objective of a
                    supervised tuned model and a reinforcement learning tuned model. When we train a model using
                    supervised methods, this is always with respect to a known dataset. This data is composed of
                    samples, each of which has a known, specific label. During training, the model makes predictions;
                    the deviation of those predictions from the expected label is measured and the model's parameters
                    are perturbed to minimize the error when given those same inputs in the future. The model is being
                    fit to match a static, known distribution of data. Reinforcement learning is quite different.
                    Instead of measuring from a known distribution and propagating errors based on predetermined labels,
                    RL models are updated based on rewards from its environment. The information contained within a
                    reward signal is much less explicit than a supervised error, but this vagueness can allow the model
                    to better generalize instead of overfitting to the training set. In an RL environment, the exact
                    distribution of the data is not known <i>a priori</i>, but it can be approximated over time through
                    stochastic sampling. In practice, this comes in the form of the model exploring its environment and
                    getting a feel for the "reward surface". For RL systems, if the environment (and reward model)
                    remains forever static, the model will still begin to overfit to it at the cost of generalizing
                    outside of the observed environment.
                </p>
                <p>
                    For most modern models, their initial supervised tuning is augmented with further optimization
                    through reinforcement learning as their final training stage. Classically, this phase primarily
                    served to align the model with human preferences. Procedures like reinforcement learning from human
                    feedback (RLHF) built up a reward model based on human preferences that was then used to reward the
                    target LLM through proximal policy optimization (PPO). Recently, we have seen more efficient methods
                    of etching "human preferences"
                    <Footnote>
                        "Human preferences" is quoted here as it is still very difficult to robustly align the behavior
                        of models with what we humans would most prefer. The alignment problem is still far from solved.
                        This is why even models that undergo extensive preference tuning can still be jail-broken or
                        otherwise manipulated into acting against the human preferences they were supposed to learn.
                    </Footnote>{" "}
                    into models, such as direct preference optimization (DPO) or grouped relative policy optimization
                    (GRPO). In the language of reinforcement learning, these are primarily considered to be{" "}
                    <i>model-free</i> methods. This means that LLMs do not need to create an explicit world model to
                    predict which future actions will yield rewards. Instead, they are rewarded based on a separate
                    reward model
                    <Footnote>
                        In methods such as PPO, this reward model is explicitly encoded into the training architecture.
                        It is first trained to predict human preference evaluations then later used to reward the target
                        LLM. However, in methods similar to DPO, we do not explicitly train a reward model, so what
                        gives? Using this method, a reward model still exists, but it is much more implicit. Instead of
                        passing human preferences into a separate network that learns, rewards instead come from the
                        policy (the LLM being trained) itself. This is achieved through encoding preferences directly
                        into a loss function and updating the model in a supervised manner.
                    </Footnote>{" "}
                    which approximates their environment at the present moment only. In a sense, this can be thought of
                    as a simpler and more naive (though not necessarily bad!) approach to RL over model-based
                    techniques. Hold onto this distinction, as it will become important later on.
                </p>
                <p>
                    Even more recently, with the rise of reasoning models, we have seen a new use for RL in LLMs. The
                    technique of reinforcement learning from verified rewards (RLVR) has become popular for improving
                    model performance on mathematics or programming. Both of these domains offer much more concrete
                    feedback than the abstract world of human preferences. A proof or program is either correct or it is
                    not; this can be (more) easily communicated to the model in a way that directly improves its
                    performance. I find this to be a very promising area of research in general, but it is still limited
                    to specific domains. Absent highly detailed simulations of human interactions, it may be difficult
                    to scale the real-world and general reasoning abilities of models with this technique alone. Most
                    applications for human reasoning offer very sparse and time-delayed rewards. From the perspective of
                    a model, it can be difficult to associate these rare rewards with actions performed in the remote
                    past. So, while interesting, techniques like RLVR are not magic bullets for bringing about AGI.
                </p>
                <p>
                    Looking at reinforcement learning techniques as a whole, do they offer a substantial enough
                    difference from supervised learning to allow models to generalize? At first glance, the outlook
                    certainly appears good. Before large language models, RL-based models represented our most advanced
                    and capable attempts at AI. Certain classes of models that were trained using RL outperformed
                    versions only trained through supervised tuning. There is a catch, though. Switching from supervised
                    tuning to RL works very well for some architectures and goals, but finding new RL objectives for
                    other models may not be obvious.
                </p>
                <p>
                    Though, bear in mind that these two classes of model operate in very different domains. Arguably,
                    the most famous example of such an RL model is DeepMind's AlphaGo. When only supervised tuned on a
                    curated set of human Go moves, the model performed well, but was still only at the level of a strong
                    amateur. At this stage, AlphaGo was only imitating human moves and strategies from its training set.
                    This represented a single, static surface toward which it could optimize its outputs. It was unable
                    to <i>generalize</i> beyond its training set, though. As the DeepMind team poured more and more
                    expert examples into the system, it improved, but still not to the level of the experts it should
                    have been learning from. The dataset of moves which they had curated did not capture the full
                    distribution of moves that a real expert can draw upon.
                </p>
                <p>
                    This quickly changed when reinforcement learning was used to train an auxiliary "value network" that
                    evaluated Go board states. As AlphaGo played, this network could actively learn directly from
                    rewards based on its performance. This was the model that finally beat Lee Sedol in 2016. AlphaGo's
                    abilities were taken even further by AlphaGo Zero, a model solely trained through reinforcement
                    learning and self-play. This is how the model was able to achieve <i>superhuman</i> performance. By
                    playing against itself instead of emulating human experts, every time it improved, it would be a
                    greater challenge for itself to beat next iteration. This environment of simple rules, self-play,
                    and clear rewards allowed AlphaGo Zero to become <i>arbitrarily</i> good at Go.
                </p>
                <BlogSection>Is Language a Game of Go?</BlogSection>
                <p>
                    After observing the impressive performance of game-based RL systems, it is therefore natural to ask
                    whether language models trained with reinforcement learning can become <i>arbitrarily</i> good at
                    modeling language? Becoming superhuman at Go has a clear indicator: your model beats all humans at
                    the game. What would indicate that a model is superhuman at modeling language? Perfect grammar is
                    certainly a necessary condition. Being able to mimic different methods of prose is another. Being
                    able to reason or program just like the humans samples that is has seen could also support that
                    claim. Yet, current large language models can already do these things. Where is our AGI?
                </p>
                <p>
                    The issue with the previous paragraph was that it was asking the wrong question. "A model that is
                    superhuman at modeling language" is very different from "a generally superhuman model that can also
                    model language". A model that is extremely good at modeling language is merely extremely good at
                    matching the samples of human language that it has already been given. What we really want is a
                    model that is not only good at modeling language but is also good at modeling the kinds of
                    deliberative thought processes that eventually produce language. A model that could faithfully do
                    this would be a good candidate for real general intelligence.
                </p>
                <p>
                    Perhaps you are beginning to notice some similarities to AlphaGo and AlphaGo Zero here. While the
                    original AlphaGo was good at modeling the moves of experts that it had seen, AlphaGo Zero was not
                    only good at producing expert-level moves, but it was also excellent at winning Go in a more general
                    sense. How was AlphaGo Zero able achieve this level of generality with RL while current language
                    models struggle to achieve an analogous level of general reasoning while also using RL? The type of
                    learning that AlphaGo Zero underwent was the model-based variety. This means that, in addition to a
                    reward model, it also has something called a transition (next-state) model. This was implemented
                    using a method called Monte-Carlo tree search (MCTS), though the details are not important for our
                    purposes. What is important is the fact that this model could predict what would happen next{" "}
                    <i>without actually having to take an action</i>. This means that AlphaGo Zero could estimate the
                    expected future reward from a sequence of moves using its reward model, and backtrack if it was
                    unsatisfied. The model was not committed to a sequence of moves <i>until</i> it has finished
                    planning and started actually placing stones. The ability to plan ahead was directly encoded into
                    its architecture! this model-based architecture enabled AlphaGo Zero to "think" separately from its
                    environment, like humans do.
                </p>
                <p>
                    The adversarial nature of Go also contributed to the model's success. From the perspective of
                    "player one", its future rewards were not only a function of the board state, but also of the future
                    actions of player two. Both components constituted "the environment", meaning that when player one
                    learned and improved, player two (and thus the environment) would change next round to make reward
                    harder to obtain. Over time, this encouraged AlphaGo Zero to try out more and more creative
                    techniques that would have never shown up in a static human expert dataset
                    <Footnote>
                        Though it was played by the original AlphaGo, the famous move 37 of game 2 versus Lee Sedol is
                        an excellent example of this concept.
                    </Footnote>
                    . This form of self-play is similar (but, recall, not quite the same as) to the kind that humans
                    intuitively practice every day. This could even be considered a form of online learning, though
                    limited in duration and scope compared to traditional interpretations.
                </p>
                <BlogSection level={2}>Limitations of Transformers</BlogSection>
                <p>
                    The success of AlphaGo Zero can help us to outline the challenges faced by modern, transformer-based
                    LLMs. These shortcomings are a fundamental consequence of both model architecture and training
                    objectives. Unlike AlphaGo Zero and its MCTS, transformers do not have any built-in world model.
                    While these models can make inferences and reason about the world, there is no "lookahead". When a
                    token is being generated, the model cannot know which tokens will be generated after it in the
                    future. For this to happen in earnest, the model would need to have the ability to generate tokens,
                    and self-reflect on them without committing any tokens to its environment. Autoregressive
                    transformers also do not have any concept of backtracking. Once a token has been generated, it will
                    always remain within the model context (though not necessarily the context window). There is no
                    architecture-level support for saying:
                </p>
                <blockquote>
                    I have tried this method and I estimate that it will not work; let me try again.
                </blockquote>
                <p>
                    Perhaps that we could implement a kind of scratch-pad and have specific stopping tokens that, once
                    detected, wipe the scratch space and append "do attempt <i>XYZ</i>" to the current context? This
                    would visually look like what AlphaGo Zero (and humans) do during their deliberation, but would only
                    be a poor facsimile. All of the information contained in the faulty reasoning process would be lost
                    and unavailable for the purposes of being a counterexample. In real LLMs, "reasoning tokens" can
                    emulate this process <i>within</i> its environment, but this still comes with the disadvantages
                    outlined back in section 2.
                </p>
                <p>
                    As mentioned, there are also difficulties coming from how we train state-of-the-art language models.
                    The training objective of modern LLMs essentially boils down to "emulate this human-written text".
                    This objective can be achieved through a variety of training methods (unsupervised, supervised, or
                    reinforcement learning). Though each offers a different approach towards reaching the objective, the
                    objective itself remains the same. Even in the case of advanced reasoning training, the learning
                    goal of our models is to still emulate human-curated reasoning chains.
                </p>
                <p>
                    The researchers training these models have a goal in mind: create a model that can reason as humans
                    do. This is difficult to optimize directly, so they have found a clever proxy that is much easier to
                    optimize: create a model that can generate text that matches known patterns of human inference
                    <Footnote>
                        Similar methods for optimizing mathematical proof or code generation also fall into this
                        category. Instead of creating a model that can reason and make logical inferences like a
                        mathematician or engineer, we instead create a model that can emulate their measurable outputs.
                    </Footnote>
                    . Achieving this goal is much more straightforward. We already have known training methods that can
                    fit models to given pieces of text. This is reminiscent of AlphaGo: we want a model that can master
                    Go; this is difficult, but creating a model that can mimic expert moves is much more
                    straightforward. At first glance, earnest, human-level reasoning and human-generated reasoning text
                    appear to be isomorphisms, or at least very tightly coupled. However, training only on the moves of
                    masters will not yield a model at a master's skill level. Similarly, emulating human reasoning or
                    code will result in a model that can reason and code at a respectable level, but still not quite at
                    the quality of the original.
                </p>
                <p>
                    In 2026, we find ourselves facing the same <i>Bitter Lesson</i> as we did in 2016: attempting to
                    manually encode human knowledge into a model will not scale. Instead, a more <i>laissez faire</i>{" "}
                    approach will allow models to learn more generally on their own. Current reasoning models are the
                    autoregressive equivalent to training a model on expert moves. You will get impressive results, but
                    you will not reach the quality of the material that you are trying to emulate.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
