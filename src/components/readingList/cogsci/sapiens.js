import React from "react";

import { BookTile, BookTileSynopsis, BookTileThoughts } from "@/components/readingList/BookTile";

let bookTileAnchor = "sapiens";

export default (
    <BookTile
        title={"Sapiens: A Brief History of Humankind"}
        author={"Yuval Noah Harari"}
        thumbnail={"/media/image/books/sapiens.jpg"}
        anchor={bookTileAnchor}>
        <BookTileSynopsis>
            <p></p>
        </BookTileSynopsis>
        <BookTileThoughts>
            <p></p>
        </BookTileThoughts>
    </BookTile>
);
