import React, { createContext } from "react";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";

const footCtx = createContext(null);

export default (
    <>
        <BookTile
            title={"The Myth of Sisyphus"}
            author={"Albert Camus"}
            synopsis={
                <>
                    Camus' essay, <i>The Myth of Sisyphus</i>, concerns the meaning of life and the implications of this
                    ultimate question. The text first presents two options: existence has some valid meaning (subjective
                    or objective) or that we cannot justify assigning any meaning to the act of existence. To believe in
                    the former, one would need to ignore or deny the absurd. If one can see no meaning whatsoever within
                    continued existence, it can be concluded that the cessation of that existence is the only reasonable
                    conclusion. Camus disagrees, however. Must we create meaning from nothing in order to justify our
                    own continued existence to ourselves? Can a life be lived while fully embracing the absurd? He
                    believes so; the remainder of the text is dedicated to following these questions to their logical
                    implications.
                    <p>
                        To better understand Camus' ideas, one must first understand what the absurd truly entails. By
                        its nature, the absurd is difficult to describe directly, so the text instead employs metaphor
                        to convey the concept. The vastness of the past, the ceaseless passage of time, the ultimate
                        fate that we will experience along with countless others all inspire feelings of absurdity. What
                        meaning can we make for ourselves in a world of billions? How do our lives differ from the
                        hundreds of billions that have come before us? Camus shows that this also applies on a more
                        abstract level. Scientists and philosophers are often driven by a desire for a unified truth, a
                        "nostalgia for unity". Finding this truth through theory or observation answers "how" some
                        phenomena comes into existence, but not "why" on a philosophical level. Experimentation and
                        observation can yield descriptive theories, but not prescriptive ones. We can identify what
                        something <i>is</i>, but never what it <i>ought</i> to be.
                    </p>
                    <p>
                        There lies a contradiction at the heart of Camus' absurd. Instinctively, we are driven to search
                        for patterns and meaning in our observations. This is contrasted by a universe that does not
                        provide the rich meaning that we desire, only cold and self-perpetuating patterns
                        <FootRef idx={1} context={footCtx} />. The absurd is not a property of ourselves or the universe
                        in isolation. It only appears once the two are juxtaposed with each other. One of Camus' central
                        points is that being aware of this contradiction is not a comfortable experience. However, any
                        attempt to mitigate it would be simply evading the absurd, rather than acknowledging it. He asks
                        if we can live with ourselves while fully acknowledging the absurd, not whether we can bury it.
                        Camus calls the act of evading the absurd in this manner "philosophical suicide", a confession
                        that the absurd is not worth the stress of consideration.
                    </p>
                    <p>
                        The text introduces the notion of "the absurd man". This person is fully aware of the absurd,
                        but crucially does not deny it. For such a person, what are their options after confronting the
                        absurd? Camus states that the first choice is simply to commit suicide, as one faced with a life
                        with no meaning and therefore no reason for their continued existence. Camus classifies this
                        action as a capitulation to the absurd. Like its philosophical counterpart, it declares that the
                        absurd is simply too much to bear. Instead, he identifies three paths that acknowledge the
                        absurd without giving in to it. The first is to be in revolt against the absurd. When faced with
                        an irrational universe and the inevitability of one's demise, the most resolute path is to live
                        life to the fullest, to revolt against an uncaring existence. It represents an acknowledgement
                        of the absurd without allowing it to break one down. The second path is the one of true freedom.
                        This is not only freedom in the sense that we can pursue set goals, but in a more broad sense.
                        It is freedom from labels or roles. Embracing freedom enables one's revolt by ignoring
                        artificial constraints like morality or religious dogma. The third is the path of passion. By
                        abandoning the notion of a set meaning for life, one also abandons a reference point for the
                        quality of experiences. Without a universal ideal, to which scale are experiences set to? Camus
                        instead advocates for a greater quantity and diversity of experiences in life. A person that
                        embraces the absurd perpetually lives in the present, free from guilt or anxiety from
                        self-imposed nostalgia or guilt. This ensures a quantity of life experiences that can serve as a
                        psychological substitute for a higher purpose to life.
                    </p>
                    <p>
                        Camus sees three archetypes that emulate the absurd principles of revolt, freedom, and passion:
                        The Seducer, The Actor, and The Conquerer. Though he does not directly endorse any of these
                        three lifestyles, they help to illustrate his idea of "the absurd man". These roles are free
                        from traditional morals, only guided by their own integrity and internal moral compas, free from
                        religious or cultural pressures. The fictional character Don Juan embodies Camus' seducer. He
                        moves from woman to woman, convincing them to fall for him with the same repetitions of
                        techniques and never staying for too long with any of them. Don Juan lives for his own form of
                        conquest, unconcerned with the wellbeing of others or the implications of his actions. The actor
                        also embraces the absurd. Throughout their career, an actor dons countless roles, experiencing
                        the world through the eyes of their character. Unlike authors, Camus argues, the fame and
                        influence of actors is limited to their lifetime. In contrast to the writer, it is rare for the
                        actor to experience a surge in popularity and notoriety years after their death. The actor must
                        therefore live their life with the fullest intensity, for there will be no resurgence after
                        death. Recognizing this inevitability ties the actor to the absurd. The conquerer embodies
                        Camus' ideas at their most intense. The conquerer knows that countless leaders came before them
                        and countless came after; there is no illusion of eternal empire or legacy. Navigating the risky
                        world of politics and warfare, the conqueror must live their life at the highest intensity, lest
                        they be conquered themselves. The act of political or military revolt is therefore tied to a
                        revolt against the absurd so long as the participants are aware of its futility, yet push onward
                        regardless.
                    </p>
                    <p>
                        In previous sections, Camus has described his absurd man as someone who lives a life of
                        contradiction: they live a full and intense life, while still aware of the meaninglessness of
                        their actions. Camus connects this lifestyle to that of the artist (writers of fiction in
                        particular). These people create entire worlds of their own, fleshing out characters, plots, and
                        environments while fully aware of its detachment from reality. This fiction cannot add anything
                        real to base reality, but can enrich its experience and convey a point of view to the audience.
                        Art cannot transcend the meaninglessness of life, but it can form a revolt against it as the
                        artist asserts their own perspective upon the world.
                    </p>
                    <p>
                        The absurd artist must continue their work, fully aware that it is ultimately in vain. Camus
                        asserts that, if there is no life after death, one can only assert themselves to the world
                        around them during their natural life. This act requires discipline and the ability to resist
                        notions of legacy or salvation. An artist's work exists to present their perspective to the
                        greater world, but not to make grand statements about its underlying meaning. For the absurd
                        man, the nature of the universe forbids such statements from ever holding any real meaning. To
                        Camus, life ends with the finality of death, but any time before then is fully up to our
                        discretion. The will of the absurd man is unbounded by traditional morals or divine judgement,
                        they are free to live precisely as they choose.
                    </p>
                    <p>
                        Camus ends his essay with the myth of Sisyphus itself
                        <FootRef idx={2} context={footCtx} />. Sisyphus, the man, was once the King of Ephyra, known for
                        his greed, cunning, and trickery. According to some Greek legends, Sisyphus blackmails Zeus into
                        granting his city a natural spring for water. Enraged, Zeus banishes him to the underworld for
                        his treachery. Here, he tricks both Thanatos and Persephone, allowing him to cheat death twice.
                        Eventually he is dragged back to the underworld and condemned to his eternal punishment. Here,
                        he is doomed to roll a rock up to the top of a mountain every day, only for it to roll back down
                        as soon as it reaches the top. The gods reasoned that this eternal, futile labor constituted the
                        most insulting of punishments. Camus sees this differently, however. To him, Sisyphus is an
                        absurdist archetype. His trickery of the gods and determination to live for himself embodies
                        Camus' absurd man. As he toils in the underworld, he is conscious and aware of his eternal fate.
                        Specifically, Camus is interested in his state of mind just after the rock begins to roll back
                        down the mountain. As he climbs back down, he contemplates the absurdity of his life after
                        death. He understands the futility of his work, yet strains against the rock day after day
                        regardless. Any feelings of sorrow that he may retain are tied to his nostalgia for his previous
                        life and his hope for an end to his condemnation. Accepting his fate, Camus argues, frees
                        Sisyphus from these feelings. As Sisyphus rolls the rock up the mountain every day, his only
                        option is to approach his work with joy after he has accepted the absurdity of his condition. To
                        Camus, there is only one rational conclusion: that one must imagine Sisyphus happy.
                    </p>
                </>
            }
            thoughts={
                <>
                    The version of absurdism that Camus presents in this work strongly advocates for individualism.
                    Camus' absurd man, in his revolt against the absurd, fills his life with an extreme quantity of
                    experiences for himself. Crucially, the absurd man should not be concerned with traditional morals
                    or religious dogma, only with his internal code of ethics, whatever that may be. To live one's life
                    according to external ethical systems would be to assign intrinsic meaning to those systems. This
                    runs counter to the apparent meaninglessness of an absurd universe. If there is no meaning to
                    existence, Camus appears to suggest that it is every man for themselves. My opinion is that Camus'
                    argument for absurdity is consistent with our observations, but how he incorporates that knowledge
                    into his behavior is contradictory.
                    <p>
                        Taking absurdity at its extreme, then the extremely absurd man would not allow any set of rules
                        or dogma to govern his behavior. His only core value would be to acknowledge the absurdity of
                        his life. Camus' suggestion of radical individualism through revolt, freedom, and passion can in
                        and of themselves be considered a sort of dogma. "You are not truly living the absurd if you do
                        not hold these core tenets." This represents a sort of contradiction, though not in the absurd
                        sense. Suggesting that "There is no intrinsic meaning to life, therefore everyone should revolt
                        and live life to their own fullest" suddenly constitutes the sort of intrinsic meaning that
                        absurdism rejects. The absurd man, in his revolt against the absurd becomes closer to a
                        traditional existentialist, recognizing the absurdity of existence, yet striving to forge his
                        own meaning regardless through individual experience.
                    </p>
                    <p>
                        If the complete rejection of meaning and dogma simply results in different meaning and dogma,
                        what then? The search for meaning in an absurd universe is doomed to come up short. We as humans
                        (even those that accept the absurd) will still tend to prefer concrete behavioral frameworks.
                        Why not select a framework that at least pretends to have an ethical foundation? From the
                        standpoint of the uncaring universe, this would be no more "meaningful" than Camus' individual
                        revolt or even acting randomly. Though, it may be easier to justify to the social proclivities
                        of every healthy human brain (absurd or not). "The localized regions of particles are still
                        following the strict rules of the universe, but at least they think they are being nice to each
                        other in the process." Now, this sort of humanist absurdism is also in contradiction with
                        itself: it also tries to materialize meaning from nothingness. It, like any moral system or
                        philosophy
                        <FootRef idx={3} context={footCtx} />, requires some <i>doublethink</i> to be compatible with an
                        acknowledgement of the absurd. I do not consider this stance a rejection or dilution of the
                        absurd, as it always remains in the background. With this in mind, a more humanist approach to
                        the absurd is as valid as any other as long as it is not mistaken for an objective purpose to
                        existence.
                    </p>
                    <p>
                        From a realist point of view, humans are not automata. Each of us carries millions of years of
                        social evolution in the backs of our minds. Basing a system of human behavior on philosophy
                        alone may seem elegant in principle, but often faces headwinds in practice. This is similar to
                        how the elegance of mathematical theory is often diluted by physical assumptions and caveats. If
                        a significant minority adopted an absurd individualist philosophy, the lack of social cohesion
                        would limit others from exercising similar philosophies as effectively. Acknowledging the
                        importance of our evolved senses of collaboration would allow for a more uniform application of
                        this variety of absurd philosophy. Denying our cognitive nature is as counterproductive as
                        denying the absurd itself.
                    </p>
                </>
            }
            footnotes={
                <>
                    <FootNote idx={1} context={footCtx}>
                        It is interesting to contemplate what it would look like if that were not the case. Any attempt
                        of the universe to show us some sort of true meaning would, by definition, be yet another
                        natural phenomena, something to be coldly theorized about. This reminds me of fictions with
                        complex and rule-based magic systems. At a certain point, it ceases to be magic and morphs into
                        yet another branch of the sciences, something to be studied and replicated, devoid of whimsy.
                    </FootNote>
                    <FootNote idx={2} context={footCtx}>
                        Camus spends very little time explaining how Sisyphus came into his famous punishment, but I
                        think it is worth a few words here for context.
                    </FootNote>
                    <FootNote idx={3} context={footCtx}>
                        Including absurdism itself, in my opinion.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/myth-of-sisyphus.jpg"}
            anchor={"sisyphus"}
            footnoteContext={footCtx}
        />
    </>
);
