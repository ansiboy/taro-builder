
declare module "json!websiteConfig" {
    let a: typeof import("../website-config")["default"];
    export = a;
}

type RequireConfig = {
    context: string,
    baseUrl?: string
};

type RequireContext = {
    config: RequireConfig
}

declare let requirejs: {
    (config: RequireConfig);
    (config: RequireConfig, modules: string[], callback?: Function, err?: Function);
    (modules: string[], callback?: Function, err?: Function);
    config: Function;
    exec(name);
};

declare function define(module: string, callback: Function): void;

// declare module "components/carousel" {
//     let a: typeof import("../../sample-app/src/components/carousel/component");
//     export = a;
// }