import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/Wrapper";
import { buildPage } from "@/lib/pageBuilder";
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
            {children}
            {buildPage(pageInfo, [])}
        </Wrapper>
    );
}

DefaultWrapper.propTypes = { children: PropTypes.node, pageInfo: PropTypes.any };

export default DefaultWrapper;
