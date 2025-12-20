import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { Tile } from "@/components/Tiles";
import { TileInfo } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";

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
    return (
        <Tile tileInfo={new TileInfo({ title: <>{title}</>, thumbnail: thumbnail, anchor: anchor })}>
            <div className={`${tileStyles.bookTileContent}`}>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Author:</i>
                    </b>{" "}
                    {author}
                </span>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Synopsis:</i>
                    </b>{" "}
                    {synopsis}
                </span>
                <span className={tileStyles.bookTileSection}>
                    <b>
                        <i>Thoughts:</i>
                    </b>{" "}
                    {thoughts}
                </span>
                <span className={tileStyles.bookTileSection}>
                    {footnotes && footnotes.props.children ? <hr /> : null}
                    {footnotes}
                </span>
            </div>
        </Tile>
    );
}

BookTile.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    synopsis: PropTypes.element.isRequired,
    thoughts: PropTypes.element.isRequired,
    footnotes: PropTypes.element,
    thumbnail: PropTypes.element.isRequired,
    anchor: PropTypes.string.isRequired
};

/**
 * A footnote reference to appear in the text
 * @param idx The index of the footnote
 * @param anchor The anchor of the book the footnote is in
 * @returns {JSX.Element} A footnote reference in the main text body
 * @constructor
 */
function FootRef({ idx, anchor }) {
    return (
        <Link href={`#footnote-${anchor}-${idx}`}>
            <sup id={`footref-${anchor}-${idx}`}>{idx}</sup>
        </Link>
    );
}
FootRef.propTypes = { idx: PropTypes.number.isRequired, anchor: PropTypes.string.isRequired };

/**
 * A footnote to appear at the bottom of the text
 * @param idx The index of the footnote
 * @param anchor The anchor of the book the footnote is in
 * @param style The style to apply to the footnote
 * @param children The content of the footnote
 * @returns {JSX.Element} A footnote at the bottom of the text
 * @constructor
 */
function FootNote({ idx, anchor, style, children }) {
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
    anchor: PropTypes.string.isRequired,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

export { BookTile, FootRef, FootNote };
