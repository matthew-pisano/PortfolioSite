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
                <BlogSection level={2}>Ex Machina</BlogSection>
                <p>
                    If you were to communicate with an early computer programmer in the year 1965 and warn them that the
                    exploitation of their software would soon become a booming industry, how would they react? They
                    would likely be unsurprised. Programmers were aware that security could <i>become</i> a concern in
                    the future, even if it was not paramount at the time. Indeed, the possibility of large-scale
                    exploitation would be shown by The Creeper in 1971, just six years later. Why may they react in this
                    manner, even though they had not personally experienced their software being exploited? Even if this
                    programmer from the past were not aware of the exact techniques of exploitation, the possibility of
                    hacking may not phase them. Perhaps this hypothetical person's lack of surprise is itself
                    unsurprising to you yourself.
                </p>
                <p>
                    Consider a similar setup which is concerned with a different kind of low-level exploitation. Would
                    it be reasonable to suggest that the human brain is vulnerable to similar attacks? We can readily
                    conceptualize more "high-level" social or psychological attacks such as interpersonal manipulation
                    or desensitization to some specific situations. These are, however, very blunt instruments that may
                    or may not work as the attacker intends or may not work at all. Instead, consider something much
                    lower in level, something that directly exploits the complex patterns in how our neurons activate.
                    This prospect seems much more absurd. Why? Just because we have yet to see an example, like our 1965
                    programmer, does not mean it is possible. The real difference is that we simply have no reason to
                    believe that it <i>is</i> possible. The sheer intractability of the problem seems too great to
                    overcome; we do not know how our own brains work, much less how to exploit those inner workings.
                    Computer hacking is much easier to conceptualize. We know <i>exactly</i> how computers work. We
                    designed computers specifically to work in this deterministic and understandable manner. The
                    question of knowing whether low-level exploits are possible is really just a question of whether we
                    know what laws and patterns govern that system on a base level.
                </p>
                <p>
                    Modern, general purpose, classical computers nearly universally rely upon the Von Neumann
                    <Footnote>
                        In the computer science curricula that I have taken and taught John Von Neumann often takes a
                        secondary role to the likes of Gödel, Turing, and Shannon. Hopefully the courses that I have
                        directly interacted with are an anomaly in this resect. Regardless, I'd highly recommend taking
                        a second look at his lift, abilities and accomplishments. See my thoughts on{" "}
                        <Link href={"https://matthewpisano.com/works/reading-list#maniac"}>The MANIAC</Link> for some
                        more detailed commentary.
                    </Footnote>
                    architecture. In this schema, computers are neatly split into a processor, a memory unit, and I/O
                    devices. Generally, the processor contains the logic on how to interpret instructions, the memory
                    contains which instruction to execute, and the I/O devices allow humans or other computers to
                    interface with running programs. Most modern, consumer/enterprise computers are also register
                    machines. This tweak to the base architecture adds registers (and often multiple layers of cache)
                    between the processor and memory. These registers have direct access to the CPU and greatly simplify
                    the interface in which the CPU interacts with memory. Special registers, such as the program
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
                    to run arbitrary code of their choosing.
                </p>
                <p>
                    Lets first consider a toy example, then work up from there. Most systems have a special register
                    called the "program counter". This register, like any other, will contain a number. This number
                    represents the memory address at which the CPU will look to for its next instruction. This counter
                    increments as the program executes with special control flow instruction moving it in the case of
                    loops or procedure calls. Whatever (or whoever) controls the value stored within the program counter
                    fully controls which code the program will execute next. Upon launch, the program will ask the user
                    for a secret password. It will then check if the password is correct and reveal some hidden
                    information if so. In the interest of space efficiency, the original programmer has laid out memory
                    in a condensed fashion with the space used for storing the user's password attempt placed just
                    before the procedure for checking the password. In MIPS, this would look like the following:
                </p>
                <CodeBlock language="mips">
                    {`main:
    la $a0, input       # Request that the data be placed in input
    jal read_input      # Read the user input until return is pressed

    jal password_check  # Check that the user-given password matches the secret password

input:
    .space 4            # The space for the use input

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
                    programmer's instructions to the letter, not to their spirit. The input procedure will continue to
                    read in characters until the return key is struck. If more than four characters are stored, data
                    will spill over into the next word, the next instruction. In this case, this is the first
                    instruction in the
                    <code>password_check</code> procedure. Suppose that the instructions which compose this procedure
                    begin in memory at address <i>0x00400044</i> and the <code>reveal_secret</code> procedure lied at{" "}
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
                    counter. This allowed them to execute <i>arbitrator code</i> of their choosing. By knowing exactly
                    how the computer executes instructions and the patterns of those instructions that it recognize, we
                    can exploit the predictable behavior of that machine to do whatever we wish.
                </p>
                <BlogSection level={2}>Common Exploits and Mechanics</BlogSection>
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
                    with their own data. Generally, there is some point of interest just beyond the bounds of the buffer
                    that the attacker is interested in. In our example, the point of interest was an instruction which
                    we knew that the program counter was going to execute. This knowledge informed our decision on what
                    data to actually write beyond the bounds of our buffer. Looking beyond raw assembly, this utility
                    exploit is often used on programs written in memory-unsafe languages like C or C++. These languages
                    do not enforce array bounds, potentially allowing an attacker to write past them into program memory
                    if the programmer does not manually add in bounds checks. Even if the designer of a program does not
                    handle arrays properly themselves, modern systems often have builtin protections against this simple
                    attack. No-execute bits in memory forbid data placed in a data region (such as the stack) from being
                    executed. Address space layout randomization (ASLR) ensures that programs loaded into memory
                    randomize the addresses of instructions. In our example this would have prevented us from knowing
                    which address to jump to. Stack canaries are another common projection, with the operating system
                    placing randomized values just before the return address of a procedure. If these values are
                    overwritten by an overflow, the system can terminate the program.
                </p>
                <p>
                    In pointer-centric language like C or C++, memory corruption from pointer mismanagement is a common
                    source of vulnerabilities
                    <Footnote>
                        Explaining this topic in depth would also necessitate a discussion on program memory management,
                        allocation, and memory pointers. While this is beyond the scope of this work, anyone interested
                        in low-level programming or vulnerabilities of this nature should ensure that they are familiar
                        with the topic.
                    </Footnote>
                    . This can also be more transparent for an attacker to spot. If an attacker can find a sequence of
                    inputs to a program that cause a crash of page fault, they could reasonably infer that somewhere
                    within that program, a pointer is being mishandled. If a pointer is being mishandled, there is also
                    a chance that the attacker could insert a value that they control into it. Use-after-free and
                    double-free vulnerabilities both stem from structural issues within a program and a lack of proper
                    checks. When a program is loaded, it requests a certain amount of memory from the operating system.
                    From here, programs generally manage their own memory, only calling back to the operating system
                    when a significant amount of memory can be released or if much more needs to be allocated. Since the
                    program, through tools such as <i>malloc</i>, manage their memory on their own, it is the program's
                    responsibility to keep track of which blocks of memory are actively used in objects or data
                    structures an which are free to be allocated. Importantly, when a block of memory has been
                    allocated, it is owned exclusively by some structure; newly allocated structures cannot be allocated
                    on top of it. This lets programmers assume that (threading notwithstanding) the memory of one object
                    will not be modified by another unless their program explicitly allows it. After a pointer to an
                    object or data structure is freed, this restriction no longer applies. The allocator can, and will,
                    reuse that old memory for new allocations. If an attacker can manipulate the program to allocate a
                    new object on top of an old one, while the program still holds a pointer to that memory, the program
                    may access one object thinking that it is another.
                </p>
                <CodeBlock language="cpp">
                    {`struct User {
    bool is_logged_in;  // 1 byte at struct offset 0
};

struct Foo {
    bool bar;    // 1 byte at struct offset 0
};


int main() {
    User *user = malloc(sizeof(User));
    free(user);
    Foo *foo = malloc(sizeof(Foo));
    foo->bar = true;  // Set the boolean to true at the same offset as is_logged_in
    
    // Interpret the region of memory modified by foo as the login flag
    if (user->is_logged_in) {
        grant_admin_access();
    }
    
    return 0;
}`}
                </CodeBlock>
                <p>
                    If a program allocates a user to the heap and frees the pointer, the region of memory pointed to is
                    free for reallocation. If the program keeps a reference to the freed memory, accessing that pointer
                    may mistakenly interpret an attacker-controlled object as the original object. A double-free can
                    have a similar impact, but impacts the allocator directly. When a pointer is freed, the allocator
                    returns the pointed-to block of memory to its free list for bookkeeping. If the allocator is
                    instructed to free that same pointer again it will do so, even if an object has already been
                    allocated in the same location. This may result in the memory corruption or exploitation of a
                    completely unrelated object even if that object's pointer management is correct.
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
                    procedure is overwritten and control is transferred an another arbitrary piece of code. At every
                    stop, memory is manipulated and the program counter is mannered into the position that is required
                    at the end of the attack. These individual blocks of hijacked code are referred to as "gadgets" as
                    they are only used as small utilities in service of the larger attack. When done right, the state of
                    a program can be manipulated arbitrarily without triggering any execution violations. Similarly to
                    buffer overflows, ASLR and stack canaries offer a defense against this attack, but are not always
                    available in all programs or systems.
                </p>
                <BlogSection>Exploiting Execution in Software</BlogSection>
                <p>
                    When considering only toy examples in isolation, vulnerable code seems fairly easy to catch and fix.
                    After all, if programmers simply checked their buffer bounds, compiled their code with protections
                    enabled, and maintained vigilance for common logic bugs, code should be fully secure. Similar
                    sentiments to this are often present in exploit post-mortems. "If we had only noticed that we were
                    using that pointer after freeing it, we would be fine". Real software, especially highly optimized
                    or embedded software, cannot be reduced to such simple terms. Just because the exact mechanism of a
                    vulnerability is unknown <i>does not</i> mean it is impossible.
                </p>
                <BlogSection level={2}>Exploiting Games</BlogSection>
                <p>
                    The medium of video games can offer particularly compelling examples of the strength and scope of
                    "arbitrary" code execution. This because video games offer interactive fictions with well-defined
                    rules and expectations. While achieving arbitrary code execution in an operating system's kernel is
                    far more severe from a security standpoint, such an attack may not represent much of a change from a
                    human perspective. Visually, at least, an attacker's payload does not fundamentally change the rules
                    of how we humans expect an operating system to function. A machine compromising a level 2 hypervisor
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
                    objectives, and mechanics. These fictions could be a simple as immersing the player in a virtual
                    game of chess or as complex as an open-world role playing game. The biggest difference between a
                    game behaving unexpectedly and general software doing the same is this sense of immersion that the
                    player feels. When a word processor or web browser crashes, it is an unexpected inconvenience to the
                    user. When a game crashes, the player may experience a strong break in their immersion or even an
                    increase in immersion when the crash artistically serves to accent a story. <i>Undertale</i>,{" "}
                    <i>Anatomy</i>, and <i>Five Nights at Freddy's</i> are good examples of this latter category,
                    deliberately using crashes as an artistic choice. When the rules of a game a broken, the resulting
                    changes are much more impactful from a subjective point of view than if the same happens to more
                    "mundane" software.
                </p>
                <p>
                    When searching for games with known arbitrary code execution vulnerabilities, compilations are
                    dominated by older games, generally from the 2000s and earlier. This is likely a result of three
                    major factors: hardware limitations, software limitations, and complexity. Early game consoles
                    operated under very different hardware constraints than even contemporary home computers. Since
                    their function was much more limited in scope and were often designed on strict budgets, consoles
                    often employed very specialized and limited hardware.
                </p>
                <p>
                    Consider the Nintendo Entertainment System from 1985 (US) and the Tandy 1000 from 1984. A developer
                    writing software for the NES needed to consider several disjoint components along with severe
                    hardware restrictions. The system was comprised of a Ricoh 2A03
                    <Footnote>Essentially a clone of the famous MOS 6502 microprocessor.</Footnote>, a dedicated audio
                    processing unit, a picture processing unit, 2KB of video RAM, 2KB of work RAM, in addition to active
                    chips on the game cartridge such as character RAM and ROM for tile and sprite data. This on top of
                    working around physical limitations of CRT displays, namely the fact that graphics needed to be
                    constrained to the time it physically takes the CRT's electron beam to move back to the top of the
                    screen. In contrast, the Tandy 1000 came equipped with the much more powerful Intel 8088, 128KB os
                    RAM, a Tandy video controller, and a Texas Instruments SN76489 sound chip. Since the Tandy was
                    designed for much more general computing and could sell at a higher price point, it could afford to
                    avoid many of the NES' hardware restrictions.
                </p>
                <p>
                    For early game consoles such as the NES, these hardware restrictions placed restrictions on how
                    software could be designed. With the extremely limited RAM and 8-bit CPU, Nintendo's developers
                    needed to take shortcuts. Their priorities were working, optimized software over robustness and
                    security. For instance, the developers of the original Super Mario Bros. left only five slots for
                    sprites (with large sprites like Bowser or fire bars taking up two slots). When looking to spawn a
                    new sprite, their code would simply walk along the list until an empty slot was reached. This, of
                    course, left open the possibility for a buffer overflow. However, since the developers were also in
                    control of level layout, this overflow would rarely happen (unless intentionally induced). Operating
                    under the processing restrictions of their processor and the limited size of program ROM, proper
                    checks against buffer overflows were never included. The delivery of a working game was more
                    important than the delivery of a robust game.
                </p>
                <p>
                    A final factor in the prevalence of arbitrary code execution vulnerabilities in older games is
                    complexity, or lack thereof. By virtue of their strict hardware and software constraints, early
                    games were relatively simple. To use Super Mario Bros. as an example once more, the entire game
                    could fit within 40KB and 16,000 lines of code. In comparison, a modern platformer game could
                    contain hundreds of thousands of lines of code on top of an existing game engine. For complex
                    open-world games, complexity grows even further with games like Elden Ring or No Man's Sky running
                    on binaries in the multiple gigabyte range (excluding game assets). Modern game environments are
                    also significantly more complex with more rules and possible states. Opportunities for arbitrary
                    code execution are rarely found by accident in games. Oftentimes, the engineering of such an exploit
                    requires in-depth of how the game is designed internally and how it specifically interacts with the
                    hardware. This offers a much smaller search space of game states that could potentially be
                    manipulated into a vulnerable state. However, just because exploits in smaller games are easier to
                    spot does not mean that larger games are naturally more secure. When then, do we not see more major
                    vulnerabilities in modern games? Modern game development relies heavily on forms of code-reuse such
                    as packages or engines, rather than developing games as a single monolith. Each component of a
                    modern game is often tested and validated with modern code quality standards in mind. While these
                    larger and more complex games may have more points of failure, they are also much more robustly
                    designed and tested.
                </p>
                <p>
                    Systems do not automatically become more resistant to exploitation as they grow in complexity, quite
                    the opposite. Such resistance in modern games and other systems comes from deliberate efforts and
                    intentional design. Keep this in mind.
                </p>
                <p>
                    When this design is intentionally or unintentionally ignored, the effects of severe vulnerabilities
                    on game worlds can be dramatically apparent. That buffer overflow in Super Mario Bros. mentioned
                    earlier can indeed serve as a component in an arbitrary code execution exploit. Similar
                    vulnerabilities exist in other games of the time, such as The Legend of Zelda or Castlevania. The
                    result of a collaboration between multiple retro game exploiters, the following video by{" "}
                    <i>Kosmic</i> showcases the extent to which game worlds can be completely rewritten through the
                    rewriting of their internal patterns of execution:{" "}
                    <Link href={"https://www.youtube.com/watch?v=Le3g9V-BJIA"}>
                        Super Mario Bros. "ACE" TAS Showcase and Console Verification
                    </Link>
                    . Here, the fiction of "Super Mario Bros." is annihilated completely and replaced with the fiction
                    of "The Legend of Zelda" by actively rewriting the former game's code to behave exactly like the
                    latter. This replacement allows the exploitation of three more arbitrary code execution exploits
                    chained in succession to replace this second game world with a third and fourth completely.
                </p>
                <p>
                    In operating systems or utility software, such vulnerabilities usually result in much less dramatic
                    spectacles. However, their impact from a security and economic point of view is often much more
                    severe than a break in video game immersion.
                </p>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
