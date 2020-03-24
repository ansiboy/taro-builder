import Taro, { Config } from "@tarojs/taro";
import { AtTabs, AtTabsPane } from "taro-ui";
import { Empty } from "../../controls/empty";

interface State {
    current: number,
}

type Tab = "all" | "toPaid" | "toReceive" | "toEvaluate";

export default class OrderListPage extends Taro.Component<{}, State> {

    config: Config = {
        navigationBarTitleText: "我的订单"
    }

    constructor(props) {
        super(props)
        this.state = { current: 0 };
    }
    switchTab(index: number) {
        this.setState({ current: index });
    }
    componentDidMount() {
        console.log(this.$router.params);
        let tab: Tab = this.$router.params["tab"] as Tab;
        // this.setState({ tab })
        let current: number;
        switch (tab) {
            case "toPaid":
                current = 1;
                break;
            case "toReceive":
                current = 2;
                break;
            case "toEvaluate":
                current = 3;
                break;
            default:
                current = 0;
                break;
        }

        this.setState({ current });
    }
    render() {
        let current = this.state.current;
        return <AtTabs current={current}
            tabList={[{ title: "全部" }, { title: "待付款" }, { title: "待收货" },
            { title: "待评价" }]}
            onClick={e => this.switchTab(e)}>
            <AtTabsPane current={current} index={0}>
                <Empty icon="money" text="暂无此类订单" />
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
                <Empty icon="money" text="暂无此类订单" />
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
                <Empty icon="money" text="暂无此类订单" />
            </AtTabsPane>
            <AtTabsPane current={current} index={3}>
                <Empty icon="money" text="暂无此类订单" />
            </AtTabsPane>
        </AtTabs>
    }
}