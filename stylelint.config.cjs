module.exports = {
    extends: [
        'stylelint-config-standard'
    ],
    customSyntax: "postcss-less",
    plugin: ['stylelint-less'],
    rules: {
        "at-rule-no-unknown": null,
        "selector-class-pattern": null
    }
}
