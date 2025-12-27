import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Determined: A Science of Life Without Free Will"}
        author={"Robert M. Sapolsky"}
        synopsis={
            <>
                <i>Determined: A Science of Life Without Free Will</i> examines and deconstructs one of the most
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
        }
        thoughts={
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
                    In essence, we do not choose how to play the hand that we are dealt in life; rather we <i>are</i>{" "}
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
        }
        thumbnail={"/media/image/determined.jpg"}
        anchor={"determined"}
    />
);
