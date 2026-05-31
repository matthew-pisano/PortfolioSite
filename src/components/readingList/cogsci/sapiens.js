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
                <p>
                    Following the unitary and cooperative powers of money and empire, Harari argues that religion
                    represents a third great unifier of humanity. He defines religions as "a system of human norms and
                    values that is founded on belief in a superhuman order". For millennia, nearly all religions
                    embodied these basic principles. Locan bands or tribes observed local customs, myths, and
                    superstitions, all rooted in the belief in some supernatural force. For the majority of modern
                    humans, these localized of religions seem somewhat unfamiliar. Around the first millennium BCE, a
                    new class of religions began to emerge: those that claimed to know not only local truths, but
                    universal truths that applied to all humans. These religions were also very commonly missionary.
                    Since adherents believed that their system of myths and customs was universal, it was their duty to
                    spread their religion to all humans. Modern exemplars of this category include Christianity, Islam,
                    or Buddhism. The earliest human religions were likely some form of animism, the belief that the
                    natural world was permeated with sprits. Human spirits were embedded within this natural order,
                    rather than above it. As agriculture began to spread, humans began to settle into villages and later
                    cities.
                </p>
                <p>
                    Throughout this process, humans began to observe their unique changes on the natural world. As
                    Humans built great cities and tamed nature, the notion that our spirits were equal to those that we
                    conquered grew less believable. Over time, spirits began to morph into gods, humanized gods which
                    held humans as special as we saw ourselves. These new polytheistic religions believed that gods
                    influenced the natural world with human-like agency and could therefore be bargained with like
                    humans as well. However, unlike the God of monotheism, the powers of polytheistic god were not
                    universal. They too were bound by yet greater powers: the ancient Greeks had the three sisters of
                    Fate and Hindus had the all-encompassing power of Atman. While lesser gods could be prayed to and
                    bargained with, these forces had not interest in the struggles of humans. Due to this plurality of
                    lesser gods, it was common for interacting peoples to adopt each other's deities into their own
                    religions. Conquering empires tended to tolerate local religions so long as conquered peoples
                    incorporated the empire's chosen pantheon. Between two and three thousand years ago, another shift
                    began. In some cultures, the importance of one God began to eclipse all others until belief was
                    centered around one supreme being that cared deeply in the actions of humans. Yet, these fresh
                    monotheistic religions were often localized, with their chosen God mainly concerned with specific
                    peoples. Harari highlights Judaism as an example, as they believe that God is chiefly interested in
                    the plight of the Jewish people and the holy land in particular
                    <Footnote>
                        The history of early Judaism offers a microcosm of how this process occurred within other
                        monotheistic religions as the emerged from polytheistic ones. Judaism originated in the
                        levantine province of Yehud, from within the Achaemenid Empire that was originally founded by
                        Cyrus the Great. Approximately 3200 years ago, the Iron Age semetic peoples of the levant
                        largely believed in the polytheistic Canaanite religion. This religion worshiped a diverse
                        pantheon of gods with the supreme creator god "El" as their patriarch. Over time, ancient
                        Israelites formed their own sect known as Yahwism, a monolatristic religion which believed in
                        many gods, but primarily worshiped a single god. Their chosen god, who serves was the namesake
                        for the religion, began to overshadow the importance of the others, eventually taking on a role
                        similar to El. In fact, the word El and relationships originally associated with the Canaanite
                        god, were eventually associated directly with the God of Yahwism in scripture. Over time,
                        ancient Yahwism denied the existence of other Canaanite gods as it evolved into a strictly
                        monotheistic religion. This religion served as the foundation upon which Judaism grew over the
                        next three thousand years.
                    </Footnote>
                    . One of the first evangelizing, non-localized monotheistic religions was Christianity. Christians
                    did (and still do) believe that God is concerned with all humans and that it is the duty of every
                    member of their religion to spread belief in the gospel to all other humans. Centuries later, early
                    muslims emerged from the deserts of Arabia harboring similar beliefs about the universal goal of
                    their religion. One key difference between these religions and polytheistic ones is that, since
                    monotheists commonly believe that their chosen God is universal, belief in other gods is forbidden.
                    After two millennia of evangelization and conversions, the majority of all humans now believe in one
                    monotheistic religion or another. Between adherents of a common religion, their belief served as
                    another way in which strangers could trust and cooperate with each other.
                </p>
                <p>
                    Suppose an ancient Canaanite fell asleep in 1200 BCE and awoke 2500 years later in 1300 CE. The
                    people around them would speak a strange language, worship unfamiliar gods, and follow alian
                    traditions. Yet, it would likely be possible to convince the Canaanite that they had simply woken up
                    in some far-off kingdom. Most people were still farmers, artisans, or shepherds. They still wore
                    robes and jewelry made of identifiable materials, and they still lived in dwellings similar to those
                    that the Canaanite had themselves. Now suppose someone else in the same area, then ruled over by the
                    Mamluk Sultanate, slept and did not wake until merely 700 years had passed. Less than a third of the
                    time has elapsed in this scenario, but the medieval levantine would hardley believe they were on the
                    same planet had they found themselves looking up at the shining skyscrapers of the modern Tel Aviv
                    skyline.
                </p>
                <p>
                    Something very strange has happened over the last few centuries of human history. Technological,
                    economic, and imperial development have all advanced far more rapidly than at any other time. A
                    handful of nations, from a continent that was once a backwater of the medieval world, had token over
                    the planet before other nations adopted their technology and rose to meet them. In many modern
                    nations, there are far more economists, bureaucrats, and engineers than there are farmers,
                    shepherds, and blacksmiths. How? Harari argues that, by discovering our own ignorance about the
                    universe, were we able to uncover more of its truth than ever before. Since the scientific
                    revolution, three core beliefs have emerged that have enabled believers to make groundbreaking
                    discovery after groundbreaking discovery. The first is that we do not know everything. In the
                    seventeenth century, this was a very unorthodox way of thinking. Many religions, especially modern
                    religions, claim to know all universal and unalterable truths. By believing in their God or gods and
                    studying their scriptures, one can know all that is worth knowing. The second core tenet of
                    scientific thought is that empirical observation and calculation can reveal new truths to us. For
                    millennia, if a scholar wanted new knowledge revealed to them, they need only ask a religious
                    thought leader, study an ancient text, or pray for an answer to come to them. Finally, those that
                    believed in the scientific process also believed hat they could derive new capabilities and
                    predictions from their theories. Prior to the late modern era, the majority of new technologies were
                    discovered through blind trial and error. A blacksmith would forge swords and armour out of
                    different alloys repeatedly until they happened upon a new metal that they found to be stronger and
                    more durable than before. The idea that mere humans could suddenly derive radically new abilities
                    without divine intervention was the height of hubris. Not only do scientists believe that this is
                    possible, they believe that old discoveries, even those which had enabled significant technological
                    advancement, could be proven false! Instead of becoming embroiled in dogmatic debate, scientists can
                    rely on mathematical proof or empirical observation. Unless a flaw in the execution of a proof or in
                    the quality of an observation, scientists consider the matter as settled for now.
                </p>
                <p>
                    Science, however, is a very costly endeavours. Those doing research do not have time to grow crops
                    and feed themselves. They cannot craft all of their instruments on their own either. The pursuit of
                    scientific inquiry requires the cooperation of many individuals and strong mechanisms of trust. To
                    gain access to these resources and this level of organization, scientists oftentimes must turn to
                    their governments for enablement. In recent history, the pursuit of science has been entangled with
                    the pursuit of empire. A vast empire's worth of resources enabled scientific advancement and
                    scientific advancement enabled the further expansion of the empire. This feedback loop is obvious in
                    twenty-first century retrospect, but even during the enlightenment in seventeenth century Europe,
                    this was far from apparent. Science had uncovered truths about the laws of Earth and the laws of the
                    heavens, but had yet to give Europe a decisive advantage over other old-world empires. By this time,
                    many European states, such as France or Britain, had conquered vast empires from native peoples of
                    Iron Age technology. The empires of Asia, like the Ottomans, Mughals, or Chinese, were still their
                    technological equals. How, then, was Europe able to later defeat these great powers rather than the
                    inverse? The core difference between European and Asian empires at this time, <i>Sapiens</i> argues,
                    was their attitude towards conquest. Throughout most of history, a conquering empire did not expand
                    to discover anything new about the world; they had all the truth they needed from their religion.
                    Rather, the goal was to enforce their universal truth upon others: the truth of their culture, of
                    their beliefs, and of their emperor. Early-modern Europeans took a slightly different approach.
                    Conquests were still a means to an end of territory, glory, and religious conversions, but there was
                    another goal as well: discovery. As scientific thought became more common in Europe, empire began to
                    admit that they did not have the complete truth within their empire. The only way to uncover
                    remaining truths was to expand. Botanists were brought along military expeditions to indonesia,
                    biologists to the Galapagos, and historians to Egypt. Each new conquest brought new knowledge back
                    to the capitol. Importantly, many capitols developed a culture of discovery and trust in scientific
                    thought. This aspect of Western European cultures, largely unique at the time, enabled empires to
                    convert this knowledge into new weapons and a means for further expansion. By the mid eighteenth
                    century, this feedback loop had enabled European empires to subjugate vast territories in the
                    Americas, Africa, and Oceania. Yet, the empires of Asia remained beyond Europe's strength. Conquest,
                    however, was a very costly affair and traditional monetary systems were unable to distribute
                    resources with the required speed and efficiency that empires needed to fully exploit their
                    technological advantages.
                </p>
                <p>
                    Until the early eighteenth century in Europe, money had largely played the same role in the economy
                    as it had for thousands of years. It was a medium of exchange from one physical good to another. You
                    could exchange a hat for money and that same money for a trip to the barber. It was rare to exchange
                    money for something that had yet to exist, or for something that may never exist at all. Simple
                    loans had existed as well, but were often small, short, and with high interest rates. People were
                    very risk-averse when it came to their precious ducats, livres, or pounds. If someone defaulted on
                    their debt, legal methods for recovering that debt was rare, especially if the debtor was a state.
                    As scientific and legal thought advanced, so too did economic thought. After breaking away form the
                    Spanish empire in 1648, the Netherlands soon became Europe's financial hub. Why, the low-lying
                    marshland had little to offer in terms of people or resources. What they did have to offer, however,
                    was rule of law. Lending in early modern Europe was risky business, especially if the lendee had
                    government connections. If the lender themselves was not well connected, someone could simply refuse
                    to pay and there was not much the lender could do about it. The Dutch, however, had strong private
                    property rights and a relatively independent judicial system for the time. This encouraged lending
                    and investment unlike any other place in Europe, since there was at least some recourse if a loan or
                    investment went sour. Banks could lend money to upstart enterprises, get paid back with interest,
                    and stimulate further investment back into the economy. Prior to this, economics was viewed as a
                    zero-sum game, in order for one person to gain resources, those resources must be taken from someone
                    else (conceptually or not). As the cycle of investment and reinvestment grew the Dutch economy, a
                    new idea began to take hold: perhaps the economic prosperity of some could benefit the economic
                    prosperity of all, a growing pie! This idea meshed very well with the new notion of scientific
                    process. This became a self-fulfilling prophecy, the more people trusted that the economy could
                    grow, the more it grew indeed. Adam Smith further popularized this notion in{" "}
                    <i>The Wealth of Nations</i>, encouraging a portion of present profits to be reinvested to generate
                    yet greater profits in the future. With this, modern capitalism was born. Whereas traditional money
                    was used for the transaction of physical goods, capital could be used for goods, but also
                    investments and speculative assets. Ideas or technologies that once seemed outlandish could be
                    realized if enough investors believed that it could be made real
                    <Footnote>And ideally make them fabulously wealthy along the way.</Footnote>.
                </p>
                <p>
                    Like and economic manifesto, <i>The Wealth of Nations</i> reads as a very optimistic take on the
                    future potential of capitalism. While it provides unparalleled opportunities for growth and
                    advancement, it also leads to many perverse incentives that were yet unrealized in past economic
                    systems. Capital is an extremely efficient vehicle for concentrating power and influence. And like
                    anything to do with power and influence, it inevitably finds itself intertwined with politics.
                    Opinions as to the nature of the political-capital relationship are often reducible to opinions of
                    the free market, Harari asserts. The strictest believers in the free market argue that capital, the
                    market, should be free to influence itself and the political machinery that supports it, but not the
                    other way around. The market should be free to evolve due only to internal pressures, with external
                    government control limited as much as possible. This purist view, says Harari, is naive. At the core
                    of any economic system is trust, trust that the system will work in a manner that (more or less)
                    benefits the people. The market on its own offers no protections of this trust from fraud, theft, or
                    violence, this is the exclusive domain of government. When states fail to regulate markets
                    effectively, market speculation and monopolies can cause economic ruin and damage the trust that
                    people have in the system. Capitalism, <i>Sapiens</i> argues, not only influences how we treat
                    capital, but also other humans. In the Middle Ages slavery in Europe was relatively rare. Peasants
                    largely provided all the cheap labour that states needed to function. This changed dramatically
                    after Europeans became aware of the New World and the resources it offered. Sugar was one such
                    resource. Prior to the Colombian exchange, sugar was prohibitively expensive in Europe as Europeans
                    rarely controlled land where sugar cane could grow. When Spaniards began to colonize the caribbean,
                    they found sugar in abundance. They established large sugar plantations, along with tobacco, gold,
                    and silver mines, and began exporting sugar to Europe en masse. Consequently, sugar prices plummeted
                    and demand soared for the myriad of confections and sweets that used it. There was a problem,
                    however. Despite the high demand, supply remained constrained as few people were able to work the
                    plantations. Europeans were few in number and susceptible to local diseases like malaria and the
                    native population had shrunk dramatically through genocide and plague. With free market and capital
                    incentives encouraging more and more plantations, their owners needed to find a source of labour.
                    They soon turned their attention towards Africa which had a large population that was resistant to
                    tropical disease, and was technologically behind Europe. Thus the slave trade was born, not out of
                    callous hatred for Africans
                    <Footnote>
                        Though hatred was not the primary driving factor, early modern Europeans were in no shortage of
                        marginalized groups, it certainly played a powerful role in the decision fo enslave ten million
                        people. Many Europeans of the time overtly believed themselves to be superior towards
                        non-Europeans of different races, different cultures, and different religions. The power of "the
                        other" and the ability for humans to dehumanize other humans should never be underestimated.
                    </Footnote>
                    , but out of the cold indifference of the free market. And this is merely the most egregious out of
                    many similar examples: The Great Bangal Famine and Leopold II's Congo Free State are other examples
                    of the prioritization of capital over human wellbeing.
                </p>
                <p>Capitalism's promise of an eternally growing pie sounds a bit too good to be true, though</p>
            </BookTileSynopsis>
            <BookTileThoughts>
                <p></p>
            </BookTileThoughts>
            <hr />
            <FootnoteList />
        </FootnoteProvider>
    </BookTile>
);
