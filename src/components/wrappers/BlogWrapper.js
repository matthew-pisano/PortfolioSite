import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import Wrapper from "@/components/wrappers/Wrapper";
import styles from "@/styles/pageTiles.module.css";

/**
 * Wrapper for blog pages.
 * @param children {JSXElement} The children of the wrapper
 * @param pageName {string} The name of the blog page
 * @param title {string} The title of the blog page
 * @param subtitle {string} The subtitle of the blog page
 * @param date {Date} The date of writing of the blog
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function BlogWrapper({ children, pageName, title, subtitle, date }) {
    return (
        <Wrapper pageName={pageName}>
            <div className={styles.blogTitle}>
                <h1>
                    <b>{title}</b>
                </h1>
                <br />
                <h3>{subtitle}</h3>
            </div>

            <div className={`${styles.blogHolder}`}>
                {children} <hr />
                <p style={{ textAlign: "right", width: "100%" }}>{date.toLocaleDateString("en-US")}</p>
                <Link href={"/blog"}>Back to Blogs</Link>
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

export default BlogWrapper;
