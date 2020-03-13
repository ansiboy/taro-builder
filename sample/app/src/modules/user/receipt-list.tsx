import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

import "./receipt-list.less";
import { Empty } from '../../controls/empty';
import { AtForm, AtButton } from 'taro-ui';

export default class ReceiptListPage extends Taro.Component {

    config: Config = {
        navigationBarTitleText: '收货地址'
    }

    render() {
        return <View>
            {/* <View className="empty">
                <AtIcon className="icon" value="mail" size={150} />
                <View className="text">
                    暂无收货地址
                </View>
            </View> */}
            <Empty icon="mail" text="暂无收货地址" />
            <View className="footer">
                <AtForm className="container">
                    <AtButton type="primary">添加新的收货地址</AtButton>
                </AtForm>
            </View>
        </View>
    }
}