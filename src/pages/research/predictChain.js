import React from 'react';
import {PageInfo, Tile} from '@/lib/pageBuilder';
import DefaultWrapper from "@/components/DefaultWrapper";


function PredictChain() {

    let tiles = [
        new Tile(
            "#Overview",
            `<i>PredictChain</i> is a decentralized artificial intelligence marketplace that I developed, primarily along
                with another student at RPI.  It utilizes the Algorand blockchain to allow users to host instances of this
                marketplace, with the goal of more freely distributing AI models, data, and compute among all users.`,
            "/media/image/predictChain.png"
        ),
        new Tile(
            "Abstract (Abridged)",
            `Limited access to computing resources and training data poses significant challenges for individuals
                and groups aiming to train and utilize predictive machine learning models. Although numerous
                publicly available machine learning models exist, these models may only be accessible
                through paid cloud-based mechanisms, which can prove costly for general public utilization. We propose a
                blockchain-based marketplace called "PredictChain" for predictive machine-learning models to
                address these issues. This marketplace enables users to upload datasets for training predictive machine
                learning models, request model training on previously uploaded datasets, or submit queries to trained
                models. This network will offer a range of archetype machine learning models with varying characteristics, 
                Our decentralized approach empowers users to develop improved models accessible to the public, promotes 
                data sharing, and reduces reliance on centralized cloud providers.`,
        ),
        new Tile(
            "Conferences and Publications",
            `This paper was accepted by, and presented at, the ChainScience 2023 conference.  Our paper is freely available
                on arXiv for public viewing and citation.`,
        ),
        new Tile(
            "Competitions and Awards",
            `We worked on this project as part of the <a href="https://mega-ace.org/hackathon/" target="_blank" rel="noreferrer">2023 Mega-Ace hackathon</a>.
                At the local competition, PredictChain won the 'Most Innovative Use of Technology' award and 3rd place overall.  At
                the global competition, our project won 1st place overall!`,
        ),
        new Tile(
            "#Project Details",
            "", "", false, {}, [], "", "", [], [], "",
            {backgroundColor: "rgba(139,166,175,0.45)"}
        ),
        new Tile(
            "Background",
            `This project, and the paper associated with it was developed as part of RPI's AI and Blockchain course.
                Over the course of the semester, we worked on this project.  It was a collaborative effort as me and my partner worked
                to prepare our project for both the end of the class and the 2023 Mega-Ace hackathon.  My responsibility was developing 
                the models, blockchain communication protocol, and backend, while my partner was tasked with the front-end 
                and user management systems.  Minor contributions to classwork also came from a third student that sporadically aided us.`,
        ),
        new Tile(
            "Architecture",
            `PredictChain is comprised of two main parts.  The Oracle node is the hub of each PredictChain instance.  It is run
                by a host of the network.  Users can connect to any active Oracle to interact with the service.  The second component is the
                Client.  This is an interface that users interact with.  It is separate from the Oracles.  As users transact on any given
                network, the Oracle is rewarded according to a rae they set.  Users can also choose to connect to any available Oracle node
                if a better rate is offered.  In addition to hosting the network, Oracles also have the responsibility of managing uploaded
                datasets and both training and performing inference on models.`,
            "/media/image/predictChainFull.png"
        ),
        new Tile(
            "User Actions",
            `Users of PredictChain can perform three major actions.  Users can upload a dataset of their choosing, request that a model
                be trained on any user-uploaded dataset, or a request for a model query.  All uploaded datasets, trained models, and queries are 
                available for selection by other users, although only queries are fully viewable.  Each of these operations is communicated to an
                Oracle as an Algorand transaction.  This ensures a public and complete record of all network activity.  To compensate users for
                the usage of their models or datasets.  They are rewarded every time their trained model or uploaded dataset is used.`,
        ),
        new Tile(
            "Models",
            `PredictChain offers a variety of models for users to interact with.  Each of these model types is randomly initialized originally,
                with users training a copy of that model when requested.  PredictChain offers:
                <ul>
                    <li>Multi-layered perceptrons</li>
                    <li>Recurrent NNs</li>
                    <li>Long Short-Term Memory networks</li>
                    <li>Gated Recurrent Unit Networks</li>
                </ul>`,
        ),
    ];
    let pageInfo = new PageInfo(
        typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
        "PredictChain",
        "Empowering collaboration and data accessibility for AI in a decentralized blockchain-based marketplace",
        {backgroundColor: "#3b5783"},
        ["research", "academic", "ai", "python", "hack"],
        "https://github.com/predict-chain/predict-chain",
        "PredictChain",
        ["https://arxiv.org/abs/2307.15168"],
        ["Research Paper"]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}


export default PredictChain;