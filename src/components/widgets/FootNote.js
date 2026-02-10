import React, { createContext, useContext, useState, useEffect } from "react";

import PropTypes from "prop-types";

import styles from "@/styles/pageTiles.module.css";

/** Context to manage footnotes */
const FootnoteContext = createContext(null);

/**
 * Provider component to wrap footnotes
 * @param children {JSXElement} The main body comment
 * @param label {string} The unique label for this set of footnotes
 */
function FootnoteProvider({ children, label }) {
    const [footnotes, setFootnotes] = useState([]);

    // Add a footnote to the context
    const addFootnote = (id, content) => {
        // Ensure footnotes are not added twice
        setFootnotes((prev) => {
            const exists = prev.find((f) => f.id === id);
            if (exists) return prev;
            return [...prev, { id, content }];
        });
    };

    // Remove a footnote from the page to handle dynamic refresh
    const removeFootnote = (id) => {
        setFootnotes((prev) => prev.filter((f) => f.id !== id));
    };

    // Send footnotes to the provider context
    return (
        <FootnoteContext.Provider value={{ footnotes, addFootnote, removeFootnote, label }}>
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
    const { addFootnote, removeFootnote, footnotes, label } = useContext(FootnoteContext);
    const [id] = useState(() => Math.random().toString(36).substring(2, 11));

    useEffect(() => {
        addFootnote(id, children);
        return () => removeFootnote(id);
    }, [children, id]);

    const index = footnotes.findIndex((f) => f.id === id) + 1;
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
 * Container component where footnotes are eventually rendered
 */
function FootnoteList() {
    const { footnotes, label } = useContext(FootnoteContext);
    if (footnotes.length === 0) return null;

    return (
        <div>
            <h3 style={{ textIndent: "0" }}>Footnotes</h3>
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
