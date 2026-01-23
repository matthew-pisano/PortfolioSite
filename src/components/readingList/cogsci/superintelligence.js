import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";

export default (
    <BookTile
        title={"Superintelligence: Paths, Dangers, Strategies"}
        author={"Nick Bostrom"}
        synopsis={
            <>
                The primary concern of <i>Superintelligence: Paths, Dangers, Strategies</i> is not necessarily what
                needs to happen for artificial general intelligence to be developed, but what happens soon after. This
                could be on timescales as long as decades, or as short as seconds. After this point, the entire course
                of human history will be altered; this much is certain. The only remaining uncertainty is whether it
                will result in our extinction or maximal utopia. In this book, Nick Bostrom explores how we can minimize
                the probability of the former and maximize that of the latter.
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
                    likely to initially perform faster and in a more collective manner than humans, not necessarily
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
                    <FootRef idx={1} />.
                </p>
                <p>
                    If there are multiple, independent projects working towards the development of superintelligence,
                    how are their dynamics affected by takeoff speed? Naively, it seems as if the relative progress of
                    each will undergo an approximately linear transformation over the course of the intelligence
                    explosion. It is easy to assume that the forerunner may maintain about the same lead as it began
                    with. However, Bostrom argues that, in the cases of slow and moderate takeoff, the forerunner is
                    likely to gain a decisive strategic advantage. Whomever emerges from the takeoff period first now
                    has control over (or is perhaps now controlled by) the most intelligent entity on the planet.
                    Depending on its goal system (to be expanded upon later), it may be desirable to eliminate all
                    competing projects, which only control inferior intelligences. Without competitors, the agent is
                    free to utilize the whole of the planets resources for its aims. To this end, it would be further
                    desirable for it to form a <i>singleton</i>. This could be in the form of a world government, a
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
                    resources or it may simply ignore our presence if we pose a trivial threat
                    <FootRef idx={2} />.
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
                    <FootRef idx={3} />. It will not act this way out of some sense of spite or malice, this is simply
                    the best way of achieving <i>exactly</i> what it has been asked to do.
                </p>
                <p>
                    These outcomes are undesirable. Naturally, the question of mitigation arises. In order to
                    extrinsically prevent the AI's goals, what if we:
                </p>
                <ul>
                    <li>
                        Put it in a box? The AI has a strong incentive to manipulate/hack its way out in order to fulfil
                        its objective.
                    </li>
                    <li>
                        Press a button that produces a massive negative reward? The AI now has the instrumental goal of
                        preventing anyone from ever pressing that button. Any would-be button presser will have to face
                        the full ire of a nearly all-powerful agent.
                        <FootRef idx={4} />
                    </li>
                    <li>
                        Stunt its growth? Too much and the AI is not useful, too little and it will be smart enough to
                        remove those protections.
                    </li>
                    <li>
                        Set up a tripwire? If an AI triggers one, it will be retrained or abandoned. This only means
                        that the next AI will know not to fall for the same trap again.
                    </li>
                </ul>
                <p>
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
                    its own goals independent of human overseers
                    <FootRef idx={5} />. Finally, tool-AIs are designed to work more like traditional software in that
                    they do not exhibit goal-directed behavior. The creation of such a system may involve significant
                    amounts of manual tuning and parameter search. Traditional software does not (currently) attempt to
                    form a singleton, so this appears to be a safe option. However, these tools either become difficult
                    to scale
                    <FootRef idx={6} /> to superintelligence or they develop sufficient complexity to reclassify
                    themselves into one of the prior three categories.
                </p>
                <p>
                    Containment measures will likely not be able to constrain the behavior of a superintelligent agent
                    in the long-run. The most reliable method of behavioral steering are different methods of alignment.
                    In the book, Bostrom frames this as a problem of value-loading
                    <FootRef idx={7} />: when researchers decide upon a set of values to align the model to, how can
                    those values be reliably impressed upon it? The book presents several methods, the most promising of
                    which seem to be motivational scaffolding, value learning, and institutional design. Motivational
                    scaffolding proposes that we first create a smaller, more controllable AI which we can train to hold
                    human values. Next, the capabilities of this system are increased to that of a superintelligence. At
                    this point, the agent will be much more resistant to goal change, "locking in" the original goals.
                    Value learning proposes that we train an AI to "do what we would want an AI to do in this
                    situation". This type of adjacent reasoning may be difficult to reliably implement, but it would
                    free programmers from the burden of choosing a specific goal for the model to optimize towards.
                    Final, Bostrom considers designing an institution that would govern the behavior of many AI agents.
                    The main architecture discussed is one composed of <Latex>{`$n$`}</Latex> superintelligent agents
                    with <Latex>{`$n/2$`}</Latex> less intelligent agents designed to monitor them. This pattern repeats
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
        }
        thoughts={
            <>
                <p>
                    This book almost single-handedly inspired me to pursue an education in artificial intelligence and
                    specifically in the theory of alignment. When this book released in 2014, Bostrom was one of only a
                    handful of authors that treated superintelligent (or even generally intelligent) systems as credible
                    existential threats to humanity. Ideas such as this had been explored extensively in the realm of
                    fiction, but it was not until the last decade or so that X-risks could be foreseen in reality.
                </p>
                <p>
                    I especially enjoy this book because it helped to dispel several misconceptions about
                    superintelligent AI that I held upon my first read. In fiction and in popular culture, powerful
                    artificial intelligence is often portrayed as meticulous and cunning with complex and far-reaching
                    goals. A.M. from <i>I have no Mouth and I Must Scream</i> and SkyNet are examples that come to mind.
                    AI can certainly poses both of these qualities, but Bostrom effectively shows that there need be no
                    relationship between them. An entity of awesome intelligence may be just as effective at maximizing
                    the production of paperclips
                    <FootRef idx={8} /> as it could be at protecting the United States. His <i>orthogonality</i> thesis
                    is non-trivial when examples of "smart" AI with "dumb" goals are less prevalent in media and (until
                    recently) literature.
                </p>
                <p>
                    Another concept that is somewhat difficult to grasp at first is the sheer gap between the
                    intelligence of a superintelligent AI system and that of humans. Humans are generally not exposed to
                    situations that are irrecoverably hopeless in reality or in fiction (the latter would not make for a
                    very good story, after all). It is therefore natural to think that some concerted planning from a
                    group of scientists or rebels could outsmart or outmaneuver an AI during or after the takeoff
                    period. This type of story is very common in fiction where the antagonist is artificial
                    intelligence. Aside from the need for an interesting story, this also stems from our fundamental
                    inability to faithfully simulate an entity that may have a greater intelligence gap over us than we
                    do over ants. At a certain point the only realistic constraints that we can apply to the
                    capabilities of a theoretical AI are the laws of physics themselves (with the very bold assumption
                    that we already know them). Even the creation of rival systems would likely fail if the leading
                    agent has already completed its period of recursive self-improvement as it would have the
                    capabilities (and the instrumental desire) to terminate any competing projects. The book effectively
                    drives home the fact that our number of successful attempts at creating superintelligence will be
                    exactly zero or one.
                </p>
                <p>
                    Another interesting concept that this book proposes is that of <i>mind crime</i>. In order to
                    accurately simulate what humans may want, it may seem reasonable for a capable AI system to simply
                    simulate how its sponsors would react to some action. This may also be useful when a system's
                    objective is to maximize some human <i>qualia</i> and it concludes that digital humans count as
                    well. If simulations are sufficiently detailed, such that the simulations themselves gain
                    consciousness, Bostrom terms this to be a mind crime. The idea that perfect digital <i>simulacra</i>{" "}
                    can be instantiated, experimented upon, and terminated is very unsettling. Interestingly, Bostrom's
                    whole brain emulation scenario itself may be inherently guilty of this as well. I find this scenario
                    to be particularly intriguing.
                </p>
                <p>
                    On the topic of whole brain emulation, it is the most disturbing (and underexplored) avenue for
                    intelligent agents in my opinion. Concerning its initial construction, it may be somewhat more
                    brittle than the fully artificial path. Artificial intelligence can improve (and degrade) somewhat
                    smoothly, each step of advancement provides some utility, even if its capabilities do not match
                    humans in all categories. In contrast, emulating a human brain appears more discrete or even binary.
                    Human brains are one of the most complex known constructions in nature, therefore progressively
                    increasing our level of simulated detail is not likely to linearly track with simulation accuracy.
                    For example, instantiating billions of traditional perceptrons within a recurrent "brain-shaped"
                    architecture does not automatically result in any appreciable fraction of human capability. Their
                    utility only materializes when placed within an engineered architecture that may or may not actually
                    resemble anything natural. It is also unknown which level of detail will be sufficient, even if
                    simulated faithfully. Are the precise electrical discharge patterns of neurons a critical component?
                    Must we precisely model how neurotransmitters behave chemically? Are quantum effects actually
                    required for human-like thought as some have conjectured?
                </p>
                <p>
                    Whole brain emulation may also not advance our knowledge sufficiently to undergo an intelligence
                    explosion. Suppose that we could create reliable a digital twin of a human brain. Now what? Aside
                    from the low-hanging fruit of increasing emulation speed and potentially increasing grey matter
                    volume, we (and therefore our new digital twin) do not currently know which parameters to tune that
                    increases capability without distributing the unstable equilibrium of the brain. We would be naive
                    students blatantly plagiarizing mother nature and expecting to learn something in the process.
                    Though, perhaps we could, with the aid of innumerable digital clones, glean some insight into the
                    nature of human intelligence from this process. Regardless of that outcome, we have now invited a
                    hole host of ethical quandaries into this scenario.
                </p>
                <p>
                    We would have now committed a mind crime ourselves on an industrial scale. Each simulated mind would
                    be isomorphic to a real human brain; a mind's underlying substrate could be software or wet-ware,
                    but the mind itself would not know the difference. How many clones can we instantiate? Can we
                    ethically terminate them without their consent? Are we morally justified in re-training or
                    experimenting upon them in order to improve their capabilities? Additionally, the problem of control
                    arises here once again. Even though the donor brain would (ideally) operate on accepted human
                    values, there is no guarantee that its digital twin would behave in the exact same manner. We do not
                    know if simulation process itself would perturb the sensitive nature of the brain into behaving
                    erratically. Even the most noble and fortified scientist or scholar may find it difficult to
                    completely abandon their agency in favor of the common good. A simulation would retain this
                    property. We also have no basis for knowing what the kinetics of an intelligence explosion would
                    look like in this context. We have no guarantees that a simulated brain with radically altered
                    capabilities and faculties will behave simply like a more intelligent version of its template brain.
                    With AGI and ASI, we essentially desire a perfect slave. An entity that obeys our every command (or
                    moral intention) without second thought or concept of itself divorced from its servitude to its
                    sponsors. This notion carries very serious moral implications in the artificial case, even more so
                    for the case of emulations.
                </p>
                <p>
                    <i>Superintelligence</i> should serve as required reading for anyone interested in AI safety and in
                    AGI research more broadly. Even though the landscape of AI has changed dramatically over the past
                    decade, the core ideas of the book stand largely unweathered by time. Many of the strategies for
                    control within this book come with a lot of "hand-waving" when it comes to details. This was surely
                    by design, as advancements in alignment techniques serve to fill in the gaps, rather than overwrite
                    any fundamental notions. The paperback version of this book (released a year later) contains an
                    "afterword" section where Bostrom reflects on the books impact and also the state of the field. In
                    this section, he catalogues some emerging technologies including generative adversarial networks and
                    (pre-transformer) attention-based generation methods. This serves as some subtle and unintentional
                    foreshadowing for the state of modern AI.
                </p>
            </>
        }
        footnotes={
            <>
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
                    <Link href={"https://en.wikipedia.org/wiki/Useless_machine"} target={"_blank"}>
                        useless machine
                    </Link>{" "}
                    or a god with a death wish.
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
                <FootNote idx={8}>
                    <i>Ethical Issues in Advanced Artificial Intelligence</i> (Bostrom 2003)
                </FootNote>
            </>
        }
        thumbnail={"/media/image/superintelligence.jpg"}
        anchor={"superintelligence"}
    />
);
