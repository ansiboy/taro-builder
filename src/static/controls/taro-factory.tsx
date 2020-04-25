import { View, Text } from '@tarojs/components';
import { ComponentData, PageDesigner } from "maishu-jueying";
import { errors } from "../../errors";
import { Callbacks } from "maishu-chitu-service";
import React = require("react");
import { services } from "../services/services";
import { ComponentPanel } from "./component-panel";


/** 将 ComponentData 渲染为 Taro 组件 */
// export let TaroComponentFactory = function (componentData: ComponentData, context: Context) {
//     let render = new TaroComponentRender();
//     return render.renderComponent(componentData, context);;
// }

// export class TaroComponentRender {
//     private pageView: PageView;

//     renderComponent(componentData: ComponentData, context: Context) {
//         if (componentData == null) throw errors.argumentNull("compentData");
//         if (context == null) throw errors.argumentNull("context");

//         console.assert(context != null && context.handler != null);
//         return <PageView pageData={componentData} designer={context.handler}
//             ref={e => {
//                 if (!e || this.pageView == e) return;
//                 this.pageView = e;
//                 this.onPageViewCreated(context)
//             }}>
//         </PageView>;
//     }

//     private onPageViewCreated(context: Context) {
//         this.enableDrapDrop(this.pageView, context.handler);
//         this.pageView.wrapper.onkeydown = (ev) => {
//             const DELETE_KEY_CODE = 46;
//             if (ev.keyCode == DELETE_KEY_CODE) {
//                 let ids = context.handler.selectedComponents.map(c => c.id || c.id);
//                 context.handler.removeComponent(...ids);
//             }
//         }

//         this.pageView.componentCreated.add((sender, element, componentData) => {
//             element.onclick = () => {
//                 context.handler.selectComponent(componentData.id);
//                 this.pageView.wrapper.focus();
//             }
//         })
//     }

//     private enableDrapDrop(pageView: PageView, designer: PageDesigner) {
//         if (pageView.element.className.indexOf("ui-sortable") >= 0)
//             return;

//         $(pageView.element).sortable({
//             axis: "y",
//             stop: () => {

//                 let pageData = pageView.props.pageData;
//                 //==============================================================================================
//                 // 对组件进行排序
//                 console.assert(pageData.children != null);

//                 let childComponentDatas: ComponentData[] = [];
//                 let elements = pageView.element.querySelectorAll("li");
//                 for (let i = 0; i < elements.length; i++) {

//                     let childId = elements[i].getAttribute("data-component-id");
//                     if (!childId)
//                         continue;

//                     console.assert(childId != null);

//                     let child = pageData.children.filter((o: ComponentData) => o.id == childId)[0] as ComponentData;
//                     console.assert(child != null);

//                     childComponentDatas.push(child);
//                 }

//                 let childIds = childComponentDatas.map(o => o.id);
//                 pageData.children = pageData.children.filter((o: ComponentData) => childIds.indexOf(o.id) < 0);

//                 pageData.children.push(...childComponentDatas);
//                 //==============================================================================================

//             },
//             receive: (event, ui) => {
//                 let pageData = pageView.props.pageData;
//                 let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
//                 console.assert(pageData.id);
//                 componentData.parentId = pageData.id;
//                 let elementIndex: number = 0;
//                 ui.helper.parent().children().each((index, element) => {
//                     if (element == ui.helper[0]) {
//                         elementIndex = index;
//                         return false;
//                     }
//                 })


//                 let isFirst = elementIndex == 0;
//                 let isLatest = elementIndex == ui.helper.parent().children().length - 1;

//                 if (isFirst) {
//                     designer.appendComponent(pageData.id, componentData, 0);
//                 }
//                 else if (isLatest) {
//                     designer.appendComponent(pageData.id, componentData);
//                 }
//                 else {
//                     let nextComponentDataId = ui.helper.parent().children()[elementIndex].getAttribute("data-component-id");
//                     let componentIds = pageData.children.map((o: ComponentData) => o.id);
//                     let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
//                     console.assert(nextComponentDataId != null);
//                     designer.appendComponent(pageData.id, componentData, nextComponentDataIndex);
//                 }


//                 ui.helper.remove();
//             }
//         })
//     }
// }

interface PageViewProps {
    pageData: ComponentData,
    designer: PageDesigner,
}

export class PageView extends React.Component<PageViewProps> {
    private element: HTMLElement;
    private bodyContainer: HTMLElement;
    componentCreated = Callbacks<PageView, HTMLElement, ComponentData>();

    createComponentElement(componentData: ComponentData) {
        let componentType = ComponentLoader.componentTypes[componentData.type];
        if (!componentType) {
            return <View>
                <Text>Unspported:</Text>
                <View>
                    <Text>{JSON.stringify(componentData)}</Text>
                </View>
            </View>;
        }

        let r: JSX.Element = React.createElement(componentType, componentData.props);
        return r;
    }

    setComponentPanel(componentPanel: ComponentPanel) {
        componentPanel.addDropTarget(this.bodyContainer);
    }

    private enableDrapDrop(pageView: PageView, designer: PageDesigner) {
        let bodyElement = this.element.querySelector("section > ul");
        $(bodyElement).sortable({
            axis: "y",
            stop: () => {

                let pageData = pageView.props.pageData;
                //==============================================================================================
                // 对组件进行排序
                console.assert(pageData.children != null);

                let childComponentDatas: ComponentData[] = [];
                let elements = pageView.element.querySelectorAll("li");
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
                let pageData = pageView.props.pageData;
                let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
                console.assert(pageData.id);
                componentData.parentId = pageData.id;
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
                    let nextComponentDataId = ui.helper.parent().children()[elementIndex].getAttribute("data-component-id");
                    let componentIds = pageData.children.map((o: ComponentData) => o.id);
                    let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                    console.assert(nextComponentDataId != null);
                    designer.appendComponent(pageData.id, componentData, nextComponentDataIndex);
                }


                ui.helper.remove();
            }
        })
    }

    componentDidMount() {
        this.enableDrapDrop(this, this.props.designer);
    }

    render() {
        let props: PageViewProps = this.props;
        let children = props.pageData.children as ComponentData[] || [];
        return <div className="page-view" ref={e => this.element = e || this.element}
            style={{ width: "100%", height: "100%" }}>
            <header></header>
            <section style={{ width: "100%", height: "100%", overflowY: "auto" }}>
                <ul ref={e => this.bodyContainer = e || this.bodyContainer}>
                    {children.length == 0 ?
                        <li className="text-center" style={{ paddingTop: 100 }}>
                            <h4>请拖放组件到此处</h4>
                        </li> :
                        children.map(o =>
                            <li key={o.id} data-component-id={o.id}
                                onClick={e => {
                                    this.props.designer.selectComponent(o.id);
                                    (e.target as HTMLElement).focus();
                                }}
                                ref={e => {
                                    if (!e) return;
                                    this.componentCreated.fire(this, e, o);
                                    e.tabIndex = 0;
                                    e.contentEditable = "true";
                                }}>
                                <ComponentLoader key={o.id} componentData={o} />
                            </li>
                        )
                    }
                </ul>
            </section>
            <footer></footer>
        </div>
    }
}

interface ComponentLoaderProps {
    componentData: ComponentData
}

interface ComponentLoaderState {
    status: "loading" | "success" | "fail",
    componentType?: React.ComponentClass,
    error?: Error
}

class ComponentLoader extends React.Component<ComponentLoaderProps, ComponentLoaderState> {

    static componentTypes: { [name: string]: React.ComponentClass } = {
        PageView: PageView
    };

    constructor(props: ComponentLoaderProps) {
        super(props);

        let typesToLoad: string[] = [];
        let stack: ComponentData[] = [props.componentData];
        while (stack.length > 0) {
            let item = stack.pop();
            if (ComponentLoader.componentTypes[item.type] == null && typesToLoad.indexOf(item.type) < 0) {
                typesToLoad.push(item.type);
            }

            (item.children || []).forEach(c => {
                if (typeof c == "string")
                    return;

                stack.push(c);
            })
        }

        this.state = {
            status: typesToLoad.length == 0 ? "success" : "loading",
            componentType: ComponentLoader.componentTypes[this.props.componentData.type]
        };

        if (typesToLoad.length > 0) {
            this.loadComponentTypes(typesToLoad).then(() => {
                this.setState({ status: "success", componentType: ComponentLoader.componentTypes[this.props.componentData.type] });
            }).catch(err => {
                console.error(err);
                this.setState({ status: "fail", error: err });
            })
        }

    }

    loadComponentTypes(componentTypes: string[]) {
        let ps: Promise<any>[] = [];
        for (let i = 0; i < componentTypes.length; i++) {
            ps.push(this.loadComponentType(componentTypes[i]));
        }

        return Promise.all(ps);
    }

    async loadComponentType(typeName: string) {
        let componentInfos = await services.local.componentInfos();
        let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
        if (componentInfo == null) {
            throw errors.canntFindComponentInfo(typeName);
        }

        let path = componentInfo.path;
        if (path.endsWith(".jsx")) {
            path = path.substr(0, path.length - 4);
        }
        console.assert(path.startsWith("static/"));
        path = path.substr("static/".length);
        return new Promise((resolve, reject) => {
            requirejs([`${path}`], (mod) => {
                if (mod[typeName] == null)
                    throw errors.moduleNotExport(path, typeName);

                ComponentLoader.componentTypes[typeName] = mod[typeName];
                resolve(mod[typeName]);

            }, err => {
                reject(err);
            })
        })
    }


    render() {
        let { status, componentType, error } = this.state;
        if (status == "loading")
            return <View>组件正在加载中...</View>

        if (status == "fail")
            return <View>
                <View>组件加载失败</View>
                <View>{error.message}</View>
            </View>

        let e = React.createElement(componentType, this.props.componentData.props);
        return e;
    }
}



