import { Service } from "maishu-chitu-service";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { PageRecord } from "../../../entities";
import { pathConcat } from "maishu-toolkit";
import { ComponentInfo } from "../../model";

Service.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

export class LocalService extends Service {

    url(path: string): string {
        // let u = this.localServiceUrl(path);
        // return u;
        return path;
    }

    pageRecordList(args: DataSourceSelectArguments) {
        let url = this.url("page-data/list");
        return this.getByJson<DataSourceSelectResult<PageRecord>>(url, { args });
    }
    removePageRecord(id: string) {
        let url = this.url("page-data/remove");
        return this.postByJson(url, { id });
    }
    async addPageRecord(item: Partial<PageRecord>) {
        let r = await this.postByJson(this.url("page-data/add"), { item });
        Object.assign(item, r);
        return item;
    }
    async updatePageRecord(item: Partial<PageRecord>) {
        let r = await this.postByJson(this.url("page-data/update"), { item });
        Object.assign(item, r);
        return item;
    }
    async getPageRecord(id: string): Promise<PageRecord> {
        let r = await this.getByJson<PageRecord>(this.url("page-data/item"), { id });
        return r;
    }
    async getPageDataByName(name: string): Promise<PageRecord> {
        let r = await this.getByJson<PageRecord>(this.url("page-data/item"), { name });
        debugger;
        return r;
    }

    async clientFiles(): Promise<string[]> {
        let { protocol, host } = location;
        let r = await this.get<string[]>(this.url(`clientFiles`));
        return r;
    }

    async componentInfos() {
        let config = await this.componentStationConfig();
        return config.components;
    }

    async componentGroups() {
        let config = await this.componentStationConfig();
        return config.groups;
    }

    private _componentStationConfig: ComponentStationConfig;
    async componentStationConfig(): Promise<ComponentStationConfig> {
        let componentStationPath = "design";
        if (this._componentStationConfig != null)
            return this._componentStationConfig;

        let url = this.url(`${componentStationPath}/config.json`);
        this._componentStationConfig = await this.get<ComponentStationConfig>(url);

        let _componentInfos = this._componentStationConfig.components;
        _componentInfos.forEach(o => {
            if (o.path != null)
                o.path = pathConcat(componentStationPath, o.path);

            if (o.editor != null)
                o.editor = pathConcat(componentStationPath, o.editor);

            if (o.design != null)
                o.design = pathConcat(componentStationPath, o.design);

            if (o.layout != null)
                o.layout = pathConcat(componentStationPath, o.layout);

        })

        return this._componentStationConfig;
    }

    async templateList(): Promise<PageRecord[]> {
        let url = this.url("page-data/template-list");
        let r = this.getByJson<PageRecord[]>(url);
        return r;
    }
}

interface ComponentStationConfig {
    components: ComponentInfo[],
    groups: { name: string, id: string }[]
}