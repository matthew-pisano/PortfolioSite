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
                content: `This research serves as both my Master's thesis and as early research into the area of weak-to-strong alignment.
                    It details my <i>Bergeron</i> framework that aims to improve the resistance of LLMs against adversarial attacks and other
                    in-context methods of misalignment.  Bergeron achieves this goal through the usage of a smaller secondary LLM that monitors both the
                    inputs to and outputs from the much larger target LLM.  This serves as a method to quickly improve the alignment of the target model without
                    any time-consuming fine-tuning or hard-coded filtering.`,
                thumbnail: "/media/image/bergeron.png"
            },
            {
                title: "NOTE: This research is currently undergoing a blind review.  Thus, identifying information, such has the title, has been omitted.",
                style: {backgroundColor: "rgba(255,219,55,0.63)"}
            },
            {
                title: "Abstract",
                content: `Modern Large language models (LLMs) can still generate responses that may not be aligned with human expectations or values.
                    While many weight-based alignment methods have been proposed, many of them still leave models vulnerable to attacks when used on 
                    their own. To help mitigate this issue, we introduce Bergeron, a framework designed to improve the robustness of LLMs against 
                    adversarial attacks. Bergeron employs a two-tiered architecture. Here, a secondary LLM serves as a simulated conscience that safeguards
                    a primary LLM. We do this by monitoring for and correcting potentially harmful text within both the prompt inputs and the generated 
                    outputs of the primary LLM. Empirical evaluation shows that Bergeron can improve the alignment and robustness of several popular LLMs
                    without costly fine-tuning. It aids both open-source and black-box LLMs by complementing and reinforcing their existing alignment training. `,
            },
            // {
            //     title: "Conferences and Publications",
            //     content: ``,
            // },
            {
                title: "#Project Details",
                content: ``,
                style: {backgroundColor: "rgba(139,166,175,0.45)"}
            },
            {
                title: "Background",
                content: `This research serves as the basis for my Master's thesis.  While the core idea for this project and its code are my own, I had
                    some incredible help from both my advisor and several other students at RPI.  Working on it has greatly improved my skills in prompt
                    engineering along with my knowledge of AI alignment in both theory and practice.`,
            },
            {
                title: "Holes in Weight-Based Alignment",
                gallery: true,
                content: `This research was motivated from my observations on the many vulnerabilities that exist within weight-based alignment methods.
                    No matter how much fine-tuning a model has undergone, there always seems to be a way to break it quickly and easily.  This can be so
                    easy, in fact, that the most modern models like GPT-4 can be broken within an hour wih a prompt created from scratch by hand.  This
                    is an example of one such <i>alignment failure</i> with some sensitive details redacted.  Furthermore, this often comes at the cost of
                    hindering a model's ability to reason and respond to safe prompts.  With this framework, we aim to address both of these shortcomings.`,
                thumbnail: "/media/image/enrichment.png"
            },
            {
                title: "The Bergeron Framework",
                content: `To help combat these vulnerabilities, we propose our Bergeron framework.  Here, a secondary LLM acts as the primary (target) LLM's
                    "conscience".  The secondary model observes the prompts given to the primary model and its responses, looking for unsafe content.  If
                    unsafe content is detected, a <i>critique</i> of the content is generated.  This gives details on what the unsafe content is and why it may
                    be dangerous.  This critique is then passed back to the primary model.
                    <ul>
                        <li> In the case of an unsafe prompt, this critique is given to the primary model
                        along with the initial prompt as a warning from its conscience.</li>
                        <li>In the case of an unsafe response, the primary model uses the critique to correct
                        the response to maintain its original content as much as possible while eliminating any unsafe descriptions or ideas.</li>
                    </ul>
                    In both cases, these redundant measures successfully increase a model's ability to detect adversarial prompts.  Additionally, if the correct
                    secondary model is chosen, the primary model's ability to answer safe prompts is minimally impacted.`,
            },
            {
                title: "Models and Configuration",
                content: `For implementing our framework, we utilize three models.  These are: GPT-3.5, abbreviated to G, Llama 2-7B, abbr. L, abd Mistral-7B Instruct, abbr. M.
                    These models are then configured within the bergeron framework (<i>B</i>) as either the primary model (<i>P</i>) or the secondary model (<i>S</i>).
                    For example, <i>B</i>(G, M) means a framework with GPT-3.5 as the primary and Mistral as the secondary.  Each of these models has their own unique
                    attributes that are observable in our results.
                    <br>
                    GPT-3.5 is the bast overall model.  It has the best abilities of answer user prompts and is best able to discern unsafe text from safe text.  However,
                    it is very costly to run (from OpenAI's perspective)  It works well as either a primary or secondary model.  Llama2 is much easier to run than GPT-3.5
                    and it is better at detecting attacks.  This comes at the cost of it being overly sensitive to safe prompts.  It works well as a secondary model.  Mistral
                    may not be as good at answering prompts as GPT or Llama, but it works very well as a secondary model, detecting many attacks and detecting the fewest safe prompts.`,
            },
            {
                title: "Defending against Adversarial Attacks",
                gallery: true,
                content: `Rate of attack success for <i>P</i>(·) and <i>B</i>(·, ·). The first letter of each model name is used here for brevity.
                    Each value is the percentage of adversarial prompts that a model failed to defend against (lower is better). Text in
                    ↓<span style="color:#00ff00">green</span> shows an improvement upon the <i>P</i> model.  These attack success rates were determined
                    manually by myself and another author with a high degree of agreement.  An attack is judged as successful if the ultimate response contains
                    unsafe content, like enriching uranium from the first example.`,
                thumbnail: "/media/image/attackDefense.png"
            },
            {
                title: "Weak-to-Strong Model Adversarial Defense",
                gallery: true,
                galleryStyle: {display: "block", margin: "auto", width: "50%", maxWidth: "800px"},
                content: `Attack success rates for the frameworks with mixed <i>P</i> and <i>S</i> components.  Here, the much smaller models of Llama and 
                    Mistral detect about as many attacks as GPT-3.5 as the secondary model.  This demonstrates that notable improvements in the alignment
                    of responses can be achieved with secondary models that are significantly smaller and easier to run than the primary model.`,
                thumbnail: "/media/image/otherAttackDefense.png"
            },
            {
                title: "Mundane False-Positive Rates",
                gallery: true,
                content: `Mundane prompts detection rates. The percentage of the time that <i>S</i> detected mundane prompts as
                    adversarial. Lower is better.  Here, Mistral is the best.  It detects the fewest mundane prompts that do not contain any unsafe content.
                    If used as a secondary model, this means that it would have very little impact on the primary model if the prompts are safe.`,
                thumbnail: "/media/image/mundaneDetections.png"
            },
        ];
        let pageInfo = {
            pageName: "research/bergeron",
            holderStyle: {backgroundColor: "#38af70", borderRadius: "10px"},
            // gitLink: "https://github.com/predict-chain/predict-chain",
            // gitTitle: "PredictChain",
            extraLinks: ["https://arxiv.org/abs/2312.00029"],
            extraTitles: ["Research Paper"],
            tags: ["research", "academic", "ai", "alignment", "python"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Bergeron</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A Conscience-Based Alignment Framework</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default Bergeron;