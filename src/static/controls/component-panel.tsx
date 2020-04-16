import * as React from "react";
import { ComponentDefine, classNames } from "maishu-jueying";

interface ComponentToolbarProps extends React.Props<ComponentPanel> {
    style?: React.CSSProperties,
    className?: string,
    empty?: string | JSX.Element,
}

interface ComponentToolbarState {
    components: ComponentDefine[],
}

export class ComponentPanel extends React.Component<ComponentToolbarProps, ComponentToolbarState> {
    // designer: {};
    private toolbarElement: HTMLElement;
    private COMPONENT_DATA = "component-data";
    private targetElements: Element[] = [];

    constructor(props) {
        super(props)
        this.state = { components: [] }
    }

    get element() {
        return this.toolbarElement;
    }

    setComponets(componets: ComponentDefine[]) {
        this.setState({ components: componets }, () => {
            $(this.element).find("li").draggable({
                // connectToSortable: $(".user-page"),
                helper: "clone",
                revert: "invalid"
            })
        })
    }

    addDropTarget(targetElement: Element) {
        this.targetElements.push(targetElement);
        $(this.element).find("li").draggable("option", "connectToSortable", this.targetElements);
    }

    async componentDidMount() {
    }

    render() {
        let empty = this.props.empty || <div className="empty">暂无可用组件</div>
        let props: ComponentToolbarProps = Object.assign({}, this.props);
        let componets = this.state.components || [];
        return <ul {...props as any} className={`${classNames.componentPanel}`}
            ref={(e: HTMLElement) => this.toolbarElement = this.toolbarElement || e}>
            {componets.length == 0 ? empty : componets.map((c, i) => {
                let props = { key: i };
                props[this.COMPONENT_DATA] = JSON.stringify(c.componentData);
                return <li {...props}>
                    <div className="btn-link">
                        <i className={c.icon} style={{ fontSize: 44, color: 'black' }}
                            ref={e => {
                                if (!e) return

                            }} />
                    </div>
                    <div>
                        {c.displayName}
                    </div>
                </li>
            })}
        </ul>

    }
}