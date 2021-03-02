import { DataSource } from "maishu-toolkit";
import { PageRecord } from "../../entities";
import { LocalService } from "../services/local-service";

let localService = new LocalService();
let pageDataDataSource = new DataSource<PageRecord>({
    primaryKeys: ["id"],
    select: async (args) => {
        return localService.pageRecordList(args);
    },
    delete: async (item) => {
        return localService.removePageRecord(item.id);
    },
    insert: async (item) => {
        return localService.addPageRecord(item);
    },
    update: async (item) => {
        return localService.updatePageRecord(item);
    }
})

export let dataSources = {
    pageRecords: pageDataDataSource
}