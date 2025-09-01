import React from "react";

import Link from "next/link";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GitLink, PageInfo, Tile, TileLink } from "@/lib/pageBuilder";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function UnivModels() {
    let tiles = [
        new Tile(
            <h2>Overview</h2>,
            (
                <>
                    The <i>Universal Models</i> library serves as an adapter between Hugging Face Transformers and
                    several other APIs. This includes the OpenAI API, the Hugging Face API, and local OpenAI APIs, such
                    as{" "}
                    <Link href="https://github.com/lm-sys/FastChat" target="_blank">
                        FastChat
                    </Link>
                    . All models from these different sources can be instantiated and interacted with in the same way as
                    regular, local <i>Transformers</i> models. This allows for the easy integration of these models into
                    projects that need generation from models from different sources. It is designed to work primarily
                    with autoregressive, decoder-only models, but can be easily extended to work with other types of
                    models.
                </>
            )
        ),
        new Tile(
            <>Utility</>,
            (
                <>
                    Originally starting off as a utility within my <Link href="/research/bergeron">Bergeron</Link>
                    research, this package has grown to be a useful tool for any project that needs to use. This has
                    allowed me to eliminate significant amounts of code from my projects, as its unified interface
                    allows for the easy integration of models from different sources.
                </>
            )
        ),
        new Tile(
            <>Source</>,
            (
                <>
                    The source code for this project can be found on the above GitHub page or on{" "}
                    <Link href="https://pypi.org/project/universalmodels/" target="_blank">
                        PyPI
                    </Link>
                    . The package is available for installation via:
                    <br />
                    <code>pip install universalmodels</code>
                </>
            )
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Universal Models",
        "An adapter between Huggingface transformers and several different APIs",
        { backgroundColor: PageColor.SUDO_TEAL },
        ["personal", "ai", "python"],
        [
            new GitLink("https://github.com/matthew-pisano/UniversalModels", "UniversalModels"),
            new TileLink("https://pypi.org/project/universalmodels/", "PyPi Project")
        ]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
