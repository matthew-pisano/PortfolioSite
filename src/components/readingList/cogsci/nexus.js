import React from "react";

import { BookTile, BookTileSynopsis, BookTileThoughts } from "@/components/readingList/BookTile";

let bookTileAnchor = "nexus";

export default (
    <BookTile
        title={"Nexus: A Brief History of Information Networks"}
        author={"Yuval Noah Harari"}
        thumbnail={"/media/image/books/nexus.jpg"}
        anchor={bookTileAnchor}>
        <BookTileSynopsis>
            <p></p>
        </BookTileSynopsis>
        <BookTileThoughts>
            <p></p>
        </BookTileThoughts>
    </BookTile>
);
