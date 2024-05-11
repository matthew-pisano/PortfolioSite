import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PageInfo, Tile} from '../../scripts/pageBuilder';
import DefaultWrapper from "../../scripts/defaultWrapper";

class UnivModels extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            new Tile(
                "#Overview",
                `The <i>Universal Models</i> library serves as an adapter between Huggingface Transformers
                    and several other APIs.  This includes the OpenAI API, the Huggingface API, and local
                    OpenAI APis, such as <a href="https://github.com/lm-sys/FastChat" target="_blank">FastChat</a>.  All
                    models from these different sources can be instantiated and interacted with in the same
                    way as regular, local <i>Transformers</i> models.  This allows for the easy integration
                    of these models into projects that need generation from models from different sources.
                    It is designed to work primarily with autoregressive, decoder-only models, but can be
                    easily extened to work with other types of models.`
            ),
            new Tile(
                "Utility",
                `Originally starting off as a utility within my <a href="/research/bergeron">Bergeron</a>
                    research, this package has grown to be a useful tool for any project that needs to use.  This
                    has allowed me to eliminate significant amounts of code from my projects, as its unified interface
                    allows for the easy integration of models from different sources.`
            ),
            new Tile(
                "Source",
                `The source code for this project can be found on the above GitHub page or on <a href="https://pypi.org/project/universalmodels/" target="_blank">PyPI</a>.  The package is
                    available for installation via:<br>
                    <code>pip install universalmodels</code>`,
            )
        ];
        let pageInfo = new PageInfo(
            typeof window !== 'undefined' ? window.location.pathname.substring(1) : __filename.split("pages/")[1].split(".js")[0],
            "Universal Models",
            "An adapter between Huggingface transformers and several different APIs",
            {backgroundColor: "#38af70"},
            ["personal", "ai", "python"],
            "https://github.com/matthew-pisano/UniversalModels",
            "UniversalModels",
            ["https://pypi.org/project/universalmodels/"],
            ["PyPi Project"]
        );
        return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
    }
}

export default UnivModels;