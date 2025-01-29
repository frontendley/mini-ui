const js = require("@eslint/js")
const tsLint = require("typescript-eslint")

module.exports = tsLint.config({
    extends: [
        js.configs.recommended,
        ...tsLint.configs.recommended
    ],
    ignores: ['node_modules/**'],
    rules: {
        "no-console": "error"
    }
})
