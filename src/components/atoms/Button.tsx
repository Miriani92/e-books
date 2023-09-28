import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { ActivityIndicator } from "react-native";

type ButtonProps = {
  style?: string;
  icon?: any;
  text?: string;
  textColor?: string;
  onPress?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  textStyle?: string;
  iconSize?: number;
  iconColor?: string;
};

export const Button: React.FC<ButtonProps> = ({
  style,
  icon = false,
  text,
  textColor,
  onPress,
  isLoading,
  isDisabled,
  textStyle = "",
  iconSize = 24,
  iconColor = "white",
}) => {
  const iconWrapperStyle = icon ? "justify-around" : "justify-center";

  return (
    <TouchableOpacity
      className={`w-5/6 h-14  px-4 self-center justify-center rounded-lg ${style}`}
      onPress={onPress}
      disabled={isDisabled}
    >
      <View className="flex-row justify-around">
        {!isLoading && (
          <Text
            className={`text-center text-lg  font-bold tracking-widestr  ${textColor} ${textStyle}`}
          >
            {text}
          </Text>
        )}
        {icon && !isLoading ? (
          <View className={` h-auto align-middle ${iconWrapperStyle} `}>
            <Icon name={icon} size={iconSize} color={iconColor} />
          </View>
        ) : null}
        {isLoading ? <ActivityIndicator color="white" /> : null}
      </View>
    </TouchableOpacity>
  );
};
