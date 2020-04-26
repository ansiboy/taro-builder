import { component, ComponentProps, PageViewBody } from "taro-builder-core";
import { DesignComponentProps, enableDrapDrop } from "./design-component";
import * as React from "react";

@component({ type: PageViewBody.typeName })
export class DesignPageViewBody extends React.Component<ComponentProps & DesignComponentProps> {
    private container: HTMLElement;

    componentDidMount() {
        let designProps = this.props.designComponentProps;
        designProps.componentPanel.addDropTarget(this.container);
        enableDrapDrop(this.container, designProps.componentData, designProps.designer);
    }

    render() {
        let c: JSX.Element;

        if (!this.props.children) {
            c = <li className="text-center" style={{ paddingTop: 100 }}    >
                <h4>请拖放组件到此处</h4>
            </li>
        }
        else {
            let children: React.ReactNodeArray = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
            c = <>  {children.map((c: React.Component<ComponentProps & DesignComponentProps>) => {
                let designProps = c.props.designComponentProps;
                let id = designProps.id;
                console.assert(id != null);
                return <li key={id} data-component-id={id} className={designProps.selected ? "selected" : ""}
                    ref={e => {
                        if (!e) return;
                        e.onclick = () => {
                            designProps.designer.element.focus();
                            if (designProps.selected)
                                designProps.designer.selectComponents([])
                            else
                                designProps.designer.selectComponent(id);
                        }
                    }}
                >{c}</li>
            })}
            </>
        }

        return <ul className={PageViewBody.className} ref={e => this.container = this.container || e}>
            {c}
        </ul>
    }
}