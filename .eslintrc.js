module.exports                      = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "globals": {
    "Cordova": "readonly"
  },
  "rules": {
    "indent": ["error", 2],
    "comma-style": ["error", "last"],
    "no-eval": ["error", {"allowIndirect": false}],
    "no-redeclare": "off",
    "no-console": "error",

    "curly": "error",
    "brace-style": ["error", "1tbs"],
    "dot-location": ["error", "property"]
  }
}
