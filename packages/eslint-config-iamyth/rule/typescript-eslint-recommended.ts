import type { Linter } from 'eslint';
import overridesESLintConfig from './typescript/overwrites';
import rulesRecommended from './typescript/recommended';

const config: Linter.Config = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    rules: {
        ...overridesESLintConfig.rules,
        ...rulesRecommended.rules,
    },
};

export default config;
