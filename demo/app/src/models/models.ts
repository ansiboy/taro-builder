interface Brand {
    Id: string;
    Name: string;
    Image?: string;
}






interface Coupon {
    Id: string,
    Amount: number,
    Discount: number,
    Remark: string,
    Title: string,
    ValidBegin: Date,
    ValidEnd: Date,
}
interface CouponCode {
    Id: string,
    Amount: number,
    Code: string,
    Discount: number,
    CouponId: string,
    Remark: string,
    ReceiveBegin: Date,
    ReceiveEnd: Date,
    Title: string,
    ValidBegin: Date,
    ValidEnd: Date,
    UsedDateTime: Date,
    CreateDateTime: Date,
}
interface ReceiptInfo {
    Address: string,
    CityId: string,
    CityName: string,
    Consignee: string,
    CountyId: string,
    CountyName: string,
    FullAddress: string,
    Id: string,
    IsDefault: boolean,
    Mobile: string,
    Name: string,
    Phone: string,
    PostalCode: string,
    ProvinceId: string,
    ProvinceName: string,
    RegionId: string
}

interface ProductComent {
    Id: string,
    Name: string,
    ImageUrl: string,
    Status: 'Evaluated' | 'ToEvaluate',
    OrderDetailId: string,
}
interface FavorProduct {
    Id: string;
    ProductId: string,
    ProductName: string,
    ImageUrl: string
}

interface OrderDetail {
    // Id: string,
    ImageUrl: string,
    // ImagePath: string,
    ProductId: string,
    ProductName: string,
    Price: number,
    Quantity: number,
    Score: number
}
interface Region {
    Id: string,
    Name: string,
    ParentId?: string,
    SortNumber?: number
}

interface ShoppingCartItem {
    Id: string,
    Amount: number,
    Count: number,
    ImagePath: string,
    IsGiven?: boolean,
    Name: string,
    ProductId: string,
    Remark?: string,
    Score?: number,
    Selected: boolean,
    Unit?: number,
    Price: number,
    Type?: 'Reduce' | 'Discount'
}

interface Province {
    Id: string,
    Name: string
    Cities: Array<Citie>
}
interface Citie {
    Id: string,
    Name: string,
}



interface UserInfo {
    Id: string;
    NickName: string;

    County: string;
    Province: string;
    City: string;
    CountyId: string;
    ProvinceId: string,
    CityId: string,

    HeadImageUrl: string;
    Gender: string;
    // UserId: string;
    CreateDateTime: string;
    Mobile: string,
    Balance: number,
}





interface ControlData {
    controlId: string, controlName: string, data?: any
    selected?: boolean | 'disabled',
    position: 'header' | 'view' | 'footer',
    /**
     * 是否保存到数据库，默认保存，true 保存，false 不保存
     */
    save?: boolean,
}

// interface PageData {
//     id?: string,
//     name?: string,
//     remark?: string,
//     isDefault?: boolean,
//     // showMenu?: boolean,
//     className?: string,
//     createDateTime?: Date,
//     version?: number,
//     templateId?: string,
//     /**
//      * 页面的类型，默认为 page
//      * snapshoot 为页面快照
//      * productTemplate 为商品模板
//      * page 为普通页面
//      * system 为系统页面
//      */
//     type?: 'snapshoot' | 'productTemplate' | 'page' | 'system',
//     controls: ControlData[]
// }

interface News {
    Id: string, Title: string, ImgUrl: string,
    Date: Date, Content: string
}

interface HomeProduct {
    Id: string, Name: string, ImagePath: string,
    ProductId: string, Price: number, PromotionLabel: string
}

interface LoginResult {
    token: string
}

type SiteImageData = {
    id: string, width?: number, height?: number
}

type StyleColor = 'default' | 'red' | 'green' | 'pink' | 'goldenrod';

interface Store {
    Id: string,
    Name: string,
    ImagePath: string,
    Style?: StyleColor,
    // data: { ImageId?: string, Style?: StyleColor },
}

interface DataSourceSelectArguments {
    startRowIndex?: number;
    maximumRows?: number;
    sortExpression?: string;
    filter?: string;
}