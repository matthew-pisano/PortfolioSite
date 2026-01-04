import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Do Androids Dream of Electric Sheep?"}
        author={"Philip K. Dick"}
        synopsis={
            <>
                <i>Do Androids Dream of Electric Sheep?</i> explores themes of humanity, empathy, and the nature of
                consciousness set in a post-apocalyptic world after most humans have fled to off-world colonies. Amid
                this bleak landscape, Dick examines what it means to be human and the ethics of artificial life. The
                novel follows Rick Deckard, a bounty hunter tasked with "retiring" rogue androids, and John Isidore, a
                man of limited intelligence due to radiation exposure who empathizes with the fugitive androids.
                <p>
                    The central conflict of the story revolves around the new Nexus-6 model of androids. These
                    artificial humanoids are more intelligent than previous models, and therefore more capable of
                    blending in with natural humans. Rick Deckard is informed that six of these androids have escaped
                    from the Mars colony where they were meant to work. By the time he is assigned the case, two have
                    already been 'retired' by another bounty hunter. The remaining four have already integrated
                    themselves into society. As Deckard carries out his assignment, he struggles to distinguish between
                    members of his species and mere facsimiles, and questions whether he can bear to destroy beings with
                    the same desires, feelings, and fears as himself.
                </p>
            </>
        }
        thoughts={
            <>
                One of the most striking aspects of this book is how Dick describes his androids, specifically the
                Nexus-6 models. Instead of being sentient machines made of circuit boards and metal substructures, they
                are much more like artificial, biological humans. This further strengthens the book's central moral
                conflict concerning the difference between humans and these 'andys'. In addition to behaving like humans
                outwardly, they also possess similar biology to humans internally.
                <p>
                    This blurred distinction between humans and androids in the book is increasingly becoming applicable
                    to the ethics of real-world artificial intelligences. While I personally do not foresee the
                    development biological humanoid assistants, the book remains relevant to how we interact with our
                    increasingly intelligent and embodied assistants. This progression too is addressed within the book
                    as Rick Deckard describes how he becomes more empathetic to the more advanced androids that he is
                    tasked with retiring. With his story, Dick asks us where the line between ourselves and our
                    creations lies; this is a question we should begin to ask ourselves as AI research continues to
                    advance.
                </p>
            </>
        }
        thumbnail={"/media/image/do-androids-dream-of-electric-sheep.jpg"}
        anchor={"electric-sheep"}
    />
);
