import React, { useContext, useEffect, useRef } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

/**
 * Information needed for footnote validation and linking
 */
class FootNoteContext {
    constructor(anchor, footnotesRef, footRefsRef) {
        this.anchor = anchor;
        this.footnotesRef = footnotesRef;
        this.footRefsRef = footRefsRef;
    }

    /**
     * Registers a footnote with its index
     * @param idx {number} The index of the footnote
     */
    registerFootNote(idx) {
        this.footnotesRef.current.push(idx);
    }

    /**
     * Registers a footnote reference with its index
     * @param idx {number} The index of the footnote reference
     */
    registerFootRef(idx) {
        this.footRefsRef.current.push(idx);
    }
}

/**
 * A footnote reference to appear in the text
 * @param idx The index of the footnote
 * @param context The react context to track state
 * @returns {JSX.Element} A footnote reference in the main text body
 * @constructor
 */
function FootRef({ idx, context }) {
    const ctx = useContext(context);
    if (!ctx) throw new Error("FootRef must be used within the given context");
    if (!(ctx instanceof FootNoteContext)) throw new Error("FootNoteContext must be used with a FootRef");

    const registeredRef = useRef(false);

    useEffect(() => {
        if (!registeredRef.current) {
            ctx.registerFootRef(idx);
            registeredRef.current = true;
        }
    }, [idx]);

    return (
        <Link href={`#footnote-${ctx.anchor}-${idx}`}>
            <sup id={`footref-${ctx.anchor}-${idx}`}>{idx}</sup>
        </Link>
    );
}

FootRef.propTypes = { idx: PropTypes.number.isRequired, context: PropTypes.any.isRequired };

/**
 * A footnote to appear at the bottom of the text
 * @param idx The index of the footnote
 * @param style The style to apply to the footnote
 * @param context The react context to track state
 * @param children The content of the footnote
 * @returns {JSX.Element} A footnote at the bottom of the text
 * @constructor
 */
function FootNote({ idx, style, context, children }) {
    const ctx = useContext(context);
    if (!ctx) throw new Error("FootNote must be used within the given context");
    if (!(ctx instanceof FootNoteContext)) throw new Error("FootNoteContext must be used with a FootNote");

    const registeredRef = useRef(false);

    useEffect(() => {
        if (!registeredRef.current) {
            ctx.registerFootNote(idx);
            registeredRef.current = true;
        }
    }, [idx]);

    return (
        <span style={{ ...style, textIndent: 0, display: "block", marginBottom: "10px" }}>
            <Link href={`#footref-${ctx.anchor}-${idx}`}>
                <sup id={`footnote-${ctx.anchor}-${idx}`}>{idx}</sup>
            </Link>{" "}
            <small>{children}</small>
        </span>
    );
}

FootNote.propTypes = {
    idx: PropTypes.number.isRequired,
    style: PropTypes.object,
    context: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired
};

export { FootNote, FootRef, FootNoteContext };
