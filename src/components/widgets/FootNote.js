import React, { createContext, useContext, useRef } from "react";

import PropTypes from "prop-types";

import styles from "@/styles/widgets/FootNote.module.css";

/** Context to manage footnotes */
const FootnoteContext = createContext(null);

/**
 * Provider component to wrap footnotes
 * Collects footnotes synchronously during server-side render phase
 *
 * @param children {JSXElement} The main body content
 * @param label {string} The unique label for this set of footnotes
 */
function FootnoteProvider({ children, label }) {
    // Store footnotes collected during this render pass
    const collectedRef = useRef([]);
    // Clear collected footnotes at start of each render
    collectedRef.current = [];

    // Add a footnote during render phase (synchronous)
    const addFootnote = (id, content) => {
        if (!collectedRef.current.find((f) => f.id === id)) collectedRef.current.push({ id, content });
    };

    return (
        <FootnoteContext.Provider value={{ footnotes: collectedRef.current, addFootnote, label }}>
            {children}
        </FootnoteContext.Provider>
    );
}

FootnoteProvider.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
};

/**
 * A footnote component
 * @param children {JSXElement} The content of the footnote
 */
function Footnote({ children }) {
    const context = useContext(FootnoteContext);
    if (!context) throw new Error("Footnote must be used inside FootnoteProvider");

    const { addFootnote, footnotes, label } = context;
    const idRef = useRef(null);

    // Generate stable ID once
    if (idRef.current === null) idRef.current = Math.random().toString(36).substring(2, 11);
    // Register footnote synchronously during render
    addFootnote(idRef.current, children);

    // Find the index of this footnote
    const index = footnotes.findIndex((f) => f.id === idRef.current) + 1;
    return (
        <sup>
            <a href={`#footnote-${label}-${index}`} id={`footnote-ref-${label}-${index}`}>
                [{index}]
            </a>
        </sup>
    );
}

Footnote.propTypes = {
    children: PropTypes.node.isRequired
};

/**
 * Container component where footnotes are rendered
 */
function FootnoteList() {
    const context = useContext(FootnoteContext);
    if (!context) throw new Error("FootnoteList must be used inside FootnoteProvider");

    const { footnotes, label } = context;
    if (footnotes.length === 0) return null;
    return (
        <div>
            <div>
                {footnotes.map((footnote, index) => (
                    <p key={footnote.id} id={`footnote-${label}-${index + 1}`} className={`${styles.footnote}`}>
                        <span>
                            <a href={`#footnote-ref-${label}-${index + 1}`}>[{index + 1}]</a>
                        </span>{" "}
                        {footnote.content}
                    </p>
                ))}
            </div>
        </div>
    );
}

export { FootnoteProvider, FootnoteList, Footnote };
