module.exports = {
  // @see https://github.com/airbnb/javascript
  // @see https://qiita.com/sugx2/items/ed58605e4e12519876fd
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "react/jsx-filename-extension": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"]
};