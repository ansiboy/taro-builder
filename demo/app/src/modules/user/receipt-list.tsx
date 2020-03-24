import Taro, { Config, } from '@tarojs/taro';
import { View } from '@tarojs/components';

import "./receipt-list.less";
import { AtForm, AtButton } from 'taro-ui';

import { events } from '../../events';
// import { ShoppingLoading, ShoppingLoadingContext } from '../../controls/loading';
import { DataList } from '../../controls/data-list';
import { AtListItemProps } from 'taro-ui/types/list';
import { dataSources } from '../../services/data-sources';
import { tempDataItems } from '../../services/temp-data-items';
import { Loading } from '../../controls/loading';
import { ReceiptListItems } from './receipt-list-items';

interface Props {

}

interface State {
    // items: ReceiptInfo[] | null,
    selectedIds: string[],
}

const dataListId = "0bf48482-5d13-fa63-36fd-8f507a45b225";
console.log(dataListId);
export default class ReceiptListPage extends Taro.Component<Props, State> {

    // static contextType = ShoppingLoadingContext;

    config: Config = {
        navigationBarTitleText: '收货地址'
    }

    // loading: ShoppingLoading<ReceiptInfo[]>;
    dataList: DataList<ReceiptInfo>;

    constructor(props) {
        super(props);

        this.state = { selectedIds: [] };
        events.receiptInfoSave.add(() => {
            // let items = this.loading.state.data || [];
            // let existsItem = items.filter(o => o.Id == args.item.Id)[0];
            // debugger
            // if (existsItem) {
            //     Object.assign(existsItem, args.item);
            // }
            // else {
            //     items.push(args.item);
            // }
            // this.loading.setState({ data: items });
        })
    }

    private detail(item: ReceiptInfo) {
        var result = `${item.ProvinceName} ${item.CityName} ${item.CountyName} ${item.Address}`;

        result = result + ` 联系人: ${item.Consignee}`;
        if (item.Phone != null || item.Mobile != null)
            result = result + ` 电话：${item.Phone || ''} ${item.Mobile || ''}`;

        return result;
    }

    isSelected(id: string) {
        let selectedIds = this.state.selectedIds;
        return selectedIds.indexOf(id) >= 0;
    }

    outputItem() {
        // return <AtListItem key={dataItem.Id} iconInfo={{ value: "check-circle", size: 18 }}
        //     title={dataItem.Name} note={this.detail(dataItem)} />
    }
    componentDidMount() {
        // services.shopping.receiptInfos().then(r => {
        //     this.setState({ items: r });
        // })
        // this.dataList.init(() => services.shopping.receiptInfos(), this.renderItem);
    }

    render() {
        let { selectedIds } = this.state;
        return <View>
            <Loading loadData={() => dataSources.receiptInfo.select()}>
                <ReceiptListItems />
            </Loading>
            {/* <DataList<ReceiptInfo> uid={dataListId} ref={e => this.dataList = this.dataList || e} dataSource={dataSources.receiptInfo}
                itemProps={(dataItem) => {
                    let isSelected = selectedIds.indexOf(dataItem.Id) >= 0;
                    let props = {
                        key: dataItem.Id, title: dataItem.Name, arrow: "right",
                        iconInfo: { size: 18, value: "check-circle", customStyle: { color: isSelected ? "red" : "" } },
                        note: this.detail(dataItem),
                        onClick: (e) => {
                            if (e.currentTarget["x"] <= 50) {
                                if (isSelected) {
                                    selectedIds = selectedIds.filter(o => o != dataItem.Id);
                                }
                                else {
                                    selectedIds.push(dataItem.Id);
                                }

                                this.setState({ selectedIds });
                                this.dataList.setState({})
                                return;
                            }
                            Taro.navigateTo({ url: `./receipt-edit?id=${dataItem.Id}` })
                        }
                    } as AtListItemProps;
                    return props;
                }}
            >
                <View>{(tempDataItems[dataListId] as ReceiptInfo).Address + "ABC"}</View>
            </DataList> */}

            <View className="footer">
                <AtForm className="container">
                    <AtButton type="primary"
                        onClick={() => Taro.navigateTo({ url: "./receipt-edit" })}>添加新的收货地址</AtButton>
                </AtForm>
            </View>
        </View>
    }
}
