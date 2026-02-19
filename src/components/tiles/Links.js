import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { resetTilesOnScroll } from "@/components/tiles/Tiles";
import styles from "@/styles/tiles/Links.module.css";

/**
 * A link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @param target {string} The link opening method
 * @param className {string} Any additional classes
 * @constructor
 */
function TileLink({ children, href, target, className }) {
    return (
        <div className={`w3-mobile w3-col ${styles.extraLink} ${styles.pageLink} ${className}`}>
            <img className="w3-col" alt="tileLink" />
            <div className="w3-rest">
                <Link href={href} target={target ? target : "_blank"} rel="noreferrer" onClick={resetTilesOnScroll}>
                    {children}
                </Link>
            </div>
        </div>
    );
}

TileLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    className: PropTypes.string
};

/**
 * A GitHub link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @constructor
 */
function GitLink({ children, href }) {
    return (
        <TileLink href={href} className={`${styles.gitLink} ${styles.pageLink}`}>
            {children}
        </TileLink>
    );
}

GitLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired
};

/**
 * A download link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @constructor
 */
function DownloadLink({ children, href }) {
    return (
        <TileLink href={href} className={`${styles.downloadLink} ${styles.pageLink}`}>
            {children}
        </TileLink>
    );
}

DownloadLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired
};

/**
 * A page header link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @constructor
 */
function SelfLink({ children, href }) {
    return (
        <TileLink href={href} className={`${styles.selfLink} ${styles.pageLink}`} target={"_self"}>
            {children}
        </TileLink>
    );
}

SelfLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired
};

/**
 * An external web link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @constructor
 */
function WebLink({ children, href }) {
    return (
        <TileLink href={href} className={`${styles.webLink} ${styles.pageLink}`}>
            {children}
        </TileLink>
    );
}

WebLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired
};

export { TileLink, GitLink, DownloadLink, SelfLink, WebLink };
