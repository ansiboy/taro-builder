import { Service } from "maishu-chitu-admin/static";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { PageRecord } from "../../../entities";
import { ComponentInfo } from "taro-builder-core";
import { pathContact } from "maishu-toolkit";
import websiteConfig from "website-config";

export class LocalService extends Service {

    private defaultApplicationId = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

    get applicationId(): string {
        if (!super.applicationId)
            return this.defaultApplicationId;

        return super.applicationId;
    }

    url(path: string): string {
        let u = this.localServiceUrl(path);
        return u;
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
    async getPageData(id: string): Promise<PageRecord> {
        let r = await this.getByJson<PageRecord>(this.url("page-data/item"), { id });
        return r;
    }

    async clientFiles(): Promise<string[]> {
        let { protocol, host } = location;
        let r = await this.get<string[]>(this.url(`clientFiles`));
        return r;
    }

    private _componentInfos: ComponentInfo[];
    async componentInfos() {
        let componentStationPath = websiteConfig.componentStationPath;
        if (this._componentInfos == null) {
            let config = await this.componentStationConfig();
            this._componentInfos = config.components;

            this._componentInfos.forEach(o => {
                if (o.path != null)
                    o.path = pathContact(componentStationPath, o.path);

                if (o.editor != null)
                    o.editor = pathContact(componentStationPath, o.editor);

                if (o.design != null)
                    o.design = pathContact(componentStationPath, o.design);

            })
        }
        return this._componentInfos;
    }

    async componentGroups() {
        let config = await this.componentStationConfig();
        return config.groups;
    }

    private _componentStationConfig: ComponentStationConfig;
    async componentStationConfig(): Promise<ComponentStationConfig> {
        let componentStationPath = "design";
        if (this._componentStationConfig == null) {
            let url = this.url(`${componentStationPath}/config.json`);
            this._componentStationConfig = await this.get<ComponentStationConfig>(url);
        }
        return this._componentStationConfig;
    }
}

interface ComponentStationConfig {
    components: ComponentInfo[],
    groups: { name: string, id: string }[]
}