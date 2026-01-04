import React from "react";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Fahrenheit 451"}
        author={"Ray Bradbury"}
        synopsis={
            <>
                Guy Montag is a <i>fireman</i>. When an emergency is called into his station, he, like his comrades
                across the country, slides down his fireman's pole, dons his flame-retardant suit, and races to the
                scene in a fire engine. Pulling up to the fireproof house, as all houses now are, with kerosene in place
                of water and a need to destroy, rather than protect, he stokes the flames until all threats to the state
                have been immolated. Every precaution must be taken when it comes to the threat of the printed word.
                <p>
                    Guy Montag is a <i>stranger</i>. On his way home from his shift, Montag meets a strange young girl,
                    Clarisse McClellan. After identifying him as a fireman through his odor of accelerant, she begins
                    asking him questions...questions that make him think. "Are you happy?" What? Of course he was happy!
                    He had endless entertainment at his fingertips; in fact, he had just recently gotten a third
                    floor-to-ceiling television screen installed in his parlor...although he did not find the endless
                    stream of melodramas very entertaining. He was never bored either! The state made it nearly
                    impossible to be bored, too much temptation to <i>think</i>...although he wished he had time to
                    think. "Are you in love?" Such a ridiculous notion! He had a lovely wife Mildred whom he loved very
                    much...although he wished she would watch her nonstop, personalized feed of "The Family" a little
                    less, perhaps talk to him at night instead of listening to the seashells in her ears that fed her a
                    constant stream of entertainment and advertisements. "Did firemen used to put out fires?" How could
                    Clarisse make such an elementary mistake? The state has extensively documented the history of
                    fire-starting firemen all the way back to the American revolution...although how had they
                    fireproofed houses in the 1700s? <i>"Have you ever taken a book instead of burning it?"</i> N-no...
                </p>
                <p>
                    Guy Montag is a <i>liar</i>. He had stolen a book, and he had finally worked up the courage to read
                    it. During one of his late-night calls, he had snatched a book of poetry during the chaos of the
                    call. He prayed that Fire Chief Beatty would not notice. This call was different, though. Instead of
                    the offender being taken away by the authorities, the woman whose library they had just decimated
                    threw herself into the fire along with it. What could be in those books that was worth dying over?
                    Calling in sick the day after, he planned to find out. Chief Beatty comes over to make sure he is
                    feeling alright...he never calls out of a shift. As Montag lies in bed, with the book hidden under
                    his pillow, the Chief delivers a monologue on why firemen do what they do. As firemen, it is their
                    duty to protect people from the harm that books can cause and to preserve the stability of the
                    state. Books inconvenient, he explains. They are unpopular, they are divisive, they are subversive,
                    they upset people. The state did not ban books, he reveals, the people banned the books themselves!
                    People now live with endless entertainment, personalized to their own perspectives and views. The
                    entertainment is endless, the televisions know them and can tailor what they see so they are never
                    bored. Books do not care who you are, they do not yield to your preferences, their philosophies are
                    only accessible to those few that understand them. Books are <i>destabilizing</i> and the people
                    want them gone. He goes on to explain that it is normal for books to call to firemen, to tempt them
                    into upsetting the delicate balance of society. It is alright if a fireman gives in and takes a
                    book, as long as it is burned within a day. You wouldn't happen to know anything about that, would
                    you Montag?
                </p>
                <p>
                    Guy Montag is a <i>deviant</i>. As Montag enters the fire house for his next shift, Beatty holds out
                    his hand, expectantly. Guy places the book in his hand. After Beatty further deconstructs any
                    thoughts of subversion that Guy may still harbour, the alarm bell screams to life. There are more
                    books to be burned. Tearing through the quiet 3:00 AM streets, they arrive at the offending house.
                    Ready to torch yet another collection, Montag realizes where they are. This is his house. This most
                    recent book was not his first offense. He had been collecting and preserving books for months.
                    Mildred must have called it in. Chief Beatty orders him to burn his collection, after which he will
                    be immediately arrested for his crimes. Beatty taunts Montag, quoting literature at him as he scolds
                    Guy for being so foolish, dares him to <i>do something</i> about it. Backed into a corner, Montag
                    has only one option if he is to stay a free man. He turns from the house and towards Beatty, ignites
                    the pilot flame on his hose...and lets a stream of burning kerosene spew towards his most immediate
                    threat.
                </p>
                <p>
                    Guy Montag is a <i>murderer</i>. Tearing off his suit, Montag takes off into the night. The police
                    were already on their way, he does not have much time. Cutting through back yards and highways, he
                    races to evade the police and the mechanical hound tracking his scent. Peering in through living
                    room windows, he can see his own chase being televised across the city. The people love a spectacle.
                    As the authorities close in, Montag reaches the river. In an effort to throw the hound off of his
                    scent, he jumps in and lets the current take him downstream and to the opposite bank. Hours later,
                    no hound has tracked him down.
                </p>
                <p>
                    Guy Montag is...<i>free</i>. As he wanders down the tracks, he comes across a camp of drifters.
                    These, however, are no ordinary transients. They are professors and thinkers from the long-abandoned
                    institution of higher education. They tell Montag that they collect books, just like him. Although
                    not physically, that would be far too risky. They keep their books in a place where the state cannot
                    find them, in their own minds. Each of them has memorized portions of books that they find
                    meaningful. Together, they form a nationwide mental library. On a small portable television, the
                    group tunes in to Montag's ongoing manhunt. Unable to find the true Montag, the police know they
                    cannot look weak in the eyes of the public. Coming upon a lone man walking in the early hours of the
                    morning, they declare that they have found their man. After dealing with their newly minted
                    scapegoat, they have done their job. One rogue fugitive is a small price to pay for the state's
                    reputation.
                </p>
            </>
        }
        thoughts={
            <>
                <i>Fahrenheit 451</i> is as beautifully written as it is disconcertingly prophetic. One aspect of the
                story that I particularly like is how Bradbury presents the origin of the state-wide ban on books.
                Unlike most other media, where a totalitarian state suddenly materializes and begins issuing top-down,
                draconian edicts, the American state in <i>Fahrenheit 451</i> implements policies that already have
                widespread public support. Being written shortly after the second world war, it does not surprise me
                that the state is portrayed in this manner. The unnerving reality is that it is common for totalitarian
                regimes to have popular support as long as they enforce the will of the majority. The most apt (and
                somewhat default) example comes from 1930's Germany. At the time, the Weimar government was already
                deeply unpopular with the majority of Germans. Similar to the state in the novel, these conditions gave
                the <i>NSDAP</i> an excellent opportunity. They implemented (or at least promised) policies that many
                people actually wanted. Before (and even during) their height of power, control, and malice, the Nazi
                Party was <i>popular</i> among many everyday Germans. To them, that is all that really mattered. Most
                relevant to this book, many of their early, famous book-burnings were not top-down directives from party
                leadership. Instead, they were perpetrated by radicalized university students, a demographic that often
                serves as a "canary in the coal mine" for future social upheaval.
                <p>
                    This book also holds a significant amount of contemporary relevance. This is aside from modern
                    book-burnings and book-bannings, of which there are unfortunately still many. Instead, I would like
                    to highlight the entertainment present in Bradbury's fictional world. Every home has at least one
                    floor-to-ceiling, wall-to-wall television screen. Some even have all four walls covered (something
                    that Mildred is all-too-eager to achieve). These screens are designed to completely envelop and
                    consume their user, both in their dominating physical presence and the addicting properties of their
                    content. From the perspective of Guy (as he observes Mildred), the reader gets a sense of how these
                    screens operate. They are loud, very loud. So loud that it is difficult to think of anything aside
                    from what is on the screen. That is the point, in fact. Mildred's favorite show is "The Family",
                    which plays non-stop on the screens of their parlor. This show, along with the intervening
                    advertisements, is perfectly tailored to Mildred and her tastes. They even mention her by name when
                    it is relevant. Entertainment in this world is not merely limited to the screens, however. At night,
                    Mildred, along with millions of others to be sure, have plugged their ears with small devices that
                    resemble seashells. They produce a constant stream of pleasant sounds, meant to put the user at ease
                    (with the convenient side-effect of making any idle thoughts impossible). Advertisements also play
                    an important role in the story. Aside from the personalized ads that play on the screens, they are
                    omnipresent throughout daily life. The most notable example of this occurs to Montag on the subway
                    where his thoughts on the bible that he has recently acquired are continually interrupted by a
                    jingle for "Denham's Dentifrice". The speakers assault his mind with this phrase. Over. And over.{" "}
                    <i>And over</i> again. This also serves as another indication that rampant consumerism is a driving
                    force of their society. This ad, in particular, nearly drives Guy mad and pushes him further towards
                    his inevitable rebellion. This is all beginning to sound a little too familiar, isn't it?
                </p>
                <p>
                    Another theme that lurks in the background of the book is the specter of nuclear annihilation. At
                    several points within the story, this is alluded to. One time, there is a mention of low-flying
                    military jets, another is an offhanded remark about rising geopolitical tensions, Montag even
                    mentions that the U.S. has won two nuclear wars since 2022. This all comes to a head at the end of
                    the book. Guy Montag and his new conspirator, Professor Faber
                    <FootRef idx={1} />, plan to use the impending war as a catalyst for their plan to destabilize the
                    government. Their plan quickly unravels after Chief Beatty discovers Montag's book stash. However,
                    as Montag is on the run, war is invariably declared. Standing with the group of forsaken professors,
                    he watches as the bombs hit the city that he has just escaped. This is implied to immediately kill
                    Mildred and perhaps even Professor Faber, as it is uncertain that he has gotten far enough from the
                    city. The destruction of the city, and perhaps even the nation, leaves the book off on a bittersweet
                    note as Bradbury implies that the group of scholars will work to spread their knowledge of books in
                    the aftermath.
                </p>
            </>
        }
        footnotes={
            <>
                <FootNote idx={1}>
                    During my summary, I do not mention Professor Faber explicitly in the interest of brevity, but he
                    plays an important role in motivating Montag and helping him resist the persuasions of Chief Beatty.
                </FootNote>
            </>
        }
        thumbnail={"/media/image/fahrenheit-451.jpg"}
        anchor={"fahrenheit-451"}
    />
);
