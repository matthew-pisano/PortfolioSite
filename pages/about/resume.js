import React from 'react';
import {Constants} from '../../scripts/utils';
import Wrapper from '../../scripts/pageComponents/wrapper';
import {PageInfo} from "../../scripts/pageBuilder";


function Resume() {

    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "Resume",
        "A brief overview of my resume",
    );

    return (<Wrapper pageName={pageInfo.pageName}>
        <div id="resumePage" className="page container w3-rest lightText" style={{borderRadius: "10px"}}>
            <embed id="resumeEmbed" type="application/pdf" src={Constants.resumeUrl+"#zoom=FitH"}/>
        </div>
    </Wrapper>);
}


export default Resume;