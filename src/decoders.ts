import { createParameterDecorator } from "maishu-node-mvc";

export let currentAppId = createParameterDecorator(async (context, routeData) => {
    let name = "application-id";
    let appId = context.req.headers[name] || routeData[name];
    return appId;
});