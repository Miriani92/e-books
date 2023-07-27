import React, { useState } from "react";
import { View, Text } from "react-native";
import { chartFilterButtonsData } from "../../constants/data";
import { FilterButton } from "../atoms/FilterButton";

export const ChartSubHeader: React.FC<any> = (props) => {
  const [activeStyle, setActiveStyle] = useState({
    activeIndex: 0,
    backgroundColor: "bg-yellow-light",
    textColor: "text-blue-dark",
  });
  const { isFilter, hanldeGetActiveSubHeader } = props;
  if (!isFilter)
    return (
      <View className="h-8 bg-yellow-dark my-2 justify-center ">
        <Text className="self-center ">READ MORE TO BE IN CHART</Text>
      </View>
    );
  const handleChangeIndex = (ind: number, header: string) => {
    const arg = { activeSubIndex: ind, activeSubHeader: header };
    hanldeGetActiveSubHeader(arg);
    setActiveStyle({ ...activeStyle, activeIndex: ind });
  };
  return (
    <View className="flex-row w-full my-2">
      {chartFilterButtonsData.map((item) => {
        const { text, id, title } = item;
        return (
          <FilterButton
            title={title}
            key={id}
            text={text}
            id={id}
            handleChangeIndex={handleChangeIndex}
            {...activeStyle}
          />
        );
      })}
    </View>
  );
};
