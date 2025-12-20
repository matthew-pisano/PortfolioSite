import React from "react";

import Latex from "react-latex-next";

import { GitLink, TileLink } from "@/components/tiles/Links";
import { TileTag } from "@/components/tiles/Tags";
import { SectionTile, Tile } from "@/components/tiles/Tiles";
import DefaultWrapper from "@/components/wrappers/DefaultWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";

export default function ChipFiring() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Chip Firing",
        "A research project to examine patterns in chip firing games",
        { backgroundColor: PageColor.URANIUM_GREEN },
        [TileTag.RESEARCH, TileTag.ACADEMIC, TileTag.PYTHON],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/ChipFiring"}>Chip Firing</GitLink>
                <TileLink href={"https://www.sciencedirect.com/science/article/pii/S0024379525000771"}>
                    Research Paper
                </TileLink>
            </>
        )
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2>, thumbnail: "/media/image/chipfiring.png" })}>
                <p>
                    This research was performed by myself, an advisor at <i>SUNY New Paltz</i>, and one of his
                    colleagues. In this research, we focused on the study of Chip-Firing games and how different
                    combinations of directed and undirected edges affect its winning strategies. This falls primarily
                    within the fields of linear algebra, graph theory, and combinatorics.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Abstract</> })}>
                <p>
                    The Picard group of an undirected graph is a finitely generated Abelian group, and the Jacobian is
                    the torsion subgroup of the Picard group. These groups can be computed by using the Smith normal
                    form of the Laplacian matrix of the graph or by using chip-firing games associated with the graph.
                    One may consider its generalization to directed graphs based on the Laplacian matrix. We compute
                    Picard groups and Jacobians for several classes of directed trees, cycles, wheel, and multipartite
                    graphs.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Submissions and Conferences</> })}>
                <p>
                    This paper was accepted into the Joint Mathematics Meetings 2023 and presented on January 6th 2023.
                    This research was also published in the journal{" "}
                    <a
                        href="https://www.sciencedirect.com/science/article/pii/S0024379525000771"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i>Linear Algebra and its Applications</i>
                    </a>
                    , Volume 711, Pages 180-211 on April 15th 2025.
                </p>
            </Tile>

            <SectionTile tileInfo={new TileInfo({ title: <>Background</> })} />

            <Tile tileInfo={new TileInfo({ title: <>The Chip Firing Game</> })}>
                <p>
                    A Chip Firing Game is a game played on a graph structure in mathematics. Each vertex on the graph is
                    assigned a positive or negative integer, representing the number of 'chips' that vertex has. Each
                    vertex has two moves, borrowing and lending. When a vertex borrows, all of its neighboring vertices
                    transfer one 'chip' to the borrowing vertex. Lending is the opposite, where the lending vertex
                    donates one 'chip' to all neighboring vertices. For directed graphs, each vertex can only lend or
                    borrow from the vertices connected to it by its <i>outgoing</i> edges only. The aim of the game is
                    to find some series of lending and borrowing moves such that every vertex has zero or more 'chips'.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Divisors and Equivalence Relations</> })}>
                <p>
                    In the study of this game a <u>divisor</u> is an integer vector{" "}
                    <Latex>{`$v\\in\\mathbb{Z}^n$`}</Latex> where <i>n</i> is the number of vertices in the graph. The{" "}
                    <Latex>{`$i^{th}$`}</Latex> of element of the vector, <i>v</i>, is the number of chips on the{" "}
                    <Latex>{`$i^{th}$`}</Latex> vertex of the graph. Two divisors have an <u>equivalence relation</u>{" "}
                    (~) if one divisor can be gotten from the other by a finite series of lending or borrowing moves{" "}
                    <Latex>{`$D_1 \\sim D_2 \\xleftrightarrow{} (D_1 \\xleftrightarrow{\\text{moves}} D_2)$`}</Latex>.
                    An <u>equivalence class</u> <i>[D]</i> is the set of all divisors that are equivalent to each other,{" "}
                    <Latex>{`$[D] = \\{D_i~|~D_i \\sim D\\}$`}</Latex>.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>The Picard Group and The Jacobian</> })}>
                <p>
                    The <u>Picard Group</u> of a graph is the set of all equivalence classes that the divisors of that
                    graph can be a part of. The <u>Jacobian</u> of a graph <Latex>{`$Jac(G)$`}</Latex> is a subset of{" "}
                    <Latex>{`$Pic(G)$`}</Latex> such that every divisor in each equivalence class has a degree of{" "}
                    <Latex>{`$0$`}</Latex> where the degree of a divisor <Latex>{`$deg(D)$`}</Latex> is the sum of each
                    of the divisor's elements. If a divisor is in one of the Jacobian's classes, it can be made winning
                    after a finite series of moves. The Picard group of a graph is often written in the structure of{" "}
                    <Latex>{`$Pic(G) = Jac(G) \\times \\mathbb{Z}^n$`}</Latex> where <Latex>{`$n$`}</Latex> is the rank
                    of the Picard group. Finding both the Jacobian and the rank is sufficient to construct the Picard
                    group.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>The Laplacian</> })}>
                <p>
                    The <u>laplacian</u> of a graph, in this case is an <i>n x n</i> matrix where <i>n</i> is the number
                    of vertices on the graph. Its diagonal is determined by how many outgoing connections each vertex
                    has, otherwise known as its degree. The remaining elements are valued such that{" "}
                    <Latex>{`$L_{ij}$`}</Latex> is negative the number of edges shared between vertices <i>i</i> and{" "}
                    <i>j</i>. An example for a square graph is{" "}
                    <Latex>{`$L =
                \\begin{bmatrix}
                2 & -1 & -1 & 0\\\\
                -1 & 2 & 0 & -1\\\\
                -1 & 0 & 2 & -1\\\\
                0 & -1 & -1 & 2
                \\end{bmatrix}$`}</Latex>
                    or <Latex>{`$L = D - A$`}</Latex> where <Latex>{`$D$`}</Latex> is the diagonal matrix and{" "}
                    <Latex>{`$A$`}</Latex> is the adjacency matrix for the graph. The laplacian of a graph encodes all
                    the valid moves that can be preformed on that graph. Adding any linear combination of the columns of
                    the laplacian to a given divisor will result in a divisor that has had those specific lending or
                    borrowing moves preformed on it. Through use of the laplacian, both the picard group and jacobian
                    can be calculated. As the nature of a graph changes through changing the number of vertices, making
                    edges directed or undirected, the valid solutions to a game can change greatly.
                </p>
            </Tile>

            <SectionTile tileInfo={new TileInfo({ title: <>Project Details</> })} />

            <Tile tileInfo={new TileInfo({ title: <>Goal</> })}>
                <p>
                    The goal of this project is to study how the Picard Group of a graph can change when the direction
                    of its edges are changed. Our research primarily focuses on trees, cycle graphs, pseudotrees, and
                    wheel graphs. Our goal is to be able to make generalized predictions of the structure of a Picard
                    group of an arbitrary graph, given that it falls into one of these classes. We aim to prove our
                    conjectures through a mix of logical proofs and experimentation for some or all of the graphs in one
                    of these classes. Experimentation is done using Python and the NumPy library to calculate the Picard
                    group of any given graphs and to analyze any patterns that arise from these calculations.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Trees</> })}>
                <p>
                    Tree graphs are one of the simplest structures that we investigate and their Picard groups are also
                    quite simple. We have determined that the Jacobian of a tree is always the trivial group. This
                    follows from the matrix-tree theorem due to the fact that a tree graph only has one spanning tree.
                </p>
                <p>
                    The rank of a tree's Picard group is more complex, but still follows a clear pattern. The rank is
                    determined by the number of terminal-strong-components inside that tree. These components are areas
                    of the tree that are strongly connected, but only have edges pointing inward to them from the
                    greater tree. The greater the number of these components, the higher the rank of the Picard group.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Cycles</> })}>
                <p>
                    Cycle graphs are another simple graph that we study, although their Picard groups are more complex.
                    The Jacobian of a cycle graph depends on the number of paths that it has. A path, in this case, is a
                    region of the graph where all edges are either oriented in one direction or are bidirectional. For
                    zero paths (all edges are bidirectional), the Jacobian is <Latex>{`$\\mathbb{Z}_n$`}</Latex> and for
                    one path, it is always trivial. For two paths, the Jacobian is more complex, but also well-defined.
                    The Jacobian is <Latex>{`$\\mathbb{Z}_{x-2}$`}</Latex>, where <Latex>{`$x$`}</Latex> is the number
                    of bidirectional paths counter-clockwise from the clockwise path and clockwise from the
                    counter-clockwise path with no yet noted exceptions. For all other numbers of paths, we have not yet
                    discovered a complete description as we have with two paths. However, we have noticed that there is
                    also always a single invariant factor and this invariant factor is almost always{" "}
                    <Latex>{`$\\mathbb{Z}_2 \\dots \\mathbb{Z}_4$`}</Latex> for sizes of graphs smaller than size
                    fifteen. We suspect that, for very large graphs, the behavior of four or more paths approaches that
                    of two paths.
                </p>
                <p>
                    The rank of a cycle's Picard group is similar to that of a tree. Is also the number of
                    terminal-strong-components.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Wheel Graphs</> })}>
                <p>
                    Wheel graphs are similar to cycles in their construction, but not in their playable configurations,
                    represented by the Picard group. The Jacobian of a wheel graphs can be split into four broad
                    categories when the 'rim' of the wheel is always directed a single way and when the 'spokes' are
                    also directed a single way. Notably, when all the edges of a graph are bidirectional, an interesting
                    patter emerges between the Jacobians of wheels of different sizes. The Jacobian of a wheel graph of
                    size <Latex>{`$n$`}</Latex> is equal to{" "}
                    <Latex>{`$\\mathbb{Z}_{\\alpha\\phi^{n}} \\times \\mathbb{Z}_{5\\alpha\\phi^{n}}$`}</Latex> when the
                    size was odd where <Latex>{`$\\alpha \\approxeq 0.27555$`}</Latex> and where{" "}
                    <Latex>{`$\\mathbb{Z}_{\\beta\\phi^{n}} \\times \\mathbb{Z}_{\\beta\\phi^{n}}$`}</Latex> when the
                    size was even where <Latex>{`$\\beta \\approxeq 0.618035$`}</Latex>. In both of these patterns,{" "}
                    <Latex>{`$\\phi$`}</Latex> represents the golden ratio.
                </p>
                <p>The rank of a wheel graph is also the number of terminal-strong-components in the graph.</p>
            </Tile>
        </DefaultWrapper>
    );
}
