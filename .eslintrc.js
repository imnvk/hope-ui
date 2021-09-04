module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwind/recommended",
  ],
  plugins: ["react-hooks", "@typescript-eslint"],
  globals: {
    describe: "readonly",
    it: "readonly",
    fit: "readonly",
    test: "readonly",
    expect: "readonly",
    afterEach: "readonly",
    beforeEach: "readonly",
    afterAll: "readonly",
    beforeAll: "readonly",
    fdescribe: "readonly",
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["public/*"],
};
