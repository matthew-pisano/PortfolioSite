import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { Tile } from "@/components/tiles/Tiles";
import { TileInfo } from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import styles from "@/styles/tiles/BookTile.module.css";
import tileStyles from "@/styles/tiles/Tiles.module.css";

/**
 * The synopsis section of a book tile's content
 * @param children {JSXElement} The synopsis section
 */
function BookTileSynopsis({ children }) {
    return (
        <div className={styles.bookTileSection}>
            <span className={styles.bookTileSectionHeader}>Synopsis:</span> {children}
        </div>
    );
}

BookTileSynopsis.propTypes = {
    children: PropTypes.node.isRequired
};

/**
 * The thoughts section of a book tile's content
 * @param {JSXElement} children The thoughts section
 */
function BookTileThoughts({ children }) {
    return (
        <div className={styles.bookTileSection}>
            <span className={styles.bookTileSectionHeader}>Thoughts:</span> {children}
        </div>
    );
}

BookTileThoughts.propTypes = {
    children: PropTypes.node.isRequired
};

/**
 * A tile representing a book review
 * @param children {JSXElement} The book review content
 * @param title {string} The title of the book
 * @param author {string} The author of the book
 * @param thumbnail {string} The book cover thumbnail
 * @param anchor {string} The anchor id for the tile
 * @constructor
 */
function BookTile({ children, title, author, thumbnail, anchor }) {
    const [bookTime, setBookTime] = useState(0);

    useEffect(() => {
        setBookTime(elementReadingTime(anchor));
    }, []);

    return (
        <Tile tileInfo={new TileInfo({ title: <>{title}</>, thumbnail: thumbnail, anchor: anchor })}>
            <div className={`${tileStyles.scrollTileContent} ${styles.bookTileContent}`}>
                <div className={styles.bookTileSection}>
                    <small style={{ display: "block", width: "100%", textAlign: "right" }}>
                        {bookTime} minute read
                    </small>
                </div>
                <div>
                    <span className={styles.bookTileSectionHeader}>Author:</span> {author}
                </div>
                {children}
            </div>
        </Tile>
    );
}

BookTile.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired
};

export { BookTile, BookTileSynopsis, BookTileThoughts };
