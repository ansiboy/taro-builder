import Taro, { Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import { pages } from "../../config";

export default class AccountSecurityPage extends Taro.Component {

    config: Config = {
        navigationBarTitleText: "账户安全"
    }

    render() {
        return <View>
            <AtList className="list-group">
                <AtListItem className="list-group-item" title="登录密码" arrow="right"
                    note="设置登录密码，可以使用手机和密码登录"
                    onClick={() => Taro.navigateTo({ url: pages.loginPassword })} />
                <AtListItem className="list-group-item" title="手机绑定" arrow="right"
                    note="绑定手机后，你可以通过手机找回密码"
                    onClick={() => Taro.navigateTo({ url: pages.mobileBindding })} />
                <AtListItem className="list-group-item" title="支付密码" arrow="right"
                    note="设置支付密码后，使用余额支付需要密码"
                    onClick={() => Taro.navigateTo({ url: pages.payPassword })} />
            </AtList>
        </View>
    }
}