import { PageFooter, PageFooterProps, registerComponent } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

// @component({ type: PageFooter.typeName })
export class DesignPageFooter extends React.Component<PageFooterProps & { enable?: boolean }> {
    render() {
        let style: React.CSSProperties = { height: this.props.height, display: this.props.visible ? "" : "none" }
        return <ComponentContainer id={this.props.id} className={PageFooter.className} style={style} enable={this.props.enable} />
    }
}

registerComponent(PageFooter.typeName, DesignPageFooter);


