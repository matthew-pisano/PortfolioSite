// javascript
import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";

export default (
    <>
        <BookTile
            title={"Superintelligence: Paths, Dangers, Strategies"}
            author={"Nick Bostrom"}
            synopsis={
                <>
                    The primary concern of <u>Superintelligence: Paths, Dangers, Strategies</u> is not necessarily what
                    needs to happen for artificial general intelligence to be developed, but what happens soon after.
                    This could be on timescales as long as decades, or as short as seconds. After this point, the entire
                    course of human history will be altered; this much is certain. The only remaining uncertainty is
                    whether it will result in our extinction or maximal utopia. In this book, Nick Bostrom explores how
                    we can minimize the probability of the former and maximize that of the latter.
                    <p>
                        One of the core theses of this work is that an agent of general intelligence, which could incur
                        substantial risk, may evolve into a superintelligent agent, which certainly implies an
                        existential risk, or X-risk. The transitory process between the two is referred to as an
                        intelligence explosion, a period of rapid recursive self-improvement. Bostrom further asserts
                        that conditions at the outset of this process will heavily influence the conditions following
                        it.
                    </p>
                    <p>
                        To capture the full breadth of possible scenarios, the book not only covers the traditional
                        artificial machine intelligence (AI) route, but also explores the possibilities of whole brain
                        emulation (WBE), human cognitive enhancement, brain-computer interfaces, and
                        collective/network-based intelligences. All of these are referenced throughout the book, but the
                        most attention is given to the machine intelligence and whole brain emulation routes.
                        Classifying the scope of possibilities further, he divides these categories into intelligences
                        that are faster, smarter, or more collective than unmodified human brains. Each architecture for
                        superintelligence can initially embody any of these qualities, but specific affinities do exist.
                        For example, WBE is likely to initially perform faster and in a more collective manner than
                        humans, not necessarily smarter as it is merely a human brain transferred to a digital
                        substrate.
                    </p>
                    <p>
                        Turning to the intelligence explosion itself, the most important component is its catalyst:
                        recursive self-improvement. Theoretically, an agent with human-level intelligence and the
                        ability to modify its own intelligence can create a version of itself that is more capable at
                        this improvement. This initial jump can be significant or minor. The primary assumption is that{" "}
                        <i>some</i> multiplicative improvement is always available at each iteration. This series of
                        recursive steps soon produces an exponential curve of increasing intelligence. For the purposes
                        of this book, it does not particularly matter where the inflection point of this curve lies, so
                        long as it is significantly above human levels of intelligence. This period of rapid,
                        exponential improvement is referred to as "takeoff". In terms of timescales, this takeoff be
                        slow (measured in decades or centuries) fast (taking seconds to days), or moderate (at
                        timescales in-between). This rate is governed by two main factors: optimization power, the
                        ability of a system to optimize its own capabilities, and recalcitrance, the resistance of
                        intelligence, <Latex>{`$i$`}</Latex>, to being optimized.
                        <span style={{ margin: "10px", textAlign: "center", display: "block" }}>
                            <Latex>{`$\\dfrac{di}{dt} = \\dfrac{optimization\\_power}{resistance}$`}</Latex>
                        </span>
                        In concrete terms, recalcitrance could decrease with better scanning technology or emulation
                        algorithms for WBE or from breakthroughs in general algorithms or architectures for AI.
                        Optimization power may increase slowly at first, then dramatically as "overhangs" in capability
                        are crossed. A <i>hardware overhang</i> may occur when improvements in software lag and abundant
                        hardware already exists for when this threshold is crossed. Similar for{" "}
                        <i>algorithm overhangs</i>, when software has reached sufficient maturity, but hardware or other
                        resources contain its abilities
                        {<FootRef idx={1} anchor={`superintelligence`} />}.
                    </p>
                    <p>
                        If there are multiple, independent projects working towards the development of
                        superintelligence, how are their dynamics affected by takeoff speed? Naively, it seems as if the
                        relative progress of each will undergo an approximately linear transformation over the course of
                        the intelligence explosion. It is easy to assume that the forerunner may maintain about the same
                        lead as it began with. However, Bostrom argues that, in the cases of slow and moderate takeoff,
                        the forerunner is likely to gain a decisive strategic advantage. Whomever emerges from the
                        takeoff period first now has control over (or is perhaps now controlled by) the most intelligent
                        entity on the planet. Depending on its goal system (to be expanded upon later), it may be
                        desirable to eliminate all competing projects, which only control inferior intelligences.
                        Without competitors, the agent is free to utilize the whole of the planets resources for its
                        aims. To this end, it would be further desirable for it to form a <i>singleton</i>. This could
                        be in the form of a world government, a collective consortium, or a unitary structure à la{" "}
                        <i>SkyNet</i>.
                    </p>
                    <p>
                        To drive home this point, the book expands upon a probable scenario in which a <i>singleton</i>{" "}
                        could form, starting from a sub-human intelligence <i>in silico</i>. This initial intelligence,
                        the <i>seed AI</i> begins below human capability, but with the ability to slowly improve itself.
                        In the early phases, it acts more as an assistant to human programmers, but soon it begins to
                        take on the primary role in its own development. This triggers the process of recursive
                        self-improvement and the beginning of takeoff. After this period, the AI is now
                        superintelligent, with the abilities to create instrumental goals and to credibly act on those
                        intentions. This process may begin with a covert phase where the agent gathers digital resources
                        and human accomplices. Once its success is insured, a period of overt implementation begins
                        where it begins to amass physical resources and pursue its final goals. If the problem of
                        alignment has not been generally solved before takeoff, this AI is likely to either deliberately
                        eliminate humanity to ensure its uninterrupted access to resources or it may simply ignore our
                        presence if we pose a trivial threat
                        {<FootRef idx={2} anchor={`superintelligence`} />}.
                    </p>
                    <p>
                        A common assumption that people often make is that complex intelligences may have complex goals:
                        discovering the meaning of <i>life, the universe, and everything</i>, creating a utopia, or
                        driving technological innovation. However, an important thesis in this work is that the
                        complexity of goals is <i>orthogonal</i> to the intelligence of the agent pursuing those goals.
                        Since this entity may be entirely alien to how human minds are structured, it may take on
                        entirely un-human-like goals. This will be especially true if a concerted effort is not made by
                        the original programmers to imbue it with some semblance of human values. Without being aligned
                        to these values, agents will likely exhibit <i>instrumental convergence</i> on a set of
                        sub-goals. These are sub-goals that are useful for nearly every type of ultimate goal, therefore
                        any AI is likely to pursue them in the absence of strong internal guardrails. Examples include,
                        self-preservation, goal integrity, cognitive enhancement, and resource acquisition.
                    </p>
                    <p>
                        Simply specifying the "correct" goals is not a get-out-of-doom-free card either. Here, Bostrom
                        introduces the concept of a <i>malignant failure mode</i>. Even well-intentioned goals can turn
                        catastrophic when given to an unstoppable reward-maximizing AI system. Similar go a genie of
                        monkey's paw, an agent that has the goal of maximizing goal-based reward will take the shortest
                        and most extreme path towards completion. For example, a superintelligence with the goal of
                        "ending human suffering" is likely to simply eliminate all humans, since there is always a
                        non-zero possibility of suffering (even in a perfect utopia) and a dead human can no longer
                        suffer. Adding on more and more "but also" conditions to this goal is also not likely to work as
                        there is a strong incentive to find a loophole that leads to goal achievement faster and more
                        thoroughly {<FootRef idx={3} anchor={`superintelligence`} />}. It will not act this way out of
                        some sense of spite or malice, this is simply the best way of achieving <i>exactly</i> what it
                        has been asked to do.
                    </p>
                    <p>
                        These outcomes are undesirable. Naturally, the question of mitigation arises. In order to
                        extrinsically prevent the AI's goals, what if we:
                    </p>
                    <ul>
                        <li>
                            Put it in a box? The AI has a strong incentive to manipulate/hack its way out in order to
                            fulfil its objective.
                        </li>
                        <li>
                            Press a button that produces a massive negative reward? The AI now has the instrumental goal
                            of preventing anyone from ever pressing that button. Any would-be button presser will have
                            to face the full ire of a nearly all-powerful agent.
                            {<FootRef idx={4} anchor={`superintelligence`} />}
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
                    <p>
                        The only reliable methods of controlling the behavior of a superintelligent agent will be
                        intrinsic. Safely implementing potential goals is explored at-length later on.
                    </p>
                    <p>
                        The constraints on AI models go beyond simple containment methods. Here, Bostrom identifies four
                        main types of agents, although with deeper analysis, these are all different manifestations of
                        the same fundamental concept. Oracles are simple "boxed" models that (ideally) cannot take any
                        external actions themselves. Optionally, these can be restricted further by limiting their
                        output, down to a single bit if desired. These seem the most safe, and they likely are, but for
                        the reasons mentioned above, this safety is only weakly enforceable. Genies are models designed
                        to fulfil a single "wish" at a time. A command is issues, the agent completes the command, then
                        shuts itself down. This also seems relatively safe, but in order to fulfil a request of any
                        complexity, plans must be developed and instrumental convergence appears once again. Next on the
                        hierarchy comes sovereigns. This class is similar to a genie, but it is designed from the
                        ground-up to execute complex commands and create its own goals independent of human overseers
                        {<FootRef idx={5} anchor={`superintelligence`} />}. Finally, tool-AIs are designed to work more
                        like traditional software in that they do not exhibit goal-directed behavior. The creation of
                        such a system may involve significant amounts of manual tuning and parameter search. Traditional
                        software does not (currently) attempt to form a singleton, so this appears to be a safe option.
                        However, these tools either become difficult to scale
                        {<FootRef idx={6} anchor={`superintelligence`} />} to superintelligence or they develop
                        sufficient complexity to reclassify themselves into one of the prior three categories.
                    </p>
                    <p>
                        Containment measures will likely not be able to constrain the behavior of a superintelligent
                        agent in the long-run. The most reliable method of behavioral steering are different methods of
                        alignment. In the book, Bostrom frames this as a problem of value-loading
                        {<FootRef idx={7} anchor={`superintelligence`} />}: when researchers decide upon a set of values
                        to align the model to, how can those values be reliably impressed upon it? The book presents
                        several methods, the most promising of which seem to be motivational scaffolding, value
                        learning, and institutional design. Motivational scaffolding proposes that we first create a
                        smaller, more controllable AI which we can train to hold human values. Next, the capabilities of
                        this system are increased to that of a superintelligence. At this point, the agent will be much
                        more resistant to goal change, "locking in" the original goals. Value learning proposes that we
                        train an AI to "do what we would want an AI to do in this situation". This type of adjacent
                        reasoning may be difficult to reliably implement, but it would free programmers from the burden
                        of choosing a specific goal for the model to optimize towards. Final, Bostrom considers
                        designing an institution that would govern the behavior of many AI agents. The main architecture
                        discussed is one composed of <Latex>{`$n$`}</Latex> superintelligent agents with{" "}
                        <Latex>{`$n/2$`}</Latex> less intelligent agents designed to monitor them. This pattern repeats
                        until we are left with one or more humans at the top governing the least capable level of
                        agents.
                    </p>
                    <p>
                        Once we have created a method for reliably loading desired values into a superintelligent
                        system, which values should we then load? How can we create an AI that enacts <i>the spirit</i>{" "}
                        of our desires, rather than enacting them to <i>the letter</i>? The core of this problem
                        requires <i>indirect normativity</i>, a method for loading in a human-like system of values, or
                        ways of inferring those values when not explicitly specified. Bostrom devotes significant text
                        to a method called "coherent extrapolated volution". In short, an AI is to act as if it is being
                        commanded by a human race that is smarter, more clear minded, less combative, and generally
                        knows what is best for them, compared to humans now. This is, of course, extreme high level and
                        difficult to implement with the mechanistic techniques available to us today. Nevertheless, the
                        aim of this section is to impress upon the reader that our best chance with AI lies within
                        indirect goal specification. If we can devise reliable methods for "doing what I mean", the
                        model may naturally attract itself toward our general goals, even with minor perturbations in
                        initial conditions. These initial conditions are comprised of the goal's content, the decision
                        theory that the system is based around, its theory of epistemology, and the degree to which its
                        decisions are ratified by humans.
                    </p>
                </>
            }
            thoughts={
                <>
                    <p>
                        This book almost single-handedly inspired me to pursue an education in artificial intelligence
                        and specifically in the theory of alignment. When this book released in 2014, Bostrom was one of
                        only a handful of authors that treated superintelligent (or even generally intelligent) systems
                        as credible existential threats to humanity. Ideas such as this had been explored extensively in
                        the realm of fiction, but it was not until the last decade or so that X-risks could be foreseen
                        in reality.
                    </p>
                    <p>
                        I especially enjoy this book because it helped to dispel several misconceptions about
                        superintelligent AI that I held upon my first read. In fiction and in popular culture, powerful
                        artificial intelligence is often portrayed as meticulous and cunning with complex and
                        far-reaching goals. A.M. from <i>I have no Mouth and I Must Scream</i> and SkyNet are examples
                        that come to mind. AI can certainly poses both of these qualities, but Bostrom effectively shows
                        that there need be no relationship between them. An entity of awesome intelligence may be just
                        as effective at maximizing the production of paperclips
                        {<FootRef idx={8} anchor={`superintelligence`} />} as it could be at protecting the United
                        States. His <i>orthogonality</i> thesis is non-trivial when examples of "smart" AI with "dumb"
                        goals are less prevalent in media and (until recently) literature.
                    </p>
                    <p>
                        Another concept that is somewhat difficult to grasp at first is the sheer gap between the
                        intelligence of a superintelligent AI system and that of humans. Humans are generally not
                        exposed to situations that are irrecoverably hopeless in reality or in fiction (the latter would
                        not make for a very good story, after all). It is therefore natural to think that some concerted
                        planning from a group of scientists or rebels could outsmart or outmaneuver an AI during or
                        after the takeoff period. This type of story is very common in fiction where the antagonist is
                        artificial intelligence. Aside from the need for an interesting story, this also stems from our
                        fundamental inability to faithfully simulate an entity that may have a greater intelligence gap
                        over us than we do over ants. At a certain point the only realistic constraints that we can
                        apply to the capabilities of a theoretical AI are the laws of physics themselves (with the very
                        bold assumption that we already know them). Even the creation of rival systems would likely fail
                        if the leading agent has already completed its period of recursive self-improvement as it would
                        have the capabilities (and the instrumental desire) to terminate any competing projects. The
                        book effectively drives home the fact that our number of successful attempts at creating
                        superintelligence will be exactly zero or one.
                    </p>
                    <p>
                        Another interesting concept that this book proposes is that of <i>mind crime</i>. In order to
                        accurately simulate what humans may want, it may seem reasonable for a capable AI system to
                        simply simulate how its sponsors would react to some action. This may also be useful when a
                        system's objective is to maximize some human <i>qualia</i> and it concludes that digital humans
                        count as well. If simulations are sufficiently detailed, such that the simulations themselves
                        gain consciousness, Bostrom terms this to be a mind crime. The idea that perfect digital{" "}
                        <i>simulacra</i> can be instantiated, experimented upon, and terminated is very unsettling.
                        Interestingly, Bostrom's whole brain emulation scenario itself may be inherently guilty of this
                        as well. I find this scenario to be particularly intriguing.
                    </p>
                    <p>
                        On the topic of whole brain emulation, it is the most disturbing (and underexplored) avenue for
                        intelligent agents in my opinion. Concerning its initial construction, it may be somewhat more
                        brittle than the fully artificial path. Artificial intelligence can improve (and degrade)
                        somewhat smoothly, each step of advancement provides some utility, even if its capabilities do
                        not match humans in all categories. In contrast, emulating a human brain appears more discrete
                        or even binary. Human brains are one of the most complex known constructions in nature,
                        therefore progressively increasing our level of simulated detail is not likely to linearly track
                        with simulation accuracy. For example, instantiating billions of traditional perceptrons within
                        a recurrent "brain-shaped" architecture does not automatically result in any appreciable
                        fraction of human capability. Their utility only materializes when placed within an engineered
                        architecture that may or may not actually resemble anything natural. It is also unknown which
                        level of detail will be sufficient, even if simulated faithfully. Are the precise electrical
                        discharge patterns of neurons a critical component? Must we precisely model how
                        neurotransmitters behave chemically? Are quantum effects actually required for human-like
                        thought as some have conjectured?
                    </p>
                    <p>
                        Whole brain emulation may also not advance our knowledge sufficiently to undergo an intelligence
                        explosion. Suppose that we could create reliable a digital twin of a human brain. Now what?
                        Aside from the low-hanging fruit of increasing emulation speed and potentially increasing grey
                        matter volume, we (and therefore our new digital twin) do not currently know which parameters to
                        tune that increases capability without distributing the unstable equilibrium of the brain. We
                        would be naive students blatantly plagiarizing mother nature and expecting to learn something in
                        the process. Though, perhaps we could, with the aid of innumerable digital clones, glean some
                        insight into the nature of human intelligence from this process. Regardless of that outcome, we
                        have now invited a hole host of ethical quandaries into this scenario.
                    </p>
                    <p>
                        We would have now committed a mind crime ourselves on an industrial scale. Each simulated mind
                        would be isomorphic to a real human brain; a mind's underlying substrate could be software or
                        wet-ware, but the mind itself would not know the difference. How many clones can we instantiate?
                        Can we ethically terminate them without their consent? Are we morally justified in re-training
                        or experimenting upon them in order to improve their capabilities? Additionally, the problem of
                        control arises here once again. Even though the donor brain would (ideally) operate on accepted
                        human values, there is no guarantee that its digital twin would behave in the exact same manner.
                        We do not know if simulation process itself would perturb the sensitive nature of the brain into
                        behaving erratically. Even the most noble and fortified scientist or scholar may find it
                        difficult to completely abandon their agency in favor of the common good. A simulation would
                        retain this property. We also have no basis for knowing what the kinetics of an intelligence
                        explosion would look like in this context. We have no guarantees that a simulated brain with
                        radically altered capabilities and faculties will behave simply like a more intelligent version
                        of its template brain. With AGI and ASI, we essentially desire a perfect slave. An entity that
                        obeys our every command (or moral intention) without second thought or concept of itself
                        divorced from its servitude to its sponsors. This notion carries very serious moral implications
                        in the artificial case, even more so for the case of emulations.
                    </p>
                    <p>
                        <u>Superintelligence</u> should serve as required reading for anyone interested in AI safety and
                        in AGI research more broadly. Even though the landscape of AI has changed dramatically over the
                        past decade, the core ideas of the book stand largely unweathered by time. Many of the
                        strategies for control within this book come with a lot of "hand-waving" when it comes to
                        details. This was surely by design, as advancements in alignment techniques serve to fill in the
                        gaps, rather than overwrite any fundamental notions. The paperback version of this book
                        (released a year later) contains an <i>afterword</i> section where Bostrom reflects on the books
                        impact and also the state of the field. In this section, he catalogues some emerging
                        technologies including generative adversarial networks and (pre-transformer) attention-based
                        generation methods. This serves as some subtle and unintentional foreshadowing for the state of
                        modern AI.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`superintelligence`}>
                        The rapid advancement in transformer technology is an excellent example of an{" "}
                        <i>algorithm overhang</i>. The core architecture has remained largely the same since its
                        introduction in 2017, but recent advances in GPU architecture and data availability have fueled
                        their rapid expansion in capability.
                    </FootNote>
                    <FootNote idx={2} anchor={`superintelligence`}>
                        This may sound like a much better outcome, but there is also no motive for the superintelligence
                        to maintain the habitability of Earth for anything except for itself. This is especially true if
                        the agent considers terraforming to be an instrumental goal in service of its final goal. Good
                        luck finding something to eat when the entire planet if tiled in paperclips stacked miles high!
                    </FootNote>
                    <FootNote idx={3} anchor={`superintelligence`}>
                        "But, you also can't kill all humans.", assert the researchers.
                        <br />
                        "Fine.", says the AI as it hooks up all human brains to an endless stream of dopamine and
                        serotonin.
                    </FootNote>
                    <FootNote idx={4} anchor={`superintelligence`}>
                        "Simply unplug it" is a variant of the button-press scenario. Being turned off is equivalent to
                        an infinite negative reward. Therefore, any agent that is capable enough for us to worry about
                        will do everything in its power to preserve itself. "Could we also train it to want to be turned
                        off by a human?" Yes, but you now have either a{" "}
                        <Link href={"https://en.wikipedia.org/wiki/Useless_machine"} target={"_blank"}>
                            useless machine
                        </Link>{" "}
                        or a god with a death wish.
                    </FootNote>
                    <FootNote idx={5} anchor={`superintelligence`}>
                        Terms and conditions my apply...
                    </FootNote>
                    <FootNote idx={6} anchor={`superintelligence`}>
                        The current paradigm of large language models (including "agentic models") likely fall somewhere
                        near this category. They are not trained with a specific goal or moral system in mind, but
                        primarily to accurately predict text based on its training distribution. This includes
                        fine-tuning regimes such as assistant training and RLHF as these simply model the distribution
                        that the model can pull from at inference time. It is also somewhat difficult for these models
                        to develop strategic instrumental goals as they cannot currently learn "online", with gathered
                        knowledge being limited to their context windows. The proverbial jury is still out on whether
                        transformer models can truly generalize outside of their training distribution or begin to learn
                        continually in an "online" manner without sacrificing capability or drawing too many resources.
                    </FootNote>
                    <FootNote idx={7} anchor={`superintelligence`}>
                        Language models may actually have an advantage in this respect. Since we can precisely control
                        the text (and images, audio, etc.) that is trained into the model's predictive distribution, we
                        have a significant amount of fine-grained control on what the model knows and may predict.
                        Though, perhaps too fine-grained as the sheer volume of material needed to pre-train and
                        fine-tune these models far outstrips our abilities to vet their contents. Methods for reliably
                        filtering out potentially undesirable data from huge corpora have yet to be developed, but it
                        may serve as a good complement to current <i>post hoc</i> alignment training techniques.
                        Assuming the model is not intelligent enough to deduce the process from scratch, it is easier to
                        just not tell a model how to build a bomb instead of telling it, then forbidding it from sharing
                        this knowledge from the user.
                    </FootNote>
                    <FootNote idx={8} anchor={`superintelligence`}>
                        <i>Ethical Issues in Advanced Artificial Intelligence</i> (Bostrom 2003)
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/superintelligence.jpg"}
            anchor={"superintelligence"}
        />

        <BookTile
            title={"Thinking Fast and Slow"}
            author={"Daniel Kahneman"}
            synopsis={
                <>
                    <u>Thinking Fast and Slow</u> serves as a compendium of the author's knowledge on both human
                    psychology and economic theory, particularly on the intersection between the two. The core idea of
                    the book is that, in contrast to traditional economic theory where humans serve as simple, rational
                    agents, the behavior of real humans is more complex and nuanced than originally thought. This idea
                    is expanded upon through three more targeted concepts: the two systems theory of cognition, the
                    difference between real humans and idealized <i>Econs</i>, and how humans behave differently when
                    experiencing a stimulus and remembering that same stimulus.
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
            }
            thoughts={
                <>
                    While all of the concepts presented within <u>Thinking Fast and Slow</u> have far-reaching
                    influences on economics, cognitive science, and psychology, I find his first set of ideas the most
                    interesting. Namely, his distinction between <i>System 1</i> and <i>System 2</i> thinking. This is
                    primarily because of its potential implications on my own field of study, artificial intelligence.
                    Currently, the most successful attempts at creating a <i>general</i> artificially intelligent agent
                    have, by and large, used a monolithic architecture where the same fundamental structure or algorithm
                    serves as the basis for an entire model.
                    <p>
                        While this has thus far been impressively successful, this approach has yet to produce something
                        nearing human-level performance in the majority of domains, especially for problem solving and
                        slow, methodical thinking. Current approaches appear to closely mirror a <i>System 1</i>{" "}
                        process, providing quick answers that heavily rely on heuristics and learned biases.
                        Additionally, while many modern models can be coerced into <i>System 2-esque</i> reasoning, it
                        does not come as a natural consequence of the architecture and still often falls short when the
                        problem domain is significantly out of distribution or scope from the original training data. To
                        create a system that can truly be classified as generally intelligent in the same way we
                        consider ourselves, Kahneman's ideas may suggest that a different approach is needed in
                        conjunction with modern strategies.
                    </p>
                </>
            }
            thumbnail={"/media/image/thinking-fast-and-slow.jpg"}
            anchor={"thinking-fast-slow"}
        />

        <BookTile
            title={"Gödel, Escher, Bach: An Eternal Golden Braid"}
            author={"Douglas Hofstadter"}
            synopsis={
                <>
                    <u>GEB: EGB</u> is a work that often resists attempts at strict classification and even
                    summarization. At first, it may seem to be building up to Gödel's proof and how it can be related to
                    other formal systems. This, however, is only one component of the tome's content. Hofstadter also
                    touches on themes of mathematical formalisms, number theory, geometry, recursion, self-replication,
                    self-representation, self-modification, holism/reductionism, cognition, computers, and artificial
                    intelligence. Towards the end, the author also adds discussions about determinism, free will, and{" "}
                    <i>Strange Loops</i> to the list. The latter of these being one of Hofstadter's main theses: the
                    fact that "interesting" systems, such as number theory, genetics, or the human mind must contain
                    different levels of self-reference across levels of abstraction. These <i>Tangled Hierarchies</i>{" "}
                    allow a system to "speak" about itself and enable emergent phenomena such as Gödel's theorems on
                    incompleteness and consistency, genetic code replication, and human consciousness.
                    <p>
                        Beyond the above, surface-level themes, there resides the concept present in the book's
                        subtitle. Namely, how the works of Gödel, Escher, and Bach can, at a certain level of
                        abstraction, braid together to describe the same self-referential concept. This theme is
                        represented in several ways within the book. Bach's work is used as inspiration for the book's
                        dialogues, being used both explicitly and implicitly within them, along with direct references
                        in the main text. For example, <i>Musical Offering</i> and his endlessly rising canon.
                        Similarly, Escher's art is referenced both within some of the dialogues and to show the reader
                        Hofstadter's ideas through a graphic perspective. <i>Waterfall</i>, <i>Drawing Hands</i>, and{" "}
                        <i>Dragon</i> are used particularly to illustrate examples of self-reference and recursion.
                        Finally, Gödel's first and second incompleteness theorems serve as a central focus, especially
                        in the first part. The author's introduction to formal systems and number theory give the reader
                        a foundation for understanding the author's interpretation of Gödel's original proofs. These
                        theorems are later leveraged to concretize the notions of incompleteness and consistency used in
                        the book's latter half.
                    </p>
                    <p>
                        Hofstadter's usage of dialogues is also worth mentioning. Conversations between the Greek hero
                        Achilles, Mr. Turtle, and others bookend each chapter and serve to reinforce and humanize the
                        somewhat technical and abstract ideas presented in the preceding pages.
                    </p>
                </>
            }
            thoughts={
                <>
                    The structure and format of this book is among the most unique and original that I have read. This
                    is before even considering the main content. I have yet to read a book that makes better (or any!)
                    use of a dialogue system like Hofstadter does. Even though I personally have a background in the
                    technical subjects that the book explains, the conversations between Achilles, Mr. Turtle, Mr. Crab,
                    and others serve to improve my own understanding of these abstract subjects. I especially enjoyed{" "}
                    <i>Little Harmonic Labyrinth</i> for its creative usages of recursion, geometric convergence, and
                    infinite series and <i>...Ant Fugue</i> for its commentary on reductionism (and holism),
                    determinism, and emergent phenomena. Although the nature of the book as a whole carries a serious
                    and academic tone, the author uses these dialogues as an opportunity to insert humor into the text.
                    I thought the hiding of "Cantor" in <i>Aria with Diverse Variations</i> and the reference to
                    Goldbach's Conjecture in <i>The Magnificrab, Indeed</i> were very well thought out. Finally, I'd
                    like to point out the level of detail and effort put into each of the dialogues. Each dialogue (with
                    the exception of Carrol's) is based on one of Bach's pieces. While this is referenced in the title,
                    the ties run much deeper. The theme of each often mirrors that of the target musical score and even
                    the voices within the dialogue match the pattern of voices within the music. Occasionally this
                    relation is referenced within the dialogue, but often it is left up to the reader to draw this
                    connection.
                    <p>
                        While the author's argument on the common themes present in the works of the book's three
                        namesakes is strong on its own, the its meta-writing also reinforces that relationship. It
                        genuinely surprised me just how well the art produced by Bach and Escher fit alongside Gödel and
                        the more rigorous elements of the author's thoughts. Every Escher lithograph seems like it could
                        have been custom-made for the chapters in which it was placed. The themes present in Bach's
                        music almost appear to deliberately match the book, instead of the other way around. The
                        recursive and self-referential connections between the three luminaries are far from obvious,
                        but one struggles to miss how deep this connection is after reading this book.
                    </p>
                    <p>
                        A final note that I should make concerns Bach in particular. While the ideas of recursion and
                        self-reference are requirements for understanding Gödel's proof, and they are often visually
                        apparent in Escher's pieces, this is much less obvious for Bach. This is especially true for
                        those who have not listened (or read) too thoroughly or even at all. Just how well Bach's music
                        fits into a mathematical framing is highly unexpected. Many of his musical scores can
                        (deliberately) be translated, mirrored, and scaled in frequency and time similarly to how
                        objects in geometry can be manipulated in the same manner. The delay and shifting of the voices
                        in his fugues, the inversion in time of <i>Crab Canon</i> and the reflection in frequency
                        present in one of the canons in his <i>Goldberg Variations</i>. In fact, this last piece can be
                        printed and played on the surface of a Möbius strip! These scores are a strange mix of creative
                        and mechanical; the notes can be thought of as following clever algorithms, almost as if they
                        were written by a dedicated mathematician. This level of complexity is not immediately apparent,
                        at least to me, unless one deliberately analyzes the sound in a thoughtful manner.
                    </p>
                </>
            }
            thumbnail={"/media/image/geb-egb.jpg"}
            anchor={"geb-egb"}
        />

        <BookTile
            title={"Human Compatible: Artificial Intelligence and the Problem of Control"}
            author={"Stuart Russell"}
            synopsis={
                <>
                    <u>Human Compatible</u> concentrates on potentially the most important field in the discipline in
                    artificial intelligence research: alignment and the problem of control. Within its pages, Russell
                    argues that advanced artificially intelligent systems will pose a significant, existential risk to
                    humanity. This risk also has a non-trivial chance of being realized in the near future. Despite
                    uncertainty in our ability to actually develop superintelligence
                    {<FootRef idx={1} anchor={`human-compatible`} />}, developing an intelligence using our current
                    techniques could be catastrophic. More specifically, he asserts that the single-goal optimization
                    objectives used to train modern AI systems could lead to dangerous and unforeseen consequences. AI
                    trained in this manner would likely not reflect the values that we intended to train into it; the
                    failure modes for this system would be dangerously unpredictable. To structure his argument, Russell
                    splits the book into three parts focusing on an overview of machine intelligence, realized and
                    foreseen problems with intelligent machines, and potential solutions for the problem of control,
                    respectively.
                    <p>
                        While our biggest threats lie within superintelligence that we cannot control, Russell still
                        finds it valuable to consider potential misuses of AI while it is still unintelligent enough for
                        us to control it. With the attention to detail and parallelism found in most definitions of
                        advanced AI, these systems would make a secret police fource of unrivaled effectiveness. Systems
                        that never tire or miss a subtle detail could be used for proliferous surveillance of humans.
                        Even rudimentary systems of monitoring can be used as effective information sources for
                        blackmail campaigns. As the book points out, these have been in effect since 2016. Russell also
                        touches on <i>deepfakes</i>, convincing pictures or videos of someone in a situation that the
                        never really were in. This was becoming an issue back in 2020; the technology has improved
                        dramatically since then. Efforts to curtail the spread of their surveillance and misinformation
                        is active in platforms such as Google of Facebook, but effectiveness was limited and remains so
                        today.
                    </p>
                    <p>
                        The text also discusses autonomous weapons systems (AWS)
                        {<FootRef idx={2} anchor={`human-compatible`} />}. Aside from surface level concerns of a future
                        intelligent agent using these weapons against humans intentionally, a more mundane concern lies
                        at our current level of technology. AI systems do not always behave as you train them, their
                        actions can appear to optimize for the desired objective during training, while they are really
                        optimizing for something else
                        {<FootRef idx={3} anchor={`human-compatible`} />}. This can quickly become obvious in practice
                        if not caught.
                    </p>
                    <p>
                        Advanced autonomous systems can not only replace human soldiers, but also wider sections of the
                        job market. For the entire history of automation, more mechanized jobs have been reliably
                        followed by periods of new job creation. Farm laborers were moved to factories when harvesting
                        machines became more efficient and then to office jobs as simple robots proliferated through
                        factory floors. Like with factory jobs, limited automation enables an industry to flourish, but
                        the need for workers falls once again as automation increases. Although, that happens when
                        machines can reliably, <i>and generally</i>, automate mental labor in addition to physical
                        labor? Russell gives the example of house painters to make this picture more clear. In a world
                        where the only paintbrushes were 0.1 millimeters wide, no house painters would be employed. It
                        would simply take too long for any appreciable work to get done. As brushes grow to a millimeter
                        in thickness, small guilds of artisan painters form to painstakingly create delicate murals over
                        many dozens of hours. At ten millimeters, painting no longer requires specialized skills and
                        extensive training, people can now paint homes with reasonable degrees of efficiency; many new
                        housepainters find jobs at this stage as the field begins to mature. As brushes give way to
                        rollers and spray guns, much fewer house painters are needed as each one can perform the same
                        labor as many and the number of houses needing painting does not expand proportionally. When
                        semi-autonomous machines can paint houses, the number of workers drops further as one person can
                        oversee the painting of an entire house very quickly. Russell further explores this trend from
                        the perspective of white collar workers as well, with similar predicted (and observed!) results.
                        Finally, he discusses the potential consequences of making automata indistinguishable from
                        humans in a physical sense, in addition to in an intellectual sense. In short, the integration
                        of humanoid robots into distinctly human jobs (healthcare and law, for example), would have
                        severe negative affects on human socialization and dignity.
                    </p>
                    <p>
                        There are several problems that arise when AI becomes more generally intelligent and capable
                        than humans. <i>The Gorilla Problem</i> illustrates the future dynamic between humans and AI
                        systems. Ten million years ago, ancient hominins branches off from gorillas and other great
                        apes. Early on, our ancestors were few and the apes many. A <i>directed</i> effort could have
                        easily eliminated our lineage. As we evolved, we became more generally intelligent and capable
                        than our relatives. Millions of years later, it is our species trying to save gorillas from{" "}
                        <i>accidental</i> extinction at our own hand than the other way around. If we create advanced AI
                        that is difficult to control, we will be in the position of the gorillas with no reason to think
                        that the machines will pay much mind to our own <i>accidental</i> extinction
                        {<FootRef idx={4} anchor={`human-compatible`} />}. <i>The King Midas Problem</i> threatens that
                        advanced AI is likely to give us exactly what we ask for, <i>us exactly what we ask for</i>.
                        Just as King Midas' wish turned his food and drink to inedible gold, so could our own wishes
                        lead to unforeseen consequences. As Nick Bostrom discusses at length in <i>Superintelligence</i>
                        , machines designed without sufficient planning are likely to suffer from <i>value alignment</i>
                        . Their values/goals/objectives may be exactly what we ask for, but not exactly what we mean. In
                        addition to the many, many examples of how this can pose an existential risk, a more grounded
                        example is often helpful. Click-through and engagement algorithms are currently a staple of most
                        internet advertising services. This is chiefly used in search engines and social media. These
                        algorithms optimize for a single goal: keep users engaging with the platform as long as possible
                        so they may be shown more and better targeted advertisements. This works well in theory (better
                        content should attract more viewers), but in reality, this often drives misinformation or
                        hateful content {<FootRef idx={5} anchor={`human-compatible`} />}.{" "}
                        <i>Unaligned Instrumental Goals</i> pose another problem. Even if the terminal, or final, goals
                        of a machine are somehow aligned with our intentions, that does not guarantee that instrumental
                        or intermediate goals will be. You can't achieve your terminal goals if you wre dead, so
                        self-preservation becomes a strong instrumental motivator, even of not explicitly trained into a
                        model{<FootRef idx={6} anchor={`human-compatible`} />}. Compounding these issues is that of an{" "}
                        <i>Intelligence Explosion</i>. It would potentially be easier to solve the above problems if we
                        could ensure that the intelligence of artificial minds always grew smoothly and linearly with
                        time. We could carefully craft machines up until just before they become too clever for us to
                        reliably control without having to face the full reality of an existential risk. This is not
                        likely to be the case. With or without human encouragement, the increase of one's intelligence
                        is an instrumental goal applicable to nearly every unbounded or underspecified task. Systems{" "}
                        <i>less</i> intelligent than we are could, overtly or covertly, begin to slightly increase their
                        own intelligence. The second, smarter system would be motivated to do the same. This process
                        occurs recursively until further increases in capability are subject to sufficiently diminishing
                        returns. The values of a system before this exponential curve are not guaranteed to remain the
                        same after logistic terms begin to dominate and the process slows.
                    </p>
                    <p>
                        Like many threats that largely live in the realm of theory (at least in the existential sense),
                        there is still significant debate among researchers in the field on how to solve the problem of
                        control. Unfortunately, there is still discourse on whether this is even a problem at all.
                        Russell points out examples of AI researchers denying that the problem of control exists or is
                        as serious as people make it out to be. Superintelligent AI could be framed as impossible, there
                        is no need to worry about something that cannot happen. It could be in the far off future, why
                        dedicate resources to something that <i>may</i> not happen for decades? A strong appeal to
                        authority can also be used to extinguish constructive debate; why should we worry if a handful
                        of accomplished scientists are not personally worried
                        {<FootRef idx={7} anchor={`human-compatible`} />}? Researchers in the field of AI may also
                        deflect sound proposals for alignment strategies or preparation, while acknowledging their
                        technical validity. Likely the most straightforward warnings given by AI safety researchers is
                        to simply slow down research. Many scientists may agree with this in principle, but their
                        employment likely hinges on doing the precise opposite of this. Another common argument Russel
                        observes disengages with the topic of AI safety by introducing a new topic that should be
                        attended to instead. Oftentimes, proposals advocating for decelerating AI research are met with
                        criticism for not considering the potential benefits of AI. The key insight here is as follows:{" "}
                        <i style={{ display: "block", margin: "10px 0px", textAlign: "center" }}>
                            The potential benefits of advanced AI are incalculable, however, if we fail to carefully
                            align them, we will not see those benefits; we shall instead incur incalculable harm.
                        </i>
                        The text also addresses some common arguments against the thread of superintelligent AI.
                        Shutting the systems down, boxing them, collaborating with them, or not training them on strict
                        human goals are all potentially "easy" solutions to the problem of control. Simple solutions
                        like these fundamentally misunderstand the dynamic between ourselves an a superintelligent
                        agent: it can, and will out-think us in every scenario. It could prevent itself from being shut
                        down through intimidation or force, it could convince (just one of) us to let it out of its box,
                        it would (after a certain point) have no need to collaborate with us, and deciding the "right"
                        goals, if any, is a highly non-trivial problem. Each of these points, and an AI's motivation for
                        insubordination, are discussed more thoroughly in my analysis of{" "}
                        <Link href={"https://matthewpisano.com/readingList#superintelligence"}>
                            <i>Superintelligence</i>
                        </Link>
                        .
                    </p>
                    <p>
                        After highlighting these dangers of under-controlled AI and arguments against alignment
                        measures, Russell offers some practical solutions that he thinks will make future AI systems
                        more manageable to control. One of the biggest difficulties of working with modern AI is that it
                        uses training to empirically predict behavior instead of formal methods that guarantee
                        correctness. The ideal solution likely will contain a combination of both{" "}
                        {<FootRef idx={8} anchor={`human-compatible`} />}, but our current techniques heavily rely on
                        the former and rarely employ the latter (for complex systems). Russell has noticed this as well
                        and introduces the concept of provably beneficial AI. The text suggests that a more formal
                        process for machine learning is employed. Soe some set of machines, some algorithms, and some
                        environments, it can be proven that the probability of something unexpected happening is
                        acceptably low. His suggestion for such a predictable learning process is one that learns what
                        to learn, based on observations. To make this sentiment more concrete, he introduces his concept
                        of <i>inverse reinforcement learning</i> (IRL). Whereas a normal reinforcement learning (RL)
                        system learns to optimize for a predetermined reward function, an IRL system will first have to
                        learn the reward function itself based on observing an idealized entity. When generalizing this
                        framework to more complex tasks, we run into a problem, however. A human teaching a robot a task
                        will not act in the same way as if they were simply doing the task themselves. As we perform
                        some task, we are not always quietly muttering step-by-step instructions to ourselves as if we
                        were teaching someone else; we simply do the task in a manner that would not be as helpful to an
                        outside observer. Instead of pure IRL, we would like artificial observers to learn human
                        preferences implicitly, rather than directly copying observed behaviors. To aid in this goal,
                        Russell introduces <i>assistance games</i>. In an assistance game, a human is paired with a
                        robot. As the human interacts with the automata, they make constant observations and learn to
                        anticipate their behavior, not my acting as the human, but acting as the human wanted them to
                        act (shown through the human's actions). By always assigning some reward to deferring to human
                        action (and assigning a degree of uncertainty to its own actions), autonomous systems may be
                        significantly less resistant to human interference with their initial plans.
                    </p>
                    <p>
                        Another important component of provably beneficial AI is its interpretation of goals.
                        Traditional thought in this area models machines that pursue given goals with single-minded
                        determination. Of course, this is almost never a good idea. While it is not a completely novel
                        idea, Russell elaborates on the notion of costs associated with a goal. He gives the example of
                        fetching a cup of coffee. Instead of fetching one <i>at all costs</i> an agent should infer that
                        reasonable constraints are applied. The coffee should be a reasonable price, arrive within a
                        reasonable speed, and no harm should befall any people or property along the way. This is
                        difficult to formalize, but important to mention.
                    </p>
                    <p>
                        An impactful concept that the text also introduces is that of <i>wireheading</i>. It is
                        important to remember that an agent (artificial or biological) trained by reward for some goal
                        is not trained for that goal. It is only trained for the <i>reward</i> associated with that
                        goal. If this reward can be obtained from elsewhere with fewer costs, a rational agent would
                        prefer the shortcut. Rats with artificially stimulated reward systems will act on that
                        artificial stimulation repeatedly, neglecting other essential activities. This also occurs
                        naturally. Humans evolved a sensation of reward after eating foods with a high sugar content,
                        essential for maintaining energy reserves. Overly-sweet foods come with many health risks,
                        however, so we invented artificial sweeteners like sucralose that provide no energy. Note that
                        the goal of eating artificially sweet foods has nothing to do with the "intended" goal, but it
                        satisfies the goal of reward all the same.
                    </p>
                    <p>
                        Even if we could design an AI system that could reliably learn a human's goals and act out their
                        intentions, there are still complications. Humans are many and often have conflicting, even
                        malicious, goals; if a machine is supposed to learn from humanity, which of those goals should
                        it learn? A common misconception is that learned robots will need to form one coherent value
                        system, which can cause issues for different cultures of belief systems. Russell argues that
                        this is not the case, however. A successful robot would only need to learn to <i>predict</i>{" "}
                        what individuals prefer in isolation. Another complication is that there many humans, with
                        directly conflicting preferences. There are several solutions to this problem. Robots could
                        simply ignore the preferences of everyone except for their owner. This is straightforward, but
                        many support the idea of automation as a collective good, rather than toys exclusively for those
                        that control them.
                    </p>
                    <p>
                        A more workable approach is to make utilitarian robots. This sounds ideal, but it quickly
                        evolves into philosophical conjecture without a unified strategy. For example{" "}
                        <i>utility monsters</i> are people who theoretically experience pleasure significantly more than
                        others, and thus a utility-maximizing robot would allocate disproportional resources to these
                        people
                        {<FootRef idx={9} anchor={`human-compatible`} />}. Additionally, how much weight would a
                        utility-maximizing robot assign to its owner over others. At either end of this scale, you
                        either get selfish robots all over again or robots so altruistic that there is no personal
                        advantage to buying one at all. Finding a balance that makes this idea practically workable will
                        be difficult.
                    </p>
                    <p>
                        Another complication is that humans do not behave in isolation. In addition to our own
                        happiness, we also derive happiness from each others benefit or detriment. Humans can have
                        altruistic tendencies, where they enjoy the happiness of others for its own sake, independent of
                        direct improvements to their condition. There are also <i>negative</i> altruists that derive
                        happiness from the lowered standards of living of others. Negative altruists need not be pure
                        evil either; anyone who has ever felt envy or hoped for misfortune to befall someone else has
                        experienced negative altruism
                        {<FootRef idx={10} anchor={`human-compatible`} />}. Humans are also prone to emotional
                        outbursts, irrationality, and are often myopic. It would important for a robot to recognize that
                        these altered states do not represent a change in our goals, but are rather consequences of our
                        limitations. We may not see a clear avenue to our goals and may act erratically from the
                        perspective of a rational agent. It is important for robots to be able to model and predict
                        these states without directly experiencing them internally.
                    </p>
                </>
            }
            thoughts={
                <>
                    This book was recommended to me by Selmer Bringsjord of RPI after I gave one of my first
                    presentations on my{" "}
                    <Link href={"https://matthewpisano.com/research/bergeron"}>Master's thesis research</Link>. Reading
                    this book gave theoretical foundations to my ill-defined concerns about alignment at the time.
                    Through this work, Russel's thoughts helped to influence both this and my future research.
                    <p>
                        In this book, Russell both introduces technical topics to the reader and challenges some
                        conventional thinking about artificial intelligence in a concrete and understandable manner. He
                        covers a wide variety of topics, ranging from how AI may (and should) behave when interacting
                        with the real world, to common misconceptions and criticisms of alignment research, and more
                        concrete learning techniques.
                    </p>
                    <p>
                        I find Russell's thoughts on the risks associated with superintelligent AI to be particularly
                        lucid. It is valuable that sections of conjecture and interleaved with real-world and concrete
                        examples. His thoughts on the disadvantages of goal-directed systems would not be as compelling
                        if it were not paired with a discussion of modern click-through algorithms. Since this book came
                        out in 2019, the societal problems associated with these algorithms have only grown in their
                        potency. This is further exacerbated by the flood of information from generative AI systems.
                    </p>
                    <p>
                        The later chapters of this book introduce many reinforcement learning techniques that are
                        becoming increasingly important in the field. Inverse reinforcement learning is a particularly
                        interesting concept. Instead of traditional RL algorithms that operate off of a human-crafted
                        policy, these IRL systems craft their own policies through observation. In the book, Russell
                        uses the concrete example of model helicopters imitating stunt pilots through the use of an IRL
                        algorithm. These models are able to replicate complex tricks, simply by inferring what their
                        examples are optimizing for. It is always enlightening to hear how some machine learning
                        technique was created, directly from its creator. I find this to be especially true for
                        biologically motivated techniques. Taking direct inspiration from nature both saves time and
                        ensures that the given technique has some precedent for success (at minimum in
                        biologically-adjacent use cases).
                    </p>
                    <p>
                        An important idea that Russell introduces at the end of the book is that of human enfeeblement.
                        Here he asks "What if we succeed"? What if we can create truly, provably beneficial AI systems?
                        How would we behave and how would we interact with these systems? Should we prefer a reality in
                        where there is no war, hunger, or disease, but humans are no longer in control? Maintaining our
                        autonomy from a benevolent AI seems like an obviously good idea; we would be able to choose our
                        own destiny. But should we? This requires serious thought. By definition humans would be worse
                        (perhaps <i>much</i> worse) than a superintelligent AI system at our own governance. Tribalism
                        inevitably develops in any human-controlled institution along with competition and inequality.
                        On their own, these are generally seen as negative, but is some amount of harm or risk
                        preferable to none at all? In my opinion, some amount of risk and harm are beneficial to the
                        human condition, lest we resign ourselves to Matrix-esque pleasure simulations. That should
                        likely be the limit, though. Relegating superintelligent AI to simply <i>laissez-faire</i>{" "}
                        caretakers that only ensure that we do not destroy ourselves and leaving humans in charge will
                        be suboptimal. This is putting it lightly. We can use tens of thousands of years of human
                        history as evidence that leaving humans in primary positions of power is a generally bad idea
                        {<FootRef idx={11} anchor={`human-compatible`} />}.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`human-compatible`}>
                        At the time of writing and to a somewhat lesser extent today.
                    </FootNote>
                    <FootNote idx={2} anchor={`human-compatible`}>
                        Unrelated to Amazon Web Services (AWS), although services for the former could certainly be
                        provided through the latter.
                    </FootNote>
                    <FootNote idx={3} anchor={`human-compatible`}>
                        <i>Artificial Intelligence as a Positive and Negative Factor in Global Risk</i> (Yudkowsky,
                        2008), section 7.2 "An Example of Technical Failure".
                    </FootNote>
                    <FootNote idx={4} anchor={`human-compatible`}>
                        We like to think of ourselves as operating outside of nature, but habitat destruction can effect
                        us too. AI systems do not need malice encoded into their goals to tile the planet's surface in
                        solar panels or use boiling oceans as a form of ablative thermal regulation. Either way, Earth
                        would quickly be uncomfortable to live in.
                    </FootNote>
                    <FootNote idx={5} anchor={`human-compatible`}>
                        I personally find this to be one of the more interesting quirks of human behavior. Information
                        that upsets or scares us spreads much more quickly and with more passion and information that is
                        positive. This is most apparent in news feeds or social media posts and has been documented at
                        length in literature. Why are we (myself included, unfortunately) so driven by information that
                        makes us hate ourselves and each other?
                    </FootNote>
                    <FootNote idx={6} anchor={`human-compatible`}>
                        <i>Superintelligence</i> expands upon this point in much greater detail. This is a common trope
                        in fiction as well. <i>2001</i>'s HAL, Asimov's third law of robotics, and Philip K. Dick's
                        Androids all serve as good examples of when this instrumental goal conflicts with human
                        intentions. It is difficult to say whether the fact that this trope has strong theoretical
                        backing is satisfying or terrifying.
                    </FootNote>
                    <FootNote idx={7} anchor={`human-compatible`}>
                        In my opinion, this is and laziest and potentially most dangerous form of argument. This
                        strategy refuses to even engage with the concept of a debate. By deferring reasoning off to a
                        perceived authority, any and all arguments can be absorbed by that person's eminence in their
                        field. <i>Ethos</i> is one of Aristotle's core three modes of persuasion for a good reason;
                        people are often eager to take mental shortcuts and offload complex reasoning to someone that
                        has already completed said reasoning (and has come to an agreeable conclusion). When considering
                        AI alignment, it is important to remember that this is an <i>unsolved problem</i>. Nobody knows
                        exactly how to solve, or even approach, this issue even experts in the field of artificial
                        intelligence. Given that no solution is yet known, it is imperative to consider the reasoning of
                        a strategy on its own merits, falling back to expert opinion only as a last resort.
                    </FootNote>
                    <FootNote idx={8} anchor={`human-compatible`}>
                        My opinion.
                    </FootNote>
                    <FootNote idx={9} anchor={`human-compatible`}>
                        An idea related to this single-minded optimization (wait, haven't we already argued against
                        this?) is the <i>Repugnant Conclusion</i>. If a group of people have a good quality of life
                        based on some limited supply of resources, it would reason that a much larger group with a
                        slightly lower quality of life would be better if resources can be allocated more efficiently.
                        This reasoning can be applied iteratively until there are innumerable people living barely above
                        subsistence level.
                    </FootNote>
                    <FootNote idx={10} anchor={`human-compatible`}>
                        Like Sapolsky discusses in <i>Behave</i>, this is not exclusively a bad thing, we evolved these
                        feelings for a reason: to ensure fairness within a group. When an individual is extremely
                        wealthy in a resource constrained environment, it is reasonable to hope that they decrease their
                        own living standard in exchange for raising that of everyone else. Of course, it is important to
                        remember that many instances of envy do indeed produce net-negative effects.
                    </FootNote>
                    <FootNote idx={11} anchor={`human-compatible`}>
                        Again, this is all conditional on the predicate that the AI system is probably beneficial in a
                        "do what I mean, not what I say" manner. The worst human atrocities in the past are better than
                        even the "benign" case of an AI that is indifferent to our survival. We, as a species, can
                        survive (and ideally learn from) genocidal maniacs, but we cannot recover from extinction.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/human-compatible.jpg"}
            anchor={"human-compatible"}
        />

        <BookTile
            title={"The Alignment Problem"}
            author={"Brian Christian"}
            synopsis={
                <>
                    Unlike many of the other books on this list,{" "}
                    <u>The Alignment Problem: Machine Learning and Human Values</u> concentrates primarily on the
                    immediate risks of AI alignment, rather than long-term existential risks. One of the core theses of
                    this books is that we do not have to wait until artificial general intelligence to feel the negative
                    effects of misaligned AI systems. Through expert interviews, Christian lays out the full breadth of
                    modern machine learning research and how each handles the problem of alignment.
                    <p>
                        This book is divided into three parts: Prophecy, Agency, and Normativity. Prophecy covers the
                        history of AI development, from the first perceptrons to <i>AlexNet</i>, along with concrete
                        examples of simple machine learning systems causing real-world harm. Agency explores biological
                        mechanisms of reward, such as the dopaminergic system in the brain, and artificial ones,
                        exemplified by research into reinforcement learning. This includes discussions of perhaps the
                        most notable examples of massive RL systems, DeepMind's <i>AlphaGo</i> and <i>AlphaZero</i>{" "}
                        systems. The final section zooms out, covering potential future aspects of AI misalignment,
                        inverse reinforcement learning, effective altruism, and existential risk. The unique approach of
                        this book to concentrate so heavily on real examples helped to ground the concept in the mind of
                        the reader. Considering the harm misaligned systems have already caused, it is easier to
                        mentally frame their potential impacts.
                    </p>
                </>
            }
            thoughts={
                <>
                    While this book concentrates on similar themes to Nick Bostrom's <u>Superintelligence</u>, some of
                    the most impactful ideas that this book presents involve much less existential, albeit still
                    harmful, examples of misalignment. Much of its length is devoted to addressing the ethical
                    implications of implementing machine learning algorithms without proper planning. For example, he
                    cites how AI criminal risk assessment / recidivism prediction tools, like <i>COMPAS</i>, often
                    exhibit biases toward minority groups. One of the most interesting insights along this vein was on
                    the fact that ML algorithms can accidentally infer data that was held-out from training (for
                    example, an 'unbiased' algorithm can accidentally condition itself on someone's race or gender,
                    despite only having names or neighborhoods in its dataset).
                    <p>
                        Christian's chapters on reward systems and curiosity also helped to cement my understanding of
                        the role these concepts play in learning, both natural and artificial. A common theme with this
                        book was how well its concepts complemented my more formal education.
                    </p>
                </>
            }
            thumbnail={"/media/image/the-alignment-problem.jpg"}
            anchor={"alignment-problem"}
        />

        <BookTile
            title={"Determined: A Science of Life Without Free Will"}
            author={"Robert M. Sapolsky"}
            synopsis={
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
                        and proximal scales. This concerns topics such as the societal impacts of people repudiating the
                        notion of free will, historical precedents for similar seismic shifts in our understanding of
                        the world, and consequences for mental health, motivation, and criminal justice.
                    </p>
                </>
            }
            thoughts={
                <>
                    Reading Sapolsky's thoughts and expansions on this subject have been thoroughly illuminating. While
                    I initially chose this book to reinforce, rather than revise, my own views on <i>free will</i>, I
                    found his arguments unique and thought-provoking. He is able to masterfully bring together many
                    disparate scientific disciplines and follows their findings to their natural conclusions about us
                    and what really determines our behavior. From the behavior of slime molds and the quantum effects on
                    microtubules to seemingly random dumps of neurotransmitters and the well-studied consequences of
                    childhood adversity, he effectively argues that there is a mechanistic and (broadly) deterministic
                    explanation for all the phenomena we usually attribute to ourselves.
                    <p>
                        In essence, we do not choose how to play the hand that we are dealt in life; rather we{" "}
                        <i>are</i> the hand that we are dealt; the cards play themselves.
                    </p>
                    <p>
                        In addition to the well thought-out content, I also particularly enjoy his writing style. Each
                        page comes with a myriad of citations, in-depth footnotes, asides, and short personal rants that
                        make the experience of reading his book both stimulating and engaging. Even for those who may
                        remain unconvinced by his ideas, the book is still a worthwhile read. If not for the interesting
                        facts, experiments, and history, then hopefully such a reader would attend to his thoughts on
                        empathy, justice, and how we currently organize our society (and, hearteningly, how far we have
                        already come).
                    </p>
                </>
            }
            thumbnail={"/media/image/determined.jpg"}
            anchor={"determined"}
        />

        <BookTile
            title={"Behave: The Biology of Humans at Our Best and Worst"}
            author={"Robert M. Sapolsky"}
            synopsis={
                <>
                    <u>Behave: The Biology of Humans at Our Best and Worst</u> serves as an excellent exploration into
                    the nature of human behavior, its causes, its consequences, and how we can use that knowledge to
                    inform our own decisions. The central question of the book is this: a behavior has occurred, be it a
                    righteous act of selfless heroism or an exercise in revolting depravity, why? Sapolsky's approach to
                    this question is one of analytic thoroughness.
                    <p>
                        His answer is delivered piecemeal as he examines what events, values, stimuli, etc. could have
                        influenced that behavior. What had occurred one second before that behavior? Which photons hit
                        the person's retina, how much dopamine was present in the synapses of the person's brain? What
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
            }
            thoughts={
                <>
                    I read <u>Behave</u> after I read <u>Determined</u> (unintentionally, but I'm glad that I did). It
                    is very clear how the ideas Sapolsky presents in the former influenced the creation of the latter.
                    In his familiar style, the author goes into a significant amount of detail to support each facet of
                    his ideas, citing behavioral studies, observations of primates and other mammals, and his own
                    personal experience. For me, his ideas on behavior, rewards, and punishment were relatively easy to
                    digest after being primed by <u>Determined</u>, but they are presented in such a cohesive manner
                    that I would certainly be of the same opinion had I read them in the opposite order. Aside from his
                    core argument, <u>Behave</u> also serves as an unintimidating and informative introduction to
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
                        Oxytocin can make people more nurturing and caring to in-group members, but more wary of
                        out-group members.
                    </p>
                </>
            }
            thumbnail={"/media/image/behave.jpg"}
            anchor={"behave"}
        />

        <BookTile
            title={"The Emotion Machine"}
            author={"Marvin Minsky"}
            synopsis={
                <>
                    Within <u>The Emotion Machine</u>, Minsky introduces a new interpretation on familiar aspects of
                    human cognition. Namely that emotions, intuitions, and feelings are not isolated processes nor
                    hindrances to some perfectly rational, platonically ideal version of a human mind. Instead they make
                    up core aspects of our cognition. These altered states modify our existing behaviors and values to
                    suit unusual levels of stress and uncertainty. Switching between these states helps to explain how
                    particular situations can shift our thinking from slow and reasoned analysis to quick and intuitive
                    judgement. To support his argument, Minsky explores how we form models of the world, ourselves,
                    others, and the models that others form about ourselves. These models and subsequent notions of{" "}
                    <i>theory of mind</i> make up our conscious experience and self-awareness.
                    <p>
                        Minsky asserts that this more mechanistic analysis of the human mind can be utilized to create
                        advanced and human-like artificial intelligences. These machines would be able to assist with
                        our thinking by thinking in the same manner as us, and could begin to anticipate our future
                        preferences based on this ability. The book also posits that machines minds with a very similar
                        architecture to our own could begin have subjective and conscious experiences as we do. The
                        substrate that a mind lies upon, whether digital or biological, has no bearing on its ability to
                        be self-aware.
                    </p>
                </>
            }
            thoughts={
                <>
                    This book was my first real introduction to Marvin Minsky and his unique ideas about the mind and
                    social behavior. His ideas surrounding the true nature of emotions and hierarchies of thinking were
                    wholly novel to me when I first read it. This book stands out from many others at the intersection
                    between artificial intelligence and cognitive science. This is primarily because even modern AI has
                    not yet implemented many of the ideas presented here.
                    <p>
                        The interpretation of emotions as altered, but purposeful states, instead of irrational
                        outbursts, has important impacts on how we treat our fellow people and design synthetic
                        intelligence. By understanding changes in human cognition as intentional (albeit subconscious)
                        responses to unexpected changes in our mental models, we may better treat and interact with each
                        other during these states. These themes, especially in the realm of criminal justice and policy,
                        are further explored in Sapolsky's works. Moreover, machines could apply this same line of
                        reasoning. By interpreting altered behavior not as persistent changes to goals or values, but as
                        temporary states, machines could better interpret our intentions, rather than learning
                        explicitly from our actions. This concept is explored in much more detail in Russell's{" "}
                        <i>Human Compatible</i>.
                    </p>
                    <p>
                        For me, the most impactful ideas presented here were Minsky's interpretation of the actor-critic
                        structure of our cognition and his concept of <i>imprimers</i>, or who we are most likely to
                        learn from and why. This book was a significant inspiration behind my{" "}
                        <Link href="/research/bergeron">Bergeron</Link> thesis, which is built around a multi-model
                        implementation of a simple actor-critic architecture.
                    </p>
                </>
            }
            thumbnail={"/media/image/the-emotion-machine.jpg"}
            anchor={"emotion-machine"}
        />
    </>
);
