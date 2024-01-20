import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { useLoad,usePullDownRefresh } from "@tarojs/taro";
import { Button,Divider } from "@taroify/core";
import infoImage from "../../assets/images/info/info.png";
import swiperImage from "../../assets/images/swiperImage/qipaishiTest.jpg";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  usePullDownRefresh(()=>{
    console.log('下拉刷新了');
  })
  return (
    <View className="indexContainer">
      <View className="headerContainer" hoverClass="none">
        <View className="headerTextContainer">
          <View className="headerTitle">
            云戈自助棋牌会所
          </View>
          <View className="headerPlace">
            <Text className="iconfont icon-ditu_dingwei_o"></Text>
            <Text>扬州市邗江区润蜀路万科四季都会1栋</Text>
          </View>
        </View>
        <View className="headerMapAndPhone">
          <Text
            className="headerLogo iconfont icon-daohang"
            onClick={() => {
              console.log("@@@");
            }}
          ></Text>
          <Text className="headerLogo iconfont icon-dianhua"></Text>
        </View>
      </View>
      <View
        className="orderContainer"
        onClick={() => {
          console.log("@@@");
        }}
      >
        <Swiper class="swiper">
          <SwiperItem>
            <Image class="swiperItem" src={swiperImage} mode="aspectFill" />
          </SwiperItem>
        </Swiper>
        <View className="orderTitle">自助预定</View>
        <View className="orderInfo">做一家你喜欢的棋牌室</View>
        <Button className="orderBtn" shape="round">
          预定
        </Button>
        {/* <AtButton className="orderBtn"  circle="true" type="primary">
          预定
        </AtButton> */}
        <View className="navContainer">
          <View className="navItem">
            <Text className="iconfont icon-18"></Text>
            <Text>卡券套餐</Text>
          </View>
          <View className="navItem">
            <Text className="iconfont icon-tuangou"></Text>
            <Text>团购体验</Text>
          </View>
          <View className="navItem">
            <Text className="iconfont icon-chongzhi0101"></Text>
            <Text>充值优惠</Text>
          </View>
          <View className="navItem">
            <Text className="iconfont icon-WIFI"></Text>
            <Text>WIFI连接</Text>
          </View>
          <View className="navItem">
            <Text className="iconfont icon-shangjia"></Text>
            <Text>联系商家</Text>
          </View>
        </View>
      </View>
      <View className="footerContainer">
        <Text className="footerInfoTitle">体验步骤</Text>
        <Image
          className="footerInfoImage"
          src={infoImage}
          mode="widthFix"
          preview="true"
        />
      </View>
    </View>
  );
}
