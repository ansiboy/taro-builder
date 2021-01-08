import { component, PageFooter, PageFooterProps } from "taro-builder-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

@component({ type: PageFooter.typeName })
export class DesignPageFooter extends React.Component<PageFooterProps> {
    render() {
        let style: React.CSSProperties = { height: this.props.height, display: this.props.visible ? "" : "none" }
        return <ComponentContainer id={this.props.id} className={PageFooter.className} style={style} />
    }
}


