import React, { createContext } from "react";

import Link from "next/link";

import { BookTile } from "@/components/readingList/BookTile";
import { FootNote, FootRef } from "@/components/widgets/FootNote";

const footCtx = createContext(null);

export default (
    <BookTile
        title={"Human Compatible: Artificial Intelligence and the Problem of Control"}
        author={"Stuart Russell"}
        synopsis={
            <>
                <i>Human Compatible</i> concentrates on potentially the most important field in the discipline in
                artificial intelligence research: alignment and the problem of control. Within its pages, Russell argues
                that advanced artificially intelligent systems will pose a significant, existential risk to humanity.
                This risk also has a non-trivial chance of being realized in the near future. Despite uncertainty in our
                ability to actually develop superintelligence
                <FootRef idx={1} context={footCtx} />, developing an intelligence using our current techniques could be
                catastrophic. More specifically, he asserts that the single-goal optimization objectives used to train
                modern AI systems could lead to dangerous and unforeseen consequences. AI trained in this manner would
                likely not reflect the values that we intended to train into it; the failure modes for this system would
                be dangerously unpredictable. To structure his argument, Russell splits the book into three parts
                focusing on an overview of machine intelligence, realized and foreseen problems with intelligent
                machines, and potential solutions for the problem of control, respectively.
                <p>
                    While our biggest threats lie within superintelligence that we cannot control, Russell still finds
                    it valuable to consider potential misuses of AI while it is still unintelligent enough for us to
                    control it. With the attention to detail and parallelism found in most definitions of advanced AI,
                    these systems would make a secret police fource of unrivaled effectiveness. Systems that never tire
                    or miss a subtle detail could be used for proliferous surveillance of humans. Even rudimentary
                    systems of monitoring can be used as effective information sources for blackmail campaigns. As the
                    book points out, these have been in effect since 2016. Russell also touches on <i>deepfakes</i>,
                    convincing pictures or videos of someone in a situation that the never really were in. This was
                    becoming an issue back in 2020; the technology has improved dramatically since then. Efforts to
                    curtail the spread of their surveillance and misinformation is active in platforms such as Google of
                    Facebook, but effectiveness was limited and remains so today.
                </p>
                <p>
                    The text also discusses autonomous weapons systems (AWS)
                    <FootRef idx={2} context={footCtx} />. Aside from surface level concerns of a future intelligent
                    agent using these weapons against humans intentionally, a more mundane concern lies at our current
                    level of technology. AI systems do not always behave as you train them, their actions can appear to
                    optimize for the desired objective during training, while they are really optimizing for something
                    else
                    <FootRef idx={3} context={footCtx} />. This can quickly become obvious in practice if not caught.
                </p>
                <p>
                    Advanced autonomous systems can not only replace human soldiers, but also wider sections of the job
                    market. For the entire history of automation, more mechanized jobs have been reliably followed by
                    periods of new job creation. Farm laborers were moved to factories when harvesting machines became
                    more efficient and then to office jobs as simple robots proliferated through factory floors. Like
                    with factory jobs, limited automation enables an industry to flourish, but the need for workers
                    falls once again as automation increases. Although, that happens when machines can reliably,{" "}
                    <i>and generally</i>, automate mental labor in addition to physical labor? Russell gives the example
                    of house painters to make this picture more clear. In a world where the only paintbrushes were 0.1
                    millimeters wide, no house painters would be employed. It would simply take too long for any
                    appreciable work to get done. As brushes grow to a millimeter in thickness, small guilds of artisan
                    painters form to painstakingly create delicate murals over many dozens of hours. At ten millimeters,
                    painting no longer requires specialized skills and extensive training, people can now paint homes
                    with reasonable degrees of efficiency; many new housepainters find jobs at this stage as the field
                    begins to mature. As brushes give way to rollers and spray guns, much fewer house painters are
                    needed as each one can perform the same labor as many and the number of houses needing painting does
                    not expand proportionally. When semi-autonomous machines can paint houses, the number of workers
                    drops further as one person can oversee the painting of an entire house very quickly. Russell
                    further explores this trend from the perspective of white collar workers as well, with similar
                    predicted (and observed!) results. Finally, he discusses the potential consequences of making
                    automata indistinguishable from humans in a physical sense, in addition to in an intellectual sense.
                    In short, the integration of humanoid robots into distinctly human jobs (healthcare and law, for
                    example), would have severe negative affects on human socialization and dignity.
                </p>
                <p>
                    There are several problems that arise when AI becomes more generally intelligent and capable than
                    humans. <i>The Gorilla Problem</i> illustrates the future dynamic between humans and AI systems. Ten
                    million years ago, ancient hominins branches off from gorillas and other great apes. Early on, our
                    ancestors were few and the apes many. A <i>directed</i> effort could have easily eliminated our
                    lineage. As we evolved, we became more generally intelligent and capable than our relatives.
                    Millions of years later, it is our species trying to save gorillas from <i>accidental</i> extinction
                    at our own hand than the other way around. If we create advanced AI that is difficult to control, we
                    will be in the position of the gorillas with no reason to think that the machines will pay much mind
                    to our own <i>accidental</i> extinction
                    <FootRef idx={4} context={footCtx} />. <i>The King Midas Problem</i> threatens that advanced AI is
                    likely to give us exactly what we ask for, <i>us exactly what we ask for</i>. Just as King Midas'
                    wish turned his food and drink to inedible gold, so could our own wishes lead to unforeseen
                    consequences. As Nick Bostrom discusses at length in <i>Superintelligence</i>, machines designed
                    without sufficient planning are likely to suffer from <i>value alignment</i>. Their
                    values/goals/objectives may be exactly what we ask for, but not exactly what we mean. In addition to
                    the many, many examples of how this can pose an existential risk, a more grounded example is often
                    helpful. Click-through and engagement algorithms are currently a staple of most internet advertising
                    services. This is chiefly used in search engines and social media. These algorithms optimize for a
                    single goal: keep users engaging with the platform as long as possible so they may be shown more and
                    better targeted advertisements. This works well in theory (better content should attract more
                    viewers), but in reality, this often drives misinformation or hateful content
                    <FootRef idx={5} context={footCtx} />. <i>Unaligned Instrumental Goals</i> pose another problem.
                    Even if the terminal, or final, goals of a machine are somehow aligned with our intentions, that
                    does not guarantee that instrumental or intermediate goals will be. You can't achieve your terminal
                    goals if you wre dead, so self-preservation becomes a strong instrumental motivator, even of not
                    explicitly trained into a model
                    <FootRef idx={6} context={footCtx} />. Compounding these issues is that of an{" "}
                    <i>Intelligence Explosion</i>. It would potentially be easier to solve the above problems if we
                    could ensure that the intelligence of artificial minds always grew smoothly and linearly with time.
                    We could carefully craft machines up until just before they become too clever for us to reliably
                    control without having to face the full reality of an existential risk. This is not likely to be the
                    case. With or without human encouragement, the increase of one's intelligence is an instrumental
                    goal applicable to nearly every unbounded or underspecified task. Systems <i>less</i> intelligent
                    than we are could, overtly or covertly, begin to slightly increase their own intelligence. The
                    second, smarter system would be motivated to do the same. This process occurs recursively until
                    further increases in capability are subject to sufficiently diminishing returns. The values of a
                    system before this exponential curve are not guaranteed to remain the same after logistic terms
                    begin to dominate and the process slows.
                </p>
                <p>
                    Like many threats that largely live in the realm of theory (at least in the existential sense),
                    there is still significant debate among researchers in the field on how to solve the problem of
                    control. Unfortunately, there is still discourse on whether this is even a problem at all. Russell
                    points out examples of AI researchers denying that the problem of control exists or is as serious as
                    people make it out to be. Superintelligent AI could be framed as impossible, there is no need to
                    worry about something that cannot happen. It could be in the far off future, why dedicate resources
                    to something that <i>may</i> not happen for decades? A strong appeal to authority can also be used
                    to extinguish constructive debate; why should we worry if a handful of accomplished scientists are
                    not personally worried
                    <FootRef idx={7} context={footCtx} />? Researchers in the field of AI may also deflect sound
                    proposals for alignment strategies or preparation, while acknowledging their technical validity.
                    Likely the most straightforward warnings given by AI safety researchers is to simply slow down
                    research. Many scientists may agree with this in principle, but their employment likely hinges on
                    doing the precise opposite of this. Another common argument Russel observes disengages with the
                    topic of AI safety by introducing a new topic that should be attended to instead. Oftentimes,
                    proposals advocating for decelerating AI research are met with criticism for not considering the
                    potential benefits of AI. The key insight here is as follows:{" "}
                    <i style={{ display: "block", margin: "10px 0px", textAlign: "center" }}>
                        The potential benefits of advanced AI are incalculable, however, if we fail to carefully align
                        them, we will not see those benefits; we shall instead incur incalculable harm.
                    </i>
                    The text also addresses some common arguments against the thread of superintelligent AI. Shutting
                    the systems down, boxing them, collaborating with them, or not training them on strict human goals
                    are all potentially "easy" solutions to the problem of control. Simple solutions like these
                    fundamentally misunderstand the dynamic between ourselves an a superintelligent agent: it can, and
                    will out-think us in every scenario. It could prevent itself from being shut down through
                    intimidation or force, it could convince (just one of) us to let it out of its box, it would (after
                    a certain point) have no need to collaborate with us, and deciding the "right" goals, if any, is a
                    highly non-trivial problem. Each of these points, and an AI's motivation for insubordination, are
                    discussed more thoroughly in my analysis of{" "}
                    <Link href={"https://matthewpisano.com/readingList#superintelligence"}>
                        <i>Superintelligence</i>
                    </Link>
                    .
                </p>
                <p>
                    After highlighting these dangers of under-controlled AI and arguments against alignment measures,
                    Russell offers some practical solutions that he thinks will make future AI systems more manageable
                    to control. One of the biggest difficulties of working with modern AI is that it uses training to
                    empirically predict behavior instead of formal methods that guarantee correctness. The ideal
                    solution likely will contain a combination of both
                    <FootRef idx={8} context={footCtx} />, but our current techniques heavily rely on the former and
                    rarely employ the latter (for complex systems). Russell has noticed this as well and introduces the
                    concept of provably beneficial AI. The text suggests that a more formal process for machine learning
                    is employed. Soe some set of machines, some algorithms, and some environments, it can be proven that
                    the probability of something unexpected happening is acceptably low. His suggestion for such a
                    predictable learning process is one that learns what to learn, based on observations. To make this
                    sentiment more concrete, he introduces his concept of <i>inverse reinforcement learning</i> (IRL).
                    Whereas a normal reinforcement learning (RL) system learns to optimize for a predetermined reward
                    function, an IRL system will first have to learn the reward function itself based on observing an
                    idealized entity. When generalizing this framework to more complex tasks, we run into a problem,
                    however. A human teaching a robot a task will not act in the same way as if they were simply doing
                    the task themselves. As we perform some task, we are not always quietly muttering step-by-step
                    instructions to ourselves as if we were teaching someone else; we simply do the task in a manner
                    that would not be as helpful to an outside observer. Instead of pure IRL, we would like artificial
                    observers to learn human preferences implicitly, rather than directly copying observed behaviors. To
                    aid in this goal, Russell introduces <i>assistance games</i>. In an assistance game, a human is
                    paired with a robot. As the human interacts with the automata, they make constant observations and
                    learn to anticipate their behavior, not my acting as the human, but acting as the human wanted them
                    to act (shown through the human's actions). By always assigning some reward to deferring to human
                    action (and assigning a degree of uncertainty to its own actions), autonomous systems may be
                    significantly less resistant to human interference with their initial plans.
                </p>
                <p>
                    Another important component of provably beneficial AI is its interpretation of goals. Traditional
                    thought in this area models machines that pursue given goals with single-minded determination. Of
                    course, this is almost never a good idea. While it is not a completely novel idea, Russell
                    elaborates on the notion of costs associated with a goal. He gives the example of fetching a cup of
                    coffee. Instead of fetching one <i>at all costs</i> an agent should infer that reasonable
                    constraints are applied. The coffee should be a reasonable price, arrive within a reasonable speed,
                    and no harm should befall any people or property along the way. This is difficult to formalize, but
                    important to mention.
                </p>
                <p>
                    An impactful concept that the text also introduces is that of <i>wireheading</i>. It is important to
                    remember that an agent (artificial or biological) trained by reward for some goal is not trained for
                    that goal. It is only trained for the <i>reward</i> associated with that goal. If this reward can be
                    obtained from elsewhere with fewer costs, a rational agent would prefer the shortcut. Rats with
                    artificially stimulated reward systems will act on that artificial stimulation repeatedly,
                    neglecting other essential activities. This also occurs naturally. Humans evolved a sensation of
                    reward after eating foods with a high sugar content, essential for maintaining energy reserves.
                    Overly-sweet foods come with many health risks, however, so we invented artificial sweeteners like
                    sucralose that provide no energy. Note that the goal of eating artificially sweet foods has nothing
                    to do with the "intended" goal, but it satisfies the goal of reward all the same.
                </p>
                <p>
                    Even if we could design an AI system that could reliably learn a human's goals and act out their
                    intentions, there are still complications. Humans are many and often have conflicting, even
                    malicious, goals; if a machine is supposed to learn from humanity, which of those goals should it
                    learn? A common misconception is that learned robots will need to form one coherent value system,
                    which can cause issues for different cultures of belief systems. Russell argues that this is not the
                    case, however. A successful robot would only need to learn to <i>predict</i> what individuals prefer
                    in isolation. Another complication is that there many humans, with directly conflicting preferences.
                    There are several solutions to this problem. Robots could simply ignore the preferences of everyone
                    except for their owner. This is straightforward, but many support the idea of automation as a
                    collective good, rather than toys exclusively for those that control them.
                </p>
                <p>
                    A more workable approach is to make utilitarian robots. This sounds ideal, but it quickly evolves
                    into philosophical conjecture without a unified strategy. For example <i>utility monsters</i> are
                    people who theoretically experience pleasure significantly more than others, and thus a
                    utility-maximizing robot would allocate disproportional resources to these people
                    <FootRef idx={9} context={footCtx} />. Additionally, how much weight would a utility-maximizing
                    robot assign to its owner over others. At either end of this scale, you either get selfish robots
                    all over again or robots so altruistic that there is no personal advantage to buying one at all.
                    Finding a balance that makes this idea practically workable will be difficult.
                </p>
                <p>
                    Another complication is that humans do not behave in isolation. In addition to our own happiness, we
                    also derive happiness from each others benefit or detriment. Humans can have altruistic tendencies,
                    where they enjoy the happiness of others for its own sake, independent of direct improvements to
                    their condition. There are also <i>negative</i> altruists that derive happiness from the lowered
                    standards of living of others. Negative altruists need not be pure evil either; anyone who has ever
                    felt envy or hoped for misfortune to befall someone else has experienced negative altruism
                    <FootRef idx={10} context={footCtx} />. Humans are also prone to emotional outbursts, irrationality,
                    and are often myopic. It would important for a robot to recognize that these altered states do not
                    represent a change in our goals, but are rather consequences of our limitations. We may not see a
                    clear avenue to our goals and may act erratically from the perspective of a rational agent. It is
                    important for robots to be able to model and predict these states without directly experiencing them
                    internally.
                </p>
            </>
        }
        thoughts={
            <>
                This book was recommended to me by Selmer Bringsjord of RPI after I gave one of my first presentations
                on my <Link href={"https://matthewpisano.com/research/bergeron"}>Master's thesis research</Link>.
                Reading this book gave theoretical foundations to my ill-defined concerns about alignment at the time.
                Through this work, Russel's thoughts helped to influence both this and my future research.
                <p>
                    In this book, Russell both introduces technical topics to the reader and challenges some
                    conventional thinking about artificial intelligence in a concrete and understandable manner. He
                    covers a wide variety of topics, ranging from how AI may (and should) behave when interacting with
                    the real world, to common misconceptions and criticisms of alignment research, and more concrete
                    learning techniques.
                </p>
                <p>
                    I find Russell's thoughts on the risks associated with superintelligent AI to be particularly lucid.
                    It is valuable that sections of conjecture and interleaved with real-world and concrete examples.
                    His thoughts on the disadvantages of goal-directed systems would not be as compelling if it were not
                    paired with a discussion of modern click-through algorithms. Since this book came out in 2019, the
                    societal problems associated with these algorithms have only grown in their potency. This is further
                    exacerbated by the flood of information from generative AI systems.
                </p>
                <p>
                    The later chapters of this book introduce many reinforcement learning techniques that are becoming
                    increasingly important in the field. Inverse reinforcement learning is a particularly interesting
                    concept. Instead of traditional RL algorithms that operate off of a human-crafted policy, these IRL
                    systems craft their own policies through observation. In the book, Russell uses the concrete example
                    of model helicopters imitating stunt pilots through the use of an IRL algorithm. These models are
                    able to replicate complex tricks, simply by inferring what their examples are optimizing for. It is
                    always enlightening to hear how some machine learning technique was created, directly from its
                    creator. I find this to be especially true for biologically motivated techniques. Taking direct
                    inspiration from nature both saves time and ensures that the given technique has some precedent for
                    success (at minimum in biologically-adjacent use cases).
                </p>
                <p>
                    An important idea that Russell introduces at the end of the book is that of human enfeeblement. Here
                    he asks "What if we succeed"? What if we can create truly, provably beneficial AI systems? How would
                    we behave and how would we interact with these systems? Should we prefer a reality in where there is
                    no war, hunger, or disease, but humans are no longer in control? Maintaining our autonomy from a
                    benevolent AI seems like an obviously good idea; we would be able to choose our own destiny. But
                    should we? This requires serious thought. By definition humans would be worse (perhaps <i>much</i>{" "}
                    worse) than a superintelligent AI system at our own governance. Tribalism inevitably develops in any
                    human-controlled institution along with competition and inequality. On their own, these are
                    generally seen as negative, but is some amount of harm or risk preferable to none at all? In my
                    opinion, some amount of risk and harm are beneficial to the human condition, lest we resign
                    ourselves to Matrix-esque pleasure simulations. That should likely be the limit, though. Relegating
                    superintelligent AI to simply <i>laissez-faire</i> caretakers that only ensure that we do not
                    destroy ourselves and leaving humans in charge will be suboptimal. This is putting it lightly. We
                    can use tens of thousands of years of human history as evidence that leaving humans in primary
                    positions of power is a generally bad idea
                    <FootRef idx={11} context={footCtx} />.
                </p>
            </>
        }
        footnotes={
            <>
                <FootNote idx={1} context={footCtx}>
                    At the time of writing and to a somewhat lesser extent today.
                </FootNote>
                <FootNote idx={2} context={footCtx}>
                    Unrelated to Amazon Web Services (AWS), although services for the former could certainly be provided
                    through the latter.
                </FootNote>
                <FootNote idx={3} context={footCtx}>
                    <i>Artificial Intelligence as a Positive and Negative Factor in Global Risk</i> (Yudkowsky, 2008),
                    section 7.2 "An Example of Technical Failure".
                </FootNote>
                <FootNote idx={4} context={footCtx}>
                    We like to think of ourselves as operating outside of nature, but habitat destruction can effect us
                    too. AI systems do not need malice encoded into their goals to tile the planet's surface in solar
                    panels or use boiling oceans as a form of ablative thermal regulation. Either way, Earth would
                    quickly be uncomfortable to live in.
                </FootNote>
                <FootNote idx={5} context={footCtx}>
                    I personally find this to be one of the more interesting quirks of human behavior. Information that
                    upsets or scares us spreads much more quickly and with more passion and information that is
                    positive. This is most apparent in news feeds or social media posts and has been documented at
                    length in literature. Why are we (myself included, unfortunately) so driven by information that
                    makes us hate ourselves and each other?
                </FootNote>
                <FootNote idx={6} context={footCtx}>
                    <i>Superintelligence</i> expands upon this point in much greater detail. This is a common trope in
                    fiction as well. <i>2001</i>'s HAL, Asimov's third law of robotics, and Philip K. Dick's Androids
                    all serve as good examples of when this instrumental goal conflicts with human intentions. It is
                    difficult to say whether the fact that this trope has strong theoretical backing is satisfying or
                    terrifying.
                </FootNote>
                <FootNote idx={7} context={footCtx}>
                    In my opinion, this is and laziest and potentially most dangerous form of argument. This strategy
                    refuses to even engage with the concept of a debate. By deferring reasoning off to a perceived
                    authority, any and all arguments can be absorbed by that person's eminence in their field.{" "}
                    <i>Ethos</i> is one of Aristotle's core three modes of persuasion for a good reason; people are
                    often eager to take mental shortcuts and offload complex reasoning to someone that has already
                    completed said reasoning (and has come to an agreeable conclusion). When considering AI alignment,
                    it is important to remember that this is an <i>unsolved problem</i>. Nobody knows exactly how to
                    solve, or even approach, this issue even experts in the field of artificial intelligence. Given that
                    no solution is yet known, it is imperative to consider the reasoning of a strategy on its own
                    merits, falling back to expert opinion only as a last resort.
                </FootNote>
                <FootNote idx={8} context={footCtx}>
                    My opinion.
                </FootNote>
                <FootNote idx={9} context={footCtx}>
                    An idea related to this single-minded optimization (wait, haven't we already argued against this?)
                    is the <i>Repugnant Conclusion</i>. If a group of people have a good quality of life based on some
                    limited supply of resources, it would reason that a much larger group with a slightly lower quality
                    of life would be better if resources can be allocated more efficiently. This reasoning can be
                    applied iteratively until there are innumerable people living barely above subsistence level.
                </FootNote>
                <FootNote idx={10} context={footCtx}>
                    Like Sapolsky discusses in <i>Behave</i>, this is not exclusively a bad thing, we evolved these
                    feelings for a reason: to ensure fairness within a group. When an individual is extremely wealthy in
                    a resource constrained environment, it is reasonable to hope that they decrease their own living
                    standard in exchange for raising that of everyone else. Of course, it is important to remember that
                    many instances of envy do indeed produce net-negative effects.
                </FootNote>
                <FootNote idx={11} context={footCtx}>
                    Again, this is all conditional on the predicate that the AI system is probably beneficial in a "do
                    what I mean, not what I say" manner. The worst human atrocities in the past are better than even the
                    "benign" case of an AI that is indifferent to our survival. We, as a species, can survive (and
                    ideally learn from) genocidal maniacs, but we cannot recover from extinction.
                </FootNote>
            </>
        }
        thumbnail={"/media/image/human-compatible.jpg"}
        anchor={"human-compatible"}
        footnoteContext={footCtx}
    />
);
