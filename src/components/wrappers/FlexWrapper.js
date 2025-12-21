import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/wrappers/Wrapper";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";

/**
 * Wrapper for pages that require tiles to wrap.
 * @param children {JSXElement} The children of the wrapper
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function FlexWrapper({ children, pageInfo }) {
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
                <div className={`${tileStyles.flexTileHolder}`}>{children}</div>
            </div>
        </Wrapper>
    );
}

FlexWrapper.propTypes = { children: PropTypes.node, pageInfo: PropTypes.any };

export default FlexWrapper;
