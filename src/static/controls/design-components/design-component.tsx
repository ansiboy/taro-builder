import { PageDesigner } from "maishu-jueying";
import { ComponentData, component, PageData } from "taro-builder-core";
import { guid } from "maishu-toolkit";
import { ComponentPanel } from "../component-panel";

export interface DesignComponentProps {
    designComponentProps: {
        designer: PageDesigner,
        componentData: ComponentData,
        componentPanel: ComponentPanel,
        selected: boolean,
        id: string,
    }
}

function enableDrapDrop(bodyElement: HTMLElement, parentData: PageData, designer: PageDesigner) {
    console.assert(bodyElement != null);
    $(bodyElement).sortable({
        axis: "y",
        stop: () => {

            // let pageData = pageView.props.pageData;
            //==============================================================================================
            // 对组件进行排序
            console.assert(parentData.children != null);

            let childComponentDatas: ComponentData[] = [];
            let elements = bodyElement.querySelectorAll("li");
            for (let i = 0; i < elements.length; i++) {

                let childId = elements[i].getAttribute("data-component-id");
                if (!childId)
                    continue;

                console.assert(childId != null);

                let child = parentData.children.filter((o: ComponentData) => o.id == childId)[0] as ComponentData;
                console.assert(child != null);

                childComponentDatas.push(child);
            }

            let childIds = childComponentDatas.map(o => o.id);
            parentData.children = parentData.children.filter((o: ComponentData) => childIds.indexOf(o.id) < 0);

            parentData.children.push(...childComponentDatas);
            //==============================================================================================

        },
        receive: (event, ui) => {
            let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
            componentData.id = componentData.id || guid();
            componentData.parentId = parentData.id;
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
                designer.appendComponent(parentData.id, componentData, 0);
            }
            else if (isLatest) {
                designer.appendComponent(parentData.id, componentData);
            }
            else {
                let nextComponentDataId = ui.helper.parent().children()[elementIndex + 1].getAttribute("data-component-id");
                let componentIds = parentData.children.map((o: ComponentData) => o.id);
                let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                console.assert(nextComponentDataId != null);
                designer.appendComponent(parentData.id, componentData, nextComponentDataIndex);
            }

            designer.selectComponent(componentData.id);
            ui.helper.remove();
        }
    })
}

// export type PageData = ComponentData