import { DataSource, DataSourceSelectResult, DataSourceArguments, DataSourceSelectArguments } from "maishu-wuzhui";
import { Service } from "maishu-chitu-admin/static";
import { PageRecord as WebPage } from "../entities";

class LocalService extends Service {
    webPageList(args: DataSourceSelectArguments) {
        // DataHelper
        return this.getByJson<DataSourceSelectResult<WebPage>>("page-data/list", { args });
    }
    removeWebPage(id: string) {
        return this.postByJson("page-data/remove", { id });
    }
}

let localService = new LocalService();



let pageDataDataSource = new DataSource<WebPage>({
    primaryKeys: ["id"],
    select: async (args) => {
        return localService.webPageList(args);
    },
    delete: async (item) => {
        return localService.removeWebPage(item.id);
    }
})

export let dataSources = {
    webPage: pageDataDataSource
}