import { ComponentInfo } from "./component-info";

/** 组件标记，用于将指定的组件标记为可被外部加载 */
export function component(options?: Partial<ComponentInfo>) {
    return function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    }
}