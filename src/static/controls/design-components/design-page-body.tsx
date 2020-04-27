import { component, ComponentProps, PageBody, parseComponentData, ComponentData, PageData } from "taro-builder-core";
import * as React from "react";
import { guid } from "maishu-toolkit";
import { PageDesigner, DesignerContext } from "maishu-jueying";

@component({ type: PageBody.typeName })
export class DesignPageBody extends React.Component<ComponentProps> {
    render() {
        return <ComponentContainer id="page-body" className={PageBody.className} {...this.props} />
    }
}


interface CompoenntContainerProps {
    id: string,
    className?: string
}

export class ComponentContainer extends React.Component<CompoenntContainerProps> {
    private container: HTMLElement;

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
    componentDidMount() {
        // this.enableDrapDrop(this.container, this.getPageData(this.designer), this.designer);
        //========================================
        // 要加 setTimeout，否则会异常
        // setTimeout(() => {
        //     props.componentPanel.addDropTarget(this.container);
        // })
        //========================================
    }
    private getPageData(designer: PageDesigner) {
        let pageData = designer.pageData as PageData;
        return pageData;
    }
    render() {
        return <DesignerContext.Consumer>
            {args => {
                let pageData = this.getPageData(args.designer)
                let children = pageData.children.filter(o => typeof o != "string" && o.parentId == this.props.id) as ComponentData[];
                return <ul className={this.props.className} ref={e => {
                    if (e == null || this.container != null)
                        return

                    this.container = e || this.container;
                    this.enableDrapDrop(this.container, args.designer);
                }}>
                    {children.length == 0 ?
                        <li className="text-center" style={{ paddingTop: 100 }}    >
                            <h4>请拖放组件到此处</h4>
                        </li>
                        : children.map(o => <li key={o.id} data-component-id={(o.id)}>
                            {parseComponentData(o)}</li>)
                    }
                </ul>
            }}
        </DesignerContext.Consumer>

    }
}

ComponentContainer.contextType = DesignerContext