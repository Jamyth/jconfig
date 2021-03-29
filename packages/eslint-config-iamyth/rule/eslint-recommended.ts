import type { Linter } from 'eslint';
import bestPractices from './eslint/best-practices';
import es6 from './eslint/es6';
import possibleErrors from './eslint/possible-errors';
import stylisticIssues from './eslint/stylistic-issues';
import variables from './eslint/variables';

const config: Linter.Config = {
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    rules: {
        ...bestPractices.rules,
        ...possibleErrors.rules,
        ...es6.rules,
        ...stylisticIssues.rules,
        ...variables.rules,
    },
};

export default config;
