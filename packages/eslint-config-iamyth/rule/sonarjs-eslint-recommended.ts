import type { Linter } from 'eslint';
import bugDetectionRules from './sonarjs/bug-detection';
import codeSmellDetectionRules from './sonarjs/code-smell-detection';

const config: Linter.Config = {
    plugins: ['sonarjs'],
    rules: {
        ...bugDetectionRules.rules,
        ...codeSmellDetectionRules.rules,
    },
};

export default config;
