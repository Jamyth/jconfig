# **ESLint Config Iamyth**

A customized ESLint configuration library

## Feature:

### Third-Party ESLint Rules libraries:

-   [eslint](https://github.com/eslint/eslint)
-   [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
-   [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
-   [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)

## Installation:

```zsh
> npm install -D eslint eslint-config-iamyth
// or
> yarn add -D eslint eslint-config-iamyth
```

## Usage

Open your root `.eslintrc.js`

```js
/** @type {import('eslint').Linter.Config} */
const config = {
    extends: ["iamyth/preset/node"],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
};

module.exports = config;
```
