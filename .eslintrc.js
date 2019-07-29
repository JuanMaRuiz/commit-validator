module.exports = {
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
  },
  "env": {
    "node": true,
    "es6": true,
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-console": "off",
    "no-unused-vars": ["error", { "args": "none" }],
  }
};
