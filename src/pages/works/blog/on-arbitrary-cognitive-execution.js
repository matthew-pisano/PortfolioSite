import React from "react";

import Link from "next/link";

import { BlogSection } from "@/components/widgets/BlogSection";
import CodeBlock from "@/components/widgets/CodeBlock";
import { FootnoteProvider, Footnote, FootnoteList } from "@/components/widgets/FootNote";
import BlogWrapper, { BlogImage, BlogInfo } from "@/components/wrappers/BlogWrapper";
import { genPageTitle } from "@/lib/util/utils";

const blogInfo = new BlogInfo(
    "On Arbitrary Cognitive Execution",
    "An inquiry into the exploitation of cognitive computation",
    new Date(2026, 6, 7),
    "arbitraryCognition",
    new Date(2026, 6, 13)
);

export default function ArbitraryCognition() {
    return (
        <BlogWrapper
            pageName={genPageTitle(__filename)}
            title={blogInfo.title}
            subtitle={blogInfo.subtitle}
            pubDate={blogInfo.pubDate}
            modDate={blogInfo.modDate}>
            <FootnoteProvider label={blogInfo.anchor}>
                <BlogSection>Introduction</BlogSection>
                <p>
                    You have just finished reading this sentence. This much is abundantly clear, even trivially so. But,
                    how can you be so sure? Assuming you accept the premise of a purely physical reality, the answer is
                    obvious: over the course of about three seconds, your eyes steadily tracked the pixels that appeared
                    on your screen, all while your retinas reacted to the incident photons produced by your device. Your
                    optic nerves then sent innumerable signals off to your visual cortex for processing with those new
                    signals then traversing the approximately 6.5 inches between their origin in the rear of your brain
                    to your prefrontal cortex. After this sequence of events, "you", your conscious self, registered the
                    seven words contained within the first sentence of this paragraph
                    <Footnote>
                        This is, of course, a gross oversimplification. Visual signals, written words especially, do not
                        monotonically flow from back to front. For example, this information may have taken a slight
                        ventral detour to your temporal lobe and its centers for language comprehension and memory.
                    </Footnote>
                    . Within the few hundred milliseconds of latency between your optic nerve generating signals and
                    your awareness of a word, millions of neurons reacted directly to these visual signals and millions
                    more reacted to those reactions in a cascade across your cortex. "You" are not aware of each one of
                    these interactions, of course, only the last handful that directly interacted with the conscious
                    portion of your brain
                    <Footnote>
                        This clear-cut dichotomy between "you" and your brain is a lie, but we will be addressing that
                        later.
                    </Footnote>
                    . How can you be sure that these final interactions that signaled to you the experience of reading a
                    sentence, were actually caused by reading that sentence? If some other stimuli induced this
                    particular <i>qualia</i> of reading a seven word long sentence with no other side-effects, it would
                    be indistinguishable from the genuine article from the perspective of your subjective self. If you
                    can only observe the last domino in a long chain and you witness it fall, how can you be sure that
                    the first domino to fall was really at the beginning of the chain and not an intermediate one?
                </p>
                <p>
                    In late 2017, researchers at Google were experimenting with adversarial attacks to their VGG16 image
                    recognition model
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1712.09665"}>Adversarial Patch (Brown et al. 2018)</Link>.
                    </Footnote>
                    . At the time, similar research into adversarial attacks on vision models were popular, but mainly
                    focused on training-tme data poisoning
                    <Footnote>
                        For example,{" "}
                        <Link href={"https://arxiv.org/pdf/1712.05526"}>
                            Targeted Backdoor Attacks on Deep Learning Systems Using Data Poisoning (Chen et al. 2017)
                        </Link>
                        .
                    </Footnote>
                    . For their attack on VGG16, the researchers took a different approach. Leaving the model
                    unmodified, their goal was to design an exploit which would allow them arbitrary control over the
                    model's predictions. For their experiment, the authors reverse engineered image patches, overlays
                    which could be placed into any input image, that would maximize the model's likelihood of predicting
                    an arbitrary label, regardless of the original image. The result of this reverse engineering is the
                    following patch:
                </p>
                <BlogImage src={"/media/image/pages/blog/on-arbitrary-cognitive-execution/toaster.png"}>
                    An adversarial image patch from Brown et al.
                </BlogImage>
                <p>
                    When this patch was inserted into any image (for instance, a banana), instead of classifying the
                    overall image correctly, the model would instead predict "toaster", regardless. To the attacked
                    VGG16 model, this image patch was more "toaster" than toaster, <i>more real</i> than reality.
                </p>
                <p>
                    What is actually happening here? The model weights were frozen for this exercise, so the model
                    itself was not corrupted; on non-adversarial images, it functioned normally as well. Invariant of
                    any particular image, data still flowed from input image to output classification. The model's
                    neurons still manipulated incoming signals a fully expected manner. This particular image patch,
                    however, hijacked the normal pattern of activations to generate an output that does not logically
                    follow from the input. From the model's perspective, it experienced the <i>qualia</i> of sensing a
                    toaster, but this internal experience was not induced by the genuine article. Each step in the long
                    chain of activations behaved approximately correctly, but through exploiting some latent pattern of
                    these activations, an illogical output was produced. The first domino to fall was not the one at the
                    beginning.
                </p>
                <p>
                    What makes this particular attack notable with respect to others such as training data poisoning or
                    adversarial fine-tuning? Both can achieve the same affect of making the model believe that a banana
                    is a toaster. This attack, however, does not rely on modifying the model's behavior. Instead, an
                    erroneous output is induced by a malicious input alone, leaving the underlying model unaffected.
                </p>
                <BlogSection level={2}>Problems and Proxies</BlogSection>
                <p>
                    This manner of attack is a special case of a much broader class of attack on computer systems. This
                    is generally referred to as <i>Arbitrary Code execution</i>: an attack which manipulates the
                    expected behavior of a computing system into producing an attacker-controlled result. This level of
                    attacker control is usually achieved through the usage of finely crafted inputs to a system, instead
                    of through direct code manipulation.
                </p>
                <p>
                    The existence of this class of exploit relies on a feature common to any sort of computing machine.
                    These systems are "dumb", in the sense that they follows instructions to the letter, rather than
                    following the spirit. Programmers are well-aware of this <i>XY problem</i> when creating software.
                    Suppose the goal of a program is to achieve objective Y. There is rarely a single instruction for
                    exactly Y. Instead, the programmer must write a series of X instructions that can achieve Y
                    indirectly. For example, suppose a programmer would like for a program that is currently executing a
                    procedure to transfer execution to another procedure (Y). The CPU does not know what a "procedure"
                    is, much less how to "switch" to it. These are human-centric concepts, rather than computer-centric.
                    To achieve the goal of Y, the programmer must put their ill-defined goals into precise instructions.
                    They would store the address at which procedure Y sits into a pointer and pass pointed-to address to
                    a jump instruction (X). Once the program is assembled, the jump instruction is statically defined,
                    but the input to that instruction is only defined at runtime; there is no guarantee that the address
                    present at runtime will match the intended memory address of Y. The instruction will jump execution
                    to whichever address is supplied. If a malicious attacker were able to modify the pointer before the
                    jump, then the attacker would be in control of the next executed procedure instead. For the purposes
                    of our exploration here, note that the target procedure was never moved and the jump instruction's
                    logic was never compromised. The machine was following instructions to the letter instead of to the
                    programmer's spirit.
                </p>
                <p>
                    Returning to our image recognition example, researchers used the tuned 138 million parameters of
                    VGGNET16 (X)
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1409.1556"}>
                            Very Deep Convolutional Networks for Large-Scale Image Recognition (Simonyan and Zisserman
                            2014)
                        </Link>
                        .
                    </Footnote>{" "}
                    as a proxy for choosing the correct label for an image (Y). These is no guarantee that the trained
                    state of the parameters would always yield "banana" when presented with a picture of a banana, they
                    just happen to do so for an acceptable portion of the evaluation samples. The image patch exploits
                    the state of the model's parameters to yield "toaster" instead. Note that the parameters were never
                    changed, nor was the computer's ability to successfully evaluate the input conditional on those
                    parameters. In the exact same manner as a more traditional assembly example, a working program was
                    induced into a unexpected state without modification.
                </p>
                <p>
                    Arbitrary code execution is commonly thought of as only present in traditional, register-based
                    computing machines, like a CPU running machine code. The first example given above is a fairly
                    standard example. However, a generalization to other computing systems more broadly is natural. At
                    the heart of an "arbitrary code execution" exploit is the coercion of some program to execute in a
                    manner unexpected by the programmer, but which still follows from the expected functioning of the
                    underlying system. In the case of a traditional attack, this underlying system is the hardware of a
                    register machine, but it could just as easily be the execution environment of a machine learning
                    model or any other computational substrate.
                </p>
                <BlogSection level={2}>Cognition as Computation</BlogSection>
                <p>
                    One such computational substrate could potentially be the human brain. However, to further pursue
                    this line of inquiry, we must make an assumption: that the human brain is, at least to some extent,
                    a computing device. We will touch on how valid or invalid this assumption may be later but, for now,
                    we will accept this premise for the sake of exploration.
                </p>
                <p>
                    What does it mean for a system to be a computing device? I have previously approached this from the
                    high-level angle of simulating Turing machines in my work{" "}
                    <Link href={"https://matthewpisano.com/works/blog/on-general-transformers"}>
                        On Generally Intelligent Transformers
                    </Link>
                    , but we can arrive at a more precisely scoped definition by asking which behaviors we expect a
                    computing device to express.
                </p>
                <p>
                    Chiefly, we could like for our computing systems to be useful. To extract useful computations, we
                    need a system with a well-defined interface for input and output. A system which could take input at
                    any point and give output at any point is less of a device and more of an exposition of raw physical
                    laws. The restriction of manner and format of input and output greatly simplifies the design process
                    and eliminates ambiguity. We also our computing device to transform patterns of input information
                    into different patterns of output information. A system which always echoes its input as output does
                    not add any information of its own and is therefore not very useful. This manipulation must be
                    predictable, though not necessarily deterministic. The use case of a computing device is to add
                    meaningful
                    <Footnote>
                        <i>Meaning</i> and <i>information</i> may seem like orthogonal concepts from an information
                        theory perspective, but when speaking of computing devices in this manner, we are speaking
                        relative to what we humans generally consider to be useful and interesting. From the perspective
                        of information, a random number generator is maximally informative, yet its output is generally
                        uninteresting to a human. We expect our computing devices to manipulate the information in our
                        input without completely removing it or fully maximizing it. Therefore, this definition of a
                        computing device will contain some human ambiguities and imprecision.
                    </Footnote>{" "}
                    information to some input as output. If the output does not follow from the input in a manner
                    meaningfully related to the computing device's task, then it is not a useful computing device.
                    Furthermore, while classical computers are designed to be deterministic, others such as quantum
                    computers are not. However, both are designed to be predictable (to some extent), conditional on an
                    input. We also expect our computing devices to be capable of representing a wide variety of tasks,
                    while being selectively tunable to particular tasks as needed. Many physical systems fulfill the
                    former criteria well: they can manipulate inputs into outputs in a controlled and predictable
                    manner. For example, the physical system of a cooling cup of tea is useful for simulating the
                    physical processes present in ... a cooling cup of tea. However, this system can only represent one
                    class of configurations: itself. A cooling cup of tea cannot, for instance, be tuned into modeling a
                    cooling cup of coffee without being irreversibly turned into that system. In contrast, what we
                    commonly consider to be computing devices can simulate both, a game of chess, or a webpage. While we
                    like for computing devices to be general, they do not necessarily need to be Turing complete. for
                    example, Programmable Logic Arrays and certain off-chip accelerators could be considered to be
                    "computing devices" but are not themselves Turing complete
                    <Footnote>
                        In a similar vein was the Soviet <i>Turnir</i> (Турнир) console released in 1978. Unlike
                        contemporary home consoles like the Atari 2600 or the Magnavox Odyssey which could play a
                        variety of games, the Turnir could only olay one. Unlike the Atari's general-purpose MOS 6507,
                        this console relied upon the AY-3-8500. This chip in particular was designed to play <i>PONG</i>{" "}
                        and nothing else. Even though the Turnir technically came with six built-in games, all were just
                        the same tennis game with themed overlays for hockey or squash. The Turnir is another example of
                        a device which meets our requirements for a "computing device" while lacking many of the
                        capabilities generally associated with computers more generally.
                    </Footnote>
                    .
                </p>
                <p>
                    Considering these requirements, we can put together a more precise definition of a computing device.
                    We can conceptualize a computing device as any system which takes in patterns of information as
                    input, manipulates this information in a predictable manner, dependent on a task-oriented internal
                    configuration, and outputs different patterns of information. This definition encapsulates classical
                    and quantum computers in general, along with specialized systems such as artificial or even
                    biological neural networks. Most importantly, this definition gives us a way to now only describe
                    how a system behaves normally, but also how it could be exploited to behave abnormally.
                </p>
                <BlogSection>Arbitrary Code Execution</BlogSection>
                <p>
                    Before further investigating the much more theoretical applications of arbitrary code execution, it
                    would help to better understand how it works in traditional computers. Early in the history of
                    computing, the thread of malicious actors was much less of a central focus than it is today. Before
                    the highly interconnected networks of computers that began to appear in the 1970s, computer
                    programming was much more localized. Programmers concentrated on a program's utility and engineering
                    viability over explicit security. Many programs were bespoke, built for specialized systems and
                    applications. Even the computers themselves were confined to research labs or universities. Time
                    using them was at a premium to even determined would-be hackers would have needed to officially log
                    and justify any usage of rare and expensive computer equipment. This resulted in an informal
                    professional agreement between engineers, if nobody acted maliciously, there was no reason to waste
                    valuable developer hours on securing software from other developers. Evidence of this trust-based
                    design ethos can still be felt today when interacting with offline legacy software or the 2G
                    wireless standard. This naive sense of trust began to quickly break down in the 1970s and 1980s with
                    the rise of computer time-sharing, networks, and eventually the hacker.
                </p>
                <BlogSection level={2}>A Brief History of Hacking</BlogSection>
                <p>
                    Suppose a malicious researcher in 1965 was interested in sabotaging a rival institution or academic
                    rival. Well-funded labs of the day may have access to a then state-of-the-art IBM S/360 mainframe
                    and IBM 2741 terminal (essentially just a modified and automated Selectric typewriter). The first
                    obstacle that this researcher would face is time. In 1965, time-sharing operating systems were rare;
                    this was two years before IBM would release TSS/360 for their mainframes. If a system was performing
                    calculations on someone's behalf, that was oftentimes the <i>only</i> think that system was doing.
                    Every cycle of that system was precious and needed to be effectively rationed. If someone had a job
                    to run, they needed to log exactly what the job was, how long it would take, and when it would
                    begin. For those working on large computing clusters today (especially before a large conference
                    deadline!), this may feel familiar, there are only so many GPU hours to go around so jobs must be
                    carefully scheduled. Back in 1965, is someone wanted to use a multi-million dollar machine for their
                    own malfeasance, they would have needed to make up a plausible justification and submit their false
                    proposal to system administrators. With system logs often used for low-level debugging, unauthorized
                    activity would have been even more difficult to hide from one's peers and management.
                </p>
                <p>
                    Another obstacle was connectivity. If the target of a hack was in a different institution (or even a
                    different department), there was no guarantee that the attacking machine and the attacked machine
                    would even have a direct route of communication. If a malicious actor only physically had access to
                    their own machine, remotely accessing another would have been significantly more difficult than
                    today, perhaps even impossible. While this could technically be overcome through physically vising
                    the target or through social engineering, these activities would have been difficult to conceal.
                    Even if two computers were technically connected, there was no guarantee that the other computer
                    would even be listening and not running another program. The isolated and special-purpose nature of
                    these early computers severely limited a malicious actor's ability to exploit even weakly protected
                    machines.
                </p>
                <p>
                    A final limiting factor was ironically the same force that discouraged security-focused engineering.
                    Since access to computers was a rare privilege, such access was limited to career professionals or
                    students. These people had relationships to maintain and reputations to uphold; the anonymity that
                    early hackers relied upon was simply rare in these early days of computing. Even if someone
                    technically could exploit a machine, there was a non-trivial chance that they would face
                    professional backlash and consequences. Others knew this as well. This odd manifestation of mutually
                    assured destruction kept hackers at bay and security concerns low
                    <Footnote>
                        It is important to note that this is very much a generalization. While true in aggregate, these
                        factors would not concern state-level actors or unauthorized personnel. In cases such as these,
                        traditional security could serve as a partial substitute. Conducting background checks on
                        computer users and physically securing a system could thwart or discourage most attempts at
                        exploitation.
                    </Footnote>
                    .
                </p>
                <p>
                    A common theme throughout the history of computing is that the technology advances far faster than
                    the social norms and behaviors that we humans develop in reaction to them. This is especially true
                    when software developed in the context of one culture continues to see use as the culture changes.
                    In the early 1980s, software from the early trust-based era of development was still in use, with
                    many development teams still adhering to these standards of professional courtesy. The technology,
                    however, had rapidly outpaced the culture and the old limitations that security assumptions were
                    based upon. Time-sharing operating systems were significantly more commonplace. Computer access was
                    no longer limited to elite institutions and research labs. Many ordinary students and working
                    professionals had access to standalone computers and mainframe terminals. These computers were also
                    significantly more connected. Research labs, universities, banks, airlines, and other institutions
                    were all interconnected. On the graph of connections, the existence of a route between two arbitrary
                    computers was much more likely than it was in 1965. With the accessibility of computers, old
                    assumptions of trust and professional integrity also broke down. A determined college student or
                    disgruntled employee could evade detection much more easily than before with potential consequences
                    being much less severe. Many well-known examples of computer viruses originated from this period:
                    Brain, Morris Worm, The LoveLetter Virus, and many others. With this historical context, we can now
                    turn to how these programs were able to hijack their target machines and how the insecure
                    programming practices of the early computer era enabled their effectiveness.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
