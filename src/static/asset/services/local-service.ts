import { Service } from "maishu-chitu-admin/static";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { PageRecord } from "../../../entities";
import { ComponentInfo } from "taro-builder-core";

export class LocalService extends Service {

    private defaultApplicationId = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

    get applicationId(): string {
        if (!super.applicationId)
            return this.defaultApplicationId;

        return super.applicationId;
    }

    url(path: string): string {
        // let contexts = requirejs.exec("contexts");
        // let context: RequireContext = contexts[contextName];
        // if (context != null && context.config != null && context.config.baseUrl != null) {
        //     return `${context.config.baseUrl}${path}`;
        // }
        // return `${path}`;
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
        let url = this.url("user/componentInfos");
        if (this._componentInfos == null) {
            this._componentInfos = await this.get<ComponentInfo[]>(url);

            this._componentInfos.forEach(o => {
                if (o.path != null && o.path.endsWith(".js")) {
                    o.path = o.path.substr(0, o.path.length - ".js".length);
                }
            })
        }
        return this._componentInfos;
    }
}