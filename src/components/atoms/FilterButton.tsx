import { TouchableOpacity, Text } from "react-native";
import React from "react";

export const FilterButton: React.FC<any> = (props) => {
  const {
    handleChangeIndex,
    backgroundColor: bColor,
    textColor: tColor,
    text,
    activeIndex,
    id,
  } = props;
  const isActiveButton = id === activeIndex;
  const bacgroundColor = isActiveButton ? bColor : "";
  const textColor = isActiveButton ? tColor : "";

  return (
    <TouchableOpacity
      className={`px-2 py-2  w-1/4  rounded-md ${bacgroundColor}`}
      onPress={() => handleChangeIndex(id)}
    >
      <Text className={`text-center ${textColor}`}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
