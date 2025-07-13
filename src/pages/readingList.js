import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { PageInfo, PageLink, SectionTile, Tile } from "@/lib/pageBuilder";
import cogSciBooks from "@/lib/readingList/cogSciBooks";
import futurismBooks from "@/lib/readingList/futurismBooks";
import historyBooks from "@/lib/readingList/historyBooks";
import philosophyBooks from "@/lib/readingList/philosophyBooks";
import physicsBooks from "@/lib/readingList/physicsBooks";
import scifiBooks from "@/lib/readingList/scifiBooks";
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
    let tiles = [
        new Tile(
            <h2>What is All This?</h2>,
            (
                <>
                    Below is a collection of books I have read and would recommend to others. The following may be
                    useful for gaining foundational knowledge in the field of AI and the Cognitive Sciences, may have
                    had a significant impact on my own world model, or I may just find them interesting. Some of these
                    have also been personally recommended to me by colleagues and mentors. Through this collection, I
                    hope to provide some insight into my field of study and my own personal interests.
                </>
            )
        ),
        new SectionTile(<>Artificial Intelligence and Cognitive Science</>, sections.cogSci),
        ...cogSciBooks,

        new SectionTile(<>History and Historical Fiction</>, sections.history),
        ...historyBooks,
        new SectionTile(<>Science Fiction</>, sections.scifi),
        ...scifiBooks,

        new SectionTile(<>Physics</>, sections.physics),
        ...physicsBooks,

        new SectionTile(<>Philosophy</>, sections.philosophy),
        ...philosophyBooks,

        new SectionTile(<>Futurism</>, sections.futurism),
        ...futurismBooks
    ];
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

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
