import React from "react";

import Link from "next/link";

import { GitLink, TileLink, WebLink } from "@/components/tiles/Links";
import { TileTag } from "@/components/tiles/Tags";
import { Tile } from "@/components/tiles/Tiles";
import DefaultWrapper from "@/components/wrappers/DefaultWrapper";
import { PageInfo, TileInfo } from "@/components/wrappers/Wrapper";
import { PageColor } from "@/lib/util/themes";
import { genPageTitle } from "@/lib/util/utils";

export default function UnivModels() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Universal Models",
        "An adapter between Huggingface transformers and several different APIs",
        { backgroundColor: PageColor.SUDO_TEAL },
        [TileTag.PERSONAL, TileTag.AI, TileTag.PYTHON],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/UniversalModels"}>UniversalModels</GitLink>
                <WebLink href={"https://pypi.org/project/universalmodels/"}>PyPi Project</WebLink>
            </>
        )
    );
    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
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
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Utility</> })}>
                <p>
                    Originally starting off as a utility within my <Link href="/research/bergeron">Bergeron</Link>
                    research, this package has grown to be a useful tool for any project that needs to use. This has
                    allowed me to eliminate significant amounts of code from my projects, as its unified interface
                    allows for the easy integration of models from different sources.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Source</> })}>
                <p>
                    The source code for this project can be found on the above GitHub page or on{" "}
                    <Link href="https://pypi.org/project/universalmodels/" target="_blank">
                        PyPI
                    </Link>
                    . The package is available for installation via: <code>pip install universalmodels</code>
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
