import React, { createContext } from "react";

import PropTypes from "prop-types";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";
import styles from "@/styles/pageTiles.module.css";

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

const footCtx = createContext(null);

export default (
    <BookTile
        title={"Brave New World"}
        author={"Aldous Huxley"}
        synopsis={
            <>
                <i>Brave New World</i> is a book that describes a perfect utopia. Free from nearly all disease, old age,
                social strife, and the very notion of discomfort itself! The world government has been keeping
                everything running smoothly for hundreds of years. Alphas, Betas, Gammas, Deltas, and even the lowly
                Epsilons leave their <i>Hatching and Conditioning</i> centers and live lives of idyllic{" "}
                <i>Community, Identity, and Stability</i> (and a healthy amount of consumption) thanks to the world
                state's stewardship and the help of a little <i>soma</i>. Nothing could be closer to the platonic ideal
                of a perfect society. At least...that's what anyone who lived there would tell you...
                <p>
                    Huxley opens the book by introducing us to the Director of London's own H&C facility as he gives a
                    group of Alpha students a tour of the squat, grey, and clinical facility. Beginning in the
                    fertilizing room, he exposits, in a cold and clinical fashion, how male and female gametes grown in
                    their lab, fertilized, and cloned through the revolutionary process of <i>bokanovskification</i>. A
                    single egg can be cloned up to ninety-five times to create classes of perfectly uniform workers!
                    Alpha and Beta eggs do not undergo this process, as you understand, and are bred one-to-one from
                    their original eggs. Onto the social predestination room, next. By now, each zygote is transferred
                    into the saline solution of an individual test tube. Each is catalogued by the Predestinators and
                    used to inform the nature of the next batch ordered for fertilization. They are next down to the
                    embryo store. As the test tubes slowly creep through the red darkness, along the conveyor belt, they
                    will receive regular chemical adjustments from the resident beta workers to help form them into
                    their final castes.
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
                        |<Ink>N/A</Ink>| Testosterone and DHT courses <Ink>test says female, should stay fertile</Ink>
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
                            giving an epsilon a double dose is acceptable, but think of the consequences if you confuse
                            an Alpha for one and give a dose! I acknowledge that Edith is older, but you must not follow
                            her example; she has made that mistake once already. There is a reason why the D.H.C. sent
                            her to the Falklands.
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
                    Social conditioning begins soon after birth. During the day, they are taught lessons in work ethic,
                    material consumption, and social hierarchy. At night, speakers under their pillows whisper messages
                    that subconsciously condition them to love their work and caste, hate the other castes, to always be
                    happy, ensure a healthy amount of material consumption, and to take their <i>soma</i> in cases of
                    discomfort. Through a monologue from World Controller of Western Europe, Mustapha Mond, the students
                    learn about the foundational principles of their society. Every aspect of it is carefully designed
                    and planned. Everyone is guaranteed to do the job that they were decanted to do. Everyone loves
                    their work and their place in the social strata; that is what they were bred to do. Everything from
                    the tunics that they wear, to the food that they eat, to the <i>soma</i> rations that they take, are
                    carefully designed to fit everyone and their caste. In this world, there is no cause for discontent
                    if entertainment is endless, no cause for strife if everyone looks the same, no need for resentment
                    if everyone feels they are right where they belong, no need for discomfort when <i>soma</i> can take
                    it away, no need for discontent when there are no books to spark it. There is only{" "}
                    <i>Community, Identity, and Stability</i> the world over.
                </p>
                <p>
                    After meeting the students on their facility tour, Lenina Crowne, a beta worker in the embryo
                    storage, gossips with her friend Fanny Crowne
                    <FootRef idx={1} context={footCtx} />. The topic of conversation shifts to her apparent obsession
                    with D.H.C assistant Henry Foster; she has been seeing him for four entire months without tying
                    someone else. Absolutely unheard of. Lenina yields, admitting that she somewhat fancies Bernard
                    Marx, a strange, shorter-than-average, Alpha, sleep-learning specialist at the Hatchery and
                    Conditioning Center. Bernard overhears this conversation. Privately, he disdains the notion of
                    passing lovers around like portions of meat. He is an outsider, technically an Alpha by caste and
                    ability, but his stature is stunted and causes him to look more like an Epsilon than an Alpha,
                    something he deeply resents. Cruel rumours often spread about alcohol accidentally being injected
                    into his bottle as a fetus.
                </p>
                <p>
                    Some time later, Lenina meets Bernard on the roof of the complex. After expressing her interest in
                    him, Bernard asks for her to accompany him to the Savage reservation in New Mexico. She reluctantly
                    agrees. Excited by the prospect of the inflated social reputation that a partner would bring, he
                    shares the news with Helmholtz Watson, a friend of his. Watson is the perfect image of an Alpha
                    male: physically fit, skilled at his job, and highly intelligent, perhaps a little too intelligent
                    for his work writing new hypnopaedic phrases for the children. In the following days, Bernard asks
                    the Director for permission to visit the reservation. The Director hesitantly agrees as he relays a
                    story about one of his own visits, twenty years ago, where he lost a partner to the savages during a
                    storm. Before embarking towards the reservation, Helmholtz informs Bernard that the director has
                    grown weary of his unorthodox opinions and is planning to send Bernard to Iceland after his return.
                    He is disturbed by this information, but decides to press on with Lenina to the reservation.
                </p>
                <p>
                    The transition from their clean, sterile, and controlled lives, to the dirty, diseased, and
                    disorganized reservation is not easy on Bernard and Lenina. The savages here practice strange
                    customs, a mix of Native American folklore and old American Christianity. A far cry from their noble
                    and orderly worship of his Fordship, Henry Ford. People grow old here, gnarled by the stressors of
                    age and disease. Back in England, people present as perfectly healthy their entire lives until
                    neurodegenerative diseases take them at around sixty. Worst of all, reproduction on the reservation
                    still occurs...naturally, with babies being <i>born</i> to actual human m*thers. A deeply unsettling
                    notion, to be sure. At the savages' village, they meet John, who looks different from the others.
                    Fair-skinned and learned, he is often ostracized from the other youths. He tells them that he is the
                    son of Linda, a woman the villagers rescued twenty years ago. It has been a long time since Bernard
                    was this excited. He offers to take John back to his home, the "brave new world", but insists that
                    Linda <i>must</i> come as well. John, excited by the prospect and enamoured by Lenina, agrees.
                </p>
                <p>
                    Back in London, the Director awaits Bernard's return so he can publicly exile him to Iceland for his
                    strange behavior. As Bernard meets him in front of the crowd, he can barely contain his elation.
                    Soon after the director makes his decree, Bernard asks both John and Linda to come forward. They
                    rush toward the director, expecting a warm welcome from their father/partner. Instead, the Director
                    recoils at the sight, along with his audience. You see, impregnating a woman "naturally" is social
                    suicide here. In this respect, the Director has been dead for twenty years; it just took a while for
                    anyone to realize. Soon after running out of the room, the Director resigns in disgrace. To Bernard,
                    revenge had never been so sweet.
                </p>
                <p>
                    Now in London, John becomes a spectacle and Bernard becomes his liaison. Members of high society are
                    excited to learn more about how the filthy savages live on their reservation. As much as they are
                    curious about him, John is disgusted by them. The breeding factories, the pills, the polygamy, the
                    consumption, the castes — it is all too much for him. Looking to cash in on his newfound fame,
                    Bernard hosts lavish parties and sleeps with many women. His peers still dislike him, but they will
                    tolerate him as long as it means seeing the savage. After much anticipation, Bernard organizes a
                    grand event to introduce John to his fair-weather friends; realizing that he is more of an
                    attraction than a guest, John refuses to show. The charade collapses on top of Bernard; the
                    familiar, insidious rumours begin anew.
                </p>
                <p>
                    After John and Lenina have a violent falling out due to her (in John's eyes) promiscuous behavior,
                    he learns that Linda is in the hospital. With her mind stupefied from <i>soma</i> abuse upon her
                    return, Linda lies barely conscious in her bed. Already dealing with grief, anger, and confusion,
                    John is interrupted by a group of young Delta clones on their regular death conditioning visit to
                    the hospital. Never seeing a woman so disfigured and overweight, the children clamour over to her,
                    gawking at her appearance. This enrages John, who, after angrily throwing off the children, makes
                    his way to the hospital entrance. A shift change is happening and the egressing Delta workers are
                    being given their daily <i>soma</i> ration. John hates the drug, he hates what it has done to Linda
                    and he hates what it has done to these people. In a frenzy, he grabs the distribution box and begins
                    throwing the pills out of the window. Eager to get their only daily source of happiness, a riot
                    erupts. Hearing of the riot, Bernard and Helmholtz arrive to help. Helmholtz excitedly joins the act
                    of rebellion while Bernard meekly stands out of the way. All three are then apprehended by police.
                </p>
                <p>
                    With the three sitting in front of World Controller Mustapha Mond, Bernard feverishly insists that
                    it was the fault of the other two. He had nothing to do with it! Ignoring Bernard's meltdown, Mond
                    has a discussion with John and the much more composed Helmholtz. He informs them that Bernard and
                    Helmholtz will be sent to an island where they cannot cause another disruption. Bernard is
                    inconsolable, Helmholtz looks forward to having some good motivation to write. Helmholtz carries his
                    shell-shocked friend from the room, leaving John along with Mond. They debate on the ethics of their
                    society; Mond asserts that their control is needed for their safety, John counters that no life is
                    worth living under that level of control. John chooses to self-isolate in the countryside.
                </p>
                <p>
                    After buying some supplies, some seeds, equipment, and a length of rope, John makes an abandoned
                    lighthouse his new home. He aims to lead a new life without the corrupting influence of the modern
                    world. He is successful in this respect...at least until the tourists begin to arrive. A savage
                    living alone as a hermit just outside of London? The residents of the city could hardly imagine a
                    more entertaining sight! They flock to his abode in the tens, then dozens, then hundreds. They call
                    for him to do some of his many "tricks" and rituals for them, on command. Angered by this treatment
                    more befitting of a circus animal than a man, John heads inside until they become bored and leave
                    for the night. The following morning, word spreads further of the spectacle at the lighthouse.
                    Hundreds more helicopters whiz over the horizon, eager to be entertained. As they arrive, the door
                    is left ajar. Before anyone can enter, the rope snaps taut. The show is over.
                </p>
            </>
        }
        thoughts={
            <>
                There is quite a lot to say about <i>Brave New World</i>. One of its standout qualities is its world
                building. The Hatchery and Conditioning facility serves as a microcosm of the World Society. The casual
                attitude toward sexual experiences, the castes, the bio-engineering, the social conditioning, the social
                dynamics, all represented here and introduced to the reader from the perspective of touring students.
                Even Mustapha Mond at the end of the sequence giving an overview of their society's history and
                organization. It is a very clever method of both world building and delivering exposition.
                <p>
                    Class, or caste, plays a central role in the story. It is the central governing influence on
                    people's lives and is deeply ingrained into their culture and thinking. This is made all the more
                    compelling when considering the real-world influences of this system. A native of England, Huxley
                    would have grown up familiar with the remnants of the strict Victorian class system. While its
                    influence had waned by the book's publication in 1932, Huxley himself, and certainly many of his
                    readers, had likely experienced it first-hand to some degree. While not completely unshakable, the
                    influences of one's class still heavily influenced the course of one's life, either directly or
                    through circumstance. Another potential influence to the story's system of castes were the many
                    Eugenics movements gaining traction in Europe and America during the 20's and 30's. Stripping away
                    any human consequences or complications, the optimization of genetic material appears agreeable on
                    paper. However, once any practical or moral aspects are considered, the feasibility and{" "}
                    <i>preferability</i> of such optimization quickly fall apart. This is strongly mirrored in the
                    story. To everyone living in the society, everything is as ideal as possible. Genetic anomalies have
                    been eliminated and everyone is perfectly tailored for their destined work environment. Though, as
                    John points out on several occasions, this apparent perfection has come at the cost of everyone's
                    humanity and autonomy.
                </p>
                <p>
                    The inclusion of John and the "savages" is also an excellent plot device. Oftentimes in dystopian
                    stories, the focus of the story is on a character from within the dystopia that rises against it in
                    some act of rebellion
                    <FootRef idx={2} context={footCtx} />. <i>1984</i> and <i>Fahrenheit 451</i> are two such examples.
                    In this novel, the reader is thrown for a loop. Upon his introduction and his immediate display of
                    disdain for their society, something the reader may agree with, Bernard Marx seems like a good
                    candidate for a protagonist. As the story progresses, however, we see that his motivations are not
                    rooted in some moral core, but only in his own self-interest. He takes no issue with scapegoating
                    his friends or abusing the lower castes. He chooses to remain an agent of the system as long as it
                    fits his needs. He merely is a plot device that introduces John to his world, the character that
                    creates meaningful tension with the status quo, coming from outside of the system and later engulfed
                    by it. John comes from a more traditional culture, even backwards in some respects. This creates an
                    excellent counter to the hyper-modern world of England. This places the reader in the temporal and
                    moral middle ground. A place where they are prepared to understand both John's and Mond's opinions.
                </p>
                <p>
                    In a similar vein of thought, <i>Brave New World</i> serves as a foil to more traditional dystopian
                    stories such as <i>1984</i>. Whereas in <i>1984</i>, knowledge and order is controlled top-down
                    through force and fear, the World State of <i>Brave New World</i> has no need for such measures. Its
                    society is self-reinforcing from the bottom-up. The former represents a sort of unstable
                    equilibrium. Order is maintained as long as <i>Ingsoc</i> is the dominant force in their society,
                    however, there is motivation for individuals to challenge that force. Characters such as Wilson
                    Smith demonstrate that, no matter how much oppression or distraction the state imposes upon the
                    people, there is still the underlying will for better treatment.
                </p>
                <p>
                    <i>Fahrenheit 451</i> moves slightly away from <i>1984</i> on the spectrum of dystopia. The people
                    who live along side Guy Montag seem content by default. Entertainment is cheap and plentiful, living
                    conditions are tolerable,and initiatives such as the firemen appear to have genuine and widespread
                    public support. The difficulty here is that the human element still remains. Characters like Guy
                    Montag or Clarisse McClellan show that independent thought still persists; some people are still
                    curious for the world that was left behind. Some characters, like Professor Faber have even
                    experienced it.
                </p>
                <p>
                    In contrast, <i>Brave New World</i> showcases a society that is in a much more stable equilibrium.
                    It shares many qualities with the two others (the knowledge suppression, the supremacy of the state,
                    the annihilation of the individual, etc.), but it has one important difference: human autonomy has
                    been completely eliminated exactly where it needed to be. Stunting the development of the lower
                    castes and conditioning them before even their decanting ensures the stability of the state because
                    nobody has any interest in an alternative. Without the state, all of the castes would not have the
                    jobs that they were conditioned to love. They would not have their endless material consumption or,
                    most importantly, the happiness-giving <i>soma</i>. The crowd of Delta workers rally against John as
                    he tries to "save" them from their <i>soma</i>. Bernard is resentful of his position within the
                    social hierarchy, but would rather be on top himself than change its fundamental structure.
                    Helmholtz believes that his job does not suit his abilities well and desires change, but not in the
                    system itself, only in his manner of serving it. He would rather do his writing in peace without
                    causing much of a disruption. Fair enough. The only character to fundamentally question the
                    structure of the state is John, the only character conditioned by a world separate from it. However,
                    since there is no desire for change from within the system, his efforts for change make little
                    difference. His only option by the end of the story is to escape. Permanently.
                </p>
            </>
        }
        footnotes={
            <>
                <FootNote idx={1} context={footCtx}>
                    No relation.
                </FootNote>
                <FootNote idx={2} context={footCtx}>
                    Results may vary.
                </FootNote>
            </>
        }
        thumbnail={"/media/image/brave-new-world.jpg"}
        anchor={"brave-new-world"}
        footnoteContext={footCtx}
    />
);
