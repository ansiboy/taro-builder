import { PageBody, PageBodyProps, PageHeader, PageHeaderProps, PageFooter, PageFooterProps, registerComponent } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";
import { DesignPageContext } from "./design-page";

export class DesignPageBody extends React.Component<PageBodyProps & { enable?: boolean }> {
    render() {
        return <DesignPageContext.Consumer>
            {args => {
                let style: React.CSSProperties = { marginTop: 0 };
                if (args.pageData == null)
                    return null;

                let header = args.pageData.children.filter(o => o.type == PageHeader.typeName)[0];
                let footer = args.pageData.children.filter(o => o.type == PageFooter.typeName)[0];
                if (header != null && (header.props as PageHeaderProps).visible) {
                    let p = header.props as PageHeaderProps;
                    style.marginTop = p.height;
                    style.height = `calc(100% - ${p.height}px)`;
                }
                if (footer != null && (footer.props as PageFooterProps).visible) {
                    let p = footer.props as PageHeaderProps;
                    style.height = `calc(100% - ${(style.marginTop as number) + p.height}px)`;
                }

                style.display = this.props.visible ? "" : "none";
                return <ComponentContainer className={PageBody.className} {...this.props} style={style} enable={this.props.enable} />
            }}
        </DesignPageContext.Consumer>
    }
}

registerComponent(PageBody.typeName, DesignPageBody);


