import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

type CategoriesCircleProps = {
  text?: string;
  color?: string;
  iconName?: string;
  backgroundColor?: string;
};

export const CategoriesCircle: React.FC<CategoriesCircleProps> = ({
  text,
  color,
  iconName,
  backgroundColor,
}) => {
  return (
    <View>
      <View
        className={` w-12 h-12 self-center rounded-full align-middle justify-center  ${backgroundColor}`}
      >
        <TouchableOpacity className="self-center">
          <FontAwesome5 name={iconName} size={24} color={color} />
        </TouchableOpacity>
      </View>
      <Text className="self-center mt-2">{text}</Text>
    </View>
  );
};
