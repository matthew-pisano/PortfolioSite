import Link from "next/link";
import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/Wrapper";
import styles from "@/styles/pageTiles.module.css";

/**
 * Wrapper for pages that require tiles to wrap.
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function BlogWrapper({ pageName, title, subtitle, date, children }) {
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
    pageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    date: PropTypes.any.isRequired,
    children: PropTypes.element.isRequired
};

export default BlogWrapper;
