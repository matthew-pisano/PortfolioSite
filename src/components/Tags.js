import React from "react";

import PropTypes from "prop-types";

import tagStyles from "@/styles/tags.module.css";

const TileTag = {
    ACADEMIC: "academic",
    AI: "ai",
    ALIGNMENT: "alignment",
    ANDROID: "android",
    ASSEMBLY: "assembly",
    C: "c",
    COLLAB: "collab",
    CPP: "cpp",
    CUDA: "cuda",
    HACKATHON: "hackathon",
    HELP: "help",
    HTML: "html",
    JAVA: "java",
    JS: "js",
    KETER: "keter",
    PAPER: "paper",
    PERSONAL: "personal",
    PHP: "php",
    PYTHON: "python",
    RESEARCH: "research"
};

/**
 * Builds the tags for a page or tile
 * @param tags {string[]} Ids of tags to build
 * @return {JSX.Element} The tags JSX DIV element
 */
function tagFactory(tags) {
    return (
        <>
            {(tags || []).map((tagId) => (
                <Tag tagId={tagId} key={tagId} />
            ))}
        </>
    );
}

/**
 * A tag to display on a tile or page
 * @param tagId {string} The tag id
 * @constructor
 */
function Tag({ tagId }) {
    return (
        <div className={`w3-col w3-mobile ${tagStyles.tag} ${tagStyles[tagId + "Tag"]}`} key={tagId}>
            <img className="w3-col" alt={tagId} />
            <div className="w3-rest"></div>
        </div>
    );
}

Tag.propTypes = {
    tagId: PropTypes.object.isRequired
};

export { TileTag, tagFactory };
