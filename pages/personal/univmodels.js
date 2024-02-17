import React, { Component } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

class Bergeron extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `The <i>Universal Models</i> serves as an adapter between Huggingface Transformers
                    and several other APIs.  This includes the OpenAI API, the Huggingface API, and local
                    OpenAI APis, such as <a href="https://github.com/lm-sys/FastChat">FastChat</a>.  All
                    models from these different sources can be instantiated and interated with in the same
                    way as regular, local <i>Transformers</i> models.  This allows for the easy integration
                    of these models into projects that need generation from models from different sources.
                    It is designed to work primarily with autoregressive, decoder-only models, but can be
                    easily extened to work with other types of models.`
            },
            {
                title: "Utility",
                content: `Originally starting off as a utility within my <a href="/research/bergeron">Bergeron</a>
                    research, this package has grown to be a useful tool for any project that needs to use.  This
                    has allowed me to eliminate significant amounts of code from my projects, as its unified interface
                    allows for the easy integration of models from different sources.`
            },
            {
                title: "Source",
                content: `The source code for this project can be found on the above GitHub page.  The package is
                    available for installation via:<br>
                    <code>pip install universalmodels</code>`,
            }
        ];
        let pageInfo = {
            pageName: "personal/univmodels",
            holderStyle: {backgroundColor: "#38af70", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/UniversalModels",
            gitTitle: "UniversalModels",
            tags: ["personal", "ai", "python"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Universal models</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>An adapter between Huggingface transformers and several different APIs</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default Bergeron;