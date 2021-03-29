import type { Linter } from 'eslint';

const possibleErrors: Linter.Config = {
    rules: {
        'for-direction': ['error'],
        'getter-return': ['error', { allowImplicit: true }],
        'no-async-promise-executor': ['error'],
        'no-await-in-loop': ['error'],
        'no-compare-neg-zero': ['error'],
        'no-cond-assign': ['error', 'always'],
        'no-console': ['warn', { allow: ['info', 'warn', 'error', 'time', 'timeLog', 'timeEnd'] }],
        'no-constant-condition': ['error'],
        'no-control-regex': ['error'],
        'no-debugger': ['warn'],
        'no-dupe-args': ['error'],
        'no-dupe-else-if': ['error'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-empty': ['error'],
        'no-empty-character-class': ['error'],
        'no-ex-assign': ['error'],
        'no-extra-boolean-cast': ['error'],
        'no-extra-semi': ['error'],
        'no-func-assign': ['error'],
        'no-import-assign': ['error'],
        'no-inner-declarations': ['error'],
        'no-invalid-regexp': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-loss-of-precision': ['error'],
        'no-misleading-character-class': ['error'],
        'no-obj-calls': ['error'],
        'no-prototype-builtins': ['error'],
        'no-regex-spaces': ['error'],
        'no-setter-return': ['error'],
        'no-sparse-arrays': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unsafe-finally': ['error'],
        'no-unsafe-negation': ['error'],
        'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
        'use-isnan': ['error'],
        'valid-typeof': ['error', { requireStringLiterals: true }],
    },
};

export default possibleErrors;
