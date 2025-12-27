import React from "react";

import alignmentProblem from "@/components/readingList/cogsci/alignmentProblem";
import behave from "@/components/readingList/cogsci/behave";
import determined from "@/components/readingList/cogsci/determined";
import emotionMachine from "@/components/readingList/cogsci/emotionMachine";
import godelEscherBach from "@/components/readingList/cogsci/godelEscherBach";
import humanCompatible from "@/components/readingList/cogsci/humanCompatible";
import strangeLoop from "@/components/readingList/cogsci/strangeLoop";
import superintelligence from "@/components/readingList/cogsci/superintelligence";
import thinkingFastAndSlow from "@/components/readingList/cogsci/thinkingFastAndSlow";

export default (
    <>
        {superintelligence}
        {thinkingFastAndSlow}
        {humanCompatible}
        {alignmentProblem}
        {godelEscherBach}
        {strangeLoop}
        {determined}
        {behave}
        {emotionMachine}
    </>
);
