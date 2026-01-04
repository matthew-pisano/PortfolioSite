import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { Tile } from "@/components/tiles/Tiles";
import { TileInfo } from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import tileStyles from "@/styles/pageTiles.module.css";

// Create a context for the book anchor
const BookAnchorContext = createContext(null);

/**
 * A tile representing a book review
 * @param title {string} The title of the book
 * @param author {string} The author of the book
 * @param synopsis {JSXElement} A synopsis of the book
 * @param thoughts {JSXElement} An analysis of the book
 * @param footnotes {JSXElement} Any footnotes from the text
 * @param thumbnail {string} The book cover thumbnail
 * @param anchor {string} The anchor id for the tile
 * @constructor
 */
function BookTile({ title, author, synopsis, thoughts, footnotes, thumbnail, anchor }) {
    const footnotesRef = useRef([]);
    const footRefsRef = useRef([]);
    const [bookTime, setBookTime] = useState(0);

    useEffect(() => {
        setBookTime(elementReadingTime(anchor));
    }, []);

    useEffect(() => {
        const refs = footRefsRef.current;
        const notes = footnotesRef.current;

        // Check for duplicates
        const duplicateFootRefs = refs.filter((idx, i) => refs.indexOf(idx) !== i);
        const duplicateFootNotes = notes.filter((idx, i) => notes.indexOf(idx) !== i);

        const duplicateFootnoteIndices = [...new Set(duplicateFootNotes)].join(", ");
        if (duplicateFootNotes.length > 0)
            throw new Error(`Book "${title}": Duplicate FootNote index(es): ${duplicateFootnoteIndices}`);

        const duplicateFootRefIndices = [...new Set(duplicateFootRefs)].join(", ");
        if (duplicateFootRefs.length > 0)
            throw new Error(`Book "${title}": Duplicate FootRef index(es): ${duplicateFootRefIndices}`);

        // Validate that all FootRefs have corresponding FootNotes
        const uniqueRefs = [...new Set(refs)];
        const uniqueNotes = [...new Set(notes)];

        const missingNotes = uniqueRefs.filter((idx) => !uniqueNotes.includes(idx));
        const unusedNotes = uniqueNotes.filter((idx) => !uniqueRefs.includes(idx));

        if (missingNotes.length > 0)
            throw new Error(`Book "${title}": FootRef(s) without matching FootNote(s): ${missingNotes.join(", ")}`);

        if (unusedNotes.length > 0)
            throw new Error(`Book "${title}": FootNote(s) without matching FootRef(s): ${unusedNotes.join(", ")}`);
    }, [title, anchor, synopsis, thoughts, footnotes]);

    const contextValue = {
        anchor,
        registerFootNote: (idx) => {
            footnotesRef.current.push(idx);
        },
        registerFootRef: (idx) => {
            footRefsRef.current.push(idx);
        }
    };

    return (
        <BookAnchorContext.Provider value={contextValue}>
            <Tile tileInfo={new TileInfo({ title: <>{title}</>, thumbnail: thumbnail, anchor: anchor })}>
                <div className={`${tileStyles.bookTileContent}`}>
                    <div className={tileStyles.bookTileSection}>
                        <small style={{ display: "block", width: "100%", textAlign: "right" }}>
                            {bookTime} minute read
                        </small>
                    </div>
                    <div>
                        <span className={tileStyles.bookTileSectionHeader}>Author:</span> {author}
                    </div>
                    <div className={tileStyles.bookTileSection}>
                        <span className={tileStyles.bookTileSectionHeader}>Synopsis:</span> {synopsis}
                    </div>
                    <div className={tileStyles.bookTileSection}>
                        <span className={tileStyles.bookTileSectionHeader}>Thoughts:</span> {thoughts}
                    </div>
                    <div className={tileStyles.bookTileSection}>
                        {footnotes && footnotes.props.children ? <hr /> : null}
                        {footnotes}
                    </div>
                </div>
            </Tile>
        </BookAnchorContext.Provider>
    );
}

BookTile.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    synopsis: PropTypes.element.isRequired,
    thoughts: PropTypes.element.isRequired,
    footnotes: PropTypes.element,
    thumbnail: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired
};

/**
 * A footnote reference to appear in the text
 * @param idx The index of the footnote
 * @returns {JSX.Element} A footnote reference in the main text body
 * @constructor
 */
function FootRef({ idx }) {
    const context = useContext(BookAnchorContext);
    if (!context) throw new Error("FootRef must be used within a BookTile");

    const { anchor, registerFootRef } = context;
    const registeredRef = useRef(false);

    useEffect(() => {
        if (!registeredRef.current) {
            registerFootRef(idx);
            registeredRef.current = true;
        }
    }, [idx, registerFootRef]);

    return (
        <Link href={`#footnote-${anchor}-${idx}`}>
            <sup id={`footref-${anchor}-${idx}`}>{idx}</sup>
        </Link>
    );
}

FootRef.propTypes = { idx: PropTypes.number.isRequired };

/**
 * A footnote to appear at the bottom of the text
 * @param idx The index of the footnote
 * @param style The style to apply to the footnote
 * @param children The content of the footnote
 * @returns {JSX.Element} A footnote at the bottom of the text
 * @constructor
 */
function FootNote({ idx, style, children }) {
    const context = useContext(BookAnchorContext);
    if (!context) throw new Error("FootNote must be used within a BookTile");

    const { anchor, registerFootNote } = context;
    const registeredRef = useRef(false);

    useEffect(() => {
        if (!registeredRef.current) {
            registerFootNote(idx);
            registeredRef.current = true;
        }
    }, [idx, registerFootNote]);

    return (
        <span style={{ ...style, textIndent: 0, display: "block", marginBottom: "10px" }}>
            <Link href={`#footref-${anchor}-${idx}`}>
                <sup id={`footnote-${anchor}-${idx}`}>{idx}</sup>
            </Link>{" "}
            <small>{children}</small>
        </span>
    );
}

FootNote.propTypes = {
    idx: PropTypes.number.isRequired,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

export { BookTile, FootRef, FootNote };
