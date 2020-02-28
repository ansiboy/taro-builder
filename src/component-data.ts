interface ComponentProps {

}

export interface ComponentData {
    type: string;
    props?: ComponentProps;
    children?: (ComponentData | string)[];
}