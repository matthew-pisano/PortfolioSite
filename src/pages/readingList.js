import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { BookTile, PageInfo, PageLink, SectionTile, Tile } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function ReadingList() {
    let tiles = [
        new Tile(
            <h2>What is All This?</h2>,
            (
                <>
                    Below is a collection of books I have read and would recommend to others. The following may be
                    useful for gaining foundational knowledge in the field of AI and the Cognitive Sciences, may have
                    had a significant impact on my own world model, or I may just find them interesting. Some of these
                    have also been personally recommended to me by colleagues and mentors. Through this collection, I
                    hope to provide some insight into my field of study and my own personal interests.
                </>
            )
        ),
        new SectionTile(<>Artificial Intelligence and Cognitive Science</>, "ai-cog-sci"),
        new BookTile(
            <>Superintelligence: Paths, Dangers, Strategies</>,
            "Nick Bostrom",
            (
                <>
                    <u>Superintelligence: Paths, Dangers, Strategies</u> explores how superintelligence could be created
                    and what its features and motivations might be. It argues that superintelligence, if created, would
                    be difficult to control, and that it could take over the world in order to accomplish its goals. The
                    book also presents strategies to help make superintelligences whose goals benefit humanity. It was
                    particularly influential for raising concerns about existential risk from artificial intelligence.
                </>
            ),
            `https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies`,
            (
                <>
                    This book almost single-handedly inspired me to pursue an education in artificial intelligence,
                    specifically alignment. Bostrom presents groundbreaking ideas on the nature and potential of AI in
                    an easily digestible manner. The book explores ideas relating how we may control entities far more
                    clever than us and the consequences if we fail our one (and likely only) attempt at doing so. He
                    goes into detail on how an AI, tasked with seemingly harmless <i>terminal goals</i> may nevertheless
                    set for itself <i>instrumental goals</i> that can pose an existential threat to humanity. As may be
                    evident in the name, this work also heavily inspired me to create my game,{" "}
                    <Link href="https://github.com/matthew-pisano/Superintelligent" target="_blank">
                        Superintelligent
                    </Link>
                    .
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
                    <u>Thinking Fast and Slow</u> serves as a compendium of the authors knowledge on both human
                    psychology and economic theory, particularly on the intersection between the two. The core idea of
                    the book is that, in contrast to traditional economic theory where humans serve as simple, rational
                    agents, the behavior of real humans is more complex and nuanced than originally thought. This idea
                    is expanded upon through three, more targeted, concepts: the two systems theory of cognition, the
                    difference between real humans and idealized <i>Econs</i>, and how humans behave differently when
                    experiencing a stimuli and remembering that same stimuli.
                    <p>
                        Traditionally, people tend to view their thought process as a monolith. A uniform process of
                        careful deliberation and informed decision making. Through his experiments, however, Kahneman
                        noticed that this is only half true, if that. As opposed to that careful and methodical process
                        that we envision, most of our thinking occurs within quick bursts that make thorough use of
                        heuristics and learned biases; this is <i>System 1</i>. It is able to make decisions quickly and
                        with considerable accuracy, but can easily be confounded by unfamiliar situations or problems
                        that require more thorough analysis. These harder problems are passed on to <i>System 2</i>,
                        although only as a last resort. These cognitive processes are slower and less prone to error,
                        but are much more resource intensive; therefore, our brains often accept the cheap and fast
                        verdicts of System 1, unless it determines that a call to System 2 is absolutely necessary.
                    </p>
                    <p>
                        When students first learn economic theory, they are often taught that, within an economic
                        context, humans act as rational agents that are aware of their precise goals and always take
                        informed actions to further their goals. Although these agents are useful for modeling economic
                        decisions, they are only an approximation of actual human behavior. Within the book, these
                        idealized agents are referred to as <i>Econs</i>. In contrast, human decision making, while
                        still goal oriented, may employ heuristics to obtain quick, but inaccurate answers, rely on
                        biases, or be heavily influenced by how a choice is presented. Idealized Econs have no such
                        shortcomings.
                    </p>
                    <p>
                        During the closing chapters of the book, the author highlights the difference between the
                        actions of the <i>Experiencing Self</i> and the <i>Remembering Self</i>. The Experiencing Self
                        describes a person in the midst of a situation while the Remembering Self describes that same
                        person after some event, working off of a <i>post hoc</i> interpretation. Kahneman highlights
                        several important examples of a person's <i>post hoc</i> decisions acting against the best
                        interests of a past or future experiencing self.
                    </p>
                </>
            ),
            ``,
            (
                <>
                    While all of the concepts presented within <u>Thinking Fast and Slow</u> have far-reaching
                    influences on economics, cognitive science, and psychology, I find his first set of ideas the most
                    interesting. Namely, his distinction between <i>System 1</i> and <i>System 2</i> thinking. This is
                    primarily because of its potential implications on my own field of study, artificial intelligence.
                    Currently, the most successful attempts at creating a <i>general</i> artificially intelligent agent
                    have, buy and large, used a monolithic architecture where the same fundamental structure or
                    algorithm serves as the basis for an entire model.
                    <p>
                        While this has thus-far been impressively successful, this approach has yet to produce something
                        nearing human-level in the majority of domains, especially for problem solving and slow,
                        methodical thinking. Current approaches appear to closely mirror a <i>System 1</i> process,
                        providing quick answers that heavily rely on heuristics and learned biases. Additionally, while
                        many modern models can be coerced into <i>System 2-eqsue</i> reasoning, it does not come as a
                        natural consequence of the architecture and still often falls short when the problem domain is
                        significantly out of distribution or scope from the original training data. To create a system
                        that can truly be classified as generally intelligent in the same way we consider ourselves,
                        Kahneman's ideas may suggest that a different approach is needed in conjunction with modern
                        strategies.
                    </p>
                </>
            ),
            "/media/image/thinking-fast-and-slow.jpg",
            "thinking-fast-slow"
        ),
        new BookTile(
            <>The Alignment Problem</>,
            "Brian Christian",
            (
                <>
                    <u>The Alignment Problem: Machine Learning and Human Values</u> compiles and analyzes numerous
                    interviews with experts trying to build artificial intelligence systems, particularly machine
                    learning systems, that are aligned with human values. The book is divided into three sections:
                    Prophecy, Agency, and Normativity. Each section covers researchers and engineers working on
                    different challenges in the alignment of artificial intelligence with human values.
                </>
            ),
            `https://en.wikipedia.org/wiki/The_Alignment_Problem`,
            (
                <>
                    While this book concentrates on similar themes to Nick Bostrom's <u>Superintelligence</u>, some of
                    the most impactful ideas that this book presents involve much less existential, albeit still
                    harmful, examples of misalignment. Much of its length is devoted to addressing the ethical
                    implications of implementing machine learning algorithms without proper planning. For example, he
                    cites how AI criminal risk assessment / recidivism prediction tools, like <i>COMPAS</i>, often
                    exhibit biases toward minority groups. One of the most interesting insights along this vein was on
                    the fact that ML algorithms can accidentally infer data that was held-out from training (for
                    example, an 'unbiased' algorithm can accidentally condition itself on someone's race or gender,
                    despite only having names or neighborhoods in its dataset.).
                    <p>
                        Christian's chapters on reward systems and curiosity also helped to cement my understanding of
                        the role these concepts play in learning, both natural and artificial. A common theme with this
                        book was how well its concepts complemented my more formal education.
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
                    asserts that the risk to humanity from advanced artificial intelligence is a serious concern despite
                    the uncertainty surrounding future progress in AI. It also proposes an approach to the AI control
                    problem. Russell asserts that the standard model of AI research, in which the primary definition of
                    success is getting better and better at achieving rigid human-specified goals, is dangerously
                    misguided. If an AI developed in this manner were to become superintelligent, it would likely not
                    fully reflect human values and could be catastrophic to humanity. Russell further asserts that
                    safety research should be begun as soon as possible, as it is also highly uncertain how long it
                    would take to complete such research.
                </>
            ),
            `https://en.wikipedia.org/wiki/Human_Compatible`,
            (
                <>
                    In this book, Russell both introduces technical topics to the reader and challenges some
                    conventional thinking about artificial intelligence in a concrete and understandable manner. He
                    covers a wide variety of topics, ranging from how AI may (and should) behave when interacting with
                    the real world, to common misconceptions and criticisms of alignment research, and more concrete
                    learning techniques.
                    <p>
                        Russell considers concepts such as how to balance the personal and societal utilities of
                        embodied assistants and how such assistants can safely learn by maintaining a core of immutable
                        ideals. He also provides effective counter-arguments to common arguments against alignment
                        research, such as "Why can't you just turn it off" or "It will behave if we specify its goals
                        well enough".
                    </p>
                    <p>
                        The later chapters of the book introduce some learning techniques that I personally find
                        interesting, such as inverse reinforcement learning and how that may be applicable for aligning
                        an AI with the ill-defined preferences of humans.
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
                    fundamental notions of the human condition: <i>the ability to freely choose</i>. The book is split
                    into two major parts. In the first part, he uses our modern understandings of psychology, sociology,
                    neuroscience, genetics, and even quantum physics, to gradually chip away at all the places that our
                    commonplace notions of <i>free will</i> could be sourced from. His main argument posits that we live
                    in a deterministic, albeit unpredictable, universe; within such a mechanistic universe, there are no
                    cracks from which a dualistic <i>self</i> may emerge. He further asserts that the outcomes of our
                    lives are largely, if not completely, determined by our environment, our hormones, our socioeconomic
                    status, culture, genetics, and so on. In other words, our decisions at each instant are{" "}
                    <u>fully determined</u> by what we experienced 'one second before, one hour before, one month
                    before, ...'. Turtles all the way down, as he frames it. Within all of this, he touches on some
                    truly interesting psychological experiments, chaos within systems, complexity, emergence, and the
                    ways in which quantum effects do and, importantly for his argument, do not influence our biology and
                    behavior.
                    <p>
                        The second collection of chapters concerns the fallout of accepting this notion, on both distal
                        and proximal scales. This concerns topics such as, the societal impacts of people repudiating
                        the notion of free will, historical precedents for similar seismic shifts in our understanding
                        of the world, and consequences for mental health, motivation, and criminal justice.
                    </p>
                </>
            ),
            ``,
            (
                <>
                    Reading Sapolsky's thoughts and expansions on this subject have been thoroughly illuminating. While
                    I initially chose this book to reinforce, rather than revise, my own views on <i>free will</i>, I
                    both found his arguments to be both unique and thought-provoking. He is able to masterfully bring
                    together many disparate scientific disciplines and follows their findings to their natural
                    conclusions about us and what really determines our behavior. From the behavior of slime molds and
                    the quantum effects on microtubules to seemingly random dumps of neurotransmitters and the
                    well-studied consequences of childhood adversity, he effectively argues that there is a mechanistic
                    and (broadly) deterministic explanation for all the phenomena we usually attribute to ourselves.
                    <p>
                        In essence, we do not choose how to play the hand that we are dealt in life, rather we{" "}
                        <i>are</i> the hand that we are dealt; the cards play themselves.
                    </p>
                    <p>
                        In addition to the well thought-out content, I also particularly enjoy his writing style. Each
                        page comes with a myriad of citations, in-depth footnotes, asides, and short personal rants that
                        makes the experience of reading his book both stimulating and engaging. Even to those that may
                        remain unconvinced by his ideas, the book is still a worth-while read. If not for the
                        interesting facts, experiments, and history, then hopefully such a reader would attend to his
                        thoughts on empathy, justice, and how we currently organize our society (and, hearteningly, how
                        far we have already come).
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
                    <u>Behave: The Biology of Humans at Our Best and Worst</u> serves as an excellent exploration into
                    the nature of human behavior, its causes, its consequences, and how we can use that knowledge to
                    inform our own decisions. The central question of the book is this: a behavior has occurred, be it a
                    righteous act of selfless heroism or an exercise in revolting depravity, why? Sapolsky's approach to
                    this question is one of analytic thoroughness.
                    <p>
                        His answer is delivered piecemeal as he examines what events, values, stimuli, etc. could have
                        influenced that behavior. What had occurred one second before that behavior? Which photons hit
                        the persons retina, how much dopamine was present in the synapses of the person's brain? What
                        about the minutes before? Was someone else recently rude to them, how much testosterone was
                        present in their bloodstream? Hours or days before? Did they just get fired from their job or
                        win an award, has a toothache recently developed? How was their adolescence? Did they grow up
                        with the world as their oyster or worried about whether they were going to have dinner at night?
                        Before birth, which hormones, and in what concentration were they exposed to in the womb? Were
                        their parents raised in an individualist or collectivist culture? Every one of these questions
                        has a significant impact on how a person behaves and how they process the behavior of others.
                    </p>
                    <p>
                        Sapolsky continues, examining how behaviors evolve, how we treat in-group <i>Us'</i> and
                        out-group <i>Thems</i>, how hierarchies form and how we respond to our statuses within them, and
                        introspections into morality, empathy, and metaphor. Similarly to <u>Determined</u>, he also
                        discusses the implications of these ideas on the criminal justice system. How does punishment
                        work if our behaviors are heavily, if not fully{" "}
                        <a href="https://matthewpisano.com/readingList#determined">determined</a> by factors outside of
                        our control?
                    </p>
                </>
            ),
            ``,
            (
                <>
                    I read <u>Behave</u> after I read <u>Determined</u> (unintentionally, but I'm glad that I did). It
                    is very clear how the ideas Sapolsky presents in the former influenced the creation of the latter.
                    In his familiar style, the author goes into a significant amount of detail to support each facet of
                    his ideas, citing behavioral studies, observations of primates and other mammals, and his own
                    personal experience. For me, his ideas on behavior, rewards, and punishment were relatively easy to
                    digest after being primed by <u>Determined</u>, but they are presented in such a cohesive manner
                    that I would certainly be of the same opinion had I read them in the opposite order. Aside from his
                    core argument, <u>Behave</u> also serves as an un-intimidating and informative introduction to
                    cognitive science, behavioral analysis, neuroscience, ethology, and many other fields.
                    <p>
                        There were several sections of the book that I particularly enjoyed. Throughout the book, he
                        goes into detail on what many of the regions of the brain specialize in. What I found most
                        enjoyable was the notion that evolution is, more often than not, a tinkerer, rather than an
                        inventor; namely, many of the more complex fears and desires that we experience are just more
                        primal sensations with a fresh coat of paint. Our insular cortex reacts similarly to an
                        unappetizing piece of food and to a person that we dislike (in fact, our experience of one can
                        affect how we later feel about the other!). Similarly, our hypothalamus activates when being
                        chased by a lion or worrying about an upcoming deadline (even though lion chases are more deadly
                        than deadlines, at least you only have to worry about them for a few seconds).
                    </p>
                    <p>
                        I also found the information on different neurotransmitters and hormones interesting. The
                        primary novel notion that I learned was that these chemicals amplify or suppress existing
                        behavioral patterns, <i>rather than cause them outright</i>. Depending on who you are and how
                        you stand within social hierarchies, testosterone can either promote or <i>suppress</i>{" "}
                        aggressive tendencies. On top of this, these influences are often heavily context-dependent.
                        Oxytocin can make people more nurturing and caring to in-group members, but more weary of
                        out-group members.
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
                    thought sometimes takes the form of carefully reasoned analysis and at other times turns to emotion.
                    He shows how our minds progress from simple, instinctive kinds of thought to more complex forms,
                    such as consciousness or self-awareness. Indeed, says Minsky, if thinking can be understood as the
                    step-by-step process that it is, then we can build machines -- artificial intelligences -- that not
                    only can assist with our thinking by thinking as we do but have the potential to be as conscious as
                    we are.
                </>
            ),
            `https://www.simonandschuster.com/books/The-Emotion-Machine/Marvin-Minsky/9780743276641`,
            (
                <>
                    This book was my first real introduction to Marvin Minsky and his unique concepts about the mind and
                    social behavior. His ideals surrounding the true nature of emotions and hierarchies of thinking were
                    whole novel to me when I first read it. This book stands out from many others at the intersection
                    between artificial intelligence and cognitive science. This is primarily because even modern AI has
                    not yet implemented many of the ideas presented here.
                    <p>
                        For me, the most impactful ideas presented here were Minsky's interpretation of the actor-critic
                        structure of our cognition and his concept of <i>imprimers</i>, or who we are most likely to
                        learn from and why. This book was a significant inspiration behind my{" "}
                        <Link href="/research/bergeron">Bergeron</Link> thesis, which is built around a multi-model
                        implementation of a simple actor-critic architecture.
                    </p>
                </>
            ),
            "/media/image/the-emotion-machine.jpg",
            "emotion-machine"
        ),
        new SectionTile(<>Historical and Science Fiction</>, "hifi-sifi"),
        new BookTile(
            <>2001: A Space Odyssey</>,
            "Arthur C. Clarke",
            (
                <>
                    <u>2001: A Space Odyssey</u> is a science fiction novel that follows humanity's fleeting, yet
                    impactful, encounters with a mysterious alien civilization. After the discovery of an alien monolith
                    on the Moon, a crew of astronauts is sent to Jupiter to investigate a similar monolith. The novel
                    explores themes of artificial intelligence, extraterrestrial life, and the nature of consciousness.
                </>
            ),
            ``,
            (
                <>
                    This novel was notable to me for a myriad of reasons. Clarke puts a great deal of effort into
                    ensuring that his story remains as scientifically accurate as possible, while still making the plot
                    seem plausible and self-consistent. The beginning of the novel offers a unique explanation to the
                    question of why humans often appear to be fundamentally different with respect to the remainder of
                    the animal kingdom. His description of space-flight, moon-bases, and technology are impressively
                    accurate for being written before even the first moon landing.
                    <p>
                        Of course, one of the most impactful details to me was how <i>HAL</i> behaves and how his
                        internal world model motivates his actions. He (it?) serves as an excellent example of how
                        seemingly virtuous terminal goals, such as investigating <i>TMA-2</i>, can lead to unforeseen
                        instrumental goals, such as self-preservation at all costs, as <i>HAL</i> does not have a real
                        understanding about what shutting down will really mean for him. All of this comes decades
                        before alignment, or even AI, became popular within public discourse.
                    </p>
                    <p>
                        Another interesting detail is what Clarke gets wrong. Namely, his prediction that Marvin Minsky
                        and Irving John Good would play a pivotal role in designing neural networks that could
                        effectively learn. While this exact sequence of events did not play out in reality, it is
                        closely reflected in the real achievements of the two scientists and thw AI boom of the 1980s.
                    </p>
                </>
            ),
            "/media/image/2001.jpg",
            "space-odyssey"
        ),
        new BookTile(
            <>Do Androids Dream of Electric Sheep?</>,
            "Philip K. Dick",
            (
                <>
                    <u>Do Androids Dream of Electric Sheep?</u> explores themes of humanity, empathy, and the nature of
                    consciousness set in a post-apocalyptic world after most humans have fled to off-world colonies.
                    Amid this bleak landscape, Dick examines what it means to be human and the ethics of artificial
                    life. The novel follows Rick Deckard, a bounty hunter tasked with "retiring" rogue androids, and
                    John Isidore, a man of limited intelligence due to radiation exposure who empathizes with the
                    fugitive androids.
                </>
            ),
            ``,
            (
                <>
                    One of the most striking aspects of this book is how Dick describes his androids, specifically the
                    Nexus-6 models. Instead of being sentient machines made of circuit boards and metal substructures,
                    they are much more like artificial, biological humans. This further strengthens the book's central
                    moral conflict concerning the difference between humans and these 'andys'. In addition to behaving
                    like humans outwardly, they also poses similar biology to humans internally.
                    <p>
                        This blurred distinction between humans and androids in the book is increasingly becoming
                        applicable to the ethics of real-world artificial intelligences. While I do not foresee the
                        development biological humanoid assistants, the book remains relevant to how we interact with
                        our increasingly intelligent and embodied assistants. This progression too is addressed within
                        the book as Rick Deckard describes how he becomes more empathetic to the more advanced androids
                        that he is tasked with retiring. With his story, Dick asks us where the line between ourselves
                        and our creations lies; this is a question we should begin to ask ourselves as AI research
                        continues to advance.
                    </p>
                </>
            ),
            "/media/image/do-androids-dream-of-electric-sheep.jpg",
            "electric-sheep"
        ),
        new BookTile(
            <>The Maniac</>,
            "Benjamín Labatut",
            (
                <>
                    <u>The Maniac</u> is a fictionalised biography of polymath John von Neumann. It primarily explores
                    von Neumann's life and accomplishments through a series of envisioned interviews with those he
                    interacted with. The book's prelude follows Paul Ehrenfest as he grapples with the crumbling
                    foundations of physics and mathematics that began to buckle under the weight of the quantum
                    revolution and the theory of relativity. The book then transitions to von Neumann's life, his work
                    on the Manhattan Project, and his contributions to game theory and computer science. The concluding
                    chapters concentrate on Demis Hassabis and his work on AlphaGo, a computer program that defeated the
                    world Go champion.
                </>
            ),
            ``,
            (
                <>
                    In this book, Labatut effectively employs fictionalized interactions and interviews to instill a
                    sense of awe within the reader and contextualize historical events with a sense of gravity that
                    traditional history books may struggle to convey. Much of the book takes place during the 1920s and
                    1930s. These chapters explore how some of Europe's most brilliant minds coped with existential
                    threats to the established order of Science and Mathematics in the forms of quantum mechanics,
                    relativity, and Gödel's incompleteness theorems. For some, this is compounded by the rapid rise of
                    the Nazis, anti-semitism, and distrust in the sciences on the continent. In later chapters, Labatut
                    details the Manhattan project and the sense of awful wonder that Nuclear Weapons imparted upon their
                    creators. Many of the minds that the book follows finally break under the strain of their
                    environment or as a consequence of their own creations.
                    <p>
                        While the finer details of the book are not strictly based on historical evidence, reading{" "}
                        <u>The Maniac</u> has changed how I think about inspiration, ideation, and invention. It also
                        instills a sense of reverence for the geniuses that pioneered many of the ideas that underpin
                        the modern understanding of computing, artificial intelligence, and game theory. It also gave me
                        a much better understanding of John von Neumann, as his achievements are often less emphasized
                        than those from Turing or Gödel during undergraduate education.
                    </p>
                </>
            ),
            "/media/image/the-maniac.jpg",
            "maniac"
        ),
        new BookTile(
            <>When We Cease to Understand the World</>,
            "Benjamín Labatut",
            (
                <>
                    <u>When We Cease to Understand the World</u> reads very similarly to another of Labatut's books,{" "}
                    <u>The Maniac</u>. It is a fictionalized account of some major developments in theoretical physics
                    and mathematics during the 20th century. Based on real, historical events, the book examines the
                    struggles, moral quandaries, and often madness that accompanies groundbreaking discoveries. It
                    briefly follows luminaries such as Fritz Haber, Werner Heisenberg, and Alexander Grothendieck as
                    they face the consequences of their discoveries and their own personal struggles.
                </>
            ),
            ``,
            (
                <>
                    Through his use of fiction to fill in details that remain absent from the historical record, Labatut
                    explores the consequences of several foundational discoveries and the physical and psychological
                    consequences that befell their creators. The first chapter, <i>Prussian Blue</i>, focuses on Fritz
                    Haber, a Jewish German chemist who invented a synthetic process of creating ammonia from nitrogen
                    and hydrogen gas in addition to heavier-than-air chlorine gas. The former revolutionized the
                    production of rich fertilizer, potentially saving hundreds of millions from starvation; the latter
                    was used in the trenches of World War One, killing hundreds of thousands. Haber also discovered a
                    powerful pesticide, dubbed <i>Zyklon A</i>, a derivative of which would later be used by the Nazis
                    to murder millions. During use, the <i>Zyklon B</i> derivative breaks down into several chemical
                    byproducts, one of which often stained chamber walls a distinctive shade of <i>Prussian Blue</i>. At
                    the core of Fritz Haber's legacy is the concept of dual-use. Just as the <i>Haber-Bosch</i> process
                    and <i>Zyklon A</i> have yielded nearly incalculable benefits through their civilian use, chlorine
                    gas and <i>Zkylon B</i> gave rise to untold suffering through their military usage. This concept
                    similarly applies to many other technologies, ranging from Artificial Intelligence to Nuclear
                    Fission.
                    <p>
                        The last section of the book follows Werner Heisenberg and Erwin Schrödinger as their
                        discoveries at the core of quantum mechanics marked the collapse of the final pillar of our
                        classical understanding of the world. First, Heisenberg's calculations predicted a strange
                        property of quantum particles: the more finely you were able to pin down their position, the
                        less you could be certain of their momenta and vice-versa. This result is heavily intertwined
                        with the <i>Observer Effect</i> by which observations of a quantum object are not commutable.
                        Next came the discoveries of Erwin Schrödinger. By his calculations, quantum objects could best
                        be described as waves, without a single, well-defined position of momentum. By the end of the
                        book, Heisenberg realizes that these two notions are compatible, resulting in a world where
                        quantum particles exist in an indeterminate state, best described by Schrödinger's wave
                        functions. Upon observation, however, this wave function collapses, resolving the particle to a
                        more well-defined position or momentum. The consequence of this discovery was a world that does
                        not have a predictable, fundamental description. It is "fuzzy", random, and uncertain at its
                        core. Our world of definite, commutable, and observable phenomena is merely an illusion build on
                        the true, quantum reality.
                    </p>
                    <p>
                        <u>When We Cease to Understand the World</u> expands upon a theme that I have noticed among many
                        of the books that I have read: as you examine reality at its most granular, the stranger it
                        becomes and the further your original understanding of the world begins to break down. This
                        extends beyond quantum mechanics; the continuous flow of time also increasingly appears to be a
                        stubborn illusion, along with how all humans behave, the underlying causes of our everyday
                        interactions, and what it says about how we make decisions, both personal and interpersonal. I
                        believe this notion warrants a much deeper discussion in the future.
                    </p>
                </>
            ),
            "/media/image/when-we-cease-to-understand-the-world.jpg",
            "cease-to-understand-the-world"
        ),
        new BookTile(
            <>There is No Antimemetics Division</>,
            "qntm (Sam Hughes)",
            (
                <>
                    <u>There is No Antimemetics Division</u> follows Marion Wheeler, the head of the titular
                    <i>Antimemetics Division</i> within the{" "}
                    <Link href="https://scp-wiki.wikidot.com/" target="_blank">
                        SCP Foundation
                    </Link>{" "}
                    as she slowly realizes that her reality is under threat by an entity designated by the foundation as
                    SCP-3125. The book reads as a collection of short stories, revolving around a small group of
                    characters as they combat SCP-3125 and other antimemetic threats. These entities primarily interact
                    with the world of SCP through memory and psychological attacks, destroying the memories of the
                    people it targets, making itself impossible for humans to perceive, or revealing something that is
                    so utterly incomprehensible that even experienced foundationers are neutralized on the spot. Despite
                    the SCP foundation's nearly limitless resources, its members are still human, (nearly) defenseless
                    by their very nature. The story asks a central question, the answer to which is the only way
                    SCP-3125 can be dealt with effectively: How can you combat something which you don't even remember
                    the existence of?
                </>
            ),
            ``,
            (
                <>
                    This book heavily relies upon the concept of <i>antimemes</i>. To the uninitiated, this can be a
                    rather alien concept, even though it is still quite grounded in reality. Whereas <i>memes</i> (yes,
                    those too) are ideas which can multiply and spread rapidly, almost virulently at times, through a
                    population, <i>antimemes</i> are ideas which cannot be spread. Some cannot be remembered by those
                    who perceive it, some cannot be perceived at all, and yet others can 'eat' the memories of anyone
                    that is aware of it. In the SCP universe, these effects can be at least somewhat remedied by a class
                    of drug known as <i>mnestics</i> which make it more difficult for the user to forget and more adept
                    at perceiving these SCPs. Others in the story, like the character Adam, have a sort of natural
                    'immunity' to these antimemes, at least the weaker ones. I the story, SCP-3125 is a
                    <span style={{ color: "black" }}>
                        ██████ ██ ██████████ ███ ███████ ███ ████ █████ ████████ ██ █████████ ███ ██████ ██████ ████████
                        ███ ███████ ███ ███████████ ███████ ███ ████████ ██ ██
                    </span>
                    . It is able to{" "}
                    <i>
                        <b>[DATA EXPUNGED]</b>
                    </i>
                    . <i>What was I saying again?</i>
                    <p>
                        <u>There is No Antimemetics Division</u> makes brilliant use of these themes of memory,
                        forgetfulness, and how the human brain is shockingly good at filling in the gaps (even those of
                        immense scale). Multiple characters throughout the story are made to forget to much that they
                        have to rebuild their very personality from scratch over the following months of weeks (so
                        common, in fact, that those within the division treat it as an almost mundane occurrence). While
                        antimemes this powerful are thankfully fictional, there are real people with physical or
                        cognitive injuries whose experiences align surprisingly well with the antimemetic objects of the
                        story. This also helps readers to get a more concrete understanding of how the human brain copes
                        with such maladies. For example, those with <i>scotomas</i> are unable to perceive objects
                        within certain regions of their POV. In these cases, the brain 'stitches' the edges together to
                        maintain a continuous visual field, completley absent of objects that may be right in front of
                        that individual. Disorders such as <i>agnosia</i>, resulting in the inability to perceive
                        certain stimuli, or <i>retrograde or anterograde amnesia</i>, which render someone unable to
                        remember past or present events, usually as a result of a TBI event. This story is an excellent
                        example of how fiction can be effectively utilized to give the reader a more complete
                        understanding of the human condition.
                    </p>
                </>
            ),
            "/media/image/there-is-no-antimemetics-division.jpg",
            "antimemetics"
        ),
        new SectionTile(<>Physics</>, "physics"),
        new BookTile(
            <>QED: The Strange Theory of Light and Matter</>,
            "Richard Feynman",
            (
                <>
                    <u>QED: The Strange Theory of Light and Matter</u> is an adaptation of four lectures given by
                    Richard Feynman at UCLA. Designed for readers without an in-depth knowledge in the field of{" "}
                    <i>quantum electrodynamics</i>, the book is able to effectively convey the complex notions of the
                    theory while remaining understandable to general audiences. Feynman uses analogies, diagrams, and
                    his well-known <i>Feynman diagrams</i> to describe this subset of quantum field theory in terms that
                    anyone can understand.
                </>
            ),
            ``,
            (
                <>
                    This book served as my first (informal) introduction to QED, specifically, and even QFT in general.
                    His analogies and examples, such as the connection he makes between photons reflecting off of a
                    class surface and quantum non-determinism, help to frame the notoriously abstract concepts of the
                    quantum realm in more familiar terms.
                    <p>
                        I especially enjoy how the book is structured. It follows a clear progression from that
                        high-level example to the more complex reality of wave-particle dualities and virtual photons. I
                        also found the logic behind his Feynman diagrams interesting and how they can represent the
                        infinite possibilities of particle interactions within a series of simple lines.
                    </p>
                </>
            ),
            "/media/image/qed.jpg",
            "quantum-electrodynamics"
        ),
        new BookTile(
            <>Reality is Not What It Seems</>,
            "Carlo Rovelli",
            (
                <>
                    <u>Reality is Not What It Seems</u> is an exploration of the theory of <i>Loop Quantum Gravity</i>{" "}
                    and of its millennia long origin story. Rovelli, a renowned theoretical physicist makes the decision
                    to start this book, not with his own theory, but with the very origins of western scientific thought
                    in pre-Socratic ancient Greece. Beginning with Anaximander and his assertions that the natural world
                    is governed by discoverable laws rather than by personified gods, to Democritus and his atomic
                    theory and the indivisibility of matter at its smallest levels.
                    <p>
                        Leaping forward to the renaissance, the author highlights Galileo and his studies of how matter
                        on Earth moves and accelerates, along with Copernicus and Kepler and their calculations and laws
                        on how bodies move in the heavens. Onto Newton and his realization that the same laws that
                        Galileo used to describe objects on Earth could be used do describe the objects of the heavens
                        just as Copernicus and Kepler had done. His synthesis of these ideas went on the serve as the
                        groundwork of physics until the nineteenth century.
                    </p>
                    <p>
                        While Newton was able to describe how objects were influenced under gravity, his theories lacked
                        sufficient descriptions of electricity and magnetism. Realizing this, Faraday begins work on
                        using field lines to intuitively describe these forces. Made concrete with the equations of
                        Maxwell, the world was now able to model two of the yet-to-be-known four fundamental forces.
                    </p>
                    <p>
                        With the world seemingly close to a complete set of theories of the universe, in steps Einstein
                        in 1905. Building on Maxwell's equations for electromagnetism and some intuitions from Galileo,
                        he realized two fundamental truths: the laws of physics were identical in any inertial reference
                        frame and that the speed of light in a vacuum was the same for any observer. These observations
                        also reveal something surprising that Newton's laws could not explain: the equivalence between
                        energy and matter. Ten year later, he goes on to further show that matter and energy can warp
                        and distort spacetime, incompatible with the flat environment assumed by Newtonian mechanics.
                    </p>
                    <p>
                        The next step on the journey to <i>Loop Quantum Gravity</i> came a further ten years later with
                        rapid advances in quantum mechanics. Building on the quantization ideas of Plank at the turn of
                        the century, Bohr, Dirac, Schrodinger, and Heisenberg helped to paint a world that diverged
                        further from Newton's theories. Their equations described a world where matter has no
                        well-defined position or momentum, could disappear and reappear in a different location, could
                        only hold certain masses and energies, and could be in multiple places at once. After further
                        evolutions in to quantum field theory and the standard model, this is where the frontiers of
                        physics have remained for nearly a century.
                    </p>
                    <p>
                        At this point, the work of Rovelli himself, along with his contemporaries emerges. They,
                        however, face a challenge. The smooth, continuous, and curved spacetime of general relativity
                        seems incompatible with the disjoint, discrete, and flat observations of quantum theory.{" "}
                        <i>Loop Quantum Gravity</i> is a theory designed to bridge this gap. Rovelli and colleagues
                        assert that space itself is quantized, defined by an enumerable, yet finite, amount of quantum
                        loops and spin networks. While this neatly solves many of the singularities within relativity
                        and quantum mechanics, it ha some alien implications. Chief among these is that the "arrow of
                        time" that we experience at a macroscopic level is merely an emergent construct, rather than a
                        fundamental attribute of the universe.
                    </p>
                </>
            ),
            ``,
            (
                <>
                    Rovelli's work offers an in-depth and well-written explanation of both the current state of
                    theoretical physics, from his point of view, and the long scientific journey tht was needed to
                    arrive there. This also highlights several scientists and philosophers that are less widely known,
                    but still serve as integral foundations to those who came after. Anaximander encouraged people to
                    seek evidence-based explanations for phenomena instead of relying solely on superstition. Democritus
                    gave rise to atomism and the indivisibility of matter at its smallest levels, which Einstein
                    demonstrated through Brownian motion, and serves as the basis for Loop theory's quantization of
                    spacetime. His approach helps to form a coherent narrative and give readers a clearer picture of how
                    we evolved from understanding very little about natural phenomena to peering into the fundamental
                    inner-workings of the universe.
                </>
            ),
            "/media/image/reality-is-not-what-it-seems.jpg",
            "not-what-it-seems"
        ),
        new BookTile(
            <>The Little Book of String Theory</>,
            "Steven Gubser",
            (
                <>
                    <u>The Little Book of String Theory</u> offers a short, accessible, and entertaining introduction to
                    one of the most talked-about areas of physics today. String theory has been called the "theory of
                    everything". It seeks to describe all the fundamental forces of nature. It encompasses gravity and
                    quantum mechanics in one unifying theory. But it is unproven and fraught with controversy. After
                    reading this book, you’ll be able to draw your own conclusions about string theory.
                </>
            ),
            `https://press.princeton.edu/books/hardcover/9780691142890/the-little-book-of-string-theory`,
            (
                <>
                    Similarly to <u>QED</u>, this served as my first semi-serious introduction to <i>String Theory</i>.
                    Gubser manages to fit an impressive amount of information into this relatively short book. From the
                    strings themselves to D-branes, M-theory, and Supersymmetry, the book is able to convey the basic
                    concepts behind these theories through the usage of diagrams and how they may help tp explain
                    real-world phenomena.
                    <p>
                        One of the most interesting portions for me was the last chapter of the book. Here, he explains
                        how the addition of a fifth dimension can help to explain the behavior of quark-gluon plasma
                        after being created by the collision of heavy gold nuclei. It stood out to me primarily because
                        it was able to take an observed phenomena that could already be described in terms of quantum
                        field theory, and re-frame it using string theory.
                    </p>
                </>
            ),
            "/media/image/the-little-book-of-string-theory.jpg",
            "string-theory"
        ),
        new BookTile(
            <>The Order of Time</>,
            "Carlo Rovelli",
            (
                <>
                    <u>The Order of Time</u> explores the nature of time and its relationship to the universe. Within
                    its pages, Rovelli argues that time is not a fundamental aspect of the universe, but rather an
                    emergent consequence of the most basic properties of the universe. The book is broken into three
                    parts: "The Crumbling of Time", "The World Without Time", and "The Sources of Time". The first part
                    explores the most basic attributes of time and how, when you look closely at our best theories of
                    the universe, they begin to break down. The second part explores how the most fundamental theories
                    of the universe, especially quantum mechanics, do not require a privileged 'time' variable to
                    function. The final part explores how our apparent experience of time emerges from a blurred
                    perception of irreversible processes.
                </>
            ),
            ``,
            (
                <>
                    Rovelli manages to cover an impressive amount of theory and conjecture within just over 200 pages.
                    As a part of his discussion on the breakdown of <i>classical</i> time, the book explains how special
                    relativity the lack of a universal ground-truth for time. He also describes one's <i>local time</i>{" "}
                    as a member of a partially ordered set. In other words, the time experiences be two observers can
                    only be compared after they causally interact with each other. Otherwise, such a measurement is
                    meaningless. In the second part of the book, Rovelli describes how quantum interactions do not need
                    to be governed by some local time value, rather they are only determined by other quantum events,
                    the ordering of which is often asymmetric. This creates a sort of web of quantum events that evolve
                    w.r.t. other events, rather than the passage of time.
                    <p>
                        These ideas work to void the idea of a rigid <i>Block Universe</i> where the entire universe can
                        be resolved to a single state at every given instant. In such a universe all past states are
                        both fully resolved and static. To me, this idea seemed quite sensible until I read Rovelli's
                        well-crafter arguments as to why it does not fit with our current theories. The book also argues
                        quite convincingly in favor of <i>loop quantum gravity</i>, a theory which Rovelli himself is a
                        pioneer of. I have also noticed that the notions presented within this book seem (in a very
                        rough sense) compatible with Stephen Wolfram's conjectures on{" "}
                        <Link
                            href="https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/"
                            target="_blank">
                            <i>Hypergraphs</i>
                        </Link>
                        .
                    </p>
                </>
            ),
            "/media/image/the-order-of-time.jpg",
            "order-of-time"
        ),
        new SectionTile(<>Futurism</>, "futurism"),
        new BookTile(
            <>The Inevitable: Understanding the 12 technological forces that will shape our future</>,
            "Kevin Kelly",
            (
                <>
                    <u>The Inevitable: Understanding the 12 technological forces that will shape our future</u> asserts
                    that much of what will happen in the next thirty years is inevitable, driven by technological trends
                    that are already in motion. In this book, Kevin Kelly provides an optimistic road map for the
                    future, showing how the coming changes in our lives—from virtual reality in the home to an on-demand
                    economy to artificial intelligence embedded in everything we manufacture—can be understood as the
                    result of a few long-term, accelerating forces. These larger forces will completely revolutionize
                    the way we buy, work, learn, and communicate with each other. Kelly’s bright, hopeful book will be
                    indispensable to anyone who seeks guidance on where their business, industry, or life is
                    heading—what to invent, where to work, in what to invest, how to better reach customers, and what to
                    begin to put into place—as this new world emerges.
                </>
            ),
            `https://www.amazon.com/Inevitable-Understanding-Technological-Forces-Future/dp/0143110373`,
            (
                <>
                    I first read this book back when it originally came out. At that point, it was entirely uncertain if
                    some, or if even any, or Kelly's predictions would materialize. Looking back nearly 10 years after
                    publication, his theories have proven remarkably prescient. Out of his twelve points (Becoming,
                    Cognifying, Flowing, Screening, Accessing, Sharing, Filtering, Remixing, Interacting, Tracking,
                    Questioning, Beginning), I found his points on Becoming, Cognifying, and Accessing to be the mode
                    relevant. In short, these points describe a world where information is increasingly streamed and
                    subscribed to, with an emphasis on cloud-based AI models. Even back in 2017, these points struck me
                    as something to look out for in the future.
                    <p>
                        Reading this book helped to shape my attitude on the future of technological progress and
                        societal trends. Kelly's optimism is still contagious, even in the face of ever-potent
                        click-through algorithms and the decreasing emphasis of digital ownership.
                    </p>
                </>
            ),
            "/media/image/the-inevitable.jpg",
            "inevitable"
        ),
        new BookTile(
            "Physics of the Impossible",
            "Michio Kaku",
            (
                <>
                    <u>Physics of the Impossible</u> analyzes the feasibility and hypothetical scientific basis for many
                    fantastical, and not-so-fantastical, science fiction technologies. From phasers to force-fields and
                    from teleportation to time-travel, Kaku explores some real-world analogues that approximate the form
                    and function of these fictional concepts. Along the way, the book also explains the real science
                    behind each of the theoretical concepts that he presents.
                </>
            ),
            ``,
            (
                <>
                    While many of the technologies discusses in the book may very well be impossible, I found it
                    especially interesting how all of them could either be loosely tied back to real scientific theories
                    or where actually possible with modern technology, albeit in a modified form. One of the sections
                    that I found most interesting was on Psychokinesis and how Kaku explored how it may actually be
                    implemented, although through brain-computer interfaces, rather than reality warping abilities.
                </>
            ),
            "/media/image/physics-of-the-impossible.jpg",
            "physics-impossible"
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Reading List",
        "A series of books that I have read and recommend",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        [],
        [
            new PageLink("/readingList#ai-cog-sci", "AI & Cognitive Science"),
            new PageLink("/readingList#hifi-sifi", "Historical and Science Fiction"),
            new PageLink("/readingList#physics", "Physics"),
            new PageLink("/readingList#futurism", "Futurism")
        ]
    );

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
