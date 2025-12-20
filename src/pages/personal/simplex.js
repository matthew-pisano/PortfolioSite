import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GitLink } from "@/components/Links";
import { TileTag } from "@/components/Tags";
import { Tile } from "@/components/Tiles";
import { PageInfo, TileInfo } from "@/components/Wrapper";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Simplex() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Simplex",
        "A math-oriented interpreted scripting language built in Java",
        { backgroundColor: PageColor.SUDO_TEAL },
        [TileTag.PERSONAL, TileTag.JAVA, TileTag.ANDROID],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/SimplexIDE"}>Simplex</GitLink>
            </>
        )
    );

    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
                    Simplex is a programming language with focus is on mathematical and scientific calculations. It
                    offers built-in matrix operations (multiplication, determinants, etc.) as well as several scientific
                    and fundamental constants.
                </p>
                <p>
                    It is strictly typed like languages such <code>C</code> or <code>Java</code>, but has a similar
                    syntax to <code>Python</code> with type hinting. Being a hybrid interpreted language offers Simplex
                    the ability to freeze any source code on its way to execution for viewing by the user.
                </p>
                <p>
                    Simplex is built entirely from scratch, without using any external libraries or frameworks. The
                    language is written in <code>Java</code>.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({ title: <>Companion Android App</>, thumbnail: "/media/image/simplexCode.jpg" })
                }>
                <p>
                    The goal of the Simplex Android IDE is to both allow easy mobile programming and serve as an
                    educational tool. When a user of the app is ready to build their program, they have the option to
                    peer into the inner structure of the language. They are able to see each of the three stages,
                    Lexing, Parsing, and Interpreting, and how the code is structured within each: from being split into
                    tokens, to parsed into a tree, to the context given during interpretation. With this tool, the hope
                    is that any users new to programming would gain a deeper understanding of what goes on behind the
                    scenes.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({ title: <>Processing Its Source</>, thumbnail: "/media/image/simplexLex.jpg" })
                }>
                <p>
                    When source code is given to the Simplex interpreter, it first encounters the lexer. These
                    operations split the code into tokens separated into groups like 'numbers' or 'keywords'. Once the
                    code has been parsed into tokens, each line of the program is fed into the parser which creates the
                    core data structure of the program, a list of binary trees. Once the structure of the program is
                    formed, the list if given to the interpreter. The interpreter is the code that gives context the
                    nodes of the tree, reserved words are given their exact class names and variable ids are given their
                    proper types, among other things. After this step, the program is ready for execution.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Execution</> })}>
                <p>
                    After a program has been built into its data structure, it is ready for execution. By the time of
                    execution, all variables and functions have been loaded into memory with their initial values, so
                    execution begins at the beginning and goes line by line.
                </p>
                <p>
                    As each line is hit, any expressions in that line are resolved to their real values, reading the
                    index of an array for example, and functions have the real values or their arguments given to them
                    for their execution.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Scientific Focus</>, thumbnail: "/media/image/simplexSci.jpg" })}>
                <p>
                    One of the other notable features of Simplex is its concentration on making some physics or
                    mathematical operations easier. The language comes with a wide array of built-in mathematical and
                    physical constants and functions. These include constants like 'PI', the speed of light ('c'), or
                    functions like <code>sine()</code>. Additionally, Simplex offers operations for array manipulation
                    that are not present in many other languages. This comes from the fact that each array is treated as
                    a matrix. This allows for adding any N-Dimensional arrays together, which sum just as arrays would
                    in linear algebra. Integer of Double arrays can also be multiplied together to get the dot or cross
                    product of the two matrices. This becomes even more useful when used with the built-in determinate
                    and inverse functions that can be used on the arrays.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
