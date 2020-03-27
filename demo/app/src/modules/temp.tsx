import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Carousel, SingleColumnProducts } from "../components/index";

export default class Temp extends Taro.Component {
    render() {
        return <View>
            <SingleColumnProducts />
        </View>
    }
}