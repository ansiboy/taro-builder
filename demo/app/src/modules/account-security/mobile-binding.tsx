import Taro, { Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";

export default class MobileBindingPage extends Taro.Component {

    config: Config = {
        navigationBarTitleText: "手机绑定"
    }

    render() {
        return <View className="page">
            <AtForm className="container">
                <AtInput name="mobile" title="手机号码" placeholder="请输入手机号码"
                    onChange={e => { }} />
                <AtInput name="mobile" title="验证码" placeholder="请输入验证码"
                    onChange={e => { }} >
                    <Text>发送验证码</Text>
                </AtInput>
                <AtButton type="primary">立即设置</AtButton>
            </AtForm>
        </View>
    }

}