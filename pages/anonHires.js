import React, { Component } from 'react';
import * as common from '../scripts/common';
import PropTypes from 'prop-types';
import {Wrapper} from '../scripts/wrapper';

class AnonHires extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `This project was part of the HvTechFest Hackathon 2021.<br>
                    The idea is to build a web platform for employers and employees, where the employer hires employees anonymously purely based on their talent. 
                    Through this project the team hopes of tackling racial discrimination and gender biases in the hiring process.`
            },
            {
                title: "Intentions",
                content: `The goal of this project was to address the difficulties employees and employers face in a saturated
                    job market.  Oftentimes, the decision of hiring a candidate can partially depend on what connections a candidate has,
                    their race, or gender.  By anonymizing the hiring process, both employers and candidates can focus more on
                    the skills a candidate has, which are often the most important thing employers are looking for.`,
                thumbnail: ""
            },
            {
                title: "Implementation",
                content: `The main drivers of this service are badges and assessments. Through assessments or other verifiable sources,
                    candidates are awarded badges ranging from hard skills, like programming in a specific language, to soft skills, such as
                    someone's ability to work well within a group.  Job listings will contain information about the company, the job in
                    question, and a list of skills and skill levels needed for that job.  Candidates then apply anonymously to that listing.
                    Once a candidate is selected, the process of sharing contact and personal information is started between the two parties.`,
                thumbnail: ""
            },
            {
                title: "Big Data Recommendation Engine",
                content: `The theme of this Hackathon was the usage of 'Big Data' in the projects.  
                    Through the <a href="https://www.onetcenter.org/dictionary/26.0/excel/knowledge.html">O*Net Resource Center</a>, we analyzed the feedback
                    from employees and executive on how important various skills are for a job.  Based on this data, the <i>Pandas</i> Python library
                    was used to process the data from O*Net to provide job recommendations to potential candidates.  This functionality increased the
                    usefulness of the service by providing candidates with jobs that were more fit to the badges they has earned.`,
                thumbnail: ""
            },
            {
                title: "Forward",
                content: `If the project has continues into further development, planned features include support for third party certifications, such as
                    LinkedIn badges, and collaborating with other services, such as Leet Code or HackerRank, to add more depth to the assessment system.`,
                thumbnail: ""
            },
        ];
        let pageInfo = {
            pageName: "anonHires",
            holderStyle: {backgroundColor: "#3eab3c", borderRadius: "10px"},
            gitLink: "https://github.com/OpenHubHackathonGreen/Anonymous-Hires",
            gitTitle: "Anon Hires",
            tags: ["hack", "collab", "js", "python", "html"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Anon Hires</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A Web-based hiring platform with anonymity</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default AnonHires;