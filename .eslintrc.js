module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/label-has-for": [ 2, { "components": [ "Label" ],
      "required": {"every": [ "nesting", "id" ]}}],
    "react/no-unused-prop-types": [0],
    "no-console": [0],
    "no-use-before-define": [0],
    "class-methods-use-this": [0],
    "no-param-reassign": [0],
    "no-extra-boolean-cast": [0],
    "no-unused-expressions": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "camelcase": [0],
    "linebreak-style": [0],
    "no-debugger": [0],
    "react/no-danger": [0],
    "no-bitwise": ["error", { "allow": ["~","|","&"] }],
    "func-names": ["error", "never"],
    "no-confusing-arrow": [0],
    "react/no-unused-state": [0],
    "jsx-a11y/label-has-for": [0],
    "react/destructuring-assignment": [0],
    "prefer-destructuring": [0],
  },
};