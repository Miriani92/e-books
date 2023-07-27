import { View } from "react-native";
import { ChartButton } from "../atoms/ChartButton";
import { ChartSubHeader } from "./ChartSubHeader";
import React from "react";

export const ChartHeader: React.FC<any> = (props) => {
  const { onChangeHeader, activeIndex, isFilter, hanldeGetActiveSubHeader } =
    props;

  const leftButtonTitle = "Reader\nChart";
  const middleButtonTitle = "10 Most\nActive\nReader";
  const rightButtonTitle = "10 Most\npopular\nBook";

  const activeStyleObj = {
    background: "bg-pink-dark",
    textColor: "text-white-slate",
  };
  const hanldeOnPress = (ind: number, headerName: string) => {
    let arg: any = {};
    if (ind == 0) {
      arg = { filter: false, activeIndex: ind };
    }
    if (ind == 1) {
      arg = { filter: true, activeIndex: ind };
    }
    if (ind == 2) {
      arg = { filter: true, activeIndex: ind };
    }
    arg.headerName = headerName;
    onChangeHeader(arg);
  };
  return (
    <>
      <View className="flex-row w-full">
        <ChartButton
          activeStyle={0 === activeIndex && activeStyleObj}
          curvePosition="tl"
          text={leftButtonTitle}
          onPress={() => hanldeOnPress(0, "readerList")}
        />
        <ChartButton
          activeStyle={1 === activeIndex && activeStyleObj}
          isMiddle={true}
          text={middleButtonTitle}
          onPress={() => hanldeOnPress(1, "mostActive")}
        />
        <ChartButton
          activeStyle={2 === activeIndex && activeStyleObj}
          curvePosition="tr"
          text={rightButtonTitle}
          onPress={() => hanldeOnPress(2, "mostPopular")}
        />
      </View>
      <ChartSubHeader
        isFilter={isFilter}
        hanldeGetActiveSubHeader={hanldeGetActiveSubHeader}
      />
    </>
  );
};
