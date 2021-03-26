import type { Linter } from 'eslint';

/**
 * All Rules from @typescript-eslint/eslint-plugin
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
const config: Linter.Config = {
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
        '@typescript-eslint/await-thenable': ['error'],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
                minimumDescriptionLength: 3,
            },
        ],
        '@typescript-eslint/ban-tslint-comment': ['error'],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    object: false,
                    Object: {
                        message: 'Use object instead',
                        fixWith: 'object',
                    },
                    '{}': {
                        message: 'Use object instead',
                        fixWith: 'object',
                    },
                },
            },
        ],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow',
            },
        ],
        '@typescript-eslint/consistent-type-imports': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public', overrides: { parameterProperties: 'off' } },
        ], // constructor(public readonly a: string){}
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                memberTypes: [
                    'signature',

                    // Fields
                    'static-field',
                    'decorated-field',
                    'instance-field',
                    'abstract-field',

                    // Constructors
                    'constructor',

                    // Methods
                    'static-method',
                    'decorated-method',
                    'instance-method',
                    'abstract-method',
                ],
                order: 'as-written',
            },
        ],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-new': ['error'],
        '@typescript-eslint/no-misused-promises': ['error'],
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['error'],
        '@typescript-eslint/no-parameter-properties': [
            'error',
            { allows: ['private', 'protected', 'public', 'private readonly', 'protected readonly', 'public readonly'] },
        ],
        '@typescript-eslint/no-this-alias': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': ['error'],
        '@typescript-eslint/prefer-enum-initializers': ['error'],
        '@typescript-eslint/prefer-namespace-keyword': ['error'],
        '@typescript-eslint/triple-slash-reference': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                enums: true,
                typedefs: false,
                ignoreTypeReferences: true,
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_+$' },
        ],
        'no-unused-vars': 'off',
    },
};

export default config;
