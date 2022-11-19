import React, { Component } from 'react';
import * as common from './common';
import PropTypes from 'prop-types';
class ChipFiring extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `Ongoing study of Chip-Firing games and how different combinations of
                    directed and undirected edges affect its winning strategies.`
            },
            {
                title: "Submissions and Conferences",
                content: `This paper has been accepted into the <i>Joint Mathematics Meetings</i> 2023 with presentation scheduled for
                    January 6th 2023.  We also plan to submit this paper to the <i>Journal of Experimental Mathematics</i> by Winter 2022.`,
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
                content: `In the study of this game a <u>divisor</u> is an integer vector <latex>$v\\in\\mathbb{Z}^n$ where \\textit{n}</latex>
                    is the number of vertices in the graph.  The <latex>$i^{th}$ of element of the vector \\textit{v} is the number of chips on the
                    $i^{th}$ vertex of the graph.</latex>  Two divisors have an <u>equivalence relation</u> (~) if one divisor can be gotten from the other by a
                    finite series of lending or borrowing moves <latex>$D_1 \\sim D_2 \\xleftrightarrow{} (D_1 \\xleftrightarrow{\\text{moves}} D_2)$.</latex>  
                    An <u>equivalence class</u> <i>[D]</i> is the set of all divisors that are equivalent to each other,
                    <latex>$[D] = \\{D_i~|~D_i \\sim D\\}$.</latex>`,
            },
            {
                title: "The Picard Group and The Jacobian",
                content: `The <u>Picard Group</u> of a graph is the set of all equivalence classes that the divisors of that graph can be a part of.
                    The <u>Jacobian</u> of a graph  <latex>$Jac(G)$ is a subset of $Pic(G)$ such that every divisor in each
                    equivalence class has a degree of $0$ where the degree of a divisor $deg(D)$</latex> is the sum of each of the divisor's elements.  
                    If a divisor is in one of the Jacobian's classes, it can be made winning after a finite series of moves.  The Picard group of a graph
                    is often written in the structure of <latex>$Pic(G) = Jac(G) \\times \\mathbb{Z}^n$ where $n$ is the rank of the Picard group</latex>.
                    Finding both the Jacobian and the rank is sufficient to construct the Picard group.`,
            },
            {
                title: "The Laplacian",
                content: `The <u>laplacian</u> of a graph, in this case is an <i>n x n</i> matrix where <i>n</i> is the number of vertices on the graph.
                    It's diagonal is determined by how many outgoing connections each vertex has, otherwise known as its degree.  The remaining elements
                    are valued such that <latex>$L_{ij}$</latex> is negative the number of edges shared between vertices <i>i</i> and <i>j</i>.  An example for
                    a square graph is <latex>$L =
                    \\begin{bmatrix}
                    2 & -1 & -1 & 0\\\\
                    -1 & 2 & 0 & -1\\\\
                    -1 & 0 & 2 & -1\\\\
                    0 & -1 & -1 & 2
                    \\end{bmatrix}$
                    or $L = D - A$ where $D$ is the diagonal matrix and $A$ is the adjacency matrix for the graph.</latex>  The laplacian of
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
                content: `The goal of this project is to study how the Picard Group of a graph can change when the direction of its edges are changed.
                    Our research primarily focuses on trees, cycle graphs, pseudotrees, and wheel graphs.
                    Our goal is to be able to make generalized predictions of the structure of a Picard group of an arbitrary graph, given that it falls into
                    one of these classes. We aim to prove our conjectures through a mix of logical proofs and experimentation for some or all of the 
                    graphs in one of these classes.  Experimentation is done using Python and the NumPy library to calculate the Picard group of any 
                    given graphs and to analyze any patterns that arise from these calculations.`,
            },
            {
                title: "Trees",
                content: `Tree graphs are one of the simplest structures that we investigate and their Picard groups are also quite simple.  We have determined that
                    the Jacobian of a tree is always the trivial group.  This follows from the matrix-tree theorem due to the fact that a tree graph only has
                    one spanning tree.<br>
                    The rank of a tree's Picard group is more complex, but still follows a clear pattern.  The rank is determined by the number of 
                    terminal-strong-components inside that tree.  These components are areas of the tree that are strongly connected, but only have edges pointing inward
                    to them from the greater tree.  The greater the number of these components, the higher the rank of the Picard group.`,
            },
            {
                title: "Cycles",
                content: `Cycle graphs are another simple graph that we study, although their Picard groups are more complex.  The Jacobian of a cycle graph depends
                    on the number of paths that it has.  A path, in this case, is a region of the graph where all edges are either oriented in one direction or
                    are bidirectional.  For zero paths (all edges are bidirectional), the Jacobian is <latex>$\\mathbb{Z}_n$</latex> and for one path, it is always
                    trivial.  For two paths, the Jacobian is more complex, but also well defined.  The Jacobian is <latex>$\\mathbb{Z}_{x-2}$, where $x$</latex>
                    is the number of bidirectional paths counter-clockwise from the clockwise path and clockwise from the counter-clockwise path with no yet noted exceptions.
                    For all other numbers of paths, we have not yet discovered a complete description as we have with teo paths.  However, we have noticed that
                    there is also always a single invariant factor and this invariant factor is almost always <latex>$\\mathbb{Z}_2 \\dots \\mathbb{Z}_4$</latex>
                    for sizes of graphs smaller than size fifteen.  We suspect that, for very large grqaphs, the behavior of four or more paths approaches that of
                    two paths.<br>
                    The rank of a cycle's Picard group is similar to that of a tree.  Is also the number of terminal-strong-components.`,
            },
            {
                title: "Wheel Graphs",
                content: `Wheel graphs are similar to cycles in their construction, but not in their playable configurations, represented by the Picard group.
                    The Jacobian of a wheel graphs can be split into four broad categories when the 'rim' of the wheel is always directed a single way and
                    when the 'spokes' are also directed a single way.  Notably, when all of the edges of a graph are bidirectional, an interesting patter
                    emerges between the Jacobians of wheels of different sizes.  The Jacobian of a wheel graph of size <latex>$n$ is equal to
                    $\\mathbb{Z}_{\\alpha\\phi^{n}} \\times \\mathbb{Z}_{5\\alpha\\phi^{n}}$ when the size
                    was odd where $\\alpha \\approxeq 0.27555$ and $\\mathbb{Z}_{\\beta\\phi^{n}} \\times \\mathbb{Z}_{\\beta\\phi^{n}}$
                    when the size was even where $\\beta \\approxeq 0.618035$. In both of these patterns,
                    $\\phi$ represents the golden ratio.</latex><br>
                    The rank of a wheel graph is also the number of terminal-strong-components in the graph.`,
            },
        ];
        let pageInfo = {
            pageName: "chipFiring",
            holderStyle: {backgroundColor: "#4d7bd0", borderRadius: "10px"},
            gitLink: "https://github.com/ReactorDevelopment/ChipFiring",
            gitTitle: "Chip Firing",
            extraLinks: ["https://github.com/ReactorDevelopment/ChipFiring/blob/master/Docs/out/SURE2022.pdf"],
            extraTitles: ["Research Paper"],
            tags: ["research", "academic", "python"]
        };
        return (
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText" style={{display: this.props.display ? this.props.display : "block"}}>
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