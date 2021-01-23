import { ComponentData } from "maishu-jueying-core";

export interface ComponentInfo {
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
    data?: ComponentData
}