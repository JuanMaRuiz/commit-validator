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
        "indent": ["error", 2, { "SwitchCase": 1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        // "semi": "off",
        "no-console": "off",
        "no-unused-vars": ["error", { "args": "none" }],
    }
};