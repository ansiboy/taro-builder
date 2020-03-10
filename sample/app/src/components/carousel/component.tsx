import { component } from "jueying-core/decorators";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import React from "react";

export class CarouselProps {
    autoplay: boolean
}

@component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })
export class Carousel extends React.Component<CarouselProps> {
    render() {
        return <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
                <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
                <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
                <View className='demo-text-3'>3</View>
            </SwiperItem>
        </Swiper>
    }
}


