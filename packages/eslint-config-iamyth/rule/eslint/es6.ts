import type { Linter } from 'eslint';

const es6: Linter.Config = {
    rules: {
        'constructor-super': ['error'],
        'no-class-assign': ['error'],
        'no-const-assign': ['error'],
        'no-dupe-class-members': ['error'],
        'no-duplicate-imports': 'off',
        'no-new-symbol': ['error'],
        'no-this-before-super': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-constructor': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error'],
        'object-shorthand': ['error'],
        'prefer-const': ['error'],
        'prefer-spread': ['error'],
        'require-yield': ['error'],
        'sort-imports': 'off',
        'symbol-description': ['error'],
    },
};

export default es6;
