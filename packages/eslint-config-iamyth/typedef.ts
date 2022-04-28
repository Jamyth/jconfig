declare module "@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended" {
    import type { Linter } from "eslint";
    const config: Linter.Config;
    export default config;
}

declare module "eslint-config-prettier/@typescript-eslint" {
    import type { Linter } from "eslint";
    const config: Linter.Config;
    export default config;
}

declare module "eslint-config-prettier/react" {
    import type { Linter } from "eslint";
    const config: Linter.Config;
    export default config;
}
