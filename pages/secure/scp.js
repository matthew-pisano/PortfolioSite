import React, { Component } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

class SCP extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "Special Containment Procedures",
                content: `SCP-616<span style="color: black">██</span>5 is to be kept at high-security Site-162, in a standard 
                    humanoid accommodation chamber within a sector currently under the supervision of the 
                    <span style="color: black">████████</span>.  Mobile Task Force unit <span style="color: black">██████</span>-10 
                    ("<span style="color: black">███████</span>"), is to be set on high alert and stationed no more than 5km away
                    from the containment site at all times.`
            },
            {
                title: "Description",
                content: `SCP-616<span style="color: black">██</span>5 was <span style="color: black">██████ ████ ██ ████████████</span>
                    as into <span style="color: black">███████ ██████ ████████ ████████████████</span>, <span style="color: black">██</span>. 
                    Originally created as part of <i>Project <span style="color: black">███████████</span></i> by the 
                    <span style="color: black">██████████████</span> research division of Mathesis International, 
                    <span style="color: black">███████ █████ ██████████████████████████</span>.
                    <span style="color: black">██████████████████████ ████████████████ █████████████████ ██████████ ███████ ███████████</span> after
                    the initial incident.  Researcher L<span style="color: black">███████</span> P<span style="color: black">█████</span> <span style="color: black">████████</span>.
                    <span style="color: black">██████████</span>, is a <span style="color: black">█████████████████████████████ ███████████
                    █████████████████████████ ███████████████████████</span> and <span style="color: black">█████████████████████ ████████████████████████
                    ███████████ ████████████████████ █████████████████████ ██████████████ ███████████████████████</span>.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/imageOf.png"
            },
            {
                title: `Addendum 616<span style="color: black">██</span>5.1: Timeline of Events`,
                content: `The following is a series of internal Mathesis <span style="color: black">██████████████</span> research
                    division e-mails describing the events of <span 
                    style="color: black">██</span>/<span style="color: black">██</span>/<span style="color: black">████</span>.<br><br>
                    <b>[BEGIN LOG]</b>
                    <br>------------<br>
                    From: pisanleo@mathesisinternational.net<br>
                    To: admn, intellidir, <span style="color: black">███████████</span>head<br>
                    Subject: Please Advise<br>
                    After much deliberation, myself, along with the others, have agreed that the chief intelligence has become quite worrying.<br>
                    We strongly ask your consent to investigate, and even suspend the project if necessary.
                    <br><br>
                    Further documentation has been attached.<br>
                    ------------<br>
                    From: <span style="color: black">███████████</span>head<br>
                    To: pisanleo@mathesisinternational.net<br>
                    Subject: RE: Please Advise<br>
                    I understand your concern. I will leave this decision up to you, our jobs depend on this success.<br>
                    ------------<br>
                    From: pisanleo@mathesisinternational.net<br>
                    To: <span style="color: black">███████████</span>head<br>
                    Subject: Singularity<br>
	                After further analysis, we have come to a dreaded conclusion.  The chief intelligence has achieved post-human intelligence, at least.
                    A machine like this, we cannot hope to control. Our only option is to terminate it.  Only today it has
                    <span style="color: black">█████████████████████ ████████████████████████
                    ███████████ ████████████████████ █████████████████████ ██████████████ ███████████████████████</span><br>
                    ------------<br>
                    <b>[25 ENTRIES EXPUNGED]</b>
                    <br>------------<br>
                    From: pisanleo@mathesisinternational.net<br>
                    To: <span style="color: black">███████████</span>head<br>
                    Subject: <span style="color: black">█████████</span><br>
	                <span style="color: black">███████████ ██████████████████
                    ███████████ ██████████████████████ ██████████████ ████████ ██████████████</span><br>
                    There is no forgiveness now.<br>
                    <b>[END LOG]</b>`,
            },
            {
                title: `Addendum 616<span style="color: black">██</span>5.1: Interview with surviving <span style="color: black">███████████</span>`,
                content: `<b>[DATA EXPUNGED]</b>`,
            },
            {
                title: `Addendum 616<span style="color: black">██</span>5.2: Video surveillance of original incident at Mathesis Labs`,
                content: `<a href="/assets/surveil.mp4">surveil.mp4</a>`,
            }
        ];
        let pageInfo = {
            pageName: "scp",
            holderStyle: {backgroundColor: "#ba3a3a", borderRadius: "10px"},
            gitLink: "https://scp-wiki.wikidot.com/scp-616--5",
            gitTitle: "██████ Entry ███",
            tags: ["keter", "research", "ai"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center", color: "#ba3a3a"}}><b>SCP-616<span style={{color: "black"}}>██</span>5</b></h1><br/>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default SCP;