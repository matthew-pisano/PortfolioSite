import PropTypes from "prop-types";
import {buildPage} from "./pageBuilder";
import Wrapper from "./wrapper";
import React from "react";

/**
 * Default wrapper for pages that do not need any special handling.
 * @param pageInfo {PageInfo} Information about the page to be displayed
 * @param tiles {Tile[]} Tiles to be displayed on the page
 * @return {JSX.Element} The page wrapped in the default wrapper
 */
function DefaultWrapper({pageInfo, tiles}) {
    return (
        <Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>{pageInfo.title}</h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>{pageInfo.summary}</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>
    );
}

DefaultWrapper.propTypes = {
    pageInfo: PropTypes.any,
    tiles: PropTypes.array
};


export default DefaultWrapper;