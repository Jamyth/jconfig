// @ts-expect-error -- untyped module
import confusingBrowserGlobals from 'confusing-browser-globals';
import type { Linter } from 'eslint';

const variables: Linter.Config = {
    rules: {
        'no-delete-var': ['error'],
        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
            },
            {
                name: 'isNaN',
                message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
            },
            ...confusingBrowserGlobals,
        ],
        'no-shadow': ['error'],
        'no-shadow-restricted-names': ['error'],
        'no-undef': ['error'],
        'no-undef-init': ['error'],
        'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_+$' }],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
    },
};

export default variables;
