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
                title: "#Background",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "The Chip Firing Game",
                content: `A Chip Firing Game is a game played on a the graph structure in mathematics.  Each vertex on the graph is
                    assigned a positive or negative integer, representing the number of 'chips' that vertex has.  Each vertex has two moves, borrowing and lending.
                    When a vertex borrows, all of its neighboring vertices transfer one 'chip' to the borrowing vertex.  Lending is the opposite,
                    where the lending vertex donates one 'chip' to all neighboring vertices.  For directed graphs, each vertex can only lend or borrow from
                    the vertices connected to it by its <i>outgoing</i> edges only.
                    The aim of the game is to find some series of lending and borrowing moves such that every vertex has zero or more 'chips'.`,
            },
            {
                title: "Divisors and Equivalence Relations",
                content: `In the study of this game a <u>divisor</u> is an integer vector <latex>\\(v\\in\\mathbb{Z}^n\\) where \\textit{n}</latex>
                    is the number of vertices in the graph.  The <latex>\\(i^{th}\\) of element of the vector \\textit{v} is the number of chips on the
                    \\(i^{th}\\) vertex of the graph.</latex>  Two divisors have an <u>equivalence relation</u> (~) if one divisor can be gotten from the other by a
                    finite series of lending or borrowing moves <latex>\\(D_1 \\sim D_2 \\xleftrightarrow{} (D_1 \\xleftrightarrow{\\text{moves}} D_2)\\).</latex>  
                    An <u>equivalence class</u> <i>[D]</i> is the set of all divisors that are equivalent to each other,
                    <latex>\\([D] = \\{D_i~|~D_i \\sim D\\}\\).</latex>`,
            },
            {
                title: "The Picard Group and The Jacobian",
                content: `The <u>Picard Group</u> of a graph is the set of all equivalence classes that the divisors of that graph can be a part of.
                The <u>Jacobian</u> of a graph  <latex>\\(Jac(G)\\) is a subset of \\(Pic(G)\\) such that every divisor in each
                equivalence class has a degree of \\(0\\) where the degree of a divisor \\(deg(D)\\)</latex> is the sum of each of the divisor's elements.  
                If a divisor is in one of the Jacobian's classes, it can be made winning after a finite series of moves.`,
            },
            {
                title: "The Laplacian",
                content: `The <u>laplacian</u> of a graph, in this case is an <i>n x n</i> matrix where <i>n</i> is the number of vertices on the graph.
                    It's diagonal is determined by how many outgoing connections each vertex has, otherwise known as its degree.  The remaining elements
                    are valued such that <latex>\\(L_{ij}\\)</latex> is negative the number of edges shared between vertices <i>i</i> and <i>j</i>.  An example for
                    a square graph is <latex>\\(L =
                    \\begin{bmatrix}
                    2 & -1 & -1 & 0\\\\
                    -1 & 2 & 0 & -1\\\\
                    -1 & 0 & 2 & -1\\\\
                    0 & -1 & -1 & 2
                    \\end{bmatrix}\\)
                    or \\(L = D - A\\) where \\(D\\) is the diagonal matrix and \\(A\\) is the adjacency matrix for the graph.</latex>  The laplacian of
                    a graph encodes all the valid moves that can be preformed on that graph.  Adding any linear combination of the columns of the laplacian
                    to a given divisor will result in a divisor that has had those specific lending or borrowing moves preformed on it.  Through use of the
                    laplacian, both the picard group and jacobian can be calculated.  As the nature of a graph changes through changing the number of vertices,
                    making edges directed or undirected, the valid solutions to a game can change greatly.`,
            },
            {
                title: "#The Project",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Goal",
                content: `The goal of this project is to study how the Jacobian of a graph can change when the direction of its edges are changed.`,
            },
        ];
        let pageInfo = {
            pageName: "chipFiring",
            holderStyle: {backgroundColor: "#4d7bd0", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/ChipFiring",
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