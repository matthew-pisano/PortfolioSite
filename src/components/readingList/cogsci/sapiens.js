import React from "react";

import { BookTile, BookTileSynopsis, BookTileThoughts } from "@/components/readingList/BookTile";
import { Footnote, FootnoteList, FootnoteProvider } from "@/components/widgets/FootNote";

let bookTileAnchor = "sapiens";

export default (
    <BookTile
        title={"Sapiens: A Brief History of Humankind"}
        author={"Yuval Noah Harari"}
        thumbnail={"/media/image/books/sapiens.jpg"}
        anchor={bookTileAnchor}>
        <FootnoteProvider label={bookTileAnchor}>
            <BookTileSynopsis>
                <p>
                    Rather humbly, we have bestowed upon our species the title of <i>Homo Sapiens</i>: "wise man".
                    Superficially, this implies two things: that our species is a unique and unparalleled product of
                    evolution and that we are, in aggregate "wise". Our species naturally and unalterably embodies
                    wisdom and foresight; progress marches endlessly and monotonically forward. Yuval Noah Harari's{" "}
                    <i>Sapiens</i>, more than any other book, demonstrates the naivety of these notions.
                </p>
                <p>
                    This book examines history, not from a historical or even anthropocentric perspective, but from a
                    human perspective. That is, not as our ancestors recorded events or even how we would like to think
                    history played out. Instead, <i>Sapiens</i> takes a much more detached and objective perspective.
                </p>
                <p>
                    Our species is certainly not unique. <i>Australopithecus afarensis</i> individuals were using crude,
                    chipped tools millions of years before modern humans. Members of the <i>Homo habilis</i> species
                    regularly used much more advanced "Oldowan" stone tools which required genuine skill and
                    craftsmanship to create.
                    <i>Homo erectus</i> had our ancestors beat out of Africa by hundreds of thousands of years.{" "}
                    <i>Homo neanderthalensis</i> was already well established in Eurasia by the time our species
                    arrived. They created many works of art, engravings, and sculpture. They cared for their sick and
                    formed tight family units. They explored and discovered the world around them long before the "true"
                    wise men had arrived.
                </p>
                <p>
                    The preceding paragraph contains a significant omission, and a rather uncomfortable one at that. We
                    may not be the first species of human, but we are the last one standing. Harari makes sure to
                    highlight an unsettling point: Denisovans went extinct 51,000 years ago, Neanderthals went extinct
                    40,000 years ago, the last evidence of <i>Homo luzonensis</i> is from 49,000 years ago, the last{" "}
                    <i>Homo floresiensis</i> died around 50,000 years ago. Over 170 other species of megafauna died out
                    around the same time. <i>Homo sapiens</i> has just left Africa and was rapidly expanding throughout
                    the areas which these species once lived. Paleolithic climate change may be partially to blame, but
                    Harari cites compelling evidence that our species played an active role in the departures of these
                    species.
                </p>
                <p>
                    Why? How was one single species able to not only outcompete its close relatives, but to also cause
                    the level of mass-extinction usually reserved for major climactic events? Why was this species{" "}
                    <i>Homo sapiens</i> in particular? Why not <i>Homo neanderthalensis</i> or <i>Homo erectus</i>? A
                    tempting answer would be that we are somehow particularly cunning, competitive, or just plain cruel.
                    The thesis of <i>Sapiens</i> would argue that this is a very anthropocentric way of thinking.
                    Ironically, our unprecedented ability for cooperation is likely responsible for this calamity. An
                    event that the book refers to as the "Cognitive Revolution".
                </p>
                <p>
                    Between 70,000 and 30,000 years ago, and for unknown reasons, a change happened in how Sapiens bagan
                    to organize themselves. Before this, and similar to many of our Homo compatriots, our ancestors
                    primarily organized themselves into bands. Tightly knit groups of ten to fifty individuals. Every
                    member of a band shared a personal relationship with each other and many were directly related
                    <Footnote>
                        Evidence of this banded past still echoes today in the number of close relationships that we can
                        reliably maintain. Commonly referred to as Dunbar's number, most humans can only maintain 150
                        stable, personal relationships. The closest of which reduce down to only fifty.
                    </Footnote>
                    . These bands were largely egalitarian and relied in trust and personal relationships to persist. If
                    a band grew much beyond this size, members could no longer reliably maintain a relationship with all
                    others. Without this glue, bands fissioned and lost contact. Around the time of the cognitive
                    revolution, this changed. Bands within an area began to coalesce into larger tribes. This was not
                    because our ancestors gained superhuman relationship forming abilities. Tribes were not held
                    together by kinship alone, they primarily relied upon commonly shared beliefs, myths, and political
                    structures. This is the real impact of the revolution, the ability to organize ourselves around
                    abstract concepts like myth and culture
                    <Footnote>
                        Those who have read Sapolsky's <i>Behave</i> or similar books may recall that brains are not
                        very good at inventing brand new concepts from scratch. We commonly describe novel concepts in
                        terms of familiar ones. The same happens here as well. Even as tribes began to grow and cultural
                        myth developed, humans never lost the importance of a tight-knit band or family unit. As these
                        new concepts spread, we defined them in terms of the old. Cultures are figments of our
                        collective imaginations, yet they can be of kin just as individuals can. Nations can be viewed
                        as genuine siblings or comrades. Many religions encourage their adherents to think of fellow
                        believers as their personal brothers and sisters. We define these myths in the same familial
                        language with which we originally evolved to think in.
                    </Footnote>
                    . Soon, our tribes grew larger and better organized with rudimentary political structures. This is
                    what allowed ous species to force other humans to extinction: a single Sapien was unlikely to best a
                    Neanderthal in combat, but a well organized tribe of hundreds of Sapiens could handily defeat even
                    the most hardened band of a few dozen Neanderthals. We did not out-smart or physically overpower
                    other humans, we simply out-communicated them.
                </p>
                <p>Even after the cognitive revolution, tribes of Sapiens were overwhelmingly hunter-gathers.</p>
            </BookTileSynopsis>
            <BookTileThoughts>
                <p></p>
            </BookTileThoughts>
            <hr />
            <FootnoteList />
        </FootnoteProvider>
    </BookTile>
);
