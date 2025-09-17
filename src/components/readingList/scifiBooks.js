import React from "react";

import Link from "next/link";

import { BookTile } from "@/lib/pageBuilder";

export default [
    new BookTile(
        <>2001: A Space Odyssey</>,
        "Arthur C. Clarke",
        (
            <>
                <u>2001: A Space Odyssey</u> is a science fiction novel that follows humanity's fleeting, yet impactful,
                encounters with a mysterious alien civilization. After the discovery of an alien monolith on the Moon, a
                crew of astronauts is sent to Jupiter to investigate a similar monolith. The novel explores themes of
                artificial intelligence, extraterrestrial life, and the nature of consciousness.
            </>
        ),
        ``,
        (
            <>
                This novel was notable to me for a myriad of reasons. Clarke puts a great deal of effort into ensuring
                that his story remains as scientifically accurate as possible, while still making the plot seem
                plausible and self-consistent. The beginning of the novel offers a unique explanation to the question of
                why humans often appear to be fundamentally different with respect to the remainder of the animal
                kingdom. His description of space-flight, moon-bases, and technology are impressively accurate for being
                written before even the first moon landing.
                <p>
                    Of course, one of the most impactful details to me was how <i>HAL</i> behaves and how his internal
                    world model motivates his actions. He (it?) serves as an excellent example of how seemingly virtuous
                    terminal goals, such as investigating <i>TMA-2</i>, can lead to unforeseen instrumental goals, such
                    as self-preservation at all costs, as <i>HAL</i> does not have a real understanding about what
                    shutting down will really mean for him. All of this comes decades before alignment, or even AI,
                    became popular within public discourse.
                </p>
                <p>
                    Another interesting detail is what Clarke gets wrong. Namely, his prediction that Marvin Minsky and
                    Irving John Good would play a pivotal role in designing neural networks that could effectively
                    learn. While this exact sequence of events did not play out in reality, it is closely reflected in
                    the real achievements of the two scientists and thw AI boom of the 1980s.
                </p>
            </>
        ),
        "/media/image/2001.jpg",
        "space-odyssey"
    ),
    new BookTile(
        <>Do Androids Dream of Electric Sheep?</>,
        "Philip K. Dick",
        (
            <>
                <u>Do Androids Dream of Electric Sheep?</u> explores themes of humanity, empathy, and the nature of
                consciousness set in a post-apocalyptic world after most humans have fled to off-world colonies. Amid
                this bleak landscape, Dick examines what it means to be human and the ethics of artificial life. The
                novel follows Rick Deckard, a bounty hunter tasked with "retiring" rogue androids, and John Isidore, a
                man of limited intelligence due to radiation exposure who empathizes with the fugitive androids.
            </>
        ),
        ``,
        (
            <>
                One of the most striking aspects of this book is how Dick describes his androids, specifically the
                Nexus-6 models. Instead of being sentient machines made of circuit boards and metal substructures, they
                are much more like artificial, biological humans. This further strengthens the book's central moral
                conflict concerning the difference between humans and these 'andys'. In addition to behaving like humans
                outwardly, they also poses similar biology to humans internally.
                <p>
                    This blurred distinction between humans and androids in the book is increasingly becoming applicable
                    to the ethics of real-world artificial intelligences. While I do not foresee the development
                    biological humanoid assistants, the book remains relevant to how we interact with our increasingly
                    intelligent and embodied assistants. This progression too is addressed within the book as Rick
                    Deckard describes how he becomes more empathetic to the more advanced androids that he is tasked
                    with retiring. With his story, Dick asks us where the line between ourselves and our creations lies;
                    this is a question we should begin to ask ourselves as AI research continues to advance.
                </p>
            </>
        ),
        "/media/image/do-androids-dream-of-electric-sheep.jpg",
        "electric-sheep"
    ),
    new BookTile(
        <>There is No Antimemetics Division</>,
        "qntm (Sam Hughes)",
        (
            <>
                <u>There is No Antimemetics Division</u> follows Marion Wheeler, the head of the titular
                <i>Antimemetics Division</i> within the{" "}
                <Link href="https://scp-wiki.wikidot.com/" target="_blank">
                    SCP Foundation
                </Link>{" "}
                as she slowly realizes that her reality is under threat by an entity designated by the foundation as
                SCP-3125. The book reads as a collection of short stories, revolving around a small group of characters
                as they combat SCP-3125 and other antimemetic threats. These entities primarily interact with the world
                of SCP through memory and psychological attacks, destroying the memories of the people it targets,
                making itself impossible for humans to perceive, or revealing something that is so utterly
                incomprehensible that even experienced foundationers are neutralized on the spot. Despite the SCP
                foundation's nearly limitless resources, its members are still human, (nearly) defenseless by their very
                nature. The story asks a central question, the answer to which is the only way SCP-3125 can be dealt
                with effectively: How can you combat something which you don't even remember the existence of?
            </>
        ),
        ``,
        (
            <>
                This book heavily relies upon the concept of <i>antimemes</i>. To the uninitiated, this can be a rather
                alien concept, even though it is still quite grounded in reality. Whereas <i>memes</i> (yes, those too)
                are ideas which can multiply and spread rapidly, almost virulently at times, through a population,{" "}
                <i>antimemes</i> are ideas which cannot be spread. Some cannot be remembered by those who perceive it,
                some cannot be perceived at all, and yet others can 'eat' the memories of anyone that is aware of it. In
                the SCP universe, these effects can be at least somewhat remedied by a class of drug known as{" "}
                <i>mnestics</i> which make it more difficult for the user to forget and more adept at perceiving these
                SCPs. Others in the story, like the character Adam, have a sort of natural 'immunity' to these
                antimemes, at least the weaker ones. I the story, SCP-3125 is a
                <span style={{ color: "black" }}>
                    ██████ ██ ██████████ ███ ███████ ███ ████ █████ ████████ ██ █████████ ███ ██████ ██████ ████████ ███
                    ███████ ███ ███████████ ███████ ███ ████████ ██ ██
                </span>
                . It is able to{" "}
                <i>
                    <b>[DATA EXPUNGED]</b>
                </i>
                . <i>What was I saying again?</i>
                <p>
                    <u>There is No Antimemetics Division</u> makes brilliant use of these themes of memory,
                    forgetfulness, and how the human brain is shockingly good at filling in the gaps (even those of
                    immense scale). Multiple characters throughout the story are made to forget to much that they have
                    to rebuild their very personality from scratch over the following months of weeks (so common, in
                    fact, that those within the division treat it as an almost mundane occurrence). While antimemes this
                    powerful are thankfully fictional, there are real people with physical or cognitive injuries whose
                    experiences align surprisingly well with the antimemetic objects of the story. This also helps
                    readers to get a more concrete understanding of how the human brain copes with such maladies. For
                    example, those with <i>scotomas</i> are unable to perceive objects within certain regions of their
                    POV. In these cases, the brain 'stitches' the edges together to maintain a continuous visual field,
                    completley absent of objects that may be right in front of that individual. Disorders such as{" "}
                    <i>agnosia</i>, resulting in the inability to perceive certain stimuli, or{" "}
                    <i>retrograde or anterograde amnesia</i>, which render someone unable to remember past or present
                    events, usually as a result of a TBI event. This story is an excellent example of how fiction can be
                    effectively utilized to give the reader a more complete understanding of the human condition.
                </p>
            </>
        ),
        "/media/image/there-is-no-antimemetics-division.jpg",
        "antimemetics"
    )
];
