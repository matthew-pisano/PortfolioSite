import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";
 
export default function Document() {
    return (
        <Html style={{height: "100%"}} lang="en">
            <Head>
                <meta name="description" content="A showcase of my projects, skills, and future goals"/>

                <link href="https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/css/katex.css" rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link href="/css/variables.css" rel="stylesheet" type="text/css"/>
                <link href="/css/common.css" rel="stylesheet" type="text/css"/>
                <link href="/css/pages.css" rel="stylesheet" type="text/css"/>
                <link href="/css/terminal.css" rel="stylesheet" type="text/css"/>
                <link href="/css/sidebar.css" rel="stylesheet" type="text/css"/>
                <link href="/css/margins.css" rel="stylesheet" type="text/css"/>
                <link href="/css/tags.css" rel="stylesheet" type="text/css"/>
                <link href="/css/App.css" rel="stylesheet" type="text/css"/>

                <link href="/css/responsive/desktop.css" rel="stylesheet" type="text/css"/>
                <link href="/css/responsive/tablet.css" rel="stylesheet" type="text/css"/>
                <link href="/css/responsive/mobile.css" rel="stylesheet" type="text/css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}