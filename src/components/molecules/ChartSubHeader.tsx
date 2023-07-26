import React, { useState } from "react";
import { View } from "react-native";
import { chartFilterButtonsData } from "../../constants/data";
import { FilterButton } from "../atoms/FilterButton";

export const ChartSubHeader: React.FC<any> = (props) => {
  const [activeStyle, setActiveStyle] = useState({
    activeIndex: 0,
    backgroundColor: "bg-yellow-light",
    textColor: "text-blue-dark",
  });
  const { isFilter } = props;
  if (!isFilter) return null;
  const handleChangeIndex = (ind: number) => {
    setActiveStyle({ ...activeStyle, activeIndex: ind });
  };
  return (
    <View className="flex-row w-full mt-2">
      {chartFilterButtonsData.map((item) => {
        const { text, id } = item;
        return (
          <FilterButton
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
