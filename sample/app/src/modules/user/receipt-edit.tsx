import Taro, { Config } from "@tarojs/taro";
import { View, Picker, Text, Label } from "@tarojs/components";
import { AtForm, AtButton, AtInput, AtSwitch } from "taro-ui";
import { Service } from "../../services/service";

export default class ReceiptEditPage extends Taro.Component {

    config: Config = {
        navigationBarTitleText: "添加地址"
    }

    constructor(props) {
        super(props);

        // http://service1.alinq.cn/UserShop/Coupon/GetStoreCouponsCount

        let s = new Service();
        s.get("http://service1.alinq.cn/UserShop/Coupon/GetStoreCouponsCount").then(r => {
            console.log(r);
        })
    }

    render() {
        return <View className="page">
            <AtForm>
                <AtInput name="Name" title="地址名称" placeholder="区分收货地址，例如：家、公司"
                    onChange={() => { }} required />
                <AtInput name="Consignee" title="收货人" onChange={() => { }} required />
                <AtInput name="Mobile" title="手机号码" onChange={() => { }} required />
                <Picker mode="multiSelector" value={[]} range={[]}
                    onChange={() => { }}>
                    <View className="at-input">
                        <View className="at-input__container">
                            <Label className="at-input__title at-input__title--required">所在地区</Label>
                            <Text className="placeholder">请选择地区</Text>
                        </View>
                    </View>
                </Picker>
                <AtInput name="Address" title="详细地址" placeholder="请填写收货地址" required
                    onChange={() => { }} />
                <AtInput name="PostalCode" title="邮编"
                    onChange={() => { }} />
                <AtInput name="Phone" title="固定电话"
                    onChange={() => { }} />
                <AtSwitch title="设为默认" />
            </AtForm>
            <AtForm className="footer container">
                <AtButton type="primary">
                    保存
                </AtButton>
            </AtForm>
        </View>
    }
}

// import Taro, { Component } from '@tarojs/taro'
// import { View, Text, Picker } from '@tarojs/components'
// export default class PagePicker extends Component {
//     state = {
//         selector: [['广东', '湖南',], ["湛江", "茂名",], ["茂南区", "水东",]],
//         selectorChecked: '美国',
//         timeSel: '12:01',
//         dateSel: '2018-04-22'
//     }
//     onChange = e => {
//         this.setState({
//             selectorChecked: this.state.selector[e.detail.value]
//         })
//     }
//     onTimeChange = e => {
//         this.setState({
//             timeSel: e.detail.value
//         })
//     }
//     onDateChange = e => {
//         this.setState({
//             dateSel: e.detail.value
//         })
//     }
//     render() {
//         return (
//             <View className='container'>
//                 <View className='page-body'>
//                     <View className='page-section'>
//                         <Text>地区选择器</Text>
//                         <View>
//                             <Picker mode='multiSelector' range={this.state.selector} onChange={this.onChange}>
//                                 <View className='picker'>
//                                     当前选择：{this.state.selectorChecked}
//                                 </View>
//                             </Picker>
//                         </View>
//                     </View>
//                     <View className='page-section'>
//                         <Text>时间选择器</Text>
//                         <View>
//                             <Picker mode='time' onChange={this.onTimeChange}>
//                                 <View className='picker'>
//                                     当前选择：{this.state.timeSel}
//                                 </View>
//                             </Picker>
//                         </View>
//                     </View>
//                     <View className='page-section'>
//                         <Text>日期选择器</Text>
//                         <View>
//                             <Picker mode='date' onChange={this.onDateChange}>
//                                 <View className='picker'>
//                                     当前选择：{this.state.dateSel}
//                                 </View>
//                             </Picker>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }