import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";
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
    constructor(title, subtitle, pubDate, anchor, modDate = null) {
        this.title = title;
        this.subtitle = subtitle;
        this.pubDate = pubDate;
        this.anchor = anchor;
        this.modDate = modDate;
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
 * @param pubDate {Date} The date of publication of the blog
 * @param modDate {Date} The date of last modification of the blog
 * @return {JSX.Element} The page wrapped in the blog wrapper
 */
function BlogWrapper({ children, pageName, title, subtitle, pubDate, modDate }) {
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
        // Reset section count on component mount so count restarts on re-renders
        sectionCountRef.current = [0, 0, 0];
        setBlogTime(elementReadingTime(blockContentId));
    }, []);

    if (!modDate) modDate = pubDate;

    let pubDateISOString = pubDate.toISOString();
    let modDateISOString = modDate.toISOString();
    let dateElem = <p style={{ textAlign: "right", width: "100%" }}>{pubDate.toLocaleDateString("en-US")}</p>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "datePublished": pubDateISOString,
        "dateModified": modDateISOString,
        "author": {
            "@type": "Person",
            "name": "Matthew Pisano"
        }
    };

    return (
        <Wrapper pageName={pageName} title={title} description={subtitle}>
            <Head>
                {/* Open Graph meta tags */}
                <meta property="article:published_time" content={pubDateISOString} />
                <meta property="article:modified_time" content={modDateISOString} />
                <meta property="og:type" content="article" />
            </Head>

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                        {dateElem}
                        <div style={{ marginBottom: "30px" }}>
                            <small style={{ display: "block", width: "100%", textAlign: "right" }}>
                                {blogTime} minute read
                            </small>
                        </div>
                        <SectionContext.Provider value={getNextId}>
                            <div id={blockContentId}>{children}</div>
                        </SectionContext.Provider>
                        <hr />
                        {dateElem}
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
    pubDate: PropTypes.any.isRequired,
    modDate: PropTypes.any,
    footnoteContext: PropTypes.any
};

export default BlogWrapper;
export { BlogInfo, BlogImage };
