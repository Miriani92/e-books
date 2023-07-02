module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: [".*", "*.config.*", "node_modules/**/*.*"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react"]
};