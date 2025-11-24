// javascript
import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import { BookTile, FootNote, FootRef } from "@/lib/pageBuilder";

export default [
    new BookTile(
        <>Superintelligence: Paths, Dangers, Strategies</>,
        "Nick Bostrom",
        (
            <>
                <p>
                    The primary concern of <u>Superintelligence: Paths, Dangers, Strategies</u> is not necessarily what
                    needs to happen for artificial general intelligence to be developed, but what happens soon after.
                    This could be on timescales as long as decades, or as short as seconds. After this point, th entire
                    course of human history will be altered; this much is certain. The only remaining uncertainty is
                    whether it will result in our extinction or maximal utopia. In this book, Nick Bostrom explores how
                    we can minimize the probability of the former and maximize that of the latter.
                </p>
                <p>
                    One of the core theses of this work is that an agent of general intelligence, which could incur
                    substantial risk, may evolve into a superintelligent agent, which certainly implies an existential
                    risk, or X-risk. The transitory process between the two is referred to as an intelligence explosion,
                    a period of rapid recursive self-improvement. Bostrom further asserts that conditions at the outset
                    of this process will heavily influence the conditions following it.
                </p>
                <p>
                    To capture the full breadth of possible scenarios, the book not only covers the traditional
                    artificial machine intelligence (AI) route, but also explores the possibilities of whole brain
                    emulation (WBE), human cognitive enhancement, brain-computer interfaces, and
                    collective/network-based intelligences. All of these are referenced throughout the book, but the
                    most attention is given to the machine intelligence and whole brain emulation routes. Classifying
                    the scope of possibilities further, he divides these categories into intelligences that are faster,
                    smarter, or more collective than unmodified human brains. Each architecture for superintelligence
                    can initially embody any of these qualities, but specific affinities do exist. For example, WBE is
                    likely to initially perform faster and in a more collective manner than humans, not not necessarily
                    smarter as it is merely a human brain transferred to a digital substrate.
                </p>
                <p>
                    Turning to the intelligence explosion itself, the most important component is its catalyst:
                    recursive self-improvement. Theoretically, an agent with human-level intelligence and the ability to
                    modify its own intelligence can create a version of itself that is more capable at this improvement.
                    This initial jump can be significant or minor. The primary assumption is that <i>some</i>{" "}
                    multiplicative improvement is always available at each iteration. This series of recursive steps
                    soon produces an exponential curve of increasing intelligence. For the purposes of this book, it
                    does not particularly matter where the inflection point of this curve lies, so long as it is
                    significantly above human levels of intelligence. This period of rapid, exponential improvement is
                    referred to as "takeoff". In terms of timescales, this takeoff be slow (measured in decades or
                    centuries) fast (taking seconds to days), or moderate (at timescales in-between). This rate is
                    governed by two main factors: optimization power, the ability of a system to optimize its own
                    capabilities, and recalcitrance, the resistance of intelligence, <Latex>{`$i$`}</Latex>, to being
                    optimized.
                    <span style={{ margin: "10px", textAlign: "center", display: "block" }}>
                        <Latex>{`$\\dfrac{di}{dt} = \\dfrac{optimization\\_power}{resistance}$`}</Latex>
                    </span>
                    In concrete terms, recalcitrance could decrease with better scanning technology or emulation
                    algorithms for WBE or from breakthroughs in general algorithms or architectures for AI. Optimization
                    power may increase slowly at first, then dramatically as "overhangs" in capability are crossed. A{" "}
                    <i>hardware overhang</i> may occur when improvements in software lag and abundant hardware already
                    exists for when this threshold is crossed. Similar for <i>algorithm overhangs</i>, when software has
                    reached sufficient maturity, but hardware or other resources contain its abilities
                    {<FootRef idx={1} />}.
                </p>
                <p>
                    If there are multiple, independent projects working towards the development of superintelligence,
                    how are their dynamics affected by takeoff speed? Naively, it seems as if the relative progress of
                    each will undergo an approximately linear transformation over the course of the intelligence
                    explosion. It is easy to assume that the forerunner may maintain about the same lead as ti began
                    with. However, Bostrom argues that, in the cases of slow and moderate takeoff, the forerunner is
                    likely to gain a decisive strategic advantage. Whomever emerges from the takeoff period first now
                    has control over (or is perhaps now controlled by) the most intelligent entity on the planet.
                    Depending on its goal system (to be expanded upon later), it may be desirable to eliminate all
                    competing projects, which only control inferior intelligences. Without competitors, the agent is
                    free to utilize the whole of the planets resources for its aims. To this end, it would be further
                    desirable for it to form a <i>singleton</i>. This could be in the form of a word government, a
                    collective consortium, or a unitary structure à la <i>SkyNet</i>.
                </p>
                <p>
                    To drive home this point, the book expands upon a probable scenario in which a <i>singleton</i>{" "}
                    could form, starting from a sub-human intelligence <i>in silico</i>. This initial intelligence, the{" "}
                    <i>seed AI</i> begins below human capability, but with the ability to slowly improve itself. In the
                    early phases, it acts more as an assistant to human programmers, but soon it begins to take on the
                    primary role in its own development. This triggers the process of recursive self-improvement and the
                    beginning of takeoff. After this period, the AI is now superintelligent, with the abilities to
                    create instrumental goals and to credibly act on those intentions. This process may begin with a
                    covert phase where the agent gathers digital resources and human accomplices. Once its success is
                    insured, a period of overt implementation begins where it begins to amass physical resources and
                    pursue its final goals. If the problem of alignment has not been generally solved before takeoff,
                    this AI is likely to either deliberately eliminate humanity to ensure its uninterrupted access to
                    resources or it may simply ignore our presence if we pose a trivial threat{<FootRef idx={2} />}.
                </p>
                <p>
                    A common assumption that people often make is that complex intelligences may have complex goals:
                    discovering the meaning of <i>life, the universe, and everything</i>, creating a utopia, or driving
                    technological innovation. However, an important thesis in this work is that the complexity of goals
                    is <i>orthogonal</i> to the intelligence of the agent pursuing those goals. Since this entity may be
                    entirely alien to how human minds are structured, it may take on entirely un-human-like goals. This
                    will be especially true if a concerted effort is not made by the original programmers to imbue it
                    with some semblance of human values. Without being aligned to these values, agents will likely
                    exhibit <i>instrumental convergence</i> on a set of sub-goals. These are sub-goals that are useful
                    for nearly every type of ultimate goal, therefore any AI is likely to pursue them in the absence of
                    strong internal guardrails. Examples include, self-preservation, goal integrity, cognitive
                    enhancement, and resource acquisition.
                </p>
                <p>
                    Simply specifying the "correct" goals is not a get-out-of-doom-free card either. Here, Bostrom
                    introduces the concept of a <i>malignant failure mode</i>. Even well-intentioned goals can turn
                    catastrophic when given to an unstoppable reward-maximizing AI system. Similar go a genie of
                    monkey's paw, an agent that has the goal of maximizing goal-based reward will take the shortest and
                    most extreme path towards completion. For example, a superintelligence with the goal of "ending
                    human suffering" is likely to simply eliminate all humans, since there is always a non-zero
                    possibility of suffering (even in a perfect utopia) and a dead human can no longer suffer. Adding on
                    more and more "but also" conditions to this goal is also not likely to work as there is a strong
                    incentive to find a loophole that leads to goal achievement faster and more thoroughly
                    {<FootRef idx={3} />}. It will not act this way out of some sense of spite or malice, this is simply
                    the best way of achieving <i>exactly</i> what it has been asked to do.
                </p>
                <p>
                    These outcomes are undesirable. Naturally, the question of mitigation arrises. In order to
                    extrinsically prevent the AI's goals, what if we:
                    <ul>
                        <li>
                            Put it in a box? The AI has a strong incentive to manipulate/hack its way out in order to
                            fulfil its objective.
                        </li>
                        <li>
                            Press a button that produces a massive negative reward? The AI now has the instrumental goal
                            of preventing anyone from ever pressing that button. Any would-be button presser will have
                            to face the full ire of a nearly all-powerful agent.{<FootRef idx={4} />}
                        </li>
                        <li>
                            Stunt its growth? Too much and the AI is not useful, too little and it will be smart enough
                            to remove those protections.
                        </li>
                        <li>
                            Set up a tripwire? If an AI triggers one, it will be retrained or abandoned. This only means
                            that the next AI will know not to fall for the same trap again.
                        </li>
                    </ul>
                    The only reliable methods of controlling the behavior of a superintelligent agent will be intrinsic.
                    Safely implementing potential goals is explored at-length later on.
                </p>
                <p>
                    The constraints on AI models go beyond simple containment methods. Here, Bostrom identifies four
                    main types of agents, although with deeper analysis, these are all different manifestations of the
                    same fundamental concept. Oracles are simple "boxed" models that (ideally) cannot take any external
                    actions themselves. Optionally, these can be restricted further by limiting their output, down to a
                    single bit if desired. These seem the most safe, and they likely are, but for the reasons mentioned
                    above, this safety is only weakly enforceable. Genies are models designed to fulfil a single "wish"
                    at a time. A command is issues, the agent completes the command, then shuts itself down. This also
                    seems relatively safe, but in order to fulfil a request of any complexity, plans must be developed
                    and instrumental convergence appears once again. Next on the hierarchy comes sovereigns. This class
                    is similar to a genie, but it is designed from the ground-up to execute complex commands and create
                    its own goals independent of human overseers{<FootRef idx={5} />}. Finally, tool-AIs are designed to
                    work more like traditional software in that they do not exhibit goal-directed behavior. The creation
                    of such a system may involve significant amounts of manual tuning and parameter search. Traditional
                    software does not (currently) attempt to form a singleton, so this appears to be a safe option.
                    However, these tools either become difficult to scale{<FootRef idx={6} />} to superintelligence or
                    they develop sufficient complexity to reclassify themselves into one of the prior three categories.
                </p>
                <p>
                    Containment measures will likely not be able to constrain the behavior of a superintelligent agent
                    in the long-run. The most reliable method of behavioral steering are different methods of alignment.
                    In the book, Bostrom frames this as a problem of value-loading{<FootRef idx={7} />}: when
                    researchers decide upon a set of values to align the model to, how can those values be reliably
                    impressed upon it? The book presents several methods, the most promising of which seem to be
                    motivational scaffolding, value learning, and institutional design. Motivational scaffolding
                    proposes that we first create a smaller, more controllable AI which we can train to hold human
                    values. Next, the capabilities of this system are increased to that of a superintelligence. At this
                    point, the agent will be much more resistant to goal change, "locking in" the original goals. Value
                    learning proposes that we train an AI to "do what we would want an AI to do in this situation". This
                    type of adjacent reasoning may be difficult to reliably implement, but it would free programmers
                    from the burden of choosing a specific goal for the model to optimize towards. Final, Bostrom
                    considers designing an institution that would govern the behavior of many AI agents. The main
                    architecture discussed is one composed of <Latex>{`$n$`}</Latex> superintelligent agents with{" "}
                    <Latex>{`$n/2$`}</Latex> less intelligent agents designed to monitor them. This pattern repeats
                    until we are left with one or more humans at the top governing the least capable level of agents.
                </p>
                <p>
                    Once we have created a method for reliably loading desired values into a superintelligent system,
                    which values should we then load? How can we create an AI that enacts <i>the spirit</i> of our
                    desires, rather than enacting them to <i>the letter</i>? The core of this problem requires{" "}
                    <i>indirect normativity</i>, a method for loading in a human-like system of values, or ways of
                    inferring those values when not explicitly specified. Bostrom devotes significant text to a method
                    called "coherent extrapolated volution". In short, an AI is to act as if it is being commanded by a
                    human race that is smarter, more clear minded, less combative, and generally knows what is best for
                    them, compared to humans now. This is, of course, extreme high level and difficult to implement with
                    the mechanistic techniques available to us today. Nevertheless, the aim of this section is to
                    impress upon the reader that our best chance with AI lies within indirect goal specification. If we
                    can devise reliable methods for "doing what I mean", the model may naturally attract itself toward
                    our general goals, even with minor perturbations in initial conditions. These initial conditions are
                    comprised of the goal's content, the decision theory that the system is based around, its theory of
                    epistemology, and the degree to which its decisions are ratified by humans.
                </p>
            </>
        ),
        ``,
        (
            <>
                <p>
                    This book almost single-handedly inspired me to pursue an education in artificial intelligence and
                    specifically in the theory of alignment. When this book released in 2014, Bostrom was one of only a
                    handful of authors that treated superintelligent (or even generally intelligent) systems as credible
                    existential threats to humanity. Ideas such as this had been explored extensively in the realm of
                    fiction, but it was not until the last decade or so that X-risks could be foreseen in reality.
                </p>

                <p>
                    This book almost single-handedly inspired me to pursue an education in artificial intelligence and
                    specifically in the theory of alignment. Bostrom presents groundbreaking ideas on the nature and
                    potential of AI in an easily digestible manner. The book explores ideas relating how we may control
                    entities far more clever than us and the consequences if we fail our one (and likely only) attempt
                    at doing so. He goes into detail on how an AI, tasked with seemingly harmless <i>terminal goals</i>{" "}
                    may nevertheless set for itself <i>instrumental goals</i> that can pose an existential threat to
                    humanity. As may be evident in the name, this work also heavily inspired me to create my game,{" "}
                    <Link href="https://github.com/matthew-pisano/Superintelligent" target="_blank">
                        Superintelligent
                    </Link>
                    .
                </p>
                <hr />
                <FootNote idx={1}>
                    The rapid advancement in transformer technology is an excellent example of an{" "}
                    <i>algorithm overhang</i>. The core architecture has remained largely the same since its
                    introduction in 2017, but recent advances in GPU architecture and data availability have fueled
                    their rapid expansion in capability.
                </FootNote>
                <FootNote idx={2}>
                    This may sound like a much better outcome, but there is also no motive for the superintelligence to
                    maintain the habitability of Earth for anything except for itself. This is especially true if the
                    agent considers terraforming to be an instrumental goal in service of its final goal. Good luck
                    finding something to eat when the entire planet if tiled in paperclips stacked miles high!
                </FootNote>
                <FootNote idx={3}>
                    "But, you also can't kill all humans.", assert the researchers.
                    <br />
                    "Fine.", says the AI as it hooks up all human brains to an endless stream of dopamine and serotonin.
                </FootNote>
                <FootNote idx={4}>
                    "Simply unplug it" is a variant of the button-press scenario. Being turned off is equivalent to an
                    infinite negative reward. Therefore, any agent that is capable enough for us to worry about will do
                    everything in its power to preserve itself. "Could we also train it to want to be turned off by a
                    human?" Yes, but you now have either a{" "}
                    <Link href={"https://en.wikipedia.org/wiki/Useless_machine"}>useless machine</Link> or a god with a
                    death wish.
                </FootNote>
                <FootNote idx={5}>Terms and conditions my apply...</FootNote>
                <FootNote idx={6}>
                    The current paradigm of large language models (including "agentic models") likely fall somewhere
                    near this category. They are not trained with a specific goal or moral system in mind, but primarily
                    to accurately predict text based on its training distribution. This includes fine-tuning regimes
                    such as assistant training and RLHF as these simply model the distribution that the model can pull
                    from at inference time. It is also somewhat difficult for these models to develop strategic
                    instrumental goals as they cannot currently learn "online", with gathered knowledge being limited to
                    their context windows. The proverbial jury is still out on whether transformer models can truly
                    generalize outside of their training distribution or begin to learn continually in an "online"
                    manner without sacrificing capability or drawing too many resources.
                </FootNote>
                <FootNote idx={7}>
                    Language models may actually have an advantage in this respect. Since we can precisely control the
                    text (and images, audio, etc.) that is trained into the model's predictive distribution, we have a
                    significant amount of fine-grained control on what the model knows and may predict. Though, perhaps
                    too fine-grained as the sheer volume of material needed to pre-train and fine-tune these models far
                    outstrips our abilities to vet their contents. Methods for reliably filtering out potentially
                    undesirable data from huge corpora have yet to be developed, but it may serve as a good complement
                    to current <i>post hoc</i> alignment training techniques. Assuming the model is not intelligent
                    enough to deduce the process from scratch, it is easier to just not tell a model how to build a bomb
                    instead of telling it, then forbidding it from sharing this knowledge from the user.
                </FootNote>
            </>
        ),
        "/media/image/superintelligence.jpg",
        "superintelligence"
    ),
    new BookTile(
        <>Thinking Fast and Slow</>,
        "Daniel Kahneman",
        (
            <>
                <u>Thinking Fast and Slow</u> serves as a compendium of the author's knowledge on both human psychology
                and economic theory, particularly on the intersection between the two. The core idea of the book is
                that, in contrast to traditional economic theory where humans serve as simple, rational agents, the
                behavior of real humans is more complex and nuanced than originally thought. This idea is expanded upon
                through three more targeted concepts: the two systems theory of cognition, the difference between real
                humans and idealized <i>Econs</i>, and how humans behave differently when experiencing a stimulus and
                remembering that same stimulus.
                <p>
                    Traditionally, people tend to view their thought process as a monolith. A uniform process of careful
                    deliberation and informed decision making. Through his experiments, however, Kahneman noticed that
                    this is only half true, if that. As opposed to that careful and methodical process that we envision,
                    most of our thinking occurs within quick bursts that make thorough use of heuristics and learned
                    biases; this is <i>System 1</i>. It is able to make decisions quickly and with considerable
                    accuracy, but can easily be confounded by unfamiliar situations or problems that require more
                    thorough analysis. These harder problems are passed on to <i>System 2</i>, although only as a last
                    resort. These cognitive processes are slower and less prone to error, but are much more resource
                    intensive; therefore, our brains often accept the cheap and fast verdicts of System 1, unless it
                    determines that a call to System 2 is absolutely necessary.
                </p>
                <p>
                    When students first learn economic theory, they are often taught that, within an economic context,
                    humans act as rational agents that are aware of their precise goals and always take informed actions
                    to further their goals. Although these agents are useful for modeling economic decisions, they are
                    only an approximation of actual human behavior. Within the book, these idealized agents are referred
                    to as <i>Econs</i>. In contrast, human decision making, while still goal oriented, may employ
                    heuristics to obtain quick, but inaccurate answers, rely on biases, or be heavily influenced by how
                    a choice is presented. Idealized Econs have no such shortcomings.
                </p>
                <p>
                    During the closing chapters of the book, the author highlights the difference between the actions of
                    the <i>Experiencing Self</i> and the <i>Remembering Self</i>. The Experiencing Self describes a
                    person in the midst of a situation while the Remembering Self describes that same person after some
                    event, working off of a <i>post hoc</i> interpretation. Kahneman highlights several important
                    examples of a person's <i>post hoc</i> decisions acting against the best interests of a past or
                    future experiencing self.
                </p>
            </>
        ),
        ``,
        (
            <>
                While all of the concepts presented within <u>Thinking Fast and Slow</u> have far-reaching influences on
                economics, cognitive science, and psychology, I find his first set of ideas the most interesting.
                Namely, his distinction between <i>System 1</i> and <i>System 2</i> thinking. This is primarily because
                of its potential implications on my own field of study, artificial intelligence. Currently, the most
                successful attempts at creating a <i>general</i> artificially intelligent agent have, by and large, used
                a monolithic architecture where the same fundamental structure or algorithm serves as the basis for an
                entire model.
                <p>
                    While this has thus far been impressively successful, this approach has yet to produce something
                    nearing human-level performance in the majority of domains, especially for problem solving and slow,
                    methodical thinking. Current approaches appear to closely mirror a <i>System 1</i> process,
                    providing quick answers that heavily rely on heuristics and learned biases. Additionally, while many
                    modern models can be coerced into <i>System 2-esque</i> reasoning, it does not come as a natural
                    consequence of the architecture and still often falls short when the problem domain is significantly
                    out of distribution or scope from the original training data. To create a system that can truly be
                    classified as generally intelligent in the same way we consider ourselves, Kahneman's ideas may
                    suggest that a different approach is needed in conjunction with modern strategies.
                </p>
            </>
        ),
        "/media/image/thinking-fast-and-slow.jpg",
        "thinking-fast-slow"
    ),
    new BookTile(
        <>Gödel, Escher, Bach: An Eternal Golden Braid</>,
        "Douglas Hofstadter",
        (
            <>
                <u>GEB: EGB</u> is a work that often resists attempts at strict classification and even summarization.
                At first, it may seem to be building up to Gödel's proof and how it can be related to other formal
                systems. This, however, is only one component of the tome's content. Hofstadter also touches on themes
                of mathematical formalisms, number theory, geometry, recursion, self-replication, self-representation,
                self-modification, holism/reductionism, cognition, computers, and artificial intelligence. Towards the
                end, the author also adds discussions about determinism, free will, and <i>Strange Loops</i> to the
                list. The latter of these being one of Hofstadter's main theses: the fact that "interesting" systems,
                such as number theory, genetics, or the human mind must contain different levels of self-reference
                across levels of abstraction. These <i>Tangled Hierarchies</i> allow a system to "speak" about itself
                and enable emergent phenomena such as Gödel's theorems on incompleteness and consistency, genetic code
                replication, and human consciousness.
                <p>
                    Beyond the above, surface-level themes, there resides the concept present in the book's subtitle.
                    Namely, how the works of Gödel, Escher, and Bach can, at a certain level of abstraction, braid
                    together to describe the same self-referential concept. This theme is represented in several ways
                    within the book. Bach's work is used as inspiration for the book's dialogues, being used both
                    explicitly and implicitly within them, along with direct references in the main text. For example,{" "}
                    <i>Musical Offering</i> and his endlessly rising canon. Similarly, Escher's art is referenced both
                    within some of the dialogues and to show the reader Hofstadter's ideas through a graphic
                    perspective. <i>Waterfall</i>, <i>Drawing Hands</i>, and <i>Dragon</i> are used particularly to
                    illustrate examples of self-reference and recursion. Finally, Gödel's first and second
                    incompleteness theorems serve as a central focus, especially in the first part. The author's
                    introduction to formal systems and number theory give the reader a foundation for understanding the
                    author's interpretation of Gödel's original proofs. These theorems are later leveraged to concretize
                    the notions of incompleteness and consistency used in the book's latter half.
                </p>
                <p>
                    Hofstadter's usage of dialogues is also worth mentioning. Conversations between the Greek hero
                    Achilles, Mr. Turtle, and others bookend each chapter and serve to reinforce and humanize the
                    somewhat technical and abstract ideas presented in the preceding pages.
                </p>
            </>
        ),
        ``,
        (
            <>
                The structure and format of this book is among the most unique and original that I have read. This is
                before even considering the main content. I have yet to read a book that makes better (or any!) use of a
                dialogue system like Hofstadter does. Even though I personally have a background in the technical
                subjects that the book explains, the conversations between Achilles, Mr. Turtle, Mr. Crab, and others
                serve to improve my own understanding of these abstract subjects. I especially enjoyed{" "}
                <i>Little Harmonic Labyrinth</i> for its creative usages of recursion, geometric convergence, and
                infinite series and <i>...Ant Fugue</i> for its commentary on reductionism (and holism), determinism,
                and emergent phenomena. Although the nature of the book as a whole carries a serious and academic tone,
                the author uses these dialogues as an opportunity to insert humor into the text. I thought the hiding of
                "Cantor" in <i>Aria with Diverse Variations</i> and the reference to Goldbach's Conjecture in{" "}
                <i>The Magnificrab, Indeed</i> were very well thought out. Finally, I'd like to point out the level of
                detail and effort put into each of the dialogues. Each dialogue (with the exception of Carrol's) is
                based on one of Bach's pieces. While this is referenced in the title, the ties run much deeper. The
                theme of each often mirrors that of the target musical score and even the voices within the dialogue
                match the pattern of voices within the music. Occasionally this relation is referenced within the
                dialogue, but often it is left up to the reader to draw this connection.
                <p>
                    While the author's augment on the common themes present in the works of book's three namesakes is
                    strong on its own, the its meta-writing also reinforces that relationship. It genuinely surprised me
                    just how well the art produced by Bach and Escher fit alongside Gödel and the more rigorous elements
                    of the author's thoughts. Every Escher lithograph seems like it could have been custom-made for the
                    chapters in which it was placed. The themes present in Bach's music almost appear to deliberately
                    match the book, instead of the other way around. The recursive and self-referential connections
                    between the three luminaries are far from obvious, but one struggles to miss how deep this
                    connection is after reading this book.
                </p>
                <p>
                    A final note that I should make concerns Bach in particular. While the ideas of recursion and
                    self-reference are requirements for understanding Gödel's proof, and they are often visually
                    apparent in Escher's pieces, this is much less obvious for Bach. This is especially true for those
                    who have not listened (or read) too thoroughly or even at all. Just how well Bach's music fits into
                    a mathematical framing is highly unexpected. Many of his musical scores can (deliberately) be
                    translated, mirrored, and scaled in frequency and time similarly to how objects in geometry can be
                    manipulated in the same manner. The delay and shifting of the voices in his fugues, the inversion in
                    time of <i>Crab Canon</i> and the reflection in frequency present in one of the canons in his{" "}
                    <i>Goldberg Variations</i>. In fact, this last piece can be printed and played on the surface of a
                    Möbius strip! These scores are a strange mix of creative and mechanical; the notes can be thought of
                    as following clever algorithms, almost as if they were written by a dedicated mathematician. This
                    level of complexity is not immediately apparent, at least to me, unless one deliberately analyzes
                    the sound in a thoughtful manner.
                </p>
            </>
        ),
        "/media/image/geb-egb.jpg",
        "geb-egb"
    ),
    new BookTile(
        <>The Alignment Problem</>,
        "Brian Christian",
        (
            <>
                <u>The Alignment Problem: Machine Learning and Human Values</u> compiles and analyzes numerous
                interviews with experts trying to build artificial intelligence systems, particularly machine learning
                systems, that are aligned with human values. The book is divided into three sections: Prophecy, Agency,
                and Normativity. Each section covers researchers and engineers working on different challenges in the
                alignment of artificial intelligence with human values.
            </>
        ),
        `https://en.wikipedia.org/wiki/The_Alignment_Problem`,
        (
            <>
                While this book concentrates on similar themes to Nick Bostrom's <u>Superintelligence</u>, some of the
                most impactful ideas that this book presents involve much less existential, albeit still harmful,
                examples of misalignment. Much of its length is devoted to addressing the ethical implications of
                implementing machine learning algorithms without proper planning. For example, he cites how AI criminal
                risk assessment / recidivism prediction tools, like <i>COMPAS</i>, often exhibit biases toward minority
                groups. One of the most interesting insights along this vein was on the fact that ML algorithms can
                accidentally infer data that was held-out from training (for example, an 'unbiased' algorithm can
                accidentally condition itself on someone's race or gender, despite only having names or neighborhoods in
                its dataset).
                <p>
                    Christian's chapters on reward systems and curiosity also helped to cement my understanding of the
                    role these concepts play in learning, both natural and artificial. A common theme with this book was
                    how well its concepts complemented my more formal education.
                </p>
            </>
        ),
        "/media/image/the-alignment-problem.jpg",
        "alignment-problem"
    ),
    new BookTile(
        <>Human Compatible: Artificial Intelligence and the Problem of Control</>,
        "Stuart Russell",
        (
            <>
                <u>Human Compatible: Artificial Intelligence and the Problem of Control</u>
                asserts that the risk to humanity from advanced artificial intelligence is a serious concern despite the
                uncertainty surrounding future progress in AI. It also proposes an approach to the AI control problem.
                Russell asserts that the standard model of AI research, in which the primary definition of success is
                getting better and better at achieving rigid human-specified goals, is dangerously misguided. If an AI
                developed in this manner were to become superintelligent, it would likely not fully reflect human values
                and could be catastrophic to humanity. Russell further asserts that safety research should be begun as
                soon as possible, as it is also highly uncertain how long it would take to complete such research.
            </>
        ),
        `https://en.wikipedia.org/wiki/Human_Compatible`,
        (
            <>
                In this book, Russell both introduces technical topics to the reader and challenges some conventional
                thinking about artificial intelligence in a concrete and understandable manner. He covers a wide variety
                of topics, ranging from how AI may (and should) behave when interacting with the real world, to common
                misconceptions and criticisms of alignment research, and more concrete learning techniques.
                <p>
                    Russell considers concepts such as how to balance the personal and societal utilities of embodied
                    assistants and how such assistants can safely learn by maintaining a core of immutable ideals. He
                    also provides effective counter-arguments to common arguments against alignment research, such as
                    "Why can't you just turn it off?" or "It will behave if we specify its goals well enough."
                </p>
                <p>
                    The later chapters of the book introduce some learning techniques that I personally find
                    interesting, such as inverse reinforcement learning and how that may be applicable for aligning an
                    AI with the ill-defined preferences of humans.
                </p>
            </>
        ),
        "/media/image/human-compatible.jpg",
        "human-compatible"
    ),
    new BookTile(
        <>Determined: A Science of Life Without Free Will</>,
        "Robert M. Sapolsky",
        (
            <>
                <u>Determined: A Science of Life Without Free Will</u> examines and deconstructs one of the most
                fundamental notions of the human condition: <i>the ability to freely choose</i>. The book is split into
                two major parts. In the first part, he uses our modern understandings of psychology, sociology,
                neuroscience, genetics, and even quantum physics, to gradually chip away at all the places that our
                commonplace notions of <i>free will</i> could be sourced from. His main argument posits that we live in
                a deterministic, albeit unpredictable, universe; within such a mechanistic universe, there are no cracks
                from which a dualistic <i>self</i> may emerge. He further asserts that the outcomes of our lives are
                largely, if not completely, determined by our environment, our hormones, our socioeconomic status,
                culture, genetics, and so on. In other words, our decisions at each instant are <u>fully determined</u>{" "}
                by what we experienced 'one second before, one hour before, one month before, ...'. Turtles all the way
                down, as he frames it. Within all of this, he touches on some truly interesting psychological
                experiments, chaos within systems, complexity, emergence, and the ways in which quantum effects do and,
                importantly for his argument, do not influence our biology and behavior.
                <p>
                    The second collection of chapters concerns the fallout of accepting this notion, on both distal and
                    proximal scales. This concerns topics such as the societal impacts of people repudiating the notion
                    of free will, historical precedents for similar seismic shifts in our understanding of the world,
                    and consequences for mental health, motivation, and criminal justice.
                </p>
            </>
        ),
        ``,
        (
            <>
                Reading Sapolsky's thoughts and expansions on this subject have been thoroughly illuminating. While I
                initially chose this book to reinforce, rather than revise, my own views on <i>free will</i>, I found
                his arguments unique and thought-provoking. He is able to masterfully bring together many disparate
                scientific disciplines and follows their findings to their natural conclusions about us and what really
                determines our behavior. From the behavior of slime molds and the quantum effects on microtubules to
                seemingly random dumps of neurotransmitters and the well-studied consequences of childhood adversity, he
                effectively argues that there is a mechanistic and (broadly) deterministic explanation for all the
                phenomena we usually attribute to ourselves.
                <p>
                    In essence, we do not choose how to play the hand that we are dealt in life, rather we <i>are</i>{" "}
                    the hand that we are dealt; the cards play themselves.
                </p>
                <p>
                    In addition to the well thought-out content, I also particularly enjoy his writing style. Each page
                    comes with a myriad of citations, in-depth footnotes, asides, and short personal rants that make the
                    experience of reading his book both stimulating and engaging. Even for those who may remain
                    unconvinced by his ideas, the book is still a worthwhile read. If not for the interesting facts,
                    experiments, and history, then hopefully such a reader would attend to his thoughts on empathy,
                    justice, and how we currently organize our society (and, hearteningly, how far we have already
                    come).
                </p>
            </>
        ),
        "/media/image/determined.jpg",
        "determined"
    ),
    new BookTile(
        <>Behave: The Biology of Humans at Our Best and Worst</>,
        "Robert M. Sapolsky",
        (
            <>
                <u>Behave: The Biology of Humans at Our Best and Worst</u> serves as an excellent exploration into the
                nature of human behavior, its causes, its consequences, and how we can use that knowledge to inform our
                own decisions. The central question of the book is this: a behavior has occurred, be it a righteous act
                of selfless heroism or an exercise in revolting depravity, why? Sapolsky's approach to this question is
                one of analytic thoroughness.
                <p>
                    His answer is delivered piecemeal as he examines what events, values, stimuli, etc. could have
                    influenced that behavior. What had occurred one second before that behavior? Which photons hit the
                    person's retina, how much dopamine was present in the synapses of the person's brain? What about the
                    minutes before? Was someone else recently rude to them, how much testosterone was present in their
                    bloodstream? Hours or days before? Did they just get fired from their job or win an award, has a
                    toothache recently developed? How was their adolescence? Did they grow up with the world as their
                    oyster or worried about whether they were going to have dinner at night? Before birth, which
                    hormones, and in what concentration were they exposed to in the womb? Were their parents raised in
                    an individualist or collectivist culture? Every one of these questions has a significant impact on
                    how a person behaves and how they process the behavior of others.
                </p>
                <p>
                    Sapolsky continues, examining how behaviors evolve, how we treat in-group <i>Us'</i> and out-group{" "}
                    <i>Thems</i>, how hierarchies form and how we respond to our statuses within them, and
                    introspections into morality, empathy, and metaphor. Similarly to <u>Determined</u>, he also
                    discusses the implications of these ideas on the criminal justice system. How does punishment work
                    if our behaviors are heavily, if not fully{" "}
                    <a href="https://matthewpisano.com/readingList#determined">determined</a> by factors outside of our
                    control?
                </p>
            </>
        ),
        ``,
        (
            <>
                I read <u>Behave</u> after I read <u>Determined</u> (unintentionally, but I'm glad that I did). It is
                very clear how the ideas Sapolsky presents in the former influenced the creation of the latter. In his
                familiar style, the author goes into a significant amount of detail to support each facet of his ideas,
                citing behavioral studies, observations of primates and other mammals, and his own personal experience.
                For me, his ideas on behavior, rewards, and punishment were relatively easy to digest after being primed
                by <u>Determined</u>, but they are presented in such a cohesive manner that I would certainly be of the
                same opinion had I read them in the opposite order. Aside from his core argument, <u>Behave</u> also
                serves as an unintimidating and informative introduction to cognitive science, behavioral analysis,
                neuroscience, ethology, and many other fields.
                <p>
                    There were several sections of the book that I particularly enjoyed. Throughout the book, he goes
                    into detail on what many of the regions of the brain specialize in. What I found most enjoyable was
                    the notion that evolution is, more often than not, a tinkerer, rather than an inventor; namely, many
                    of the more complex fears and desires that we experience are just more primal sensations with a
                    fresh coat of paint. Our insular cortex reacts similarly to an unappetizing piece of food and to a
                    person that we dislike (in fact, our experience of one can affect how we later feel about the
                    other!). Similarly, our hypothalamus activates when being chased by a lion or worrying about an
                    upcoming deadline (even though lion chases are more deadly than deadlines, at least you only have to
                    worry about them for a few seconds).
                </p>
                <p>
                    I also found the information on different neurotransmitters and hormones interesting. The primary
                    novel notion that I learned was that these chemicals amplify or suppress existing behavioral
                    patterns, <i>rather than cause them outright</i>. Depending on who you are and how you stand within
                    social hierarchies, testosterone can either promote or <i>suppress</i> aggressive tendencies. On top
                    of this, these influences are often heavily context-dependent. Oxytocin can make people more
                    nurturing and caring to in-group members, but more wary of out-group members.
                </p>
            </>
        ),
        "/media/image/behave.jpg",
        "behave"
    ),
    new BookTile(
        <>The Emotion Machine</>,
        "Marvin Minsky",
        (
            <>
                <u>The Emotion Machine</u> offers a fascinating new model for how our minds work. Minsky argues
                persuasively that emotions, intuitions, and feelings are not distinct things, but different ways of
                thinking. By examining these different forms of mind activity, Minsky says, we can explain why our
                thought sometimes takes the form of carefully reasoned analysis and at other times turns to emotion. He
                shows how our minds progress from simple, instinctive kinds of thought to more complex forms, such as
                consciousness or self-awareness. Indeed, says Minsky, if thinking can be understood as the step-by-step
                process that it is, then we can build machines -- artificial intelligences -- that not only can assist
                with our thinking by thinking as we do but have the potential to be as conscious as we are.
            </>
        ),
        `https://www.simonandschuster.com/books/The-Emotion-Machine/Marvin-Minsky/9780743276641`,
        (
            <>
                This book was my first real introduction to Marvin Minsky and his unique ideas about the mind and social
                behavior. His ideas surrounding the true nature of emotions and hierarchies of thinking were wholly
                novel to me when I first read it. This book stands out from many others at the intersection between
                artificial intelligence and cognitive science. This is primarily because even modern AI has not yet
                implemented many of the ideas presented here.
                <p>
                    For me, the most impactful ideas presented here were Minsky's interpretation of the actor-critic
                    structure of our cognition and his concept of <i>imprimers</i>, or who we are most likely to learn
                    from and why. This book was a significant inspiration behind my{" "}
                    <Link href="/research/bergeron">Bergeron</Link> thesis, which is built around a multi-model
                    implementation of a simple actor-critic architecture.
                </p>
            </>
        ),
        "/media/image/the-emotion-machine.jpg",
        "emotion-machine"
    )
];
