module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [
    {
      files: ["__tests__/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {},
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
