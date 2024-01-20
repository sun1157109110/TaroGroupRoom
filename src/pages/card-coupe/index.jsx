import React, { useState } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad, useDidShow, usePullDownRefresh } from "@tarojs/taro";
import { Divider, Form, Toast, Input, Button, Flex } from "@taroify/core";
import cn from "classnames";
import "./index.scss";

console.log(Taro.getSystemInfoSync());
const { statusBarHeight, windowWidth, windowHeight } = Taro.getSystemInfoSync();
let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
let navTop = menuButtonObject.top;
let navHeight =
  statusBarHeight +
  menuButtonObject.height +
  (menuButtonObject.top - statusBarHeight) * 2;
let menuBtnRight = windowWidth - menuButtonObject.right;
let windowInnerHeight = windowHeight - navHeight;
Taro.globalSystemInfo = { navTop, navHeight, menuBtnRight, windowInnerHeight };
console.log(Taro.globalSystemInfo);
const CardCoupe = () => {
  const [value, setValue] = useState(0);
  const [rechargeCardActiveValue, setRechargeCardActiveValue] = useState(0);
  useLoad(() => {
    console.log(Taro.globalSystemInfo);
  });
  useDidShow(() => {
    console.log("@@");
  });

  const useScope = {
    smallCoupon:
      "包厢(801(小包有窗),802(小包有窗),803(小包有窗),809(小包有窗),810(小包有窗),811(小包有窗),813(小包有窗))",
    midCoupon:
      "包厢(805(中包有沙发,有窗),包厢(806(中包有沙发,有窗),包厢(808(中包有沙发,有窗))",
    largeCoupon: "包厢(807(大包有沙发,有窗),812(大包有沙发,有窗))",
  };
  const cardObjs = [
    {
      cardType: "smallCoupon",
      couponType: 0,
      cardTitle: "【小包周一至周五】 39.9畅玩5小时",
      useTimeScope: "购买后15天内有效",
      price: 39.9,
      originalPrice: 75,
      backgroundImage:
        "linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)",
    },
    {
      cardType: "smallCoupon",
      couponType: 1,
      cardTitle: "【小包周末通用】 49.9畅玩5小时",
      useTimeScope: "购买后15天内有效",
      price: 49.9,
      originalPrice: 75,
      backgroundImage:
        "linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)",
    },
    {
      cardType: "midCoupon",
      couponType: 0,
      cardTitle: "【中包专享】 69.9畅玩5小时",
      useTimeScope: "购买后15天内有效",
      price: 69.9,
      originalPrice: 100,
      backgroundImage:
        " linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)",
    },
    {
      cardType: "largeCoupon",
      couponType: 0,
      cardTitle: "【大包专享】 89.9畅玩5小时",
      useTimeScope: "购买后15天内有效",
      price: 89.9,
      originalPrice: 150,
      backgroundImage:
        "linear-gradient(to right, #fc00ff 0%, #00dbde  51%, #fc00ff  100%)",
    },
  ];
  const renderCard = (cardItem) => {
    const {
      cardType,
      cardTitle,
      useTimeScope,
      price,
      originalPrice,
      backgroundImage,
    } = cardItem;
    return (
      <View
        className="cardItemContainer"
        style={{ backgroundImage: backgroundImage }}
      >
        <Text className="cardTitle">{cardTitle}</Text>
        <View className="cardUseScope">
          {"可用范围: " + useScope[cardType]}
        </View>
        <View className="cardUseScope">{"有效期至: " + useTimeScope}</View>
        <Divider className="cardDivider" />
        <View className="cardPriceContainer">
          <Text className="cardPrice">{"￥" + price + "  "}</Text>
          <Text className="cardOriginalPrice">原价: </Text>
          <Text className="cardOriginalPriceNumber">
            {" " + originalPrice + "元"}
          </Text>
          <Text className="iconfont icon-xiangyou-jiantou"></Text>
        </View>
      </View>
    );
  };
  const handleCardScrollToTop = () => {
    console.log("上拉");
  };
  const renderCardCoupes = () => (
    <ScrollView
      className="CardCoupeScroll"
      scrollY={true}
      refresherEnabled={true}
      onScrollToUpper={handleCardScrollToTop}
      style={{
        marginTop: Taro.globalSystemInfo.navHeight,
        height: Taro.globalSystemInfo.windowInnerHeight + "px",
      }}
    >
      <View className="cardCoupeContainer">
        {cardObjs.map((item) => renderCard(item))}
      </View>
    </ScrollView>
  );

  const balance = 0;
  const integral = 0;
  const renderRecharge = () => (
    //recharge and balance
    <>
      <ScrollView
        className="CoupeRechargeScroll"
        scrollY={true}
        refresherEnabled={true}
        style={{
          marginTop: Taro.globalSystemInfo.navHeight,
          height: Taro.globalSystemInfo.windowInnerHeight + "px",
        }}
      >
        <View className="cardCoupeContainer">
          <View className="myBalance">
            <Text>{`我的余额: ${balance}元`}</Text>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            <Text className="balanceSeparator"></Text>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            <Text>{`${integral}积分`}</Text>
            <View className="balanceInfo">{"(100积分 = 1元)"}</View>
          </View>
          <View className="rechargeContainer">
            <Text className="rechargeTitle">选择充值规格:</Text>
            <Flex className="rechargeCardContainer">
              <Flex.Item span="6" className={cn("rechargeCard",{rechargeCardActive:rechargeCardActiveValue===0})} onClick={()=>{setRechargeCardActiveValue(0)}}>
                <Text>￥ 300</Text>
                <Text className="rechargeCardText">到账: 400</Text>
              </Flex.Item>
              <Flex.Item span="6" className={cn("rechargeCard",{rechargeCardActive:rechargeCardActiveValue===1})} onClick={()=>{setRechargeCardActiveValue(1)}}>
                <Text>￥ 400</Text>
                <Text className="rechargeCardText">到账: 500</Text>
              </Flex.Item>
            </Flex>
            <Button
              block
              color="primary"
            >
              立即充值
            </Button>
            <View className="rechargeInfo">
              <View>储值须知</View>
              <View>1、余额可以用于支付所有类型的座位</View>
              <View>2、使用过程中有任何疑问,请及时联系商家询问</View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
  const onSubmit = (event) => {
    Toast.open(JSON.stringify(event.detail.value));
  };
  const handleScan = () => {
    Taro.scanCode()
      .then((v) => {
        console.log("扫码成功:", v);
      })
      .catch((r) => {
        throw new Error(r);
      });
  };
  const renderExchange = () => (
    <>
      <ScrollView
        className="CoupeExchangeScroll"
        scrollY={true}
        refresherEnabled={true}
        style={{
          marginTop: Taro.globalSystemInfo.navHeight,
          height: Taro.globalSystemInfo.windowInnerHeight + "px",
        }}
      >
        <View className="cardCoupeContainer">
          <View className="exchangeBgc"></View>
          <View className="exchangeTitle">团购自助验券</View>
          <Form onSubmit={onSubmit}>
            <Toast id="toast" />
            <Form.Item
              className="exchangeInput"
              name="username"
              rules={[{ required: true }]}
            >
              <Form.Control align="center">
                <Input
                  type="number"
                  placeholder="点击输入卡券兑换码"
                  placeholderStyle="color:#666"
                />
                <View
                  className="iconfont icon-saoma"
                  onClick={() => {
                    handleScan();
                  }}
                ></View>
              </Form.Control>
            </Form.Item>
            <Button
              className="exchangeBtn"
              shape="round"
              block
              color="primary"
              formType="submit"
            >
              兑换
            </Button>
          </Form>
          <Divider></Divider>
          <View className="exchangeInfo">
            <View>
              1，
              本店支持抖音美团优惠券核销,可以将优惠券截图保存在相册,然后通过扫码核销,过着通过复制优惠券码,剪贴核销
            </View>
            <View>2， 优惠券一经核销不支持退款</View>
            <View>3， 有任何问题拨打18751883527咨询</View>
          </View>
        </View>
      </ScrollView>
    </>
  );
  const handleTabClick = (v) => {
    console.log(v);
    setValue(v);
  };
  return (
    <View>
      <View
        className="navHeader"
        style={{ height: Taro.globalSystemInfo.navHeight + "px" }}
      >
        <View className="coupeTabs">
          <View
            className={cn("coupeTabItem", { coupeTabItemActive: value === 0 })}
            onClick={() => {
              handleTabClick(0);
            }}
          >
            <Text>充值</Text>
            <View
              className={cn("coupeTabItemLine", {
                coupeTabItemLineActive: value === 0,
              })}
            ></View>
          </View>
          <View
            className={cn("coupeTabItem", { coupeTabItemActive: value === 1 })}
            onClick={() => {
              handleTabClick(1);
            }}
          >
            <Text>卡券</Text>
            <View
              className={cn("coupeTabItemLine", {
                coupeTabItemLineActive: value === 1,
              })}
            ></View>
          </View>
          <View
            className={cn("coupeTabItem", { coupeTabItemActive: value === 2 })}
            onClick={() => {
              handleTabClick(2);
            }}
          >
            <Text>兑换</Text>
            <View
              className={cn("coupeTabItemLine", {
                coupeTabItemLineActive: value === 2,
              })}
            ></View>
          </View>
        </View>
      </View>
      {/* <ScrollView
        className="CardCoupeScroll"
        scrollY={true}
        refresherEnabled={true}
        style={{
          marginTop: Taro.globalSystemInfo.navHeight,
          height: Taro.globalSystemInfo.windowInnerHeight + "px",
        }}
      >
        <View className="cardCoupeContainer"> */}
      {value === 1 && renderCardCoupes()}
      {value === 0 && renderRecharge()}
      {value === 2 && renderExchange()}
      {/* </View>
      </ScrollView> */}
    </View>
  );
};

export default CardCoupe;
