import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import { component } from "maishu-jueying-core";

@component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })
export class Carousel extends Taro.Component {
    render() {
        return <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical
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