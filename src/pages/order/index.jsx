import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { Button ,DropdownMenu, Empty, } from "@taroify/core";
import Taro from "@tarojs/taro";

import "./index.scss";

const Order = () => {
  const [value, setValue] = useState();
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);
  //   useEffect(() => {
  //     console.log(option1);
  //   }, [option1]);
  const handleOption1Change = (v) => {
    if (v === undefined) return;
    setOption1(v);
  };
  const handleOption2Change = (v) => {
    if (v === undefined) return;
    setOption2(v);
  };
  return (
    <View className="orderContainer">
      <DropdownMenu
        onChange={(v) => {
          console.log("@@", v);
        }}
      >
        <DropdownMenu.Item value={option1} onChange={handleOption1Change}>
          <DropdownMenu.Option value={0}>全部订单</DropdownMenu.Option>
          <DropdownMenu.Option value={1}>进行中</DropdownMenu.Option>
          <DropdownMenu.Option value={2}>已完成</DropdownMenu.Option>
          <DropdownMenu.Option value={3}>已取消</DropdownMenu.Option>
        </DropdownMenu.Item>
        <DropdownMenu.Item value={option2} onChange={handleOption2Change}>
          <DropdownMenu.Option value={0}>默认排序</DropdownMenu.Option>
          <DropdownMenu.Option value={1}>下单时间</DropdownMenu.Option>
          <DropdownMenu.Option value={2}>预约时间</DropdownMenu.Option>
        </DropdownMenu.Item>
      </DropdownMenu>
      <Empty>
        <Empty.Image />
        <Empty.Description>您当前没有订单哦~</Empty.Description>
        <Button onClick={()=>{Taro.vibrateLong();}} shape="round" color="primary" className="orderBtn">
          前往预约
        </Button>
      </Empty>
    </View>
  );
};

export default Order;
