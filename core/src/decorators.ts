import { ComponentInfo } from "./component-info";

export function component(options?: ComponentInfo) {
    return function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    }
}