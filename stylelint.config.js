/** @type {import('stylelint').Config} */
module.exports = {
    extends: "stylelint-config-standard",
    rules: {
        "selector-class-pattern": "^[a-z][a-zA-Z0-9-]+$",
        "selector-id-pattern": "^[a-z][a-zA-Z0-9-]+$"
    }
};
