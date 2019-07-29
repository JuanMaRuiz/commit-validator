module.exports = {
    "extends": "./../.eslintrc",
    "globals": {
        "describe": true
    },
    "rules": {
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "should|expect|assert"
        }
      ]
    }
}
