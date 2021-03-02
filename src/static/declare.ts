
declare let requirejs: {
    (config: any);
    (config: any, modules: string[], callback?: Function, err?: Function);
    (modules: string[], callback?: Function, err?: Function);
    config: Function;
    exec(name);
};


declare function define(module: string | string[], callback: Function): void;

declare module "website-config" {
    let a: typeof import("../website-config");
    export = a;
}


