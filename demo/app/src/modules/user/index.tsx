import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtIcon, AtList, AtListItem, AtAvatar } from "taro-ui";
import "./index.less";
import { pages } from '../../config';

const IconSize = 52;

export default class IndexPage extends Taro.Component {

    config: Config = {
        navigationBarTitleText: '用户中心',
        // navigationBarBackgroundColor: navigationBarBackgroundColor,
        // navigationBarTextStyle: "white"
    }

    constructor(props) {
        super(props)
    }

    render() {
        return <View >
            <View className="user-info">
                <View className="at-row at-row__justify--center">
                    <AtAvatar className="header-image" size="large" circle image=""></AtAvatar>
                </View>
                <View className="text">未填写</View>
                <View className="blance">
                    <Text>余额</Text>
                    <Text className="price">￥0.00</Text>
                </View>
            </View>
            <View className="at-row">
                <View className="at-col"
                    onClick={() => Taro.navigateTo({ url: `${pages.orderList}?tab=all`, })} >
                    <AtIcon className="icon" value="bullet-list" size={IconSize} />
                    <View className="text">全部订单</View>
                </View>
                <View className="at-col"
                    onClick={() => Taro.navigateTo({ url: `${pages.orderList}?tab=toPaid`, })} >
                    <AtIcon className="icon" value="credit-card" size={IconSize} />
                    <View className="text">待付款</View>
                </View>
                <View className="at-col"
                    onClick={() => Taro.navigateTo({ url: `${pages.orderList}?tab=toReceive`, })}>
                    <AtIcon className="icon" value="folder" size={IconSize} />
                    <View className="text">待收货</View>
                </View>
                <View className="at-col"
                    onClick={() => Taro.navigateTo({ url: `${pages.orderList}?tab=toEvaluate`, })}>
                    <AtIcon className="icon" value="star" size={IconSize} />
                    <View className="text">待评价</View>
                </View>
            </View>
            <View className="list-group">
                <AtList>
                    <AtListItem className="list-group-item" title='收货地址' arrow='right' onClick={() => {
                        Taro.navigateTo({ url: pages.receiptList })
                    }} />
                    <AtListItem className="list-group-item" title='我的收藏' arrow='right'
                        onClick={() => Taro.navigateTo({ url: "./favor" })} />
                    <AtListItem className="list-group-item" title='我的优惠券' arrow='right' hasBorder={false}
                        onClick={() => Taro.navigateTo({ url: "./coupon" })} />
                </AtList>
            </View>

            <View className="list-group">
                <AtList>
                    <AtListItem className="list-group-item" title='销售员中心' arrow='right' hasBorder={false}
                        onClick={() => Taro.navigateTo({ url: pages.salesCenter })} />
                </AtList>
            </View>

            <View className="list-group">
                <AtList>
                    <AtListItem className="list-group-item" title='账号安全' arrow='right'
                        onClick={() => Taro.navigateTo({ url: pages.accountSecurity })} />
                    <AtListItem className="list-group-item" title='退出' arrow='right' hasBorder={false} />
                </AtList>
            </View>
        </View>
    }
}