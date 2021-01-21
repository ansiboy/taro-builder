import { PageDesigner, DesignerContext } from "maishu-jueying";
import { ComponentData, parseComponentData } from "maishu-jueying-core";
import { guid } from "maishu-toolkit";
import { DesignPageContext } from "./design-page";
import { ComponentContainer as BaseComponentContainer, ComponentContainerProps as BaseComponentContainerProps } from "maishu-jueying-core";
import * as React from "react";

export type ComponentContainerProps = BaseComponentContainerProps & {
    enable?: boolean
}

export class ComponentContainer extends BaseComponentContainer<ComponentContainerProps> {
    private container: HTMLElement;

    constructor(props) {
        super(props);

    }
    private enableDrapDrop(containerElement: HTMLElement, designer: PageDesigner) {
        let pageData = designer.pageData;
        console.assert(containerElement != null);
        $(containerElement).sortable({
            axis: "y",
            stop: () => {

                // let pageData = pageView.props.pageData;
                //==============================================================================================
                // 对组件进行排序
                console.assert(pageData.children != null);

                let childComponentDatas: ComponentData[] = [];
                let elements = containerElement.querySelectorAll("li");
                for (let i = 0; i < elements.length; i++) {

                    let childId = elements[i].getAttribute("data-component-id");
                    if (!childId)
                        continue;

                    console.assert(childId != null);

                    let child = pageData.children.filter((o: ComponentData) => o.id == childId)[0] as ComponentData;
                    console.assert(child != null);

                    childComponentDatas.push(child);
                }

                let childIds = childComponentDatas.map(o => o.id);
                pageData.children = pageData.children.filter((o: ComponentData) => childIds.indexOf(o.id) < 0);

                pageData.children.push(...childComponentDatas);
                //==============================================================================================

            },
            receive: (event, ui) => {
                let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
                componentData.id = componentData.id || guid();
                componentData.parentId = this.props.id;
                componentData.props = {
                    // id: componentData.id,
                }
                let elementIndex: number = 0;
                ui.helper.parent().children().each((index, element) => {
                    if (element == ui.helper[0]) {
                        elementIndex = index;
                        return false;
                    }
                })


                let isFirst = elementIndex == 0;
                let isLatest = elementIndex == ui.helper.parent().children().length - 1;

                if (isFirst) {
                    designer.appendComponent(pageData.id, componentData, 0);
                }
                else if (isLatest) {
                    designer.appendComponent(pageData.id, componentData);
                }
                else {
                    let nextComponentDataId = ui.helper.parent().children()[elementIndex + 1].getAttribute("data-component-id");
                    let componentIds = pageData.children.map((o: ComponentData) => o.id);
                    let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                    console.assert(nextComponentDataId != null);
                    designer.appendComponent(pageData.id, componentData, nextComponentDataIndex);
                }

                designer.selectComponent(componentData.id);
                ui.helper.remove();
            }
        })
    }
    disable() {
        $(this.container).sortable("disable");
        $(this.container).find("li").attr("contentEditable", "true");
        $(this.container).find("li").css("cursor", "default");
    }
    enable() {
        $(this.container).sortable("options", "disable", false);
        $(this.container).find("li").attr("contentEditable", "false");
        $(this.container).find("li").css("cursor", "move");
    }
    componentDidMount() {
    }
    render() {
        return <DesignPageContext.Consumer>
            {args => {
                let pageData = args.pageData;
                if (pageData == null)
                    return null;

                let children = pageData.children.filter(o => typeof o != "string" && o.parentId == this.props.id) as ComponentData[];
                let className = this.props.className || "";
                if (children.length == 0) {
                    className = className + " empty";
                }
                return <ul className={className} style={this.props.style} ref={e => {
                    if (e == null || this.container != null)
                        return

                    this.container = e || this.container;
                    let enable = this.props.enable == null ? true : this.props.enable;
                    if (enable) {
                        this.enableDrapDrop(this.container, args.designer);
                        setTimeout(() => {
                            args.componentPanel.addDropTarget(this.container);
                        })
                    }

                }}>
                    {children.length == 0 ?
                        <li className="text-center">
                            <h4>请拖放组件到此处</h4>
                        </li>
                        : children.map(o => <li key={o.id} data-component-id={(o.id)}
                            className={o.selected ? "selected" : ""}
                            onClick={() => {
                                args.designer.selectComponent(o.id)
                            }}>
                            {parseComponentData(o)}</li>)
                    }
                </ul>
            }}
        </DesignPageContext.Consumer>

    }
}

ComponentContainer.contextType = DesignerContext