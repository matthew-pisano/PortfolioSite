import PropTypes from "prop-types";
import {buildPage} from "./pageBuilder";
import {Wrapper} from "./wrapper";
import React from "react";

const DefaultWrapper = ({pageInfo, tiles}) => {
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
};

DefaultWrapper.propTypes = {
    pageInfo: PropTypes.any,
    tiles: PropTypes.array
};


export {DefaultWrapper};