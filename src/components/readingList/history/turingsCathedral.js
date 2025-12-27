import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Turing's Cathedral"}
        author={"George Dyson"}
        synopsis={
            <>
                <i>Turing's Cathedral</i> is an in-depth historical exploration of the people, places, and events
                surrounding the creation of the first general-purpose, electronic, digital computer. The <i>ENIAC</i>,
                or Electronic Numerical Integrator and Computer, was one of the first concrete realizations of Turing's{" "}
                <i>Universal Computing Machine</i>. The historical account, compiled by Dyson from the records of the{" "}
                <i>Institute for Advanced Study</i> (among other sources), details the project itself, along with the
                scientists and engineers that created it, and the institute itself.
                <p>
                    From its inception in late 1945, the machine was often reserved for usage in military calculations,
                    namely those integral in predicting the behavior of thermonuclear reactions, purely theoretical at
                    the time. Many of the scientists involved in the project, including John von Neumann and Robert
                    Oppenheimer, had come straight from Los Alamos after the completion of the <i>Manhattan Project</i>,
                    which created the first fission bombs; the <i>ENIAC</i> served as a computerized replacement to the
                    largely manual calculations that helped predict the behavior of simpler atomic weapons.
                </p>
                <p>
                    However, the <i>ENIAC</i>'s impact reached far beyond nuclear calculations. Dyson details the
                    innovations that went into its design and the other calculations that it performed when not
                    predicting neutron cascades or blast waves. From the first computerized <i>Monte Carlo</i>{" "}
                    simulations to cellular automata, weather prediction, and cosmic rays, the computer helped to
                    further many scientific fields through statistical predictions and numerical analysis.
                </p>
                <p>
                    In addition to the machine itself, Dyson also expands upon the personal histories of its creators.
                    These include John von Neumann, the mastermind of the project and designer of the modern computer
                    architecture, Herman Goldstine who helped organize the project along with J. Presper Eckert and John
                    Mauchly, and Julian Bigelow as the chief engineer. Along with Alan Turing himself, of course, who
                    did not directly contribute to the project but laid the theoretical groundwork upon which the
                    computer could be built.
                </p>
            </>
        }
        thoughts={
            <>
                One of the more surprising aspects of Dyson's account was just how tightly linked the development of the
                first computer was with the development of atomic weapons. Many of the scientists who worked on the
                project at Los Alamos pivoted to the <i>ENIAC</i> project where their work continued in the form of
                thermonuclear calculations. Upon further analysis, however, the nature of the fields of nuclear physics
                and computer science shared a high degree of similarity in 1945. A significant amount of theoretical
                work had already been established before the war. For nuclear physics this was Einstein's special
                relativity and the discovery of fission by Hahn and Strassmann. For computer science, this came in the
                form of Gödel's incompleteness theorems, Shannon's work on information, and Turing's theories on
                computation. This groundwork was built upon by both American scientists and former members of Europe's
                intelligentsia who fled the looming threat of the Third Reich, and was funded through U.S. subsidies
                motivated by the war effort.
                <p>
                    I also enjoyed Dyson's detailed explorations of the series of rapid advancements made in the
                    post-war years; many of which still serve as foundations of computer science today. The author not
                    only offers explanations for the Monte Carlo method of analysis, Barricelli's early cellular
                    automata, and the realization of Lewis Richardson's work on weather forecasting by Jule Charney, but
                    also details on the lives of their originators. The result is a dense web of scientists and
                    histories whose paths all briefly crossed in the halls of the IAS. Here the true power of Turing's
                    creation was first realized.
                </p>
            </>
        }
        thumbnail={"/media/image/turings-cathedral.jpg"}
        anchor={"cathedral"}
    />
);
