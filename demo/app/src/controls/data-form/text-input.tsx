import Taro from "@tarojs/taro";
import { AtInput } from "taro-ui";
import { DataFormContext, DataFormContextValue } from "./data-form";
// import { Rule, rules } from "./rules";
import { View } from "@tarojs/components";
import { Rule } from "./rules";
import { guid } from "maishu-toolkit";
import { InputControl } from "./input-control";
import { defaultErrors } from "./default-errors";
// import { errors } from "maishu-chitu-service/out/errors";

interface TextInputProps<T> {
    dataField: keyof T,
    value?: any,
    dataType?: "string" | "number" | "date",
    title: string,
    placeholder?: string,
    // required?: boolean,
    validateRules?: Rule[]
}

interface TextInputState {
    errorMessage?: string
}

export class TextInput<T> extends Taro.Component<TextInputProps<T>, TextInputState> implements InputControl {

    private id = guid();

    static contextType = DataFormContext;

    constructor(props) {
        super(props);

        this.state = {};
    }

    async validate(): Promise<boolean> {
        const context = this.context as DataFormContextValue<T>;

        let rules = this.props.validateRules || [];
        let errorMessage: string | undefined;
        let dataItem = context.dataItem || {} as T;
        let value = dataItem[this.props.dataField];
        for (let i = 0; i < rules.length; i++) {
            let r = await rules[i].validate(value);
            if (r == false) {
                // isValid = false;
                let ruleError = rules[i].error;
                if (typeof ruleError == "string")
                    errorMessage = ruleError;
                else if (typeof ruleError == "function")
                    errorMessage = ruleError();
                else {
                    let defaultError = defaultErrors[rules[i].type];
                    errorMessage = defaultError.replace("%s", this.props.dataField as string);
                }
            }
        }

        this.setState({ errorMessage });
        return errorMessage == null;
    }

    private formatValue(value: any): string | undefined {
        if (value == null)
            return "";

        if (typeof value == "string")
            return value;

        if (typeof value == "number")
            return value.toString();

        if (value instanceof Date)
            return value.toUTCString();

        return "Unknown data type";
    }

    private formatText(text: string, dataType: TextInputProps<any>["dataType"]) {
        console.assert(text != null);

        if (text == "")
            return null;

        dataType = dataType || "string";
        switch (dataType) {
            case "string":
                return text;
            case "number":
                return Number.parseFloat(text);
            case "date":
                return new Date(text);
        }
        throw new Error(`Unknown data type ${dataType}.`);
    }

    componentDidMount() {
    }

    render() {
        const context = this.context as DataFormContextValue<T>;
        if (context.form != null && context.form.inputs[this.id] == null) {
            context.form.inputs[this.id] = this;
        }
        let dataItem = (context.dataItem || {}) as T;
        let value = dataItem[this.props.dataField];
        let errorMessage = this.state.errorMessage;
        let validateRules = this.props.validateRules || [];
        let hasRequired = validateRules.filter(o => o.type == "required").length > 0;
        let isMobile = validateRules.filter(o => o.type == "mobile").length > 0;

        return <View>
            <AtInput name={this.props.dataField as string} title={this.props.title} value={this.formatValue(value)}
                placeholder={this.props.placeholder} error={errorMessage != undefined} type={isMobile ? "phone" : "text"}
                onErrorClick={() => {
                    Taro.showToast({ title: errorMessage || "", icon: "none" });
                }}
                required={hasRequired}
                onChange={e => {
                    dataItem[this.props.dataField] = this.formatText(e.toString(), this.props.dataType) as any;
                    if (errorMessage)
                        this.validate();
                }} />
        </View>
    }


}