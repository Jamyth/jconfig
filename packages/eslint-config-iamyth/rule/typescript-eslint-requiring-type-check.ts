import type { Linter } from 'eslint';

const config: Linter.Config = {
    rules: {
        '@typescript-eslint/await-thenable': ['error'],
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],
        '@typescript-eslint/no-floating-promises': ['error'],
        '@typescript-eslint/no-for-in-array': ['error'],
        '@typescript-eslint/no-misused-promises': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/prefer-readonly-parameter-types': [
            'error',
            { checkParameterProperties: false, ignoreInferredTypes: true },
        ],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-regexp-exec': ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
        '@typescript-eslint/restrict-plus-operands': ['error'],
        '@typescript-eslint/restrict-template-expressions': ['error'],
        '@typescript-eslint/strict-boolean-expressions': ['error'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/unbound-method': ['error'],

        //
        // Extension Rules
        //

        '@typescript-eslint/no-implied-eval': ['error'],
        'no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': ['error'],
        'no-throw-literal': 'off',
        '@typescript-eslint/require-await': ['error'],
        'require-await': 'off',
        '@typescript-eslint/return-await': ['error'],
        'return-await': 'off',
    },
};

export default config;
