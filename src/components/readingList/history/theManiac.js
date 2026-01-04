import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"The Maniac"}
        author={"Benjamín Labatut"}
        synopsis={
            <>
                <i>The Maniac</i> is a fictionalized biography of polymath John von Neumann. It primarily explores von
                Neumann's life and accomplishments through a series of envisioned interviews with those he interacted
                with. The book's prelude follows Paul Ehrenfest as he grapples with the crumbling foundations of physics
                and mathematics that began to buckle under the weight of the quantum revolution and the theory of
                relativity. The book then transitions to von Neumann's life, his work on the Manhattan Project, and his
                contributions to game theory and computer science. The concluding chapters concentrate on Demis Hassabis
                and his work on AlphaGo, a computer program that defeated the world Go champion.
            </>
        }
        thoughts={
            <>
                In this book, Labatut effectively employs fictionalized interactions and interviews to instill a sense
                of awe within the reader and contextualize historical events with a sense of gravity that traditional
                history books may struggle to convey. Much of the book takes place during the 1920s and 1930s. These
                chapters explore how some of Europe's most brilliant minds coped with existential threats to the
                established order of science and mathematics in the forms of quantum mechanics, relativity, and Gödel's
                incompleteness theorems. For some, this is compounded by the rapid rise of the Nazis, anti-semitism, and
                distrust in the sciences on the continent. In later chapters, Labatut details the Manhattan Project and
                the sense of awful wonder that nuclear weapons imparted upon their creators. Many of the minds that the
                book follows finally break under the strain of their environment or as a consequence of their own
                creations.
                <p>
                    While the finer details of the book are not strictly based on historical evidence, reading{" "}
                    <i>The Maniac</i> has changed how I think about inspiration, ideation, and invention. It also
                    instills a sense of reverence for the geniuses who pioneered many of the ideas that underpin the
                    modern understanding of computing, artificial intelligence, and game theory. It also gave me a much
                    better understanding of John von Neumann, as his achievements are often less emphasized than those
                    from Turing or Gödel during undergraduate education.
                </p>
            </>
        }
        thumbnail={"/media/image/the-maniac.jpg"}
        anchor={"maniac"}
    />
);
