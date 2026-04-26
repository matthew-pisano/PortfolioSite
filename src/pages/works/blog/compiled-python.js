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
                    implementations, though. Why not implement Python as a fully compiled language?
                </p>
                <BlogSection>Prior Art</BlogSection>
                <BlogSection>Why Python Works as an Interpreted Language</BlogSection>
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
