import { TouchableOpacity, Text } from "react-native";
import React from "react";

export const ChartButton: React.FC<any> = (props) => {
  const { curvePosition, text, onPress, isMiddle, activeStyle } = props;
  const curve = curvePosition ? `rounded-${curvePosition}-lg` : "";
  const border = isMiddle ? "border-pink-dark border-x-0 " : "border-pink-dark";
  const backGroundColor = activeStyle ? activeStyle.background : "";
  const textColor = activeStyle ? activeStyle.textColor : "";
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-1/3 h-20 border-2 ${border} ${backGroundColor} justify-center ${curve} `}
    >
      <Text className={`self-center ${textColor}`}>{text}</Text>
    </TouchableOpacity>
  );
};
