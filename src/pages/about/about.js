import React from 'react';

import Link from "next/link";


import DefaultWrapper from "@/components/DefaultWrapper";
import {GitLink, PageInfo, Tile, TileLink} from '@/lib/pageBuilder';
import {Constants, genPageTitle} from "@/lib/utils";


export default function About() {

    let tiles = [
        new Tile(
            <h2>Introduction</h2>,
             <>My name is Matthew Pisano.  I am an Artificial Intelligence researcher and
                software developer.  I have a Master's degree in Computer Science from Rensselaer 
                Polytechnic Institute.
                <br/><br/>My research centers around language model alignment; enforcing safety without
                hampering its cognitive abilities. I often draw inspiration from biological intelligences 
                to aid im my work with artificial ones.  I enjoy learning about how the mind works 
                    and the cognitive principles that can be applied to it.</>,
             "/media/image/headshot"
        ),
        new Tile(
            <>Software Skills</>,
            <>While I have experience in many languages, my skills in <code>Python</code>
                , <code>C++</code>, <code>JavaScript</code>, and <code>Java</code> are the most developed.
                <ul>
                    <li>I have created many research and enterprise machine learning applications, utilizing
                    libraries such as those from Hugging Face, along with PyTorch.</li>
                    <li>I have used javascript in a variety of personal and professional web applications, 
                    with React.js and Node.js being the libraries in which I have the most experience.</li>
                    <li>Through Java, I have created multiple android applications, some of which have been 
                    previously published on the Google Play Store.</li>
                </ul></>,
        ),
        new Tile(
            <>Development Experience</>,
            <>Through both my industry experience and my higher education, I have gained invaluable
                experience as a developer.  I have experience using the DevOps and Agile methodologies,
                full-stack development, and continuous integration and continuous delivery using AWS.
                <br/><br/>
                I have work experience ranging from small startups to Multinational Research divisions.  
                With each new experience, I gain valuable knowledge on the unique cultures and 
                strategies that they offer.</>,
        ),
        new Tile(
            <>Recent Employment</>,
            <>After graduating in 2024, I have continued my research in AI safety through a
                continued partnership with my Alma Mater.<hr/>
                
                <p><i>IBM Research</i></p>
                Over the course of Summer 2023, I worked as a Visiting Researcher at IBM's research 
                facility in Yorktown as part of their extern program.  During this time, I researched 
                new techniques of model alignment using text-based game for safety training on 
                moral and ethical principles.  More information can be found in
                the <Link href="/research/highGround">Moral High Ground</Link> page<hr/>
                
                <p><i>FileScience</i></p>
                As a founding member of the <Link href="https://filescience.io/" target="_blank">FileScience</Link> team,
                I have personally worked with small team to develop a seamless and reliable
                Cloud-to-Cloud backup service.  As this is geared towards enterprise clients, one of 
                most important roles is to ensure that the code we produce is testable, maintainable,
                and fault-tolerant.  This has given me invaluable experience with architecting highly 
                distributed and parallelized software and infrastructure.<hr/>
                
                <p><i>Cyber Guardian Consulting Group</i></p>
                Through my employment at <Link href="https://cgcg.biz/" target="_blank">Cyber Guardian Consulting Group</Link>, I
                have developed a variety of proprietary business solutions using a variety of languages
                and web services, primarily AWS.  These often involved custom SaaS solutions for clients, 
                writing distributed and asynchronous backup software from scratch, database management, 
                and many full-stack web applications.<hr/>
                
                <p><i>Rensselaer Polytechnic Institute</i></p>
                Throughout my graduate education, I had been employed at Rensselaer Polytechnic 
                Institute as a teaching assistant.  In this position, I hold office hours, aid the 
                professor in grading, and help students to better grasp relevant course material.<hr/>
                
                <p><i>SUNY New Paltz</i></p>
                During the Summer of 2022, I had worked for SUNY New Paltz through their summer 
                undergraduate research experience, details about this can be found in
                the <Link href="/research/chipFiring">Chip Firing</Link> page and in
                the <Link href="https://arxiv.org/abs/2302.10327" target="_blank">arXiv submission</Link> for
                the resulting paper.  With this job, I worked closely with my professor to gain 
                research experience and to develop research for later publishing.</>,
        ),
        new Tile(
            <>Leadership</>,
            <>A key attribute of someone who can work well with a team, whether the focus is
                software development or research, is leadership.  Many of my leadership skills
                come from my participation in research projects and my time in scouting.
                <br/><br/>I have worked on numerous different academic and research projects.  In many
                of these, I was the primary organizer of the project and in charge of delegating 
                tasks to collaborators or teammates.  This is evident in my projects
                like <Link href="/research/predictChain">Predict Chain</Link>
                , <Link href="/hackathons/anonHires">Anonymous Hiring</Link>, or my Master's
                thesis, <Link href="/research/bergeron">Bergeron</Link>.
                <br/><br/>I spent 10 years in the Boy Scouts of America program learning the attributes
                of good leaders and good team players.  This culminated in my Eagle Scout project where 
                I preformed renovations on my community's local recreation center.  My experience has 
                continued on from there as I took active roles in the planning and machine learning 
                components of <i>PredictChain</i>, the cellular automata CUDA algorithm and the 
                population growth calculations within <i>Manifest Destiny</i>, the front-end and ChatGPT 
                interface of <Link href="https://github.com/GPT-Pedagogy/GPT-Pedagogy" target="_blank">Mathesis</Link>,
                leading the front-end development of the <i>Anonymous Hires</i> project, and in 
                SUNY Ulster's Team Orion collaboration with IBM.</>,
        ),
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "About",
        "Extra information on me as a researcher, developer, and person",
        {backgroundColor: "#339f56"},
        [],
        [new GitLink("https://github.com/matthew-pisano/", "GitHub"),
            new TileLink(Constants.resumeUrl, "Résumé"),
            new TileLink("https://www.linkedin.com/in/matthew-pisano", "LinkedIn")],
    );

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}
