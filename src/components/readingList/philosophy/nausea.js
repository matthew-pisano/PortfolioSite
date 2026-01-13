import React from "react";

import { BookTile, FootNote, FootRef } from "@/components/readingList/BookTile";

export default (
    <>
        <BookTile
            title={"Nausea"}
            author={"Jean-Paul Sartre"}
            synopsis={
                <>
                    The message of <i>Nausea</i> is conveyed through a series of journal entries by the text's
                    protagonist. Antoine Roquentin is a historian working in the fictional town of Bouville, France. At
                    the outset, Roquentin informs the reader that he started his journal to help explain the strange
                    feelings that he has been experiencing. He describes this feeling as a <i>Nausea</i>, an
                    overwhelming feeling somewhere between dead and emptiness. He feels it permeate not only himself,
                    but also the world around him: a stone, a tree root, the wet pieces of paper he likes to pick up
                    from the street. All are permeated with a sickening feeling that they are not quite real, that ...
                    he is not quite real. These bouts of the <i>Nausea</i> come and go throughout his time journaling as
                    he questions what he is doing, why is he here, and why anything exists at all.
                    <p>
                        For the last ten years, Roquentin has been working on a biography of the Marquis de Rollebon, a
                        Bouville aristocrat who lived during the late eighteenth century. As bouts of the <i>Nausea</i>{" "}
                        become more frequent, Roquentin dedicates more and more of his time toward his research on the
                        Marquis. Writing from the early 1930s, Roquentin must take frequent trips to libraries and
                        archives to track down the sparse information that remains. Another frequent guest of the local
                        library is someone that Roquentin calls the "Self-Taught Man"
                        <FootRef idx={1} />. Roquentin notes that the Self-Taught Man spends the majority of his free
                        time in the library, reading every single book in alphabetical order by author. During one of
                        their conversations, the man asks Roquentin to show him some pictures of his travels. Before
                        coming to Bouville, the journal's author had spent several years travelling the world
                        extensively in search of adventure. The Self-Taught Man is amazed and inspired by the images and
                        the stories of, what he considers to be, Roquentin's past adventures. Thinking back, however,
                        Roquentin does not believe he has had any true adventures at all, even after six years of
                        travel. This occurs on the backdrop of his growing frustrations with his work on the Marquis de
                        Rollebon.
                    </p>
                    <p>
                        Roquentin soon gets a letter from Anny, his ex-lover whom he has not seen since he bagan his
                        travels. She excitedly invited him to visit her in Paris in a few weeks. An actress, Roquentin
                        recalls that she was often frustrated with him for not knowing exactly what to say or do, as if
                        he was failing to play his part in a production. At first, Roquentin was not very eager to
                        reunite, but as his feelings of <i>Nausea</i> grew stronger, it soon became his only short-term
                        focus. Overwhelmed with a sense of futility, he gives up on the biography that he has sent a
                        decade on so far. What was the point of writing about a dead man from a dead time that had
                        slowly consumed his life? He felt as if that book had become the only justification for his own
                        existence. If he did not exist to do his research, why did he exist at all?
                    </p>
                    <p>
                        Later, the Self-Taught Man invited Roquentin to lunch at a local cafe that they often
                        frequented. Based on his observations, the man believes that Roquentin is a humanist and
                        socialist, just as he is. Though he is sparse in details, the Self-Taught Man reveals that he
                        had fallen in love with humanity after his time as a German POW during the first world war.
                        Determined to get Roquentin to admit to his beliefs, the Self-Taught Man pressures him to
                        reciprocate humanist ideals.
                    </p>
                </>
            }
            thoughts={<></>}
            footnotes={
                <>
                    <FootNote idx={1}>
                        Ogier P ..., who will be often mentioned in this journal. He was a bailiff's clerk. Roquentin
                        met him in 1930 in the Bouville library.
                    </FootNote>
                </>
            }
            thumbnail={"/media/image/nausea.jpg"}
            anchor={"nausea"}
        />
    </>
);
