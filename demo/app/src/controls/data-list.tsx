import Taro from "@tarojs/taro";
import { Empty, EmptyProps } from "./empty";
import { services, ShoppingService } from "../services";
import { AtList, AtListItem, AtDivider } from "taro-ui";
import { Component, ComponentClass } from "react";
import { AtListItemProps } from "taro-ui/types/list";
import { DataSource } from "maishu-toolkit";
import { View } from "@tarojs/components";
import { guid } from "maishu-toolkit";
import { tempDataItems } from "../services/temp-data-items";



interface LoadingProps<T> {
    uid: string
    dataSource: DataSource<T>
    itemProps: (dataItem: T) => AtListItemProps
    // method: { [K in keyof ShoppingService]: ShoppingService[K] extends Func<T> ? K : never }[keyof ShoppingService];//keyof ShoppingService;//{ [K in keyof ShoppingService]: ShoppingService[K] extends Promise<any> ? K : never }
}

interface State<T> {
    items: T[],
    status?: "loading" | "success" | "fail"
}

type LoadData<T> = () => Promise<T[]>;
type RenderItem<T> = (dataItem: T, listItem: Component<AtListItemProps, any, any>) => void;

export class DataList<T> extends Taro.Component<LoadingProps<T>, State<T>> {
    private loadData: LoadData<T>;
    private outputItem: RenderItem<T>;

    private static dataItems: { [key: string]: any } = {};

    constructor(props) {
        super(props);
        this.state = { items: [] };
        console.log(`gg${this.props.uid}`)

        console.log(props)
    }

    private onChanged(data: Partial<T>) {
        let pk = this.props.dataSource.primaryKeys[0];
        let id = data[pk];
        console.assert(id != null);
        let items = this.state.items;
        let item = items.filter(o => (o[pk]) == id)[0];
        if (item == null) {
            items.push(data as T);
        }
        else {
            Object.assign(item, data);
        }
        this.setState({ items });
        // let dataItem = items.filter(o=>o)
    }

    static dataItem<T>(dataListId: string): T {
        return DataList.dataItems[dataListId];
    }

    createItem(item: T, index: number, items: T[]) {
        let { dataSource, itemProps } = this.props;
        let props = itemProps(item);
        let pk = dataSource.primaryKeys[0];
        let key = item[pk];
        console.log(key);
        return <View key={`${key}`}>
            <AtListItem key={`${key}`} {...props} hasBorder={false} />
            {index < items.length - 1 ? <AtDivider height={10} /> : null}
        </View>;
    }
    componentDidMount() {
        this.props.dataSource.updated.add((sender, r) => this.onChanged(r));
        this.props.dataSource.inserted.add((sender, r) => this.onChanged(r));
        this.props.dataSource.select().then(r => {
            this.setState({ items: r.dataItems, status: "success" });
        })
    }
    render() {
        let { items, status } = this.state;
        if (!status)
            return null;

        switch (status) {
            case "fail": {
                return <Empty icon="close" text="数据加载失败, 点击重新加载"
                    onClick={() => this.loadData()} />
            }
            case "success": {
                return <AtList hasBorder={false}>
                    {items.map((o, index) => {
                        return this.createItem(o, index, items);
                    })}
                </AtList>
            }
        }
        return <Empty icon="loading" text="数据正在加载中..." />
    }
}