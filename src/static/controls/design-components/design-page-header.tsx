import { component, PageHeaderProps, PageHeader } from "taro-builder-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

@component({ type: PageHeader.typeName })
export class DesignPageHeader extends React.Component<PageHeaderProps> {
    render() {
        let style: React.CSSProperties = { height: this.props.height, display: this.props.visible ? "" : "none" }
        return <ComponentContainer id={this.props.id} className={PageHeader.className} style={style} />
    }
}


