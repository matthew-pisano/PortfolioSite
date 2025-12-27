import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Reality is Not What It Seems"}
        author={"Carlo Rovelli"}
        synopsis={
            <>
                <i>Reality is Not What It Seems</i> is an exploration of the theory of <i>Loop Quantum Gravity</i> and
                of its millennia-long origin story. Rovelli, a renowned theoretical physicist, makes the decision to
                start this book not with his own theory, but with the very origins of western scientific thought in
                pre-Socratic ancient Greece. Beginning with Anaximander and his assertions that the natural world is
                governed by discoverable laws rather than by personified gods, to Democritus and his atomic theory and
                the indivisibility of matter at its smallest levels.
                <p>
                    Leaping forward to the renaissance, the author highlights Galileo and his studies of how matter on
                    Earth moves and accelerates, along with Copernicus and Kepler and their calculations and laws on how
                    bodies move in the heavens. On to Newton, and his realization that the same laws that Galileo used
                    to describe objects on Earth could be used to describe the objects of the heavens just as Copernicus
                    and Kepler had done. His synthesis of these ideas went on to serve as the groundwork of physics
                    until the nineteenth century.
                </p>
                <p>
                    While Newton was able to describe how objects were influenced under gravity, his theories lacked
                    sufficient descriptions of electricity and magnetism. Realizing this, Faraday began work on using
                    field lines to intuitively describe these forces. Made concrete with the equations of Maxwell, the
                    world was now able to model two of the yet-to-be-known four fundamental forces.
                </p>
                <p>
                    With the world seemingly close to a complete set of theories of the universe, in steps Einstein in
                    1905. Building on Maxwell's equations for electromagnetism and some intuitions from Galileo, he
                    realized two fundamental truths: the laws of physics were identical in any inertial reference frame
                    and that the speed of light in a vacuum was the same for any observer. These observations also
                    reveal something surprising that Newton's laws could not explain: the equivalence between energy and
                    matter. Ten years later, he went on to further show that matter and energy can warp and distort
                    spacetime, incompatible with the flat environment assumed by Newtonian mechanics.
                </p>
                <p>
                    The next step on the journey to <i>Loop Quantum Gravity</i> came a further ten years later with
                    rapid advances in quantum mechanics. Building on the quantization ideas of Planck at the turn of the
                    century, Bohr, Dirac, Schrödinger, and Heisenberg helped to paint a world that diverged further from
                    Newton's theories. Their equations described a world where matter has no well-defined position or
                    momentum, could disappear and reappear in a different location, could only hold certain masses and
                    energies, and could be in multiple places at once. After further evolutions into quantum field
                    theory and the standard model, this is where the frontiers of physics have remained for nearly a
                    century.
                </p>
                <p>
                    At this point, the work of Rovelli himself, along with his contemporaries, emerges. They, however,
                    face a challenge. The smooth, continuous, and curved spacetime of general relativity seems
                    incompatible with the disjoint, discrete, and flat observations of quantum theory.{" "}
                    <i>Loop Quantum Gravity</i> is a theory designed to bridge this gap. Rovelli and colleagues assert
                    that space itself is quantized, defined by an enumerable, yet finite, amount of quantum loops and
                    spin networks. While this neatly solves many of the singularities within relativity and quantum
                    mechanics, it has some alien implications. Chief among these is that the "arrow of time" that we
                    experience at a macroscopic level is merely an emergent construct, rather than a fundamental
                    attribute of the universe.
                </p>
            </>
        }
        thoughts={
            <>
                Rovelli's work offers an in-depth and well-written explanation of both the current state of theoretical
                physics, from his point of view, and the long scientific journey that was needed to arrive there. This
                also highlights several scientists and philosophers that are less widely known, but still serve as
                integral foundations to those who came after. Anaximander encouraged people to seek evidence-based
                explanations for phenomena instead of relying solely on superstition. Democritus gave rise to atomism
                and the indivisibility of matter at its smallest levels, which Einstein demonstrated through Brownian
                motion, and serves as the basis for Loop theory's quantization of spacetime. His approach helps to form
                a coherent narrative and give readers a clearer picture of how we evolved from understanding very little
                about natural phenomena to peering into the fundamental inner workings of the universe.
            </>
        }
        thumbnail={"/media/image/reality-is-not-what-it-seems.jpg"}
        anchor={"not-what-it-seems"}
    />
);
