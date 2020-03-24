import Taro from "@tarojs/taro";
import { Empty } from "./empty";

interface LoadingProps<T> {
    loadData: () => Promise<T>
}

interface LoadingState<T> {
    data?: T
    status: "loading" | "success" | "fail"
}

export let LoadingContext = Taro.createContext<{ data: any }>({ data: null });

export class Loading<T> extends Taro.Component<LoadingProps<T>, LoadingState<T>> {
    constructor(props) {
        super(props);
        this.state = { status: "loading" };
    }
    loadData() {
        this.setState({ status: "loading" })
        this.props.loadData().then(r => {
            this.setState({ data: r, status: "success" })
        }).catch(err => {
            this.setState({ status: "fail" });
        })
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        let { status, data } = this.state;
        if (status == "fail") {
            return <Empty icon="close" text="数据加载失败, 点击重新加载"
                onClick={() => this.loadData()} />
        }
        if (status == "loading") {
            return <Empty icon="loading" text="数据正在加载中..." />
        }
        console.log(data);
        return <LoadingContext.Provider value={{ data }}>
            {this.props.children}
        </LoadingContext.Provider>
    }
}