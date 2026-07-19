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
                    "computing devices" but are not themselves Turing complete.
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
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
