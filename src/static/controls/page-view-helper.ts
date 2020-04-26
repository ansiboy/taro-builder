import { ComponentData, PageView, PageViewBody } from "taro-builder-core";
import { guid } from "maishu-toolkit";

export class PageViewHelper {
    static emptyPageData(): ComponentData {
        let pageViewId = guid();
        let bodyId = guid();
        let pageData: ComponentData = {
            id: pageViewId,
            type: PageView.typeName,
            children: [{
                id: bodyId,
                type: PageViewBody.typeName,
                props: {},
                children: []
            }],
            props: {}
        };
        return pageData;
    }
    static findBody(pageData: ComponentData): ComponentData {
        let body = pageData.children.filter(o => typeof o != "string" && o.type == PageViewBody.typeName)[0] as ComponentData;
        return body;
    }
}