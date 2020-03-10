
import { Carousel } from "./carousel/component";
import { HTMLView } from "./html-view/component";
import { TaroComponentFactory, taroComponents } from "taro-builder-core";
import { PageView } from "./page-view";

let c = Object.assign({
    PageView, Carousel, HTMLView,
});

export let factory = new TaroComponentFactory(c);