import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/Wrapper";
import { buildTags } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";

/**
 * Default wrapper for pages that do not need any special handling.
 * @param children {JSXElement} The childre of the wrapper
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function DefaultWrapper({ children, pageInfo }) {
    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1>{pageInfo.title}</h1>
                <br />
                <h3>{pageInfo.summary}</h3>
            </div>
            <div
                id="tileHolder"
                className={`w3-display-container ${tileStyles.tileHolder}`}
                style={pageInfo.holderStyle}>
                {buildTags(pageInfo.tags, pageInfo.links, true)}
                {children}
            </div>
        </Wrapper>
    );
}

DefaultWrapper.propTypes = { children: PropTypes.node, pageInfo: PropTypes.any };

export default DefaultWrapper;
