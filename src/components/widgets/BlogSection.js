import React, { createContext, useContext, useEffect, useRef } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { useBlogSidebar } from "@/components/widgets/BlogSidebar";
import tileStyles from "@/styles/tiles/Tiles.module.css";

// Context to track section count
const SectionContext = createContext(null);

/**
 * A section header for blog sections
 * @param children The children of the header
 * @param level The header level
 * @returns {JSX.Element} The header element
 */
function BlogSection({ children, level }) {
    const getNextId = useContext(SectionContext);
    const { addSection, removeSection } = useBlogSidebar();
    const idRef = useRef(null);
    const sectionIdRef = useRef(null);

    if (idRef.current === null) idRef.current = getNextId(level);

    // Build section index
    let sectionNumber = `${idRef.current[0]}`;
    if (idRef.current[1] || idRef.current[2]) sectionNumber += `.${idRef.current[1]}`;
    if (idRef.current[2]) sectionNumber += `.${idRef.current[2]}`;

    let sectionId = `section-${sectionNumber}`;

    // Register with sidebar on mount
    useEffect(() => {
        sectionIdRef.current = sectionId;
        addSection(sectionId, children, level || 1, sectionNumber);
        return () => removeSection(sectionId);
    }, [sectionId, addSection, removeSection]);

    let sectionContent = (
        <>
            <span style={{ marginRight: "30px" }}>{sectionNumber}</span>
            {children}
            <Link href={`#${sectionId}`} className={`${tileStyles.anchorLink}`}>
                <img className={`${tileStyles.anchorIcon}`} alt="" />
            </Link>
        </>
    );
    let sectionStyle = { textIndent: "0px" };

    // Custom sizes for each level
    const resolvedLevel = !level ? 1 : level;
    if (![1, 2, 3].includes(resolvedLevel)) throw new Error("Unknown blog section level " + level);

    const Tag = resolvedLevel === 1 ? "h3" : resolvedLevel === 2 ? "h4" : "h5";
    return (
        <Tag id={sectionId} style={sectionStyle}>
            {sectionContent}
        </Tag>
    );
}

BlogSection.propTypes = {
    children: PropTypes.element.isRequired,
    level: PropTypes.number
};

export { BlogSection, SectionContext };
