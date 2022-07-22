import React, { Component } from 'react';
class Resume extends Component {

    render() {
        return (
            <div id="resumePage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Résumé</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Formal summary of my experience and achievements</h3>
                </div>
                <div id="resumeHolder" className="tileHolder inner w3-display-container" style={{backgroundColor: "#414141", borderRadius: "10px"}}>
                    <iframe id="resumeHolder" style={{}} src="https://docs.google.com/gview?url=https://lightsail-image-repo.s3.amazonaws.com/documents/Resume.docx&embedded=true"></iframe>
                </div>
            </div>
        );
    }
}

export default Resume;