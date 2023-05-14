import React, { Component } from 'react';
import * as common from '../scripts/common';
import PropTypes from 'prop-types';
import {Constants} from '../scripts/utils';

class About extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Introduction",
                content: `My name is Matthew Pisano.  I am a student and software developer, pursuing higher education
                    with the hopes of working as an artificial intelligence researcher in the future.  This research
                    would hopefully center around cognitive artificial intelligence and natural language processing,
                    two areas that interest me greatly.  I enjoy finding interesting or useful projects to begin 
                    working on and develop them until they reach the best iteration they can be.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/headshot"
            },
            {
                title: "Software Skills",
                content: `I have experience in many languages with JavaScript, Java, and Python being the ones in
                    which my skills are most developed.  I have created many professional solutions for a variety
                    of companies along with machine learning applications, both from scratch and using modules such 
                    as TensorFlow and PyTorch.  Through Java, I have created multiple android applications,
                    come of which have been published on the Google Play store.  I have used javascript in a variety
                    of personal and professional web applications, with React.js and Node.js being the libraries in which
                    I have the most experience.`,
                thumbnail: ""
            },
            {
                title: "Development Experience",
                content: `Through both my employment and professional experience through my higher education, I have
                    gained invaluable experience as a developer.  I have experience using the DevOps and Agile methodologies,
                    full-stack development, and continuous integration and continuous delivery using AWS Amplify.`,
                thumbnail: ""
            },
            {
                title: "Recent Employment",
                content: `During the Spring and Fall semesters, I am employed at Rensselaer Polytechnic Institute as a teaching
                    assistant.  In this position, I hold office hours, aid the professor in grading, and help students
                    to better grasp relevant course material.<hr>

                    Last Summer, I had worked for SUNY New Paltz through their summer undergraduate research experience, details
                    about this can be found in the <u style="cursor: pointer" onClick="window.showPage('chipFiring')">Chip Firing page</u> and
                    in the <a href="https://arxiv.org/abs/2302.10327" target="_blank">arXiv submission</a> for the resulting paper.
                    With this job, I worked closely with my professor to gain research experience and to develop research for later publishing.<hr>

                    I am also currently employed at Cyber Guardian Consulting Group.  Here, I have developed a variety of proprietary business
                    solutions using a variety of languages and web services, primarily AWS.  Further details of these projects
                    may be negotiated upon request.`,
                thumbnail: ""
            },
            {
                title: "Leadership",
                content: `A key attribute of someone who can work well with a team, whether the focus is software 
                    development, research, or something else, is leadership.  Many of my leadership skills
                    come from my time in scouting.  I spend 10 years in the Boy Scouts of America program learning the attributes
                    of good leaders and good team players.  This culminated in my Eagle Scout project where I preformed renovations
                    on my community's local recreation center.  My experience has continued on from there as I took active roles in
                    leading the front end development of the <u style="cursor: pointer" onClick="window.showPage('anonHires')">Anonymous Hires</u>
                    project and SUNY Ulster's Team Orion collaboration with IBM.`,
                thumbnail: ""
            },
        ];
        let pageInfo = {
            pageName: "about",
            holderStyle: {backgroundColor: "#14a343", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/",
            gitTitle: "GitHub",
            extraLinks: [Constants.resumeUrl, "https://www.linkedin.com/in/matthew-pisano"],
            extraTitles: ["Résumé", "LinkedIn"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>About</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Extra information on me as a developer, student, researcher and person</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default About;