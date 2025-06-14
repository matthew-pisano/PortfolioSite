import tileStyles from "@/styles/pageTiles.module.css";
import sidebarStyles from "@/styles/Sidebar.module.css";

/**
 * Map of possible page background colors
 */
const PageColor = {
    LONDON_GREY: "#778291",
    SINGULARITY_BLUE: "#345b8f",
    SUDO_TEAL: "#4e8f8a",
    URANIUM_GREEN: "#3f9366",
    SEGFAULT_MOSS: "#629c53",
    ALL_YOUR_BASE_PURPLE: "#62588e",
    FOUNDATION_RED: "#872929"
};

class ThemeColor {
    /**
     * Creates a new ThemeColor object
     * @param color {string} The hex color of the theme
     * @param selected {string} The hex color of the selected theme
     * @param hover {string} The hex color of the hover theme
     */
    constructor(color, selected, hover) {
        this.color = color;
        this.selected = selected;
        this.hover = hover;
    }
}

class Theme {
    /**
     * Creates a new Theme object
     * @param textColor {string} The hex color of the text
     * @param textHoverColor {string} The hex color of the text when hovered
     * @param linkColor {string} The hex color of the links
     * @param accentColor {string} The hex color of the accent
     * @param color1 {ThemeColor} The ThemeColor object for the first color
     * @param color2 {ThemeColor} The ThemeColor object for the second color
     * @param color3 {ThemeColor} The ThemeColor object for the third color
     * @param color4 {ThemeColor} The ThemeColor object for the fourth color
     */
    constructor(textColor, textHoverColor, linkColor, accentColor, color1, color2, color3, color4) {
        this.textColor = textColor;
        this.textHoverColor = textHoverColor;
        this.linkColor = linkColor;
        this.accentColor = accentColor;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
}

/**
 * The themes available for the application
 * @type {{string: Theme}}
 */
const themes = {
    default: new Theme(
        "#f0ffff",
        "#f0ffff",
        "#add3ee",
        "#f0ffff",
        new ThemeColor("#1a2329", "#315167", "#315167"),
        new ThemeColor("#2f3c45", "#375468", "#475863"),
        new ThemeColor("#2a3135", "#3f505a", "#3f505a"),
        new ThemeColor("#313131", "#3b3e40", "#3b3e40")
    ),
    classic: new Theme(
        "#f0ffff",
        "#f0ffff",
        "#add3ee",
        "#f0ffff",
        new ThemeColor("#1e1e1e", "#333333", "#333333"),
        new ThemeColor("#313131", "#6a6a6a", "#3e4146"),
        new ThemeColor("#25272b", "#343a45", "#3e4043"),
        new ThemeColor("#313131", "#414141", "#414141")
    ),
    monochrome: new Theme(
        "#ffffff",
        "#000000",
        "#ffffff",
        "#ffffff",
        new ThemeColor("#000000", "#000000", "#ffffff"),
        new ThemeColor("#000000", "#ffffff", "#ffffff"),
        new ThemeColor("#000000", "#000000", "#ffffff"),
        new ThemeColor("#000000", "#000000", "#ffffff")
    ),
    light: new Theme(
        "#171717",
        "#171717",
        "#546acc",
        "#bac8ff",
        new ThemeColor("#efefef", "#c1daff", "#e0edff"),
        new ThemeColor("#e2eeff", "#95c7ff", "#cfe8ff"),
        new ThemeColor("#5d85d8", "#719ffb", "#bacef6"),
        new ThemeColor("#e5eeff", "#b4ceff", "#d4dbea")
    )
};

/**
 * Sets the theme of all dynamic icons
 * @param isLightTheme Whether the selected theme is light mode or drak mode
 */
function setIconTheme(isLightTheme) {
    let iconMap = {};
    iconMap[sidebarStyles.editorButton] = ["/assets/editIcon.svg", "/assets/editIconDark.svg"];
    iconMap[tileStyles.anchorIcon] = ["/assets/anchorIcon.svg", "/assets/anchorIconDark.svg"];

    for (const [styleCls, iconPair] of Object.entries(iconMap)) {
        for (let element of document.getElementsByClassName(styleCls))
            element.style.content = `url('${iconPair[isLightTheme ? 1 : 0]}')`;
    }
}

/**
 * Sets the theme to the given theme name
 * @param themeName {string} The name of the theme to set
 */
function setTheme(themeName) {
    if (!themeName) return;

    let theme = themes[themeName];
    let root = document.querySelector(":root");
    root.style.setProperty("--theme-text", theme.textColor);
    root.style.setProperty("--theme-text-hover", theme.textHoverColor);
    root.style.setProperty("--theme-link", theme.linkColor);
    root.style.setProperty("--theme-accent", theme.accentColor);

    root.style.setProperty("--theme-color-1", theme.color1.color);
    root.style.setProperty("--theme-color-1-selected", theme.color1.selected);
    root.style.setProperty("--theme-color-1-hover", theme.color1.hover);
    root.style.setProperty("--theme-color-2", theme.color2.color);
    root.style.setProperty("--theme-color-2-selected", theme.color2.selected);
    root.style.setProperty("--theme-color-2-hover", theme.color2.hover);
    root.style.setProperty("--theme-color-3", theme.color3.color);
    root.style.setProperty("--theme-color-3-selected", theme.color3.selected);
    root.style.setProperty("--theme-color-3-hover", theme.color3.hover);
    root.style.setProperty("--theme-color-4", theme.color4.color);
    root.style.setProperty("--theme-color-4-selected", theme.color4.selected);
    root.style.setProperty("--theme-color-4-hover", theme.color4.hover);

    // Set the sidebar collapse icon based on the theme
    document.getElementById("collapseSidebar").style.backgroundImage = ["monochrome", "light"].includes(themeName)
        ? "url('/assets/explorerIconDark.svg')"
        : "";
    let isLightTheme = ["light"].includes(themeName);
    setIconTheme(isLightTheme);

    localStorage.setItem("theme", themeName);
}

export { themes, setTheme, PageColor };
