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
                <BlogImage src={"/media/image/pages/blog/on-general-transformers/attention-mechanism.png"}>
                    An adversarial image patch from Brown et al.
                </BlogImage>
                <p>
                    When this patch was inserted into any image, instead of classifying the overall image correctly, the
                    model would instead predict "toaster", regardless of the main image. To the attacked VGG16 model,
                    this image patch was more "toaster" than toaster. This strange collection of shapes and colors was{" "}
                    <i>more real</i> than reality.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
