import Nerv from "nervjs";
import { Component, ComponentClass, } from "@tarojs/taro";
import { View, Text } from '@tarojs/components';
import { ComponentData, ComponentFactory, ComponentDataHandler } from "maishu-jueying";
import * as components from "../components/index";
import { errors } from "../../errors";
import { Callbacks } from "maishu-chitu-service";
import React = require("react");
import { services } from "../services/services";

type Components = typeof components;

interface Context {
    handler: ComponentDataHandler
}

export let TaroComponentFactory: ComponentFactory = (componentData: ComponentData, context?: Context) => {
    return React.createElement("div", {
        ref: async (e) => {
            if (!e) return;
            let render = new TaroComponentRender();
            // loadComponents(componentData);
            // debugger;
            render.renderDesignTimeComponent(componentData, e, context);
        }
    })
}

export class TaroComponentRender {
    private pageView: PageView;

    renderDesignTimeComponent(componentData: ComponentData, element: HTMLElement, context: Context) {
        if (componentData == null) throw errors.argumentNull("compentData");
        if (element == null) throw errors.argumentNull("element");
        if (context == null) throw errors.argumentNull("context");

        console.assert(context != null && context.handler != null);
        let e = Nerv.createElement(PageView, {
            pageData: componentData,
            designer: context.handler,
            ref: (e: PageView) => {
                if (!e || this.pageView == e) return;
                this.pageView = e;
                this.onPageViewCreated(context)
            }
        }, <View>{componentData.type}</View>)

        Nerv.render(e, element);
    }

    renderRunTimeComponent(compentData: ComponentData, element: HTMLElement, context: Context): void {
        throw new Error("not implement.");
    }

    private onPageViewCreated(context: Context) {
        let componentDidMount = this.pageView.componentDidMount;
        this.pageView.componentDidMount = () => {
            if (componentDidMount != null)
                componentDidMount.apply(this.pageView);

            this.enableDrapDrop(this.pageView, context.handler);
            this.pageView.wrapper.onkeydown = (ev) => {
                const DELETE_KEY_CODE = 46;
                if (ev.keyCode == DELETE_KEY_CODE) {
                    let ids = context.handler.selectedComponents.map(c => c.id || c.id);
                    context.handler.removeComponents(ids);
                }
            }
        }

        this.pageView.componentCreated.add((sender, element, componentData) => {
            element.onclick = () => {
                context.handler.selectComponent(componentData.id);
                this.pageView.wrapper.focus();
            }
        })
    }

    private enableDrapDrop(pageView: PageView, designer: ComponentDataHandler) {

        if (pageView.element.className.indexOf("ui-sortable") >= 0)
            return;

        $(pageView.element).sortable({
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
}

// let componentTypes: { [name: string]: ComponentClass } = {};


interface PageViewProps {
    pageData: ComponentData,
}

class PageView extends Component<PageViewProps> {
    element: HTMLElement;
    wrapper: HTMLElement;
    componentCreated = Callbacks<PageView, HTMLElement, ComponentData>();

    createComponentElement(componentData: ComponentData) {
        const Carousel: keyof Components = "Carousel";
        const HtmlEditor: keyof Components = "HtmlEditor";

        let componentType = ComponentLoader.componentTypes[componentData.type];
        if (!componentType) {
            return <View>
                <Text>Unspported:</Text>
                <View>
                    <Text>{JSON.stringify(componentData)}</Text>
                </View>
            </View>;
        }

        let r: JSX.Element = Nerv.createElement(componentType, componentData.props);
        return r;
    }

    render() {
        let props: PageViewProps = this.props;
        let children = props.pageData.children as ComponentData[] || [];
        return <div tabIndex={0} ref={e => this.wrapper = e || this.wrapper} style={{ width: "100%", height: "100%" }}>
            <ul className="page-view" ref={e => this.element = e || this.element} style={{ width: "100%", height: "100%" }}>
                {children.length == 0 ?
                    <li className="text-center" style={{ paddingTop: 100 }}>
                        <h4>请拖放组件到此处</h4>
                    </li> :
                    children.map(o =>
                        <li ref={e => {
                            if (!e) return;
                            this.componentCreated.fire(this, e, o);
                        }}>
                            <ComponentLoader key={o.id} componentData={o} />
                        </li>
                    )
                }
            </ul>
        </div>
    }
}

interface ComponentLoaderProps {
    componentData: ComponentData
}

interface ComponentLoaderState {
    status: "loading" | "success" | "fail",
    componentType?: ComponentClass,
    error?: Error
}

class ComponentLoader extends Component<ComponentLoaderProps, ComponentLoaderState> {

    static componentTypes: { [name: string]: ComponentClass } = {
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
        console.assert(path.startsWith("static/"));
        console.assert(path.endsWith("tsx"));
        path = path.substr("static/".length, path.length - "static/".length - "tsx".length);
        path = path + "tarots";
        return new Promise((resolve, reject) => {
            requirejs([`noext!${path}`], (mod) => {
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

        let e = Nerv.createElement(componentType, this.props.componentData.props);
        return e;
    }
}

// componentTypes["PageView"] = PageView;
