import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"The Order of Time"}
        author={"Carlo Rovelli"}
        synopsis={
            <>
                <i>The Order of Time</i> explores the nature of time and its relationship to the universe. Within its
                pages, Rovelli argues that time is not a fundamental aspect of the universe, but rather an emergent
                consequence of the most basic properties of the universe. The book is broken into three parts: "The
                Crumbling of Time", "The World Without Time", and "The Sources of Time". The first part explores the
                most basic attributes of time and how, when you look closely at our best theories of the universe, they
                begin to break down. The second part explores how the most fundamental theories of the universe,
                especially quantum mechanics, do not require a privileged 'time' variable to function. The final part
                explores how our apparent experience of time emerges from a blurred perception of irreversible
                processes.
            </>
        }
        thoughts={
            <>
                Rovelli manages to cover an impressive amount of theory and conjecture within just over 200 pages. As a
                part of his discussion on the breakdown of <i>classical</i> time, the book explains how special
                relativity reveals the lack of a universal ground truth for time. He also describes one's{" "}
                <i>local time</i> as a member of a partially ordered set. In other words, the times experienced by two
                observers can only be compared after they causally interact with each other. Otherwise, such a
                measurement is meaningless. In the second part of the book, Rovelli describes how quantum interactions
                do not need to be governed by some local time value; rather they are only determined by other quantum
                events, the ordering of which is often asymmetric. This creates a sort of web of quantum events that
                evolve with respect to other events, rather than the passage of time.
                <p>
                    These ideas work to void the idea of a rigid <i>Block Universe</i> where the entire universe can be
                    resolved to a single state at every given instant. In such a universe all past states are both fully
                    resolved and static. To me, this idea seemed quite sensible until I read Rovelli's well-crafted
                    arguments as to why it does not fit with our current theories. The book also argues quite
                    convincingly in favor of <i>loop quantum gravity</i>, a theory which Rovelli himself is a pioneer
                    of. I have also noticed that the notions presented within this book seem (in a very rough sense)
                    compatible with Stephen Wolfram's conjectures on{" "}
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
);
