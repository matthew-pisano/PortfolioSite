// javascript
import React from "react";

import { BookTile } from "@/lib/pageBuilder";

export default [
    new BookTile(
        <>Turing's Cathedral</>,
        "George Dyson",
        (
            <>
                <u>Turing's Cathedral</u> is an in-depth historical exploration of the people, places, and events
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
        ),
        (
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
                    histories whose paths all briefly crossed in the halls of the IAS to realize the true power of
                    Turing's creation.
                </p>
            </>
        ),
        <></>,
        "/media/image/turings-cathedral.jpg",
        "cathedral"
    ),
    new BookTile(
        <>The Maniac</>,
        "Benjamín Labatut",
        (
            <>
                <u>The Maniac</u> is a fictionalized biography of polymath John von Neumann. It primarily explores von
                Neumann's life and accomplishments through a series of envisioned interviews with those he interacted
                with. The book's prelude follows Paul Ehrenfest as he grapples with the crumbling foundations of physics
                and mathematics that began to buckle under the weight of the quantum revolution and the theory of
                relativity. The book then transitions to von Neumann's life, his work on the Manhattan Project, and his
                contributions to game theory and computer science. The concluding chapters concentrate on Demis Hassabis
                and his work on AlphaGo, a computer program that defeated the world Go champion.
            </>
        ),
        (
            <>
                In this book, Labatut effectively employs fictionalized interactions and interviews to instill a sense
                of awe within the reader and contextualize historical events with a sense of gravity that traditional
                history books may struggle to convey. Much of the book takes place during the 1920s and 1930s. These
                chapters explore how some of Europe's most brilliant minds coped with existential threats to the
                established order of science and mathematics in the forms of quantum mechanics, relativity, and Gödel's
                incompleteness theorems. For some, this is compounded by the rapid rise of the Nazis, anti-semitism, and
                distrust in the sciences on the continent. In later chapters, Labatut details the Manhattan Project and
                the sense of awful wonder that nuclear weapons imparted upon their creators. Many of the minds that the
                book follows finally break under the strain of their environment or as a consequence of their own
                creations.
                <p>
                    While the finer details of the book are not strictly based on historical evidence, reading{" "}
                    <u>The Maniac</u> has changed how I think about inspiration, ideation, and invention. It also
                    instills a sense of reverence for the geniuses that pioneered many of the ideas that underpin the
                    modern understanding of computing, artificial intelligence, and game theory. It also gave me a much
                    better understanding of John von Neumann, as his achievements are often less emphasized than those
                    from Turing or Gödel during undergraduate education.
                </p>
            </>
        ),
        <></>,
        "/media/image/the-maniac.jpg",
        "maniac"
    ),
    new BookTile(
        <>When We Cease to Understand the World</>,
        "Benjamín Labatut",
        (
            <>
                <u>When We Cease to Understand the World</u> reads very similarly to another of Labatut's books,{" "}
                <u>The Maniac</u>. It is a fictionalized account of some major developments in theoretical physics and
                mathematics during the 20th century. Based on real, historical events, the book examines the struggles,
                moral quandaries, and often madness that accompanies groundbreaking discoveries. It briefly follows
                luminaries such as Fritz Haber, Werner Heisenberg, and Alexander Grothendieck as they face the
                consequences of their discoveries and their own personal struggles.
            </>
        ),
        (
            <>
                Through his use of fiction to fill in details that remain absent from the historical record, Labatut
                explores the consequences of several foundational discoveries and the physical and psychological
                consequences that befell their creators. The first chapter, <i>Prussian Blue</i>, focuses on Fritz
                Haber, a Jewish German chemist who invented a synthetic process of creating ammonia from nitrogen and
                hydrogen gas in addition to heavier-than-air chlorine gas. The former revolutionized the production of
                rich fertilizer, potentially saving hundreds of millions from starvation; the latter was used in the
                trenches of World War I, killing hundreds of thousands. Haber also discovered a powerful pesticide,
                dubbed <i>Zyklon A</i>, a derivative of which would later be used by the Nazis to murder millions.
                During its use, the <i>Zyklon B</i> derivative broke down into several chemical byproducts, one of which
                often stained chamber walls a distinctive shade of <i>Prussian Blue</i>. At the core of Fritz Haber's
                legacy is the concept of dual-use. Just as the <i>Haber-Bosch</i> process and <i>Zyklon A</i> have
                yielded nearly incalculable benefits through their civilian use, chlorine gas and <i>Zyklon B</i> gave
                rise to untold suffering through their military usage. This concept similarly applies to many other
                technologies, ranging from Artificial Intelligence to Nuclear Fission.
                <p>
                    The last section of the book follows Werner Heisenberg and Erwin Schrödinger as their discoveries at
                    the core of quantum mechanics marked the collapse of the final pillar of our classical understanding
                    of the world. First, Heisenberg's calculations predicted a strange property of quantum particles:
                    the more finely you were able to pin down their position, the less you could be certain of their
                    momenta and vice-versa. This result is heavily intertwined with the <i>Observer Effect</i> by which
                    observations of a quantum object are not commutable. Next came the discoveries of Erwin Schrödinger.
                    By his calculations, quantum objects could best be described as waves, without a single,
                    well-defined position of momentum. By the end of the book, Heisenberg realizes that these two
                    notions are compatible, resulting in a world where quantum particles exist in an indeterminate
                    state, best described by Schrödinger's wave functions. Upon observation, however, this wave function
                    collapses, resolving the particle to a more well-defined position or momentum. The consequence of
                    this discovery was a world that does not have a predictable, fundamental description. It is "fuzzy",
                    random, and uncertain at its core. Our world of definite, commutable, and observable phenomena is
                    merely an illusion built on the true, quantum reality.
                </p>
                <p>
                    <u>When We Cease to Understand the World</u> expands upon a theme that I have noticed among many of
                    the books that I have read: as you examine reality at its most granular, the stranger it becomes and
                    the further your original understanding of the world begins to break down. This extends beyond
                    quantum mechanics; the continuous flow of time also increasingly appears to be a stubborn illusion,
                    along with how all humans behave, the underlying causes of our everyday interactions, and what it
                    says about how we make decisions, both personal and interpersonal. I believe this notion warrants a
                    much deeper discussion in the future.
                </p>
            </>
        ),
        <></>,
        "/media/image/when-we-cease-to-understand-the-world.jpg",
        "cease-to-understand-the-world"
    )
];
