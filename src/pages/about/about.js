import React from 'react';
import {PageInfo, Tile} from '@/lib/pageBuilder';
import DefaultWrapper from "@/components/DefaultWrapper";
import {Constants} from "@/lib/utils";


function About() {

    let tiles = [
        new Tile(
            "#Introduction",
             `My name is Matthew Pisano.  I am a researcher and software developer.  I am pursuing a graduate education
                while working on researching methods of artificial intelligence alignment.
                <br><br>My research centers around language model alignment; enforcing safety without hampering its cognitive 
                abilities. I often draw inspiration from biological intelligences to aid im my work with artificial ones. 
                I enjoy learning about how the mind works and the cognitive principles that can be applied to it.`,
             "/media/image/headshot"
        ),
        new Tile(
            "Software Skills",
            `I have experience in many languages with Python, JavaScript, and Java being the ones in
                which my skills are most developed.
                <ul>
                <li>I have created many professional solutions for a variety of companies along with machine
                 learning applications, both from scratch and using modules such as 🤗Transformers and PyTorch.</li>
                <li>I have used javascript in a variety of personal and professional web applications, 
                with React.js and Node.js being the libraries in which I have the most experience.</li>
                <li>Through Java, I have created multiple android applications, come of which have been 
                published on the Google Play store.</li>
                </ul>`,
        ),
        new Tile(
            "Development Experience",
            `Through both my employment and professional experience through my higher education, I have
                gained invaluable experience as a developer.  I have experience using the DevOps and Agile methodologies,
                full-stack development, and continuous integration and continuous delivery using AWS.
                <br><br>
                I have work experience ranging from small startups to Multinational Research divisions.  With each new experience,
                I gain valuable knowledge on the unique cultures and strategies that they offer.`,
        ),
        new Tile(
            "Recent Employment",
            `Over the course of Summer 2023, I worked as a research intern at IBM's research facility in Yorktown as
                part of a program through RPI.  During this time, I researched new techniques of model alignment using text-based
                game for safety training on moral and ethical principles.  More information can be found in the 
                <a href="/research/highGround">Moral High Ground</a> page<hr>
                
                Through my employment at Cyber Guardian Consulting Group, I have developed a variety of proprietary business
                solutions using a variety of languages and web services, primarily AWS.  These often involved custom SaaS solutions
                for clients, writing distributed and asynchronous backup software from scratch, database management, and many full-stack
                web applications.<hr>
                
                Over the past three semesters, I have been employed at Rensselaer Polytechnic Institute as a teaching
                assistant.  In this position, I hold office hours, aid the professor in grading, and help students
                to better grasp relevant course material.<hr>

                During the Summer of 2022, I had worked for SUNY New Paltz through their summer undergraduate research experience, details
                about this can be found in the <a href="/research/chipFiring">Chip Firing</a> page and
                in the <a href="https://arxiv.org/abs/2302.10327" target="_blank">arXiv submission</a> for the resulting paper.
                With this job, I worked closely with my professor to gain research experience and to develop research for later publishing.`,
        ),
        new Tile(
            "Leadership",
            `A key attribute of someone who can work well with a team, whether the focus is software 
                development or research, is leadership.  Many of my leadership skills
                come from my participation in research projects and my time in scouting.
                <br><br>I have worked on numerous different academic and research projects.  In many of these, I was the primary organizer of the project
                and in charge of delegating tasks to collaborators or teammates.  This is evident in my projects like 
                <a href="/research/predictChain">Predict Chain</a>, <a href="/hackathons/anonHires">Anonymous Hiring</a>, or my Master's thesis, 
                <a href="/research/bergeron">Bergeron</a>.
                <br><br>I spent 10 years in the Boy Scouts of America program learning the attributes
                of good leaders and good team players.  This culminated in my Eagle Scout project where I preformed renovations
                on my community's local recreation center.  My experience has continued on from there as I took active roles in
                the planning and machine learning components of PredictChain, the front-end and ChatGPT interface of Mathesis,
                leading the front-end development of the <a href="/hackathons/anonHires">Anonymous Hires</a>
                project, and in SUNY Ulster's Team Orion collaboration with IBM.`,
        ),
    ];
    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "About",
        "Extra information on me as a developer, student, researcher and person",
        {backgroundColor: "#339f56"},
        [],
        "https://github.com/matthew-pisano/",
        "GitHub",
        [Constants.resumeUrl, "https://www.linkedin.com/in/matthew-pisano"],
        ["Résumé", "LinkedIn"]
    );

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}


export default About;