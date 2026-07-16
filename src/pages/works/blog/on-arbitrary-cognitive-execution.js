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
                    . Within the few hundred milliseconds of retina-to-realization latency, millions of neurons reacted
                    to the main visual signals and millions more reacted to those reactions in a cascade across your
                    cortex. "You" are not aware of each one of these interactions, of course, only the last handful that
                    directly interacted with the conscious portion of your brain
                    <Footnote>
                        This clear-cut dichotomy between "you" and your brain is a lie, but we will be addressing that
                        later.
                    </Footnote>
                    . How can you be sure that these final interactions that signaled to you the experience of reading a
                    sentence, were actually caused by reading that sentence? If some other stimuli induced this
                    particular <i>qualia</i> of reading a seven word long sentence with no other side-effects, it would
                    be indistinguishable from the genuine article from the perspective of your subjective self.
                </p>
                <p>
                    In early 2018, researchers at Google were experimenting with adversarial attacks to their VGG16
                    image recognition model
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1712.09665"}>Adversarial Patch (Brown et al. 2018)</Link>.
                    </Footnote>
                    . The base model could recognize objects, such as bananas or toasters, with great accuracy. For
                    their attack on VGG16, the researchers reverse engineered image patches that would maximally
                    increase the model's likelihood of assigning the "toaster" label to any image that contained the
                    adversarial patch. The result of this reverse engineering is the following patch:
                </p>
                <BlogImage src={"/media/image/pages/blog/on-arbitrary-cognitive-execution/toaster.png"}>
                    An adversarial image patch from Brown et al.
                </BlogImage>
                <p>
                    When this patch was inserted into any image, instead of classifying the overall image correctly, the
                    model would instead predict "toaster", regardless of the main image. To the attacked VGG16 model,
                    this image patch was more "toaster" than toaster. This strange collection of shapes and colors was{" "}
                    <i>more real</i> than reality.
                </p>
                <p>
                    What is actually happening here? The model weights were frozen for this exercise, so the model
                    itself was not corrupted. On non-adversarial images, it functioned normally as well. Invariant of
                    any particular image, data still flowed from input image to output classification. The model's
                    neurons still manipulated incoming signals a fully expected manner. This particular image patch,
                    however, hijacked the normal pattern of activations to generate an output that does not logically
                    follow from the input. From the model's perspective, it experienced the <i>qualia</i> of sensing a
                    toaster, but that internal experience was not induced by the genuine article. Each step in the long
                    chain of activations behaved approximately correctly, but through exploiting some latent pattern of
                    these activations, an illogical output was produced.
                </p>
                <p>
                    What makes this particular attack notable with respect to others such as training data poisoning or
                    adversarial fine-tuning? Both can achieve the same affect of making the model believe that a banana
                    is a toaster. This attack, however, does not rely on modifying the model's behavior. Instead, an
                    erroneous output is induced by a malicious input alone, leaving the underlying model unaffected.
                </p>
                <BlogSection level={2}>Arbitrary Code Execution</BlogSection>
                <p>
                    This manner of attack is a special case of a much broader class of attack on computer systems. An
                    attack which manipulates the expected behavior of a system into producing an unexpected result
                    achieves arbitrary code execution on that system. In the context of a particular program, this is
                    often achieved through the usafe of finely crafted inputs to that system over direct code
                    manipulation.
                </p>
                <p>
                    Any sort of computing machine is <i>dumb</i> in the sense that it follows instructions to the
                    latter, rather than to spirit. When setting the instructions for a computer to follow, this often
                    leads of an <i>XY problem</i>, where the programmer instructs the computer to do X, when their
                    intention is to use X as a proxy for achieving Y. For example, if a programmer would like a program
                    to begin executing a procedure other than the current one (Y), they would store the address at which
                    that procedure sits into a pointer and pass pointed-to address to a jump instruction (X). Note that
                    there is no guarantee that the jump instruction will only accept the intended memory address, it
                    will jump execution to whichever address is supplied. If a malicious attack were able to modify the
                    pointer before the jump, then the attacker would be in control of the next execution instead.
                    Further note that the target procedure was never moved and the jump instruction's logic was never
                    compromised. The machine was following instructions to the letter instead of to the programmer's
                    spirit.
                </p>
                <p>
                    Returning to our image recognition example, researchers used the tuned 138 million parameters of
                    VGGNET16
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1409.1556"}>
                            Very Deep Convolutional Networks for Large-Scale Image Recognition (Simonyan and Zisserman
                            2014)
                        </Link>
                        .
                    </Footnote>{" "}
                    as a proxy for choosing the correct label for an image. These is no guarantee that the trained state
                    of the parameters would always yield "banana" when presented with a picture of a banana, they just
                    happen to do so for an acceptable portion of the evaluation samples. The image patch exploits the
                    state of the model's parameters to yield "toaster" instead. Note that the parameters were never
                    changed, nor was the computer's ability to successfully evaluate the input conditional on those
                    parameters. In the exact same manner as a more traditional example, a working program was induced
                    into a unexpected state without modification.
                </p>
                <p>
                    Arbitrary code execution is commonly thought of as only present in traditional, register-based
                    computing machines, like a CPU running machine code. The first example given here is a fairly
                    standard example. However, a generalization to other computing systems more broadly is natural. At
                    the heart of an "arbitrary code execution" exploit is the coercion of some program to execute in a
                    manner unexpected by the programmer, but which still follows from the expected functioning of the
                    underlying system. In the case of a traditional attack, this underlying system is the hardware of a
                    register machine, but it could just as easily be the execution environment of a machine learning
                    model or any other computational substrate.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
