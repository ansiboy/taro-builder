import { ComponentData } from "maishu-jueying";

export abstract class ComponentFactory {

    renderDesignTimeComponent(compentData: ComponentData, element: HTMLElement, context?: any): void {
        this.renderComponent(compentData, element, context);
    }

    abstract renderComponent(compentData: ComponentData, element: HTMLElement, context?: any): void;
}