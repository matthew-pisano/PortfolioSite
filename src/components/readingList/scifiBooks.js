import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";
import { redact } from "@/lib/utils";
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

/**
 * An element styled to look like handwritten ink
 * @param children The text elements to be styled
 * @param The style to apply
 * @returns {JSX.Element} The ink element
 * @constructor
 */
function Ink({ style, children }) {
    return (
        <span className={styles.inkWriting} style={style}>
            {children}
        </span>
    );
}
Ink.propTypes = { style: PropTypes.object, children: PropTypes.node.isRequired };

export default (
    <>
        <BookTile
            title={"House of Leaves"}
            author={"Mark Z. Danielewski"}
            synopsis={
                <>
                    Unlike the other entries in this list, <u>{House()} of Leaves</u> is not simply a book. Rather, it
                    is a series of notes written while editing a literary analysis of a documentary about a {house()}{" "}
                    that does not exist. A {house()} that is bigger on the <big>inside</big> than <small>out</small>. It
                    is found footage in literary form. In addition to Danielewski himself, this book has two additional
                    authors: Johnny Truant, the "top-level" author of the notes, and Zampanò, the author of the original
                    literary analysis.
                    <p>
                        The main "story" is written from the point of view of Johnny as he journals the changes in his
                        life after his friend, Lude, leads him to the apartment of the now deceased Zampanò. After
                        entering the dark and sealed-off apartment of the eighty-something-year-old blind man, the two
                        men discover heaps upon heaps of disorganized papers, a series of mysterious gouge marks in the
                        splintered wooden floor, and a large chest that contains the second layer of the story.
                    </p>
                    <p>
                        In the years that preceded his death, Zampanò wrote, or more accurately dictated, a highly
                        detailed and academic analysis of a film that neither Johnny (nor anyone he could find) had ever
                        heard of, <i>The Navidson Record</i>. The film, more akin to a curated home movie than something
                        produced by a studio, is centered on William "Navy" Navidson, the Pulitzer Prize-winning
                        photographer that nobody in Johnny's world can seem to recall. As a part of an effort to
                        document his move from New York City to Virginia, William sets up a series of <i>Sony Hi-8</i>{" "}
                        cameras around the {house()} to record his adjustment, along with his partner, Karen, and his
                        two children, Chad and Daisy.
                    </p>
                    <p>
                        The relative peace experienced by Navidson and family is interrupted when one day a doorway
                        appears in their bedroom where they could have sworn a blank wall was before. The door now
                        connects their bedroom to that of the children through a short, black, featureless corridor.
                        Puzzled, William decides to utilize this new connection to measure his {house()} from wall to
                        wall. Disturbingly, he measures the inside of his {house()} to be 1/4" of an inch larger than
                        the outside. Determined to eliminate this obvious measurement error, he calls upon his brother
                        Tom and later his friend Billy Reston of the University of Virginia. They soon discover that the
                        inside is not 1/4" larger, but 5/16"! The minor puzzlement over the anomaly turns to serious
                        concern when a book falls through a foot-long gap in Karen's (formerly) wall-to-wall bookshelf.
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
                            living room, the two discover another door, this time placed on the inside of an exterior
                            wall. Beyond its threshold, a hundred-foot-long hallway of the same black material extends
                            into a space that could not possibly exist. From the outside, the space that should be
                            occupied by the hallway instead contains an ordinary patch of yard. After recovering the
                            children and despite Karen's protests, William ventures inside. Here, he nearly looses
                            himself in the absolute darkness and shifting geometry of a space far too large to exist
                            {<FootRef idx={1} anchor={`house-of-leaves`} />}. All the while hearing a dull, ominous
                            growl emanating from the maze.
                        </span>
                    </p>
                    <p>
                        Sensing more help was needed, Reston calls upon renowned adventurer Holloway Roberts to lead a
                        small team of explorers, with the goal of mapping out the more static features of the{" "}
                        <i>labyrinth</i>. After the initial maze that Navidson narrowly escaped from, the space opens up
                        into a room that is hundreds of feet long, tall, and wide. This further expands into a far
                        larger room of indeterminate dimensionality. In its center, the Holloway expedition discovers an
                        enormous, descending spiral staircase. After several hours of descending in the frigid
                        atmosphere of the staircase, they retreat back to the {house()}. Unsatisfied, the team takes a
                        week to prepare for the much more ambitious <i>Exploration #4</i>. Soon after entering{" "}
                        {redact(10)} they hear {redact(7)} growl.
                        {redact(70)} after several days {redact(24)} Holloway chambers a round and {redact(143)} huddled
                        together in a {redact(10)} waiting for rescue. {redact(74)} beast {redact(123)} {minotaur()}{" "}
                        {redact(300)} consumed by the madness of the inky blackness, Holloway {redact(200)} evacuated
                        from the {house()}
                        {<FootRef idx={2} anchor={`house-of-leaves`} />}.
                    </p>
                    <p style={{ textAlign: "center" }}>
                        <i>
                            <b>[ 3 pages lost ]</b>
                        </i>
                    </p>
                    <p>
                        Throughout the story, we witness Johnny Truant's deteriorating mental health in the footnotes he
                        leaves periodically throughout the text. As he ventures deeper into Zampanò's work, he becomes
                        more and more isolated and cares less and less about anything other than organizing the
                        scattered notes found in that old chest. When we last meet him at the end, his teeth have begun
                        to decay, he has found scratch marks on his body that he cannot recall getting, and his sense of
                        time has all but vanished, to the point where he can black out for weeks at a time. The first
                        edition of the book leaves off with Johnny traveling to Virginia himself to look for the{" "}
                        {house()} that has consumed all of his waking (and indeed resting) hours. The second edition
                        picks up {redact(256)} his fate.
                    </p>
                </>
            }
            thoughts={
                <>
                    <u>{House()} of Leaves</u> may be one of the most uniquely written (and certainly typeset) books
                    that I have ever read. The most striking aspect of Danielewski's writing is his ability to enhance
                    the pacing and tone of the story...
                    <span style={{ display: "block" }}>with...</span>
                    <span style={{ display: "block", textAlign: "center" }}>the...</span>
                    <span style={{ display: "block", textAlign: "right" }}>text...</span>
                    itself.{" "}
                    <span style={{ display: "block" }} className={styles.mirrored}>
                        Text can even appear as mirrored, depending on the context.
                    </span>{" "}
                    I find this to be a great example of visual storytelling in a novel that primarily consists of text.
                    <p>
                        The story of <u>{House()} of Leaves</u> is also deepened through the use of extensive world
                        building. Throughout his analysis, Zampanò demonstrates that he inhabits a world just as real as
                        our own. The text is littered with footnotes{<FootRef idx={3} anchor={`house-of-leaves`} />}{" "}
                        from various detailed academic sources, articles, commentaries, and interviews surrounding the
                        fictional Navidson documentary. In this world, seemingly dozens of works have been created with
                        the sole purpose of analyzing the plot, cinematography, framing, dialogue, etc. of the film,
                        with many more making passing references to it. Each reference has a unique title and authors.
                        It is not difficult for the reader to imagine a world where this film commands the same cultural
                        impact as <i>Inception</i> or <i>The Blair Witch Project</i>. There is even an in-universe
                        debate as to whether the film itself is a work of clever editing or rock-solid evidence of the
                        breakdown of the fundamental laws of reality. Zampanò even presents examples of calculations
                        that demonstrate that it would have been completely implausible for Navidson to fake the events
                        of the film
                        {<FootRef idx={4} anchor={`house-of-leaves`} />}, despite the outright impossibility of its
                        content. I find it particularly amusing that many are convinced Navidson's
                        {house()} truly does contain a gaping hole in the very fabric of reality, yet most references to
                        his film are discussions of cinematography and Navidson's own editing.
                    </p>
                    <p>
                        The text also makes several references to real-life figures. At one point, Karen submits a draft
                        version of <i>The Navidson Record</i> to several scientists, writers, and filmmakers. This
                        assortment of sources even includes Douglas Hofstadter who, in true Hofstadterian fashion,
                        immediately relates the content of the film to his friends Mr. Tortoise and Achilles
                        {<FootRef idx={5} anchor={`house-of-leaves`} />}, to my great delight.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`house-of-leaves`} style={{ fontFamily: "verdana" }}>
                        A rigorous analysis of the geometry of this space would make <i>Postulate 5</i> look like a
                        primary school assignment.
                    </FootNote>
                    <FootNote idx={2} anchor={`house-of-leaves`}>
                        Portions of the <i>Holloway Tape</i>, as it had come to be known, leaked online before the
                        entire film's official release, prompting much speculation from the community.
                    </FootNote>
                    <FootNote idx={3} anchor={`house-of-leaves`}>
                        And footnotes of footnotes{<FootRef idx={6} anchor={`house-of-leaves`} />}.
                    </FootNote>
                    <FootNote idx={4} anchor={`house-of-leaves`}>
                        This goes doubly so for the deaths and injuries that occurred within the {house()}.
                    </FootNote>
                    <FootNote idx={5} anchor={`house-of-leaves`}>
                        See{" "}
                        <Link href="https://matthewpisano.com/readingList#geb-egb">
                            Gödel, Escher, Bach: An Eternal Golden Braid
                        </Link>
                        .
                    </FootNote>
                    <FootNote idx={6} anchor={`house-of-leaves`}>
                        And even one level deeper at times.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/house-of-leaves.jpg"}
            anchor={"house-of-leaves"}
        />

        <BookTile
            title={"Brave New World"}
            author={"Aldous Huxley"}
            synopsis={
                <>
                    <i>Brave New World</i> is a book that describes a perfect utopia. Free from nearly all disease, old
                    age, social strife, and the very notion of discomfort itself! The world government has been keeping
                    everything running smoothly for hundreds of years. Alphas, Betas, Gammas, Deltas, and even the lowly
                    Epsilons leave their <i>Hatching and Conditioning</i> centers and live lives of idyllic{" "}
                    <i>Community, Identity, and Stability</i> (and a healthy amount of consumption) thanks to the world
                    state's stewardship and the help of a little <i>soma</i>. Nothing could be closer to the platonic
                    ideal of a perfect society. At least...that's what anyone who lived there would tell you...
                    <p>
                        Huxley opens the book by introducing us to the Director of London's own H&C facility as he gives
                        a group of Alpha students a tour of the squat, grey, and clinical facility. Beginning in the
                        fertilizing room, he exposits, in a cold and clinical fashion, how male and female gametes grown
                        in their lab, fertilized, and cloned through the revolutionary process of{" "}
                        <i>bokanovskification</i>. A single egg can be cloned up to ninety-five times to create classes
                        of perfectly uniform workers! Alpha and Beta eggs do not undergo this process, as you
                        understand, and are bred one-to-one from their original eggs. Onto the social predestination
                        room, next. By now, each zygote is transferred into the saline solution of an individual test
                        tube. Each is catalogued by the Predestinators and used to inform the nature of the next batch
                        ordered for fertilization. They are next down to the embryo store. As the test tubes slowly
                        creep through the red darkness, along the conveyor belt, they will receive regular chemical
                        adjustments from the resident beta workers to help form them into their final castes.
                    </p>
                    <span
                        className={styles.linedPaper}
                        style={{
                            display: "block",
                            width: "90%",
                            margin: "auto"
                        }}>
                        <span>
                            <br />
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <b>Embryo Development Log</b>
                        </span>
                        <span>
                            <br />
                        </span>
                        <span>ID #45997/Ε</span>
                        <span>Batch ID #638/Ε</span>
                        <span>Batch Class - Epsilon (Ε)</span>
                        <span>
                            Batch Handler - <Ink>Lenina Crowne</Ink>
                        </span>
                        <span>Fertilization Date - Mar. 11</span>
                        <span>Freemartin - NO</span>
                        <span>
                            Sex: <Ink>〇</Ink>
                        </span>
                        <span>
                            <br />
                        </span>
                        <span>
                            <b>—— Every 12 Metres ——</b>
                        </span>
                        <span>
                            |<Ink>42 </Ink>| <i>Corpus Luteum</i> extract injections
                        </span>
                        <span>
                            <b>
                                —— Every 24 Metres after Metre 212 <i>FREEMARTINS ONLY</i> ——
                            </b>
                        </span>
                        <span>
                            |<Ink>N/A</Ink>| Testosterone and DHT courses{" "}
                            <Ink>test says female, should stay fertile</Ink>
                        </span>
                        <span>
                            <b>—— Every 7 and 8 Metres ——</b>
                        </span>
                        <span>
                            |<Ink>63 </Ink>| Decanting preparation treatment
                        </span>
                        <span>
                            <br />
                        </span>
                        <span>
                            <b>—— Metre 0 ——</b>
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Peritoneum attachment
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Blood surrogate infusion
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Placentin and Thyroxin treatment
                        </span>
                        <span>
                            <b>—— Metre 112 ——</b>
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Maternal circulation pump installed
                        </span>
                        <span>
                            <b>—— Metre 150 TROPICAL ONLY ——</b>
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            |<Ink>N/A</Ink>| Typhoid Inoculation
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            |<Ink>N/A</Ink>| Sleeping Sickness Inoculation
                        </span>
                        <span>
                            <b>—— Metre 170 TROPICAL ONLY ——</b>
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            |<Ink>N/A</Ink>| Bottling
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            |<Ink>N/A</Ink>| X-Ray Bombardment
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            |<Ink>N/A</Ink>| Heat Conditioning
                        </span>
                        <span>
                            <b>—— Metre 212 ——</b>
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Sex Identification <Ink>DNA test said female</Ink>
                        </span>
                        <span>
                            <b>
                                —— Metre 320 <i>EPSILONS ONLY</i> ——
                            </b>
                        </span>
                        <span>
                            |<Ink> ✓ </Ink>| Alcohol Injection <Ink>not sure, given twice to make sure</Ink>
                        </span>
                        <span>
                            |<Ink>.72</Ink>| Oxygen deprivation (fill current level of normal)
                        </span>
                        <span>
                            <b>—— Metre 1100 ALPHA ——</b>
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            | | Intellectual Conditioning
                        </span>
                        <span>
                            <b>—— Metre 1100 AEROSPACE ONLY ——</b>
                        </span>
                        <span style={{ textDecoration: "line-through", textDecorationColor: "#6786d3" }}>
                            | | Rotational conditioning
                        </span>
                        <span>
                            <b>—— Metre 2040 ——</b>
                        </span>
                        <span>
                            | | Pituitary course <i>I</i>
                        </span>
                        <span>
                            <b>—— Metre 2072 ——</b>
                        </span>
                        <span>
                            | | Pituitary course <i>II</i>
                        </span>
                        <span>
                            <b>—— Metre 2104 ——</b>
                        </span>
                        <span>
                            | | Pituitary course <i>III</i>
                        </span>
                        <span>
                            <br />
                        </span>
                        <span>
                            <b>—— Supervisor Notes ——</b>
                        </span>
                        <span>
                            <Ink style={{ color: "#967fea" }}>
                                Lenina, I will not tolerate any more mistakes with the alcohol injections. Accidentally
                                giving an epsilon a double dose is acceptable, but think of the consequences if you
                                confuse an Alpha for one and give a dose! I acknowledge that Edith is older, but you
                                must not follow her example; she has made that mistake once already. There is a reason
                                why the D.H.C. sent her to the Falklands.
                            </Ink>
                        </span>
                        <span>
                            <br />
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <i>LONDON HATCHING & CONDITIONING CENTRE</i>
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <i>"Community, Identity, and Stability"</i>
                        </span>
                        <span>
                            <br />
                        </span>
                    </span>
                    <p>
                        Two hundred sixty-seven days and two-thousand one-hundred thirty-six meters later, they will be{" "}
                        <i>decanted</i> and the newborns sent off for social conditioning.
                    </p>
                    <p>
                        Social conditioning begins soon after birth. During the day, they are taught lessons in work
                        ethic, material consumption, and social hierarchy. At night, speakers under their pillows
                        whisper messages that subconsciously condition them to love their work and caste, hate the other
                        castes, to always be happy, ensure a healthy amount of material consumption, and to take their{" "}
                        <i>soma</i> in cases of discomfort. Through a monologue from World Controller of Western Europe,
                        Mustapha Mond, the students learn about the foundational principles of their society. Every
                        aspect of it is carefully designed and planned. Everyone is guaranteed to do the job that they
                        were decanted to do. Everyone loves their work and their place in the social strata; that is
                        what they were bred to do. Everything from the tunics that they wear, to the food that they eat,
                        to the <i>soma</i> rations that they take, are carefully designed to fit everyone and their
                        caste. In this world, there is no cause for discontent if entertainment is endless, no cause for
                        strife if everyone looks the same, no need for resentment if everyone feels they are right where
                        they belong, no need for discomfort when <i>soma</i> can take it away, no need for discontent
                        when there are no books to spark it. There is only <i>Community, Identity, and Stability</i> the
                        world over.
                    </p>
                    <p>
                        After meeting the students on their facility tour, Lenina Crowne, a beta worker in the embryo
                        storage, gossips with her friend Fanny Crowne{<FootRef idx={1} anchor={`brave-new-world`} />}.
                        The topic of conversation shifts to her apparent obsession with D.H.C assistant Henry Foster;
                        she has been seeing him for four entire months without tying someone else. Absolutely unheard
                        of. Lenina yields, admitting that she somewhat fancies Bernard Marx, a strange,
                        shorter-than-average, Alpha, sleep-learning specialist at the Hatchery and Conditioning Center.
                        Bernard overhears this conversation. Privately, he disdains the notion of passing lovers around
                        like portions of meat. He is an outsider, technically an Alpha by caste and ability, but his
                        stature is stunted and causes him to look more like an Epsilon than an Alpha, something he
                        deeply resents. Cruel rumours often spread about alcohol accidentally being injected into his
                        bottle as a fetus.
                    </p>
                    <p>
                        Some time later, Lenina meets Bernard on the roof of the complex. After expressing her interest
                        in him, Bernard asks for her to accompany him to the Savage reservation in New Mexico. She
                        reluctantly agrees. Excited by the prospect of the inflated social reputation that a partner
                        would bring, he shares the news with Helmholtz Watson, a friend of his. Watson is the perfect
                        image of an Alpha male: physically fit, skilled at his job, and highly intelligent, perhaps a
                        little too intelligent for his work writing new hypnopaedic phrases for the children. In the
                        following days, Bernard asks the Director for permission to visit the reservation. The Director
                        hesitantly agrees as he relays a story about one of his own visits, twenty years ago, where he
                        lost a partner to the savages during a storm. Before embarking towards the reservation,
                        Helmholtz informs Bernard that the director has grown weary of his unorthodox opinions and is
                        planning to send Bernard to Iceland after his return. He is disturbed by this information, but
                        decides to press on with Lenina to the reservation.
                    </p>
                    <p>
                        The transition from their clean, sterile, and controlled lives, to the dirty, diseased, and
                        disorganized reservation is not easy on Bernard and Lenina. The savages here practice strange
                        customs, a mix of Native American folklore and old American Christianity. A far cry from their
                        noble and orderly worship of his Fordship, Henry Ford. People grow old here, gnarled by the
                        stressors of age and disease. Back in England, people present as perfectly healthy their entire
                        lives until neurodegenerative diseases take them at around sixty. Worst of all, reproduction on
                        the reservation still occurs...naturally, with babies being <i>born</i> to actual human m*thers.
                        A deeply unsettling notion, to be sure. At the savages' village, they meet John, who looks
                        different from the others. Fair-skinned and learned, he is often ostracized from the other
                        youths. He tells them that he is the son of Linda, a woman the villagers rescued twenty years
                        ago. It has been a long time since Bernard was this excited. He offers to take John back to his
                        home, the "brave new world", but insists that Linda <i>must</i> come as well. John, excited by
                        the prospect and enamoured by Lenina, agrees.
                    </p>
                    <p>
                        Back in London, the Director awaits Bernard's return so he can publicly exile him to Iceland for
                        his strange behavior. As Bernard meets him in front of the crowd, he can barely contain his
                        elation. Soon after the director makes his decree, Bernard asks both John and Linda to come
                        forward. They rush toward the director, expecting a warm welcome from their father/partner.
                        Instead, the Director recoils at the sight, along with his audience. You see, impregnating a
                        woman "naturally" is social suicide here. In this respect, the Director has been dead for twenty
                        years; it just took a while for anyone to realize. Soon after running out of the room, the
                        Director resigns in disgrace. To Bernard, revenge had never been so sweet.
                    </p>
                    <p>
                        Now in London, John becomes a spectacle and Bernard becomes his liaison. Members of high society
                        are excited to learn more about how the filthy savages live on their reservation. As much as
                        they are curious about him, John is disgusted by them. The breeding factories, the pills, the
                        polygamy, the consumption, the castes — it is all too much for him. Looking to cash in on his
                        newfound fame, Bernard hosts lavish parties and sleeps with many women. His peers still dislike
                        him, but they will tolerate him as long as it means seeing the savage. After much anticipation,
                        Bernard organizes a grand event to introduce John to his fair-weather friends; realizing that he
                        is more of an attraction than a guest, John refuses to show. The charade collapses on top of
                        Bernard; the familiar, insidious rumours begin anew.
                    </p>
                    <p>
                        After John and Lenina have a violent falling out due to her (in John's eyes) promiscuous
                        behavior, he learns that Linda is in the hospital. With her mind stupefied from <i>soma</i>{" "}
                        abuse upon her return, Linda lies barely conscious in her bed. Already dealing with grief,
                        anger, and confusion, John is interrupted by a group of young Delta clones on their regular
                        death conditioning visit to the hospital. Never seeing a woman so disfigured and overweight, the
                        children clamour over to her, gawking at her appearance. This enrages John, who, after angrily
                        throwing off the children, makes his way to the hospital entrance. A shift change is happening
                        and the egressing Delta workers are being given their daily <i>soma</i> ration. John hates the
                        drug, he hates what it has done to Linda and he hates what it has done to these people. In a
                        frenzy, he grabs the distribution box and begins throwing the pills out of the window. Eager to
                        get their only daily source of happiness, a riot erupts. Hearing of the riot, Bernard and
                        Helmholtz arrive to help. Helmholtz excitedly joins the act of rebellion while Bernard meekly
                        stands out of the way. All three are then apprehended by police.
                    </p>
                    <p>
                        With the three sitting in front of World Controller Mustapha Mond, Bernard feverishly insists
                        that it was the fault of the other two. He had nothing to do with it! Ignoring Bernard's
                        meltdown, Mond has a discussion with John and the much more composed Helmholtz. He informs them
                        that Bernard and Helmholtz will be sent to an island where they cannot cause another disruption.
                        Bernard is inconsolable, Helmholtz looks forward to having some good motivation to write.
                        Helmholtz carries his shell-shocked friend from the room, leaving John along with Mond. They
                        debate on the ethics of their society; Mond asserts that their control is needed for their
                        safety, John counters that no life is worth living under that level of control. John chooses to
                        self-isolate in the countryside.
                    </p>
                    <p>
                        After buying some supplies, some seeds, equipment, and a length of rope, John makes an abandoned
                        lighthouse his new home. He aims to lead a new life without the corrupting influence of the
                        modern world. He is successful in this respect...at least until the tourists begin to arrive. A
                        savage living alone as a hermit just outside of London? The residents of the city could hardly
                        imagine a more entertaining sight! They flock to his abode in the tens, then dozens, then
                        hundreds. They call for him to do some of his many "tricks" and rituals for them, on command.
                        Angered by this treatment more befitting of a circus animal than a man, John heads inside until
                        they become bored and leave for the night. The following morning, word spreads further of the
                        spectacle at the lighthouse. Hundreds more helicopters whiz over the horizon, eager to be
                        entertained. As they arrive, the door is left ajar. Before anyone can enter, the rope snaps
                        taut. The show is over.
                    </p>
                </>
            }
            thoughts={
                <>
                    There is quite a lot to say about <i>Brave New World</i>. One of its standout qualities is its world
                    building. The Hatchery and Conditioning facility serves as a microcosm of the World Society. The
                    casual attitude toward sexual experiences, the castes, the bio-engineering, the social conditioning,
                    the social dynamics, all represented here and introduced to the reader from the perspective of
                    touring students. Even Mustapha Mond at the end of the sequence giving an overview of their
                    society's history and organization. It is a very clever method of both world building and delivering
                    exposition.
                    <p>
                        Class, or caste, plays a central role in the story. It is the central governing influence on
                        people's lives and is deeply ingrained into their culture and thinking. This is made all the
                        more compelling when considering the real-world influences of this system. A native of England,
                        Huxley would have grown up familiar with the remnants of the strict Victorian class system.
                        While its influence had waned by the book's publication in 1932, Huxley himself, and certainly
                        many of his readers, had likely experienced it first-hand to some degree. While not completely
                        unshakable, the influences of one's class still heavily influenced the course of one's life,
                        either directly or through circumstance. Another potential influence to the story's system of
                        castes were the many Eugenics movements gaining traction in Europe and America during the 20's
                        and 30's. Stripping away any human consequences or complications, the optimization of genetic
                        material appears agreeable on paper. However, once any practical or moral aspects are
                        considered, the feasibility and <i>preferability</i> of such optimization quickly fall apart.
                        This is strongly mirrored in the story. To everyone living in the society, everything is as
                        ideal as possible. Genetic anomalies have been eliminated and everyone is perfectly tailored for
                        their destined work environment. Though, as John points out on several occasions, this apparent
                        perfection has come at the cost of everyone's humanity and autonomy.
                    </p>
                    <p>
                        The inclusion of John and the "savages" is also an excellent plot device. Oftentimes in
                        dystopian stories, the focus of the story is on a character from within the dystopia that rises
                        against it in some act of rebellion{<FootRef idx={2} anchor={`brave-new-world`} />}. <i>1984</i>{" "}
                        and <i>Fahrenheit 451</i> are two such examples. In this novel, the reader is thrown for a loop.
                        Upon his introduction and his immediate display of disdain for their society, something the
                        reader may agree with, Bernard Marx seems like a good candidate for a protagonist. As the story
                        progresses, however, we see that his motivations are not rooted in some moral core, but only in
                        his own self-interest. He takes no issue with scapegoating his friends or abusing the lower
                        castes. He chooses to remain an agent of the system as long as it fits his needs. He merely is a
                        plot device that introduces John to his world, the character that creates meaningful tension
                        with the status quo, coming from outside of the system and later engulfed by it. John comes from
                        a more traditional culture, even backwards in some respects. This creates an excellent counter
                        to the hyper-modern world of England. This places the reader in the temporal and moral middle
                        ground. A place where they are prepared to understand both John's and Mond's opinions.
                    </p>
                    <p>
                        In a similar vein of thought, <i>Brave New World</i> serves as a foil to more traditional
                        dystopian stories such as <i>1984</i>. Whereas in <i>1984</i>, knowledge and order is controlled
                        top-down through force and fear, the World State of <i>Brave New World</i> has no need for such
                        measures. Its society is self-reinforcing from the bottom-up. The former represents a sort of
                        unstable equilibrium. Order is maintained as long as <i>Ingsoc</i> is the dominant force in
                        their society, however, there is motivation for individuals to challenge that force. Characters
                        such as Wilson Smith demonstrate that, no matter how much oppression or distraction the state
                        imposes upon the people, there is still the underlying will for better treatment.
                    </p>
                    <p>
                        <i>Fahrenheit 451</i> moves slightly away from <i>1984</i> on the spectrum of dystopia. The
                        people who live along side Guy Montag seem content by default. Entertainment is cheap and
                        plentiful, living conditions are tolerable,and initiatives such as the firemen appear to have
                        genuine and widespread public support. The difficulty here is that the human element still
                        remains. Characters like Guy Montag or Clarisse McClellan show that independent thought still
                        persists; some people are still curious for the world that was left behind. Some characters,
                        like Professor Faber have even experienced it.
                    </p>
                    <p>
                        In contrast, <i>Brave New World</i> showcases a society that is in a much more stable
                        equilibrium. It shares many qualities with the two others (the knowledge suppression, the
                        supremacy of the state, the annihilation of the individual, etc.), but it has one important
                        difference: human autonomy has been completely eliminated exactly where it needed to be.
                        Stunting the development of the lower castes and conditioning them before even their decanting
                        ensures the stability of the state because nobody has any interest in an alternative. Without
                        the state, all of the castes would not have the jobs that they were conditioned to love. They
                        would not have their endless material consumption or, most importantly, the happiness-giving{" "}
                        <i>soma</i>. The crowd of Delta workers rally against John as he tries to "save" them from their{" "}
                        <i>soma</i>. Bernard is resentful of his position within the social hierarchy, but would rather
                        be on top himself than change its fundamental structure. Helmholtz believes that his job does
                        not suit his abilities well and desires change, but not in the system itself, only in his manner
                        of serving it. He would rather do his writing in peace without causing much of a disruption.
                        Fair enough. The only character to fundamentally question the structure of the state is John,
                        the only character conditioned by a world separate from it. However, since there is no desire
                        for change from within the system, his efforts for change make little difference. His only
                        option by the end of the story is to escape. Permanently.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`brave-new-world`}>
                        No relation.
                    </FootNote>
                    <FootNote idx={2} anchor={`brave-new-world`}>
                        Results may vary.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/brave-new-world.jpg"}
            anchor={"brave-new-world"}
        />

        <BookTile
            title={"Fahrenheit 451"}
            author={"Ray Bradbury"}
            synopsis={
                <>
                    Guy Montag is a <i>fireman</i>. When an emergency is called into his station, he, like his comrades
                    across the country, slides down his fireman's pole, dons his flame-retardant suit, and races to the
                    scene in a fire engine. Pulling up to the fireproof house, as all houses now are, with kerosene in
                    place of water and a need to destroy, rather than protect, he stokes the flames until all threats to
                    the state have been immolated. Every precaution must be taken when it comes to the threat of the
                    printed word.
                    <p>
                        Guy Montag is a <i>stranger</i>. On his way home from his shift, Montag meets a strange young
                        girl, Clarisse McClellan. After identifying him as a fireman through his odor of accelerant, she
                        begins asking him questions...questions that make him think. "Are you happy?" What? Of course he
                        was happy! He had endless entertainment at his fingertips; in fact, he had just recently gotten
                        a third floor-to-ceiling television screen installed in his parlor...although he did not find
                        the endless stream of melodramas very entertaining. He was never bored either! The state made it
                        nearly impossible to be bored, too much temptation to <i>think</i>...although he wished he had
                        time to think. "Are you in love?" Such a ridiculous notion! He had a lovely wife Mildred whom he
                        loved very much...although he wished she would watch her nonstop, personalized feed of "The
                        Family" a little less, perhaps talk to him at night instead of listening to the seashells in her
                        ears that fed her a constant stream of entertainment and advertisements. "Did firemen used to
                        put out fires?" How could Clarisse make such an elementary mistake? The state has extensively
                        documented the history of fire-starting firemen all the way back to the American
                        revolution...although how had they fireproofed houses in the 1700s?{" "}
                        <i>"Have you ever taken a book instead of burning it?"</i> N-no...
                    </p>
                    <p>
                        Guy Montag is a <i>liar</i>. He had stolen a book, and he had finally worked up the courage to
                        read it. During one of his late-night calls, he had snatched a book of poetry during the chaos
                        of the call. He prayed that Fire Chief Beatty would not notice. This call was different, though.
                        Instead of the offender being taken away by the authorities, the woman whose library they had
                        just decimated threw herself into the fire along with it. What could be in those books that was
                        worth dying over? Calling in sick the day after, he planned to find out. Chief Beatty comes over
                        to make sure he is feeling alright...he never calls out of a shift. As Montag lies in bed, with
                        the book hidden under his pillow, the Chief delivers a monologue on why firemen do what they do.
                        As firemen, it is their duty to protect people from the harm that books can cause and to
                        preserve the stability of the state. Books inconvenient, he explains. They are unpopular, they
                        are divisive, they are subversive, they upset people. The state did not ban books, he reveals,
                        the people banned the books themselves! People now live with endless entertainment, personalized
                        to their own perspectives and views. The entertainment is endless, the televisions know them and
                        can tailor what they see so they are never bored. Books do not care who you are, they do not
                        yield to your preferences, their philosophies are only accessible to those few that understand
                        them. Books are <i>destabilizing</i> and the people want them gone. He goes on to explain that
                        it is normal for books to call to firemen, to tempt them into upsetting the delicate balance of
                        society. It is alright if a fireman gives in and takes a book, as long as it is burned within a
                        day. You wouldn't happen to know anything about that, would you Montag?
                    </p>
                    <p>
                        Guy Montag is a <i>deviant</i>. As Montag enters the fire house for his next shift, Beatty holds
                        out his hand, expectantly. Guy places the book in his hand. After Beatty further deconstructs
                        any thoughts of subversion that Guy may still harbour, the alarm bell screams to life. There are
                        more books to be burned. Tearing through the quiet 3:00 AM streets, they arrive at the offending
                        house. Ready to torch yet another collection, Montag realizes where they are. This is his house.
                        This most recent book was not his first offense. He had been collecting and preserving books for
                        months. Mildred must have called it in. Chief Beatty orders him to burn his collection, after
                        which he will be immediately arrested for his crimes. Beatty taunts Montag, quoting literature
                        at him as he scolds Guy for being so foolish, dares him to <i>do something</i> about it. Backed
                        into a corner, Montag has only one option if he is to stay a free man. He turns from the house
                        and towards Beatty, ignites the pilot flame on his hose...and lets a stream of burning kerosene
                        spew towards his most immediate threat.
                    </p>
                    <p>
                        Guy Montag is a <i>murderer</i>. Tearing off his suit, Montag takes off into the night. The
                        police were already on their way, he does not have much time. Cutting through back yards and
                        highways, he races to evade the police and the mechanical hound tracking his scent. Peering in
                        through living room windows, he can see his own chase being televised across the city. The
                        people love a spectacle. As the authorities close in, Montag reaches the river. In an effort to
                        throw the hound off of his scent, he jumps in and lets the current take him downstream and to
                        the opposite bank. Hours later, no hound has tracked him down.
                    </p>
                    <p>
                        Guy Montag is...<i>free</i>. As he wanders down the tracks, he comes across a camp of drifters.
                        These, however, are no ordinary transients. They are professors and thinkers from the
                        long-abandoned institution of higher education. They tell Montag that they collect books, just
                        like him. Although not physically, that would be far too risky. They keep their books in a place
                        where the state cannot find them, in their own minds. Each of them has memorized portions of
                        books that they find meaningful. Together, they form a nationwide mental library. On a small
                        portable television, the group tunes in to Montag's ongoing manhunt. Unable to find the true
                        Montag, the police know they cannot look weak in the eyes of the public. Coming upon a lone man
                        walking in the early hours of the morning, they declare that they have found their man. After
                        dealing with their newly minted scapegoat, they have done their job. One rogue fugitive is a
                        small price to pay for the state's reputation.
                    </p>
                </>
            }
            thoughts={
                <>
                    <i>Fahrenheit 451</i> is as beautifully written as it is disconcertingly prophetic. One aspect of
                    the story that I particularly like is how Bradbury presents the origin of the state-wide ban on
                    books. Unlike most other media, where a totalitarian state suddenly materializes and begins issuing
                    top-down, draconian edicts, the American state in <i>Fahrenheit 451</i> implements policies that
                    already have widespread public support. Being written shortly after the second world war, it does
                    not surprise me that the state is portrayed in this manner. The unnerving reality is that it is
                    common for totalitarian regimes to have popular support as long as they enforce the will of the
                    majority. The most apt (and somewhat default) example comes from 1930's Germany. At the time, the
                    Weimar government was already deeply unpopular with the majority of Germans. Similar to the state in
                    the novel, these conditions gave the <i>NSDAP</i> an excellent opportunity. At the time, the Weimar
                    government was already deeply unpopular with the majority of Germans. Similar to the state in the
                    novel, these conditions gave the <i>NSDAP</i> an excellent opportunity. They implemented (or at
                    least promised) policies that many people actually wanted. Before (and even during) their height of
                    power, control, and malice, the Nazi Party was <i>popular</i> among many everyday Germans. To them,
                    that is all that really mattered. Most relevant to this book, many of their early, famous
                    book-burnings were not top-down directives from party leadership. Instead, they were perpetrated by
                    radicalized university students, a demographic that often serves as a "canary in the coal mine" for
                    future social upheaval.
                    <p>
                        This book also holds a significant amount of contemporary relevance. This is aside from modern
                        book-burnings and book-bannings, of which there are unfortunately still many. Instead, I would
                        like to highlight the entertainment present in Bradbury's fictional world. Every home has at
                        least one floor-to-ceiling, wall-to-wall television screen. Some even have all four walls
                        covered (something that Mildred is all-too-eager to achieve). These screens are designed to
                        completely envelop and consume their user, both in their dominating physical presence and the
                        addicting properties of their content. From the perspective of Guy (as he observes Mildred), the
                        reader gets a sense of how these screens operate. They are loud, very loud. So loud that it is
                        difficult to think of anything aside from what is on the screen. That is the point, in fact.
                        Mildred's favorite show is "The Family", which plays non-stop on the screens of their parlor.
                        This show, along with the intervening advertisements, is perfectly tailored to Mildred and her
                        tastes. They even mention her by name when it is relevant. Entertainment in this world is not
                        merely limited to the screens, however. At night, Mildred, along with millions of others to be
                        sure, have plugged their ears with small devices that resemble seashells. They produce a
                        constant stream of pleasant sounds, meant to put the user at ease (with the convenient
                        side-effect of making any idle thoughts impossible). Advertisements also play an important role
                        in the story. Aside from the personalized ads that play on the screens, they are omnipresent
                        throughout daily life. The most notable example of this occurs to Montag on the subway where his
                        thoughts on the bible that he has recently acquired are continually interrupted by a jingle for
                        "Denham's Dentifrice". The speakers assault his mind with this phrase. Over. And over.{" "}
                        <i>And over</i> again. This also serves as another indication that rampant consumerism is a
                        driving force of their society. This ad, in particular, nearly drives Guy mad and pushes him
                        further towards his inevitable rebellion. This is all beginning to sound a little too familiar,
                        isn't it?
                    </p>
                    <p>
                        Another theme that lurks in the background of the book is the specter of nuclear annihilation.
                        At several points within the story, this is alluded to. One time, there is a mention of
                        low-flying military jets, another is an offhanded remark about rising geopolitical tensions,
                        Montag even mentions that the U.S. has won two nuclear wars since 2022. This all comes to a head
                        at the end of the book. Guy Montag and his new conspirator, Professor Faber
                        {<FootRef idx={1} anchor={`fahrenheit-451`} />}, plan to use the impending war as a catalyst for
                        their plan to destabilize the government. Their plan quickly unravels after Chief Beatty
                        discovers Montag's book stash. However, as Montag is on the run, war is invariably declared.
                        Standing with the group of forsaken professors, he watches as the bombs hit the city that he has
                        just escaped. This is implied to immediately kill Mildred and perhaps even Professor Faber, as
                        it is uncertain that he has gotten far enough from the city. The destruction of the city, and
                        perhaps even the nation, leaves the book off on a bittersweet note as Bradbury implies that the
                        group of scholars will work to spread their knowledge of books in the aftermath.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`fahrenheit-451`}>
                        During my summary, I do not mention Professor Faber explicitly in the interest of brevity, but
                        he plays an important role in motivating Montag and helping him resist the persuasions of Chief
                        Beatty.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/fahrenheit-451.jpg"}
            anchor={"fahrenheit-451"}
        />

        <BookTile
            title={"2001: A Space Odyssey"}
            author={"Arthur C. Clarke"}
            synopsis={
                <>
                    The first time we meet David Bowman, he is on his way to Saturn to conduct a study of the
                    planet...at least, this is what he was told. In reality, he is thirty days into completing the final
                    leg of a journey that humanity has been unknowingly on for millions of years.
                    <p>
                        <i>Moon-Watcher</i> gazes into the pitch-darkness of the night sky. Inside of his cave, his
                        tribe huddles together for warmth. Most of those who have not already starved to death are well
                        on their way to doing so. A changing climate had forced his ancestors to descend from the trees
                        millennia ago; unfortunately, resources are not much more abundant on the ground. Under the
                        cover of darkness one night, the daily struggle of these early <i>australopithecines</i> is
                        forever altered by the arrival of the monolith. In stark contrast to the surrounding arid
                        environment, the eleven-foot-tall pillar of perfectly black, perfectly smooth material looms
                        over <i>Moon-Watcher</i> and his tribe. Its dimensions are precisely 1:4:9, the first three
                        perfect squares. The monolith speaks to the apes, not through language, as that gift will only
                        manifest later on, but through the modification and mutation of their minds. Having planted the
                        seeds of what is yet to come, the monolith leaves as suddenly as it had arrived.
                    </p>
                    <p>
                        Dr. Heywood Floyd gazes into the pitch-darkness of the star-lit sky. Washington has urgently
                        ordered him to the <i>Clavius</i> Moon Base. Rumors have leaked something about a quarantine.
                        Nobody is allowed in and nobody out, except for him. Upon his arrival, he is greeted with the
                        full reality of the situation. Some time earlier, surveyors on the Moon noticed a magnetic
                        anomaly located within Tycho Crater. An investigation reveals the source of the anomaly: an
                        eleven-foot-tall pillar of perfectly black, perfectly smooth material with dimensions of
                        precisely 1:4:9, buried twenty feet under the lunar regolith. <i>TMA-1</i>. It is Floyd's job to
                        investigate. Soon after his arrival, the mid-day sun strikes the monolith's surface for the
                        first time in millions of years. At that moment the helmets of all present began to shriek as
                        the monolith blasted high-energy radio waves into the vastness of space. Following this event,
                        the magnetic field of the anomaly had evaporated, all of its energy transformed into a lone
                        signal, aimed directly at the moons of Saturn...
                    </p>
                    <p>
                        David Bowman gazes into the pitch-darkness of space. Inside of the starship <i>Discovery</i>,
                        himself and his crew are on an escape velocity from Earth. They will perform a gravity-assist
                        maneuver at Jupiter to gain velocity before they reach their final destination of Saturn. Aboard
                        are Bowman, Frank Poole, their <i>HAL 9000</i> artificial intelligence, and several crewmates in
                        stasis. Only Bowman will live to see their true objective. As their mission progresses,{" "}
                        <i>HAL</i> begins to behave strangely. He blunders a chess move during a game against Poole. He
                        reports the failure of the critical <i>AE-35</i> communication gyroscope, twice. Both units are
                        later found to be in perfect working order. He begins to ask his human counterparts personal
                        questions regarding their perspective on the mission. Bowman and Poole begin to suspect that
                        their AI is malfunctioning after hearing of a similar incident on Earth. The inner conflict
                        between <i>HAL</i>'s two main directives, to ensure the mission reaches Saturn and that absolute
                        secrecy is maintained during the journey, has caused him to crack. Their discussion occurs
                        beyond the earshot of <i>HAL</i>'s microphones; they do not know that <i>HAL</i> is good at
                        reading lips.
                    </p>
                    <p>
                        <i>HAL</i> is also a skilled opportunist. Poole is alone on a spacewalk to replace the{" "}
                        <i>AE-35</i> that <i>HAL</i> insisted would fail within 72 hours. Using his EVA module for
                        light, he does not notice as it begins to accelerate towards him at its maximum thrust...it does
                        not stop after impact. One threat to the mission has been eliminated. Still reeling from
                        watching Poole's demise, David Bowman hears alarms blaring from the stasis chambers. The
                        life-support has been turned off. Four down; one remains. As Bowman races towards <i>HAL</i>'s
                        control room, air begins to hiss through the steadily opening airlocks; he barely has enough
                        time to don a space suit before the ship's life-sustaining atmosphere vanishes into the vacuum
                        of space. Forcing his way into <i>HAL</i>'s inner sanctum, Bowman begins to rip out the many
                        modules that control the great machine. Becoming more erratic with each module removed,{" "}
                        <i>HAL</i>'s final message to Bowman is a song he was first taught by his instructor. <br />
                        <br />
                        <audio controls style={{ width: "100%", borderRadius: "10px" }}>
                            <source src="/media/audio/daisy.mp3" type="audio/mpeg" />
                        </audio>
                        <br />
                        <i>
                            Daisy, Daisy, Give me your answer, do! I'm half crazy, All for the love of you! It won't be
                            a stylish marriage, I can't afford a carriage, But you'll look sweet{" "}
                            <small>upon the seat Of a bicycle built forrrr tttwwwoooo...</small>
                            {<FootRef idx={1} anchor={`2001`} />}
                        </i>
                    </p>
                    <p>
                        After dismantling <i>HAL</i>, he manually points the antenna back to Earth in order to
                        reestablish communication. After relaying his situation to the ground, he learns of the true
                        nature of the mission. The radio signal sent by <i>TMA-1</i> was directed at a second monolith
                        on Japetus, one of Saturn's moons, dubbed <i>TMA-2</i>. However, instead of standing eleven feet
                        high, this monolith reaches nearly two kilometers into the blackness of space. With barely
                        enough fuel left, Bowman guides the crippled spacecraft towards its final resting place in orbit
                        of Japetus. Without enough resources to return home, Bowman pushes onward, taking one of the
                        ship's maintenance pods down to the tip of the spire. As he descends, he realizes something: the
                        monolith is hollow. Passing the impermeable threshold, he utters the last words that Earth will
                        ever hear from him, <i>"My God, it's full of stars!"</i>.
                    </p>
                </>
            }
            thoughts={
                <>
                    This novel stands out for a myriad of reasons. Clarke puts a great deal of effort into ensuring that
                    his story remains as scientifically accurate as possible, while still making the plot seem plausible
                    and self-consistent. The beginning of the novel offers a unique explanation to the question of why
                    humans often appear to be fundamentally different with respect to the remainder of the animal
                    kingdom. His description of space-flight, moon-bases, and technology are impressively accurate for
                    being written before even the first moon landing. The inclusion of spinning discs that induce
                    artificial gravity through centripetal force was very forward thinking for the time and would go on
                    to influence countless other works of science fiction.
                    <p>
                        Of course, one of the most impactful details to me was how <i>HAL</i> behaves and how his
                        internal world model motivates his actions. From the outset of the story, <i>HAL</i> has two
                        primary objectives: deliver the crew of scientists to Saturn and to ensure that Bowman and Poole
                        are unaware of their true mission. <i>HAL</i> knows that his crewmembers are curious, though.
                        They will begin to ask questions. They may try to contact Earth for more details or even wake
                        the scientists in stasis. In anticipation, he first tries to pretend that the communication
                        module is broken. When that ruse fails, Bowman and Poole grow suspicious of him. In <i>HAL</i>'s
                        mind, this leaves him with only the nuclear option. This serves as an excellent example of how
                        seemingly reasonable terminal goals, such as investigating <i>TMA-2</i> and keeping the mission
                        a secret, can lead to unforeseen instrumental goals, such as self-preservation at all costs.{" "}
                        <i>HAL</i> does not have a proper understanding of what shutting down really means for him; all
                        that he knows is that Poole and Bowman's interference may prevent him from achieving his
                        terminal goal. These insights from the author come decades before alignment, or even AI, became
                        popular within public discourse.
                    </p>
                    <p>
                        Another interesting detail is what Clarke gets wrong. Wrong, but in the most correct way
                        possible. Namely, his prediction that Marvin Minsky and Irving John Good would play a pivotal
                        role in designing neural networks that could effectively learn. With the invention of the{" "}
                        <i>perceptron</i> in 1957, the theoretical groundwork for <i>HAL</i> had already been laid by
                        the time <i>2001</i> was being written. Around the same time, Minsky published{" "}
                        <i>Perceptrons</i>, a book that showed that single-layer networks of perceptrons were incapable
                        of learning relatively simple functions, such as XOR. However, Minsky and Papert suggested that
                        deeper networks could model more complex functions. Unfortunately, it was difficult to
                        effectively train these networks. The solution would not come until 1982 when Werbos applied a
                        modern method of <i>backpropagation</i> to multi-layered perceptrons. This, combined with the
                        popularization of neural networks by Hinton and Hopfield, led to the modern systems that exist
                        today. Given that <i>2001</i> was written only at the very beginning of this journey, it is
                        impressive that it was able to approximate so much progress that was yet to be had in the field,
                        even if the finer details were incorrect.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} anchor={`2001`}>
                        In 1962, Clarke witnessed researchers at Bell Labs program an IBM 7094 machine to sing this song
                        in the earliest example of computer speech synthesis.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/2001.jpg"}
            anchor={"space-odyssey"}
        />

        <BookTile
            title={"Do Androids Dream of Electric Sheep?"}
            author={"Philip K. Dick"}
            synopsis={
                <>
                    <u>Do Androids Dream of Electric Sheep?</u> explores themes of humanity, empathy, and the nature of
                    consciousness set in a post-apocalyptic world after most humans have fled to off-world colonies.
                    Amid this bleak landscape, Dick examines what it means to be human and the ethics of artificial
                    life. The novel follows Rick Deckard, a bounty hunter tasked with "retiring" rogue androids, and
                    John Isidore, a man of limited intelligence due to radiation exposure who empathizes with the
                    fugitive androids.
                    <p>
                        The central conflict of the story revolves around the new Nexus-6 model of androids. These
                        artificial humanoids are more intelligent than previous models, and therefore more capable of
                        blending in with natural humans. Rick Deckard is informed that six of these androids have
                        escaped from the Mars colony where they were meant to work. By the time he is assigned the case,
                        two have already been 'retired' by another bounty hunter. The remaining four have already
                        integrated themselves into society. As Deckard carries out his assignment, he struggles to
                        distinguish between members of his species and mere facsimiles, and questions whether he can
                        bear to destroy beings with the same desires, feelings, and fears as himself.
                    </p>
                </>
            }
            thoughts={
                <>
                    One of the most striking aspects of this book is how Dick describes his androids, specifically the
                    Nexus-6 models. Instead of being sentient machines made of circuit boards and metal substructures,
                    they are much more like artificial, biological humans. This further strengthens the book's central
                    moral conflict concerning the difference between humans and these 'andys'. In addition to behaving
                    like humans outwardly, they also possess similar biology to humans internally.
                    <p>
                        This blurred distinction between humans and androids in the book is increasingly becoming
                        applicable to the ethics of real-world artificial intelligences. While I personally do not
                        foresee the development biological humanoid assistants, the book remains relevant to how we
                        interact with our increasingly intelligent and embodied assistants. This progression too is
                        addressed within the book as Rick Deckard describes how he becomes more empathetic to the more
                        advanced androids that he is tasked with retiring. With his story, Dick asks us where the line
                        between ourselves and our creations lies; this is a question we should begin to ask ourselves as
                        AI research continues to advance.
                    </p>
                </>
            }
            thumbnail={"/media/image/do-androids-dream-of-electric-sheep.jpg"}
            anchor={"electric-sheep"}
        />

        <BookTile
            title={"I, Robot"}
            author={"Isaac Asimov"}
            synopsis={
                <>
                    <u>I, Robot</u> spans a series of nine stories detailing the fictional progression of robotic
                    technology as it advanced from simple childcare agents to fully autonomous general intelligences.
                    Each story is framed as part of an interview between an unnamed journalist and Dr. Susan Calvin, the
                    chief <i>robo-psychologist</i> of <i>U.S. Robots and Mechanical Men, Inc.</i>. Presented in
                    chronological order from the turn of the millennium to the mid twenty-first century, Calvin's
                    narratives feature herself along with several other members of her company as she recalls how they
                    navigated the challenges that the new technologies presented.
                    <p>
                        Core to the book's narrative are Asimov's now-infamous three laws of robotics, and how their
                        literal interpretation (or exclusion) governed how the <i>USRMM's</i> automations behave; each
                        law was superseded by the next in terms of behavioral priority. In many of these stories, it was
                        Calvin's personal role to understand how these three laws influenced the{" "}
                        <i>positronic brains</i> inside of each robot.
                    </p>
                    <p>
                        Gregory Powell and Michael Donovan are field testers for the <i>USRMM</i> corporation, tasked
                        with testing and debugging experimental models. Through them, Asimov explores what may occur
                        when two of his robotics laws directly oppose each other, how "mechanical men" may reason about
                        their place in the world as servants to humans, and how their synthetic minds cope with
                        overwhelming stimuli. In later episodes, Calvin takes a more direct role, examining how an
                        always-aim-to-please attitude can unexpectedly backfire, what may occur if a robot's desire to
                        protect humans is compromised, and the consequences of these automata becoming embedded into
                        human society.
                    </p>
                </>
            }
            thoughts={
                <>
                    Similar to other pioneering works such as <u>2001: A Space Odyssey</u> or{" "}
                    <u>Do Androids Dream of Electric Sheep?</u>, many of <u>I, Robot's</u> elements are familiar tropes
                    to modern readers. However, it is vital to acknowledge that many of these familiar story beats{" "}
                    <i>originated from</i> Asimov and his writings. The author impressively anticipated many ethical and
                    practical issues surrounding artificial intelligence before the phrase was even coined in 1955. For
                    example, his stories like "Runaround" or "Liar!" give very grounded (albeit dramatized) scenarios on
                    how hard-coding specific rules into intelligent systems is fraught with exceptions and pitfalls.
                    <p>
                        Asimov also offers some interesting thoughts on how human society would react to the invention
                        of machines that were suddenly as capable as humans themselves. Reactionary approaches to the
                        automation of labor are rather realistically portrayed by organizations such as{" "}
                        <i>The Society for Humanity</i> along with the efforts of labor unions in general to minimize
                        robot activity on Earth itself. Their action in "Evidence" and "The Evitable Conflict" make for
                        believable world building and are emblematic of similar movements emerging due to the modern AI
                        landscape.
                    </p>
                    <p>
                        I find these stories especially interesting as they act as a sort of time capsule for the early
                        public perception of AI. One aspect that I find striking is that the <i>positronic brains</i> of
                        the robots are always embodied. Even stationary agents, such as "The Brain" in "Escape!", still
                        have eyes and arms. At this point in fiction, robots were often depicted as simply "mechanical
                        men", essentially one-to-one copies of humans with most of our features having robotic
                        counterparts (Asimov's robots even have eyelids!); when these were written in the 1940s, notions
                        of disembodied minds were not as often represented. <u>I, Robot</u> also imagined robots to be
                        fundamentally predictable with a set of high-level rules. The three fundamental and
                        human-understandable laws were very difficult to modify or train out of the minds' positronic
                        pathways, something that is largely absent from all but toy AI models today. As a consequence of
                        this, the synthetic brains were always (relatively) interpretable. If needed, a team of trained
                        mathematicians could manually trace back the calculations that occurred and offer intelligible
                        insight on the reasons for a particular behavior. Aside from especially simple or specially
                        trained models, this problem is largely intractable today.
                    </p>
                </>
            }
            thumbnail={"/media/image/i-robot.jpg"}
            anchor={"i-robot"}
        />

        <BookTile
            title={"There is No Antimemetics Division"}
            author={"qntm (Sam Hughes)"}
            synopsis={
                <>
                    <u>There is No Antimemetics Division</u> follows Marion Wheeler, the head of the titular
                    <i>Antimemetics Division</i> within the{" "}
                    <Link href="https://scp-wiki.wikidot.com/" target="_blank">
                        SCP Foundation
                    </Link>{" "}
                    as she slowly realizes that her reality is under threat by an entity designated by the foundation as
                    SCP-3125. The book reads as a collection of short stories, revolving around a small group of
                    characters as they combat SCP-3125 and other antimemetic threats. These entities primarily interact
                    with the world of SCP through memory and psychological attacks, destroying the memories of the
                    people it targets, making itself impossible for humans to perceive, or revealing something that is
                    so utterly incomprehensible that even experienced foundationers are neutralized on the spot. Despite
                    the SCP foundation's nearly limitless resources, its members are still human, (nearly) defenseless
                    by their very nature. The story asks a central question, the answer to which is the only way
                    SCP-3125 can be dealt with effectively: How can you combat something which you don't even remember
                    the existence of?
                </>
            }
            thoughts={
                <>
                    This book heavily relies upon the concept of <i>antimemes</i>. To the uninitiated, this can be a
                    rather alien concept, even though it is still quite grounded in reality. Whereas <i>memes</i> (yes,
                    those too) are ideas which can multiply and spread rapidly, almost virulently at times, through a
                    population, <i>antimemes</i> are ideas which cannot be spread. Some cannot be remembered by those
                    who perceive them, some cannot be perceived at all, and yet others can 'eat' the memories of anyone
                    who is aware of it. In the SCP universe, these effects can be at least somewhat remedied by a class
                    of drug known as <i>mnestics</i>, which makes it more difficult for the user to forget and more
                    adept at perceiving these SCPs. Others in the story, like the character Adam, have a sort of natural
                    'immunity' to these antimemes, at least the weaker ones. In the story, SCP-3125 is a {redact(40)}.
                    It is able to{" "}
                    <i>
                        <b>[DATA EXPUNGED]</b>
                    </i>
                    . <i>What was I saying again?</i>
                    <p>
                        <u>There is No Antimemetics Division</u> makes brilliant use of these themes of memory,
                        forgetfulness, and how the human brain is shockingly good at filling in the gaps (even those of
                        immense scale). Multiple characters throughout the story are made to forget too much that they
                        have to rebuild their very personality from scratch over the following months or weeks (so
                        common, in fact, that those within the division treat it as an almost mundane occurrence). While
                        antimemes this powerful are thankfully fictional, there are real people with physical or
                        cognitive injuries whose experiences align surprisingly well with the antimemetic objects of the
                        story. This also helps readers to get a more concrete understanding of how the human brain copes
                        with such maladies. For example, those with <i>scotomas</i> are unable to perceive objects
                        within certain regions of their POV. In these cases, the brain 'stitches' the edges together to
                        maintain a continuous visual field, completely absent of objects that may be right in front of
                        that individual. Disorders such as <i>agnosia</i>, resulting in the inability to perceive
                        certain stimuli, or <i>retrograde or anterograde amnesia</i>, which render someone unable to
                        remember past or present events, usually as a result of a TBI event. This story is an excellent
                        example of how fiction can be effectively utilized to give the reader a more complete
                        understanding of the human condition.
                    </p>
                </>
            }
            thumbnail={"/media/image/there-is-no-antimemetics-division.jpg"}
            anchor={"antimemetics"}
        />
    </>
);
