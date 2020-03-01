
import { Carousel } from "./carousel/component";
import { HTMLView } from "./html-view/component";
import { PageView } from "./page-view";
import { TaroComponentFactory, taroComponents } from "taro-builder-core";

let c = Object.assign({
    PageView, Carousel, HTMLView
}, taroComponents);

export let parser = new TaroComponentFactory(c);