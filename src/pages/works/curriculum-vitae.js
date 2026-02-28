import React from "react";

import Wrapper from "@/components/wrappers/Wrapper";
import { Constants, genPageTitle } from "@/lib/util/utils";
import styles from "@/styles/wrappers/CurriculumVitae.module.css";

export default function CurriculumVitae() {
    return (
        <Wrapper pageName={genPageTitle(__filename)} pageClass={styles.cvPage}>
            <embed
                id="cvEmbed"
                className={`${styles.cvEmbed}`}
                type="application/pdf"
                src={Constants.cvUrl + "#zoom=FitH"}
            />
        </Wrapper>
    );
}
