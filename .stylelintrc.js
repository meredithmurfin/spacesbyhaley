module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
      "rule-empty-line-before": ["always", {
      "except": ["after-rule", "after-single-line-comment", "inside-block-and-after-rule", "inside-block", "first-nested"],
      "ignore": ["first-nested"]
    }],
  },
}
