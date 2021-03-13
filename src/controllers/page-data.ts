import { controller, action, routeData, serverContext, ServerContext, JavaScriptProcessor, ContentResult } from "maishu-node-mvc";
import { Connection, DataHelper, SelectArguments } from "maishu-node-data";
import { PageRecord } from "../entities";
import { errors } from "../static/errors";
import { connection } from "../common";
import { guid } from "maishu-toolkit";
import * as fs from "fs";
import { currentAppId } from "../decoders";

@controller("page-data")
export class PageDataController {
    @action()
    async list(@connection conn: Connection, @routeData { args }: { args: SelectArguments }) {
        let r = await DataHelper.list(conn.getRepository(PageRecord), { selectArguments: args });
        return r;
    }

    @action()
    async add(@connection conn: Connection, @routeData { item }: { item: PageRecord }, @currentAppId appId) {
        if (item == null) throw errors.routeDataFieldNull("item");
        if (item.pageData == null) throw errors.argumentFieldNull("pageData", "item");
        if (item.name == null) throw errors.argumentFieldNull("name", "item");
        if (!appId) throw errors.argumentNull("appId");

        if (!item.id)
            item.id = guid();

        item.applicationId = appId;
        item.createDateTime = new Date(Date.now());
        await conn.getRepository(PageRecord).insert(item);
        let obj = { id: item.id, createDateTime: item.createDateTime } as Partial<PageRecord>;
        return obj;
    }

    @action()
    async update(@connection conn: Connection, @routeData { item }: { item: Partial<PageRecord> }, @currentAppId appId) {
        if (item == null) throw errors.routeDataFieldNull("item");
        if (item.pageData == null) throw errors.argumentFieldNull("pageData", "item");
        if (item.id == null) throw errors.argumentFieldNull("id", "item");
        if (!appId) throw errors.argumentNull("appId");

        let obj: Partial<PageRecord> = { pageData: item.pageData, templateId: item.templateId };
        if (item.name) {
            obj.name = item.name;
        }
        let r = await conn.getRepository(PageRecord).update({ id: item.id, applicationId: appId }, obj);
        if (r.affected == 0)
            throw new Error(`Update page record fail.`);

        return {};
    }

    @action()
    async remove(@connection conn: Connection, @routeData { id }: { id: string }) {
        if (!id) throw errors.argumentNull("id");
        await conn.getRepository(PageRecord).delete(id);
        return {};
    }

    @action()
    async item(@connection conn: Connection, @routeData { name, id }, @currentAppId appId) {
        if (name == null && id == null)
            throw new Error("One of name or id of route data field can not be null.")

        let repository = conn.getRepository(PageRecord);
        let item: PageRecord;
        if (name != null) {
            item = await repository.findOne({ name, applicationId: appId });
        }
        else {
            item = await repository.findOne(id);
        }

        return item;
    }

    /**
     * 通过 id 获取多个 PageRecord
     */
    @action()
    async items(@connection conn: Connection, @routeData { ids }: { ids: string[] }): Promise<PageRecord[]> {
        if (ids == null)
            throw errors.routeDataFieldNull("ids");

        if (ids.length == 0)
            return [];

        let repository = conn.getRepository(PageRecord);
        let r = await repository.findByIds(ids);
        return r;
    }

    @action("/website-config.js")
    readWebsiteConfigFile(@serverContext c: ServerContext) {
        let physicalPath = c.rootDirectory.findFile("website-config.js");
        console.assert(physicalPath != null);
        let b = fs.readFileSync(physicalPath, { encoding: "utf8" });
        b = JavaScriptProcessor.transformJS(b, {
            "presets": [
                ["@babel/preset-env", {
                    "targets": { chrome: 58 }
                }],
            ],
            plugins: [
                ["@babel/plugin-transform-modules-amd", { noInterop: true }]
            ]
        })
        return new ContentResult(b, { "Content-Type": `application/x-javascript; charset=utf8` });
    }

    @action("template-list")
    templateList(@connection conn: Connection) {
        if (!conn) throw errors.argumentNull("conn");

        let pageRecords = conn.getRepository(PageRecord).find({ select: ["id", "name"], where: { type: "template" } });
        return pageRecords;

    }

}