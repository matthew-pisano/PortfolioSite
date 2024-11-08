import React from 'react';

import DefaultWrapper from "@/components/DefaultWrapper";
import {PageInfo, SectionTile, Tile} from '@/lib/pageBuilder';
import {genPageTitle} from "@/lib/utils";


/**
 * A class for creating a tile to display on a page
 */
class BookTile extends Tile {

    /**
     * @param title {string} The title of the book tile
     * @param author {string} The author of the book
     * @param synopsis {string} A brief synopsis of the book
     * @param synopsis_source {string} The source of the synopsis
     * @param thoughts {string} My thoughts on the book
     * @param thumbnail {string} The thumbnail image/cover for the book
     */
    constructor(title, author, synopsis, synopsis_source, thoughts, thumbnail) {
        let source_elem = synopsis_source ?
            `<i>Source: <a href="${synopsis_source}" target="_blank">${new URL(synopsis_source).hostname}</a></i>` : ``;
        let content = `<p><i>Author:</i> ${author}</p>
                <p><i>Synopsis:</i> ${synopsis} ${source_elem}</p>
                <p><i>Thoughts:</i> ${thoughts}</p>`;
        super(title, content, thumbnail);
    }
}


export default function ReadingList() {

    let tiles = [
        new Tile(
            "<h2>What is All This?</h2>",
            `Below is a collection of books I have read and would recommend to others.  The
                following may be useful for gaining foundational knowledge in the field of AI and the
                Cognitive Sciences, may have had a significant impact on my own world model, or I may
                just find them interesting.  Some of these have also been personally recommended to 
                me by colleagues and mentors.  Through this collection, I hope to provide some insight 
                into my field of study and my own personal interests.`,
        ),
        new SectionTile(
            "<h2>Artificial Intelligence and Cognitive Science</h2>",
        ),
        new BookTile(
            "Superintelligence: Paths, Dangers, Strategies",
            "Nick Bostrom",
            `<u>Superintelligence: Paths, Dangers, Strategies</u> explores how superintelligence 
                could be created and what its features and motivations might be. It argues that 
                superintelligence, if created, would be difficult to control, and that it could 
                take over the world in order to accomplish its goals. The book also presents 
                strategies to help make superintelligences whose goals benefit humanity. It was 
                particularly influential for raising concerns about existential risk from artificial
                intelligence.`,
            `https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies`,
            `This book almost single-handedly inspired me to pursue an education in
                artificial intelligence, specifically alignment.  Bostrom presents groundbreaking
                ideas on the nature and potential of AI in an easily digestible manner.  The book
                explores ideas relating how we may control entities far more clever than us and the
                consequences if we fail our one (and likely only) attempt at doing so.  He goes into
                detail on how an AI, tasked with seemingly harmless <i>terminal goals</i> may
                nevertheless set for itself <i>instrumental goals</i> that can pose an existential
                threat to humanity.<br>
                As may be evident in the make, this work also heavily inspired me to create
                <a href="https://github.com/matthew-pisano/Superintelligent" target="_blank">Superintelligent</a>.`,
            "https://m.media-amazon.com/images/I/71UvMcdcE9L._AC_UF1000,1000_QL80_.jpg"
        ),
        new BookTile(
            "The Alignment Problem",
            "Brian Christian",
            `<u>The Alignment Problem: Machine Learning and Human Values</u> compiles and analyzes 
                numerous interviews with experts trying to build artificial intelligence systems, 
                particularly machine learning systems, that are aligned with human values.  The book 
                is divided into three sections: Prophecy, Agency, and Normativity. Each section 
                covers researchers and engineers working on different challenges in the alignment 
                of artificial intelligence with human values. `,
            `https://en.wikipedia.org/wiki/The_Alignment_Problem`,
            `While this book concentrates on similar themes to Nick Bostrom's
                <u>Superintelligence</u>, some of the most impactful ideas that this book presents
                involve much less existential, albeit still harmful, examples of misalignment.  Much
                of its length is devoted to addressing the ethical implications of implementing
                machine learning algorithms without proper planning.  For example, he cites how AI
                criminal risk assessment / recidivism prediction tools, like <i>COMPAS</i>, often exhibit 
                biases toward minority groups.  One of the most interesting insights along this vein was 
                on the fact that ML algorithms can accidentally infer data that was held-out from training
                (for example, an 'unbiased' algorithm can accidentally condition itself on someone's
                race or gender, despite only having names or neighborhoods in its dataset.).
                <br>Christian's chapters on reward systems and curiosity also helped to cement my
                understanding of the role these concepts play in learning, both natural and artificial.
                A common theme with this book was how well its concepts complemented my more formal education.`,
            "https://m.media-amazon.com/images/I/71buTbF1YDL._AC_UF1000,1000_QL80_.jpg"
        ),
        new BookTile(
            "Human Compatible: Artificial Intelligence and the Problem of Control",
            "Stuart Russell",
            `<u>Human Compatible: Artificial Intelligence and the Problem of Control</u> 
                asserts that the risk to humanity from advanced artificial intelligence is a serious 
                concern despite the uncertainty surrounding future progress in AI. It also proposes 
                an approach to the AI control problem.  Russell asserts that the standard model of AI 
                research, in which the primary definition of success is getting better and better at 
                achieving rigid human-specified goals, is dangerously misguided. If an AI developed 
                in this manner were to become superintelligent, it would likely not fully reflect 
                human values and could be catastrophic to humanity. Russell further asserts that 
                safety research should be begun as soon as possible, as it is also highly uncertain 
                how long it would take to complete such research.`,
            `https://en.wikipedia.org/wiki/Human_Compatible`,
            `In this book, Russell both introduces technical topics to the reader and challenges
                some conventional thinking about artificial intelligence in a concrete and understandable 
                manner.  He covers a wide variety of topics, ranging from how AI may (and should) behave
                when interacting with the real world, to common misconceptions and criticisms of
                alignment research, and more concrete learning techniques.
                <br>Russell considers concepts such as how to balance the personal and societal 
                utilities of embodied assistants and how such assistants can safely learn by maintaining
                a core of immutable ideals.  He also provides effective counter-arguments to common
                arguments against alignment research, such as "Why can't you just turn it off" or
                "It will behave if we specify its goals well enough".
                <br>The later chapters of the book introduce some learning techniques that I personally
                find interesting, such as inverse reinforcement learning and how that may be applicable
                for aligning an AI with the ill-defined preferences of humans.`,
            "https://m.media-amazon.com/images/I/81nhGK0DNLL._UF1000,1000_QL80_.jpg"
        ),
        new BookTile(
            "The Emotion Machine",
            "Marvin Minsky",
            `<u>The Emotion Machine</u> offers a fascinating new model for how our minds work. 
                Minsky argues persuasively that emotions, intuitions, and feelings are not distinct 
                things, but different ways of thinking.  By examining these different forms of mind 
                activity, Minsky says, we can explain why our thought sometimes takes the form 
                of carefully reasoned analysis and at other times turns to emotion. He shows how our 
                minds progress from simple, instinctive kinds of thought to more complex forms, 
                such as consciousness or self-awareness. Indeed, says Minsky, if thinking can be 
                understood as the step-by-step process that it is, then we can build machines -- 
                artificial intelligences -- that not only can assist with our thinking by thinking 
                as we do but have the potential to be as conscious as we are.`,
            `https://www.simonandschuster.com/books/The-Emotion-Machine/Marvin-Minsky/9780743276641`,
            `This book was my first real introduction to Marvin Minsky and his unique concepts
                about the mind and social behavior.  His ideals surrounding the true nature of emotions
                and hierarchies of thinking were whole novel to me when I first read it.  This book
                stands out from many others at the intersection between artificial intelligence and
                cognitive science.  This is primarily because even modern AI has not yet implemented
                many of the ideas presented here.
                <br>For me, the most impactful ideas presented here were Minsky's interpretation of
                the actor-critic structure of our cognition and his concept of <i>imprimers</i>, or
                who we are most likely to learn from and why.  This book was a significant inspiration
                behind my <a href="/research/bergeron">Bergeron</a> thesis, which is built around
                a multi-model implementation of a simple actor-critic architecture.`,
            "https://m.media-amazon.com/images/I/71qtkdlcqIS.jpg"
        ),
        new SectionTile(
            "<h2>Historical and Hard Science Fiction</h2>",
        ),
        new BookTile(
            "2001: A Space Odyssey",
            "Arthur C. Clarke",
            `<u>2001: A Space Odyssey</u> is a science fiction novel that follows humanity's
                fleeting, yet impactful, encounters with a mysterious alien civilization.  After the
                discovery of an alien monolith on the Moon, a crew of astronauts is sent to Jupiter
                to investigate a similar monolith.  The novel explores themes of artificial
                intelligence, extraterrestrial life, and the nature of consciousness.`,
            ``,
            `This novel was notable to me for a myriad of reasons.  Clarke puts a great deal
                of effort into ensuring that his story remains as scientifically accurate as possible,
                while still making the plot seem plausible and self-consistent.  The beginning of the
                novel offers a unique explanation to the question of why humans often appear to be
                fundamentally different with respect to the remainder of the animal kingdom.  His
                description of space-flight, moon-bases, and technology are impressively accurate
                for being written before even the first moon landing.
                <br>Of course, one of the most impactful details to me was how <i>HAL</i> behaves and
                how his internal world model motivates his actions.  He (it?) serves as an excellent
                example of how seemingly virtuous terminal goals, such as investigating <i>TMA-2</i>, 
                can lead to unforeseen instrumental goals, such as self-preservation at all costs, as
                <i>HAL</i> does not have a real understanding about what shutting down will really 
                mean for him.  All of this comes decades before alignment, or even AI, became popular 
                within public discourse.
                <br>Another interesting detail is what Clarke gets wrong.  Namely, his prediction that
                Marvin Minsky and Irving John Good would play a pivotal role in designing neural
                networks that could effectively learn (see <a href="" target="_blank"></a>).  
                While this exact sequence of events did not
                play out in reality, it is closely reflected in the real achievements of the two
                scientists and thw AI boom of the 1980s.`,
            "https://m.media-amazon.com/images/I/71WoWlyQKtL._AC_UF1000,1000_QL80_.jpg"
        ),
        new BookTile(
            "Do Androids Dream of Electric Sheep?",
            "Philip K. Dick",
            `<u>Do Androids Dream of Electric Sheep?</u> explores themes of humanity, empathy, 
                and the nature of consciousness set in a post-apocalyptic world after most humans
                have fled to off-world colonies. Amid this bleak landscape, Dick examines what it 
                means to be human and the ethics of artificial life.  The novel follows Rick Deckard, 
                a bounty hunter tasked with "retiring" rogue androids, and John Isidore, a man of 
                limited intelligence due to radiation exposure who empathizes with the fugitive androids.`,
            ``,
            ``,
            "https://images3.penguinrandomhouse.com/cover/9780345404473"
        ),
        new BookTile(
            "The Maniac",
            "Benjamín Labatut",
            `<u>The Maniac</u> is a fictionalised biography of polymath John von Neumann.  
                It primarily explores von Neumann's life and accomplishments through a series of envisioned
                interviews with those he interacted with.  The book's prelude follows Paul Ehrenfest
                as he grapples with the crumbling foundations of physics and mathematics that began
                to buckle under the weight of the quantum revolution and the theory of relativity.
                The book then transitions to von Neumann's life, his work on the Manhattan Project,
                and his contributions to game theory and computer science.  The concluding chapters
                concentrate on Demis Hassabis and his work on AlphaGo, a computer program that defeated
                the world Go champion.`,
            ``,
            `In this book, Labatut effectively employs fictionalized interactions and interviews
                to instill a sense of awe within the reader and contextualize historical events with
                a sense of gravity that traditional history books may struggle to convey.  Much of the
                book takes place during the 1920s and 1930s.  These chapters explore how some of Europe's
                most brilliant minds coped with existential threats to the established order of Science 
                and Mathematics in the forms of quantum mechanics, relativity, and Gödel's incompleteness
                theorems.  For some, this is compounded by the rapid rise of the Nazis, anti-semitism,
                and distrust in the sciences on the continent.  In later chapters, Labatut details the
                Manhattan project and the sense of awful wonder that Nuclear Weapons imparted upon their
                creators.  Many of the minds that the book follows finally break under the strain of
                their environment or as a consequence of their own creations.<br>
                While the finer details of the book are not strictly based on historical evidence,
                reading <u>The Maniac</u> has changed how I think about inspiration, ideation, and
                invention.  It also instills a sense of reverence for the geniuses that pioneered many
                of the ideas that underpin the modern understanding of computing, artificial intelligence,
                and game theory.  It also gave me a much better understanding of John von Neumann,
                as his achievements are often less emphasized than those from Turing or Gödel during
                undergraduate education.`,
            "https://m.media-amazon.com/images/I/71LWaPy3gjL._SL1500_.jpg"
        ),
        new SectionTile(
            "<h2>Physics</h2>",
        ),
        new BookTile(
            "QED: The Strange Theory of Light and Matter",
            "Richard Feynman",
            `<u>QED: The Strange Theory of Light and Matter</u> is an adaptation of four
                lectures given by Richard Feynman at UCLA.  Designed for readers without an in-depth
                knowledge in the field of <i>quantum electrodynamics</i>, the book is able to effectively
                convey the complex notions of the theory while remaining understandable to general
                audiences.  Feynman uses analogies, diagrams, and his well-known <i>Feynman diagrams</i>
                to describe this subset of quantum field theory in terms that anyone can understand.`,
            ``,
            `This book served as my first (informal) introduction to QED, specifically, and
                even QFT in general.  His analogies and examples, such as the connection he makes
                between photons reflecting off of a class surface and quantum non-determinism,
                help to frame the notoriously abstract concepts of the quantum realm in more
                familiar terms.
                <br>I especially enjoy how the book is structured.  It follows a clear progression
                from that high-level example to the more complex reality of wave-particle dualities
                and virtual photons.  I also found the logic behind his Feynman diagrams interesting
                and how they can represent the infinite possibilities of particle interactions within
                a series of simple lines.`,
            "https://pup-assets.imgix.net/onix/images/9780691164090.jpg?w=410&auto=format"
        ),
        new BookTile(
            "The Little Book of String Theory",
            "Steven Gubser",
            `<u>The Little Book of String Theory</u> offers a short, accessible, and 
                entertaining introduction to one of the most talked-about areas of physics today. 
                String theory has been called the "theory of everything". It seeks to describe all 
                the fundamental forces of nature. It encompasses gravity and quantum mechanics in 
                one unifying theory. But it is unproven and fraught with controversy. After reading 
                this book, you’ll be able to draw your own conclusions about string theory.`,
            `https://press.princeton.edu/books/hardcover/9780691142890/the-little-book-of-string-theory`,
            `Similarly to <u>QED</u>, this served as my first semi-serious introduction to
                <i>String Theory</i>.  Gubser manages to fit an impressive amount of information into
                this relatively short book.  From the strings themselves to D-branes, M-theory,
                and Supersymmetry, the book is able to convey the basic concepts behind these theories
                through the usage of diagrams and how they may help tp explain real-world phenomena.
                <br>One of the most interesting portions for me was the last chapter of the book.  Here,
                he explains how the addition of a fifth dimension can help to explain the behavior of
                quark-gluon plasma after being created by the collision of heavy gold nuclei.  It stood
                out to me primarily because it was able to take an observed phenomena that could already
                be described in terms of quantum field theory, and re-frame it using string theory.`,
            "https://pup-assets.imgix.net/onix/images/9780691142890.jpg?w=410&auto=format"
        ),
        new SectionTile(
            "<h2>Futurism</h2>",
        ),
        new BookTile(
            "The Inevitable: Understanding the 12 technological forces that will shape our future",
            "Kevin Kelly",
            `<u>The Inevitable: Understanding the 12 technological forces that will shape our future</u>
                asserts that much of what will happen in the next thirty years is inevitable, driven 
                by technological trends that are already in motion. In this book, Kevin Kelly provides 
                an optimistic road map for the future, showing how the coming changes in our 
                lives—from virtual reality in the home to an on-demand economy to artificial 
                intelligence embedded in everything we manufacture—can be understood as the result 
                of a few long-term, accelerating forces. These larger forces will completely revolutionize 
                the way we buy, work, learn, and communicate with each other.  Kelly’s bright, hopeful 
                book will be indispensable to anyone who seeks guidance on where their business, 
                industry, or life is heading—what to invent, where to work, in what to invest, 
                how to better reach customers, and what to begin to put into place—as this new world emerges.`,
            `https://www.amazon.com/Inevitable-Understanding-Technological-Forces-Future/dp/0143110373`,
            `I first read this book back when it originally came out.  At that point, it was
                entirely uncertain if some, or if even any, or Kelly's predictions would materialize.
                Looking back nearly 10 years after publication, his theories have proven remarkably 
                prescient.  Out of his twelve points (Becoming, Cognifying, Flowing, Screening, 
                Accessing, Sharing, Filtering, Remixing, Interacting, Tracking, Questioning, Beginning),
                I found his points on Becoming, Cognifying, and Accessing to be the mode relevant.
                In short, these points describe a world where information is increasingly streamed
                and subscribed to, with an emphasis on cloud-based AI models.  Even back in 2017,
                these points struck me as something to look out for in the future.
                <br>Reading this book helped to shape my attitude on the future of technological
                progress and societal trends.  Kelly's optimism is still contagious, even in the
                face of ever-potent click-through algorithms and the decreasing emphasis of digital ownership.`,
            "https://m.media-amazon.com/images/I/71uehq9SkLL._SL1500_.jpg"
        ),
        new BookTile(
            "Physics of the Impossible",
            "Michio Kaku",
            `<u>Physics of the Impossible</u> analyzes the feasibility and hypothetical
                scientific basis for many fantastical, and not-so-fantastical, science fiction
                technologies.  From phasers to force-fields and from teleportation to time-travel,
                Kaku explores some real-world analogues that approximate the form and function of
                these fictional concepts.  Along the way, the book also explains the real science
                behind each of the theoretical concepts that he presents.`,
            ``,
            `While many of the technologies discusses in the book may very well be impossible,
                I found it especially interesting how all of them could either be loosely tied back 
                to real scientific theories or where actually possible with modern technology, albeit
                in a modified form.  One of the sections that I found most interesting was on
                Psychokinesis and how Kaku explored how it may actually be implemented, although
                through brain-computer interfaces, rather than reality warping abilities.`,
            "https://images2.penguinrandomhouse.com/cover/9780307278821"
        ),
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Reading List",
        "A series of books that I have read and recommend",
        {backgroundColor: "#369f88"},
    );

    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}