import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"The Alignment Problem"}
        author={"Brian Christian"}
        synopsis={
            <>
                Unlike many of the other books on this list,{" "}
                <i>The Alignment Problem: Machine Learning and Human Values</i> concentrates primarily on the immediate
                risks of AI alignment, rather than long-term existential risks. One of the core theses of this books is
                that we do not have to wait until artificial general intelligence to feel the negative effects of
                misaligned AI systems. Through expert interviews, Christian lays out the full breadth of modern machine
                learning research and how each handles the problem of alignment.
                <p>
                    This book is divided into three parts: Prophecy, Agency, and Normativity. Prophecy covers the
                    history of AI development, from the first perceptrons to <i>AlexNet</i>, along with concrete
                    examples of simple machine learning systems causing real-world harm. Agency explores biological
                    mechanisms of reward, such as the dopaminergic system in the brain, and artificial ones, exemplified
                    by research into reinforcement learning. This includes discussions of perhaps the most notable
                    examples of massive RL systems, DeepMind's <i>AlphaGo</i> and <i>AlphaZero</i> systems. The final
                    section zooms out, covering potential future aspects of AI misalignment, inverse reinforcement
                    learning, effective altruism, and existential risk. The unique approach of this book to concentrate
                    so heavily on real examples helped to ground the concept in the mind of the reader. Considering the
                    harm misaligned systems have already caused, it is easier to mentally frame their potential impacts.
                </p>
            </>
        }
        thoughts={
            <>
                While this book concentrates on similar themes to Nick Bostrom's <i>Superintelligence</i>, some of the
                most impactful ideas that this book presents involve much less existential, albeit still harmful,
                examples of misalignment. Much of its length is devoted to addressing the ethical implications of
                implementing machine learning algorithms without proper planning. For example, he cites how AI criminal
                risk assessment / recidivism prediction tools, like <i>COMPAS</i>, often exhibit biases toward minority
                groups. One of the most interesting insights along this vein was on the fact that ML algorithms can
                accidentally infer data that was held-out from training (for example, an 'unbiased' algorithm can
                accidentally condition itself on someone's race or gender, despite only having names or neighborhoods in
                its dataset).
                <p>
                    Christian's chapters on reward systems and curiosity also helped to cement my understanding of the
                    role these concepts play in learning, both natural and artificial. A common theme with this book was
                    how well its concepts complemented my more formal education.
                </p>
            </>
        }
        thumbnail={"/media/image/the-alignment-problem.jpg"}
        anchor={"alignment-problem"}
    />
);
