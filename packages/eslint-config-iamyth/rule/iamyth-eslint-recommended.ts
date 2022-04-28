import type { Linter } from "eslint";
import recommendedRules from "./iamyth/recommended";

const config: Linter.Config = {
    plugins: ["iamyth"],
    rules: {
        ...recommendedRules.rules,
    },
};

export default config;
