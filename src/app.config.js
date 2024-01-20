export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/person-center/index",
    "pages/card-coupe/index",
    "pages/order/index",
  ],
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f6f7',
  },
  tabBar: {
    custom: false,
    color: "#000000",
    selectedColor: "#A4462A",
    list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/images/tabs/home.png",
        selectedIconPath: "./assets/images/tabs/home.png"
      },
      {
        pagePath: "pages/card-coupe/index",
        text: "卡券套餐",
        iconPath: "./assets/images/tabs/coupe.png",
        selectedIconPath: "./assets/images/tabs/coupe.png"
      },
      {
        pagePath: "pages/order/index",
        text: "我的订单",
        iconPath: "./assets/images/tabs/order.png",
        selectedIconPath: "./assets/images/tabs/order.png"
      },
      {
        pagePath: "pages/person-center/index",
        text: "个人中心",
        iconPath: "./assets/images/tabs/personal.png",
        selectedIconPath: "./assets/images/tabs/personal.png"
      }
    ]
  },
})
