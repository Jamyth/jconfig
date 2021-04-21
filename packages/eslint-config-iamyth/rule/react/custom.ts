import type { Linter } from 'eslint';

const rulesCustom: Linter.Config = {
    rules: {
        'react/button-has-type': ['error'],
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/no-array-index-key': ['error'],
        'react/self-closing-comp': ['error'],
        'react/state-in-constructor': ['error', 'always'],

        //
        // JSX-specific rules
        //

        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-no-bind': [
            'error',
            {
                ignoreDOMComponents: false,
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false,
            },
        ],
        'react/jsx-no-script-url': ['error'],
        'react/jsx-no-useless-fragment': ['error'],
        'react/jsx-props-no-spreading': 'off',
    },
};

export default rulesCustom;
