import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { SectionContext } from "@/components/widgets/BlogSection";
import { BlogSidebarProvider, BlogSidebarContent } from "@/components/widgets/BlogSidebar";
import Wrapper from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import styles from "@/styles/wrappers/BlogWrapper.module.css";

/**
 * An object containing common blog metadata
 */
class BlogInfo {
    constructor(title, subtitle, date, anchor) {
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.anchor = anchor;
    }
}

/**
 * An imagine object with a caption
 * @param children {JSXElement} The caption elements
 * @param src {string} The image source
 * @param alt {string} The alt message for the image
 * @returns {JSX.Element}
 * @constructor
 */
function BlogImage({ children, src, alt }) {
    return (
        <div className={`${styles.blogImage}`}>
            <div>
                <img src={src} alt={alt} />
            </div>
            <div>{children}</div>
        </div>
    );
}

BlogImage.propTypes = {
    children: PropTypes.node.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string
};

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

            <BlogSidebarProvider>
                <div className={`${styles.blogContainer}`}>
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
                    <BlogSidebarContent />
                </div>
            </BlogSidebarProvider>
        </Wrapper>
    );
}

BlogWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    pageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.any.isRequired,
    footnoteContext: PropTypes.any
};

export default BlogWrapper;
export { BlogInfo, BlogImage };
