const js = require("@eslint/js")
const tsLint = require("typescript-eslint")

module.exports = tsLint.config({
    extends: [
        js.configs.recommended,
        ...tsLint.configs.recommended
    ],
    files: ['**/*.{js, ts, tsx}'],
    ignores: ['node_modules/**'],
    rules: {
        "no-console": "error"
    }
})