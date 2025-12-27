import React from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";
import { redact } from "@/lib/util/utils";

export default (
    <BookTile
        title={"There is No Antimemetics Division"}
        author={"qntm (Sam Hughes)"}
        synopsis={
            <>
                <i>There is No Antimemetics Division</i> follows Marion Wheeler, the head of the titular
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
        }
        thoughts={
            <>
                This book heavily relies upon the concept of <i>antimemes</i>. To the uninitiated, this can be a rather
                alien concept, even though it is still quite grounded in reality. Whereas <i>memes</i> (yes, those too)
                are ideas which can multiply and spread rapidly, almost virulently at times, through a population,{" "}
                <i>antimemes</i> are ideas which cannot be spread. Some cannot be remembered by those who perceive them,
                some cannot be perceived at all, and yet others can 'eat' the memories of anyone who is aware of it. In
                the SCP universe, these effects can be at least somewhat remedied by a class of drug known as{" "}
                <i>mnestics</i>, which makes it more difficult for the user to forget and more adept at perceiving these
                SCPs. Others in the story, like the character Adam, have a sort of natural 'immunity' to these
                antimemes, at least the weaker ones. In the story, SCP-3125 is a {redact(40)}. It is able to{" "}
                <i>
                    <b>[DATA EXPUNGED]</b>
                </i>
                . <i>What was I saying again?</i>
                <p>
                    <i>There is No Antimemetics Division</i> makes brilliant use of these themes of memory,
                    forgetfulness, and how the human brain is shockingly good at filling in the gaps (even those of
                    immense scale). Multiple characters throughout the story are made to forget too much that they have
                    to rebuild their very personality from scratch over the following months or weeks (so common, in
                    fact, that those within the division treat it as an almost mundane occurrence). While antimemes this
                    powerful are thankfully fictional, there are real people with physical or cognitive injuries whose
                    experiences align surprisingly well with the antimemetic objects of the story. This also helps
                    readers to get a more concrete understanding of how the human brain copes with such maladies. For
                    example, those with <i>scotomas</i> are unable to perceive objects within certain regions of their
                    POV. In these cases, the brain 'stitches' the edges together to maintain a continuous visual field,
                    completely absent of objects that may be right in front of that individual. Disorders such as{" "}
                    <i>agnosia</i>, resulting in the inability to perceive certain stimuli, or{" "}
                    <i>retrograde or anterograde amnesia</i>, which render someone unable to remember past or present
                    events, usually as a result of a TBI event. This story is an excellent example of how fiction can be
                    effectively utilized to give the reader a more complete understanding of the human condition.
                </p>
            </>
        }
        thumbnail={"/media/image/there-is-no-antimemetics-division.jpg"}
        anchor={"antimemetics"}
    />
);
