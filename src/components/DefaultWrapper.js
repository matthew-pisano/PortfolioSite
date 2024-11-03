import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/Wrapper";
import {buildPage} from "@/lib/pageBuilder";
import styles from "@/styles/Wrapper.module.css";


/**
 * Default wrapper for pages that do not need any special handling.
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @param tiles {Tile[]} Tiles to be displayed on the page
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function DefaultWrapper({pageInfo, tiles}) {

    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div className={`${styles.titleCard}`}>
                <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1><br/>
                <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>{pageInfo.summary}</h3>
            </div>
            {buildPage(pageInfo, tiles)}
        </Wrapper>
    );
}
DefaultWrapper.propTypes = { pageInfo: PropTypes.any, tiles: PropTypes.array };


export default DefaultWrapper;
