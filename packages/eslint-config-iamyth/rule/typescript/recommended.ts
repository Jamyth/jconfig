import type { Linter } from "eslint";

/**
 * All Rules from @typescript-eslint/eslint-plugin
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
const config: Linter.Config = {
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": ["error"],
        "@typescript-eslint/array-type": ["error", { default: "array", readonly: "array" }],
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": false,
                minimumDescriptionLength: 3,
            },
        ],
        "@typescript-eslint/ban-tslint-comment": ["error"],
        "@typescript-eslint/ban-types": [
            "error",
            {
                extendDefaults: true,
                types: {
                    object: false,
                    Object: {
                        message: "Use object instead",
                        fixWith: "object",
                    },
                    "{}": {
                        message: "Use object instead",
                        fixWith: "object",
                    },
                },
            },
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow",
            },
        ],
        "@typescript-eslint/consistent-type-imports": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            { accessibility: "no-public", overrides: { parameterProperties: "off" } },
        ],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/member-ordering": [
            "error",
            // prettier-ignore
            {
                default: {
                    memberTypes: [
                        'signature',

                        'public-static-field',     'protected-static-field',     'private-static-field',
                        'public-static-method',    'protected-static-method',    'private-static-method',

                        'public-decorated-field',  'protected-decorated-field',  'private-decorated-field',
                        'public-instance-field',   'protected-instance-field',   'private-instance-field',
                        'public-abstract-field',   'protected-abstract-field',   'private-abstract-field',

                        'public-constructor',      'protected-constructor',      'private-constructor',

                        'public-decorated-method', 'protected-decorated-method', 'private-decorated-method',
                        'public-instance-method',  'protected-instance-method',  'private-instance-method',
                        'public-abstract-method',  'protected-abstract-method',  'private-abstract-method',
                    ],
                    order: 'as-written',
                }
            },
        ],
        "@typescript-eslint/no-empty-interface": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-extra-non-null-assertion": ["error"],
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": ["error"],
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true, allowDefinitionFiles: true }],
        "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["error"],
        "@typescript-eslint/no-parameter-properties": [
            "error",
            { allows: ["private", "protected", "public", "private readonly", "protected readonly", "public readonly"] },
        ],
        "@typescript-eslint/no-this-alias": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-as-const": ["error"],
        "@typescript-eslint/prefer-enum-initializers": ["error"],
        "@typescript-eslint/prefer-namespace-keyword": ["error"],
        "@typescript-eslint/triple-slash-reference": ["error"],
        "@typescript-eslint/no-empty-function": "off",

        //
        // Extension Rules
        //

        "@typescript-eslint/no-array-constructor": ["error"],
        "no-array-constructor": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-extra-semi": ["error"],
        "no-extra-semi": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
                enums: true,
                typedefs: false,
                ignoreTypeReferences: true,
            },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-shadow": ["off"],
        "no-shadow": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { args: "none", ignoreRestSiblings: true, varsIgnorePattern: "^_+$" },
        ],
        "no-unused-vars": "off",
    },
};

export default config;
