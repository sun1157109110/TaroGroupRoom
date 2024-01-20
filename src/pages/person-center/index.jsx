import React from "react";
import { View, Text } from "@tarojs/components";
import { Avatar, Button,Divider, Grid, Image } from "@taroify/core";
import Taro from "@tarojs/taro";
import avatarPic from "../../assets/images/avatar/avatarPic.jpg";
import "./index.scss";

import { BagOutlined, NotesOutlined } from "@taroify/icons";
const PersonCenter = () => {
  return (
    <View className="personalContainer">
      <View className="personInfoContainer">
        <Avatar src={avatarPic} size="large" />
        <View className="personNameContainer">
          <View className="personName">ysun</View>
          <View className="personId">ID: 4993118</View>
        </View>
        <Button className="personSettings" shape="round" color="primary" onClick={()=>{Taro.vibrateShort();}}>
          更改信息
        </Button>
      </View>
      <View className="cardAndBalance">
        <View className="cardAndBalanceItem">
          <View className="cardAndBalanceNum">0</View>
          <View className="cardAndBalanceText">我的卡包</View>
        </View>
        <View className="cardAndBalanceItem">
          <View className="cardAndBalanceNum">0</View>
          <View className="cardAndBalanceText">我的余额</View>
        </View>
      </View>
      <View className="applyCardContainer">
        <View className="applyCardIcon">
          <Text className="iconfont icon-qiaquan"></Text>
        </View>
        <View className="applyCardInfo">
          <View className="applyCardInfoTitle">超多卡券</View>
          <View className="applyCardInfoText">办卡享更多优惠</View>
        </View>
        <View className="applyNav">{"立即办卡 >"}</View>
      </View>
      <View className="myToolContainer">
        <View className="myToolTitle">我的工具</View>
        <Divider/>
        {/* <Grid columns={4} bordered={false}>
          <Grid.Item
            icon={<BagOutlined />}
            text="团购验券"
          />
          <Grid.Item icon={<NotesOutlined />} text="打卡记录" />
          <Grid.Item icon={<Image  src="https://img.yzcdn.cn/vant/cat.jpeg"><View className="iconfont icon-tuangou" /></Image>} text="WIFI连接" />
          <Grid.Item text="常见问题" />
          <Grid.Item text="联系商家" />
        </Grid> */}
        <View className="myToolGrid">
          <View className="myToolGridItem">
            <View className="iconfont icon-tuangou"/>
            <View className="myToolGridItemText">团购验券</View>
          </View>
          <View className="myToolGridItem">
            <View className="iconfont icon-wangluobanji"/>
            <View className="myToolGridItemText">打卡记录</View>
          </View><View className="myToolGridItem">
            <View className="iconfont icon-WIFI"/>
            <View className="myToolGridItemText">WIFI连接</View>
          </View><View className="myToolGridItem">
            <View className="iconfont icon-changjianwenti"/>
            <View className="myToolGridItemText">常见问题</View>
          </View>
          <View className="myToolGridItem">
            <View className="iconfont icon-shangjia"/>
            <View className="myToolGridItemText">联系商家</View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonCenter;
