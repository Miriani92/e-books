import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { ActivityIndicator } from "react-native";

type ButtonProps = {
  style?: string;
  icon?: any;
  text: string;
  textColor: string;
  onPress: any;
  isLoading: boolean;
  isDisabled: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  style,
  icon = false,
  text,
  textColor,
  onPress,
  isLoading,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      className={`w-5/6 h-14  px-4 self-center justify-center rounded-lg ${style}`}
      onPress={onPress}
      disabled={!isDisabled}
    >
      <View className="flex-row justify-center">
        <Text
          className={`text-center text-lg font-bold tracking-widestr  ${textColor}`}
        >
          {`${!isLoading ? text : ""}`}
        </Text>
        {icon && !isLoading ? (
          <View className="h-auto align-middle justify-center">
            <Icon name={icon} size={24} color={"white"} />
          </View>
        ) : null}
        {isLoading ? <ActivityIndicator color="white" /> : null}
      </View>
    </TouchableOpacity>
  );
};
