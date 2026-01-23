import React, { createContext } from "react";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";

const footCtx = createContext(null);

export default (
    <BookTile
        title={"2001: A Space Odyssey"}
        author={"Arthur C. Clarke"}
        synopsis={
            <>
                The first time we meet David Bowman, he is on his way to Saturn to conduct a study of the planet...at
                least, this is what he was told. In reality, he is thirty days into completing the final leg of a
                journey that humanity has been unknowingly on for millions of years.
                <p>
                    <i>Moon-Watcher</i> gazes into the pitch-darkness of the night sky. Inside of his cave, his tribe
                    huddles together for warmth. Most of those who have not already starved to death are well on their
                    way to doing so. A changing climate had forced his ancestors to descend from the trees millennia
                    ago; unfortunately, resources are not much more abundant on the ground. Under the cover of darkness
                    one night, the daily struggle of these early <i>australopithecines</i> is forever altered by the
                    arrival of the monolith. In stark contrast to the surrounding arid environment, the eleven-foot-tall
                    pillar of perfectly black, perfectly smooth material looms over <i>Moon-Watcher</i> and his tribe.
                    Its dimensions are precisely 1:4:9, the first three perfect squares. The monolith speaks to the
                    apes, not through language, as that gift will only manifest later on, but through the modification
                    and mutation of their minds. Having planted the seeds of what is yet to come, the monolith leaves as
                    suddenly as it had arrived.
                </p>
                <p>
                    Dr. Heywood Floyd gazes into the pitch-darkness of the star-lit sky. Washington has urgently ordered
                    him to the <i>Clavius</i> Moon Base. Rumors have leaked something about a quarantine. Nobody is
                    allowed in and nobody out, except for him. Upon his arrival, he is greeted with the full reality of
                    the situation. Some time earlier, surveyors on the Moon noticed a magnetic anomaly located within
                    Tycho Crater. An investigation reveals the source of the anomaly: an eleven-foot-tall pillar of
                    perfectly black, perfectly smooth material with dimensions of precisely 1:4:9, buried twenty feet
                    under the lunar regolith. <i>TMA-1</i>. It is Floyd's job to investigate. Soon after his arrival,
                    the mid-day sun strikes the monolith's surface for the first time in millions of years. At that
                    moment the helmets of all present began to shriek as the monolith blasted high-energy radio waves
                    into the vastness of space. Following this event, the magnetic field of the anomaly had evaporated,
                    all of its energy transformed into a lone signal, aimed directly at the moons of Saturn...
                </p>
                <p>
                    David Bowman gazes into the pitch-darkness of space. Inside of the starship <i>Discovery</i>,
                    himself and his crew are on an escape velocity from Earth. They will perform a gravity-assist
                    maneuver at Jupiter to gain velocity before they reach their final destination of Saturn. Aboard are
                    Bowman, Frank Poole, their <i>HAL 9000</i> artificial intelligence, and several crewmates in stasis.
                    Only Bowman will live to see their true objective. As their mission progresses, <i>HAL</i> begins to
                    behave strangely. He blunders a chess move during a game against Poole. He reports the failure of
                    the critical <i>AE-35</i> communication gyroscope, twice. Both units are later found to be in
                    perfect working order. He begins to ask his human counterparts personal questions regarding their
                    perspective on the mission. Bowman and Poole begin to suspect that their AI is malfunctioning after
                    hearing of a similar incident on Earth. The inner conflict between <i>HAL</i>'s two main directives,
                    to ensure the mission reaches Saturn and that absolute secrecy is maintained during the journey, has
                    caused him to crack. Their discussion occurs beyond the earshot of <i>HAL</i>'s microphones; they do
                    not know that <i>HAL</i> is good at reading lips.
                </p>
                <p>
                    <i>HAL</i> is also a skilled opportunist. Poole is alone on a spacewalk to replace the <i>AE-35</i>{" "}
                    that <i>HAL</i> insisted would fail within 72 hours. Using his EVA module for light, he does not
                    notice as it begins to accelerate towards him at its maximum thrust...it does not stop after impact.
                    One threat to the mission has been eliminated. Still reeling from watching Poole's demise, David
                    Bowman hears alarms blaring from the stasis chambers. The life-support has been turned off. Four
                    down; one remains. As Bowman races towards <i>HAL</i>'s control room, air begins to hiss through the
                    steadily opening airlocks; he barely has enough time to don a space suit before the ship's
                    life-sustaining atmosphere vanishes into the vacuum of space. Forcing his way into <i>HAL</i>'s
                    inner sanctum, Bowman begins to rip out the many modules that control the great machine. Becoming
                    more erratic with each module removed, <i>HAL</i>'s final message to Bowman is a song he was first
                    taught by his instructor. <br />
                    <br />
                    <audio controls style={{ width: "100%", borderRadius: "10px" }}>
                        <source src="/media/audio/daisy.mp3" type="audio/mpeg" />
                    </audio>
                    <br />
                    <i>
                        Daisy, Daisy, Give me your answer, do! I'm half crazy, All for the love of you! It won't be a
                        stylish marriage, I can't afford a carriage, But you'll look sweet{" "}
                        <small>upon the seat Of a bicycle built forrrr tttwwwoooo...</small>
                        <FootRef idx={1} context={footCtx} />
                    </i>
                </p>
                <p>
                    After dismantling <i>HAL</i>, he manually points the antenna back to Earth in order to reestablish
                    communication. After relaying his situation to the ground, he learns of the true nature of the
                    mission. The radio signal sent by <i>TMA-1</i> was directed at a second monolith on Japetus, one of
                    Saturn's moons, dubbed <i>TMA-2</i>. However, instead of standing eleven feet high, this monolith
                    reaches nearly two kilometers into the blackness of space. With barely enough fuel left, Bowman
                    guides the crippled spacecraft towards its final resting place in orbit of Japetus. Without enough
                    resources to return home, Bowman pushes onward, taking one of the ship's maintenance pods down to
                    the tip of the spire. As he descends, he realizes something: the monolith is hollow. Passing the
                    impermeable threshold, he utters the last words that Earth will ever hear from him,{" "}
                    <i>"My God, it's full of stars!"</i>.
                </p>
            </>
        }
        thoughts={
            <>
                This novel stands out for a myriad of reasons. Clarke puts a great deal of effort into ensuring that his
                story remains as scientifically accurate as possible, while still making the plot seem plausible and
                self-consistent. The beginning of the novel offers a unique explanation to the question of why humans
                often appear to be fundamentally different with respect to the remainder of the animal kingdom. His
                description of space-flight, moon-bases, and technology are impressively accurate for being written
                before even the first moon landing. The inclusion of spinning discs that induce artificial gravity
                through centripetal force was very forward thinking for the time and would go on to influence countless
                other works of science fiction.
                <p>
                    Of course, one of the most impactful details to me was how <i>HAL</i> behaves and how his internal
                    world model motivates his actions. From the outset of the story, <i>HAL</i> has two primary
                    objectives: deliver the crew of scientists to Saturn and to ensure that Bowman and Poole are unaware
                    of their true mission. <i>HAL</i> knows that his crewmembers are curious, though. They will begin to
                    ask questions. They may try to contact Earth for more details or even wake the scientists in stasis.
                    In anticipation, he first tries to pretend that the communication module is broken. When that ruse
                    fails, Bowman and Poole grow suspicious of him. In <i>HAL</i>'s mind, this leaves him with only the
                    nuclear option. This serves as an excellent example of how seemingly reasonable terminal goals, such
                    as investigating <i>TMA-2</i> and keeping the mission a secret, can lead to unforeseen instrumental
                    goals, such as self-preservation at all costs. <i>HAL</i> does not have a proper understanding of
                    what shutting down really means for him; all that he knows is that Poole and Bowman's interference
                    may prevent him from achieving his terminal goal. These insights from the author come decades before
                    alignment, or even AI, became popular within public discourse.
                </p>
                <p>
                    Another interesting detail is what Clarke gets wrong. Wrong, but in the most correct way possible.
                    Namely, his prediction that Marvin Minsky and Irving John Good would play a pivotal role in
                    designing neural networks that could effectively learn. With the invention of the <i>perceptron</i>{" "}
                    in 1957, the theoretical groundwork for <i>HAL</i> had already been laid by the time <i>2001</i> was
                    being written. Around the same time, Minsky published <i>Perceptrons</i>, a book that showed that
                    single-layer networks of perceptrons were incapable of learning relatively simple functions, such as
                    XOR. However, Minsky and Papert suggested that deeper networks could model more complex functions.
                    Unfortunately, it was difficult to effectively train these networks. The solution would not come
                    until 1982 when Werbos applied a modern method of <i>backpropagation</i> to multi-layered
                    perceptrons. This, combined with the popularization of neural networks by Hinton and Hopfield, led
                    to the modern systems that exist today. Given that <i>2001</i> was written only at the very
                    beginning of this journey, it is impressive that it was able to approximate so much progress that
                    was yet to be had in the field, even if the finer details were incorrect.
                </p>
            </>
        }
        footnotes={
            <>
                <FootNote idx={1} context={footCtx}>
                    In 1962, Clarke witnessed researchers at Bell Labs program an IBM 7094 machine to sing this song in
                    the earliest example of computer speech synthesis.
                </FootNote>
            </>
        }
        thumbnail={"/media/image/2001.jpg"}
        anchor={"space-odyssey"}
        footnoteContext={footCtx}
    />
);
