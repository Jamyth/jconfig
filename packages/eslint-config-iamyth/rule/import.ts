import type { Linter } from 'eslint';

const config: Linter.Config = {
    plugins: ['import'],
    rules: {
        'import/first': ['error'],
        'import/newline-after-import': ['error'],
        'import/no-anonymous-default-export': [
            'error',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: true,
                allowLiteral: false,
                allowObject: true,
            },
        ],
        'import/no-default-export': ['error'],
        'import/no-duplicates': ['error'],
        'import/no-dynamic-require': ['error'],
        'import/no-useless-path-segments': ['error', { noUselessIndex: false }],
        'import/prefer-default-export': 'off',
    },
};

export default config;
