import Taro from "@tarojs/taro";
import { AtSwitch } from "taro-ui";
import { DataFormContext, DataFormContextValue } from "./data-form";

interface Props<T> {
    title: string
    dataField: { [K in keyof T]: T[K] extends boolean ? K : never }[keyof T]
}

export class DataSwitch<T> extends Taro.Component<Props<T>> {

    static contextType = DataFormContext;

    render() {
        let context = this.context as DataFormContextValue<T>;
        let dataItem = context.dataItem || {} as T;
        let value = dataItem[this.props.dataField] as any as boolean;
        return <AtSwitch checked={value} title={this.props.title}
            onChange={value => {
                context.dataItem[this.props.dataField] = value as any;
            }} />;
    }
}