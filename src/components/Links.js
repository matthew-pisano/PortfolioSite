import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { resetTilesOnScroll } from "@/components/Tiles";
import tagStyles from "@/styles/tags.module.css";



/**
 * A link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @param target {string} The link opening method
 * @param dark {boolean} Whether the link is styled darker
 * @param className {string} Any additional classes
 * @constructor
 */
function TileLink({ children, href, target, dark, className }) {
    return (
        <div className={`w3-mobile w3-col ${tagStyles.extraLink} ${dark ? tagStyles.darkTag : ""} ${className}`}>
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
    dark: PropTypes.bool,
    className: PropTypes.string
};

/**
 * A GitHub link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @param dark {boolean} Whether the link is styled darker
 * @constructor
 */
function GitLink({ children, href, dark }) {
    return (
        <TileLink href={href} className={tagStyles.gitLink} dark={dark}>
            {children}
        </TileLink>
    );
}

GitLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired,
    dark: PropTypes.bool
};

/**
 * A download link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @param dark {boolean} Whether the link is styled darker
 * @constructor
 */
function DownloadLink({ children, href, dark }) {
    return (
        <TileLink href={href} className={tagStyles.downloadLink} dark={dark}>
            {children}
        </TileLink>
    );
}

DownloadLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired,
    dark: PropTypes.bool
};

/**
 * A page header link element for usage in a tile or page
 * @param children {JSXElement} The link body
 * @param href {string} The link target
 * @param dark {boolean} Whether the link is styled darker
 * @constructor
 */
function PageLink({ children, href, dark }) {
    return (
        <TileLink href={href} className={tagStyles.pageLink} dark={dark} target={"_self"}>
            {children}
        </TileLink>
    );
}

PageLink.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired,
    dark: PropTypes.bool
};

export { TileLink, GitLink, DownloadLink, PageLink };
