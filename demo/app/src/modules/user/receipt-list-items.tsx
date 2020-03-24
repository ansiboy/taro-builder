import Taro, { useContext } from '@tarojs/taro';
import { LoadingContext } from '../../controls/loading';
import { View, Text, Switch, } from '@tarojs/components';
import { DataSourceSelectResult } from 'maishu-wuzhui';
import { AtList, AtListItem, AtButton } from 'taro-ui';


export class ReceiptListItems extends Taro.Component {
    // static contextType = LoadingContext;
    checkboxOption: ({ value: string; label: string; desc: string; disabled?: undefined; } | { value: string; label: string; desc?: undefined; disabled?: undefined; } | { value: string; label: string; desc: string; disabled: boolean; })[];

    constructor(props) {
        super(props);

        this.checkboxOption = [{
            value: 'list1',
            label: 'iPhone X',
        }]

    }
    private detail(item: ReceiptInfo) {
        var result = `${item.ProvinceName} ${item.CityName} ${item.CountyName} ${item.Address}`;

        result = result + ` 联系人: ${item.Consignee}`;
        if (item.Phone != null || item.Mobile != null)
            result = result + ` 电话：${item.Phone || ''} ${item.Mobile || ''}`;

        return result;
    }

    render() {
        let context = useContext(LoadingContext);
        console.assert(context != null);
        let r = context.data as DataSourceSelectResult<ReceiptInfo>;
        if (r == null) {debugger;
            return null;
        }
        return <AtList>
            {r.dataItems.map((o, index) => <View key={o.Id}>
                <AtListItem key={o.Id} title={o.Name} arrow="right"
                    note={this.detail(o)}>
                </AtListItem>
                <View style={{ padding: "10px 10px 10px 10px" }}>
                    <View style={{ float: "left" }} >
                        <Switch /><Text style={{ paddingLeft: 6 }}>设为默认</Text>
                    </View>
                    <AtButton size="small" full={false} type={"secondary"} customStyle={{ width: "50px", float: "right" }}>
                        <Text>删除</Text>
                    </AtButton>
                    <AtButton size="small" full={false} type={"secondary"} customStyle={{ width: "50px", float: "right", marginRight: "8px" }}>
                        <Text>编辑</Text>
                    </AtButton>
                    <View style={{ clear: "both" }}>

                    </View>
                </View>
                {index < r.dataItems.length ? <View style={{ backgroundColor: "#eeeeee", width: "100%", height: "8px" }} ></View> : null}
            </View>)}
        </AtList>
    }
}
