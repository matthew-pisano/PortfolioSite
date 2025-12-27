import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"The Little Book of String Theory"}
        author={"Steven Gubser"}
        synopsis={
            <>
                <i>The Little Book of String Theory</i> offers a short, accessible, and entertaining introduction to one
                of the most talked-about areas of physics today. String theory has been called the "theory of
                everything". It seeks to describe all the fundamental forces of nature. It encompasses gravity and
                quantum mechanics in one unifying theory. But it is unproven and fraught with controversy. After reading
                this book, you’ll be able to draw your own conclusions about string theory.{" "}
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
                Similarly to <i>QED</i>, this served as my first semi-serious introduction to <i>String Theory</i>.
                Gubser manages to fit an impressive amount of information into this relatively short book. From the
                strings themselves to D-branes, M-theory, and Supersymmetry, the book is able to convey the basic
                concepts behind these theories through the usage of diagrams and how they may help to explain real-world
                phenomena.
                <p>
                    One of the most interesting portions for me was the last chapter of the book. Here, he explains how
                    the addition of a fifth dimension can help to explain the behavior of quark-gluon plasma after being
                    created by the collision of heavy gold nuclei. It stood out to me primarily because it was able to
                    take an observed phenomenon that could already be described in terms of quantum field theory, and
                    re-frame it using string theory.
                </p>
            </>
        }
        thumbnail={"/media/image/the-little-book-of-string-theory.jpg"}
        anchor={"string-theory"}
    />
);
