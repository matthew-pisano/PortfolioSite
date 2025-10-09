const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const _import = require("eslint-plugin-import");
const react = require("eslint-plugin-react");
const globals = require("globals");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    { ignores: ["node_modules/", "build/", ".next/", "next.lock/"] },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },

            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        extends: fixupConfigRules(
            compat.extends(
                "eslint:recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:react/recommended"
            )
        ),

        plugins: {
            react: fixupPluginRules(react),
            import: fixupPluginRules(_import)
        },

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
    }
]);
