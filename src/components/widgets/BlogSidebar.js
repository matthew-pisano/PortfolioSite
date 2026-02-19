import React, { createContext, useContext, useState } from "react";

import PropTypes from "prop-types";

import styles from "@/styles/pageTiles.module.css";

/** Context to manage blog sections in sidebar */
const BlogSidebarContext = createContext(null);

/**
 * Provider component to track blog sections and subsections
 * @param children {JSXElement} The main blog content
 */
function BlogSidebarProvider({ children }) {
    const [sections, setSections] = useState([]);

    // Add a section to the context
    const addSection = (id, title, level, sectionNumber) => {
        setSections((prev) => {
            const exists = prev.find((s) => s.id === id);
            if (exists) return prev;
            return [...prev, { id, title, level, sectionNumber }];
        });
    };

    // Remove a section from the page to handle dynamic refresh
    const removeSection = (id) => {
        setSections((prev) => prev.filter((s) => s.id !== id));
    };

    // Send sections to the provider context
    return (
        <BlogSidebarContext.Provider value={{ sections, addSection, removeSection }}>
            {children}
        </BlogSidebarContext.Provider>
    );
}

BlogSidebarProvider.propTypes = {
    children: PropTypes.node.isRequired
};

/**
 * Hook to access the blog sidebar context
 */
function useBlogSidebar() {
    const context = useContext(BlogSidebarContext);
    if (!context) {
        throw new Error("useBlogSidebar must be used within a BlogSidebarProvider");
    }
    return context;
}

/**
 * Build nested structure from flat list
 *
 * @param sectionList {Object[]}
 */
const buildSectionTree = (sectionList) => {
    const tree = [];
    const stack = []; // Stack to track hierarchy

    sectionList.forEach((section) => {
        const level = section.level || 1;

        // Remove items from stack that are not parents of this item
        while (stack.length > 0 && stack[stack.length - 1].level >= level) stack.pop();

        // Create the section item
        const sectionItem = {
            ...section,
            children: []
        };

        // Add to parent or root
        if (stack.length === 0) tree.push(sectionItem);
        else {
            const parent = stack[stack.length - 1];
            parent.children.push(sectionItem);
        }

        stack.push(sectionItem);
    });

    return tree;
};

/**
 * Container component where section sidebar is rendered
 */
function BlogSidebarContent() {
    const { sections } = useBlogSidebar();

    if (sections.length === 0) return null;

    // Recursively render the given tree of sections
    const renderSectionTree = (tree) => {
        return (
            <ul className={`${styles.blogSidebarList}`}>
                {tree.map((section) => (
                    <li key={section.id} className={`${styles.blogSidebarItem}`}>
                        <a href={`#${section.id}`}>
                            <span className={`${styles.blogSidebarNumber}`}>{section.sectionNumber}</span>
                            {section.title}
                        </a>
                        {section.children && section.children.length > 0 && renderSectionTree(section.children)}
                    </li>
                ))}
            </ul>
        );
    };

    const tree = buildSectionTree(sections);
    return (
        <div className={`${styles.blogSidebar}`}>
            <h4 className={`${styles.blogSidebarTitle}`}>Table of Contents</h4>
            {renderSectionTree(tree)}
        </div>
    );
}

export { BlogSidebarProvider, BlogSidebarContent, useBlogSidebar };
