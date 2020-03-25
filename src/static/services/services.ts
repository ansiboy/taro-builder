import { LocalService } from "./local-service";
import { errorHandle } from "maishu-chitu-admin/static";
export let services = {
    local: new LocalService((error, sender) => errorHandle(error))
}