import React from 'react';

import Link from "next/link";


import DefaultWrapper from "@/components/DefaultWrapper";
import {GitLink, PageInfo, SectionTile, Tile, TileLink} from '@/lib/pageBuilder';
import {Constants, genPageTitle} from "@/lib/utils";


export default function About() {

    let tiles = [
        new Tile(
            <h2>Introduction</h2>,
            <>My name is Matthew Pisano.  I am an Artificial Intelligence Researcher and
                Software Engineer.  I have a Master's degree in Computer Science from Rensselaer
                Polytechnic Institute along with extensive work experience in the domains of
                artificial intelligence, academia, and software development.
                <br/><br/>
                My research centers around language model alignment; enforcing safety without
                hampering its cognitive abilities. I often draw inspiration from biological intelligences
                to aid im my work with artificial ones.  I enjoy learning about how the mind works
                and the cognitive principles that it operates upon.</>,
            "/media/image/headshot"
        ),
        new Tile(
            <>Software Skills</>,
            <>While I have experience in many languages, my skills in <i>Python</i>
                , <i>C++</i>, <i>JavaScript</i>, and <i>Java</i> are the most developed.
                <ul>
                    <li>I have created several production-ready research and enterprise machine learning
                        applications, utilizing libraries such as HuggingFace, PyTorch, and CUDA.</li>
                    <li>Through Python, I have developed novel research into LLM alignment, worked
                        with the low-level C++ bindings of PyTorch, and developed a distributed and
                        asynchronous cloud-to-cloud backup SaaS.</li>
                    <li>With C and C++, I have taught students about data structures, developed
                        highly parallelized population simulations, created byte-encoding CLI utilities,
                        and worked on AI model compilation to enterprise grade accelerator cards.</li>
                    <li>In the more meta domain of DevOps, I have extensive experience
                        directing small teams, working with CI/CD pipelines, using project
                        management software, and mentoring others in best-practice testing and
                        clean code standards.</li>
                </ul>
                I have work experience ranging from small startups to Multinational Research divisions.
                With each new experience, I gain valuable knowledge on the unique cultures and
                strategies that they offer.
            </>,
        ),
        new Tile(
            <>Teaching Experience</>,
            <>Throughout my education and career, I have grained experience teaching at several levels.
                I have worked as a student mentor, graduate teaching assistant, and now as an adjunct professor.
                One of my passions is to be able to share the knowledge I have with others and an
                effective manner.  For me, teaching and lecturing fulfills this goal.

                <p>Most recently, I have worked at SUNY Ulster as a computer science adjunct for
                    their <i>Computer Architecture and Organization</i> class.  Here, I teach students
                    about the MIPS assembly language and its corresponding processor architecture.
                    In my class, we also explore basic CPU architectures, memory hierarchies,
                    parallelism, virtual machines, and many other topics in this domain.</p>

                <p>At RPI, I worked as a teaching assistant for
                    their <i>Principles of Software</i> and <i>Data Structures</i> classes.  I interacted
                    with students at an individual level, held office hours, graded assignments, and
                    participated in the rubric creation process for exams.</p>

                <p>As an undergraduate student at SUNY Ulster, I worked as a student mentor for
                their math program.  I aided other students in areas ranging from pre-algebra to
                calculus and differential equations.</p></>,
        ),
        new Tile(
            <>Leadership</>,
            <>A key attribute of someone who can work well with a team, whether the focus is
                software development or research, is leadership.  My own leadership skills
                stem from my experience in leading development teams, my participation in research
                endeavours, and my many group projects throughout my education.

                <p>While on IBM's Spyre development team, I was placed in charge of managing our
                    team's sprints, creating and distributing tasks, and helping other team members
                    uphold IBM's high standards for testing and clean code.  At Substrate, I was the
                    main contributor to our LLM development.  Here, I helped to direct members from their
                    dataset and deployment teams on how to best facilitate the development of
                    our <i>Metacontrol</i> model.  At FileScience, my skills in testing and QA lead
                    to my promotion as the team's lead for quality assurance.  In this role, I
                    worked autonomously to critique our current development practices and lead our
                    team to a more readable and maintainable style of programming.</p>

                <p>I have also worked on numerous different academic and research projects.  In many
                    of these, I was the primary organizer of the project and in charge of delegating
                    tasks to collaborators or teammates.  This is evident in my projects
                    like <Link href="/research/highGround">Moral High Ground</Link> where I worked with
                    a team from IBM research to develop a conversational alignment
                    benchmark, <Link href="/research/predictChain">Predict Chain</Link> where I lead
                    our small team to winning first place globally in the Mega-Ace Algorand
                    hackathon, <Link href="/school/destiny">Manifest Destiny</Link> in which I was in
                    charge of ideation and the development of our population growth algorithm, or my
                    Master's thesis: <Link href="/research/bergeron">Bergeron</Link>.</p>

                <p>I spent 10 years in the Boy Scouts of America program learning the attributes
                    of good leaders and good team players.  This culminated in my Eagle Scout project
                    where I preformed renovations on my community's local recreation center.  This
                    was one of my first real experiences to lead a group along with my term as my
                    troop's Senior Patrol Leader.  While my leadership in these settings did not have
                    the same scope as my later projects, it helped to set the ground work for my
                    current proactive and collaborative approach to leadership.</p></>,
        ),
        new SectionTile(
            <>Employment History</>,
        ),
        new Tile(
            <>IBM</>,
            <><p><i>Staff Software Engineer</i></p>
                As a part of IBM's AI Enablement department, I have worked on low-level C and C++
                development for compiling PyTorch models onto IBM's new <i>Sypre</i> AI accelerator
                chips.  I have also been tasked with automating our build workflows and organize
                our team scrums and pull-request meetings.</>,
            "https://pngimg.com/uploads/ibm/ibm_PNG19658.png"
        ),
        new Tile(
            <>SUNY Ulster</>,
            <><p><i>Computer Science Adjunct</i></p>
                Since the Spring semester of 2025, I have worked as a faculty member at SUNY Ulster.
                Here, I teach the college's course on assembly language and computer architecture.
                My responsibilities include lecturing to the class, managing the course curriculum
                and creating new modules as needed, grading student work, and participating in
                faculty meetings.</>,
            "https://acctsearches.org/wp-content/uploads/2022/01/suny-ulster-vector-logo.png"
        ),
        new Tile(
            <>Substrate AI Research</>,
            <><p><i>Research Engineer</i></p>
                During the second half of 2024, I worked on the development of a <i>Metacontrol</i> large
                language model that could evaluate whether user queries violated a given set of policies,
                queries were then passed to a more generalized assistant. Here, I used <i>LoRA</i> fine-tuning and
                dataset cleaning to generate high-quality results from sparse, synthetically generated data.
                On this team, I was the primary contributor towards the training of the model and the
                development of the supporting infrastructure for production deployment.</>,
            "https://substrate.ai/wp-content/uploads/2022/03/logo_substrate-300x136.png"
        ),
        new Tile(
            <>FileScience</>,
            <><p><i>Quality Assurance Lead Engineer</i></p>
                As a founding member of the <Link href="https://filescience.io/" target="_blank">FileScience</Link> team,
                I had personally worked with a small team to develop a seamless and reliable
                Cloud-to-Cloud backup service.  As this is geared towards enterprise clients, one of
                most important goals is to ensure that the code we produce is testable, maintainable,
                fault-tolerant, and secure.  I took the lead in this regard as I worked to train our small
                team in industry standard testing, development, and security practices.  This has given me
                invaluable experience in testing and architecting highly distributed and parallelized
                software and infrastructure.</>,
            "https://i.tracxn.com/logo/company/filescience.io_Logo_216e1de5-dc1f-488f-84d5-33f8ad000ec5.jpg"
        ),
        new Tile(
            <>IBM Research</>,
            <><p><i>Research Extern</i></p>
                Over the course of Summer 2023, I worked as a Visiting Researcher at IBM's research
                facility in Yorktown as part of their extern program.  During this time, I researched
                new techniques of model alignment using text-based game for safety training on
                moral and ethical principles.  More information can be found in
                the <Link href="/research/highGround">Moral High Ground</Link> page.</>,
            "https://avatars.githubusercontent.com/u/22341564?s=280&v=4"
        ),
        new Tile(
            <>Rensselaer Polytechnic Institute</>,
            <><p><i>Computer Science Teaching Assistant</i></p>
                Throughout my graduate education, I had been employed at Rensselaer Polytechnic
                Institute as a teaching assistant.  In this position, I hold office hours, aid the
                professor in grading, and help students to better grasp relevant course material.</>,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtnWmIefQkU9X48KffqNhfHm8-UWQZzkm4g&s"
        ),
        new Tile(
            <>SUNY New Paltz</>,
            <><p><i>Undergraduate Researcher</i></p>
                During the Summer of 2022, I had worked for SUNY New Paltz through their summer
                undergraduate research experience, details about this can be found in
                the <Link href="/research/chipFiring">Chip Firing</Link> page and in
                the <Link href="https://arxiv.org/abs/2302.10327" target="_blank">arXiv submission</Link> for
                the resulting paper.  With this job, I worked closely with my professor to gain
                research experience and to develop research for later publishing.</>,
            "https://www.newpaltz.edu/media/ocm/toolkit/the-new-paltz-brand/vdp_pg13-2415x873.jpg"
        ),
        new Tile(
            <>Cyber Guardian Consulting Group</>,
            <><p><i>Software Engineer</i></p>
                Through my employment at <Link href="https://cgcg.biz/" target="_blank">Cyber Guardian Consulting Group</Link>, I
                have developed a variety of proprietary business solutions using a wide range of languages
                and web services, primarily AWS.  These often involved custom SaaS solutions for clients,
                writing distributed and asynchronous backup software from scratch, database management,
                and many full-stack web applications.</>,
            "https://media.licdn.com/dms/image/v2/C4E0BAQE4AdTogksURg/company-logo_200_200/company-logo_200_200/0/1643488532634/cyber_guardian_consulting_group_llc__logo?e=2147483647&v=beta&t=YXl3CljG1XeFAyMRMNzedpZ5gavmGEOdAR7oavf6B3Q"
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
