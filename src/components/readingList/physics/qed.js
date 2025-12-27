import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"QED: The Strange Theory of Light and Matter"}
        author={"Richard Feynman"}
        synopsis={
            <>
                <i>QED: The Strange Theory of Light and Matter</i> is an adaptation of four lectures given by Richard
                Feynman at UCLA. Designed for readers without an in-depth knowledge in the field of{" "}
                <i>quantum electrodynamics</i>, the book is able to effectively convey the complex notions of the theory
                while remaining understandable to general audiences. Feynman uses analogies, diagrams, and his
                well-known <i>Feynman diagrams</i> to describe this subset of quantum field theory in terms that anyone
                can understand.
            </>
        }
        thoughts={
            <>
                This book served as my first (informal) introduction to QED, specifically, and even QFT in general. His
                analogies and examples, such as the connection he makes between photons reflecting off of a glass
                surface and quantum indeterminism, help to frame the notoriously abstract concepts of the quantum realm
                in more familiar terms.
                <p>
                    I especially enjoy how the book is structured. It follows a clear progression from that high-level
                    example to the more complex reality of wave-particle duality and virtual photons. I also found the
                    logic behind his Feynman diagrams interesting and how they can represent the infinite possibilities
                    of particle interactions within a series of simple lines.
                </p>
            </>
        }
        thumbnail={"/media/image/qed.jpg"}
        anchor={"quantum-electrodynamics"}
    />
);
