import Taro from "@tarojs/taro";
import { component } from "maishu-jueying-core";
import { Loading } from "../controls/loading";
import { services } from "../services/index";

export interface Props {
    /** 商品来源 */
    productSourceType: 'category' | 'custom' | 'all',
    /** 图片大小 */
    imageSize: "small" | "medium" | "large",
    /** 商品名称行数 */
    productNameLines: 'singleLine' | 'doubleColumn',
    /** 选取要展示的商品编号 */
    productIds?: string[],
    /** 商品数量 */
    productsCount: number,
    /** 商品类别 */
    categoryId?: string,
    /** 显示商品类别 */
    showCategories: boolean,
}

export interface State {
    products: Product[],
    categories: Category[],
    shoppingCartItems: ShoppingCartItem[],
}



@component({ displayName: "单列商品", icon: "icon-list", introduce: "单列展示商品" })
export class SingleColumnProducts extends Taro.Component<Props, State> {

    static defaultProps: Props = {
        imageSize: "small", productNameLines: "singleLine", productSourceType: "all",
        productsCount: 1, showCategories: true, productIds: undefined,
    }

    async loadData(props?: Props) {
        props = props || this.props
        let { categoryId, productsCount, productIds } = props;
        let sourceType = props.productSourceType;
        let productPromise: Promise<Product[]>;
        if (sourceType == 'category') {
            productPromise = services.shopping.productsByCategory(categoryId, productsCount)
        }
        else if (sourceType == 'custom') {
            productPromise = productIds ? services.shopping.productsByIds(productIds) : Promise.resolve([]);
        }
        else {
            productPromise = services.shopping.products(productsCount);
        }

        let [categories, products] = await Promise.all([services.shopping.categories(), productPromise]);

        if (products == null || products.length == 0)
            return "暂无所要显示的商品";

        return { products, categories }
    }
    render() {
        return <Loading loadData={() => this.loadData()}>

        </Loading>
    }
}