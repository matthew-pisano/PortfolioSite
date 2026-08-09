import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";

import { SectionContext } from "@/components/widgets/WritingSection";
import { WritingSidebarProvider, WritingSidebarContent } from "@/components/widgets/WritingSidebar";
import Wrapper from "@/components/wrappers/Wrapper";
import { elementReadingTime } from "@/lib/util/utils";
import styles from "@/styles/wrappers/WritingWrapper.module.css";

/**
 * An object containing common writing piece metadata
 */
class WritingInfo {
    constructor(title, subtitle, pubDate, anchor, modDate = null) {
        this.title = title;
        this.subtitle = subtitle;
        this.pubDate = pubDate;
        this.anchor = anchor;
        this.modDate = modDate;
    }
}

/**
 * An image figure object with a caption
 * @param children {JSXElement} The caption elements
 * @param src {string} The image source
 * @param alt {string} The alt message for the image
 * @returns {JSX.Element}
 * @constructor
 */
function FigureImage({ children, src, alt }) {
    return (
        <div className={`${styles.blogImage}`}>
            <div>
                <img src={src} alt={alt} />
            </div>
            <div>{children}</div>
        </div>
    );
}

FigureImage.propTypes = {
    children: PropTypes.node.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string
};

/**
 * Wrapper for writing and essay pages.
 * @param children {JSXElement} The children of the wrapper
 * @param pageName {string} The name of the page
 * @param title {string} The title of the page
 * @param subtitle {string} The subtitle of the page
 * @param pubDate {Date} The date of publication of the work
 * @param modDate {Date} The date of last modification of the work
 * @return {JSX.Element} The page wrapped in the WritingWrapper
 */
function WritingWrapper({ children, pageName, title, subtitle, pubDate, modDate }) {
    const writingContentId = "writingContent";
    const [estReadingTime, setEstReadingTime] = useState(0);

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
        setEstReadingTime(elementReadingTime(writingContentId));
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

            <WritingSidebarProvider>
                <div className={`${styles.blogContainer}`}>
                    <div className={`${styles.blogHolder}`}>
                        {dateElem}
                        <div style={{ marginBottom: "30px" }}>
                            <small style={{ display: "block", width: "100%", textAlign: "right" }}>
                                {estReadingTime} minute read
                            </small>
                        </div>
                        <SectionContext.Provider value={getNextId}>
                            <div id={writingContentId}>{children}</div>
                        </SectionContext.Provider>
                        <hr />
                        {dateElem}
                        <Link href={"/works/writings"}>Back to Writings</Link>
                    </div>
                    <WritingSidebarContent />
                </div>
            </WritingSidebarProvider>
        </Wrapper>
    );
}

WritingWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    pageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    pubDate: PropTypes.any.isRequired,
    modDate: PropTypes.any,
    footnoteContext: PropTypes.any
};

export default WritingWrapper;
export { WritingInfo, FigureImage };
