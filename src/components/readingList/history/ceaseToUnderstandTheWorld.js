import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"When We Cease to Understand the World"}
        author={"Benjamín Labatut"}
        synopsis={
            <>
                <i>When We Cease to Understand the World</i> reads very similarly to another of Labatut's books,{" "}
                <i>The Maniac</i>. It is a fictionalized account of some major developments in theoretical physics and
                mathematics during the 20th century. Based on real, historical events, the book examines the struggles,
                moral quandaries, and often madness that accompanies groundbreaking discoveries. It briefly follows
                luminaries such as Fritz Haber, Werner Heisenberg, and Alexander Grothendieck as they face the
                consequences of their discoveries and their own personal struggles.
            </>
        }
        thoughts={
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
                    The last section of the book follows Werner Heisenberg and Erwin Schrödinger as their discoveries,
                    at the core of quantum mechanics, marked the collapse of the final pillar of our classical
                    understanding of the world. First, Heisenberg's calculations predicted a strange property of quantum
                    particles: the more finely you were able to pin down their position, the less you could be certain
                    of their momenta and vice-versa. This result is heavily intertwined with the <i>Observer Effect</i>{" "}
                    by which observations of a quantum object are not commutable. Next came the discoveries of Erwin
                    Schrödinger. By his calculations, quantum objects could best be described as waves, without a
                    single, well-defined position of momentum. By the end of the book, Heisenberg realizes that these
                    two notions are compatible, resulting in a world where quantum particles exist in an indeterminate
                    state, best described by Schrödinger's wave functions. Upon observation, however, this wave function
                    collapses, resolving the particle to a more well-defined position or momentum. The consequence of
                    this discovery was a world that does not have a predictable, fundamental description. It is "fuzzy",
                    random, and uncertain at its core. Our world of definite, commutable, and observable phenomena is
                    merely an illusion built on the true, quantum reality.
                </p>
                <p>
                    <i>When We Cease to Understand the World</i> expands upon a theme that I have noticed among many of
                    the books that I have read: as you examine reality at its most granular, the stranger it becomes and
                    the further your original understanding of the world begins to break down. This extends beyond
                    quantum mechanics; the continuous flow of time also increasingly appears to be a stubborn illusion,
                    along with how all humans behave, the underlying causes of our everyday interactions, and what it
                    says about how we make decisions, both personal and interpersonal. I believe this notion warrants a
                    much deeper discussion in the future.
                </p>
            </>
        }
        thumbnail={"/media/image/when-we-cease-to-understand-the-world.jpg"}
        anchor={"cease-to-understand-the-world"}
    />
);
