import React from "react";

import mlir from "highlightjs-mlir";
import Link from "next/link";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import cmake from "react-syntax-highlighter/dist/cjs/languages/hljs/cmake";
import cpp from "react-syntax-highlighter/dist/cjs/languages/hljs/cpp";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
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
    SyntaxHighlighter.registerLanguage("cmake", cmake);
    SyntaxHighlighter.registerLanguage("cpp", cpp);
    SyntaxHighlighter.registerLanguage("python", python);

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
                <p>
                    Before moving on, it is important to understand the different levels of intermediate representations
                    needed to reach the eventual runtime.
                </p>
                <BlogSection level={2}>Python Bytecode</BlogSection>
                <p>
                    The first translation of the raw Python code is to CPython's Python bytecode. Related to previous
                    points on bytecode's instability, this section is most relevant to bytecode for Python 3.14.
                    Especially after 3.11 and 3.12 function calls and for loops have undergone significant changes.
                    Further changes will undoubtedly occur in the future.
                </p>
                <p>
                    As mentioned bytecode instructions are always processed within the context of a main stack (barring
                    exception handling). As the interpreter executes, instructions are evaluated in sequence while
                    modifying the contents of the data stack. Objects on this stack need not be objects in the
                    traditional sense either. Functions, scopes, and other metadata can also be pushed and popped like
                    data types. For example, if a <i>BUILD_LIST</i> instruction with an argument of <i>3</i> is being
                    evaluated, then three objects will be popped from the stack and placed into a new list data
                    structure reference which is pushed onto the top of the stack.
                </p>
                <p>
                    Python bytecode provides several specialized loading and storing functions. These are the main ways
                    of fetching from and storing to memory through variable references. Generally, load functions load
                    an object from memory and place it at the top of the stack and store functions take the object from
                    the top of the stack and store it in memory. For example, <i>LOAD_CONST</i> is one of the most
                    complex functions to handle. It is responsible for loading constant literals (<code>1</code>,{" "}
                    <code>True</code>, <code>"Hello"</code>) onto the stack. <i>LOAD_FAST</i> and <i>STORE_FAST</i> load
                    and store variables local to the current scope. There are also global load and store instructions
                    for loading variables from global scope. <i>LOAD_NAME</i> and <i>STORE_NAME</i> handle variables
                    from any available scope. Generally, these operations take a single identifier as an argument.
                </p>
                <p>
                    Simple logical operations are generally handled by <i>BINARY_OP</i> and <i>COMPARE_OP</i>. The
                    binary operator takes care of arithmetic operations like addition, multiplication, modulo, or
                    certain logical assignment operators. In contrast, unary operations like "not" are generally
                    performed by specialized bytecode instructions like <i>UNARY_NOT</i>. Here is another example of
                    bytecode's continually evolving nature. Before 3.11, binary operations were handled by specific
                    instructions like <i>BINARY_ADD</i> and <i>BINARY_MULTIPLY</i>, similar to how unary operations are
                    handled, instead of the more general <i>BINARY_OP</i>. These logical operations also present another
                    motivation for having a C++ runtime over generated MLIR. The operation that <i>BINARY_OP +</i>{" "}
                    performs could be a concatenation if the top two stack objects are strings or an addition if they
                    are integers. The types of the top two stack objects is entirely runtime dependent and would
                    therefore be difficult to encode in advance with MLIR.
                </p>
                <p>
                    Jump instructions have also undergone recent changes. Instructions like <i>JUMP_FORWARD</i> or{" "}
                    <i>JUMP_BACKWARD</i> take integer arguments. For jumping forward, this is a simple absolute offset
                    to the target block. Previously, jumping backward was implemented with byte offsets relative to the
                    jump instruction when it was introduced in 3.11. Post 3.12, this was changed to an absolute
                    instruction offset like forward jumping. This one in particular is tricky since most online
                    resources reference the old implementation as of the time of writing.
                </p>
                <p>
                    Each Python function (though not builtins) contains a special <code>__code__</code> attribute. This
                    attribute points to <code>PyCodeObject</code> structs within CPython. This object contains important
                    metadate for the function and its scope. Namely, three tuples of references.{" "}
                    <code>co_varnames</code> contains the names of all local variables. <code>co_cellvars</code>{" "}
                    contains the names of local variables in this scope that are referenced by inner functions or
                    closures. These variables may outlive their original function if the lifetime of the closure exceeds
                    it. Finally, <code>co_freevars</code> contains the names of variables in the current scope that are
                    defined in an outer scope, a view from the other side of <code>co_cellvars</code>. When calling{" "}
                    <code>LOAD_FAST 0</code>, the interpreter looks up the variable name stored in{" "}
                    <code>co_varnames[0]</code> and the top of the stack is stored in that variable.
                </p>
                <p>
                    Actually calling a function often requires the use of the <i>CALL</i> instruction. When the
                    interpreter sees <code>CALL N</code>, it pops three items from the top of the stack and uses them as
                    arguments to the function now sitting at the top of the stack. For free functions, the interpreter
                    will also call <i>PUSH_NULL</i> immediately before the <i>CALL</i> instruction. This null serves as
                    a placeholder for a self reference. However, since free functions have no self, this is always null.
                </p>
                <p>As an example, suppose we have a very simple Python program that prints a single message:</p>
                <SyntaxHighlighter
                    language="python"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`msg = "Hello World!"
print(msg)`}
                </SyntaxHighlighter>
                <p>When represented with bytecode, we get:</p>
                <SyntaxHighlighter
                    language="python"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`*L0 offset 0    | RESUME                         [Int]      | 0
*L1 offset 2    | LOAD_CONST                     [Str]      | 'Hello World!'
 L1 offset 4    | STORE_NAME                     [Str]      | msg
*L2 offset 6    | LOAD_NAME                      [Str]      | print
 L2 offset 8    | PUSH_NULL                      [None]     | 
 L2 offset 10   | LOAD_NAME                      [Str]      | msg
 L2 offset 12   | CALL                           [Int]      | 1
 L2 offset 20   | POP_TOP                        [None]     | 
 L2 offset 22   | LOAD_CONST                     [None]     | None
 L2 offset 24   | RETURN_VALUE                   [None]     |`}
                </SyntaxHighlighter>
                <p>
                    Notice how the string is first loaded in as a constant at the top of the stack and stored into the
                    variable <i>msg</i>. Next, the <i>print</i> name is loaded at the stack's current top, <i>msg</i> is
                    pushed next, and the <i>CALL</i> instruction tells the interpreter to pop one argument from the
                    stack and then call the function at the new top (after consuming the <i>None</i> placeholder).
                </p>
                <BlogSection level={2}>PyIR</BlogSection>
                <p>
                    Before describing the translation from bytecode to PyIR, I should spend some time going over its
                    definition. For any program defining a dialect of MLIR, the extensions to the language are defined
                    within a <i>tablegen</i> file. There are four types of objects that we are concerned with
                    representing. The first is a dialect. This is the top level definition that lays out PyIR's
                    metadata. The next are types. These define custom object types for the dialect. For PyIR,{" "}
                    <code>ByteCodeObject</code> types are often passed between instructions. This represents something
                    analogous to a Python base object. Attributes represent constant values embedded directly into
                    instructions instead of a variable. For example, if loading in a constant value of <i>None</i>, PyIR
                    would represent this as loading in a <code>pyir::NoneAttr</code>, a stand-in for Python'{" "}
                    <code>NoneType</code>. Finally, there are operations. Here, this is defined as a base{" "}
                    <code>PyIR_Op</code>, from which specific ops inherit.
                </p>
                <p>
                    With regards to how each of these four identifier types are defined, their naming is dependent on
                    their type. For example, consider:
                </p>
                <SyntaxHighlighter
                    language="mlir"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`def PyIR_Dialect : Dialect {
    let name = "pyir";
    let summary = "Python bytecode IR dialect";
    let cppNamespace = "::pyir";
    let useDefaultTypePrinterParser = 1;
    let useDefaultAttributePrinterParser = 1;
}`}
                </SyntaxHighlighter>
                <p>
                    This block defines a top-level dialect called <i>PyIR</i>, not <i>PyIR_Dialect</i>. Similarly:
                </p>
                <SyntaxHighlighter
                    language="mlir"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`def PyIR_InitModule : PyIR_Op<"init_module"> {
    let summary = "Initialize module-level metadata";
    let arguments = (ins StrAttr:$file, StrAttr:$name);
    let assemblyFormat = "$file \`,\` $name attr-dict";
}`}
                </SyntaxHighlighter>
                <p>
                    This defines an instruction named just <i>InitModule</i> and referenced in C++ as{" "}
                    <code>pyir::InitModule</code>.
                </p>
                <p>To actually compile this tablegen file, it needs to be registered with LLVM through cmake:</p>
                <SyntaxHighlighter
                    language="cmake"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`set(LLVM_TARGET_DEFINITIONS pyir.td)`}
                </SyntaxHighlighter>
                <p>
                    Before the tablegen file can be compiled, however, it must be compiled along with several auxiliary
                    files. <i>pyir</i>, <i>pyir_attrs</i>, <i>pyir_ops</i>, <i>pyir_types</i> cpp/hpp pairs of files
                    must be defined and compiled along with the tablegen file. These file include the <i>.inc</i> files
                    generated by the tablegen, making them available to the rest of the program. When including the{" "}
                    <i>.inc</i> files for the attributes, types, and ops, specific macros need to be defined to ensure
                    that the right code makes it part the preprocessing stage of compilation. This in particular was
                    fairly cumbersome to get right since different online sources list different macros and different
                    conditions for including those macros. Oftentimes, the official MLIr documentation is the only
                    up-to-date source of truth.
                </p>
                <p>
                    Within the <i>pyir.cpp</i> file, every defined operation, type, and attribute must be registered in
                    order to be referenced properly in the rest of the program.
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`namespace pyir {
    void PyIRDialect::initialize() {
        addOperations<InitModule, DestroyModule, ToBool, IsTruthy, BinaryOp, Call, LoadConst, LoadDeref, LoadFast,
                      LoadName, StoreName, PopTop, PushNull, Resume, ReturnValue, StoreFast, StoreDeref, UnaryNot,
                      UnaryNegative, UnaryInvert, CompareOp, FormatSimple, BuildString, MakeFunction, PushScope,
                      PopScope, LoadArg, BuildList, ListExtend, ListAppend, LoadAttr, ContainsOp, BuildSet, SetUpdate,
                      SetAdd, BuildMap, StoreSubscr, ForIter, GetIter, PopIter>();

        addTypes<ByteCodeObjectType>();
        addAttributes<NoneAttr>();
    }
} // namespace pyir`}
                </SyntaxHighlighter>
                <p>
                    After this point, operations like <i>CompareOp</i> are simply referenced as{" "}
                    <code>pyir::CompareOp</code>.
                </p>
                <p>
                    As mentioned, the translation between Python bytecode and PyIR is not trivial. Since bytecode
                    instructions are usually executed on the stack, they contain no information about which references
                    they take as input, only how many or their position on the stack. For example, a Python bytecode{" "}
                    <i>CompareOp</i> instruction may look something like <code>COMPARE_OP [Str] | bool(==)</code>, while
                    its PyIR counterpart looks like <code>%3 = pyir.compare_op "bool(==)", %1, %2</code>. The operation
                    to perform (<i>==</i>) is embedded in the bytecode instruction, but how do we know which input
                    objects it takes? To find out, we need to simulate the stack using a form of static analysis at
                    compile-time. During the compilation process, pycompile pushes and pops MLIR pointers to and from
                    the stack with each translated operation. When the program reaches the <i>CompareOp</i>, it knows
                    which two pointers are the inputs to the operation. Looking at the conversion code, we see this
                    explicitly:
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`void compareOpCodegen(mlir::OpBuilder& builder, mlir::MLIRContext& ctx, const mlir::Location& loc,
                      const ByteCodeInstruction& instr, ConversionMeta& meta) {
    pyir::ByteCodeObjectType pyType = pyir::ByteCodeObjectType::get(&ctx);
    const std::string opStr = instr.argrepr;
    if (opStr.empty())
        throw PyCompileError("COMPARE_OP must have a string argval", loc);
    mlir::Value rhs = meta.stack.back();
    meta.stack.pop_back();
    mlir::Value lhs = meta.stack.back();
    meta.stack.pop_back();
    meta.stack.push_back(builder.create<pyir::CompareOp>(loc, pyType, opStr, lhs, rhs).getResult());
}`}
                </SyntaxHighlighter>
                <p>
                    Notice how <code>meta.stack</code> is actively modified during the conversion process, with the
                    result pointer (the boolean result) being pushed after the conversion. Note that no actual values
                    are being calculated yet. The literal boolean result is not being generated, only a pointer to a
                    generic <code>pyir::ByteCodeObject</code> that will eventually hold that boolean at runtime.
                    pycompile performs conversions like this for every bytecode instruction in the original program,
                    generating the corresponding PyIR code as it goes.
                </p>
                <p>
                    As an example, consider the simple print program from a moment ago, when compiled down to PyIR, we
                    get:
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
    pyir.init_module "simple.py", "__main__"
    %0 = pyir.load_const "Hello World!"
    pyir.store_name "msg", %0 : !pyir.object
    %1 = pyir.load_name "print"
    %2 = pyir.push_null
    %3 = pyir.load_name "msg"
    %4 = pyir.call %1(%3) : (!pyir.object) -> !pyir.object
    pyir.destroy_module
    return
  }
}`}
                </SyntaxHighlighter>
                <p>
                    Notice the <code>pyir.call</code> instruction, instead of needing to peek back through the stack,
                    the conversion code already popped the pointers off of the virtual stack and has associated them
                    with the literal arguments <code>%1</code> and <code>%3</code>. The conversion to PyIR completes the
                    transition from a stack-based IR to one geared towards register-based machines (like a CPU).
                </p>
                <p>
                    Similar to Python and the interpreter, a <code>mlir::MLIRContext</code> object must be in scope for
                    as long as MLIR or LLVm is used. The program will segmentation fault if not.
                </p>
                <BlogSection level={2}>LLVM IR</BlogSection>
                <p>
                    PyIR is lowered down to LLVM IR (technically an LLVM dialect of MLIR) through a series of passes.
                    These passes must be explicitly registered in order to be used. Passes in C++ are registered with:
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`ctx.loadDialect<mlir::LLVM::LLVMDialect>();
mlir::PassManager pm(&ctx);
pm.addPass(mlir::createCanonicalizerPass());
// Lower PyIR to LLVM dialect
pm.addPass(createPyIRToLLVMPass());`}
                </SyntaxHighlighter>
                <p>
                    The first line loads in the LLVm dialect of MLIR for translation and the second line creates a pass
                    manager that handles the conversion passes. Line three adds something called a canonicalizer pass,
                    this pass performs basic optimizations like folding constants. The last line is the most important,
                    it registers the PyIR lowering pass to actually perform the conversion fro PyIR to LLVM IR. The
                    inner function here simply returns a unique pointer to a <code>PyIRToLLVMPass</code> object. Within
                    this object, the actual translation logic is encoded. Within this class, there is the{" "}
                    <code>runOnOperation()</code> function. It is an override from the <code>mlir::PassWrapper</code>{" "}
                    superclass. Within this function, we have:
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`mlir::LLVMTypeConverter typeConverter(ctx);
addPyIRTypeConversions(typeConverter);

mlir::RewritePatternSet patterns(ctx);
patterns.add<InitModuleLowering, DestroyModuleLowering, IsTruthyLowering, ToBoolLowering, UnaryNegativeLowering,
             UnaryNotLowering, UnaryInvertLowering, BinaryOpLowering, CompareOpLowering, ...>(typeConverter, ctx);
                 
mlir::populateFuncToLLVMConversionPatterns(typeConverter, patterns);
mlir::arith::populateArithToLLVMConversionPatterns(typeConverter, patterns);
mlir::cf::populateControlFlowToLLVMConversionPatterns(typeConverter, patterns);

mlir::LLVMConversionTarget target(*ctx);
target.addIllegalDialect<pyir::PyIRDialect>();
target.addIllegalDialect<mlir::arith::ArithDialect>();
target.addLegalDialect<mlir::LLVM::LLVMDialect>();
target.addLegalOp<mlir::ModuleOp>();`}
                </SyntaxHighlighter>
                <p>
                    First, we register an MLIR to LLVM type converter object. The line immediately after informs the
                    lowering code that <code>pyir::ByteCodeObjectType</code> is to be mapped to{" "}
                    <code>mlir::LLVM::LLVMPointerType</code>. This is how our PyIR Python object pointers get translated
                    to opaque LLVM pointers. Next, the lowering patterns for each individual instruction are added.
                    There are many of these, so this example has been truncated. I will revisit these individual
                    lowerings later on. After this, MLIR conversions for functions, arithmetic logic, and control flow
                    are explicitly registered. MLIR very much uses a "pay for what you use" philosophy; very few things
                    are implicit, features must be explicitly requested in order to be used. There is no "convert
                    everything function", each component of the MLIR language must be explicitly registered one-by-one.
                    Finally, we register out dialect as illegal.
                </p>
                <p>
                    Hold on, why would we register our own dialect as "illegal"? That seems rather counter-productive.
                    Notice that PyIR is being marked as illegal with respect to the general{" "}
                    <code>mlir::LLVMConversionTarget</code>. This illegal marking essentially says "this dialect is not
                    part of LLVM, do not attempt to lower it as such". Instead, the lowering code will fall back to our
                    custom PyIR lowering functions from earlier. This is the exact behavior that we want.
                </p>
                <p>
                    Speaking of the custom lowering functions, this is a good place to explain what they do and how they
                    work. Once again, take <i>CompareOp</i> as an example:
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`/**
 * Lowers pyir.compare_op to a call to the appropriate runtime compare operator function.
 *
 * The operator string is mapped to a runtime function at compile time. Both operands are heap-allocated PyObj*
 * pointers. The runtime performs the operation and returns a new heap-allocated PyObj*.
 *
 * pyir.compare_op "==", %lhs, %rhs
 *     %result = llvm.call @pyir_eq(%lhs, %rhs)
 */
struct CompareOpLowering : PyIROpConversion {
    CompareOpLowering(const mlir::LLVMTypeConverter& tc, mlir::MLIRContext* ctx) :
        PyIROpConversion(pyir::CompareOp::getOperationName(), tc, ctx) {}

    mlir::LogicalResult matchAndRewrite(mlir::Operation* op, mlir::ArrayRef<mlir::Value> operands,
                                        mlir::ConversionPatternRewriter& rewriter) const override;
};`}
                </SyntaxHighlighter>
                <p>
                    This lowers a <code>pyir.compare_op</code> instruction to LLVM IR that can be directly compiled down
                    to an executable binary. This class is explicitly registered to convert the compare operation
                    through the superclass instantiation:{" "}
                    <code>PyIROpConversion(pyir::CompareOp::getOperationName(), tc, ctx)</code>. The actual rewrite
                    logic happens within <i>matchAndRewrite</i>:
                </p>
                <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`mlir::LogicalResult CompareOpLowering::matchAndRewrite(mlir::Operation* op, const mlir::ArrayRef<mlir::Value> operands,
                                                       mlir::ConversionPatternRewriter& rewriter) const {
    pyir::CompareOp compareOp = mlir::cast<pyir::CompareOp>(op);

    // Map operator string to runtime function name
    static const std::unordered_map<std::string, std::string> opToFn = \{
            {"==", "pyir_eq"}, {"!=", "pyir_ne"}, {"<", "pyir_lt"},
            {"<=", "pyir_le"}, {">", "pyir_gt"},  {">=", "pyir_ge"},
    };

    std::string opStr = compareOp.getOp().str();
    if (opStr.contains("bool(")) {
        opStr = opStr.substr(5); // Remove 'bool('
        opStr.pop_back(); // Remove ')'
    }
    const auto it = opToFn.find(opStr);
    if (it == opToFn.end())
        return mlir::failure();

    return linkOpToRuntimeFunc(it->second, op, operands, rewriter, 2);
}
`}
                </SyntaxHighlighter>
                <p>
                    This function extracts the string operation from the instruction through{" "}
                    <code>compareOp.getOp().str()</code> and matches it with the corresponding function to link to and
                    run during execution. For example, if the compare operation string operation was "==", the linked
                    function would be <i>pyir_eq</i>. On the inside of <code>linkOpToRuntimeFunc</code>, it replaces the
                    current operation with a <code>mlir::LLVM::CallOp</code> operation which calls the linked runtime
                    function.
                </p>
                <p>
                    The conversion goes through these, instruction-by-instruction until the entire program is translated
                    into LLVM IR with calls to the standard runtime library. Going back to the simple print program from
                    earlier, we get:
                </p>
                <SyntaxHighlighter
                    language="mlir"
                    style={dracula}
                    customStyle={{
                        borderRadius: "10px",
                        textIndent: "0"
                    }}>
                    {`; ModuleID = 'simple.py'
source_filename = "simple.py"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128"
target triple = "x86_64-redhat-linux-gnu"

@__pyir_str_print = private constant [6 x i8] c"print\\00"
@__pyir_str_msg = private constant [4 x i8] c"msg\\00"
@__pyir_const_str_10571665718977150164 = private constant [13 x i8] c"Hello World!\\00"
@__pyir_str___main__ = private constant [9 x i8] c"__main__\\00"
@"__pyir_str_simple.py" = private constant [42 x i8] c"simple.py\\00"

declare void @pyir_destroyModule()
declare ptr @pyir_call(ptr, ptr, i64)
declare ptr @pyir_loadName(ptr)
declare void @pyir_storeName(ptr, ptr)
declare ptr @pyir_loadConstStr(ptr)
declare void @pyir_initModule(ptr, ptr)

define void @__pymodule() {
  call void @pyir_initModule(ptr @"__pyir_str_simple.py", ptr @__pyir_str___main__)
  %1 = call ptr @pyir_loadConstStr(ptr @__pyir_const_str_10571665718977150164)
  call void @pyir_storeName(ptr @__pyir_str_msg, ptr %1)
  %2 = call ptr @pyir_loadName(ptr @__pyir_str_print)
  %3 = call ptr @pyir_loadName(ptr @__pyir_str_msg)
  %4 = alloca [1 x ptr], i64 1, align 8
  %5 = getelementptr ptr, ptr %4, i64 0
  store ptr %3, ptr %5, align 8
  %6 = call ptr @pyir_call(ptr %2, ptr %4, i64 1)
  call void @pyir_destroyModule()
  ret void
}

!llvm.module.flags = !{!0}

!0 = !{i32 2, !"Debug Info Version", i32 3}`}
                </SyntaxHighlighter>
                <p>
                    It is much more verbose than out original two-line Python program, but this is the code that is
                    ready to be compiled and run. Note the lines similar to{" "}
                    <code>declare ptr @pyir_call(ptr, ptr, i64)</code> these are unlinked references directly to the
                    runtime library. This code alone will compile, but it will not link! Yet.
                </p>
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
