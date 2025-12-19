import React from "react";

import PropTypes from "prop-types";

import Wrapper from "@/components/Wrapper";
import { buildTiles } from "@/lib/pageBuilder";
import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";

/**
 * Wrapper for pages that require tiles to wrap.
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @param tiles {Tile[]} Tiles to be displayed on the page
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function FlexWrapper({ pageInfo, tiles }) {
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
                <div className={`${tileStyles.flexTileHolder}`}>{buildTiles(tiles)}</div>
            </div>
        </Wrapper>
    );
}

FlexWrapper.propTypes = { pageInfo: PropTypes.any, tiles: PropTypes.array };

export default FlexWrapper;
