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
                    is the missing component when comparing humans to creatures of "lesser" souls.
                </p>
                <p>
                    Using the preceding knowledge of recursion and self-reference as background, the text introduces one
                    of the most prominent examples of strange "loopiness" in mathematics. To understand the full impact
                    of Gödel's proof, the reader must first understand what Hofstadter deems "the Mathematician's
                    Credo": all mathematical phenomena occur completely due to stable and understandable reasons. In the
                    early twentieth century, the prevailing extrapolation of this belief was that a single, unified
                    system of mathematics could be created that fully describes all of mathematics without
                    contradiction. This was the goal of Russell and Whitehead's <i>Principia Mathematica</i> (PM) and
                    many mathematicians at the time hoped that this would represent such a unified system. Within PM,
                    <i>theorems</i> (proved assertions) are very strictly derived from <i>axioms</i> (assumed
                    assertions). The rules of inference within PM are constructed in such a way that the string of
                    symbols that represent a given theorem is created only from mechanistic manipulations of the symbols
                    from previous theorems of axioms. Recall that the objects that these proofs described lied within a
                    strict hierarchy, such that objects could only be defined in terms of hierarchically lower objects.
                    This rule was specifically implemented to avoid self-referential paradoxes. The perceived importance
                    of PM came from two core assumptions. Given that the axioms were true, all theorems produced by the
                    symbol manipulation of those axioms was also true (consistency) and that the axioms were chosen in
                    such a manner that all truths could be proved by deriving intermediate truths only from the axioms
                    and rules of inference. "X is true <i>because</i> there is a proof of X" and "X is true{" "}
                    <i>and so</i> there is a proof of X".
                </p>
                <p>
                    The first of Gödel's key insights was that the rule-based symbol manipulation of PM's rules of
                    inference would be faithfully recreated within number theory itself. This was done by assigning each
                    typographical symbol of PM's notation to a unique, arbitrary integer. Strings were then comprised of
                    these integers as exponents for the sequence of prime numbers. Importantly, when input axioms
                    underwent symbolic transformations that resulted in output theorems, input Gödel numbers for those
                    axioms underwent numerical transformations that resulted in output Gödel numbers that corresponded
                    with the logically correct theorem
                    <FootRef idx={5} />! These integer strings would be unimaginably large and infeasible to work with,
                    however Gödel did not have to do these calculations himself, he only needed to show that his
                    assertions were mathematically sound
                    <FootRef idx={6} />. Hofstadter dubs such a Gödel number that can be derived from PM's axioms
                    (therefore representing a statement provable within PM) as a <i>prim</i> number. With this notion,
                    the "Gödelian" Strange Loop can be closed. Gödel first considers a statement that assets that "An
                    integer, <i>g</i>, is not a <i>prim</i> number". This statement, of course, can be encoded as a
                    unique Gödel number. What if such a statement could be constructed such that g was the Gödel number
                    of the statement itself? Such a statement would say: "The Gödel number, <i>g</i>, for this statement
                    is not a <i>prim</i> number". In other words: "This statement is not provable via PM's rules of
                    inference" or, more tersely, "I am unprovable"
                    <FootRef idx={7} />. If such a statement
                    <FootRef idx={8} /> could be constructed, it would imply paradox after paradox present within the
                    supposedly paradox-free <i>Principia Mathematica</i>!
                </p>
                <p>
                    However, there is still one important detail missing from this explanation: how can a formula
                    contain its own symbols with room to spare for other boilerplate? The answer lies in the fact that a
                    number can be fully described without having to be fully written out. For example, you can either
                    write "10077696" or the much shorter "6<sup>9</sup>". Gödel achieves this through a process
                    analogous to a notion that the text refers to as "Qunining"
                    <FootRef idx={9} />. This form of indirect self-reference is exemplified by the statement:
                </p>
                <blockquote>
                    "Yields falsehood when preceded by its quotation" yields falsehood when preceded by its quotation.
                </blockquote>
                <p>
                    This statement contains two duplicate subjectless sentence fragments which, when combined, result in
                    a coherent statement. The PM analog for such a fragment would be a statement, not about a specific
                    number, but about the variable <i>x</i>. Taking this fragment's Gödel number, <i>k</i>, and
                    replacing <i>x</i> with it yields a formula that makes a claim about a much larger number, <i>g</i>,
                    the Gödel number of the new composite formula itself! To encode this logic back into Quinean terms,
                    we get something like:
                </p>
                <blockquote>
                    "when fed its own Gödel number yields a non-prim number" when fed its own Gödel number yields a
                    non-prim number.
                </blockquote>
                <p>
                    In concrete terms, quoting a sequence means to take it's Gödel number (<i>k</i>) and then inputting
                    that back into the same sequence. Thus, we can reference a formula's own Gödel number without
                    explicitly embedding that number into the formula itself. Instead, that number is only{" "}
                    <i>described</i> by the formula in more compact terms.
                </p>
                <p>
                    Regardless of Gödel's clever trickery, any statement of logic is either true or false, never both.
                    With reference to a well-defined and powerful system such as PM, a statement is either provable or
                    not. How can we then classify Gödel's statement that essentially says "I am unprovable"? Suppose,
                    first, that it is false: this would suggest that the statement is indeed provable within PM.
                    However, that would man that PM would be able to prove a false statement, a blatant contradiction!
                    Instead, let's assume that the statement is true. Then it truly is unprovable within PM. Here, the
                    system is consistent with itself, but it means it is incomplete.{" "}
                    <i>
                        There are some true statements that cannot be proved by PM, nor any other formal systems of
                        mathematics.
                    </i>{" "}
                    In other words, all logical systems sufficiently powerful to perform number-theoretical operation
                    are <i>either</i> inconsistent <i>or</i> incomplete.
                </p>
                <p>
                    Aside from the sheer mathematical and philosophical impact of this result, how does this relate back
                    to the motion of a Strange Loop? The connection lies within the isomorphism of{" "}
                    <i>Principia Mathematica</i>, between Russel and Whitehead's symbolic interpretation of PM and
                    Gödel's number-theoretical angle. Similarly, human brains can be thought of having two (very broad)
                    levels. At one extreme, there is the low-level particle interactions describable within the real of
                    physics (Russel and Whitehead's symbol shunting within PM). At the other, there are complex symbols
                    triggering each other along with input from the environment (Gödel's interpretation of the theorems
                    as statements of number theory). Both seem to contradict each other, yet are two different ways of
                    faithfully describing the same object. At the level of symbols in our minds, there is one that
                    appears to trigger symbols without first needing to be triggered itself; an event with no cause, a{" "}
                    <i>prime mover</i>. This <i>I</i> symbol is likely the most complex of them all within a given mind.
                    Additionally, minds often contain other <i>I</i> symbols for other people, though notably less rich
                    than the originals. To Hofstadter, this special symbol for ourselves begins as a hopelessly vague
                    notion as soon as the developing brain has developed the faculties to support it. Over time, this
                    symbol accretes countless experiences, interactions, and beliefs, forming them into a (mostly)
                    coherent sense of self. Somewhat of an illusion in the author's eyes, but one of unparalleled
                    persistence nonetheless. The "loopiness" of this symbol comes into view when one's actions affect
                    others, or their environment, which then affect the original <i>I</i> symbol. Furthermore, humans
                    have a (seemingly) unique ability for introspection, where it can reason and reflect upon the past
                    triggering of its self-symbol.
                </p>
                <p>
                    The loop here is fairly straightforward, but its classification as "strange" is less obvious.
                    Feedback loops are interesting, but few will say there is really a "light on" within a toilet's
                    float or video feedback. The text briefly considers the notion that "I-ness" is tied to a particular
                    substrate, namely carbon (and neuron) based brains. If that were the only contributing factor, then
                    mosquitoes
                    <FootRef idx={10} />, cows, and dogs would have the same capacity for a self as humans do. Instead,
                    Hofstadter argues that a sense of self, a "light on", comes only from the patterns of activation
                    within a system of symbols. As he quotes Daniel Dennett, "It ain't the meat, it's the motion"
                    <FootRef idx={11} />. The meaning within a system <i>tracks</i> its physical patterns, but is not
                    composed of them in isolation, just as Gödel's numbers <i>track</i> the symbol manipulation of PM
                    strings, but are not directly implied by them. The "strangeness" within our own loopy feedback
                    mechanisms comes not from the feedback itself, but from the symbols that feedback creates. These
                    symbols <i>perceive</i> incoming signals and can perform more meaningful processing of that input
                    through complex patterns of symbol manipulation. "We" are only aware of our own <i>I</i> symbol
                    precisely due to the fact that is all we can see. Even if we intellectually know of the very real
                    particle interactions that make up our selves, we still personally believe in the complex <i>I</i>{" "}
                    pattern that those particles create through their interactions. Our inability to directly obverse
                    our own low-level interactions forces us to only reason in top-level symbols, forming a sense of
                    self.
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
                <FootNote idx={5}>
                    Importantly, valid Gödel numbers do not assert truthful theorems, they merely assert that they are
                    well-formed. "2+2=5" is comprehensible (well-formed), though false, while "==0+]" is
                    incomprehensible (not well-formed). The "truthfulness" of a theorem comes only from the notion that
                    it can be derived (directly or through intermediate theorems) from axioms assumed to be true,{" "}
                    <i>a priori</i>.
                </FootNote>
                <FootNote idx={6}>
                    This represents an excellent example if an <i>isomorphism</i>. The two domains: PM proof strings and
                    number theory only seem related in the fact that they involve mathematics in some respect. However,
                    Gödel showed that they are simply two different manifestations of the same fundamental concept. One
                    can perfectly understand the logic of PM's proof strings without once invoking number theory (like
                    Russell and Whitehead had) and one can also manipulate Gödel numbers without knowing of their
                    possible implications on the truthfulness of falsity of the PM theorem they represent!
                </FootNote>
                <FootNote idx={7}>
                    The connection to the classic Liar's Paradox ("This statement is false") is not coincidental here!
                </FootNote>
                <FootNote idx={8}>
                    Gödel's statement is particularly insidious here, as it represents one of an infinite family of
                    similar paradoxes. Therefore one cannot simply make <i>g</i> (or its negation <i>~g</i>) an axiom of
                    some new "fortified" PM, as there will always be another <i>g</i>-shaped hole to plug in this new
                    system.
                </FootNote>
                <FootNote idx={9}>
                    Named after logician Willard Van Orman Quine and his study of indirect self-reference.
                </FootNote>
                <FootNote idx={10}>Especially so.</FootNote>
                <FootNote idx={11}>
                    Only one <i>entendre</i> allowed at a time, please.
                </FootNote>
            </>
        }
        thumbnail={"/media/image/i-am-a-strange-loop.jpg"}
        anchor={"i-am-a-strange-loop"}
    />
);
