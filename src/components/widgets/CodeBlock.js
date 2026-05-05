import React from "react";

import mlir from "highlightjs-mlir";
import PropTypes from "prop-types";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import cmake from "react-syntax-highlighter/dist/cjs/languages/hljs/cmake";
import cpp from "react-syntax-highlighter/dist/cjs/languages/hljs/cpp";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("mlir", mlir);
SyntaxHighlighter.registerLanguage("cmake", cmake);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("python", python);

export default function CodeBlock({ children, language = "text", style = dracula, ...props }) {
    return (
        <div style={{ width: 0, minWidth: "100%", overflow: "auto" }}>
            <SyntaxHighlighter
                language={language}
                style={style}
                customStyle={{ borderRadius: "10px", textIndent: "0", margin: 0 }}
                {...props}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

CodeBlock.propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.string,
    style: PropTypes.object
};
