import {
    ComponentData, Page, PageBody, PageHeader, PageHeaderProps,
    PageFooter, PageFooterProps, PageData, PageBodyProps
} from "maishu-jueying-core";
import { guid } from "maishu-toolkit";
import { errors } from "../errors";
import { ComponentContainerProps } from "../controls/design-components/component-container";

export class PageHelper {
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
    static findBody(pageData: PageData, createIfNotExists: boolean = false): BodyComponentData {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageBody.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = PageHeader.defaultProps;
            c = {
                id: d.id, type: PageBody.typeName,
                props: d, parentId: pageData.id,
            }
            pageData.children.push(c);
        }
        return c;
    }
    static findHeader(pageData: PageData, createIfNotExists: boolean = false): HeaderComponentData | null {
        if (pageData == null) throw errors.argumentNull("pageData");

        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageHeader.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = PageHeader.defaultProps;
            c = {
                id: d.id, type: PageHeader.typeName,
                props: d, parentId: pageData.id,
            }
            pageData.children.push(c);
        }
        return c;
    }

    static findFooter(pageData: PageData, createIfNotExists: boolean = false): FooterComponentData | null {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == PageFooter.typeName)[0] as FooterComponentData;
        if (c == null && createIfNotExists) {
            let d = PageFooter.defaultProps;
            c = {
                id: d.id, type: PageFooter.typeName, props: d,
                parentId: pageData.id
            }
            pageData.children.push(c);
        }
        return c;
    }

    /**
     * 合并模板数据到页面数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static mergeTemplate(pageData: PageData, template: PageData) {
        if (!pageData) throw errors.argumentNull("pageData");
        if (!template) throw errors.argumentNull("template");

        let pageHeaderData = PageHelper.findHeader(pageData, true);
        let pageFooterData = PageHelper.findFooter(pageData, true);
        let pageBodyData = PageHelper.findBody(pageData, true);

        let templateHeaderData = PageHelper.findHeader(template);
        let templateHeaderChildren = templateHeaderData ? template.children.filter(o => o.parentId == templateHeaderData.id) : [];
        templateHeaderChildren.forEach(c => c.parentId = pageHeaderData.id);

        let templateFooterData = PageHelper.findFooter(template);
        let templateFooterChildren = templateFooterData ? template.children.filter(o => o.parentId == templateFooterData.id) : [];
        templateFooterChildren.forEach(c => c.parentId = pageFooterData.id);

        let templateBodyData = PageHelper.findBody(template);
        let templateBodyChildren = templateBodyData ? template.children.filter(o => o.parentId == templateBodyData.id) : [];
        templateBodyChildren.forEach(c => c.parentId = pageBodyData.id);

        let pageDataControlIds = pageData.children.map(o => o.id);
        [...templateHeaderChildren, ...templateBodyChildren, ...templateFooterChildren].forEach((c, i) => {
            // 如果控件已经存在，不需要添加，直接返回
            if (pageDataControlIds.indexOf(c.id) >= 0) {
                return;
            }

            pageData.children.push(c);
            c.selected = false;
        });

        (pageHeaderData.props as ComponentContainerProps).enable = false;
        (pageFooterData.props as ComponentContainerProps).enable = false;

        return pageData;
    }

    /**
     * 移除页面数据中的模板数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static trimTemplate(pageData: PageData, template: PageData) {
        if (!pageData) throw errors.argumentNull("pageData");
        if (!template) throw errors.argumentNull("template");

        let templateControlIds = template.children
            .filter(o => o.id != PageHeader.id && o.id != PageBody.id && o.id != PageFooter.id)
            .map(o => o.id);
        pageData.children = pageData.children.filter(o => templateControlIds.indexOf(o.id) < 0);
    }
}


type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type BodyComponentData = Omit<ComponentData, "props"> & { props: PageBodyProps };
type HeaderComponentData = Omit<ComponentData, "props"> & { props: PageHeaderProps };
type FooterComponentData = Omit<ComponentData, "props"> & { props: PageFooterProps };
