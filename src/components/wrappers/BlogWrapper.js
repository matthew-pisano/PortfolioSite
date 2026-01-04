import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import Wrapper from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import styles from "@/styles/pageTiles.module.css";

// Context to track section count
const SectionContext = createContext(null);

/**
 * Wrapper for blog pages.
 * @param children {JSXElement} The children of the wrapper
 * @param pageName {string} The name of the blog page
 * @param title {string} The title of the blog page
 * @param subtitle {string} The subtitle of the blog page
 * @param date {Date} The date of writing of the blog
 * @return {JSX.Element} The page wrapped in the blog wrapper
 */
function BlogWrapper({ children, pageName, title, subtitle, date }) {
    const blockContentId = "blogContent";
    const [blogTime, setBlogTime] = useState(0);

    const sectionCountRef = useRef([0, 0, 0]);

    const getNextId = (level = null) => {
        let currRef = sectionCountRef.current;
        if (!level || level === 1) sectionCountRef.current = [currRef[0] + 1, 0, 0];
        else if (level === 2) sectionCountRef.current = [currRef[0], currRef[1] + 1, 0];
        else if (level === 3) sectionCountRef.current = [currRef[0], currRef[1], currRef[2] + 1];
        return sectionCountRef.current;
    };

    useEffect(() => {
        setBlogTime(elementReadingTime(blockContentId));
    }, []);

    return (
        <Wrapper pageName={pageName}>
            <div className={styles.blogTitle}>
                <h1>
                    <b>{title}</b>
                </h1>

                {subtitle ? (
                    <>
                        <br />
                        <h3>{subtitle}</h3>
                    </>
                ) : null}
            </div>

            <div className={`${styles.blogHolder}`}>
                <div style={{ marginBottom: "30px" }}>
                    <small style={{ display: "block", width: "100%", textAlign: "right" }}>
                        {blogTime} minute read
                    </small>
                </div>
                <SectionContext.Provider value={getNextId}>
                    <div id={blockContentId}>{children}</div>
                </SectionContext.Provider>
                <hr />
                <p style={{ textAlign: "right", width: "100%" }}>{date.toLocaleDateString("en-US")}</p>
                <Link href={"/works/blog"}>Back to Blogs</Link>
            </div>
        </Wrapper>
    );
}

BlogWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    pageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.any.isRequired
};

/**
 * A section header for blog sections
 * @param children The children of the header
 * @param level The header level
 * @returns {JSX.Element} The header element
 */
function BlogSection({ children, level }) {
    const getNextId = useContext(SectionContext);
    const idRef = useRef(null);

    if (idRef.current === null) idRef.current = getNextId(level);

    let sectionNumber = `${idRef.current[0]}`;
    if (idRef.current[1] || idRef.current[2]) sectionNumber += `.${idRef.current[1]}`;
    if (idRef.current[2]) sectionNumber += `.${idRef.current[2]}`;

    let sectionId = `section-${sectionNumber}`;
    let sectionContent = (
        <>
            <span style={{ marginRight: "30px" }}>{sectionNumber}</span>
            {children}
            <Link href={`#${sectionId}`} className={`${styles.anchorLink}`}>
                <img className={`${styles.anchorIcon}`} alt="" />
            </Link>
        </>
    );
    let sectionStyle = { textIndent: "0px" };

    if (!level || level === 1)
        return (
            <>
                <h3 id={sectionId} style={sectionStyle}>
                    {sectionContent}
                </h3>
            </>
        );
    else if (level === 2)
        return (
            <h4 id={sectionId} style={sectionStyle}>
                {sectionContent}
            </h4>
        );
    else if (level === 3)
        return (
            <h5 id={sectionId} style={sectionStyle}>
                {sectionContent}
            </h5>
        );
    throw new Error("Unknown blog section level " + level);
}
BlogSection.propTypes = {
    children: PropTypes.element.isRequired,
    level: PropTypes.number
};

export default BlogWrapper;
export { BlogSection };
