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
                <p>
                    Even after the cognitive revolution, tribes of Sapiens were overwhelmingly hunter-gathers. They
                    worked relatively little, gathered what they found, and hunted to make up for any difference. If the
                    land became spare with resources, they simply moved somewhere else. While it is difficult to be
                    sure, violence was also likely relatively rare. While there are sites of notable hunter-gather
                    violence, like Jebel Sahaba in Sudan or Nataruk in Kenya, these appear to be relatively rare and
                    fought primarily over local resources.
                </p>
                <p>
                    Around 10,000 BCE, this began to change with the dawn of agriculture in mesopotamia. Instead of
                    freely moving about a large area in search of resources, humans began to stay in a single location
                    and create the resources themselves. This is when we see evidence for the majority of domesticated
                    plants and animals
                    <Footnote>
                        Largely the exact same ones we still see today, in fact. As it turns out, there are relatively
                        few species that are easy to domesticate and maintain. Early humans largely found what they
                        needed from the outset.
                    </Footnote>
                    . In the naive view of history, the Neolithic revolution is usually presented as a collective
                    triumph for humanity. Instead of needing to expend precious energy scouring the land for resources,
                    we could simply relax and wait for the resources to come to us!
                </p>
                <p>
                    However, the evidence paints a very different picture of how this shift was experienced by real
                    humans at the time. Compared to contemporary nomadic tribes, our agricultural ancestors worked
                    longer, had a less diverse diet, and were much more vulnerable to disease, famine, war, and a host
                    of other calamities. As Harari emphasizes, this was a pretty raw deal for those living in villages.
                    Why did this even happen in the first place, then. Nobody would willingly subject themselves and
                    their progeny to such conditions if informed of how they would turn out. That is the key, though.
                    This was a very gradual process, happening over hundreds of years, and each step looked like a
                    relative improvement over before. If a particular field was unusually plentiful with berries and
                    grasses, a tribe may decide to stay near throughout the winter and return in the spring. Eventually,
                    they may have realized that some of their previous harvest was lost on the ground and regrew into
                    even more plants next season. Perhaps burying the seeds produced even better results! On and on this
                    went as groups became tied even tighter to specific areas of land. By the time each stage had
                    completed, nobody was able to remember that any previous stage ever existed. Our myopia has a
                    history as old as our own. This may not have been entirely accidental too. Sites like Göbeklitepe
                    indicate that early farmers may have endured this harsher life in service of strong religious or
                    cultural beliefs. A direct consequence of the last revolution.
                </p>
                <p>
                    As farming became more firmly entrenched, stresses upon farmers grew. Anxiety over being eaten by a
                    stalking lion at worst lasted a few hours, but anxiety around whether crops would fail next season
                    would last months. To help cope with these stresses, people invented new myths: societies. Early
                    governments acted as a method for distributing resources, deciding what to store and what to
                    consume. A failed harvest impacted entire villages, not just individual farmers. This meant that
                    villagers were not just worried for themselves, but for their community as a while, encouraging
                    strong beliefs in a shared culture and the burgeoning political leadership. Around this time,
                    shortly after agriculture took hold, we begin to see evidence of well-defined elites in farming
                    cultures. Administration was a fair amount of work, and thus necessitated that the administrators
                    forego farming themselves, instead relying on the administrated to feed them. From the neolithic to
                    the industrial revolution, around ninety percent of people remained farmers while the remaining ten
                    percent fell into various sub-categories of elites. "History is something that very few people have
                    been doing while everyone else was ploughing fields and carrying water buckets".
                </p>
                <p>
                    A point that this book stresses is that the most important ingredient for a society's success is not
                    a strong people or plentiful resources. Instead, it is belief in a set of common myths. These
                    include more traditional definitions like religion or cultural identity, but also includes the myth
                    of society, money, and collective trust. Without these strong myths, even resource-rich societies
                    crumble.
                </p>
                <p>
                    Tribes and villages required very little administration. At most you may have some central
                    leadership, a handful of warriors, and village elders. Agriculture functions as a sort of cultural
                    attractor. Once a society settles down, it tends to grow, and fast. Settled areas of land can
                    support far more humans than those populated by nomads. These agricultural societies expanded to
                    more and more land, absorbing or displacing any nomadic tribes they encountered. As population
                    ballooned, a lightweight administration was no longer sufficient to organize tens of thousands of
                    people and to ensure that they all cooperate. Thus, bureaucracy was born. The rules of such large
                    societies began to sharply diverge from the instinctual rules that <i>Homo sapiens</i> has lived by
                    for hundreds of millennia. Bureaucrats were individuals who were specifically accustomed to these
                    rules and served to interpret and administer laws. Still, bureaucrats were still humans and had
                    limited memories and recall abilities. The invention of the bureaucrat coincided with another
                    invention: writing.
                </p>
                <p>
                    The maintenance, organization, and retrieval of written documents soon began to occupy the time of
                    bureaucrats the ancient world over. As land changed hands, laws were amended, and history
                    progressed, more and more records were kept. This soon turned the once simple act of retrieval into
                    a complex problem which required deliberate planning to overcome. From within our own minds, we can
                    effortlessly summon nearly any piece of information from our memories almost effortlessly. What are
                    the names of your parents? Which great conquerer founded your home empire? What is the minimum
                    number of goat sacrifices are usually needed to appease your local rain god? Despite the vast hordes
                    of knowledge each mind contained, retrieval oftentimes took no longer than a moment. A vast archive
                    overflowing with bunky clay tablets was another story entirely. The need to organize and retrieve
                    data in this very physical manner necessitated ever more complex organization and indexing schemes.
                    Unfortunately, the full script of language was unsuitable for conversing concise numerical
                    information. This changed sometime in the ninth centry CE, as Arab scholars first began to adopt a
                    strange limited script from newly conquered Indian provinces. It contained far fewer characters than
                    standard Arabic and was only useful when describing very specific things. While this sounds rather
                    limiting, the scholars and bureaucrats of the Abbasid Caliphate quickly realized their usefulness
                    for indexing and calculation. We may recognize these odd symbols as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
                </p>
                <p>
                    Shifting focus towards the evolution of culture over bureaucracy, <i>Sapiens</i> whether there are
                    patterns in cultural changes or if they largely occur at random. One thing that is for certain is
                    that these cultures do indeed change. When the first Tasmanians arrived 40,000 years ago from across
                    a land bridge to Australia, they brought their native culture with them. However, if you were to
                    introduce one of these founding Tasmanians to their ancestors living in 1641, just before first
                    contact with Dutch sailors, they would have struggled to find any similarities between this alien
                    culture and their own! Even in total isolation from the outside world, human cultures shift an
                    evolve. Smaller cultures coalesce into larger ones, and well-established cultures splinter into more
                    localized tribes. However, Harari argues, there is still a pattern to be seen here. Not from merely
                    a birds-eye view, nor even a ten-thousand foot view. Rather, form the view of some cultural spy
                    satellite, a general pattern begins to emerge. Buy-in-large, many isolated cultures gradually begin
                    to unify into much larger ones. In the sixth centura CE, Arabia was populated by hundreds of
                    isolated Bedouin tribes, each with a unique dialect and culture. Less than a centry later, they were
                    nearly all unified under the unitary Rashidun Caliphate. While there are countless counter-examples
                    to this trend, such as how the once mighty Mongol empire shattered into dozens of autonomous
                    Khanates, there is a trend nonetheless. Thousands of years ago, the world was made up of thousands
                    of cultural islands, almost entirely isolated from each other. Each with their own time-keeping
                    systems, languages, and universal myths. Today, there are still many distinct cultures, but the
                    number has shrunk from many hundreds of thousands to a few hundred major cultures. Additionally,
                    while religious and moral disagreements are common, most well-connected cultures can readily agree
                    upon basic measurement standards or the fundamental truths of the universe.
                </p>
                <p>
                    Since the very beginnings of human history trade has persisted in one form or another. Throughout
                    the vast majority of this history, the primary method of exchange was bartering. A talented milliner
                    could barter a high quality hat for a few bushels of apples. Though, when happens when the orchard
                    owner already had all the hats that they fancied? Third and fourth parties could be involved to
                    craft three or four-way trade deals, but this indirect method of trade becomes very complicated very
                    quickly (exponentially so!). Even ancient cultures realized this, leading to rudimentary forms of
                    money. In ancient China, these were Cowry shells, Sumerians used bowls of barley seeds, and Romans
                    used gold coins. This form of grounded and basic money helped to lubricate the great flywheels of
                    commerce throughout the ancient world. It acted as a sort of universal conversion medium. Hats could
                    be converted into apples, mercenaries into new imperial territory, or harvests into church
                    indulgences. Why does money work in this manner? Why would someone agree to give up valuable
                    resources in exchange for some pretty shells or yellow metal? The answer lies in trust. A rice
                    farmer would trust that the shells they receive in exchange for their harvest could then be further
                    exchanged for a new parcel of land, a local delicacy, or a fancy hat. The defining characteristic of
                    money over any other medium of bartering is that the belief in the value of money far outweighs the
                    intrinsic value of the money itself. You cannot eat a gold coin or sea snail shell, but through
                    mutual trust you could easily turn it into all the food you could want. Similar to myths, culture,
                    and writing, money serves as yet another vehicle for mess cooperation between people who do know
                    know each other personally. As societies cooperated more, territories grew, and administration
                    ballooned. Slowly, visions of empire formed in the mind of leaders throughout the ancient world.
                </p>
                <p>
                    <i>Sapiens</i> defines an empire as a political order with two defining characteristics: it must
                    rule over a significant number of distinct cultures and it must have flexible borders with a desire
                    for expansion. These qualities enables empires to be engines of cultural consolidation. The Roman
                    Empire conquered countless individual tribes and people, subsuming them into the latin culture of
                    the empire. Even when it fell in the first millennium, the number of cultures which emerged from its
                    ashes were far fewer than those that originally inhabited the Europe a thousand years earlier.
                    Harari argues that the modern conception of empire harbors two myths that obscure their realities.
                    One is that empires cannot last; they are too unstable and rule over too many people to persist for
                    long periods of time. However, the most common form of human government for the last several
                    thousand years was empire. The Roman empire lasted for a thousand years, two if you cound the
                    byzantines. The middle east has been ruled over by one empire or another since the Neo-assyrian
                    empire in the eighth century BCE. Much of China has been ruled by different incarnations of the
                    Celestial Empire from the Zhou dynasty in 1046 BCE to the Qing, which fell just over a hundred years
                    ago. Additionally, these administrative goliaths were not felled by a noble uprising of oppressed
                    peoples, rather they were primarily upended by internal divisions or outside pressures.
                </p>
                <p>
                    The second myth is that empires are inherently immoral, that they obliterate native cultures and
                    exploit their populace. A strong justification for this claim could be made about ancient empires
                    like the Assyrian, Babylonian, and Hittite empires which conquered and plundered neighboring lands,
                    bringing riches back to their capitols. Empire existed only for the benefit of the conquering
                    peoples. This conception, at least internally changed in 550 BCE with Cyrus the Great of Persia. He
                    saw himself not as a Persian king ruling over other cultures, but also as a king of those cultures
                    as well. Instead of obstacles in need of oppression, Cyrus and the rulers of simular empires, began
                    to see conquered people as future citizens. Outsiders became targets for assimilation, rather than
                    for annihilation. A prime example of a similar empire was the Chinese Han from 206 BCE. The Han so
                    thoroughly assimilated conquered peoples that the majority of Eastern, Northern, and Southern China
                    considers themselves as Han over 2000 years later. This is where the immorality of empire becomes
                    messy. When empires conquer new territory they tend to encourage (peacefully or not) its new
                    subjects to assimilate into imperial culture. As empires rise and fall, a newly <i>conquered</i>{" "}
                    culture likely once belonged to a <i>conquering</i> culture themselves. When the British colonized
                    Northern India, they were wresting control away from Muslim empires which themselves had previously
                    invaded the subcontinent, displacing yet more empires which had once conquered the land for
                    themselves many centuries before. By reducing the participation in empire to a sin, it becomes
                    exceedingly difficult to find cultures which are not tainted by some empire in the recent or distant
                    past
                    <Footnote>
                        This chapter, along with any discussion of past empires, comes with the weight of significant
                        cultural and moral baggage. Harari's point here is not to argue that empires are somehow an
                        unambiguously good and unifying force. The tendency of modern empires to assimilate rather than
                        annihilate does not make any atrocities committed in the name of that assimilation and less
                        immoral. The main goal of this chapter was to discuss what an empire is, why they have tended to
                        be the dominant form of government in "recent" millennia, and why it is difficult to cleanly
                        separate conquerors from the conquered.
                    </Footnote>
                    .
                </p>
            </BookTileSynopsis>
            <BookTileThoughts>
                <p></p>
            </BookTileThoughts>
            <hr />
            <FootnoteList />
        </FootnoteProvider>
    </BookTile>
);
