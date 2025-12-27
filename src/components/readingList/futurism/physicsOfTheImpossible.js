import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <>
        <BookTile
            title={"Physics of the Impossible"}
            author={"Michio Kaku"}
            synopsis={
                <>
                    <i>Physics of the Impossible</i> analyzes the feasibility and hypothetical scientific basis for many
                    fantastical, and not-so-fantastical, science fiction technologies. From phasers to force-fields and
                    from teleportation to time travel, Kaku explores some real-world analogues that approximate the form
                    and function of these fictional concepts. Along the way, the book also explains the real science
                    behind each of the theoretical concepts he presents.
                </>
            }
            thoughts={
                <>
                    While many of the technologies discussed in the book may well be impossible, I found it especially
                    interesting how several could either be loosely tied back to real scientific theories or were
                    actually possible with modern technology, albeit in a modified form. One section I found most
                    interesting covered psychokinesis and how Kaku explored ways it might be implemented through
                    brain-computer interfaces rather than reality-warping abilities.
                </>
            }
            thumbnail={"/media/image/physics-of-the-impossible.jpg"}
            anchor={"physics-impossible"}
        />
    </>
);
