# TARO-BUILDER

基于 tarojs 的所见即所得框架，用于需要可视化构建小程序，WEB，APP 的项目。

## 截图

案例：电商系统小程序页面构造

![](https://ansiboy.github.io/taro-builder/images/20200704165629.png)

![](https://ansiboy.github.io/taro-builder/images/20200704170120.png)

![](https://ansiboy.github.io/taro-builder/images/20200704170150.png)

## 配置

配置文件为 config.js

| 字段             | 含义            |
| ---------------- | --------------- |
| port             | 网站端口        |
| db               | 数据库配置      |
| componentStation | 组件库 URL 地址 |

## 组件库站点配置

每个组件库站点都需要提供一个 config.json 文件，设计器通过这个配置文件加载组件及其设计器。

```json
{
  "components": [
    {
      "displayName": string,
      "icon": string,
      "introduce": string,
      "type": string,
      "path": string
    }
  ]
}
```

**示例**

```json
{
    "components": [
        {
            "displayName": "店铺信息",
            "icon": "icon-edit",
            "introduce": "显示店铺相关信息，包括店铺图标，店铺名称，商品数量，订单数量等等，一般放置在首页顶部。",
            "type": "SummaryHeader",
            "path": "components/summary-header/component"
        },
        {
            "displayName": "店铺顶栏",
            "icon": "icon-map-marker",
            "introduce": "在顶部显示购物车图标，显示用户位置",
            "type": "LocationBarControl",
            "path": "components/store-top-bar/component"
        },
        {
            "displayName": "单列商品",
            "icon": "icon-list",
            "introduce": "单列展示商品",
            "type": "SingleColunmProducts",
            "path": "components/single-colunm-products/component",
            "design": "design/single-colunm-products"
        },
        {
            "displayName": "轮播",
            "icon": "icon-list-alt",
            "introduce": "多张图片轮流播放",
            "type": "Carousel",
            "path": "components/carousel/component",
            "editor": "editors/carousel"
        }
    ]
}
```


