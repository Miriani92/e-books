import { TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
type ButtonProps = {
  handlePress?: () => void;
  textColor?: string;
  iconColor?: string;
};

export const SeeAllButton: React.FC<ButtonProps> = ({
  handlePress,
  textColor,
  iconColor,
}) => {
  return (
    <TouchableOpacity className="flex-row align-middle " onPress={handlePress}>
      <Text className={`${textColor} self-center`}>SEE ALL</Text>
      <Entypo name="arrow-right" size={24} color={iconColor} />
    </TouchableOpacity>
  );
};
