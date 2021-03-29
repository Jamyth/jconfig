import type { Linter } from 'eslint';

const stylisticIssues: Linter.Config = {
    rules: {
        'no-array-constructor': ['error'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-new-object': ['error'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'prefer-exponentiation-operator': ['error'],
        'prefer-object-spread': ['error'],
        'spaced-comment': ['error', 'always', { exceptions: ['-'] }],
        'unicode-bom': ['error'],
    },
};

export default stylisticIssues;
