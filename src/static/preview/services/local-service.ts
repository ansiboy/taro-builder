import { Service } from "maishu-chitu-service";
import { PageRecord } from "../../../entities";
import websiteConfig from "website-config";
import { pathConcat } from "maishu-toolkit";

export class LocalService extends Service {
    async getPageRecord(id: string): Promise<PageRecord> {
        let r = await this.getByJson<PageRecord>("/page-data/item", { id });
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
                    o.path = pathConcat(componentStationPath, o.path);

                if (o.editor != null)
                    o.editor = pathConcat(componentStationPath, o.editor);

                if (o.design != null)
                    o.design = pathConcat(componentStationPath, o.design);

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
            let url = `${componentStationPath}/config.json`;
            this._componentStationConfig = await this.get<ComponentStationConfig>(url);
        }
        return this._componentStationConfig;
    }
}

interface ComponentStationConfig {
    components: ComponentInfo[],
    groups: { name: string, id: string }[]
}