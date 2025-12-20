import React from "react";

import Wrapper, { PageInfo } from "@/components/wrappers/Wrapper";
import { Constants } from "@/lib/util/utils";
import styles from "@/styles/pageTiles.module.css";

export default function Resume() {
    let pageInfo = new PageInfo("resume", "Resume", "A brief overview of my resume");

    return (
        <Wrapper pageName={pageInfo.pageName} pageClass={styles.resumePage}>
            <embed
                id="resumeEmbed"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                type="application/pdf"
                src={Constants.resumeUrl + "#zoom=FitH"}
            />
        </Wrapper>
    );
}
