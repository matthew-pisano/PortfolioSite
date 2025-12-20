// javascript
import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";


export default (
    <>
        <BookTile
            title={"QED: The Strange Theory of Light and Matter"}
            author={"Richard Feynman"}
            synopsis={
                <>
                    <u>QED: The Strange Theory of Light and Matter</u> is an adaptation of four lectures given by
                    Richard Feynman at UCLA. Designed for readers without an in-depth knowledge in the field of{" "}
                    <i>quantum electrodynamics</i>, the book is able to effectively convey the complex notions of the
                    theory while remaining understandable to general audiences. Feynman uses analogies, diagrams, and
                    his well-known <i>Feynman diagrams</i> to describe this subset of quantum field theory in terms that
                    anyone can understand.
                </>
            }
            thoughts={
                <>
                    This book served as my first (informal) introduction to QED, specifically, and even QFT in general.
                    His analogies and examples, such as the connection he makes between photons reflecting off of a
                    glass surface and quantum indeterminism, help to frame the notoriously abstract concepts of the
                    quantum realm in more familiar terms.
                    <p>
                        I especially enjoy how the book is structured. It follows a clear progression from that
                        high-level example to the more complex reality of wave-particle duality and virtual photons. I
                        also found the logic behind his Feynman diagrams interesting and how they can represent the
                        infinite possibilities of particle interactions within a series of simple lines.
                    </p>
                </>
            }
            thumbnail={"/media/image/qed.jpg"}
            anchor={"quantum-electrodynamics"}
        />

        <BookTile
            title={"Reality is Not What It Seems"}
            author={"Carlo Rovelli"}
            synopsis={
                <>
                    <u>Reality is Not What It Seems</u> is an exploration of the theory of <i>Loop Quantum Gravity</i>{" "}
                    and of its millennia-long origin story. Rovelli, a renowned theoretical physicist, makes the
                    decision to start this book not with his own theory, but with the very origins of western scientific
                    thought in pre-Socratic ancient Greece. Beginning with Anaximander and his assertions that the
                    natural world is governed by discoverable laws rather than by personified gods, to Democritus and
                    his atomic theory and the indivisibility of matter at its smallest levels.
                    <p>
                        Leaping forward to the renaissance, the author highlights Galileo and his studies of how matter
                        on Earth moves and accelerates, along with Copernicus and Kepler and their calculations and laws
                        on how bodies move in the heavens. On to Newton, and his realization that the same laws that
                        Galileo used to describe objects on Earth could be used to describe the objects of the heavens
                        just as Copernicus and Kepler had done. His synthesis of these ideas went on to serve as the
                        groundwork of physics until the nineteenth century.
                    </p>
                    <p>
                        While Newton was able to describe how objects were influenced under gravity, his theories lacked
                        sufficient descriptions of electricity and magnetism. Realizing this, Faraday began work on
                        using field lines to intuitively describe these forces. Made concrete with the equations of
                        Maxwell, the world was now able to model two of the yet-to-be-known four fundamental forces.
                    </p>
                    <p>
                        With the world seemingly close to a complete set of theories of the universe, in steps Einstein
                        in 1905. Building on Maxwell's equations for electromagnetism and some intuitions from Galileo,
                        he realized two fundamental truths: the laws of physics were identical in any inertial reference
                        frame and that the speed of light in a vacuum was the same for any observer. These observations
                        also reveal something surprising that Newton's laws could not explain: the equivalence between
                        energy and matter. Ten years later, he went on to further show that matter and energy can warp
                        and distort spacetime, incompatible with the flat environment assumed by Newtonian mechanics.
                    </p>
                    <p>
                        The next step on the journey to <i>Loop Quantum Gravity</i> came a further ten years later with
                        rapid advances in quantum mechanics. Building on the quantization ideas of Planck at the turn of
                        the century, Bohr, Dirac, Schrödinger, and Heisenberg helped to paint a world that diverged
                        further from Newton's theories. Their equations described a world where matter has no
                        well-defined position or momentum, could disappear and reappear in a different location, could
                        only hold certain masses and energies, and could be in multiple places at once. After further
                        evolutions into quantum field theory and the standard model, this is where the frontiers of
                        physics have remained for nearly a century.
                    </p>
                    <p>
                        At this point, the work of Rovelli himself, along with his contemporaries, emerges. They,
                        however, face a challenge. The smooth, continuous, and curved spacetime of general relativity
                        seems incompatible with the disjoint, discrete, and flat observations of quantum theory.{" "}
                        <i>Loop Quantum Gravity</i> is a theory designed to bridge this gap. Rovelli and colleagues
                        assert that space itself is quantized, defined by an enumerable, yet finite, amount of quantum
                        loops and spin networks. While this neatly solves many of the singularities within relativity
                        and quantum mechanics, it has some alien implications. Chief among these is that the "arrow of
                        time" that we experience at a macroscopic level is merely an emergent construct, rather than a
                        fundamental attribute of the universe.
                    </p>
                </>
            }
            thoughts={
                <>
                    Rovelli's work offers an in-depth and well-written explanation of both the current state of
                    theoretical physics, from his point of view, and the long scientific journey that was needed to
                    arrive there. This also highlights several scientists and philosophers that are less widely known,
                    but still serve as integral foundations to those who came after. Anaximander encouraged people to
                    seek evidence-based explanations for phenomena instead of relying solely on superstition. Democritus
                    gave rise to atomism and the indivisibility of matter at its smallest levels, which Einstein
                    demonstrated through Brownian motion, and serves as the basis for Loop theory's quantization of
                    spacetime. His approach helps to form a coherent narrative and give readers a clearer picture of how
                    we evolved from understanding very little about natural phenomena to peering into the fundamental
                    inner workings of the universe.
                </>
            }
            thumbnail={"/media/image/reality-is-not-what-it-seems.jpg"}
            anchor={"not-what-it-seems"}
        />

        <BookTile
            title={"The Little Book of String Theory"}
            author={"Steven Gubser"}
            synopsis={
                <>
                    <u>The Little Book of String Theory</u> offers a short, accessible, and entertaining introduction to
                    one of the most talked-about areas of physics today. String theory has been called the "theory of
                    everything". It seeks to describe all the fundamental forces of nature. It encompasses gravity and
                    quantum mechanics in one unifying theory. But it is unproven and fraught with controversy. After
                    reading this book, you’ll be able to draw your own conclusions about string theory.{" "}
                    <i>
                        Source:{" "}
                        <Link
                            href={`https://press.princeton.edu/books/hardcover/9780691142890/the-little-book-of-string-theory`}
                            target="_blank">
                            {
                                new URL(
                                    `https://press.princeton.edu/books/hardcover/9780691142890/the-little-book-of-string-theory`
                                ).hostname
                            }
                        </Link>
                    </i>
                </>
            }
            thoughts={
                <>
                    Similarly to <u>QED</u>, this served as my first semi-serious introduction to <i>String Theory</i>.
                    Gubser manages to fit an impressive amount of information into this relatively short book. From the
                    strings themselves to D-branes, M-theory, and Supersymmetry, the book is able to convey the basic
                    concepts behind these theories through the usage of diagrams and how they may help to explain
                    real-world phenomena.
                    <p>
                        One of the most interesting portions for me was the last chapter of the book. Here, he explains
                        how the addition of a fifth dimension can help to explain the behavior of quark-gluon plasma
                        after being created by the collision of heavy gold nuclei. It stood out to me primarily because
                        it was able to take an observed phenomenon that could already be described in terms of quantum
                        field theory, and re-frame it using string theory.
                    </p>
                </>
            }
            thumbnail={"/media/image/the-little-book-of-string-theory.jpg"}
            anchor={"string-theory"}
        />

        <BookTile
            title={"The Order of Time"}
            author={"Carlo Rovelli"}
            synopsis={
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
            }
            thoughts={
                <>
                    Rovelli manages to cover an impressive amount of theory and conjecture within just over 200 pages.
                    As a part of his discussion on the breakdown of <i>classical</i> time, the book explains how special
                    relativity reveals the lack of a universal ground truth for time. He also describes one's{" "}
                    <i>local time</i> as a member of a partially ordered set. In other words, the times experienced by
                    two observers can only be compared after they causally interact with each other. Otherwise, such a
                    measurement is meaningless. In the second part of the book, Rovelli describes how quantum
                    interactions do not need to be governed by some local time value; rather they are only determined by
                    other quantum events, the ordering of which is often asymmetric. This creates a sort of web of
                    quantum events that evolve with respect to other events, rather than the passage of time.
                    <p>
                        These ideas work to void the idea of a rigid <i>Block Universe</i> where the entire universe can
                        be resolved to a single state at every given instant. In such a universe all past states are
                        both fully resolved and static. To me, this idea seemed quite sensible until I read Rovelli's
                        well-crafted arguments as to why it does not fit with our current theories. The book also argues
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
            }
            thumbnail={"/media/image/the-order-of-time.jpg"}
            anchor={"order-of-time"}
        />
    </>
);
