import { AtForm } from "taro-ui";
import Taro, { Component } from "@tarojs/taro";
import { InputControl } from "./input-control";
import { DataSource } from "maishu-wuzhui";


export interface DataFormContextValue<T> {
    dataItem: T,
    form: DataForm<any>
}

let defaultValue: DataFormContextValue<any> = {
    dataItem: {}, form: null as any as DataForm<any>
};
export let DataFormContext = Taro.createContext(defaultValue);


interface DataFormProps<T> {
    dataItem: T
    // submit?: (dataItem: T) => Promise<any>
    dataSource: DataSource<T>
}

export class DataForm<T> extends Component<DataFormProps<T>> {
    inputs: { [key: string]: InputControl } = {};

    constructor(props) {
        super(props);
    }

    async validate(): Promise<boolean> {
        let isValid: boolean = true;
        console.log(this.inputs);
        for (let key in this.inputs) {
            let r = await this.inputs[key].validate();
            if (r == false)
                isValid = false;
        }

        return isValid;
    }
    async submit() {
        console.log("submit")
        let isValid = await this.validate();
        if (isValid != true)
            return;

        if (!this.props.dataSource) {
            return Promise.reject(new Error("Props submit function is null."));
        }

        let id = this.props.dataItem["id"] || this.props.dataItem["Id"];
        if (id)
            return this.props.dataSource.update(this.props.dataItem);
            
        return this.props.dataSource.insert(this.props.dataItem);

    }
    render() {
        return <AtForm>
            <DataFormContext.Provider value={{ dataItem: this.props.dataItem, form: this }}>
                {this.props.children}
            </DataFormContext.Provider>
        </AtForm>
    }
}

