import React from 'react';
import {Constants} from '../../scripts/utils';
import {Wrapper} from '../../scripts/wrapper';

const Resume = () => {

    let pageInfo = {
        pageName: "about/resume",
    };

    return (<Wrapper pageName={pageInfo.pageName}>
        <div id="resumePage" className="page container w3-rest lightText">
            <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Résumé</b></h1><br/>
                <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Formal summary of my experience and achievements</h3>
            </div>
            <div id="resumeHolder" className="tileHolder inner w3-display-container" style={{backgroundColor: "#414141", borderRadius: "10px"}}>
                <embed id="resumeHolder" type="application/pdf" src={Constants.resumeUrl}></embed>
            </div>
        </div>
    </Wrapper>);
};

export default Resume;