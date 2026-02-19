import React from "react";

import PropTypes from "prop-types";

import { tagFactory } from "@/components/tiles/Tags";
import Wrapper from "@/components/wrappers/Wrapper";
import tileStyles from "@/styles/tiles/Tiles.module.css";
import wrapperStyles from "@/styles/wrappers/Wrapper.module.css";

/**
 * Default wrapper for pages that do not need any special handling.
 * @param children {JSXElement} The children of the wrapper
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function DefaultWrapper({ children, pageInfo }) {
    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${wrapperStyles.titleCard}`}>
                <h1>{pageInfo.title}</h1>
                <br />
                <h3>{pageInfo.summary}</h3>
            </div>
            <div
                id="tileLayout"
                className={`w3-display-container ${wrapperStyles.tileLayout}`}
                style={pageInfo.layoutStyle}>
                <div className={`w3-row ${tileStyles.tagsLinksHolder}`}>
                    {pageInfo.links}
                    {tagFactory(pageInfo.tags)}
                </div>
                {children}
            </div>
        </Wrapper>
    );
}

DefaultWrapper.propTypes = { children: PropTypes.node, pageInfo: PropTypes.any };

export default DefaultWrapper;
