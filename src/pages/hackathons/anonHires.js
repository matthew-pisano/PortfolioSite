import React from 'react';

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import {GitLink, PageInfo, Tile} from '@/lib/pageBuilder';
import {genPageTitle} from "@/lib/utils";


export default function AnonHires() {

    let tiles = [
        new Tile(
            <h2>Overview</h2>,
            <>This project was part of the <Link href="https://hvtechfest.com/" target="_blank">Hudson Valley TechFest Hackathon</Link> 2021.<br/>
                The idea is to build a web platform for employers and employees, where the employer 
                hires employees anonymously purely based on their talent.  Through this project the 
                team hopes of tackling racial discrimination and gender biases in the hiring process.</>
        ),
        new Tile(
            <>Intentions</>,
            <>The goal of this project was to address the difficulties employees and employers
                face in a saturated job market.  Oftentimes, the decision of hiring a candidate can 
                partially depend on what connections a candidate has, their race, or gender.  By 
                anonymizing the hiring process, both employers and candidates can focus more on the 
                skills a candidate has, which are often the most important thing employers are looking for.</>,
        ),
        new Tile(
            <>Implementation</>,
            <>The main drivers of this service are badges and assessments. Through assessments
                or other verifiable sources, candidates are awarded badges ranging from hard skills, 
                like programming in a specific language, to soft skills, such as someone's ability to 
                work well within a group.  Job listings will contain information about the company, the 
                job in question, and a list of skills and skill levels needed for that job.  Candidates
                then apply anonymously to that listing.  Once a candidate is selected, the process 
                of sharing contact and personal information is started between the two parties.</>,
        ),
        new Tile(
            <>Big Data Recommendation Engine</>,
            <>The theme of this Hackathon was the usage of 'Big Data' in the projects.
                Through the <Link href="https://www.onetcenter.org/dictionary/26.0/excel/knowledge.html" target="_blank">O*Net Resource Center</Link>,
                we analyzed the feedback from employees and executive on how important various skills 
                are for a job.  Based on this data, the <i>Pandas</i> Python library was used to 
                process the data from O*Net to provide job recommendations to potential candidates.  
                This functionality increased the usefulness of the service by providing candidates 
                with jobs that were more fit to the badges they had earned.</>,
        ),
        new Tile(
            <>Forward</>,
            <>If the project had continued into further development, planned features included
                support for third party certifications, such as LinkedIn badges, and collaborating 
                with other services, such as Leet Code or HackerRank, to add more depth to the 
                assessment system.</>,
        ),
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Anon Hires",
        "A Web-based hiring platform with anonymity",
        {backgroundColor: "#4c8e4b"},
        ["hack", "collab", "js", "python", "html"],
        [new GitLink("https://github.com/OpenHubHackathonGreen/Anonymous-Hires", "Anon Hires")]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}
