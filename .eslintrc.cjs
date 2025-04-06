module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "import"],
    rules: {
        "semi": ["warn", "always"],
        "no-unused-vars": "warn",
        "no-control-regex": "off",
        "react/no-unescaped-entities": "off",
        "react/no-unknown-property": "warn",
        "import/no-unresolved": "off",
        "import/order": [
            "warn",
            {
                "groups": ["builtin", "external", "internal"],
                "pathGroups": [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["react"],
                "newlines-between": "always",
                "alphabetize": {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};
