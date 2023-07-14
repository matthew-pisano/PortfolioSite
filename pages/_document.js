import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/css/katex.css" rel="stylesheet" type="text/css"></link>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link href="/css/common.css" rel="stylesheet" type="text/css"/>
                <link href="/css/App.css" rel="stylesheet" type="text/css"/>
                <script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/js/base.js" type="text/javascript"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}