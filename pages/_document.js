import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";
 
export default function Document() {
    return (
        <Html style={{height: "100%"}}>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/css/katex.css" rel="stylesheet" type="text/css"></link>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                {/*<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css"></link>*/}
                <link href="/css/common.css" rel="stylesheet" type="text/css"/>
                <link href="/css/terminal.css" rel="stylesheet" type="text/css"/>
                <link href="/css/toolbars.css" rel="stylesheet" type="text/css"/>
                <link href="/css/pages.css" rel="stylesheet" type="text/css"/>
                <link href="/css/tags.css" rel="stylesheet" type="text/css"/>
                <link href="/css/App.css" rel="stylesheet" type="text/css"/>
                {/*<script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/js/base.js" type="text/javascript"></script>*/}

                {/*<script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js"></script>*/}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}