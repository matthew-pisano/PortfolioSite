import React, { Component } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import PropTypes from 'prop-types';
import {Constants} from '../scripts/utils';
import {Wrapper} from '../scripts/wrapper';
import {DefaultWrapper} from "../scripts/defaultWrapper";

class Home extends Component {
    
    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Featured Research",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Project Bergeron",
                titleLink: "research/bergeron",
                content: `<i>Bergeron</i> is a framework that protects models against both natural language 
                    adversarial attacks and its own bias toward mis-alignment. This is done through the usage of a 
                    secondary model that judges the prompts to and responses from that primary model. This leaves 
                    the primary model and the end user less exposed to potential threats.  
                    <br><br>This can be thought of attaching a conscience to these models to help guide them toward aligned responses.`,
                gitLink: "https://github.com/matthew-pisano/Bergeron",
                gitTitle: "Bergeron",
                extraTitles: ["Research Paper"],
                extraLinks: ["https://arxiv.org/abs/2312.00029"],
                tags: ["research", "academic", "ai", "alignment", "python"],
                thumbnail: "/media/image/bergeron.png"
            },
            {
                title: "Moral High Ground",
                titleLink: "research/highGround",
                content: `As part of my employment with <i>IBM Research</i>, this research aims to better instill moral values and principles
                    into LLMs through the usage of text-based games.  Here, we develop a benchmark of these games in conversational format that run using 
                    <i>Microsoft's</i> TextWorld environment.  We use both fine-tuning and instruction-tuning methods to use these games to improve 
                    the moral reasoning abilities of several LLMs.`,
                // gitLink: "https://github.com/matthew-pisano/Bergeron",
                // gitTitle: "Bergeron",
                // extraTitles: ["Research Paper"],
                // extraLinks: ["https://arxiv.org/abs/2312.00029"],
                tags: ["research", "academic", "ai", "alignment", "python"],
                thumbnail: "/media/image/tw-llm.png"
            },
            {
                title: "PredictChain",
                titleLink: "research/predictChain",
                content: `<i>PredictChain</i> is a decentralized artificial intelligence marketplace.
                    It utilizes the Algorand blockchain to allow users to host instances of this
                    marketplace, with the goal of more freely distributing AI models, data, and compute among all users.
                    Won 1st place in the 2023 Mega-Ace hackathon.`,
                gitLink: "https://github.com/predict-chain/predict-chain",
                gitTitle: "PredictChain",
                extraTitles: ["Research Paper"],
                extraLinks: ["https://arxiv.org/abs/2307.15168"],
                tags: ["research", "academic", "ai", "python", "hack"],
                thumbnail: "/media/image/predictChain.png"
            },
            {
                title: "Large-Scale Foundation Acoustic Modeling for Automatic Speech Recognition",
                titleLink: "",
                content: `Improving the performance of modern ASM models by using a variety of techniques such as model fine-tuning and corrector LLMs.`,
                gitLink: "https://github.com/AIRC-ASR/AIRC-ASR-Experimental",
                gitTitle: "AIRC ASR",
                tags: ["research", "academic", "ai", "python"]
            },
            {
                title: "#Featured Projects",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Universal Models",
                titleLink: "personal/univmodels",
                content: `The <i>Universal Models</i> library serves as an adapter between Huggingface Transformers
                    and several other APIs.  All models from these different sources can be instantiated and 
                    interacted with in the same way as regular, local <i>Transformers</i> models.  This allows
                    for the easy integration of these models into projects that need generation from models from different sources.`,
                gitLink: "https://github.com/matthew-pisano/UniversalModels",
                gitTitle: "UniversalModels",
                extraLinks: ["https://pypi.org/project/universalmodels/"],
                extraTitles: ["PyPi Project"],
                tags: ["personal", "ai", "python"]
            },
            {
                title: "Manifest Destiny",
                titleLink: "school/destiny",
                content: `A highly parallelized population growth simulator. It is based on 
                    a cellular automata model of the United States during its period of rapid Westward 
                    expansion from 1763 to 1863.`,
                gitLink: "https://github.com/matthew-pisano/ManifestDestiny",
                gitTitle: "ManifestDestiny",
                extraTitles: ["Research Paper"],
                extraLinks: ["https://github.com/matthew-pisano/ManifestDestiny/blob/master/docs/manifest-destiny-report.pdf"],
                tags: ["academic", "clang", "cuda", "collab"],
                thumbnail: "/media/image/1763-timelapse.gif"
            },
            {
                title: "Image-Crypt",
                titleLink: "personal/imageCrypt",
                content: `A image-based document encoder and decoder that stores text within an image using small amounts of noise.`,
                gitLink: "https://github.com/matthew-pisano/ImageCrypt",
                gitTitle: "Image-Crypt",
                tags: ["personal", "cpp"],
                thumbnail: "/media/image/secret-message.png"
            },
            {
                title: "LLM Augmented Information Retrieval",
                titleLink: "",
                content: `A Solr information retrieval system with the capabilities of a large language model.  Uses a language model to improve
                    retrieved results through query expansion, term re-weighting, and document re-ranking.`,
                gitLink: "https://github.com/matthew-pisano/LLMRetrieval",
                gitTitle: "LLM Retrieval",
                tags: ["academic", "ai", "python"],
            },
            {
                title: "Mathesis",
                titleLink: "",
                content: `Research into the creation of a fine-tuned GPT-3 teaching assistant that will enable the transparent 
                    use of the technology between instructor and student to create a more active and participatory learning environment.`,
                gitLink: "https://github.com/GPT-Pedagogy/GPT-Pedagogy",
                gitTitle: "MathesisPedagogy",
                tags: ["research", "academic", "ai", "python"],
                thumbnail: "/assets/mathesis.png"
            },
            {
                title: "Simplex",
                titleLink: "personal/simplex",
                content: `A math-oriented interpreted scripting language built in Java.<br>
                    Simplex's focus is on mathematic and scientific calculations as it offers built-in matrix operations 
                    (multiplication, determinants, etc.) as well as many scientific and fundamental constants.<br><br>
                    Simplex also features an IDE to both help programming and educate users on how programming languages work.`,
                thumbnail: "/media/image/simplexCode.jpg",
                gitLink: "https://github.com/matthew-pisano/SimplexIDE",
                tags: ["personal", "java", "android"]
            },
            {
                title: "Imperium",
                titleLink: "personal/imperium",
                content: `Imperium is an android grand strategy game modeled after other popular titles on the PC platform.<br><br>
                    The goal of this project is to provide mobile users with a fun empire simulator in either historical 
                    settings within Europe or blank maps with game play more similar to the <i>RISK</i> board game.`,
                thumbnail: "/media/image/imperiumLogo.png",
                gitLink: "https://github.com/matthew-pisano/Imperium",
                tags: ["personal", "java", "android"]
            },
            {
                title: "#Hackathons",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "PredictChain",
                titleLink: "research/predictChain",
                content: `<i>PredictChain</i> is a decentralized artificial intelligence marketplace.
                    It utilizes the Algorand blockchain to allow users to host instances of this
                    marketplace, with the goal of more freely distributing AI models, data, and compute among all users.
                    Won 1st place in the 2023 Mega-Ace hackathon.`,
                gitLink: "https://github.com/predict-chain/predict-chain",
                gitTitle: "PredictChain",
                extraTitles: ["Research Paper"],
                extraLinks: ["https://arxiv.org/abs/2307.15168"],
                tags: ["research", "academic", "ai", "python", "hack"],
                thumbnail: "/media/image/predictChain.png"
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
            title: "Matthew Pisano",
            summary: "Language Model and Artificial Intelligence Alignment Researcher",
            holderStyle: {},
            gitLink: "https://github.com/matthew-pisano/",
            gitTitle: "GitHub",
            extraLinks: [Constants.resumeUrl, "https://www.linkedin.com/in/matthew-pisano"],
            extraTitles: ["Résumé", "LinkedIn"]
        };
        return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
    }
}

export default Home;