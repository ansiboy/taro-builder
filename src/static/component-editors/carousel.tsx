import { Component, TextInput } from "maishu-jueying";
// import * as components from "components/carousel";
// import { Props } from "components/carousel";

// let Carousel: keyof typeof components = "Carousel";
// let autoplay: keyof Props = "autoplay";
Component.setPropEditor({
    displayName: "自动播放",
    componentType: "Carousel",
    propName: "autoplay",
    editorType: TextInput
})