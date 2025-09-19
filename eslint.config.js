import { defineConfig } from "eslint/config"
import html from "@html-eslint/eslint-plugin"
import css from "@eslint/css"

import htmlCodeStandards from "html-code-standards-plugin" // This is a custom plugin that is currently under development and not yet published to npm if you would like a copy of it contact Fell67 (https://github.com/Fell67)

export default defineConfig([
    // lint html files
    {
        files: ["**/*.html"],
        plugins: {
            html,
            htmlCodeStandards,
            css
        },
        language: "html/html",
        extends: ["htmlCodeStandards/recommended"],
        rules: {
        }
    },
    // lint css files
    {
        files: ["**/*.css"],
        plugins: {
            css
        },
        language: "css/css",
        extends: ["css/recommended"],
        rules: {
            "css/font-family-fallbacks": "warn"
        }
    }
]);