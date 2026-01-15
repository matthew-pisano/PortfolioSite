import React from "react";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";

export default (
    <>
        <BookTile
            title={"The Myth of Sisyphus"}
            author={"Albert Camus"}
            synopsis={
                <>
                    Camus' essay, <i>The Myth of Sisyphus</i>, concerns the meaning of life and the implications to this
                    ultimate question. The text first presents two options: existence has some valid meaning (subjective
                    or objective) or that we cannot justify assigning any meaning to the act of existence. To believe in
                    the former, one would need to ignore or deny the absurd. If one can see no meaning whatsoever within
                    continued existence, it can be concluded that the cessation of that existence is the only reasonable
                    conclusion. Camus disagrees, however. Can a life be lived while fully embracing the absurd? Must we
                    create meaning from nothing in order to justify our own continued existence to ourselves? He
                    believes so; the remainder of the text is dedicated to following these questions to their logical
                    implications.
                    <p>
                        To better understand Camus' ideas, one must first understand what the absurd truly entails. By
                        its nature, the absurd is difficult to describe directly, so the text instead employs metaphor
                        to convey the concept. The vastness of the past, the ceaseless passage of time, the ultimate
                        fate that we will experience along with countless others all inspire feelings of absurdity. What
                        meaning can we make for ourselves in a world of billions, how do our lives differ from the
                        hundreds of billions that have come before us? Camus shows that this also applies on a more
                        abstract level. Scientists and philosophers are often driven by a desire for a unified truth, a
                        "nostalgia for unity". Finding this truth through theory or observation answers "how" some
                        phenomena comes into existence, but not "why" on a philosophical level. Experimentation and
                        observation can yield descriptive theories, but not prescriptive ones. We can identify what
                        something <i>is</i>, but not what it <i>ought</i> to be.
                    </p>
                    <p>
                        There lies a contradiction at the heart of Camus' absurd. Instinctively, we are driven to search
                        for patterns and meaning in our observations. This is contrasted by a universe that provides no
                        rich meaning that we desire, only cold and self-perpetuating patterns
                        <FootRef idx={1} />. The absurd is not a property of ourselves or the universe in isolation. It
                        only appears once thw two are juxtaposed with each other. One of Camus' central points is that
                        awareness of this contradiction is not a comfortable experience. However, any attempt to
                        mitigate it would be simply evading the absurd, rather than acknowledging it. He asks if we can
                        live with ourselves while fully acknowledging the absurd, not whether we can bury it. Camus
                        calls the act of evading the absurd in this manner "philosophical suicide", a confession that
                        the absurd is not worth the stress of consideration.
                    </p>
                    <p>
                        The text introduces the notion of "the absurd man". This person is fully aware of the absurd,
                        but crucially does not deny it. For such a person, what are ones options for living? Camus
                        states that the first choice is simply suicide as one faced with no meaning has no reason for
                        continued existence. Camus classifies this action as a capitulation to the absurd. Like its
                        philosophical counterpart, it declares that the absurd is simply too much to bear. Instead he
                        identifies three paths that acknowledge the absurd without giving in to it. The first is to be
                        in revolt against the absurd. When faced with an irrational universe and the inevitability of
                        ones demise, the most resolute path is to live life to the fullest, to revolt against an
                        uncaring death. It represents an acknowledgement of the absurd without allowing it to break one
                        down. The second path is the one of true freedom. This is not only freedom in the sense that we
                        can pursue set goals, but in a more broad sense. It is freedom from labels or roles. Embracing
                        freedom enables ones revolt by ignoring artificial constraints. The third is the path of
                        passion. By abandoning the notion of a set meaning for life, one also abandons a reference point
                        for the quality of experiences. Without a universal ideal, to which scale are experiences set
                        to? Camus instead advocates for a greater quantity and diversity of experiences in life. A
                        person that embraces the absurd perpetually lives in the present, free from guilt or anxiety
                        from self-imposed nostalgia or schedules. This ensures a quantity of life experiences that can
                        serve as a psychological substitute for a higher purpose to life.
                    </p>
                </>
            }
            thoughts={<></>}
            footnotes={
                <>
                    <FootNote idx={1}>
                        It is interesting to contemplate what it would look like if that were not the case. Any attempt
                        of the universe to show us some sort of true meaning would, by definition, be yet another
                        natural phenomena, something to be coldly theorized about. This reminds me of fictions with
                        complex and rule-based magic systems. At a certain point, it ceases to be magic and morphs into
                        yet another branch of the sciences, something to be studied and replicated, devoid of whimsy.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/myth-of-sisyphus.jpg"}
            anchor={"sisyphus"}
        />
    </>
);
