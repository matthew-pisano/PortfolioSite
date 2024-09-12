import React from 'react';
import {Constants} from '../../scripts/utils';
import Wrapper from '../../scripts/pageComponents/wrapper';
import {PageInfo} from "../../scripts/pageBuilder";


function Resume() {

    let pageInfo = new PageInfo(
        "resume",
        "Resume",
        "A brief overview of my resume",
    );

    let style = {borderRadius: "5px", "position": "fixed", top: "100px", left: "0", "bottom": "0", right: "0"};
    return (<Wrapper pageName={pageInfo.pageName}>
        <div id="resumePage" className="page container w3-rest" style={style}>
            <embed id="resumeEmbed" type="application/pdf" src={Constants.resumeUrl+"#zoom=FitH"}/>
        </div>
    </Wrapper>);
}


export default Resume;