import Nerv from "nervjs";
import { Component } from "@tarojs/taro";
import { View, Text } from '@tarojs/components';
import { ComponentData, ComponentFactory, PageDesigner, Context, ComponentDataHandler } from "maishu-jueying";
import * as components from "../components/index";
import { errors } from "../../errors";
import { Callbacks } from "maishu-chitu-service";

type Components = typeof components;

export class TaroComponentFactory extends ComponentFactory {
    private pageView: PageView;

    renderDesignTimeComponent(componentData: ComponentData, element: HTMLElement, context: Context) {
        debugger
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
        }

        this.pageView.componentCreated.add((sender, element, componentData) => {
            element.onclick = () => {
                context.handler.selectComponent(componentData.props.id);
            }
            element.onkeydown = (ev) => {
                const DELETE_KEY_CODE = 46;
                if (ev.keyCode == DELETE_KEY_CODE) {
                    context.handler.removeComponent(componentData.props.id);
                }
            }
        })
    }

    private enableDrapDrop(pageView: PageView, designer: ComponentDataHandler) {

        if (pageView.element.className.indexOf("ui-sortable") >= 0)
            return;

        let props: PageViewProps = (pageView as any).props;
        // let pageData = props.pageData;

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

                    let child = pageData.children.filter((o: ComponentData) => o.props.id == childId)[0] as ComponentData;
                    console.assert(child != null);

                    childComponentDatas.push(child);
                }

                let childIds = childComponentDatas.map(o => o.props.id);
                pageData.children = pageData.children.filter((o: ComponentData) => childIds.indexOf(o.props.id) < 0);

                pageData.children.push(...childComponentDatas);
                //==============================================================================================

            },
            receive: (event, ui) => {
                let pageData = pageView.props.pageData;
                let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
                console.assert(pageData.props.id);
                componentData.props.parentId = pageData.props.id;
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
                    designer.appendComponent(pageData.props.id, componentData, 0);
                }
                else if (isLatest) {
                    designer.appendComponent(pageData.props.id, componentData);
                }
                else {
                    let nextComponentDataId = ui.helper.parent().children()[elementIndex].getAttribute("data-component-id");
                    let componentIds = pageData.children.map((o: ComponentData) => o.props.id);
                    let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                    console.assert(nextComponentDataId != null);
                    designer.appendComponent(pageData.props.id, componentData, nextComponentDataIndex);
                }


                ui.helper.remove();
            }
        })
    }
}

interface PageViewProps {
    pageData: ComponentData,
}

class PageView extends Component<PageViewProps> {
    element: HTMLElement;
    componentCreated = Callbacks<PageView, HTMLElement, ComponentData>();

    componentDidMount() {

    }

    createComponentElement(componentData: ComponentData) {
        const Carousel: keyof Components = "Carousel";
        const HtmlEditor: keyof Components = "HtmlEditor";

        let r: JSX.Element;
        switch (componentData.type) {
            case Carousel:
                r = Nerv.createElement(components.Carousel, componentData.props);
                break;
            case HtmlEditor:
                r = Nerv.createElement(components.HtmlEditor, componentData.props);
                break;
            default:
                r = <View>
                    <Text>Unspported:</Text>
                    <View>
                        <Text>{JSON.stringify(componentData)}</Text>
                    </View>
                </View>;
        }

        return r;
    }

    render() {
        let props: PageViewProps = this.props;
        let children = props.pageData.children as ComponentData[] || [];
        return <ul className="page-view" ref={e => this.element = e || this.element} style={{ width: "100%", height: "100%" }}>
            {children.length == 0 ?
                <li className="text-center" style={{ paddingTop: 100 }}>
                    <h4>请拖放组件到此处</h4>
                </li> :
                children.map(o =>
                    <li ref={e => {
                        if (!e) return;
                        this.componentCreated.fire(this, e, o);
                    }}>
                        {this.createComponentElement(o)}
                    </li>
                )
            }
        </ul>
    }
}
