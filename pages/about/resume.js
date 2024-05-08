import React from 'react';
import {Constants} from '../../scripts/utils';
import {Wrapper} from '../../scripts/wrapper';
import {PageInfo} from "../../scripts/pageBuilder";

const Resume = () => {

    let pageInfo = new PageInfo({
        pageName: "about/resume",
    });

    return (<Wrapper pageName={pageInfo.pageName}>
        <div id="resumePage" className="page container w3-rest lightText">
            <embed id="resumeEmbed" type="application/pdf" src={Constants.resumeUrl+"#zoom=FitH"}></embed>
        </div>
    </Wrapper>);
};

export default Resume;