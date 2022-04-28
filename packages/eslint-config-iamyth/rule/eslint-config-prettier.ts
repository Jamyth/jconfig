import type { Linter } from "eslint";
import prettierConfig from "eslint-config-prettier";

const config: Linter.Config = {
    rules: {
        ...prettierConfig.rules,
    },
};

export default config;
