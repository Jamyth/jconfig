import type { Linter } from "eslint";

const config: Linter.Config = {
    extends: [
        require.resolve("../rule/eslint-recommended"),
        require.resolve("../rule/eslint-comments-recommended"),
        require.resolve("../rule/sonarjs-eslint-recommended"),
        require.resolve("../rule/iamyth-eslint-recommended"),
        require.resolve("../rule/eslint-config-prettier"),
        require.resolve("../rule/import"),
    ],
    overrides: [
        {
            files: ["*.ts"],
            extends: [require.resolve("../rule/typescript-eslint-recommended")],
        },
    ],
};

export default config;
