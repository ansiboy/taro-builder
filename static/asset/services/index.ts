import { createServices } from "./services";
import { errorHandle, Service } from "maishu-chitu-admin/static";

export let services = createServices((error: Error, sender: Service) => errorHandle(error))