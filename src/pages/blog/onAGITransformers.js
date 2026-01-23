import React from "react";

import BlogWrapper, { BlogInfo, BlogSection } from "@/components/wrappers/BlogWrapper";

const blogInfo = new BlogInfo(
    "On Generally Intelligent Transformers",
    "An exploration of the theoretical capabilities and limitations of transformer models",
    new Date(2026, 0, 22)
);

export default function OnAGITransformers() {
    return (
        <BlogWrapper
            pageName={"onAGITransformers"}
            title={blogInfo.title}
            subtitle={blogInfo.subtitle}
            date={blogInfo.date}>
            <p>
                It goes without saying that the past three years have represented an unprecedented growth in both the
                capabilities of AI models and corresponding investments. As 2022 gave way to 2023, progress appeared to
                be accelerating without bounds. It seemed as if new models represented fundamental jumps in capability
                over their predecessors. GPT-3.5 could answer simple questions and maintain a polite conversation and
                suddenly GPT-4 was passing the Bar exam only a few months later. Throughout 2023 and 2024, the
                capabilities of these models continued to grow significantly, though not quite at its original clip.
            </p>
            <p>
                Integer a odio lorem. Suspendisse hendrerit, libero ut eleifend porta, libero leo posuere risus, porta
                rhoncus justo dolor eu felis. Vivamus ex est, elementum nec luctus vel, euismod ut quam. Nam at odio
                varius, lacinia enim sagittis, commodo tellus. In posuere, metus eu accumsan egestas, ante metus viverra
                est, at feugiat elit massa vel felis. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum sollicitudin rutrum nunc, sed rhoncus lorem suscipit non.
                Ut sollicitudin tristique nulla ut scelerisque. Etiam velit ex, scelerisque viverra dui et, varius
                gravida libero. Nunc consequat lacus ut mauris lobortis mattis. Etiam non magna id orci pellentesque
                bibendum at blandit augue. Nullam tempus ultricies tempus. Nullam ac purus libero. Sed pellentesque
                risus eu magna hendrerit, id maximus tellus euismod. Ut in blandit justo. Donec consequat elit non
                accumsan egestas.
            </p>
            <BlogSection>Section Header</BlogSection>
            <p>
                Etiam vel imperdiet massa. Maecenas vitae justo dignissim, maximus tortor id, porta quam. Fusce vehicula
                ultricies cursus. In mollis tempor condimentum. Cras nulla dolor, dictum vitae tellus at, ullamcorper
                pellentesque eros. Vivamus rhoncus odio eu gravida cursus. Sed consectetur nunc sed libero bibendum, sit
                amet placerat odio sagittis. Quisque a mauris tempor, tincidunt nulla ac, elementum ipsum. Vivamus vitae
                leo eget ipsum cursus dapibus. Cras viverra ac nunc quis pellentesque. Nulla volutpat malesuada
                tristique. Nulla facilisi. Ut consectetur efficitur nisl, eget aliquet enim varius a. Ut efficitur purus
                mi, non auctor ligula blandit sed. Morbi tortor odio, cursus eget interdum sed, blandit et velit. Nulla
                egestas aliquam quam, sit amet ultricies magna dictum non. Nam eget sem ornare ligula hendrerit
                sollicitudin. Nullam bibendum augue mollis nisl blandit, sit amet elementum justo suscipit. Etiam sit
                amet libero in odio egestas condimentum.
            </p>
            <p>
                Maecenas finibus nibh eget nibh ullamcorper, vel congue enim rutrum. Phasellus faucibus arcu sit amet
                eleifend faucibus. Vivamus rutrum in mi eu dapibus. Sed lobortis egestas scelerisque. Quisque convallis,
                est quis lacinia laoreet, velit arcu scelerisque mi, at facilisis tortor dui in nisl. Sed vel nisi
                egestas, vulputate dolor a, sollicitudin velit. Vestibulum tempus, eros ac posuere scelerisque, nulla
                purus convallis odio, eu blandit lacus leo sed felis. Nullam at interdum nisl, in porta libero. Mauris
                et molestie sem. Cras finibus turpis at ornare gravida. Nullam gravida sem et turpis aliquam aliquam. Ut
                sit amet auctor mi. Phasellus nec neque erat. Proin ut luctus ex. Proin non dignissim massa, eget
                consequat nisl.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis accumsan mollis. Ut interdum
                in tellus a auctor. Duis sollicitudin, neque in rutrum dictum, libero tellus sagittis ligula, sed
                condimentum nulla arcu ut ex. Donec eu felis lectus. Nulla tempor quam sit amet purus cursus, at euismod
                eros faucibus. Vestibulum facilisis, nibh eu elementum eleifend, massa tortor bibendum elit, ac porta
                neque neque sit amet sapien. Integer id elementum nibh. Aliquam vel elit lacus. Sed lobortis, sapien vel
                aliquet dignissim, sapien enim laoreet sem, vel luctus ligula neque ut mauris. Nunc sed rutrum ligula.
                Fusce ac pulvinar erat.
            </p>
            <BlogSection>Section Header The Second</BlogSection>
            <p>
                Integer a odio lorem. Suspendisse hendrerit, libero ut eleifend porta, libero leo posuere risus, porta
                rhoncus justo dolor eu felis. Vivamus ex est, elementum nec luctus vel, euismod ut quam. Nam at odio
                varius, lacinia enim sagittis, commodo tellus. In posuere, metus eu accumsan egestas, ante metus viverra
                est, at feugiat elit massa vel felis. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum sollicitudin rutrum nunc, sed rhoncus lorem suscipit non.
                Ut sollicitudin tristique nulla ut scelerisque. Etiam velit ex, scelerisque viverra dui et, varius
                gravida libero. Nunc consequat lacus ut mauris lobortis mattis. Etiam non magna id orci pellentesque
                bibendum at blandit augue. Nullam tempus ultricies tempus. Nullam ac purus libero. Sed pellentesque
                risus eu magna hendrerit, id maximus tellus euismod. Ut in blandit justo. Donec consequat elit non
                accumsan egestas.
            </p>
            <p>
                Etiam vel imperdiet massa. Maecenas vitae justo dignissim, maximus tortor id, porta quam. Fusce vehicula
                ultricies cursus. In mollis tempor condimentum. Cras nulla dolor, dictum vitae tellus at, ullamcorper
                pellentesque eros. Vivamus rhoncus odio eu gravida cursus. Sed consectetur nunc sed libero bibendum, sit
                amet placerat odio sagittis. Quisque a mauris tempor, tincidunt nulla ac, elementum ipsum. Vivamus vitae
                leo eget ipsum cursus dapibus. Cras viverra ac nunc quis pellentesque. Nulla volutpat malesuada
                tristique. Nulla facilisi. Ut consectetur efficitur nisl, eget aliquet enim varius a. Ut efficitur purus
                mi, non auctor ligula blandit sed. Morbi tortor odio, cursus eget interdum sed, blandit et velit. Nulla
                egestas aliquam quam, sit amet ultricies magna dictum non. Nam eget sem ornare ligula hendrerit
                sollicitudin. Nullam bibendum augue mollis nisl blandit, sit amet elementum justo suscipit. Etiam sit
                amet libero in odio egestas condimentum.
            </p>
            <p>
                Maecenas finibus nibh eget nibh ullamcorper, vel congue enim rutrum. Phasellus faucibus arcu sit amet
                eleifend faucibus. Vivamus rutrum in mi eu dapibus. Sed lobortis egestas scelerisque. Quisque convallis,
                est quis lacinia laoreet, velit arcu scelerisque mi, at facilisis tortor dui in nisl. Sed vel nisi
                egestas, vulputate dolor a, sollicitudin velit. Vestibulum tempus, eros ac posuere scelerisque, nulla
                purus convallis odio, eu blandit lacus leo sed felis. Nullam at interdum nisl, in porta libero. Mauris
                et molestie sem. Cras finibus turpis at ornare gravida. Nullam gravida sem et turpis aliquam aliquam. Ut
                sit amet auctor mi. Phasellus nec neque erat. Proin ut luctus ex. Proin non dignissim massa, eget
                consequat nisl.
            </p>
        </BlogWrapper>
    );
}

export { blogInfo };
