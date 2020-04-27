import {
    ComponentData, Page, PageBody, PageHeader, PageHeaderProps,
    PageFooter, PageFooterProps, PageData, PageBodyProps
} from "taro-builder-core";
import { guid } from "maishu-toolkit";

export class PageViewHelper {
    static emptyPageData(): PageData {
        let pageId = guid();
        let pageData: PageData = {
            id: pageId,
            type: Page.typeName,
            children: [{
                id: PageBody.id,
                type: PageBody.typeName,
                props: PageBody.defaultProps,
                selected: false,
                parentId: pageId,
            }],
            props: {}
        };
        return pageData;
    }
    static findBody(pageData: PageData): BodyComponentData {
        let body = pageData.children.filter(o => typeof o != "string" && o.type == PageBody.typeName)[0];
        return body;
    }
    static findHeader(pageData: PageData, createIfNotExists: boolean = false): HeaderComponentData {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageHeader.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = PageHeader.defaultProps;
            // let props: PageHeaderProps = { id: guid(), height: d.height, visible: d.visible };
            c = {
                id: d.id, type: PageHeader.typeName,
                props: d, parentId: pageData.id,
            }
            pageData.children.push(c);
        }
        return c;
    }
    static findFooter(pageData: PageData, createIfNotExists: boolean = false): FooterComponentData {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageFooter.typeName)[0] as FooterComponentData;
        if (c == null && createIfNotExists) {
            let d = PageFooter.defaultProps;
            // let props: PageFooterProps = { id: guid(), height: d.height, visible: d.visible };
            c = {
                id: d.id, type: PageFooter.typeName, props: d,
                parentId: pageData.id
            }
            pageData.children.push(c);
        }
        return c;
    }
}


type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type BodyComponentData = Omit<ComponentData, "props"> & { props: PageBodyProps };
type HeaderComponentData = Omit<ComponentData, "props"> & { props: PageHeaderProps };
type FooterComponentData = Omit<ComponentData, "props"> & { props: PageFooterProps };
