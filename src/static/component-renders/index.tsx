import { PropertyEditorInfo } from "maishu-jueying";

// 用于生成组件布局 


window["componentRenders"] = window["componentRenders"] || {};
let componentRenders = window["componentRenders"];
function getComponentRenders(): { [typename: string]: (propEditors: PropertyEditorInfo[]) => JSX.Element } {
    return componentRenders;
}

export function setComponentRender(typeName: string, value: (propEditors: PropertyEditorInfo[]) => JSX.Element) {
    let componentRenders = getComponentRenders();
    componentRenders[typeName] = value;
}

export function getComponentRender(typeName: string): (propEditors: PropertyEditorInfo[]) => JSX.Element {
    let componentRenders = getComponentRenders();
    return componentRenders[typeName];
}