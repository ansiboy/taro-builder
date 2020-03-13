import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Empty } from "../../controls/empty";

export default class UserFavorPage extends Component {

    config: Config = {
        navigationBarTitleText: '我的收藏'
    }

    render() {
        return <View className="page">
            <Empty icon="heart" text="你还没有添加收藏哦" />
        </View>
    }
}