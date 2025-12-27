import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Behave: The Biology of Humans at Our Best and Worst"}
        author={"Robert M. Sapolsky"}
        synopsis={
            <>
                <i>Behave: The Biology of Humans at Our Best and Worst</i> serves as an excellent exploration into the
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
                    introspections into morality, empathy, and metaphor. Similarly to <i>Determined</i>, he also
                    discusses the implications of these ideas on the criminal justice system. How does punishment work
                    if our behaviors are heavily, if not fully{" "}
                    <a href="https://matthewpisano.com/readingList#determined">determined</a> by factors outside of our
                    control?
                </p>
            </>
        }
        thoughts={
            <>
                I read <i>Behave</i> after I read <i>Determined</i> (unintentionally, but I'm glad that I did). It is
                very clear how the ideas Sapolsky presents in the former influenced the creation of the latter. In his
                familiar style, the author goes into a significant amount of detail to support each facet of his ideas,
                citing behavioral studies, observations of primates and other mammals, and his own personal experience.
                For me, his ideas on behavior, rewards, and punishment were relatively easy to digest after being primed
                by <i>Determined</i>, but they are presented in such a cohesive manner that I would certainly be of the
                same opinion had I read them in the opposite order. Aside from his core argument, <i>Behave</i> also
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
        }
        thumbnail={"/media/image/behave.jpg"}
        anchor={"behave"}
    />
);
