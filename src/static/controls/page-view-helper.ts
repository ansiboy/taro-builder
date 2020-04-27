import {
    ComponentData, Page, PageBody, PageHeader, PageHeaderProps,
    PageFooter, PageFooterProps, PageData
} from "taro-builder-core";
import { guid } from "maishu-toolkit";

export class PageViewHelper {
    static emptyPageData(): PageData {
        let pageViewId = guid();
        let bodyId = guid();
        let pageData: PageData = {
            id: pageViewId,
            type: Page.typeName,
            children: [{
                id: bodyId,
                type: PageBody.typeName,
                props: {},
                selected: false,
                parentId: pageViewId,
            }],
            props: {}
        };
        return pageData;
    }
    static findBody(pageData: PageData): ComponentData {
        let body = pageData.children.filter(o => typeof o != "string" && o.type == PageBody.typeName)[0] as ComponentData;
        return body;
    }
    static findHeader(pageData: PageData, createIfNotExists: boolean = false): HeaderComponentData {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageHeader.typeName)[0] as HeaderComponentData;
        if (c == null && createIfNotExists) {
            let props: PageHeaderProps = PageHeader.defaultProps;
            c = {
                id: guid(), type: PageHeader.typeName,
                props: props, parentId: pageData.id,
            }
            pageData.children.push(c);
        }
        return c;
    }
    static findFooter(pageData: PageData, createIfNotExists: boolean = false): FooterComponentData {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageFooter.typeName)[0] as FooterComponentData;
        if (c == null && createIfNotExists) {
            let props: PageFooterProps = PageFooter.defaultProps;
            c = {
                id: guid(), type: PageFooter.typeName, props: props,
                parentId: pageData.id
            }
            pageData.children.push(c);
        }
        return c;
    }
}


type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type HeaderComponentData = Omit<ComponentData, "props"> & { props: PageHeaderProps };
type FooterComponentData = Omit<ComponentData, "props"> & { props: PageFooterProps };
