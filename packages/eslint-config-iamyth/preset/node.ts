import type { Linter } from 'eslint';

const config: Linter.Config = {
    extends: [
        require.resolve('../rule/eslint-recommended'),
        require.resolve('../rule/eslint-comments-recommended'),
        require.resolve('../rule/sonarjs-eslint-recommended'),
        require.resolve('../rule/eslint-config-prettier'),
    ],
    overrides: [
        {
            files: ['*.ts'],
            extends: [require.resolve('../rule/typescript-eslint-recommended.ts')],
        },
    ],
};

export default config;
