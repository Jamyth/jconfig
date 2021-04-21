import type { Linter } from 'eslint';

const bestPractices: Linter.Config = {
    rules: {
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'dot-location': ['error', 'property'],
        'no-case-declarations': ['error'],
        'no-empty-pattern': ['error'],
        'no-eval': ['error', { allowIndirect: true }],
        'no-extra-bind': ['error'],
        'no-fallthrough': ['error'],
        'no-implicit-coercion': ['error', { boolean: false, number: true, string: true, allow: [] }],
        'no-implied-eval': ['error'],
        'no-iterator': ['error'],
        'no-global-assign': ['error'],
        'no-new-wrappers': ['error'],
        'no-octal': ['error'],
        'no-octal-escape': ['error'],
        'no-proto': ['error'],
        'no-redeclare': ['error'],
        'no-restricted-properties': [
            'error',
            {
                object: 'require',
                property: 'ensure',
                message: 'Please use import() instead.',
            },
        ],
        'no-self-assign': ['error'],
        'no-throw-literal': ['error'],
        'no-unused-labels': ['warn'],
        'no-useless-catch': ['error'],
        'no-useless-escape': ['error'],
        'no-with': ['error'],
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        radix: ['error'],
        yoda: ['error', 'never', { exceptRange: true }],
    },
};

export default bestPractices;
