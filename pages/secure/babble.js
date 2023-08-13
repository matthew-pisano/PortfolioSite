import React, { useEffect } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import { Constants, babbleLoop } from '../../scripts/utils';
import { Wrapper } from '../../scripts/wrapper';

const Babble = () => {
    let tiles = [
        {
            title: "_",
            content: ``
        },
        {
            title: "_",
            content: ``,
        },
        {
            title: "_",
            content: ``,
        },
        {
            title: "_",
            content: ``,
        }
    ];
    let pageInfo = {
        pageName: "babble",
        holderStyle: {backgroundColor: "#5a3afa00", borderRadius: "10px"},
        tags: ["help"]
    };
    Constants.babbleTiles = tiles;

    useEffect(() => {
        babbleLoop();
    }, []);

    return (<Wrapper pageName={pageInfo.pageName}>
        <div className="page container w3-rest lightText">
            <div className="inner titleCard">
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Babble</b></h1><br/>
            </div>
            {buildPage(pageInfo, tiles)}
        </div>
    </Wrapper>);
};

export default Babble;