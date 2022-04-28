import type { Linter } from "eslint";

const config: Linter.Config = {
    rules: {
        "sonarjs/cognitive-complexity": ["error"],
        "sonarjs/max-switch-cases": ["error", 15],
        "sonarjs/no-collapsible-if": ["error"],
        "sonarjs/no-collection-size-mischeck": ["error"],
        "sonarjs/no-duplicate-string": ["error"],
        "sonarjs/no-duplicated-branches": ["error"],
        "sonarjs/no-identical-functions": ["error"],
        "sonarjs/no-inverted-boolean-check": ["error"],
        "sonarjs/no-redundant-boolean": ["error"],
        "sonarjs/no-redundant-jump": ["error"],
        "sonarjs/no-same-line-conditional": ["error"],
        "sonarjs/no-small-switch": ["error"],
        "sonarjs/no-unused-collection": ["error"],
        "sonarjs/no-useless-catch": ["error"],
        "sonarjs/prefer-immediate-return": ["error"],
        "sonarjs/prefer-object-literal": ["error"],
        "sonarjs/prefer-single-boolean-return": ["error"],
        "sonarjs/prefer-while": ["error"],
    },
};

export default config;
