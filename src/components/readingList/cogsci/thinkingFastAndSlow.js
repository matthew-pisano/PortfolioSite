import React from "react";

import { BookTile } from "@/components/readingList/BookTile";

export default (
    <BookTile
        title={"Thinking Fast and Slow"}
        author={"Daniel Kahneman"}
        synopsis={
            <>
                <i>Thinking Fast and Slow</i> serves as a compendium of the author's knowledge on both human psychology
                and economic theory, particularly on the intersection between the two. The core idea of the book is
                that, in contrast to traditional economic theory where humans serve as simple, rational agents, the
                behavior of real humans is more complex and nuanced than originally thought. This idea is expanded upon
                through three more targeted concepts: the two systems theory of cognition, the difference between real
                humans and idealized <i>Econs</i>, and how humans behave differently when experiencing a stimulus and
                remembering that same stimulus.
                <p>
                    Traditionally, people tend to view their thought process as a monolith. A uniform process of careful
                    deliberation and informed decision making. Through his experiments, however, Kahneman noticed that
                    this is only half true, if that. As opposed to that careful and methodical process that we envision,
                    most of our thinking occurs within quick bursts that make thorough use of heuristics and learned
                    biases; this is <i>System 1</i>. It is able to make decisions quickly and with considerable
                    accuracy, but can easily be confounded by unfamiliar situations or problems that require more
                    thorough analysis. These harder problems are passed on to <i>System 2</i>, although only as a last
                    resort. These cognitive processes are slower and less prone to error, but are much more resource
                    intensive; therefore, our brains often accept the cheap and fast verdicts of System 1, unless it
                    determines that a call to System 2 is absolutely necessary.
                </p>
                <p>
                    When students first learn economic theory, they are often taught that, within an economic context,
                    humans act as rational agents that are aware of their precise goals and always take informed actions
                    to further their goals. Although these agents are useful for modeling economic decisions, they are
                    only an approximation of actual human behavior. Within the book, these idealized agents are referred
                    to as <i>Econs</i>. In contrast, human decision making, while still goal oriented, may employ
                    heuristics to obtain quick, but inaccurate answers, rely on biases, or be heavily influenced by how
                    a choice is presented. Idealized Econs have no such shortcomings.
                </p>
                <p>
                    During the closing chapters of the book, the author highlights the difference between the actions of
                    the <i>Experiencing Self</i> and the <i>Remembering Self</i>. The Experiencing Self describes a
                    person in the midst of a situation while the Remembering Self describes that same person after some
                    event, working off of a <i>post hoc</i> interpretation. Kahneman highlights several important
                    examples of a person's <i>post hoc</i> decisions acting against the best interests of a past or
                    future experiencing self.
                </p>
            </>
        }
        thoughts={
            <>
                While all of the concepts presented within <i>Thinking Fast and Slow</i> have far-reaching influences on
                economics, cognitive science, and psychology, I find his first set of ideas the most interesting.
                Namely, his distinction between <i>System 1</i> and <i>System 2</i> thinking. This is primarily because
                of its potential implications on my own field of study, artificial intelligence. Currently, the most
                successful attempts at creating a <i>general</i> artificially intelligent agent have, by and large, used
                a monolithic architecture where the same fundamental structure or algorithm serves as the basis for an
                entire model.
                <p>
                    While this has thus far been impressively successful, this approach has yet to produce something
                    nearing human-level performance in the majority of domains, especially for problem solving and slow,
                    methodical thinking. Current approaches appear to closely mirror a <i>System 1</i> process,
                    providing quick answers that heavily rely on heuristics and learned biases. Additionally, while many
                    modern models can be coerced into <i>System 2-esque</i> reasoning, it does not come as a natural
                    consequence of the architecture and still often falls short when the problem domain is significantly
                    out of distribution or scope from the original training data. To create a system that can truly be
                    classified as generally intelligent in the same way we consider ourselves, Kahneman's ideas may
                    suggest that a different approach is needed in conjunction with modern strategies.
                </p>
            </>
        }
        thumbnail={"/media/image/thinking-fast-and-slow.jpg"}
        anchor={"thinking-fast-slow"}
    />
);
