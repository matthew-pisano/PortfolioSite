import React from "react";

import Wrapper from "@/components/wrappers/Wrapper";
import { Constants } from "@/lib/util/utils";
import styles from "@/styles/pageTiles.module.css";

export default function CurriculumVitae() {
    return (
        <Wrapper pageName={"curriculumVitae"} pageClass={styles.cvPage}>
            <embed
                id="cvEmbed"
                className={`${styles.cvEmbed}`}
                type="application/pdf"
                src={Constants.cvUrl + "#zoom=FitH"}
            />
        </Wrapper>
    );
}
