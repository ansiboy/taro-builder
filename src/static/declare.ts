
declare let requirejs: {
    (config: any);
    (config: any, modules: string[], callback?: Function, err?: Function);
    (modules: string[], callback?: Function, err?: Function);
    config: Function;
    exec(name);
};


declare function define(module: string, callback: Function): void;

// declare module "components/carousel" {
//     let a: typeof import("../../sample-app/src/components/carousel/component");
//     export = a;
// }

declare module "website-config" {
    let a: typeof import("../website-config");
    export = a;
}

interface ComponentInfo {
    displayName?: string;
    type: string;
    path: string;
    editor?: string;
    design?: string;
    layout?: string;
    sortNumber?: number;
    icon?: string;
    introduce?: string;
    group?: string;
}