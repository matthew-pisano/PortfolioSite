import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"I, Robot"}
        author={"Isaac Asimov"}
        synopsis={
            <>
                <i>I, Robot</i> spans a series of nine stories detailing the fictional progression of robotic technology
                as it advanced from simple childcare agents to fully autonomous general intelligences. Each story is
                framed as part of an interview between an unnamed journalist and Dr. Susan Calvin, the chief{" "}
                <i>robo-psychologist</i> of <i>U.S. Robots and Mechanical Men, Inc.</i>. Presented in chronological
                order from the turn of the millennium to the mid twenty-first century, Calvin's narratives feature
                herself along with several other members of her company as she recalls how they navigated the challenges
                that the new technologies presented.
                <p>
                    Core to the book's narrative are Asimov's now-infamous three laws of robotics, and how their literal
                    interpretation (or exclusion) governed how the <i>USRMM's</i> automations behave; each law was
                    superseded by the next in terms of behavioral priority. In many of these stories, it was Calvin's
                    personal role to understand how these three laws influenced the <i>positronic brains</i> inside of
                    each robot.
                </p>
                <p>
                    Gregory Powell and Michael Donovan are field testers for the <i>USRMM</i> corporation, tasked with
                    testing and debugging experimental models. Through them, Asimov explores what may occur when two of
                    his robotics laws directly oppose each other, how "mechanical men" may reason about their place in
                    the world as servants to humans, and how their synthetic minds cope with overwhelming stimuli. In
                    later episodes, Calvin takes a more direct role, examining how an always-aim-to-please attitude can
                    unexpectedly backfire, what may occur if a robot's desire to protect humans is compromised, and the
                    consequences of these automata becoming embedded into human society.
                </p>
            </>
        }
        thoughts={
            <>
                Similar to other pioneering works such as <i>2001: A Space Odyssey</i> or{" "}
                <i>Do Androids Dream of Electric Sheep?</i>, many of <i>I, Robot's</i> elements are familiar tropes to
                modern readers. However, it is vital to acknowledge that many of these familiar story beats{" "}
                <i>originated from</i> Asimov and his writings. The author impressively anticipated many ethical and
                practical issues surrounding artificial intelligence before the phrase was even coined in 1955. For
                example, his stories like "Runaround" or "Liar!" give very grounded (albeit dramatized) scenarios on how
                hard-coding specific rules into intelligent systems is fraught with exceptions and pitfalls.
                <p>
                    Asimov also offers some interesting thoughts on how human society would react to the invention of
                    machines that were suddenly as capable as humans themselves. Reactionary approaches to the
                    automation of labor are rather realistically portrayed by organizations such as{" "}
                    <i>The Society for Humanity</i> along with the efforts of labor unions in general to minimize robot
                    activity on Earth itself. Their action in "Evidence" and "The Evitable Conflict" make for believable
                    world building and are emblematic of similar movements emerging due to the modern AI landscape.
                </p>
                <p>
                    I find these stories especially interesting as they act as a sort of time capsule for the early
                    public perception of AI. One aspect that I find striking is that the <i>positronic brains</i> of the
                    robots are always embodied. Even stationary agents, such as "The Brain" in "Escape!", still have
                    eyes and arms. At this point in fiction, robots were often depicted as simply "mechanical men",
                    essentially one-to-one copies of humans with most of our features having robotic counterparts
                    (Asimov's robots even have eyelids!); when these were written in the 1940s, notions of disembodied
                    minds were not as often represented. <i>I, Robot</i> also imagined robots to be fundamentally
                    predictable with a set of high-level rules. The three fundamental and human-understandable laws were
                    very difficult to modify or train out of the minds' positronic pathways, something that is largely
                    absent from all but toy AI models today. As a consequence of this, the synthetic brains were always
                    (relatively) interpretable. If needed, a team of trained mathematicians could manually trace back
                    the calculations that occurred and offer intelligible insight on the reasons for a particular
                    behavior. Aside from especially simple or specially trained models, this problem is largely
                    intractable today.
                </p>
            </>
        }
        thumbnail={"/media/image/i-robot.jpg"}
        anchor={"i-robot"}
    />
);
