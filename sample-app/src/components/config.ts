import { ComponentInfo } from "taro-builder-core";

type Config = {
    components: (Partial<ComponentInfo> & { path: string })[]
}

let config: Config = {
    components: [
        { name: "Carousel", displayName: "", path: "components/carousel/component" },
        { name: "HTMLView", path: "components/html-view/component" }
    ]
}

export default config;