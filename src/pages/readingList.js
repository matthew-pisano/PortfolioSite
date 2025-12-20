import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import cogSciBooks from "@/components/readingList/cogSciBooks";
import futurismBooks from "@/components/readingList/futurismBooks";
import historyBooks from "@/components/readingList/historyBooks";
import philosophyBooks from "@/components/readingList/philosophyBooks";
import physicsBooks from "@/components/readingList/physicsBooks";
import scifiBooks from "@/components/readingList/scifiBooks";
import { SectionTile, Tile } from "@/components/Tiles";
import { PageInfo, PageLink, TileInfo } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function ReadingList() {
    let sections = {
        cogSci: "ai-cog-sci",
        history: "history",
        scifi: "sci-fi",
        physics: "physics",
        philosophy: "philosophy",
        futurism: "futurism"
    };
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Reading List",
        "A series of books that I have read and recommend",
        { backgroundColor: PageColor.SINGULARITY_BLUE },
        [],
        [
            new PageLink(`/readingList#${sections.cogSci}`, "AI & Cognitive Science"),
            new PageLink(`/readingList#${sections.history}`, "History and Historical Fiction"),
            new PageLink(`/readingList#${sections.scifi}`, "Science Fiction"),
            new PageLink(`/readingList#${sections.physics}`, "Physics"),
            new PageLink(`/readingList#${sections.philosophy}`, "Philosophy"),
            new PageLink(`/readingList#${sections.futurism}`, "Futurism")
        ]
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile
                tileInfo={
                    new TileInfo({ title: <h2>What is All This?</h2>, thumbnail: "/media/image/bookshelf.webp" })
                }>
                <p>
                    Below is a collection of books I have read and would recommend to others. The following may be
                    useful for gaining foundational knowledge in the field of AI and the Cognitive Sciences, may have
                    had a significant impact on my own world model, or I may just have found them interesting. Some of
                    these have also been personally recommended to me by colleagues and mentors. Through this
                    collection, I hope to provide some insight into my field of study and my own personal interests.
                </p>
                <p>
                    Each book contains two sections: a summary and my own personal thoughts/analysis. Some of these
                    summaries are quite verbose, but I tried to include the minimum information needed for someone
                    unfamiliar with the work to understand my thoughts well. Outside of the summaries, the second
                    sections contain my own thoughts and opinions about the book, along with analysis that I think would
                    be helpful for a reader to grasp the main ideas without fully reading the book itself. For the works
                    of fiction here, I do not deliberately include spoilers, but I also do not avoid them when they are
                    important for understanding underlying themes. Proceed with caution in this respect.
                </p>
                <p>
                    Disclaimer: much of what I write about here involves AI in some manner. I believe current generative
                    models have a time and a place to be useful, but a replacement for the creative process is neither.
                    Therefore all of the following is hand-written (typed?) by me. It is reasonable to assume that you
                    are here to hear my genuine thoughts on these books, so that is what I will provide. To me, the
                    occasional typo or awkward prose is preferable to text that is not of my own design. To err is to be
                    human and perhaps that is preferable in a world of generated content. I encourage you to read on,
                    perhaps what follows will provide some useful insights or interesting ideas.
                </p>
            </Tile>
            <SectionTile
                tileInfo={
                    new TileInfo({ title: <>Artificial Intelligence and Cognitive Science</>, anchor: sections.cogSci })
                }
            />
            {/*{cogSciBooks}*/}
            <SectionTile
                tileInfo={new TileInfo({ title: <>History and Historical Fiction</>, anchor: sections.history })}
            />
            {/*{historyBooks}*/}
            <SectionTile tileInfo={new TileInfo({ title: <>Science Fiction</>, anchor: sections.scifi })} />
            {/*{scifiBooks}*/}
            <SectionTile tileInfo={new TileInfo({ title: <>Physics</>, anchor: sections.physics })} />
            {/*{physicsBooks}*/}
            <SectionTile tileInfo={new TileInfo({ title: <>Philosophy</>, anchor: sections.philosophy })} />
            {philosophyBooks}
            <SectionTile tileInfo={new TileInfo({ title: <>Futurism</>, anchor: sections.futurism })} />
            {/*{futurismBooks}*/}
        </DefaultWrapper>
    );
}
