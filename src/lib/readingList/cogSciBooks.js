import React from "react";

import Link from "next/link";

import { BookTile } from "@/lib/pageBuilder";

export default [
    new BookTile(
        <>Superintelligence: Paths, Dangers, Strategies</>,
        "Nick Bostrom",
        (
            <>
                <u>Superintelligence: Paths, Dangers, Strategies</u> explores how superintelligence could be created and
                what its features and motivations might be. It argues that superintelligence, if created, would be
                difficult to control, and that it could take over the world in order to accomplish its goals. The book
                also presents strategies to help make superintelligences whose goals benefit humanity. It was
                particularly influential for raising concerns about existential risk from artificial intelligence.
            </>
        ),
        `https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies`,
        (
            <>
                This book almost single-handedly inspired me to pursue an education in artificial intelligence,
                specifically alignment. Bostrom presents groundbreaking ideas on the nature and potential of AI in an
                easily digestible manner. The book explores ideas relating how we may control entities far more clever
                than us and the consequences if we fail our one (and likely only) attempt at doing so. He goes into
                detail on how an AI, tasked with seemingly harmless <i>terminal goals</i> may nevertheless set for
                itself <i>instrumental goals</i> that can pose an existential threat to humanity. As may be evident in
                the name, this work also heavily inspired me to create my game,{" "}
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
                <u>Thinking Fast and Slow</u> serves as a compendium of the authors knowledge on both human psychology
                and economic theory, particularly on the intersection between the two. The core idea of the book is
                that, in contrast to traditional economic theory where humans serve as simple, rational agents, the
                behavior of real humans is more complex and nuanced than originally thought. This idea is expanded upon
                through three, more targeted, concepts: the two systems theory of cognition, the difference between real
                humans and idealized <i>Econs</i>, and how humans behave differently when experiencing a stimuli and
                remembering that same stimuli.
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
                successful attempts at creating a <i>general</i> artificially intelligent agent have, buy and large,
                used a monolithic architecture where the same fundamental structure or algorithm serves as the basis for
                an entire model.
                <p>
                    While this has thus-far been impressively successful, this approach has yet to produce something
                    nearing human-level in the majority of domains, especially for problem solving and slow, methodical
                    thinking. Current approaches appear to closely mirror a <i>System 1</i> process, providing quick
                    answers that heavily rely on heuristics and learned biases. Additionally, while many modern models
                    can be coerced into <i>System 2-eqsue</i> reasoning, it does not come as a natural consequence of
                    the architecture and still often falls short when the problem domain is significantly out of
                    distribution or scope from the original training data. To create a system that can truly be
                    classified as generally intelligent in the same way we consider ourselves, Kahneman's ideas may
                    suggest that a different approach is needed in conjunction with modern strategies.
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
                its dataset.).
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
                    "Why can't you just turn it off" or "It will behave if we specify its goals well enough".
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
                    proximal scales. This concerns topics such as, the societal impacts of people repudiating the notion
                    of free will, historical precedents for similar seismic shifts in our understanding of the world,
                    and consequences for mental health, motivation, and criminal justice.
                </p>
            </>
        ),
        ``,
        (
            <>
                Reading Sapolsky's thoughts and expansions on this subject have been thoroughly illuminating. While I
                initially chose this book to reinforce, rather than revise, my own views on <i>free will</i>, I both
                found his arguments to be both unique and thought-provoking. He is able to masterfully bring together
                many disparate scientific disciplines and follows their findings to their natural conclusions about us
                and what really determines our behavior. From the behavior of slime molds and the quantum effects on
                microtubules to seemingly random dumps of neurotransmitters and the well-studied consequences of
                childhood adversity, he effectively argues that there is a mechanistic and (broadly) deterministic
                explanation for all the phenomena we usually attribute to ourselves.
                <p>
                    In essence, we do not choose how to play the hand that we are dealt in life, rather we <i>are</i>{" "}
                    the hand that we are dealt; the cards play themselves.
                </p>
                <p>
                    In addition to the well thought-out content, I also particularly enjoy his writing style. Each page
                    comes with a myriad of citations, in-depth footnotes, asides, and short personal rants that makes
                    the experience of reading his book both stimulating and engaging. Even to those that may remain
                    unconvinced by his ideas, the book is still a worth-while read. If not for the interesting facts,
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
                    persons retina, how much dopamine was present in the synapses of the person's brain? What about the
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
                serves as an un-intimidating and informative introduction to cognitive science, behavioral analysis,
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
                    nurturing and caring to in-group members, but more weary of out-group members.
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
                This book was my first real introduction to Marvin Minsky and his unique concepts about the mind and
                social behavior. His ideals surrounding the true nature of emotions and hierarchies of thinking were
                whole novel to me when I first read it. This book stands out from many others at the intersection
                between artificial intelligence and cognitive science. This is primarily because even modern AI has not
                yet implemented many of the ideas presented here.
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
