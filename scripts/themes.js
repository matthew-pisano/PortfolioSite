
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
    constructor(textColor, textHoverColor, linkColor, accentColor,
                color1, color2, color3, color4) {
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
    "default": new Theme(
        "#f0ffff",
        "#f0ffff",
        "#add3ee",
        "#f0ffff",
        new ThemeColor("#1a2329", "#315167", "#315167"),
        new ThemeColor("#2f3c45", "#375468", "#475863"),
        new ThemeColor("#2a3135", "#3f505a", "#3f505a"),
        new ThemeColor("#313131", "#3b3e40", "#3b3e40")
    ),
    "classic": new Theme(
        "#f0ffff",
        "#f0ffff",
        "#add3ee",
        "#f0ffff",
        new ThemeColor("#1e1e1e", "#333333", "#333333"),
        new ThemeColor("#313131", "#6a6a6a", "#3e4146"),
        new ThemeColor("#25272b", "#343a45", "#3e4043"),
        new ThemeColor("#313131", "#414141", "#414141")
    ),
    "monochrome": new Theme(
        "#ffffff",
        "#000000",
        "#ffffff",
        "#ffffff",
        new ThemeColor("#000000", "#000000", "#ffffff"),
        new ThemeColor("#000000", "#ffffff", "#ffffff"),
        new ThemeColor("#000000", "#000000", "#ffffff"),
        new ThemeColor("#000000", "#000000", "#ffffff")
    ),
    "light": new Theme(
        "#171717",
        "#171717",
        "#5070ff",
        "#ffffff",
        new ThemeColor("#efefef", "#c1daff", "#c3c3c3"),
        new ThemeColor("#beddff", "#95c7ff", "#c8d6e4"),
        new ThemeColor("#596887", "#6f89bc", "#afb7c6"),
        new ThemeColor("#e5eeff", "#b4ceff", "#d4dbea")
    ),
};


/**
 * Sets the theme to the given theme name
 * @param themeName {string} The name of the theme to set
 */
function setTheme(themeName) {
    let theme = themes[themeName];
    let root = document.querySelector(':root');
    root.style.setProperty('--theme-text', theme.textColor);
    root.style.setProperty('--theme-text-hover', theme.textHoverColor);
    root.style.setProperty('--theme-link', theme.linkColor);
    root.style.setProperty('--theme-accent', theme.accentColor);

    root.style.setProperty('--theme-color-1', theme.color1.color);
    root.style.setProperty('--theme-color-1-selected', theme.color1.selected);
    root.style.setProperty('--theme-color-1-hover', theme.color1.hover);
    root.style.setProperty('--theme-color-2', theme.color2.color);
    root.style.setProperty('--theme-color-2-selected', theme.color2.selected);
    root.style.setProperty('--theme-color-2-hover', theme.color2.hover);
    root.style.setProperty('--theme-color-3', theme.color3.color);
    root.style.setProperty('--theme-color-3-selected', theme.color3.selected);
    root.style.setProperty('--theme-color-3-hover', theme.color3.hover);
    root.style.setProperty('--theme-color-4', theme.color4.color);
    root.style.setProperty('--theme-color-4-selected', theme.color4.selected);
    root.style.setProperty('--theme-color-4-hover', theme.color4.hover);

    if (["monochrome", "light"].includes(themeName))
        document.getElementById("collapseSidebar").style.backgroundImage = "url('/assets/explorerIconDark.svg')";
    else document.getElementById("collapseSidebar").style.backgroundImage = "";

}

export {themes, setTheme};
