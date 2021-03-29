import type { Linter } from 'eslint';

const config: Linter.Config = {
    rules: {
        'iamyth/deep-nested-relative-imports': ['error'],
        'iamyth/order-stylesheet-import-statement-last': ['error'],
        'iamyth/restricted-imports': ['off'],
        'iamyth/unnecessary-ending-index': ['error'],
    },
};

export default config;
