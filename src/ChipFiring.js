import React, { Component } from 'react';
import * as common from './common';
class ChipFiring extends Component {

    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Study of Chip-Firing games and how different combinations of
                    directed and undirected edges affect its winning strategies.`
            },
            {
                title: "The Chip Firing Game",
                content: `A Chip Firing Game is a game played on a the graph structure in mathematics.  Each vertex on the graph is
                    assigned a positive or negative integer, representing the number of 'chips' that vertex has.  Each vertex has two moves, borrowing and lending.
                    When a vertex borrows, all of its neighboring vertices transfer one 'chip' to the borrowing vertex.  Lending is the opposite,
                    where the lending vertex donates onf 'chip' to all neighboring vertices.  The aim of the game is to find some series
                    of lending and borrowing moves such that every vertex has zero or more 'chips'.`,
                thumbnail: ""
            },
            {
                title: "Divisors and Equivalence Relations",
                content: `In the study of this game a <u>divisor</u> is an integer vector <latex>\\(v\\in\\mathbb{Z}^n\\) where \\textit{n}</latex>
                    is the number of vertices in the graph.  The <latex>\\(i^{th}\\) of element of the vector \\textit{v} is the number of chips on the
                    \\(i^{th}\\) vertex of the graph.</latex>  Two divisors have an <u>equivalence relation</u> (~) if one divisor can be gotten from the other by a
                    finite series of lending or borrowing moves <latex>\\(D_1 \\sim D_2 | D_1 \\xleftrightarrow{\\text{moves}} D_2\\).</latex>  An <u>equivalence class</u> <i>[D]</i> is the set of all divisors that are equivalent to each other,
                    <latex>\\(\\{D_i \\in [D] | D_i \\sim D\\}\\).</latex>`,
                thumbnail: ""
            },
            {
                title: "The Picard and Jacobian Groups",
                content: `The <u>Picard Group</u> of a graph is the set of all equivalence classes that the divisors of that graph can be a part of.
                    The <u>Jacobian</u> of a graph is the set of all equivalence classes such that the divisors in each class is equivalent to one
                    <u>effective divisor</u> or a winning divisor where all the elements of the divisor are greater than or equal to zero.  If a divisor
                    is in one of the Jacobian's classes, it can be made winning after a finite series of moves.`,
                thumbnail: ""
            },
        ];
        let pageInfo = {
            pageName: "chipFiring",
            holderStyle: {backgroundColor: "#4d7bd0", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/",
            gitTitle: "Chip Firing",
            tags: ["research", "academic"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: "none"}}>
                <div className="inner titleCard" style={{position: "fixed", height: "300px", top: "50px", left: '0px', right: '0px'}}>
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Chip Firing</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A research project to examine patterns in chip firing games</h3>
                </div>
                {common.build(pageInfo, tiles)}
            </div>
        );
    }
}

export default ChipFiring;