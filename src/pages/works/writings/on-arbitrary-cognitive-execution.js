import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import CodeBlock from "@/components/widgets/CodeBlock";
import { FootnoteProvider, Footnote, FootnoteList } from "@/components/widgets/FootNote";
import { WritingSection } from "@/components/widgets/WritingSection";
import WritingWrapper, { FigureImage, WritingInfo } from "@/components/wrappers/WritingWrapper";
import { genPageTitle } from "@/lib/util/utils";

const onArbitraryCognition = new WritingInfo(
    "On Arbitrary Cognitive Execution",
    "An inquiry into the exploitation of cognitive computation and pattern replication",
    new Date(2026, 6, 7),
    "arbitraryCognition",
    new Date(2026, 7, 5)
);

let house = <span style={{ color: "CornflowerBlue" }}>house</span>;
let House = <span style={{ color: "CornflowerBlue" }}>House</span>;

export default function ArbitraryCognition() {
    return (
        <WritingWrapper
            pageName={genPageTitle(__filename)}
            title={onArbitraryCognition.title}
            subtitle={onArbitraryCognition.subtitle}
            pubDate={onArbitraryCognition.pubDate}
            modDate={onArbitraryCognition.modDate}>
            <FootnoteProvider label={onArbitraryCognition.anchor}>
                <WritingSection>Introduction</WritingSection>
                <p>
                    You have just finished reading this sentence. This much is abundantly clear, even trivially so.
                    Perhaps you have just read it again. But, how can you be so sure? Assuming you accept the premise of
                    a purely physical reality, the answer is obvious: over the course of about three seconds, your eyes
                    steadily tracked the pixels that appeared on your screen, which represented the beginning of this
                    paragraph. Your perception of those words was enabled by your retinas reacting to the incident
                    photons produced by your device. Your optic nerves then sent innumerable signals off to your visual
                    cortex for processing with those new signals then traversing the approximately 6.5 inches between
                    their origin in the rear of your brain to your prefrontal cortex. After this sequence of events,
                    "you", your conscious self, registered the seven words contained within the first sentence of this
                    paragraph
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
                    be indistinguishable from the genuine article, at least from the perspective of your subjective
                    self.
                </p>
                <p>
                    Imagine yourself as a professional art appraiser. You are given a piece that could potentially fetch
                    a significant sum at auction, but only if it is genuine. Your task is to evaluate the piece's
                    authenticity. You are unfamiliar with the original artist, but you notice that the piece comes with
                    a long series of "Certificates of Sale" dating back to the original artist. If every single
                    certificate in the chain is value, the piece must be authentic. You recognize the last signature
                    personally and know for sure that the last certification is valid. However, even if the last
                    certificate is valid, can you be so sure about the penultimate certificate? What about the
                    antepenultimate? At any point in this chain of certificates a forgery could have been introduced. If
                    that forgery fooled only the certifier after it in the chain, it would be impossible to tell later,
                    since that certifier's certificate would be valid. Can you be certain that the piece is authentic?
                </p>
                <WritingSection level={2}>Toasters and Perceptions of Reality</WritingSection>
                <p>
                    In late 2017, researchers at Google were experimenting with adversarial attacks against their
                    VGGNet16 image recognition model
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1712.09665"} target="_blank" rel="noopener noreferrer">
                            Adversarial Patch (Brown et al. 2018)
                        </Link>
                        .
                    </Footnote>
                    . At the time, similar research into adversarial attacks on vision models were popular, but mainly
                    focused on training-time data poisoning
                    <Footnote>
                        For example,{" "}
                        <Link href={"https://arxiv.org/pdf/1712.05526"} target="_blank" rel="noopener noreferrer">
                            Targeted Backdoor Attacks on Deep Learning Systems Using Data Poisoning (Chen et al. 2017)
                        </Link>
                        .
                    </Footnote>
                    . For their attack on VGGNet16, the researchers took a different approach. Leaving the model
                    unmodified, their goal was to design an exploit which would allow them arbitrary control over the
                    model's predictions. For their experiment, the authors reverse engineered image patches, overlays
                    which could be placed into any input image. These patches were designed to maximize the model's
                    likelihood of predicting an arbitrary label, regardless of the original image. The result of this
                    reverse engineering is the following patch:
                </p>
                <FigureImage src={"/media/image/pages/writings/on-arbitrary-cognitive-execution/toaster.png"}>
                    An adversarial image patch from Brown et al.
                </FigureImage>
                <p>
                    When this patch was inserted into any image (for instance, a banana), instead of classifying the
                    overall image correctly, the model would instead predict "toaster", regardless. To the attacked
                    VGGNet16 model, this image patch was more "toaster" than toaster, <i>more real</i> than reality.
                </p>
                <p>
                    What is actually happening here? The model weights were frozen for this exercise, so the model
                    itself was not corrupted; on non-adversarial images, it functioned normally as well. Regardless of
                    any particular image, data still flowed from input image to output classification. The model's
                    neurons still manipulated incoming signals in a fully expected manner. This particular image patch,
                    however, hijacked the normal pattern of activations to generate an output that does not logically
                    follow from the input. From the model's perspective, it experienced the <i>qualia</i> of sensing a
                    toaster, but this internal experience was not induced by the genuine article. Each step in the long
                    chain of activations behaved approximately correctly, but through exploiting some latent pattern of
                    these activations, an illogical output was produced. At some point, one of the "Certificates of
                    Sale" between the model's neurons was a forgery.
                </p>
                <p>
                    Stepping back, what makes this particular attack notable with respect to others, such as training
                    data poisoning or adversarial fine-tuning? Both can achieve the same effect of making the model
                    believe that a banana is a toaster. This attack, however, does not rely on modifying the model's
                    behavior. Instead, an erroneous output is induced by a malicious input alone,{" "}
                    <i>leaving the underlying model unaffected</i>. From the model's perspective, this becomes even more
                    interesting: its internal experience did not follow from reality yet, to the model, its false
                    experience was nonetheless indistinguishable from reality.
                </p>
                <WritingSection level={2}>Problems and Proxies</WritingSection>
                <p>
                    This manner of attack is a special case of a much broader class of attack on computer systems. This
                    is generally referred to as <i>Arbitrary Code Execution</i>: an attack which manipulates the
                    expected behavior of a computing system into producing an attacker-controlled result. This level of
                    attacker control is usually achieved through the usage of finely crafted inputs to a system, instead
                    of through direct code modification or hardware tampering.
                </p>
                <p>
                    The existence of this class of exploit relies on a feature common to any sort of computing machine.
                    These systems are "dumb", in the sense that they follow instructions to the letter, rather than
                    following the spirit. Programmers are well-aware of this <i>XY problem</i>
                    <Footnote>
                        <Link href={"https://xyproblem.info/"}>The XY Problem</Link>
                    </Footnote>{" "}
                    when creating software. Suppose the goal of a program is to achieve some objective, denoted X. There
                    is rarely a single instruction for achieving exactly X in one step. Instead, the programmer must
                    write a series of Y instructions that can achieve X indirectly. For example, suppose a programmer
                    would like for a program that is currently executing a procedure to transfer execution to another
                    procedure (X). The CPU does not know what a "procedure" is, much less how to "switch" to it. These
                    are human-centric concepts, rather than computer-centric. To achieve the goal of X, the programmer
                    must put their ill-defined goals into precise instructions. They would store the address at which
                    procedure X sits into a pointer and pass the pointed-to address to a jump instruction (Y). Once the
                    program is assembled, the jump instruction is statically defined, but the input to that instruction
                    is only defined at runtime; there is no guarantee that the address present at runtime will match the
                    intended memory address of X. The instruction will jump execution to whichever address is supplied.
                    If a malicious attacker were able to modify the pointer before the jump, then the attacker would be
                    in control of the next executed procedure instead. For the purposes of our exploration here, note
                    that the target procedure was never moved and the jump instruction's logic was never compromised.
                    The machine was following instructions to the letter instead of to the programmer's spirit.
                </p>
                <p>
                    Returning to our image recognition example, researchers used the tuned 138 million parameters of
                    VGGNet16
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1409.1556"} target="_blank" rel="noopener noreferrer">
                            Very Deep Convolutional Networks for Large-Scale Image Recognition (Simonyan and Zisserman
                            2014)
                        </Link>
                        .
                    </Footnote>{" "}
                    as a proxy for choosing the correct label for an image, with VGGNET16's parameters serving as Y (the
                    attempt at achieving the objective), and the correct label as X (the true objective). There is no
                    guarantee that the trained state of the parameters would always yield "banana" when presented with a
                    picture of a banana; they just happen to do so for an acceptable portion of the evaluation samples.
                    The image patch exploits the state of the model's parameters to yield "toaster" instead. Note that
                    the parameters were never changed, nor was the computer's ability to successfully evaluate the input
                    conditional on those parameters. In the exact same manner as a more traditional assembly example, a
                    working program was induced into an unexpected state without modification.
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
                <WritingSection>Arbitrary Code Execution</WritingSection>
                <p>
                    Before further investigating the much more theoretical implications of arbitrary code execution, it
                    would help to better understand how it works in traditional computers and why it even works at all.
                    As we will see, the possibility of these exploits is a fundamental feature of programming itself.
                    Vulnerabilities do not emerge from simple programming oversights, they are almost inevitable
                    consequences of the trade-offs required for building complex systems using limited foresight.
                    Understanding this fundamental property of programming will be relevant later, when we ask whether
                    the same vulnerabilities could exist within the brain.
                </p>
                <WritingSection level={2}>Ex Machina</WritingSection>
                <p>
                    If you were to communicate with an early computer programmer in the year 1965 and warn them that the
                    exploitation of their software would soon become a booming industry, how would they react? They
                    would likely be unsurprised. Programmers were aware that security could <i>become</i> a concern in
                    the future, even if it was not paramount at the time. The task of designing complex software for
                    heavily resource-constrained machines was challenge enough. Indeed, the possibility of large-scale
                    exploitation would be shown by "The Creeper" worm in 1971, just six years later. Why may they react
                    in this manner, even though they had not personally experienced their software being exploited? Even
                    if this programmer from the past were not aware of the exact techniques of exploitation, the
                    possibility of hacking may not phase them. Perhaps this hypothetical person's lack of surprise is
                    itself unsurprising to you as well.
                </p>
                <p>
                    To better understand why, consider a similar setup which is concerned with a different kind of
                    low-level exploitation. Would it be reasonable to suggest that the human brain is vulnerable to
                    similar attacks? We can readily conceptualize more "high-level" social or psychological attacks such
                    as interpersonal manipulation or desensitization to some specific situations. These are, however,
                    very blunt instruments that may or may not work as the attacker intends, or may not work at all.
                    Instead, consider something much lower in level, something that directly exploits the complex
                    patterns in how our neurons activate. This prospect seems outright absurd. Why, though, does this
                    seem so outlandish? Just because we have yet to see an example does not mean it is impossible. One
                    motivation for our apprehension to this concept could be that we simply have no reason to believe
                    that it <i>is</i> possible. The sheer intractability of the problem seems too great to overcome; we
                    do not know how our own brains work, much less how to exploit those inner workings. Computer
                    hacking, by contrast, is much easier to conceptualize. We know <i>exactly</i> how computers work. We
                    designed computers specifically to work in this deterministic and understandable manner. This is why
                    our 1965 programmer was so un-phased, even if they were never shown direct evidence proving the
                    possibility of hacking. The question of knowing whether low-level exploits are possible in any
                    computing device, even a biological one, is really just a question of whether we know what laws and
                    patterns govern that system on a base level.
                </p>
                <p>
                    Modern, general purpose, classical computers nearly universally rely upon the Von Neumann
                    <Footnote>
                        In the computer science curricula that I have taken and taught John Von Neumann often takes a
                        secondary role to the likes of Gödel, Turing, and Shannon. Hopefully the courses that I have
                        directly interacted with are an anomaly in this respect. Regardless, I'd highly recommend taking
                        a second look at his life, abilities and accomplishments. See my thoughts on{" "}
                        <Link
                            href={"https://matthewpisano.com/works/reading-list#maniac"}
                            target="_blank"
                            rel="noopener noreferrer">
                            The MANIAC
                        </Link>{" "}
                        for some more detailed commentary.
                    </Footnote>
                    architecture. In this schema, computers are neatly split into a processor, a memory unit, and I/O
                    devices. Generally, the processor contains the logic on how to interpret instructions, the memory
                    contains which instruction to execute, and the I/O devices allow humans or other computers to
                    interface with running programs. Most modern, consumer and enterprise computers are also register
                    machines. This tweak to the base architecture adds registers (and often multiple layers of cache)
                    between the processor and memory. These registers have direct access to the CPU and greatly simplify
                    the interface by which the CPU interacts with memory. Special registers, such as the program
                    counter, keep track of the status of execution with general purpose registers serving as labeled
                    storage for intermediate computations and auxiliary bookkeeping. For now, we can also assume that
                    memory is represented to the CPU as a fully accessible and arbitrarily addressable set of storage
                    labels. Another core feature of the Von Neumann architecture is the unification of instruction and
                    data memory
                    <Footnote>
                        This is in contrast to the Harvard architecture, which advocates for a strict separation between
                        executable instructions and the input data to those instructions.
                    </Footnote>
                    . To a Von Neumann computer, all data stored in memory, caches, and registers are raw, contextless
                    numbers. The difference between instructions and data only lies within the context of their access
                    (and sometimes their location within memory).
                </p>
                <p>
                    For example, suppose a memory address holds the value <i>0x2149002a</i> (little endian). On a MIPS
                    system, this could be decoded as an instruction which tells the CPU to add 42 (<i>0x2a</i>) to the
                    number in register 10 ($t2) and store the result in register 9 ($t1). Equal in validity, the CPU
                    could also interpret this as the literal integer 558,432,298. There are some good reasons for
                    allowing this ambiguity unaddressed in the design of a computer. A unified memory addressing scheme
                    allows the entirety of memory to be accessible by a program and the design of physical busses and
                    interfaces is simpler. However, in addition to introducing a memory bottleneck, this unification
                    opens up many avenues for exploitation. If data can be interpreted as instructions in some contexts,
                    the users of a system could also theoretically control how that system functions by manipulating it
                    to run arbitrary code of their choosing or to access arbitrary regions of memory.
                </p>
                <WritingSection level={2}>A Trivial Vulnerability</WritingSection>
                <p>
                    Let's first consider a toy example, then work up from there. Most systems have a special register
                    called the "program counter". This register, like any other, contains a number: the memory address
                    at which the CPU will look for its next instruction. This counter increments as the program executes
                    with special control flow instruction moving it in the case of loops or procedure calls. Whatever
                    (or whoever) controls the value stored within the program counter fully controls which code the
                    program will execute next. Upon launch, the program will ask the user for a secret password. It will
                    then check if the password is correct and reveal some hidden information if so. In the interest of
                    space efficiency, the original programmer has laid out memory in a condensed fashion with the space
                    used for storing the user's password attempt placed just before the procedure for checking the
                    password. In MIPS, this would look like the following:
                </p>
                <CodeBlock language="mips">
                    {`main:
    la $a0, input       # Request that the data be placed in input
    jal read_input      # Read the user input until return is pressed

    jal password_check  # Check that the user-given password matches the secret password

input:
    .space 4            # The space for the user input

password_check:         # Password check procedure
    la $a0, password    # Set the password as the first input to the string compare
    la $a1, input       # Set the user input as the second input to the string compare
    jal strcmp          # Compare the strings
   
    beqz $v0, reveal_secret     # Reveal the secret of the user input matches the password

    li $v0, 10
    syscall             # Exit if the password is incorrect

reveal_secret:          # Reveal the secret
    ...`}
                </CodeBlock>
                <p>
                    Note the <code>input</code> space for the user input; it is only four bytes long. If the user acts
                    as intended and only inputs four characters for the password, this program will work correctly. If
                    the user's input does not match the password, then the secret will not be revealed. However, what
                    happens if the user inputs more than four characters? Remember that the computer will understand the
                    programmer's instructions to the letter, not to their spirit (recall the XY problem from earlier).
                    The input procedure will continue to read in characters until the return key is struck. If more than
                    four characters are stored, data will spill over into the next word, the next instruction. In this
                    case, this is the first instruction in the
                    <code>password_check</code> procedure. Suppose that the instructions which compose this procedure
                    begin in memory at address <i>0x00400044</i> and the <code>reveal_secret</code> procedure lies at{" "}
                    <i>0x00400064</i>. Initially, <code>password_check</code>'s address would store <i>0x3c010040</i>,
                    corresponding to the instruction <code>la $a0, password</code>
                    <Footnote>
                        Technically, MIPS would decode this to be two instructions since <i>la</i> is a
                        pseudo-instruction and not directly present in the MIPS instruction set.
                    </Footnote>
                    . However, suppose that the user inputs "pwnd" followed by the byte sequence:{" "}
                    <i>0x08 0x10 0x00 0x19</i>. The first four characters (bytes) do not actually matter here. However,
                    they do serve to take up space. Once the intended four bytes have been occupied, the next four
                    overwrite the original memory stored at address <i>0x00400044</i>, replacing it with{" "}
                    <i>0x08100019</i>, the user's input overflow. When the program counter goes to execute the
                    instruction stored at this address, instead of executing <code>la $a0, password</code>, it will
                    instead execute <code>j reveal_secret</code>. Instead of loading the password's address into a
                    register, the program will immediately begin to reveal the secret that would usually be kept behind
                    a password check. Through the overflow of their input, the user was given control over the program
                    counter. This allowed them to execute <i>arbitrary code</i> of their choosing. By knowing exactly
                    how the computer executes instructions and the patterns of those instructions that it recognizes, we
                    can exploit the predictable behavior of that machine to do whatever we wish.
                </p>
                <WritingSection level={2}>Mechanics of Exploitation</WritingSection>
                <p>
                    In a full attack chain, executing arbitrary code on a system is rarely the first action that an
                    attacker takes. Generally, one or more individual utility exploits are chained together in order to
                    build towards the instrumental goal of executing arbitrary code. This intermediate goal is then used
                    as a proxy for the attacker's terminal goal. This could be denial of service, information
                    exfiltration, or any number of other malicious objectives.
                </p>
                <p>
                    One such utility exploit is present in our example above: buffer overflows. To use this utility, an
                    attacker identifies a buffer, a bounded region of memory, which they can write past the boundary of
                    with their own data. Generally, there is some point of interest for the attacker just beyond the
                    bounds of the buffer. In our example, the point of interest was an instruction which we knew that
                    the program counter was going to execute. This knowledge informed our decision on what data to
                    actually write beyond the bounds of our buffer. Looking beyond raw assembly, this utility exploit is
                    often used on programs written in memory-unsafe languages like C or C++. These languages do not
                    enforce array bounds, potentially allowing an attacker to write past them into program memory if the
                    programmer does not manually add in bounds checks
                    <Footnote>
                        Even if the designer of a program does not handle arrays properly themselves, modern systems
                        often have builtin protections against this simple attack. No-execute bits in memory forbid data
                        placed in a data region (such as the stack) from being executed. Address space layout
                        randomization (ASLR) ensures that programs loaded into memory randomize the addresses of
                        instructions. In our example this would have prevented us from knowing which address to jump to.
                        Stack canaries are another common protection, with the operating system placing randomized
                        values just before the return address of a procedure. If these values are overwritten by an
                        overflow, the system can terminate the program.
                    </Footnote>
                    . Many other simple utilities are available to hackers. for example, pointer-based vulnerabilities
                    such as use-after-frees or double frees can allow an attacker to corrupt memory and exert more
                    control over how a system functions
                    <Footnote>
                        Explaining this topic in depth would also necessitate a discussion on program memory management,
                        allocation, and memory pointers. While this is beyond the scope of this work, anyone interested
                        in low-level programming or vulnerabilities of this nature should ensure that they are familiar
                        with the topic.
                    </Footnote>
                    . Vulnerabilities such as these are much more difficult to spot and fix than simple buffer
                    overflows, making them popular entry points in an exploit chain.
                </p>
                <p>
                    A major limiting factor of buffer overflow attacks is that buffers often reside in the data or heap
                    sections of memory while program code resides within the text segment. Especially when a system
                    disallows the execution of memory regions as instructions, it can be difficult to leverage a regular
                    buffer overflow to achieve arbitrary code execution on a system. Return oriented programming is an
                    attacker's answer to this limitation. Instead of coercing the program counter into executing data as
                    code, a return oriented programming attack never needs to leave the text segment. Recall how the act
                    of programming in general consists of chaining a series of specific instructions together as a proxy
                    for achieving some goal of the programmer's. This attack is similar, with the extra restriction that
                    the instructions in the chain can only exist within the attacked program. if the attacker can
                    corrupt the return address of a procedure, they can arbitrarily place the program counter wherever
                    they want next, very similar to our original buffer overflow example. Instead of this being the
                    entire attack chain, this process is repeated many times. Each time, the return address of a
                    procedure is overwritten and control is transferred to another arbitrary piece of code. At every
                    stop, memory is manipulated and the program counter is maneuvered into the position that is required
                    at the end of the attack. These individual blocks of hijacked code are referred to as "gadgets" as
                    they are only used as small utilities in service of the larger attack. When done right, the state of
                    a program can be manipulated arbitrarily without triggering any execution violations. Similarly to
                    buffer overflows, ASLR and stack canaries offer a defense against this attack, but are not always
                    available in all programs or systems.
                </p>
                <FigureImage src={"/media/image/pages/writings/on-arbitrary-cognitive-execution/ram.webp"}>
                    A diagram of RAM cells and access lines (
                    <Link
                        href={"https://www.akkadia.org/drepper/cpumemory.pdf"}
                        target="_blank"
                        rel="noopener noreferrer">
                        Figure 2.7 from What Every Programmer Should Know About Memory, Drepper 2007
                    </Link>
                    )
                </FigureImage>
                <p>
                    Some vulnerabilities, however, do not merely emerge from mistakes in software logic. The following
                    penetrate much deeper, emerging from fatal flaws within the computational substrate itself. Starting
                    in 2012, Intel began quietly filing a series of patents
                    <Footnote>
                        <Link
                            href={"https://patents.google.com/patent/US20140089576A1"}
                            target="_blank"
                            rel="noopener noreferrer">
                            US20140089576A1
                        </Link>
                        ,
                        <Link
                            href={"https://patents.google.com/patent/US20140059287A1"}
                            target="_blank"
                            rel="noopener noreferrer">
                            US20140059287A1
                        </Link>
                        , and{" "}
                        <Link
                            href={"https://patents.google.com/patent/US20140095780A1"}
                            target="_blank"
                            rel="noopener noreferrer">
                            US20140095780A1
                        </Link>{" "}
                        are three of the earliest examples.
                    </Footnote>{" "}
                    describing mitigations for access-induced DRAM vulnerabilities, with several mentioning the words
                    "row hammer". Two years elapse as the patents are reviewed and knowledge of this potential
                    vulnerability evaded public attention. In 2014, as these patents awaited quiet review in the U.S
                    patent office, researchers at Carnegie-Mellon University and Intel published a paper
                    <Footnote>
                        <Link
                            href={"https://users.ece.cmu.edu/~yoonguk/papers/kim-isca14.pdf"}
                            target="_blank"
                            rel="noopener noreferrer">
                            Flipping Bits in Memory Without Accessing Them: An Experimental Study of DRAM Disturbance
                            Errors (Kim 2014)
                        </Link>
                    </Footnote>{" "}
                    which would catch the collective attention of security researchers across the world. In a laboratory
                    setting, the CMU and Intel researchers were able to reproduce the vulnerability with alarming
                    consistency on their test systems. Understanding what they found requires understanding how DRAM
                    functions.
                </p>
                <p>
                    The RAM in DRAM means "random access memory", any location in memory can be accessed at any time by
                    the CPU arbitrarily in constant time. Physically, the memory cells in RAM are laid out in a grid.
                    These cells consist of a capacitor which stores a single bit of information based on the it voltage
                    stores. When the CPU requests a specific memory address, the bits of the address are decoded into
                    the addresses for the row and column for that memory cell. The row address is used to activate the
                    word line, opening up the entire row for access at once. Next, the column address is used to select
                    the specific cell corresponding to the overall address. Additionally, the capacitors which make up
                    the cells constantly leak charge and must be periodically refreshed by the RAM controller; this is
                    instrumental to the attack, as we will see. For the DDR and DDR2 generations of RAM, the integrity
                    of the voltages in these cells can largely be considered in isolation since cells were nearly 100
                    nanometers apart. However, in DDR3 RAM, these distances shrunk substantially to under 40 nanometers.
                    At these distances, different rows begin to become electromagnetically coupled to their neighbors.
                    When a row word line jumps in voltage during access, it exerts a tiny influence on the voltages of
                    cells in nearby rows. This is what the researchers exploited. They discovered that repeatedly and
                    rapidly toggling the word line, the capacitors in some nearby cells begin to leak charge at a much
                    faster rate. This rate is so fast, in fact, that the cells are emptied of their charge before the
                    next charge refresh.{" "}
                    <i>
                        By repeatedly accessing some cells in RAM, the researchers could modify the values in completely
                        unrelated cells
                    </i>
                    . If this vulnerability was ever used in an exploit, it could completely bypass regular OS
                    protections to memory, enabling attackers near-arbitrary control over the values in memory,
                    including memory used by core OS components.
                </p>
                <p>
                    Three years later in mid-2017 several different research teams began to investigate a class of CPU
                    vulnerabilities related to speculative execution, independently at first, then jointly later. The
                    result of their investigations were several critical vulnerabilities, to which nearly every modern
                    CPU was vulnerable. To understand these vulnerabilities, we must first discuss how modern CPUs
                    execute instruction and why they somtimes execute them out of order. In the CPU, instructions are
                    not processed all at once. Over multiple clock cycles, instructions must be fetched from memory (or
                    cache), decoded by the CPU into their hardware meaning, executed, with results later written back to
                    the register file. Naively, these operations would happen sequentially. However, each stage uses
                    independent hardware. Instead of executing all of the stages for one instruction before moving on to
                    the next, the stages of different instructions can be interleaved to make constant use of all the
                    instruction hardware. As one instruction is being fetched, the one after us being decoded, and yet
                    others are being executed or written back. Additionally, these instructions can be executed
                    <i>out-of-order</i>. If one instruction is waiting on another, the CPU will waste time waiting for
                    this dependency to resolve. With out-of-order execution, the CPU executes the next instructions
                    immediately as soon as all inputs are met, allowing instructions with dependencies to wait in the
                    background. However, what happens when the CPU does not know what instruction comes next in this
                    pipeline? This scenario commonly happens on conditional branch boundaries; the next instruction
                    depends on the branch result. This is inefficient because it means some pipeline stages will go
                    unused while the branch is resolving. There is a solution to this too: the CPU can <i>speculate</i>
                    on which branch the conditional will take. If it predicts correctly, it saves time; if incorrect, it
                    rolls back the result and begins to process the correct branch path. But, how does the CPU know
                    which branch to pick? As code executes any given branch, the CPU tracks which branch result is
                    taken, training it to predict the most commonly taken branch. For example, in a very long loop, the
                    branch out of the loop will only be taken once and will therefore not be predicted by the CPU. The
                    exploitation of these two CPU optimizations leads to the vulnerabilities those researchers
                    discovered in 2017.
                </p>
                <p>
                    The first, and simplest, of these vulnerabilities is <i>Meltdown</i>
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1801.01207"}>Meltdown</Link>
                    </Footnote>
                    . This vulnerability exploits the out-of-order execution optimizations on vulnerable CPUs to read
                    from arbitrary addresses in memory, even kernel memory. The following code snippet roughly
                    demonstrates how a malicous program would perform the exploit.
                </p>
                <CodeBlock language="cpp">{`// The size of a memory pagge
int page_size = 4096;
// Probe array for Flush+Reload side channel
// Create a buffer which can store a 4KB page for every possible byte (0-255)
unsigned char probe_array[256 * page_size];

void meltdown_step(unsigned char *kernel_data) {
    // Accessing protected kernel address causes a segmentation fault
    unsigned char secret = *kernel_data;
    
    // Instructions to fetch the page associated with the secret byte
    // are already executing before fault finishes processing
    volatile unsigned char *addr = &probe_array[secret * page_size];
    // Force the CPU to load and cache the probe_array page 
    // corresponding to the secret byte
    unsigned char dummy = *addr;
    
    // Find the cached page be measuring access timings, 
    // finding the secret byte
    char secret_byte = reload_and_detect(&probe_array);
}`}</CodeBlock>
                <p>
                    First, a probe array is created which will serve as a page caching detector. Next, the CPU is
                    instructed to access protected kernel memory; the user does not have sufficient permissions to
                    access kernel memory so this instruction will cause a segfault. However, due to out-of-order
                    execution, the next instruction (which accesses memory based on the secret kernel byte) has already
                    begun to execute. This instruction is executed out-of-order as the CPU processes the exception and
                    segfault trap. By the time the segfault actually interrupts the program, a memory page "chosen" by
                    the secret kernel byte may have already been cached. The program catches this interrupt and
                    continues execution. Even though the kernel access instruction failed and was rolled back, the cache
                    can still be used as a side-channel for recovering that information. By looping through the probe
                    array and measuring access times for each (page strided) element, the attacker can tell which page
                    was placed in the cache and deduce the secret kernel byte based on tht element's position. Luckily,
                    this exploit only impacted a limited number of CPUs with insufficient memory access checking during
                    speculative execution. However, Meltdown was not the only class of vulnerability the researchers
                    discovered. Their other discoveries would turn out to be much more insidious.
                </p>
                <p>
                    The other class of vulnerability the researchers discovered exploited both the speculative execution
                    and out-of-order execution optimizations of targeted CPUs. This attack was much more difficult to
                    exploit than Meltdown, but also much more general, working on a wide variety of CPUs. Recall that
                    the CPUs branch prediction algorithm is "trained" based on how branches are taken in code. This
                    implies that the original programmer is in control over which branch the CPU takes. If the
                    programmer was malicious, they could design a program to force the CPU to predict whichever branch
                    they want. Similarly to Meltdown, when the CPU predicts incorrectly and needs to roll back, remnants
                    of the erroneous instruction are left in CPU cache lines. These cache lines act as a side-channel
                    for an attack. Taking inspiration from return oriented programming, suitable <i>gadgets</i> from
                    within the running program can then be used to index into memory arbitrarily from some base offset.
                    The resulting vulnerability was named <i>Spectre</i>
                    <Footnote>
                        <Link href={"https://arxiv.org/pdf/1801.01203"}>
                            Spectre Attacks: Exploiting Speculative Execution
                        </Link>
                    </Footnote>{" "}
                    as it was nearly undetectable through externally observing the CPU. From the outside perspective, it
                    seemed as if the program was accessing the CPU in a mundane pattern.
                </p>
                <CodeBlock language="cpp">{`/********************************************************************
Victim code.
********************************************************************/
unsigned int array1_size = 16;
uint8_t unused1[64];
uint8_t array1[160] = { 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 };
uint8_t unused2[64];
uint8_t array2[256 * 512];

char *secret = "The Magic Words are Squeamish Ossifrage.";

uint8_t temp = 0; /* Used so compiler won’t optimize out victim_function() */

void victim_function(size_t x) {
    if (x < array1_size) {
        temp &= array2[array1[x] * 512];
    }
}
`}</CodeBlock>
                <Footnote>Source code from the Spectre paper.</Footnote>
                <p>
                    During a Spectre v1 attack, the victim function is used as a gadget to "train" the CPU branch
                    predictor to always choose the branch that reads from <code>array2</code> by passing a valid value.
                    Later, after the CPU has been trained, an out-of-bounds value will be passed to the function for
                    array indexing. Executing speculatively, the CPU will assume that the value passes the check
                    (because it always has before). However, once the branch has truly resolved, the CPU realizes that
                    the value is out of bounds and rolls back the index instruction. However, remnants of the index will
                    still be left in CPU cache lines. An attacker controlled program can then read through{" "}
                    <code>array2</code> several times, tallying up which of the values remain in the CPU cache. Similar
                    to Meltdown, the value most likely to be cached by the original attack indicates the byte value at
                    the arbitrary out-of-bounds offset from the malicious user. This allows an attacker to read any
                    value from the process' memory, including escaping browser sandboxes. Unlink Meltdown, which is the
                    result of insufficient ceche read checks, the Spectre class of vulnerabilities relies only on a
                    fundamental CPU optimization to carry out the attack; this is much more difficult to mitigate. Upon
                    original discovery, only two Spectre variants were known, v1 and v2. Since them, 13 unique Spectre
                    variants have been discovered, with many evading patches made to fix earlier variants.
                </p>
                <p>
                    With both Meltdown and the Spectre class, the intended behavior of the CPU and its cache were
                    exploited to yield information about the system to an attacker. However, unlike some of the other
                    attacks we have seen, this does not allow for arbitrary code execution, but instead arbitrary memory
                    read. Combined, these two types of attack allow for full knowledge of a program's state and full
                    control over a program's outcome. Importantly, these attacks will persist unless fundamental changes
                    are made to the target program's logic or the hardware configuration of the system it is running on.
                </p>
                <WritingSection>Exploiting Execution in Games</WritingSection>
                <p>
                    When considering only simple examples in isolation, vulnerable code seems fairly easy to catch and
                    fix. After all, if programmers and hardware developers simply checked their buffer bounds, compiled
                    their code with protections enabled, and maintained vigilance for common logic bugs, code and
                    hardware should be fully secure. Similar sentiments to this are often present in exploit
                    post-mortems. "If we had only noticed that we were using that pointer after freeing it, we would be
                    fine". Real software, especially highly optimized, embedded, or hardware-level code, cannot be
                    reduced to such simple terms. Just because the exact mechanism of a vulnerability is unknown at
                    first <i>does not</i> mean it is impossible.
                </p>
                <WritingSection level={2}>The Embedded Realities within Games</WritingSection>
                <p>
                    The medium of video games can offer particularly compelling examples of the strength and scope of
                    "arbitrary" code execution. This is because video games offer interactive fictions with well-defined
                    rules. While achieving arbitrary code execution in an operating system's kernel is far more severe
                    from a security standpoint, such an attack may not represent much of a change from a human
                    perspective. Visually, at least, an attacker's payload does not fundamentally change the rules of
                    how we humans expect an operating system to function. A machine compromising a level 2 hypervisor
                    running client code or damaging OS protected hardware is highly impactful from a technical or
                    security standpoint, but the general syscalls and memory management largely obey the same set of
                    behaviors. A more human-intuitive change would be, for example, rewriting a Windows Vista system to
                    look and behave like Windows XP in memory and on-the-fly. While technically possible with truly
                    arbitrary code execution at the kernel level, there is no motivation to actually do this from a
                    malicious actor's perspective. The entire point of an attack is the exact opposite of this, to
                    remain hidden as much as possible. However, video game hackers have the objective of making their
                    attacks as visually and intuitively interesting as possible.
                </p>
                <p>
                    As noted a moment ago, all games are designed to create a fiction defined by strict rules,
                    objectives, and mechanics. These fictions could be as simple as immersing the player in a virtual
                    game of chess or as complex as an open-world role playing game. The biggest difference between a
                    game behaving unexpectedly and general software doing the same is this sense of immersion that the
                    player feels. When a word processor or web browser crashes, it is an unexpected inconvenience to the
                    user. When a game crashes, the player may experience a strong break in their immersion or even an
                    increase in immersion when the crash artistically serves to accent a story. <i>Undertale</i>,{" "}
                    <i>Anatomy</i>, and <i>Five Nights at Freddy's</i> are good examples of this latter category,
                    deliberately using crashes as an artistic choice. When the rules of a game are broken, the resulting
                    changes are much more impactful from a subjective point of view than if the same happens to more
                    "mundane" software.
                </p>
                <WritingSection level={2}>How to Rewrite a Reality</WritingSection>
                <p>
                    When searching for games with known arbitrary code execution vulnerabilities, compilations are
                    dominated by older games, generally from the 2000s and earlier. This is because early game consoles
                    operated under very different hardware constraints than even contemporary home computers. Since
                    their function was much more limited in scope and were often designed on strict budgets, consoles
                    often employed very specialized and limited hardware
                    <Footnote>
                        Consider the Nintendo Entertainment System from 1985 (US) and the Tandy 1000 from 1984. A
                        developer writing software for the NES needed to consider several disjoint components along with
                        severe hardware restrictions. The system was comprised of a Ricoh 2A03 (essentially a clone of
                        the famous MOS 6502 microprocessor), a dedicated audio processing unit, a picture processing
                        unit, 2KB of video RAM, 2KB of work RAM, in addition to active chips on the game cartridge such
                        as character RAM and ROM for tile and sprite data. This on top of working around physical
                        limitations of CRT displays, namely the fact that graphics needed to be constrained to the time
                        it physically takes the CRT's electron beam to move back to the top of the screen. In contrast,
                        the Tandy 1000 came equipped with the much more powerful Intel 8088, 128KB of RAM, a Tandy video
                        controller, and a Texas Instruments SN76489 sound chip. Since the Tandy was designed for much
                        more general computing and could sell at a higher price point, it could afford to avoid many of
                        the NES' hardware restrictions.
                    </Footnote>
                    .
                </p>

                <p>
                    For early game consoles such as the NES, these hardware restrictions placed limitations on how
                    software could be designed. With the extremely limited RAM and 8-bit CPU, Nintendo's developers
                    needed to take shortcuts. They prioritized creating working, optimized software over robustness and
                    security. For instance, the developers of the original Super Mario Bros. left only five slots for
                    sprites (with large sprites like Bowser or fire bars taking up two slots). When looking to spawn a
                    new sprite, their code would simply walk along the list until an empty slot was reached. This, of
                    course, left open the possibility for a buffer overflow. However, since the developers were also in
                    control of level layout, this overflow would rarely happen (unless intentionally induced). Operating
                    under the processing restrictions of their CPU and the limited size of program ROM, proper checks
                    against buffer overflows were never included. The delivery of a working game was more important than
                    the delivery of a robust game.
                </p>
                <p>
                    When the shortcuts and programmer assumptions bakes into game programs are exploited, the effects of
                    severe vulnerabilities present in game worlds can be dramatically apparent. That buffer overflow in
                    Super Mario Bros. can indeed serve as a component in an arbitrary code execution exploit. Similar
                    vulnerabilities exist in other games of the time, such as The Legend of Zelda or Castlevania. The
                    result of a collaboration between multiple retro game exploiters, the following video by{" "}
                    <i>Kosmic</i> showcases the extent to which game worlds can be completely rewritten through the
                    rewriting of their internal patterns of execution:{" "}
                    <Link
                        href={"https://www.youtube.com/watch?v=Le3g9V-BJIA"}
                        target="_blank"
                        rel="noopener noreferrer">
                        Super Mario Bros. "ACE" TAS Showcase and Console Verification
                    </Link>
                    . By manipulating Mario's position along with the exact positions of on-screen sprites, the program
                    counter of the NES' processor can be jumped to a specific region of RAM. From here, the console will
                    start reading in the controller inputs as instructions. Mundane-seeming inputs to this system can
                    result in this system, through its behavior, breaking the rules that originally governed it. In this
                    state, normal inputs through the controller can be used to reprogram the game at runtime. Using this
                    exploit, the fiction of "Super Mario Bros." is annihilated completely and replaced with the fiction
                    of "The Legend of Zelda" by actively rewriting the former game's code to behave exactly like the
                    latter. This replacement allows the exploitation of three more arbitrary code execution exploits
                    chained in succession to replace this second game world with a third and fourth completely.
                </p>
                <p>
                    Stepping back from the technical details of this achievement, we can glimpse at something
                    unsettling. During the setup phase of the exploit, the player has internalized a complete model of
                    the <i>Super Mario Bros.</i> reality. Within this context, they know how to react to the world and
                    they know how the world will react back to them. When the setup gives way to the exploit itself, so
                    too does the familiar reality of one game give way to another. The original context that the player
                    has become accustomed to is annihilated and replaced with something alien. As a consequence, the
                    player's mental model of Mario's world, honed through all of their time spent within it, is
                    invalidated by an external force acting through the game system itself. The underlying structure of
                    this destruction of reality is not so different from what some of the the most disturbing works of
                    cognitive horror imagine happening to the mind: a coherent, internal world, built up over a
                    lifetime, rewritten from the outside through nothing more than a carefully crafted sequence of
                    inputs.
                </p>
                <WritingSection>Influencing Cognition in Fiction</WritingSection>
                <p>
                    For many of us, the capabilities of our minds are tied inexorably to our degree of identity. The
                    degradation of these capabilities is tantamount to the destruction of our senses of self. In
                    fiction, we are often drawn to the ideas that terrify us the most. Authors are well aware of this
                    sentiment and regularly leverage the allure of insanity to create compelling narrative devices.
                    Especially in the genres of cosmic horror and science fiction, losing one's mind is a common trope.
                    The sources of these cognitive influences are often magical and fantastical in nature. An ineffable
                    eldritch god or a mind-wiping pen do not require technical explanations or details to keep audiences
                    engaged with the story. These devices do not break the rules of their story's universe; they do not
                    fundamentally break the suspension of belief required for engaging with the story to begin with. Not
                    all mind-altering plots fit into this pattern, however.
                </p>
                <WritingSection level={2}>Cognitohazards</WritingSection>
                <p>
                    For some stories, the rules of their universe are the same rules as our own ... for the most part.
                    In these works of fiction, seemingly ordinary objects, ideas, or patterns of information present
                    real threats to the minds of their characters. To borrow the language of SCP, these can be
                    classified as <i>cognitohazards</i>: objects, ideas, or patterns that are hazardous for someone to
                    merely perceive. Additionally, fictional cognitohazards are often corrupted manifestations of
                    seemingly mundane objects; objects that we regularly interact with in reality. A play so beautiful
                    and compelling that it causes all who read it to believe they themselves are its actors, a book that
                    consumes the reader so thoroughly that they can no longer fathom their lives without it; a sound,
                    sight, or idea that was designed to arbitrarily influence the cognition of its target. In the same
                    manner with which cleverly designed inputs to a program can arbitrarily influence its execution, a
                    cleverly designed stimuli to a mind can arbitrarily influence its cognition.
                </p>
                <p>
                    <i>The King in Yellow</i> is a fictional play no different from any other, at least for its first
                    act. In the second act, the words of its script become so compelling, so beautiful, so terrifying
                    that all who read it inevitably find themselves gazing across the black waters of the Lake of Hali,
                    in Carcosa along with the characters of the cursed play. In Robert W. Chambers' book by the same
                    name in our reality, this book is not described as overtly magical. To the contrary, despite its
                    spellbinding influence, the character of the book regularly acknowledges that it was written by a
                    non-magical author. Merely a human who just so happened to string together a sequence of words which
                    exploited some fatal flaw in the human brain. This is in stark contrast with a similar
                    insanity-inducing book: Lovecraft's <i>Necronomicon</i>. This book is inseparable from the magical
                    Old Ones which are referenced throughout the Cthulhu mythos. Instead of the book's powerful
                    influence being derived from its contents alone, this ancient tome is only special due to its ties
                    to unknowable eldritch entities. The fictional author of <i>The King in Yellow</i> had no such ties
                    (at least not explicitly). Instead, the play is so dangerous because it is able to embed a specific
                    pattern of ideas and beliefs into its reader during its first act. During act two, the "payload",
                    for lack of a better word, is triggered. This is the point of no return for readers as they find
                    their conscious and unconscious thoughts subsumed by the play, its setting, and its characters. Of
                    particular interest is the mechanism of delivery for the play, regular words on regular sheets of
                    paper. No psychological preparation is needed for the play to affect a reader, its influence lies
                    entirely in the patterns of information that it imparts upon them. Despite this anthology being
                    first published in 1895, the mechanism with which the play exploits the minds of its readers is
                    shockingly similar to the mechanisms of modern arbitrary code execution: a sequence of deliberately
                    crafted inputs to coerce the target system into a specific state, then the execution of some payload
                    which exploits some subtlety in the patterns embedded in that system.
                </p>
                <p>
                    At the end of Ash Tree Lane, there is a {house}; a {house} that is bigger on the inside than on the
                    outside; a {house} that does not exist; a {house} that you cannot escape. Mark Z. Danielewski's
                    {House} of Leaves follows Johnny Truant after he discovers an essay which analyzes the nonexistent
                    documentary of a {house} that is not real. Starting off as nothing more than a curiosity, Johnny
                    becomes engrossed in the essay the more he reads, becoming more and more detached from reality. The
                    author of the text, a blind man known as Zampanò, himself became consumed by his work, eventually
                    dying of unknown causes and leaving Johnny to find his collection of scattered notes and
                    manuscripts. As Johnny reads what Zampanò wrote, the {house} progressively leaks into Johnny's
                    reality. By merely reading the pattern of information that is contained within the manuscript,
                    Johnny's reality becomes meshed with Zampanò's and Will Navidson's, the subject of the{" "}
                    <i>Navidson Record</i> documentary. On its surface, the effects of Zampanò's work appear to be
                    impacting reality, as evidenced by deep gouges in Zampanò's apartment floor and scratches appearing
                    on Johnny himself. However, the entire book is presented as a compilation of Johnny's own notes on
                    Zampanò's work. All of his supplementary footnotes are from Johnny's perspective, rather than an
                    objective representation of reality. The {house} is not corrupting Johnny's reality, it is
                    corrupting his <i>perception</i> of reality.
                </p>
                <p>
                    Just as readers of <i>The King in Yellow</i> imagined themselves embedded within Carcosa, so too
                    does Johnny perceive himself as embedded within the reality of the {house} on Ash Tree Lane. While
                    Johnny himself is shown to have struggled with his own mental state in general, the effect of
                    Zampanò's work also appears to have impacted Zampanò himself. As he dictated his analysis of a film
                    that did not exist, he too was impacted by it. After his disappearance, Johnny found the windows of
                    Zampanò's apartment to be nailed shut, the vents taped, and the door secured with many locks. During
                    Johnny's decline in mental state, his apartment begins to look substantially similar as he fights to
                    keep the outside world from seeping into his reality. Without any external driver, the patterns of
                    words contained within Zampanò's notes influence the cognition of its readers to behave in similar
                    ways. Johnny's behavior as he is continually exposed to Zampanò's writings reveals another
                    interesting property it possesses: the manner in which it can influence someone's cognition is{" "}
                    <i>general</i>. Johnny and Zampanò did not have any close relationship or even behavioral patterns
                    before Johnny begins his study of Will Navidson and his {house}. Despite this, their behaviors begin
                    to slowly converge by the sole virtue of the specific configuration of the text.
                </p>
                <p>
                    While intriguing in a conceptual sense, purely textual examples of arbitrary cognitive execution
                    seem fairly unrealistic. While the written word has the powerful ability of persuasive influence,
                    this is far from truly arbitrary in reality. The meaning or message of a piece of text may have
                    greatly different impacts on different people. Consider a text which argues that an approach
                    formulated only with observations and statistics is ideal for addressing social issues. This text
                    may appear quite compelling and rational to a utilitarian, but incomplete and naive to a humanist.
                    Communicating a pattern of ideas to someone through text inherently means condensing those
                    information rich and complex ideas into information sparse text, leaving the reader to restore that
                    richness by filling in the information that the text lacks. Again consider the utilitarian text from
                    a moment ago. To formulate the text, the author drew upon their personal knowledge, information rich
                    life experiences, and reasoning in order to craft a compelling argument. The highly expressive
                    internal representation of the author's argument then needed to be compressed down into text for
                    distribution. Text cannot fully and concisely capture the full state of the author's mind, so much
                    of the richness in the author's internal argument is lost. Upon someone reading the text, they
                    attempt to restore the argument to full fidelity by supplementing the raw text with their own
                    knowledge, experiences, and reasoning. The supplemental information of the reader, however, is
                    different from that of the author, leading to the text having a different impact on the reader as it
                    would on the author. In order to more realistically and losslessly convey an author's (or
                    attacker's) message, we need to consider mediums of transmission beyond merely textual.
                </p>
                <FigureImage src={"/media/image/pages/writings/on-arbitrary-cognitive-execution/plaything.png"}>
                    The Circular Glyph from <i>Black Mirror</i>'s <i>Plaything</i>.
                </FigureImage>
                <p>
                    Season 7, episode 4 of the sci-fi horror series <i>Black Mirror</i> takes this approach when
                    considering a mechanism for cognitive influence. The episode, titled <i>Plaything</i> is centered on
                    Cameron Walker, a former video game journalist in the present year 2034 as he recounts his 1990s
                    journalistic work. After being assigned to review the life simulation game <i>Thronglets</i>, he
                    soon becomes obsessed with the ever-evolving creatures that it simulates. Over time, he begins to
                    believe that the creatures in the game are communicating with him. They tell him to collect
                    electronic parts to use for upgrading his computer. Over time, the simulation, and the creatures
                    which inhabit it grow in capability and intelligence thanks to these added computing resources.
                    Cameron continually grows his computer's collection of hardware for forty years until he is arrested
                    for shoplifting and on suspicion of a murder he committed shortly after receiving the game. For the
                    purposes of our discussion, however, the majority of the episode is set dressing as the most
                    substantive scene is the episode's very last. After confessing to his crimes in the interrogation
                    room, he requests a pen and paper. Using these, he draws a specific circular glyph. Once finished,
                    he holds it up to the room's security camera. Exploiting some vulnerability within the camera's
                    image recognition software, Cameron's attack
                    <Footnote>
                        I use the term "Cameron's attack" here instead of simply "Cameron" directly because he did not
                        design the attack himself. By this point in 2034, Cameron has allowed the <i>Thronglets</i> to
                        cohabitate his brain directly. From here, these creatures were the ones who designed the glyph
                        and the subsequent patterns of sound played to the state's inhabitants.
                    </Footnote>{" "}
                    gains control of the state's emergency alert system (EAS). Once this control is established, the
                    payload is delivered: every speaker in the vicinity begins to play an extremely loud, computerized
                    tone. All who hear this tone immediately fall unconscious. In the context of the episode, this is
                    implied to grant the <i>Thronglets</i> control over all who were exploited.
                </p>
                <p>
                    While other episodes in <i>Black Mirror</i> deal with mind control or behavioral influence,{" "}
                    <i>Plaything</i> is the only one to pair these cognitive exploits with software exploits as well.
                    Here, humans are nothing more than the payload recipients at the end of a complex attack chain.
                    First, the glyph performs a traditional software exploit on the state-wide EAS system, granting
                    Cameron's attack arbitrary control over the system's execution. Next, this arbitrary control is used
                    to play back a very specific sequence of sounds. These sounds exploit some unexplained vulnerability
                    within the brains of all those who hear it, granting the <i>Thronglets</i> arbitrary control over
                    their cognitive state. In contrast to text, the full spectrum of human audio input offers a much
                    more high fidelity medium of enabling an attack. The volume of the sound also allows it to overpower
                    all other auditory stimuli. Presumably, this reduction in noise, allows the brain to process the
                    incoming inputs in the manner required for the attack to succeed. Of course, sounds can modify the
                    behavior of people outside of a sci-fi setting. For example, a fire alarm modifies our behavior away
                    from what we were doing previously and to moving towards the nearest exit. However, real-life sounds
                    are limited in their ability to modify our behavior and in their sensitivity to context. To use the
                    alarm example, it can really only influence a single behavior and even then in a very coarse manner:
                    it cannot control someone's exact path or speed. Additionally, sounds are also context-sensitive:
                    the administrator of a fire drill stays to complete the drill instead of exiting, even though they
                    hear the exact same sound. The differentiator between the <i>Thronglets</i>' attack and a more
                    mundane sound is that it is both general and context-free. General in the sense that it can
                    completely overwrite a person's entire cognitive state and context-free as its effects are invariant
                    across many different people
                    <Footnote>
                        The "context" here being the natural cognitive states of affected people. Different people
                        inherently have different cognitive states due to their internal brain structures and life
                        experiences. A "context-free" attack succeeds to manipulate the internal structure of a human
                        brain irrespective of its previous state. For an analogy, the same arbitrary code execution
                        exploit can impact different copies of a program running on CPUs with different micro
                        architectures.
                    </Footnote>
                    .
                </p>
                <WritingSection level={2}>Memetics</WritingSection>
                <p>
                    Taking a step back, how can we think of both arbitrary code execution and arbitrary cognitive
                    execution more generally? Both are end-goals of attempts to exploit some target system, electronic
                    or organic. Why the need for exploitation, though? If the target system is general enough to allow
                    for arbitrary execution in the first place, why could an exploiter not simply direct the system to
                    accomplish their goals from the outset? The answer lies in patterns of execution. Suppose an
                    operating system is running a shell that a user can interact with. Given sufficient permissions,
                    this shell allows a user to input a program which can arbitrarily control which instructions the CPU
                    executes
                    <Footnote>
                        On a Unix system, this shell would also need to be running as a kernel-level process to have
                        access to certain protected system calls or system instructions.
                    </Footnote>
                    . Why is this possible through this shell program when it is not through, for example, a
                    word-processor? The answer lies in patterns of execution. When running the shell program, the system
                    already has a pattern of instructions loaded into memory which is specifically designed to give the
                    user low-level control over itself. When running a word-processor, the system's memory contains a
                    different pattern of instructions which is not designed to enable low-level user control. The state
                    of a system, rather than anything intrinsic to the system itself, makes it susceptible (or immune)
                    to low-level control through certain patterns of input.
                </p>
                <p>
                    In works of fiction, the human brain is assumed to function in a similar fashion. By default, the
                    patterns of neuronal interactions present in the brain are not set up in a manner that enables
                    inputs to arbitrarily influence cognition. Authors often implicitly recognize this through how they
                    set up the rules of their stories. Especially for stories set in realities very similar to our own,
                    an actor likely cannot simply walk up to someone else and command them to carry out that actor's
                    goals. Even when this is the case, the effect of the actor is limited in generality. For example,
                    commands from a parent or supervisor are only effective if the state of the target's mind already
                    contains patterns matching those of a child or a subordinate. Instead, in a similar fashion to
                    software, some setup is required. The patterns present in a target brain must be modified into those
                    which are more amenable to control. Readers of <i>The King in Yellow</i>'s second act are more
                    likely to assimilate if they had already been primed by the first act. Johnny Truant and Zampanò
                    went mad only after extended exposure to the {house} on Ash Tree Lane. The <i>Thronglets</i> could
                    only exert their influence over humans after they had been primed by their sonic exploit. These
                    primers coerce their target into a state more susceptible to control through the subtle modification
                    of the patterns internal to their brains.
                </p>
                <p>
                    Traditionally, <i>memetics</i> is the study of cultural memes
                    <Footnote>Originally coined by biologist Richard Dawkins</Footnote> and how they evolve and spread
                    among different groups of people. Framing this in the language of patterns and states, memetics can
                    be thought of as the study of patterns of cognition: how they form, replicate, and spread. When a
                    meme is transmitted, it modifies the mental patterns of the receiver by grafting a small portion of
                    the sender's state of mind onto that of the receiver. In reality, memes can already have incredibly
                    potent coercive effects on those exposed to them: cultural traditions, religions, economic systems,
                    or scientific theories exert significant influence over how we think and interact with others.
                    Particularly compelling memes can even spread from person to person in the same manner as biological
                    or computer viruses
                    <Footnote>
                        This is most notably explored by Richard Dawkins in his essay "Viruses of the Mind".
                    </Footnote>
                    . This idea is often taken to its logical extremes in fiction, such as in the collaborative works of
                    the <i>SCP Foundation</i>. While in reality, memes alone can moderately and conditionally influence
                    the patterns represented in an individual mind, in this fiction memes can generally and
                    unconditionally modify the internal states of all those exposed to them. These fictional memes are
                    able to exploit patterns in how the mind normally operates to overwrite those existing patterns
                    arbitrarily. In <i>Introductory Antimemetics</i>
                    <Footnote>
                        Later adapted into the novel <i> There Is No Antimemetics Division</i>.
                    </Footnote>
                    , a short story by qntm (Sam Hughes), a memetic virus is the driver of the main conflict. In this
                    context, a memetic virus is an idea that can spread by someone merely becoming aware of its
                    existence. Spread can be direct, as through conversation with an "infected" host, or indirect, as
                    through a text describing the meme itself. In this story, the infectious idea refers to itself as
                    Alastair Grey. Grey is what is known as an <i>Antimemetic kill agent</i>, a meme which destroys
                    information instead of spreading it. While standard memes modify the patterns of their host's
                    cognition in order to impart those same patterns onto others, the main effect of antimemetic memes
                    <Footnote>Somewhat of an oxymoron.</Footnote> is to destroy the existing patterns of a victim's
                    cognition, rather than merely modifying them. These kill agents actively overwrite the memories,
                    personality, and reasoning of their host while passively spreading through exposure to already
                    infected hosts or even mere descriptions. Importantly, Grey does not exist in the physical world, it
                    is not sentient. Grey is merely an idea that replicated within the mind before eventually consuming
                    and destroying it.
                </p>
                <p>
                    There is no external force directing a host's mind to self-destruct; the mind does it on its own,
                    replicating the memetic patterns that have infected it. The naive cognitive machinery within the
                    brain continues to replicate patterns as it normally would, unaware that these new patterns are
                    foreign to their host. This cognitive form of exploitation, if it can exist at all, would mirror
                    what we have already seen in other machines: computer viruses manipulating the operating system into
                    spawning new viral processes, RNA viruses feeding a cell's existing replication machinery
                    instructions to produce viral genetic material instead of its own. For this parallel to hold, the
                    brain must indeed function as an analogous pattern replication device in reality, not merely as a
                    metaphor. Whether it does is the question to which we now turn.
                </p>
                <WritingSection>Cognition as Pattern Replication</WritingSection>
                <p>
                    As we have seen, traditional computing devices can be vulnerable to a variety of exploits which rely
                    upon specific logical and hardware vulnerabilities. Generally, this takes the form of manipulating
                    an uncompromised system into executing and replicating patterns of malicious data, rather than the
                    patterns of data that it normally would. In fiction, we have also seen many examples of the brain
                    being exploited in a simular manner. Though, the reader is never given an exact schema for
                    performing such exploits, the story merely conjectures that they may be possible. What if the brain
                    really does harbor such hidden vulnerabilities? Now, our investigation turns to whether the human
                    brain may actually function similarly to a computing device which could be exploited in a manner
                    just as real as the vulnerabilities which we had examined earlier. This section will be dedicated to
                    substantiating and contextualizing this concept. Proximately, we will investigate the qualities of
                    exploitable computers and how the brain may exhibit such qualities naturally, in order to ultimately
                    understand how it could be exploited artificially.
                </p>
                <WritingSection level={2}>Cognition as Computation</WritingSection>
                <p>
                    The first step in pursuing this line of inquiry is to first ask whether the human brain is, at least
                    to some extent, a computing device at all. Only then can we know which potentially exploitable
                    qualities to look for in the brain. To answer this question, we must first define what a "computing
                    device" actually is and why it is exploitable to begin with. I have previously approached this from
                    the high-level angle of simulating Turing machines in my work{" "}
                    <Link
                        href={"https://matthewpisano.com/works/writings/on-general-transformers"}
                        target="_blank"
                        rel="noopener noreferrer">
                        On Generally Intelligent Transformers
                    </Link>
                    , but we can arrive at a more precisely scoped definition by asking which behaviors we expect a
                    computing device to express.
                </p>
                <p>
                    Chiefly, we would like our computing systems to be useful. To extract useful computations, we need a
                    system with a well-defined interface for input and output. A system which could take input at any
                    point and give output at any point is less of a device and more of an exposition of raw physical
                    laws. The restriction of manner and format of input and output greatly simplifies the design process
                    and eliminates ambiguity. We also want our computing device to transform patterns of input
                    information into different patterns of output information. A system which always echoes its input as
                    output does not add any information of its own and is therefore not very useful. This manipulation
                    must be predictable, though not necessarily deterministic. The use case of a computing device is to
                    add meaningful
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
                    class of configurations: itself. A cooling cup of tea cannot, for instance, be tuned into modeling
                    another system, such as cooling cup of coffee, without being irreversibly turned into that system.
                    In contrast, what we commonly consider to be computing devices can simulate a game of chess, a
                    webpage, or both. While we like for computing devices to be general, they do not necessarily need to
                    be Turing complete. For example, Programmable Logic Arrays and certain off-chip accelerators are
                    generally considered to be "computing devices" but are not themselves Turing complete
                    <Footnote>
                        In a similar vein was the Soviet <i>Turnir</i> (Турнир) console released in 1978. Unlike
                        contemporary home consoles like the Atari 2600 or the Magnavox Odyssey which could play a
                        variety of games, the Turnir could only play one. Unlike the Atari's general-purpose MOS 6507,
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
                    We can conceptualize a computing device as: any bounded system which takes in patterns of
                    information as input, manipulates this information in a predictable manner, dependent on a limited,
                    task-oriented internal configuration, and outputs different patterns of information.
                </p>
                <p>
                    Using this definition, we can more precisely define why some degree of low level vulnerability is
                    inherent to traditional computing devices. Computing devices are bounded, therefore they cannot have
                    perfect knowledge. If a computing device could have perfect knowledge of a system, it must enclose
                    that system itself. Limited patterns of input and output mean that the system has an internal state,
                    isolated from its environment. The consequences of a sequence of input patterns can accumulate over
                    time, resulting in non-trivial output patterns. If there was no internal state, there would be
                    nothing to carry over and add complexity to the output. Finally, computing devices manipulate
                    information in a predictable manner through internal transformations which are limited in scope. In
                    order to accomplish some goal, a user must describe their goal in the terms of these limited
                    transformations, losing information in the process. If the device had limitless capabilities for
                    transformation, it could translate the input into the desired output in a single step. Therefore, a
                    computing device cannot have perfect knowledge of a user's goals to begin with, any inputs it takes
                    must pass through an internal state under only the assumption of integrity, and goals must suffer
                    some information loss as they are translated into transformations that the device interprets without
                    the user's internal context. These limits in information and capability greatly increase the
                    likelihood that the device may deviate from the user's lossless representation of their goal,
                    through its pursuit of its lossy representation of that same goal.
                </p>
                <p>
                    This definition, and the limitations inherent to it, encapsulates classical and quantum computers in
                    general, along with specialized systems such as artificial or even biological neural networks. Most
                    importantly, this definition gives us a way to not only describe how a system behaves normally, but
                    also how it could be exploited to behave abnormally.
                </p>
                <WritingSection level={2}>Local Patterns with Glocal Consequences</WritingSection>
                <p>
                    We know that the brain takes in well defined patterns of input and yields well defined patterns of
                    output. We also know that these inputs are processed into outputs through the internal state of our
                    brain's neurons and their connections. What is less certain is whether we can interpret the complex
                    interactions between these neurons as predictable, impersonal, low level patterns that emergently
                    form into the much higher-level patterns that we can directly observe. First, we will examine how
                    low level patterns within the brain can directly influence higher level ones. Then, we can examine
                    whether those low level patterns behave in a predictable and modelable manner. Finally, we will see
                    how predictable, yet unique, low level patterns in one person's brain generalize to higher level
                    patterns, common across individuals.
                </p>
                <p>
                    We know that, in a high-level and abstract sense, our brains replicate both innate and learned
                    patterns. Regular patterns of neural signals in our innate hindbrains help to regulate our
                    heartbeat, breathing, and digestion, along with maintaining our balance and coordinating our
                    movements. We can observe these patterns through measuring nerve impulses and electrical activity in
                    our nerves. We even have the technology to replicate or relay these patterns, as in the cases of
                    pacemakers or neural prostheses. For learned patterns, we often replicate the behavior of other
                    humans through <i>observational learning</i>
                    <Footnote>
                        See{" "}
                        <Link
                            href={
                                "https://www.semanticscholar.org/paper/Social-Foundations-of-Thought-and-Action-Bandura/78c6775fccdbbed66f823dae2cfa01570ecb3c05"
                            }
                            target="_blank"
                            rel="noopener noreferrer">
                            Social foundations of thought and action (Bandura 1986)
                        </Link>{" "}
                        and{" "}
                        <Link
                            href={"https://pmc.ncbi.nlm.nih.gov/articles/PMC3139552/"}
                            target="_blank"
                            rel="noopener noreferrer">
                            Understanding Observational Learning: An Interbehavioral Approach (Fryling et al. 2011)
                        </Link>
                        .
                    </Footnote>
                    , a very high-level phenomenon. For these much more complex patterns, their relation to the
                    low-level patterns of neurons or neuron clusters is less clear. If you where to show a modern
                    language model to someone from the nineteenth century, would they be able to deduce that the
                    high-level patterns in the model's responses were all emergent from patterns of predictable,
                    low-level instructions? Likely not, which is why this idea applied to the brain may feel
                    unintuitive: while neurons do indeed fire based on the firings of their neighbors, this would appear
                    to be a local association, rather than a pattern that also propagates up to a more general scale.
                    However, as we will see, these locally replicated patterns can easily cause cascades which impact
                    the brain on a global scale.
                </p>
                <p>
                    On soon after 7:00 PM, on December 16, 1997, hundreds of children all across Japan began showing up
                    to hospitals complaining of blurred vision, headaches, dizziness, and nausea. Many of them presented
                    to emergency rooms unconscious, seizing, or convulsing. The root causes of this incident occurred
                    simultaneously across multiple prefectures at precisely 6:51:34 PM. The culprit was the victims'
                    television sets as they played the 38th episode of the Pokémon animated series. 21 minutes into the
                    broadcast, several explosions were depicted by rapidly strobing frames of red and blue lights. These
                    lights, flickering at 12Hz, remained on-screen for only four seconds. The mere observation of this
                    scene was enough to send 600 people to their local emergency rooms. How could a simple series of
                    visual inputs cause such catastrophic consequences for these people's brains? Victims of the show
                    suffered from photosensitive epilepsy, meaning that their brains were more prone to seizures from
                    rapidly flashing visuals. While the exact mechanism is poorly understood, we do know that extremely
                    regular and intense signals coming from the visual cortex can cause receiving neurons to also fire
                    with a similar regular pattern pattern
                    <Footnote>
                        <Link href={"https://doi.org/10.1002/ana.24570"}>
                            Activation of specific neuronal networks leads to different seizure onset types (Shiri et
                            al. 2015)
                        </Link>
                        ,
                        <Link href={"https://visualstress.info/1979-15.pdf"}>
                            Neurophysiological Aspects of Pattern-sensitive Epilepsy (Wilkins et al. 1979)
                        </Link>
                        ,<Link href={"https://epilepsynl.com/photosensitive-epilepsy/"}>Photosensitive Epilepsy</Link>
                    </Footnote>
                    . These patterns of activation, for reasons not fully understood, rapidly begin replicating those
                    patterns across the brain until a general threshold of activation has been reached. at this point,
                    the brain can no longer maintain its patterns of regular function and seizes. In these seizures,
                    simple, low-level patterns can reliably cascade into much more global patterns.
                </p>
                <p>
                    Similar to the row hammer vulnerability in traditional computers, repeated patterns of activation
                    locally can impact the state of the system more globally. The direct impact is much more potent in
                    the case of the brain, as the damaging pattern does not just impact one bit at a time within a
                    global state, but self-replicates until it has overridden the patterns of activation that would
                    usually occur within the brain. In this sense, seizures have internal effects very similar to a
                    memetic virus, with the main difference being that the replacing patterns are chaotic and high
                    entropy instead of regular and low entropy.
                </p>
                <WritingSection level={2}>The Stability and Predictability of Neural Patterns</WritingSection>
                <p>
                    Another important quality of exploitable systems is that they are stable and predictable. Even if
                    the specific behavior of the system is complex and stochastic at higher level patterns, it may still
                    be vulnerable if its lowest level behavior is largely predictable.
                </p>
                <p>
                    While many of the aforementioned computer vulnerabilities rely on specific memory layouts, buffer
                    overflows for instance, others are more flexible with respect to exact memory layouts. Consider the
                    common security mitigation of Address Space Layout Randomization (ASLR). This is an operating system
                    level technique which randomizes the positions of program memory segments. This would defeat simple
                    attacks such as a buffer overflow forcing the program counter to jump to a specific data address,
                    but not against some sophisticated attacks, like Spectre. As we recall from earlier, this attack
                    does not depend on specific memory addresses or even specific instruction orders. It dynamically
                    trains the CPU's branch predictor to force it to speculatively execute code which can be retrieved
                    through cache side channels. This type of attack does not require the higher level patterns of
                    execution to be predictable, it only needs the lowest level of instruction and CPU logic to remain
                    stable
                    <Footnote>
                        In fact, this is why Spectre is so difficult to mitigate. When working on the first patches for
                        the vulnerability, processor vendors could not fully rely upon the operating systems to handle
                        protection for them. Instead, they needed to modify the fundamental behavior of their CPU
                        microcode in concert with OS patches.
                    </Footnote>
                    .
                </p>
                <p>
                    Now let us consider whether the human brain meets the required level of stability and predictability
                    needed to potentially harbor similar vulnerabilities. We will need to consider the potential
                    predictability of the brain on two levels: on the level of individual neurons and on the level of
                    neuronal clusters. Before doing so, however, it is important to better understand how real neurons
                    actually behave.
                </p>
                <p>
                    For those coming in with a background in computer science or artificial intelligence, it is tempting
                    to apply the simplified model of the perceptron. These perceptrons are idealized structures which
                    behave very roughly like biological neurons, firing based on a biased synthesis of inputs in the
                    following manner:{" "}
                    <Latex>{`$f(x_0, \\dots, x_n) = \\sigma [~\\sum_{i=0}^{n} (w_i x_i) + b~]$`}</Latex> where{" "}
                    <Latex>{`$\\sigma[\\cdot]$`}</Latex> is some non-linear activation function such as the step
                    function, <i>sigmoid</i>, <i>tanh</i>, or others. Unlike real neurons, this provides a deterministic
                    and simple view of artificial neuronal dynamics. A neuron fires with a strength relative to the
                    summed strength of its inputs, after being biased and sent through a non-linear (and generally
                    monotonic
                    <Footnote>
                        To be precise, there, in fact, several common activation functions that are not technically
                        monotonic (like SiLU, or GELU), but those only have a small decrease before their unbounded
                        segments.
                    </Footnote>
                    ) function. Biological neurons, however, are much more complex. These cells operate based on
                    physical packets of chemicals and their own complex internal configuration.
                </p>
                <p>
                    To get a better sense in the complexity of biological neurons, I will share a simplified version of
                    the firing process here. Like artificial neurons, it approximately starts with connections to other
                    neurons. As a neuron's neighbors fire, they send electrical signals down long, thin, and myelinated
                    <Footnote>
                        A fatty coating that helps to preserve electrical signal, like the non-conductive jacket of a
                        copper wire.
                    </Footnote>{" "}
                    fibers called axons. These electrical signals, or action potentials, are propagated through the
                    movement of positive sodium ions. At the end of each axon are many terminals which contain calcium
                    channels. Naturally, these terminals are slightly negative, so the incoming wave of positive sodium
                    ions changes the charge on the inside of the channels, forcing them open. Once these channels are
                    open, calcium ions rush into the terminal from the cell. these ions then bind to sensor proteins on
                    the terminal's synaptic vesicles, storage sacs for neurotransmitters. These vesicles then move
                    toward and fuse with the terminal membrane, releasing their neurotransmitter payload into the
                    synapse between neurons. These chemicals from a neighboring neuron bind to receptors on the
                    dendrites of another. This connection opens channels in the receiving neuron, causing sodium or
                    chloride ions to rush in. The sum of all incoming exciting sodium (and inhibiting chloride) flows to
                    the neuron's hillock, the place where its own axon begins. The positive and negative charges from
                    the sodium and chloride ions partially cancel out. If the summed voltage from the ions meets the
                    cell's threshold, sodium channels open and travel down the neuron's axon, beginning the process
                    again. However, this process cannot begin immediately after within the same cell. This is known as
                    the refactory period and generally takes two to five milliseconds. It must first take time to
                    replenish lost molecules and neutralize its internal charge. And this is a <i>brief</i> summary.
                </p>
                <FigureImage src={"/media/image/pages/writings/on-arbitrary-cognitive-execution/neuron-potential.png"}>
                    The threshold potential or a firing neuron.
                </FigureImage>
                <p>
                    Additionally, biological neurons do not transmit a single category of signal like artificial ones
                    do. There are over 100 distinct neurotransmitters that neurons could potentially release, but in
                    reality most neurons release only one neurotransmitter type, though some may co-transmit a secondary
                    signal. Another complexity is that the signal traveling down an axon is not solely a product of that
                    neuron's dendritic signals. It may be electrically influenced by nearby, but unconnected, neurons
                    through ephaptic coupling. Interestingly, this coupling may serve to correlate firing patterns of
                    nearby neurons, as is potentially the case in seizures
                    <Footnote>
                        See{" "}
                        <Link href={"https://pubmed.ncbi.nlm.nih.gov/33979453/"}>
                            Neural recruitment by ephaptic coupling in epilepsy (Shivacharan et al. 2021).
                        </Link>
                    </Footnote>
                    .
                </p>
                <p>
                    Generally, the result of this complex series of processes is somewhat stochastic. A neuron may not
                    fire in the same manner with the same intensity between different cycles of excitement of upstream
                    neurons, even of those neurons all fire in the same pattern. For instance, the concentration of free
                    ions may be different from one activation to another or the exact quantities of neurotransmitter
                    molecules may vary. However, at the level of larger neuronal clusters, this stochastic behavior can
                    be modeled by a predictable probability distribution, as Harrison et al. show in their 2005 analysis
                    of neuronal dynamics
                    <Footnote>
                        See{" "}
                        <Link href={"https://pmc.ncbi.nlm.nih.gov/articles/PMC1854931/"}>
                            Stochastic models of neuronal dynamics (Harrison et al. 2005).
                        </Link>
                    </Footnote>
                    . Their work proposed a more complex and stochastic mathematical model of neurons and their
                    clusters. By treating randomness itself as a parameter, instead of as Poisson-distributed parameters
                    individually, they are able to model the event-related potentials of many neurons as solutions to a
                    stochastic differential equation. To find candidate solutions to this equation, they use the
                    Fokker-Plank equation
                    <Footnote>
                        As evidenced by the "Plank" in this equation's name, it often shows up in statistical and
                        quantum mechanical models.
                    </Footnote>
                    , a partial differential equation which describes the evolution of a probability density function
                    over time. Using these solutions, the stochastic differential equation can instead be modeled as a
                    deterministic and dynamic equation. Using their approximation, the behavior of groups of neurons can
                    be modeled by treating action potentials as always having a non-zero probability, rather than
                    enumerating their noisy voltages directly.
                </p>
                <p>
                    While brain activity on the order of entire cortical regions may be complex and difficult to model,
                    lower levels of neural processes on the order of neuronal clusters can be modeled predictably.
                    Though our micro-level understanding does not translate to full understanding on the meso- or
                    macro-levels, this higher level of understanding is not required for our current exploration. What
                    does matter is that the lowest levels of neural architecture can be predictably modeled and smoothly
                    vary in the presence of noise. This appears to fit our aforementioned requirement of stability and
                    predictability with respect to a systems potential for exploitation. As is the case with the Spectre
                    class of vulnerability, as long as a systems lower levels can be modeled predictably, a
                    vulnerability may still exist even if its highest levels of abstraction are too complex to neatly
                    model.
                </p>
                <WritingSection level={2}>Common Representations Across Minds</WritingSection>
                <p>
                    While individual brains are similar in terms of overall structure, they vary greatly in terms of low
                    level activity. Even if two brains are contemplating the exact same subject or processing the exact
                    same stimuli, there is no way to cleanly map specific neurons and activity patterns from one brain
                    directly onto another. To make an analogy to traditional computers, this would be like attempting to
                    match up the individual voltages across the transistor between two different CPUs. Zooming out,
                    however, we see that common patterns emerge. Between CPUs of the same architecture, those
                    innumerable voltage patterns emerge into much more regular patterns on the instruction level.
                    Similarly, though the individual action potentials across neurons may differ greatly between
                    individuals, the overall patterns of cognition that they yield are substantially similar.
                </p>
                <p>
                    The problem of measuring similarities in neural activation patterns shows up frequently in the
                    context of neural imaging. When parsing through an fMRI scan, for example, doctors and researchers
                    must be able to properly interpret patterns of activation in terms of patent behavior. The problem
                    is: how can we be sure that the patterns of activation in one patient's brain cleanly map to similar
                    patterns in another when exposed to the same stimuli? A large body of work in this field has
                    concentrated on the level of neurons or neuronal groups. This appears sensible, in order to verify
                    similarities between high level patterns, one may first examine lower levels and extrapolate.
                    However, as we have seen, these low level patterns are stochastic and noisy, even if they can
                    theoretically be modeled. These is often very little similarity between individuals at this level of
                    abstraction. Instead, what if similarities were measured at higher level of abstractions, leaving
                    neuronal activity as essentially an implementation detail. This is the approach used by Raizada and
                    Connolly in their 2012 study of cross-subject fMRI decoding
                    <Footnote>
                        See{" "}
                        <Link href={"https://rajeevraizada.github.io/papers/RaizadaConnolly_JoCN_2012.pdf"}>
                            What Makes Different People's Representations Alike: Neural Similarity Space Solves the
                            Problem of Across-subject fMRI Decoding (Raizada and Connolly 2012).
                        </Link>
                    </Footnote>
                    . For their study, they use a dataset of fMRI scans of subjects' ventral temporal cortices, a region
                    of the brain located on the bottom of the temporal lobe which is responsible for processing abstract
                    visual information. The scans in the dataset are broken down into voxels, 3D regions which serve as
                    the smallest resolution of measurement. They begin by measuring the spatial correlation between
                    active voxels when a subject is shown a particular stimuli, a face versus a cat versus a house, etc.
                    The relative values of spatial similarity induced by image stimuli then form a "similarity space" of
                    mental representations. They then measure the voxel spatial correlation for another subject upon
                    being shown the same set of images. They find, at the high level of voxel spatial correlation, that
                    different individuals have substantially similar representations of the same objects. In other
                    words, when shown a picture of a face, cat, house, etc. both subject's brains exhibit similar high
                    level patterns of activation relative to other images in the set. While the exact values of voxels
                    are different and the specific sets of neurons involved are disjoint, the subjects share the same
                    structure of relationships between different concepts.
                </p>
                <p>
                    Not only are these patterns similar across individuals, but they can also be manipulated to induce
                    similar cognitive effects. In a 2010 study on the impacts of transcranial magnetic stimulation (TMS)
                    on moral judgements, Young et al.
                    <Footnote>
                        See{" "}
                        <Link href={"https://www.pnas.org/doi/10.1073/pnas.0914826107"}>
                            Disruption of the right temporoparietal junction with transcranial magnetic stimulation
                            reduces the role of beliefs in moral judgments (Young et al. 2010).
                        </Link>
                    </Footnote>{" "}
                    finds that TMS can be used to disrupt the regions of the brain usually responsible for moral
                    reasoning and empathy. Im particular, they target the right temporoparietal junction (rTPJ) with
                    their disruptions. They performed two main experiments: disrupting neural activity in the rTPJ right
                    before and during the subject's moral judgement of a scenario. For example,
                </p>
                <blockquote>
                    Grace and her friend are taking a tour of a chemical plant. When Grace goes over to the coffee
                    machine to pour some coffee, Grace's friend asks for some sugar in hers. The white powder by the
                    coffee is just regular sugar. Because the substance is in a container marked "toxic", Grace thinks
                    that it is toxic. Grace puts the substance in her friend's coffee. Her friend drinks the coffee and
                    is fine.
                </blockquote>
                <p>
                    In this scenario, Grace believes the powder to be poison and tries to dose her friend, even though
                    it is plain sugar. On a scale of "permissible" to "forbidden", study participants were likely to
                    rate Grace's actions as strongly forbidden. The control subjects were focused on Grace's belief that
                    she was willingly poisoning her friend. However, upon rTPJ disruption, participants were more likely
                    to rate Grace's actions are more permissible. These subjects were more focused on the fact that the
                    power was just sugar and less on what Grace believed the powder to be. In this study, many different
                    brains were measured, each with different neural activations on a low level. However, the higher
                    level patterns that these activations represented were similar between subjects. So similar, in
                    fact, that those patterns could be reliably manipulated to produce similar outward effects (namely,
                    inhibiting the subjects' consideration of a character's internal beliefs in a moral judgement).
                </p>
                <p>
                    If our brains share similar internal patterns for representing similar concepts, how do they acquire
                    those shared patterns to begin with. There are likely two major sources of this similarity. Most
                    obviously, even though our brains differ greatly at low levels, they all still share the same
                    overall architecture. We all share the same brain regions in approximately the same places thanks to
                    their encoding in our shared genetics. The generic nature of our brains' organization allows for
                    different brains to exhibit similar patterns of activity, representing some common concept. Less
                    obvious is how we require the common concepts required to form these shared representations.
                </p>
                <p>
                    Across the animal kingdom, having a brain comprised of basic neurons is not an uncommon occurrence.
                    All vertebrates, and many invertebrates, have body plans with one (or more) bundles of neurons
                    serving as axes for other nerves spread throughout the body. However, these is a special type of
                    neuron that we have only found in a small subset of all animal species. It appears in many primates,
                    including humans, mice, and certain species of birds: all highly social and communicative species.
                    These are known as mirror neurons. These cells are notable because they fire and reinforce
                    themselves upon exposure to only very specific signals. They fire when they see another member of
                    its species perform some action <i>and</i> when the individual it is in performs a similar action.
                    In short, these neurons help us to directly learn from others and copy what they are thinking. They
                    do not fire in any special manner or output any unique neurotransmitters, what makes them unique is
                    their ability to mimic the internal patterns of activation present in another's brain.
                </p>
                <p>
                    In humans, these mirror neurons have been found in motor control areas of our brain, sensory
                    processing areas, and areas responsible for language processing. While the exact nature and scope of
                    mirror neurons' impact on our behavior is debated, we do have a good understanding of what behaviors
                    they likely play an important role in. Since these mirror neurons fire when someone else performs an
                    action (and therefore when their mirror neurons fire as well), they are useful for learning and
                    mimicry. When a parent looks at an infant and makes different expressions, the infant will often
                    mirror those expressions. Here, not only are the simple motor actions being transmitted from parent
                    to infant, the internal representations of those actions are as well. Adults in a good mood may
                    smile at an infant, causing them to smile and raise their own mood
                    <Footnote>
                        See{" "}
                        <Link href={"https://osf.io/preprints/psyarxiv/3sa8w_v1"}>
                            Infants track patterns of emotion transitions in the home (Nencheva et al. 2024).
                        </Link>{" "}
                        and{" "}
                        <Link
                            href={
                                "https://local.psy.miami.edu/faculty/dmessinger/c_c/rsrcs/rdgs/emot/tronick_emotions_in_interaction.pdf"
                            }>
                            Emotions and Emotional Communication in Infants (Tronick 1989).
                        </Link>{" "}
                        for more information on how infants mimic the emotional states of adults.
                    </Footnote>
                    . We adults<Footnote>Assuming no infants are reading this essay.</Footnote> have likely felt the
                    conscious effects of these mirror neurons ourselves. Imagine a time when you saw someone perform an
                    action which you would have liked to emulate. This could be a feat of gymnastics, a skateboarding
                    trick, or an impressive set of moves in a video game. You may have found yourself consciously
                    simulating what those actions would have been like in your own mind. As you watched someone else act
                    upon patterns within their brains, you tried to replicate those patterns in your own brain,
                    transferring some level of common representation from one brain to another
                    <Footnote>
                        See{" "}
                        <Link href={"https://link.springer.com/article/10.1007/s11097-005-4737-z"}>
                            Embodied simulation: From neurons to phenomenal experience (Gallese 2005).
                        </Link>
                    </Footnote>
                    .
                </p>
                <p>
                    In this section, we have learned several key pieces of information. We have formulated a more
                    precise definition of what a computing device is and how the nature of such devices leaves room for
                    exploitation. Next, we saw how the brain exemplifies many of the qualities of these computing
                    devices. The low levels of neuronal activity in our brains emergently form into higher level
                    patterns of cognition. While there is significant noise on the level of individual neurons, this
                    noise begins to smooth out on the level of large neuron clusters. This allows for predictability in
                    an inherently noisy system. Finally, we saw how those high level, emergent patterns are often shared
                    between individuals and used to represent the same concepts. Where does this leave us? We know from
                    our definition of a computing device that such devices operate upon emergent, predictable, and
                    generic patterns and, due to these patterns, they may be inherently exploitable. We also know that
                    our brains exhibit, to some extent, emergent, predictable, and generic patterns themselves. Assuming
                    <Footnote>
                        A very large assumption, to be sure, but hopefully an assumption that is at least partially
                        supported by evidence, as we have seen in this section.
                    </Footnote>{" "}
                    such low level exploitation of the brain is indeed possible in human brains, what would those
                    exploits look like? How would they be transmitted? What would be their scope? What would their
                    effects be on our subjective experience of cognition?
                </p>
                <WritingSection>Arbitrary Cognitive Execution</WritingSection>
                <WritingSection level={2}>The Brain as an Emulation Device</WritingSection>
                <WritingSection level={2}>The Conscious Mind has no Moat</WritingSection>
                <p>
                    Text is a relatively low-dimensional medium of input. There are only so many conceptual patterns
                    which a sequence of symbols can theoretically convey, and fewer still (if any) which can
                    successfully impart those conceptual patterns to any given reader. Though impractically large, the
                    full spectrum of human sensory inputs over a finite number of time steps technically forms a
                    searchable and indexable space. Suppose an attacker desired that their target perform some task and
                    there existed at least one cognitive state in which the target would accomplish that task
                    conditional upon the experience of some sequence of sensory inputs.
                </p>
                <p>
                    For mundane scenarios, this appears to be a gross over-formalization. If someone's present cognitive
                    state included knowledge of a friend and the sound of their voice and conditional upon receiving the
                    auditory input of that friend's voice asking for a cup of coffee, that someone is likely to fulfil
                    the task of acquiring a cup of coffee. The utility of this formalization, however, becomes much more
                    apparent when the generality and capability of an attack grows.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </WritingWrapper>
    );
}

export { onArbitraryCognition };
