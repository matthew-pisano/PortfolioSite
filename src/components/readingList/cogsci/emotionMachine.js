import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"The Emotion Machine"}
        author={"Marvin Minsky"}
        synopsis={
            <>
                Within <i>The Emotion Machine</i>, Minsky introduces a new interpretation on familiar aspects of human
                cognition. Namely that emotions, intuitions, and feelings are not isolated processes nor hindrances to
                some perfectly rational, platonically ideal version of a human mind. Instead they make up core aspects
                of our cognition. These altered states modify our existing behaviors and values to suit unusual levels
                of stress and uncertainty. Switching between these states helps to explain how particular situations can
                shift our thinking from slow and reasoned analysis to quick and intuitive judgement. To support his
                argument, Minsky explores how we form models of the world, ourselves, others, and the models that others
                form about ourselves. These models and subsequent notions of <i>theory of mind</i> make up our conscious
                experience and self-awareness.
                <p>
                    Minsky asserts that this more mechanistic analysis of the human mind can be utilized to create
                    advanced and human-like artificial intelligences. These machines would be able to assist with our
                    thinking by thinking in the same manner as us, and could begin to anticipate our future preferences
                    based on this ability. The book also posits that machines minds with a very similar architecture to
                    our own could begin have subjective and conscious experiences as we do. The substrate that a mind
                    lies upon, whether digital or biological, has no bearing on its ability to be self-aware.
                </p>
            </>
        }
        thoughts={
            <>
                This book was my first real introduction to Marvin Minsky and his unique ideas about the mind and social
                behavior. His ideas surrounding the true nature of emotions and hierarchies of thinking were wholly
                novel to me when I first read it. This book stands out from many others at the intersection between
                artificial intelligence and cognitive science. This is primarily because even modern AI has not yet
                implemented many of the ideas presented here.
                <p>
                    The interpretation of emotions as altered, but purposeful states, instead of irrational outbursts,
                    has important impacts on how we treat our fellow people and design synthetic intelligence. By
                    understanding changes in human cognition as intentional (albeit subconscious) responses to
                    unexpected changes in our mental models, we may better treat and interact with each other during
                    these states. These themes, especially in the realm of criminal justice and policy, are further
                    explored in Sapolsky's works. Moreover, machines could apply this same line of reasoning. By
                    interpreting altered behavior not as persistent changes to goals or values, but as temporary states,
                    machines could better interpret our intentions, rather than learning explicitly from our actions.
                    This concept is explored in much more detail in Russell's <i>Human Compatible</i>.
                </p>
                <p>
                    For me, the most impactful ideas presented here were Minsky's interpretation of the actor-critic
                    structure of our cognition and his concept of <i>imprimers</i>, or who we are most likely to learn
                    from and why. This book was a significant inspiration behind my{" "}
                    <Link href="/research/bergeron">Bergeron</Link> thesis, which is built around a multi-model
                    implementation of a simple actor-critic architecture.
                </p>
            </>
        }
        thumbnail={"/media/image/the-emotion-machine.jpg"}
        anchor={"emotion-machine"}
    />
);
