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
export function BookTile({ title, author, synopsis, thoughts, footnotes, thumbnail, anchor }) {
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
