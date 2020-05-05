// import { LocalService } from "./local-service";
// import { errorHandle } from "maishu-chitu-admin/static";
// import {} from ""

// export let services = 

import { LocalService } from "./local-service";
import { Service } from "maishu-chitu";

export function createServices(handleError?: (error: Error, sender: Service) => void) {
    let r = {
        local: new LocalService((error, sender) => handleError(error, sender))
    };
    return r;
}