declare module '@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended' {
    const config: import('eslint').Linter.Config;
    export default config;
}

declare module 'eslint-config-prettier/@typescript-eslint' {
    const config: import('eslint').Linter.Config;
    export default config;
}
