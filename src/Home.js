import React, { Component } from 'react';
import * as common from './common';
import PropTypes from 'prop-types';
import {Constants} from './Utils';

class Home extends Component {
    
    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Research",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Neural",
                titleLink: "neural",
                content: `A research project with the goal analyzing the differences between backpropagation, a genetic algorithm method,
                    and the decision tree optimization when training on a dataset from the Vanderbilt University Department of Biostatics.  The goal
                    of these networks was to predict whether a patient was diagnosed with type-II diabetes based on their health attributes.`,
                gitLink: "https://github.com/matthew-pisano/NuralPy",
                tags: ["research", "academic", "ai", "python"]
            },
            {
                title: "Chip Firing",
                titleLink: "chipFiring",
                content: `A research paper focusing on mathematical chip firing games.  This project will study Chip-Firing games and 
                how different combinations of directed and undirected edges affect its winning strategies.`,
                gitLink: "https://github.com/matthew-pisano/NuralPy",
                tags: ["research", "academic"]
            },
            {
                title: "#Featured Projects",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Simplex",
                titleLink: "simplex",
                content: `An math-oriented interpreted scripting language built in Java.<br>
                    Simplex's focus is on mathematic and scientific calculations as it offers built-in matrix operations 
                    (multiplication, determinants, etc.) as well as many scientific and fundamental constants.<br>
                    Simplex also features an IDE to both help programming and educate users on how programming languages work.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/simplexCode.jpg",
                gitLink: "https://github.com/matthew-pisano/SimplexIDE",
                tags: ["personal", "java", "android"]
            },
            {
                title: "Imperium",
                titleLink: "imperium",
                content: `Imperium is an android grand strategy game modeled after other popular titles on the PC platform.<br>
                    The goal of this project is to provide mobile users with a fun empire simulator in either historical 
                    settings within Europe or blank maps with game play more similar to the <i>RISK</i> board game.`,
                thumbnail: "https://lightsail-image-repo.s3.amazonaws.com/pgrm/imperiumLogo.png",
                gitLink: "https://github.com/ReactorDevelopment/Imperium",
                tags: ["personal", "java", "android"]
            },
            {
                title: "#Hackathons",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Anonymous Hiring",
                titleLink: "anonHires",
                content: `This project was part of the HvTechFest Hackathon 2021.<br>
                    The idea is to build a web platform for employers and employees, where the employer hires employees anonymously purely based on their talent. 
                    Through this project the team hopes of tackling racial discrimination and gender biases in the hiring process.`,
                gitLink: "https://github.com/OpenHubHackathonGreen/Anonymous-Hires",
                gitTitle: "Anon Hires",
                tags: ["hack", "collab", "js", "python", "html"]
            },
        ];
        let pageInfo = {
            pageName: "home",
            title: "Notable Projects",
            holderStyle: {borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/",
            gitTitle: "GitHub",
            extraLinks: [Constants.resumeUrl, "https://www.linkedin.com/in/matthew-pisano"],
            extraTitles: ["Résumé", "LinkedIn"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
                <div className="inner titleCard" style={{position: 'fixed', height: '300px', top: '50px', left: '0px', right: '0px'}}>
                    <h1 style={{margin: 'auto', width: '100%', textAlign: 'center'}}>Matthew Pisano</h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>Student of Software Engineering</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default Home;