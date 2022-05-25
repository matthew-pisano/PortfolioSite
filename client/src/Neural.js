import React, { Component } from 'react';
import * as common from './common';
class Neural extends Component {

    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `The objective of this project was to analyze the differences between backpropagation, a genetic algorithm method,
                    and the decision tree optimization on the training and execution of a neural network.`
            },
            {
                title: "Backpropagation",
                content: `The backpropagation algorithm is one of the most widely used in neural networks today, with many applicable
                    situations.  This method acted similar to a control for this project, being compared to the other two algorithms in
                    its performance and accuracy`,
                thumbnail: ""
            },
            {
                title: "Decision Tree",
                content: `For this project, a decision tree was used to decrease the number of inputs to the neural network.  
                    This was used in conjunction with backpropagation, resulting in fewer of the matrix-heavy calculations that can make
                    backpropagation very resource intensive to train.`,
                thumbnail: ""
            },
            {
                title: "Genetic Algorithm",
                content: `The genetic algorithm used for this project is the most different from backpropagation.  The genome of each
                    individual in the population was composed of a section of the weights in the network.  These individuals were then bred
                    and passed on their combined genomes to the next generation.`,
                thumbnail: ""
            },
            {
                title: "Testing",
                content: `For training, each one of the three networks was given the same 80% proportion of the original data set and 
                    trained for 150 epochs and three independent trials. The loss function for each network is given by the 
                    sum of squared errors for every sample. 
                    <p class="tab">Each trial was given a score for comparison. The score is given by the percent
                    of correctly identified diagnoses divided by the time it took for the trial to
                    complete. The higher the score, the better the performance of the algorithm.</p>`,
                thumbnail: ""
            },
            {
                title: "Backpropagation Results",
                content: `For the backpropagation network, a learning rate (&alpha;) of 0.18 was used. Across
                    three trials, training over the data set for the 150 epochs, the network trained
                    after 0.82 seconds on average. The average loss for the testing set was 0.125,
                    correctly predicting 85.9% of diagnoses in the testing set and 95.1% withing
                    the training set. Its overall score was 0.96.
                    <p class="tab">The training loss curve for backpropagation follows closely to a curve of 1/x
                    This signifies a good loss curve with minimal over-fitting. The loss declines
                    sharply and the accuracy rises rapidly over successive epochs of training.</p>`,
                thumbnail: ""
            },
            {
                title: "Decision Tree Results",
                content: `For the backpropagation network with the decision tree optimization, a learning 
                    rate (&alpha;) of 0.18 was also used. The decision tree was able to eliminate the
                    attributes of weight as least impactful and glucose levels as second to least
                    impactful. For this experiment, only weight was eliminated. This brought
                    the total number of inputs down to ten input nodes. Across three trials,
                    training over the data set for the 150 epochs, the network trained after 0.78
                    seconds on average. The average loss for the testing set was 0.125, correctly
                    predicting 84.2% of diagnoses in the testing set and 95.0% withing the training set. 
                    Its overall score was 1.05.
                    <p class="tab">The training loss curve for optimized backpropagation follows closely to a
                    curve of 1/x. This signifies a good loss curve with minimal over-fitting. The
                    loss declines sharply and the accuracy rises rapidly over successive epochs of
                    training. Compared to raw backpropagation, this algorithm converges on an
                    optimal solution approximately twice as fast.</p>`,
                thumbnail: ""
            },
            {
                title: "Genetic Algorithm Results",
                content: `For the genetic algorithm, a population size of 6, a crossover rate of 0.5, and
                    a mutation rate of 0.01. Across three trials, the network took 4.95 seconds.
                    The average loss for the testing set was 0.295, correctly identifying 70.4%
                    of diagnoses in the testing set and 88.1% withing the training set, as shown
                    below. Its overall score was 0.138.
                    <p class="tab">The training loss curve for the genetic algorithm shows a less pronounced
                    curve, corresponding well with a high learning rate and a high change of
                    over-fitting. The loss of the algorithm dropped sharply after the training
                    started but leveled out higher than backpropagation did, resulting in a high
                    accuracy, but it did not improve significantly over time. A notable attribute
                    of the genetic network is that it was able to converge on a solution much faster
                    than either of the two other implementations, about four times faster than
                    backpropagation with the decision tree. This algorithm settles into a local
                    minimum solution after five epochs, compared to the other two which settled
                    at forty for raw backpropagation and twenty for optimized backpropagation.</p>`,
                thumbnail: ""
            },
            {
                title: "Conclusions",
                content: `Across the three trials for each of the three different algorithms, backpropagation 
                    with the decision tree optimization seems to be the best fit for this
                    particular data set. It completed quickly and with a high accuracy of 84.2%
                    and score of 1.05 when predicting if a subject was diagnosed with diabetes
                    given their medical attributes.
                    <p class="tab">One of the drawbacks of the genetic algorithm, as opposed to backpropagation, 
                    was its tendency to settle into local minima in addition to its slow
                    speed. Often, the genetic algorithm would converge on a solution that was
                    better than chance, but sub optimal. Backpropagation more often converged
                    on a more optimal solution than the genetic algorithm. Backpropagation
                    was also much faster, due in large part to the efficiencies of NumPy arrays.
                    The optimization of NumPy arrays is focused on multiplication, due to the
                    genetic algorithm having less array multiplication, it was not able to leverage 
                    the advantages of the arrays as much as backpropagation, resulting in a
                    slower algorithm.</p>
                    <p class="tab">Compared to backpropagation, the decision tree optimization slightly decreased 
                    the execution time of the network. More importantly, it converged
                    on an optimal solution much faster than raw backpropagation.</p>`
            }
        ];
        let pageInfo = {
            holderStyle: {backgroundColor: "#3c8aab", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/NuralPy",
            gitTitle: "Neural",
            pageLink: "https://github.com/ReactorDevelopment/NuralPy/blob/master/Docs/latex/report.pdf",
            pageTitle: "Paper",
            tags: ["research", "academic", "ai", "python"]
        };
        return (
            <div id="neuralPage" className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Neural</b><br/>
                        A research project for comparing training neural networks</h1>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default Neural;