import Taro, { Config, Component, useRouter } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtButton } from "taro-ui";
import { services } from "../../services/index";
import { AtInputProps } from "taro-ui/types/input";
import { DataForm, TextInput, rules, DataSwitch, RegionSelector } from "../../controls/data-form";
import { events } from "../../events";
import { dataSources } from "../../services/data-sources";

interface Props {

}

interface State {
    receiptInfo: ReceiptInfo
    errorInputs: Partial<{ [name in keyof ReceiptInfo]: boolean }>

    provinces: Region[]
    cities: Region[]
    counties: Region[]
    regions: Region[]

    currentRegion?: { province: Region, city: Region, county: Region }
}

export default class ReceiptEditPage extends Taro.Component<Props, State> {

    private inputs: { [name in keyof ReceiptInfo]: Component<AtInputProps> } = {} as any;
    private dataForm: DataForm<any>;

    config: Config = {
        navigationBarTitleText: "添加地址"
    }

    constructor(props) {
        super(props);

        this.state = {
            receiptInfo: {} as ReceiptInfo, errorInputs: {},
            provinces: [], cities: [], counties: [], regions: []
        };

        if (this.$router.params.id) {
            Taro.setNavigationBarTitle({ title: "编辑地址" });
            services.shopping.receiptInfo(this.$router.params.id).then(r => {
                this.setState({ receiptInfo: r });
            })
        }
    }

    validateInput(): boolean {
        let errorInputs: State["errorInputs"] = {};
        for (let key in this.inputs) {
            let props = this.inputs[key].props || {};
            if (props.required && !props.value) {
                errorInputs[key] = true;
            }
        }

        this.setState({ errorInputs });

        let keys = Object.getOwnPropertyNames(errorInputs);
        return keys.length == 0;
    }

    onPickerChanged(provinceIndex: number, cityIndex: number, countyIndex: number) {
        let { provinces, cities, counties } = this.state;
        let province = provinces[provinceIndex];
        let city = cities[cityIndex];
        let county = counties[countyIndex];
        this.setState({ currentRegion: { province, city, county } });
    }

    componentDidMount() {
        services.shopping.regions().then(items => {
            let provinces = items.filter(o => o.ParentId == null);
            console.assert(provinces[0] != null);

            let cities = items.filter(o => o.ParentId == provinces[0].Id);
            console.assert(cities[0] != null);

            let counties = items.filter(o => o.ParentId == cities[0].Id);

            this.setState({ provinces, cities, counties, regions: items });
        })
    }

    render() {

        let { receiptInfo } = this.state;
        return <View className="page">
            <DataForm dataItem={receiptInfo} dataSource={dataSources.receiptInfo}
                ref={e => this.dataForm = this.dataForm || e}>
                <TextInput<ReceiptInfo> dataField="Name" title="地址名称" placeholder="区分收货地址，例如：家、公司"
                    validateRules={[rules.required()]} />
                <TextInput<ReceiptInfo> dataField="Consignee" title="收货人" placeholder="请输入收货人"
                    validateRules={[rules.required()]} />
                <TextInput<ReceiptInfo> dataField="Mobile" title="手机号码" placeholder="请输入收货人手机号码"
                    validateRules={[rules.required(), rules.mobile()]} />
                <RegionSelector<ReceiptInfo> dataField="RegionId" title="所在地区" placeholder="请选择地区"
                    validateRules={[rules.required()]} />
                <TextInput<ReceiptInfo> dataField="Address" title="详细地址" placeholder="请填写收货地址"
                    validateRules={[rules.required()]} />
                <TextInput<ReceiptInfo> dataField="PostalCode" title="邮编" placeholder="请输入邮编" />
                <TextInput<ReceiptInfo> dataField="Phone" title="固定电话" placeholder="请输入固定电话" />
                <DataSwitch<ReceiptInfo> dataField="IsDefault" title="设为默认" />
            </DataForm>
            <View className="footer">
                <AtForm className="container">
                    <AtButton type="primary" onClick={() => this.dataForm.submit().then(r => {
                        events.receiptInfoSave.fire({ item: r })
                        Taro.navigateBack()
                    })}>
                        保存
                </AtButton>
                </AtForm>
            </View>
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