import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";
import { redact } from "@/lib/util/utils";
import styles from "@/styles/pageTiles.module.css";

function house() {
    return <span style={{ color: "CornflowerBlue" }}>house</span>;
}

function House() {
    return <span style={{ color: "CornflowerBlue" }}>House</span>;
}

function minotaur() {
    return <s style={{ color: "FireBrick" }}>Minotaur</s>;
}

export default (
    <BookTile
        title={"House of Leaves"}
        author={"Mark Z. Danielewski"}
        synopsis={
            <>
                Unlike the other entries in this list, <i>{House()} of Leaves</i> is not simply a book. Rather, it is a
                series of notes written while editing a literary analysis of a documentary about a {house()} that does
                not exist. A {house()} that is bigger on the <big>inside</big> than <small>out</small>. It is found
                footage in literary form. In addition to Danielewski himself, this book has two additional authors:
                Johnny Truant, the "top-level" author of the notes, and Zampanò, the author of the original literary
                analysis.
                <p>
                    The main "story" is written from the point of view of Johnny as he journals the changes in his life
                    after his friend, Lude, leads him to the apartment of the now deceased Zampanò. After entering the
                    dark and sealed-off apartment of the eighty-something-year-old blind man, the two men discover heaps
                    upon heaps of disorganized papers, a series of mysterious gouge marks in the splintered wooden
                    floor, and a large chest that contains the second layer of the story.
                </p>
                <p>
                    In the years that preceded his death, Zampanò wrote, or more accurately dictated, a highly detailed
                    and academic analysis of a film that neither Johnny (nor anyone he could find) had ever heard of,{" "}
                    <i>The Navidson Record</i>. The film, more akin to a curated home movie than something produced by a
                    studio, is centered on William "Navy" Navidson, the Pulitzer Prize-winning photographer that nobody
                    in Johnny's world can seem to recall. As a part of an effort to document his move from New York City
                    to Virginia, William sets up a series of <i>Sony Hi-8</i> cameras around the {house()} to record his
                    adjustment, along with his partner, Karen, and his two children, Chad and Daisy.
                </p>
                <p>
                    The relative peace experienced by Navidson and family is interrupted when one day a doorway appears
                    in their bedroom where they could have sworn a blank wall was before. The door now connects their
                    bedroom to that of the children through a short, black, featureless corridor. Puzzled, William
                    decides to utilize this new connection to measure his {house()} from wall to wall. Disturbingly, he
                    measures the inside of his {house()} to be 1/4" of an inch larger than the outside. Determined to
                    eliminate this obvious measurement error, he calls upon his brother Tom and later his friend Billy
                    Reston of the University of Virginia. They soon discover that the inside is not 1/4" larger, but
                    5/16"! The minor puzzlement over the anomaly turns to serious concern when a book falls through a
                    foot-long gap in Karen's (formerly) wall-to-wall bookshelf.
                </p>
                <p>
                    <span
                        style={{
                            display: "block",
                            textAlign: "center",
                            width: "80%",
                            margin: "auto",
                            borderStyle: "solid",
                            borderColor: "CornflowerBlue"
                        }}>
                        Already on edge, any remaining normality in their {house()} is shattered as the two parents
                        listen to their children play downstairs. Their laughter grows quieter until it begins to{" "}
                        <i>echo</i>, something that could not possibly occur within the confines of the home. In the
                        living room, the two discover another door, this time placed on the inside of an exterior wall.
                        Beyond its threshold, a hundred-foot-long hallway of the same black material extends into a
                        space that could not possibly exist. From the outside, the space that should be occupied by the
                        hallway instead contains an ordinary patch of yard. After recovering the children and despite
                        Karen's protests, William ventures inside. Here, he nearly looses himself in the absolute
                        darkness and shifting geometry of a space far too large to exist
                        <FootRef idx={1} />. All the while hearing a dull, ominous growl emanating from the maze.
                    </span>
                </p>
                <p>
                    Sensing more help was needed, Reston calls upon renowned adventurer Holloway Roberts to lead a small
                    team of explorers, with the goal of mapping out the more static features of the <i>labyrinth</i>.
                    After the initial maze that Navidson narrowly escaped from, the space opens up into a room that is
                    hundreds of feet long, tall, and wide. This further expands into a far larger room of indeterminate
                    dimensionality. In its center, the Holloway expedition discovers an enormous, descending spiral
                    staircase. After several hours of descending in the frigid atmosphere of the staircase, they retreat
                    back to the {house()}. Unsatisfied, the team takes a week to prepare for the much more ambitious{" "}
                    <i>Exploration #4</i>. Soon after entering {redact(10)} they hear {redact(7)} growl.
                    {redact(70)} after several days {redact(24)} Holloway chambers a round and {redact(143)} huddled
                    together in a {redact(10)} waiting for rescue. {redact(74)} beast {redact(123)} {minotaur()}{" "}
                    {redact(300)} consumed by the madness of the inky blackness, Holloway {redact(200)} evacuated from
                    the {house()}
                    <FootRef idx={2} />.
                </p>
                <p style={{ textAlign: "center" }}>
                    <i>
                        <b>[ 3 pages lost ]</b>
                    </i>
                </p>
                <p>
                    Throughout the story, we witness Johnny Truant's deteriorating mental health in the footnotes he
                    leaves periodically throughout the text. As he ventures deeper into Zampanò's work, he becomes more
                    and more isolated and cares less and less about anything other than organizing the scattered notes
                    found in that old chest. When we last meet him at the end, his teeth have begun to decay, he has
                    found scratch marks on his body that he cannot recall getting, and his sense of time has all but
                    vanished, to the point where he can black out for weeks at a time. The first edition of the book
                    leaves off with Johnny traveling to Virginia himself to look for the {house()} that has consumed all
                    of his waking (and indeed resting) hours. The second edition picks up {redact(256)} his fate.
                </p>
            </>
        }
        thoughts={
            <>
                <i>{House()} of Leaves</i> may be one of the most uniquely written (and certainly typeset) books that I
                have ever read. The most striking aspect of Danielewski's writing is his ability to enhance the pacing
                and tone of the story...
                <span style={{ display: "block" }}>with...</span>
                <span style={{ display: "block", textAlign: "center" }}>the...</span>
                <span style={{ display: "block", textAlign: "right" }}>text...</span>
                itself.{" "}
                <span style={{ display: "block" }} className={styles.mirrored}>
                    Text can even appear as mirrored, depending on the context.
                </span>{" "}
                I find this to be a great example of visual storytelling in a novel that primarily consists of text.
                <p>
                    The story of <i>{House()} of Leaves</i> is also deepened through the use of extensive world
                    building. Throughout his analysis, Zampanò demonstrates that he inhabits a world just as real as our
                    own. The text is littered with footnotes
                    <FootRef idx={3} /> from various detailed academic sources, articles, commentaries, and interviews
                    surrounding the fictional Navidson documentary. In this world, seemingly dozens of works have been
                    created with the sole purpose of analyzing the plot, cinematography, framing, dialogue, etc. of the
                    film, with many more making passing references to it. Each reference has a unique title and authors.
                    It is not difficult for the reader to imagine a world where this film commands the same cultural
                    impact as <i>Inception</i> or <i>The Blair Witch Project</i>. There is even an in-universe debate as
                    to whether the film itself is a work of clever editing or rock-solid evidence of the breakdown of
                    the fundamental laws of reality. Zampanò even presents examples of calculations that demonstrate
                    that it would have been completely implausible for Navidson to fake the events of the film
                    <FootRef idx={4} />, despite the outright impossibility of its content. I find it particularly
                    amusing that many are convinced Navidson's {house()} truly does contain a gaping hole in the very
                    fabric of reality, yet most references to his film are discussions of cinematography and Navidson's
                    own editing.
                </p>
                <p>
                    The text also makes several references to real-life figures. At one point, Karen submits a draft
                    version of <i>The Navidson Record</i> to several scientists, writers, and filmmakers. This
                    assortment of sources even includes Douglas Hofstadter who, in true Hofstadterian fashion,
                    immediately relates the content of the film to his friends Mr. Tortoise and Achilles
                    <FootRef idx={5} />, to my great delight.
                </p>
            </>
        }
        footnotes={
            <>
                <FootNote idx={1} style={{ fontFamily: "verdana" }}>
                    A rigorous analysis of the geometry of this space would make <i>Postulate 5</i> look like a primary
                    school assignment.
                </FootNote>
                <FootNote idx={2}>
                    Portions of the <i>Holloway Tape</i>, as it had come to be known, leaked online before the entire
                    film's official release, prompting much speculation from the community.
                </FootNote>
                <FootNote idx={3}>
                    And footnotes of footnotes
                    <FootRef idx={6} />.
                </FootNote>
                <FootNote idx={4}>
                    This goes doubly so for the deaths and injuries that occurred within the {house()}.
                </FootNote>
                <FootNote idx={5}>
                    See{" "}
                    <Link href="https://matthewpisano.com/readingList#geb-egb">
                        Gödel, Escher, Bach: An Eternal Golden Braid
                    </Link>
                    .
                </FootNote>
                <FootNote idx={6}>And even one level deeper at times.</FootNote>
            </>
        }
        thumbnail={"/media/image/house-of-leaves.jpg"}
        anchor={"house-of-leaves"}
    />
);
