import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GitLink } from "@/components/Links";
import { TileTag } from "@/components/Tags";
import { Tile } from "@/components/Tiles";
import { PageInfo, TileInfo } from "@/components/Wrapper";
import { PageColor } from "@/lib/themes";
import { genPageTitle } from "@/lib/utils";

export default function Imperium() {
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Imperium",
        "A historical grand strategy game for android devices",
        { backgroundColor: PageColor.SUDO_TEAL },
        [TileTag.PERSONAL, TileTag.JAVA, TileTag.ANDROID],
        (
            <>
                <GitLink href={"https://github.com/matthew-pisano/Imperium"}>Imperium</GitLink>
            </>
        )
    );

    return (
        <DefaultWrapper pageInfo={pageInfo}>
            <Tile tileInfo={new TileInfo({ title: <h2>Overview</h2> })}>
                <p>
                    Imperium is an application developed for android without any game engines or development frameworks.
                </p>
                <p>
                    Its motivations are twofold: to develop a genuinely enjoyable Android emulation of the <i>RISK</i>
                    board game and other grand strategy games for the PC platform and to develop a low level expertise
                    in Android for myself by building everything from scratch.
                </p>
            </Tile>

            <Tile tileInfo={new TileInfo({ title: <>Development</>, thumbnail: "/media/image/imperiumLogo.png" })}>
                <p>
                    Starting as a side-project, Imperium soon became a learning exercise in Android and Java
                    development. Utilizing many techniques such as thread management, Android layout design, knowledge
                    of the Android file system and permissions, and general game design, the making of Imperium greatly
                    expanded my knowledge of Java, Android, and software development.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({
                        title: <>Publishing and Best Practices</>,
                        thumbnail: "/media/image/imperiumGooglePlay.png"
                    })
                }>
                <p>
                    Published to the Google Play store in early 2020, Imperium has amassed several thousand downloads.
                    Adherence to Google Play guidelines and standards has resulted in an enjoyable experience for many
                    users. Local multiplayer is also supported resulting in many users being reached by recommendations.
                </p>
            </Tile>

            <Tile
                tileInfo={
                    new TileInfo({ title: <>Features and Game-play</>, thumbnail: "/media/image/imperiumMap.png" })
                }>
                <p>
                    Imperium implements many features present in the grand strategy games it emulates. Users can save
                    and reload save files, play, pause or skip music of its soundtrack, access an inbuilt tutorial, and
                    choose from multiple maps and three modes of game-play. In a game, a user can zoom and pan around a
                    large image composed of many, smaller bitmaps representing provinces that can be captured, engaging
                    enemy units until they own every province on the map. The modes increase in complexity, starting
                    from the basic rules of <i>RISK</i> with devastation of provinces and attrition added next, up to
                    diplomacy and historical scenarios at its most complex. Statistics of a player's game are recorded
                    and saved for access by the player in-game.
                </p>
            </Tile>
        </DefaultWrapper>
    );
}
