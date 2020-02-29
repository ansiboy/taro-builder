interface ComponentProps {

}

export interface ComponentData {
    /** 组件类型名称 */
    typeName: string;
    /** 组件属性 */
    props?: ComponentProps;
    /** 子组件 */
    children?: (ComponentData | string)[];
}