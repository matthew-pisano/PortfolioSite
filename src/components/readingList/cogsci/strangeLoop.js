import React from "react";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"I Am a Strange Loop"}
        author={"Douglas Hofstadter"}
        synopsis={
            <>
                <i>I Am a Strange Loop</i> serves as a refinement of the ideas Douglas Hofstadter originally presented
                in <i>Gödel, Escher, Bach: An Eternal Golden Braid</i>, thirty years earlier. In his prior work,
                Hofstadter attempted to explore his ideas on Souls, Selves and <i>I's</i> through the lense of{" "}
                <i>Gödel, Escher, Bach</i>'s three namesakes. The "strange" recursive and self-referential natures of
                their work served as an anchor for the author to ground his own ideas on the human mind in. By contrast,{" "}
                <i>I Am a Strange Loop</i> uses these references less as the core of his thesis and more as supporting
                elements. Instead, he uses less abstract examples to present his ideas to the reader. <i>Symballs</i>,{" "}
                <i>Huneker</i> units, video feedback, and others are used to illustrate the text's thesis on what an{" "}
                <i>I</i> exactly is, what can be assigned the coveted status of an <i>I</i>, and how an <i>I</i> can be
                created from <i>I</i>-less material.
                <p>
                    What exactly is an <i>I</i>? To Hofstadter, it relates closely to the degree of consciousness
                    associated with a being. Tying this ephemeral quality to something more "real", the text introduces
                    the notion of a <i>Soul</i>, though only in a secular sense. Small souled beings have no, or very
                    limited, conscious thought, higher aspirations, or self-referential manners of thinking. Examples
                    include rocks, microorganisms, or mosquitoes
                    <FootRef idx={1} />. According to the book, larger souled beings (measured in <i>Huneker</i> units),
                    in roughly increasing order, include bees, fish, chickens, dogs, infants, adults with severe
                    cognitive impairments, and finally healthy adult humans. Notably, this list is not based simply on
                    an entity's similarity to humans
                    <FootRef idx={2} />. Instead, the size of an entity's soul is correlated only to its cognitive
                    abilities for theory of mind, self-referential thought, and similar abilities. This measurement of a
                    soul is also completely divorced from the substrate for cognition. Fictional robots, like{" "}
                    <i>C-3PO</i> and <i>R2-D2</i> are only made of seemingly inert metal, yet they appear to have souls
                    comparable to humans. How can this be?
                </p>
                <p>
                    Upon closer inspection, humans appear to be made of similarly inert "stuff" to robots or inanimate
                    objects. We reside, more or less
                    <FootRef idx={3} />, within our brains. However our brains are composed of neurons, which are
                    composed of organelles, which are made up by various proteins and molecules, which themselves are
                    made of atoms, then sub-atomic particles. You would be hard-pressed to find someone claiming that
                    quarks or strings or hypergraphs are themselves conscious
                    <FootRef idx={4} />, so how can we, conscious <i>I's</i>, ourselves be conscious? The key,
                    Hofstadter argues, is not in the material, it lies in patterns of interaction. To better illustrate
                    this thesis, the text introduces Small Interacting Magnetic Marbles (<i>Simms</i>). these Simms are
                    constantly in motion, bouncing around within the billiard table-like <i>Careenium</i>. Suppose that
                    the walls of this table occasionally flex inward, changing the trajectory of Simms as they bounce
                    off of it. Suppose further that these magnetic marbles can fuse together in clumps or fission into
                    components, depending on how other Simms interact with them. From the perspective of a simm, these{" "}
                    <i>Simmballs</i> appear to be massive, immovable conglomerates of Simms. Zooming out and speeding
                    up, the Simms themselves disappear into a background blur anf the much larger Simmballs begin to
                    noticeably move. Now, we only see the Simmballs as they interact with each other, fission apart,
                    fuse, and evolve into complex patterns. Though they compose the Simballs, the Simms know nothing of
                    these complex movements that they orchestrate. Only when zooming out do emergent patterns of
                    interaction emerge. Importantly, there is no <i>Prime Mover</i> here, no special Simms with free
                    will of their own or dualist homunculi determining how the Simmballs interact. The only determining
                    factor here is simple physics, yet diverse patterns still emerge.
                </p>
                <p>
                    As a prelude for further discussion on "Strange" loops, the book first introduces more mundane forms
                    of "loopiness". On the journey to self-reference, we must first consider feedback. The float-ball of
                    a toilet is a very rudimentary form of feedback. As the water level in its tank increases, the float
                    rises, eventually shutting off the valve that is filling the tank in the first place. Feedback and
                    self-reapplication is found at the core of exponential functions, the output of the last
                    multiplication is fed back into subsequent multiplications. In a concrete sense, the familiar
                    screech of audio feedback is the result of an amplified sound being fed back into the amplifier
                    through the microphone. Video feedback is somewhat different, however. In the case of a simple
                    camera pointing at a screen, very little amplification is present. Instead of an explosion of
                    intensity, the recursion of images converges on a single, seemingly infinitely far vanishing point.
                    Here, the original image is faithfully recreated within successor images in a basic form of
                    self-reference. This self-reference was a major concern among early twentieth century
                    mathematicians. Near the turn of the century, Bertrand Russell had been working on grounding all of
                    mathematics inside a basic theory of sets. Self-reference plagued this early attempt, leading to
                    contradictions at the core of his framework. <i>Russell's paradox</i>, as it became known, concerns
                    the set of all sets, namely, does it contain itself? A system that allowed this paradox quickly
                    became unworkable, therefore Russell and his colleague Alfred Whitehead sought to purge it from
                    their theories. Their new approach, published in <i>Principia Mathematica</i> was designed to be
                    immune to such self-references and paradoxes. Here, mathematical objects were structured in a rigid
                    hierarchy. Objects within this hierarchy could only be defined, or reference, objects in lower
                    strata. Their <i>magnum opus</i> was intended to be a fortress, impregnable by inconsistencies or
                    incompleteness. Unfortunately, even the most hardened strongholds still contain innumerable,
                    microscopic cracks.
                </p>
                <p>
                    When contemplating self-reference, one must consider two broad categories: reception and perception.
                    Simple forms of feedback, such as infinitely regressing video, only receive information. They take
                    in stimuli and echo it back after some form of transformation that is only a function of the initial
                    input. More complex systems may gain the ability to perceive. Incoming information may be stored and
                    later synthesized into more complex transformations on later information. These auxiliary symbols
                    function as <i>symbols</i> that are dormant until selectively triggered by other symbols. As an
                    example, Hofstadter describes mosquitoes as simple feedback mechanisms without access to
                    higher-level symbols. These creatures have no need to differentiate between different types of
                    animals or threats. To survive, it must only know to fly towards warm, flesh-like materials and to
                    fly away from anything rapidly approaching their position that may pose a threat. As a consequence
                    of this, Hofstadter argues that they do not have any capacity for self-reference, no "I" symbol to
                    use in reasoning about themselves. Moving up in <i>Huneker</i> units, the text considers the dog.
                    Through still below humans in terms of cognitive capacity, the imprint of an <i>I</i> begins to
                    emerge. Dogs have a limited scope of symbols to draw from: their owner(s), their favorite toy, their
                    least-favorite dog, or the postal worker. Each symbol is activated by a different set of other
                    symbols and stimuli. Notably, the symbol repertoire of a dog has limited extensibility: most can
                    only learn a few dozen commands and tricks before reaching their cognitive capacity. Humans,
                    Hofstadter claims, have an <i>arbitrarily</i> extensible set of symbols. We can define a near
                    limitless number of concepts in terms of existing symbols and learned experiences. This generality
                    is the missing component when comparing humans to creatures of "lesses" souls.
                </p>
            </>
        }
        thoughts={<></>}
        footnotes={
            <>
                <FootNote idx={1}>
                    Though Hofstadter describes himself as valuing nearly all living beings, he makes it a point that
                    mosquitoes, specifically, are very much not on that list.
                </FootNote>
                <FootNote idx={2}>
                    I think it is probable that the author would place the most advanced corvids above our most
                    primitive, yet still closely related, primate cousins.
                </FootNote>
                <FootNote idx={3}>More to come on this notion later.</FootNote>
                <FootNote idx={4}>Except for, perhaps, some exceptionally devout, animist physicist.</FootNote>
            </>
        }
        thumbnail={"/media/image/i-am-a-strange-loop.jpg"}
        anchor={"i-am-a-strange-loop"}
    />
);
