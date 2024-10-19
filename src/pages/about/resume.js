import React from 'react';
import {Constants} from '@/lib/utils';
import Wrapper from '@/components/wrapper';
import {PageInfo} from "@/lib/pageBuilder";


function Resume() {

    let pageInfo = new PageInfo(
        "resume",
        "Resume",
        "A brief overview of my resume",
    );

    let style = {borderRadius: "5px", "position": "fixed", top: "100px", left: "0", "bottom": "0", right: "0"};
    return (<Wrapper pageName={pageInfo.pageName} pageStyle={style}>
        <embed id="resumeEmbed" type="application/pdf" src={Constants.resumeUrl+"#zoom=FitH"}/>
    </Wrapper>);
}


export default Resume;