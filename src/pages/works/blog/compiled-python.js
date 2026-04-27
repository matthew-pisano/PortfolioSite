import React from "react";

import Link from "next/link";
import Latex from "react-latex-next";

import { BlogSection } from "@/components/widgets/BlogSection";
import { FootnoteProvider, Footnote, FootnoteList } from "@/components/widgets/FootNote";
import BlogWrapper, { BlogInfo, BlogImage } from "@/components/wrappers/BlogWrapper";
import { genPageTitle } from "@/lib/util/utils";

const blogInfo = new BlogInfo(
    "Turning Python Into a Compiled Language",
    "Experimenting with Python bytecode, stack machines, and MLIR",
    new Date(2026, 3, 24),
    "compiledPython"
);

export default function CompiledPython() {
    return (
        <BlogWrapper
            pageName={genPageTitle(__filename)}
            title={blogInfo.title}
            subtitle={blogInfo.subtitle}
            date={blogInfo.date}>
            <FootnoteProvider label={blogInfo.anchor}>
                <BlogSection>Introduction</BlogSection>
                <p>
                    Python is a highly popular and highly versatile language. It is commonly used for its low-barrier to
                    entry, intuitive design, and ease of writing. This is partially due to how the language handles
                    common complexities. The Python language standard abstracts away low level memory management and the
                    complexity of common algorithms into its garbage collector and builtin library, respectively. This
                    allows programmers to concentrate on the functionality of their program, without having to worry
                    about where/how memory is allocated or about re-implementing common algorithms. These conveniences
                    are enabled in large part by Python's design as an interpreted language.
                </p>
                <p>
                    Instead of directly compiling down to machine code, Python code is interpreted by the Python
                    interpreter into instructions that can run on the host machine. Based on how the interpreter is
                    implemented, any arbitrary functionality can run in the background without the original programmer
                    needing to worry about it. The garbage collector is a good example of this. This service runs in the
                    background of every Python program, freeing unused memory allocations to stop the program from
                    leaking memory. This happens completely transparently without any intervention needed from the
                    programmer
                    <Footnote>
                        Unless the program makes use of Python's <code>gc</code> module.
                    </Footnote>
                    .
                </p>
                <p>
                    The most popular version of the Python interpreter is{" "}
                    <Link href={"https://github.com/python/cpython"} target="_blank" rel="noopener noreferrer">
                        CPython
                    </Link>
                    . The core of the interpreter is written in C, with core libraries written in Python directly. Why
                    is this? Why not implement the Python interpreter in Python itself?
                </p>
                <BlogSection level={2}>Interpreters and Compilers</BlogSection>
                <p>There is a short answer and a long answer to this question.</p>
                <p>
                    The short answer is that it can't, at least not fully. As an interpreted language, Python source
                    code is never translated to machine code, the language that the CPU is able to execute. This happens
                    in an indirect way through the interpreter (how else would the language run!), but needing to go
                    through an entire executable to get to instructions is not exactly portable. Even if it were, the
                    actual machine code instructions are never logged, just executed immediately by the CPU.
                </p>
                <p>
                    Compiled languages can achieve this, though. Languages like C, Rust, and Zig are <i>self-hosted</i>.
                    This means that their compilers are written in the languages themselves. This is possible since
                    compilers inherently output a binary version of the original source code after the compilation
                    process. These binaries contain instructions in native machine language which can be directly
                    executed by the CPU.
                </p>
                <p>
                    The long answer is that Python can, and is, used to implement different versions of Python, just not
                    <i>the</i> most commonly used version. CPython uses a hybrid-interpreted strategy for executing
                    Python code. This means that Python source code is never translated to machine code in a textual
                    format
                    <Footnote>
                        Though, starting with Python 3.13, CPython is experimenting with{" "}
                        <Link
                            href={"https://github.com/python/cpython/blob/main/Tools/jit/README.md"}
                            target="_blank"
                            rel="noopener noreferrer">
                            JIT features
                        </Link>
                        .
                    </Footnote>
                    . Other implementation, like PyPy or Jython do execute Python using JIT compilation.
                </p>
                <BlogSection level={2}>Just-In-Time Compilation</BlogSection>
                <p>
                    How is JIT compilation different from regular interpreting? Conceptually, the CPython interpreter
                    handles Python Opcodes with a giant switch statement: if Opcode A, do B, if Opcode X, do Y, and so
                    forth. There is never a direct translation from Python Opcodes to actual machine instructions, it
                    always goes through the complex logic within the interpreter. What a JIT compiler does is somewhat
                    similar. Opcodes are still processed sequentially, but instead of needing to go through the
                    interpreter every time, machine instructions are generated for each Python instruction and reused
                    when executed again. This offers part of the seed of a compiled language without the upfront cost of
                    a compilation. JIT compiled languages can self-host just like their fully compiled counterparts.
                </p>
                <p>
                    Fully JIT Python interpreters already exist. PyPy is one of the foremost examples. As a Python JIT
                    compiler, it can achieve 4x to 6x speedup when compared to the CPython interpreter. It is also
                    written in RPython, a statically typed subset of Python. During execution, PyPy analyzes executing
                    instructions to identify regions that can execute frequently. Loops, for example. These regions are
                    then translated into machine instructions and run in place of the much slower Python code.
                </p>
                <p>
                    Jython is another JIT Python implementation what is slightly older than PyPy. Written in Java
                    instead of Python, this program translates Python code into Java bytecode, which is then executed by
                    the JVM. Like PyPy, Python code is compiled down to machine instructions at runtime, though these
                    instructions are for the Java virtual machine, rather than the host machine architecture.
                </p>
                <p>
                    Python interpreters and JIT compilers are popular and widely used. Why only these two classes of
                    implementations, though. Why not implement Python as a fully ahead-of-time (AOT) compiled language?
                </p>
                <BlogSection>Prior Art</BlogSection>
                <p>
                    Many different Python compiler implementation have been developed, though none are as widely used as
                    their interpreted or JIT counterparts.{" "}
                    <Link href={"https://github.com/lcompilers/lpython"} target="_blank" rel="noopener noreferrer">
                        lpython
                    </Link>{" "}
                    is one such implementation from <i>lcompilers</i>. It focuses on compiling a typed subset of Python
                    down to machine code. It relies upon LLVM for compilation (through their lfortran project) and
                    implements its own custom Python parser for preprocessing.
                </p>
                <p>
                    <Link href={"https://github.com/exaloop/codon"} target="_blank" rel="noopener noreferrer">
                        codon
                    </Link>{" "}
                    by <i>exaloop</i> is implemented in a similar manner, with more of a focus on high-performance
                    programming and GPU interoperability. It also relies upon LLVM for compilation and has implemented a
                    parser for a Python-like DSL of their own design. Their Python DSL requires static typing as type
                    checking is performed at compile-time. This eliminates some of Python dynamic typing features.
                </p>
                <p>
                    Finally,{" "}
                    <Link
                        href={"https://github.com/Pylir/Pylir/tree/main/src"}
                        target="_blank"
                        rel="noopener noreferrer">
                        Pylir
                    </Link>{" "}
                    is a compiler for Python that lowers Python source code down to a dialect of MLIR before being
                    compiled by LLVM. This project also uses a custom Python parser to embed Python source code into a
                    more controlled intermediate representation. This implementation utilizes garbage collection for
                    memory management and aims to handle vanilla Python without significant modifications.
                </p>
                <p>
                    These examples follow a similar pattern: using a custom Python parser over the CPython parser and
                    often enforcing static typing as a requirement for compilation. Why is this? Why not take in vanilla
                    Python with all its dynamic typing conveniences and extensive Bytecode implementation?
                </p>
                <BlogSection>Why Python Works Best as an Interpreted Language</BlogSection>
                <p>
                    There is good reason as to why Python AOT compilation projects tend to modify the standard of Python
                    that they accept and why CPython itself is not always a direct dependency. A large reason for
                    Python's success as a language can be attributed to its shallow learning curve and ease-of-use. A
                    core component of this is Python's dynamic typing system. Python can be classified as having strong
                    but dynamic typing.
                </p>
                <p>
                    Being a strongly typed language means that types have well-defined interactions with other types and
                    with themselves. They have strict, user-defined properties and the attributes of a type generally do
                    not change at runtime. This is similar to language like Java where class interactions are strictly
                    defined and a class' variables and methods are static at runtime. You cannot add a function to a
                    Java class during program execution where there was none before. Strict typing is not exhibited by
                    languages like JavaScript. JS has a "type coercion" system that tries to force different types to
                    interact, even if no well-defined interaction is defined by the programmer. A very common example of
                    this is comparing an integer type to a string type. In JS <code>5 == '5'</code> evaluates as truthy
                    because the string is coerced into a number before the comparison. Languages like Java or Python
                    would evaluate to a truthy value. JavaScript also supports defining arbitrary attributes for classes
                    at runtime through the object's <i>prototype</i>.
                </p>
                <p>
                    As a dynamically typed language, Python does not associate a type with specific variables or
                    attributes, but rather with their values. In languages like Python or JavaScript, you can define{" "}
                    <code>a = 2</code> and later redefine <code>a = true</code>. Initially, the type of <code>a</code>{" "}
                    will evaluate as an integer, but later it will evaluate to a boolean type. This is because Python
                    does not associate any type with the variable itself at all. Only the value that the variable
                    currently references has a type. This is dissimilar to languages like Java, where <code>a</code>{" "}
                    would be declared with a specific type originally and all subsequent assignments must be compatible
                    with that type.
                </p>
                <p>
                    While many AOT compiled languages are strongly typed, not many are dynamically typed. This is
                    because a dynamically typed language only evaluates types at runtime, while the program is actively
                    executing. From the perspective of the compiler, assuming that a specific variable will always hold
                    a specific type allows for more optimizations to be performed and more code to be inlined. For
                    example, suppose a compiler for a statically typed language saw the statement <code>a + b</code>.
                    Further assume that operators could be overloaded between arbitrary types. In this situation, it
                    would be able to deduce which operator code was associated with the "plus" symbol for the two types
                    and inline that in place of the original statement. For a dynamically typed language, inlining
                    ahead-of-time in this manner would be unavailable. The program would need to dynamically choose
                    which "plus" code to execute at runtime.
                </p>
                <p>
                    Another reason why Python is best implemented as an interpreted language is that the Python Language
                    Reference does not define any procedure for wither interpreting the language or lowering it to
                    target machine code. This is left as an implementation detail for the interpreter designers. An
                    interpreter is compliant as long as it is able to process the latest Python language standard,
                    regardless of how it is implemented. CPython, the most popular implementation, utilizes Python
                    bytecode as an intermediate representation for the interpreter to execute. This bytecode, unlike
                    Java bytecode, is considered an internal implementation detail of CPython. It is documented, but
                    there are no guarantees of backwards or forwards compatability. Opcodes may change, appear, or
                    disappear between even minor releases. This instability makes relying directly upon CPython as a
                    parser unattractive for the previously mentioned Python compilers. Therefore, they tend to implement
                    their own Python parsers and intermediate representations.
                </p>
                <BlogSection>A Python Compiler</BlogSection>
                <BlogSection level={2}>The Compiler Frontend</BlogSection>
                <BlogSection level={2}>The Compiler Backend</BlogSection>
                <BlogSection>Intermediate Representations</BlogSection>
                <BlogSection level={2}>Python Bytecode</BlogSection>
                <BlogSection level={2}>PyIR</BlogSection>
                <BlogSection level={2}>LLVM IR</BlogSection>
                <BlogSection>A Python Standard Library</BlogSection>
                <BlogSection>Memory Management</BlogSection>
                <BlogSection>Closing Remarks</BlogSection>
                <hr />
                <FootnoteList />
            </FootnoteProvider>
        </BlogWrapper>
    );
}

export { blogInfo };
