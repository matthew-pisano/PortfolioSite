import React, { useEffect, useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { resetTilesOnScroll } from "@/components/tiles/Tiles";
import Wrapper from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import styles from "@/styles/pageTiles.module.css";

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
                <div id={blockContentId}>{children}</div>
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
 * @param anchor The anchor for the header
 * @param level The header level
 * @returns {JSX.Element} The header element
 */
function BlogSection({ children, anchor, level }) {
    let sectionContent = (
        <>
            {children}
            <Link href={`#${anchor}`} className={`${styles.anchorLink}`}>
                <img className={`${styles.anchorIcon}`} alt="" />
            </Link>
        </>
    );

    if (!level || level === 1) return <h3 id={anchor}>{sectionContent}</h3>;
    else if (level === 2) return <h4 id={anchor}>{sectionContent}</h4>;
    else if (level === 3) return <h5 id={anchor}>{sectionContent}</h5>;
    throw new Error("Unknown blog section level " + level);
}
BlogSection.propTypes = {
    children: PropTypes.element.isRequired,
    anchor: PropTypes.string.isRequired,
    level: PropTypes.number
};

export default BlogWrapper;
export { BlogSection };
