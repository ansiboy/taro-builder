import { PropertyEditorInfo } from "maishu-jueying";

// 用于生成组件布局 
export let componentRenders: { [typename: string]: (propEditors: PropertyEditorInfo[]) => JSX.Element } = {};