import React from "react";

import Link from "next/link";

import { BookTile } from "@/lib/pageBuilder";

export default [
    new BookTile(
        <>The Inevitable: Understanding the 12 technological forces that will shape our future</>,
        "Kevin Kelly",
        (
            <>
                <u>The Inevitable: Understanding the 12 technological forces that will shape our future</u> asserts that
                much of what will happen in the next thirty years is inevitable, driven by technological trends that are
                already in motion. In this book, Kevin Kelly provides an optimistic roadmap for the future, showing how
                the coming changes in our lives—from virtual reality in the home to an on-demand economy to artificial
                intelligence embedded in everything we manufacture—can be understood as the result of a few long-term,
                accelerating forces. These larger forces will revolutionize the way we buy, work, learn, and communicate
                with each other. Kelly's bright, hopeful book will be indispensable to anyone who seeks guidance on
                where their business, industry, or life is heading—what to invent, where to work, what to invest in, how
                to better reach customers, and what to begin to put into place as this new world emerges.{" "}
                <i>
                    Source:{" "}
                    <Link
                        href={`https://www.amazon.com/Inevitable-Understanding-Technological-Forces-Future/dp/0143110373`}
                        target="_blank">
                        {
                            new URL(
                                `https://www.amazon.com/Inevitable-Understanding-Technological-Forces-Future/dp/0143110373`
                            ).hostname
                        }
                    </Link>
                </i>
            </>
        ),
        (
            <>
                I first read this book when it originally came out. At that point, it was uncertain whether any of
                Kelly's predictions would materialize. Looking back nearly ten years after publication, his theories
                have proven remarkably prescient. Out of his twelve points (Becoming, Cognifying, Flowing, Screening,
                Accessing, Sharing, Filtering, Remixing, Interacting, Tracking, Questioning, Beginning), I found his
                observations on Becoming, Cognifying, and Accessing the most relevant. In short, these points describe a
                world where information is increasingly streamed and subscribed to, with an emphasis on cloud-based AI
                models. Even back in 2017, these ideas struck me as things to watch for in the future.
                <p>
                    Reading this book helped shape my attitude on the future of technological progress and societal
                    trends. Kelly's optimism remains contagious, even in the face of powerful click-through algorithms
                    and the decreasing emphasis on digital ownership.
                </p>
            </>
        ),
        <></>,
        "/media/image/the-inevitable.jpg",
        "inevitable"
    ),
    new BookTile(
        <>Physics of the Impossible</>,
        "Michio Kaku",
        (
            <>
                <u>Physics of the Impossible</u> analyzes the feasibility and hypothetical scientific basis for many
                fantastical, and not-so-fantastical, science fiction technologies. From phasers to force-fields and from
                teleportation to time travel, Kaku explores some real-world analogues that approximate the form and
                function of these fictional concepts. Along the way, the book also explains the real science behind each
                of the theoretical concepts he presents.
            </>
        ),
        (
            <>
                While many of the technologies discussed in the book may well be impossible, I found it especially
                interesting how several could either be loosely tied back to real scientific theories or were actually
                possible with modern technology, albeit in a modified form. One section I found most interesting covered
                psychokinesis and how Kaku explored ways it might be implemented through brain-computer interfaces
                rather than reality-warping abilities.
            </>
        ),
        <></>,
        "/media/image/physics-of-the-impossible.jpg",
        "physics-impossible"
    )
];
