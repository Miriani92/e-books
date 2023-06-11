import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Feather";

type ButtonProps = {
  style?: string;
  icon?: any;
  text: string;
  textColor: string;
};

export const Button: React.FC<ButtonProps> = ({
  style,
  icon = false,
  text,
  textColor,
}) => {
  return (
    <TouchableOpacity
      className={`w-5/6 h-14  px-4 self-center justify-center rounded-lg ${style}`}
    >
      <View className="flex-row justify-center">
        <Text
          className={`text-center text-lg font-bold tracking-widestr  ${textColor}`}
        >
          {`${text}`}
        </Text>
        {icon ? (
          <View className="h-auto align-middle justify-center">
            <Icon name={icon} size={24} color={"white"} />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
