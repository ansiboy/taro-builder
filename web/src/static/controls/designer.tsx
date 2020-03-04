import { Callback1, Callbacks } from "maishu-chitu-service";
import { ComponentData, PageDesigner as PageDesignerCompoent, ComponentFactory } from "maishu-jueying";
import ReactDOM = require("react-dom");
import React = require("react");
import { PageDesignerProps } from "maishu-jueying";

interface EditorPanel {
    element: HTMLElement,
    propertyChanged: Callback1<EditorPanel, {}>;
}

class MyEditorPanel implements EditorPanel {
    element: HTMLElement;
    propertyChanged: Callback1<EditorPanel, {}>;

    constructor(element: HTMLElement) {
        this.element = element;
        this.propertyChanged = Callbacks<EditorPanel, {}>();
    }
}

interface PageDesignerArguments<T> {
    pageData: ComponentData;
    element: HTMLElement,
    componentFactory: ComponentFactory,
    editorPanel?: EditorPanel,
    context?: T
}

interface Props extends PageDesignerProps {
    componentFactory: ComponentFactory,
    containerElement: HTMLElement,
    context?: any | null
}

// export class ComponentContainer extends PageDesignerCompoent<Props> {
//     private designer: PageDesignerCompoent;
//     private master: ComponentData;

//     constructor(props: Props) {
//         super(props);

//         this.designer = this;//props.designer;
//         this.master = props.pageData;
//         console.assert(this.master != null);
//     }

//     componentDidMount() {
//         let pageData = this.designer.pageData;
//         $(this.props.containerElement).sortable({
//             axis: "y",
//             stop: () => {
//                 //==============================================================================================
//                 // 对组件进行排序
//                 console.assert(pageData.children != null);

//                 let childComponentDatas: ComponentData[] = [];
//                 let elements = this.props.containerElement.querySelectorAll("li");
//                 for (let i = 0; i < elements.length; i++) {

//                     let childId = elements[i].getAttribute("data-component-id");
//                     if (!childId)
//                         continue;

//                     console.assert(childId != null);

//                     let child = pageData.children.filter(o => o.props.id == childId)[0];
//                     console.assert(child != null);

//                     childComponentDatas.push(child);
//                 }

//                 let childIds = childComponentDatas.map(o => o.props.id);
//                 pageData.children = pageData.children.filter(o => childIds.indexOf(o.props.id) < 0);

//                 pageData.children.push(...childComponentDatas);
//                 //==============================================================================================

//             },
//             receive: (event, ui) => {
//                 let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
//                 console.assert(this.master.props.id);
//                 // console.assert(this.props.id != null);
//                 console.assert(pageData.props.id);
//                 componentData.props.parentId = this.designer.pageData.props.id;
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
//                     this.designer.appendComponent(this.master.props.id, componentData, 0);
//                 }
//                 else if (isLatest) {
//                     this.designer.appendComponent(this.master.props.id, componentData);
//                 }
//                 else {
//                     let nextComponentDataId = ui.helper.parent().children()[elementIndex].getAttribute("data-component-id");
//                     let componentIds = pageData.children.map(o => o.props.id);
//                     let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
//                     console.assert(nextComponentDataId != null);
//                     this.designer.appendComponent(this.master.props.id, componentData, nextComponentDataIndex);
//                 }


//                 ui.helper.remove();
//             }
//         })
//     }

//     render() {
//         let pageData = this.designer.pageData;
//         let children = pageData.children || [];
//         return <>
//             {children.length == 0 ?
//                 <li className="text-center" style={{ paddingTop: 100 }}>
//                     <h4>请拖放组件到此处</h4>
//                 </li> :
//                 children.map(c => <li key={c.props.id}
//                     ref={e => {
//                         if (!e) return;
//                         this.props.componentFactory.renderComponent(c, e, this.props.context);
//                     }}>

//                 </li>)}
//         </>;
//     }
// }

// export function createPageDesigner<T>(args: PageDesignerArguments<T>) {
//     ReactDOM.render(<PageDesignerCompoent containerElement={args.element} componentFactory={args.componentFactory}
//         pageData={args.pageData} context={args.context} />, args.element);



// }
