import Taro, { Component } from "@tarojs/taro";
import { Picker, View } from "@tarojs/components";
import { guid } from "maishu-toolkit";
import { DataFormContext, DataFormContextValue } from "./data-form";
import { InputControl } from "./input-control";
import { services } from "../../services";
import { AtInput } from "taro-ui";
import { Rule } from "./rules";
import { defaultErrors } from "./default-errors";

interface Props<T> {
    title: string
    placeholder?: string
    dataField: Extract<{ [K in keyof T]: T[K] extends string ? K : never }[keyof T], string>
    validateRules?: Rule[]
}

type CurrentRegion = { province: Region, city: Region, county: Region };
interface State {
    provinces: Region[]
    cities: Region[]
    counties: Region[]
    regions: Region[]

    // currentRegion?: { province: Region, city: Region, county: Region }
    errorMessage?: string
}

export class RegionSelector<T> extends Taro.Component<Props<T>, State> implements InputControl {

    private id = guid();
    static contextType = DataFormContext;
    picker: Component;

    constructor(props) {
        super(props)

        this.state = { provinces: [], cities: [], counties: [], regions: [] }
    }

    async validate(): Promise<boolean> {

        const context = this.context as DataFormContextValue<T>;

        let rules = this.props.validateRules || [];
        let errorMessage: string | undefined;
        let value = context.dataItem[this.props.dataField];
        for (let i = 0; i < rules.length; i++) {
            let r = await rules[i].validate(value);
            if (r == false) {
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

    onPickerChanged(countyIndex: number) {
        let { counties } = this.state;
        // let province = provinces[provinceIndex];
        // let city = cities[cityIndex];
        let county = counties[countyIndex];
        let context = this.context as DataFormContextValue<T>;
        context.dataItem[this.props.dataField] = county.Id as any;
        this.setState({});
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

    getCurrentRegion(regions: Region[], countyId: string): CurrentRegion | null {
        if (countyId == null)
            return null;

        let county = regions.filter(o => o.Id == countyId)[0];
        if (county == null)
            return null;

        let city = regions.filter(o => o.Id == county.ParentId)[0];
        console.assert(city != null);

        let province = regions.filter(o => o.Id == city.ParentId)[0];
        console.assert(province != null);

        let currentRegion = { province, city, county };
        return currentRegion;
    }

    render() {
        let { provinces, cities, counties, regions } = this.state;

        let validateRules = this.props.validateRules || [];
        let hasRequired = validateRules.filter(o => o.type == "required").length > 0;
        let errorMessage = this.state.errorMessage;

        let context = this.context as DataFormContextValue<T>;
        let currentRegion: CurrentRegion | null = null;
        if (context.form != null && context.form.inputs[this.id] == null) {
            context.form.inputs[this.id] = this;
        }
        if (context.dataItem) {
            let countyId = context.dataItem[this.props.dataField] as any as string;
            currentRegion = this.getCurrentRegion(regions, countyId);
        }

        return <View>
            <Picker mode="multiSelector" value={[]} range={[provinces, cities, counties]} rangeKey="Name"
                ref={e => this.picker = this.picker || e}
                onColumnChange={e => {
                    let currentTarget = e.currentTarget as { column: number, value: number } & typeof e.currentTarget;
                    let { column, value } = currentTarget;

                    switch (column) {
                        case 0:
                            let province = provinces[value];
                            cities = regions.filter(o => o.ParentId == province.Id);
                            counties = regions.filter(o => o.ParentId == cities[0].Id);
                            this.setState({ cities, counties });
                            break;
                        case 1:
                            let city = cities[value];
                            counties = regions.filter(o => o.ParentId == city.Id);
                            this.setState({ counties });
                            break;
                    }
                }}
                onChange={(e) => {
                    let value: [number, number, number] = (e.currentTarget as any).value;
                    this.onPickerChanged(value[2] || 0);
                }}>
                <AtInput title={this.props.title} placeholder={this.props.placeholder} name={this.props.dataField}
                    required={hasRequired} error={errorMessage != undefined}
                    value={currentRegion ? `${currentRegion.province.Name} ${currentRegion.city.Name} ${currentRegion.county.Name}` : ""}
                    onErrorClick={() => {
                        Taro.showToast({ title: errorMessage || "", icon: "none" });
                    }}
                    onChange={() => {
                        if (errorMessage)
                            this.validate();
                    }} />
            </Picker>

        </View>
    }
}