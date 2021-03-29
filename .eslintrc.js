require('ts-node').register({ transpileOnly: true });

/** @type {import('eslint').Linter.Config} */
const config = {
    extends: [
        require.resolve('./tools/dogfood-eslint/eslint-recommended'),
        require.resolve('./tools/dogfood-eslint/eslint-config-prettier'),
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                require.resolve('./tools/dogfood-eslint/typescript-eslint'),
            ],
        },
    ],
};

module.exports = config;
