import React from "react";

import mlir from "highlightjs-mlir";
import Link from "next/link";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    SyntaxHighlighter.registerLanguage("mlir", mlir);

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
                    Reference does not define any procedure for either interpreting the language or lowering it to
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
                <p>
                    While writing a custom Python compiler is the most maintainable avenue for beginning a Python
                    compiler project, my goal was to focus more on the short-term process over long-term maintenance. My
                    project aimed to create a program that would compile Python source code down to an executable binary
                    in the minimum amount of time possible. This is because I was primarily interested in teaching
                    myself more about Python bytecode, MLIR dialects, and the LLVM compilation API. Using the ready-made
                    CPython API would allow me to concentrate specifically on these areas of interest.
                </p>
                <p>
                    <Link
                        href={"https://github.com/matthew-pisano/pycompile"}
                        target="_blank"
                        rel="noopener noreferrer">
                        pycompile
                    </Link>{" "}
                    is implemented in three stages. First, the preprocessor uses the CPython API to parse Python source
                    code into Python bytecode. Next, that bytecode is translated to a dialect of MLIR called PyIR.
                    Finally, that dialect is translated to LLVM IR and compiled down to machine code using the LLVM
                    compilation API. The first two stages serve as pycompile's frontend while LLVM serves as the
                    backend, translating IR code to machine code.
                </p>
                <BlogSection level={2}>The Compiler Frontend</BlogSection>
                <p>
                    As mentioned, the frontend is broken into two parts: the Python bytecode disassembly and the
                    conversion to PyIR. The bytecode layer takes in unmodified Python code and decodes it into{" "}
                    <code>ByteCodeModule</code> structs which represent a module. During development, this led to the
                    first issue of the project. The C++ API exposed by CPython does not directly offer the functionality
                    for generating bytecode. This makes sense since, as mentioned, this is considered an internal
                    implementation detail of the interpreter. Exposing it directly as a feature would imply official
                    support. What to do, then?
                </p>
                <p>
                    Even though the API does not directly support bytecode disassembly, Python itself does through the{" "}
                    <code>dis</code> library. Using the interpreter I can import this module and execute its disassembly
                    functionality s if I were calling it directly from a Python program. This yields an iterator of{" "}
                    <code>PyObject</code> pointers which I can then translate directly to the{" "}
                    <code>ByteCodeInstruction</code> structs which make up the module.
                </p>
                <p>
                    This works surprisingly well, but CPython shifts the responsibility of memory management onto the
                    programmer. This has two major consequences for this project. The first of which concerns the{" "}
                    <code>PyObject</code> pointers that I use for the disassembly. To prevent memory leaks, pycompile
                    needs to keep track of the lifetimes of each object and call <code>Py_DECREF()</code> appropriate to
                    manage the object's reference count. The second issue has to do with the Python interpreter itself.
                    At the beginning of any program which utilize the interpreter, <code>Py_Initialize()</code> must be
                    called before and interaction occurs and <code>Py_Finalize()</code> must be called after. These
                    actions are similarly the responsibility of the programmer to execute. If these are not called in
                    the correct order, or if the original scope is deleted, the program will leak memory or outright
                    segfault. To solve this particular issue, I created a RAII wrapper to ensure that the lifetime of
                    the interpreter is properly managed.
                </p>
                <p>
                    After the Python code is translated into a <code>ByteCodeModule</code>, it requires further
                    processing before being passed off to LLVM. This comes in the form of a custom MLIR dialect called
                    PyIR. Why a custom dialect, though? Why not translate directly to LLVM IR?
                </p>
                <p>
                    Python and LLVM IR are very different languages. LLVM IR is statically typed and strongly
                    opinionated. Python is neither of these. To make this translation as smooth as possible, I needed
                    another intermediate representation to bridge this GAP. This is where PyIR is used. It is a dialect
                    of MLIR, meaning that it shares many similarities with vanilla MLIR, but has been extended with
                    Python-specific instructions. With this dialect, I can translate each bytecode instruction into an
                    equivalent PyIR instruction. This also lets the program hook into a C++ runtime to handle Python's
                    dynamic type system and unique scope management. For example, a basic Python hello world program
                    generates the following MLIR:
                </p>
                <SyntaxHighlighter
                    language="mlir"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`module {
  func.func @__pymodule() {
    pyir.init_module "pycompile/examples/hello_world.py", "__main__"
    %0 = pyir.make_function "__pyfn_main_0"
    pyir.store_name "main", %0 : !pyir.object
    %1 = pyir.load_name "__name__"
    %2 = pyir.load_const "__main__"
    %3 = pyir.compare_op "bool(==)", %1, %2 : !pyir.object -> !pyir.object
    %4 = pyir.is_truthy %3 : !pyir.object -> i1
    cf.cond_br %4, ^bb2, ^bb1
  ^bb1:  // pred: ^bb0
    pyir.destroy_module
    return
  ^bb2:  // pred: ^bb0
    %5 = pyir.load_name "main"
    %6 = pyir.push_null
    %7 = pyir.call %5() : () -> !pyir.object
    pyir.destroy_module
    return
  }
  func.func @__pyfn_main_0(%arg0: !pyir.object, %arg1: !pyir.object) -> !pyir.object {
    pyir.push_scope
    %0 = pyir.load_name "print"
    %1 = pyir.push_null
    %2 = pyir.load_const "Hello, World!"
    %3 = pyir.call %0(%2) : (!pyir.object) -> !pyir.object
    %4 = pyir.load_const #pyir.none
    pyir.pop_scope
    pyir.return_value %4 : !pyir.object
  }
}`}
                </SyntaxHighlighter>
                <p>
                    Notice the instructions prefixed with <i>pyir</i> like <code>pyir.load_name</code>. These dialect
                    extensions allow PyIR to get as close to Python bytecode as possible while remaining compatible with
                    MLIR. Since it remains compatible with MLIR, it can be later translated to LLVM IR for the backend.
                </p>
                <p>
                    Despite this compatibility, Python Bytecode still cannot be directly translated to PyIR without some
                    manipulation. This is a consequence of the Python interpreter's implementation as a{" "}
                    <i>stack machine</i>. It processes incoming instructions primarily by pushing and popping from a
                    central stack of values. This works well for an interpreted language, but would be difficult to
                    directly translate into register-based assembly (through MLIR). For this project, I needed a
                    sequence of instructions that could be executed as-is, without needing to constantly reference a
                    stack at runtime. To accommodate this, pycompile simulates a runtime stack during the translation
                    process. If an bytecode instruction references arguments on the stack, <i>BUILD_LIST</i> for
                    example, those arguments are popped off of the virtual stack and the result is pushed back onto it.
                    This effectively unrolls the stack, allowing each PyIR instruction to be self-contained with
                    arguments that reference other instruction results directly, without needing to go through the stack
                    first.
                </p>
                <BlogSection level={2}>The Compiler Backend</BlogSection>
                <p>
                    The backend for this compiler is luckily much more straightforward. Since PyIR is a dialect of MLIR,
                    it can almost directly be translated to LLVM IR. From there, LLVM can compile the IR code down to an
                    object where it can be linked with a main library. The main issue for this stage is how to best
                    translate bespoke Python operations like <code>pyir.load_name</code> to instructions in LLVM IR. The
                    initial solution for MLIR was to simply extend it with dialect instructions, but that option is
                    unavailable at this stage. Another option would be to translate a "variable load" operation directly
                    into raw LLVM IR. However, Python's dynamic typing makes this straightforward option much more
                    difficult.
                </p>
                <p>
                    LLVM IR (and MLIR, hence the dialect) are strongly and statically typed languages. Simple assignment
                    and reassignment with arbitrary types will not work here the same way it works in Python. This is
                    likely a partial motivation for most other Python compilers to mandate strict typing. LLVM IR does
                    have the concept of "opaque pointers", meaning that the <code>ptr</code> type contains no specific
                    type information. However, the language still requires predetermined information on how large the
                    pointed-to object is in memory, making true dynamic typing difficult. Another LLVM-only option would
                    be to create custom vtables and function pointers, but this would require significant low-level
                    translation logic to map Python primitives (and data structures) to LLVM types. Using this method to
                    handle member functions (like <code>dict::update()</code>) would require more custom logic on top of
                    this. Suffice to say, there is a good reason why most low-level languages are strictly typed.
                </p>
                <p>
                    What, then, is the best option for handling Python's type mechanism? The solution that I settled
                    upon for pycompile was to use LLVM's opaque pointers to point to high-level <code>pyir.object</code>
                    s. References to these objects in memory are then passed to linked C++ runtime functions which
                    perform the actual type resolution and handling. By routing through C++ in this manner, the program
                    can abstract away all of the type handling logic to a standard runtime library which is
                    knowledgeable of the concrete Python types. However, this means that C++ niceties like smart
                    pointers are unavailable, since LLVM pointers are only raw pointers to memory. This will have
                    consequences later when we consider memory management.
                </p>
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
