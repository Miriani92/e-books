import { View, Text } from "react-native";
import React from "react";
type AdditionalProps = {
  header: string;
};
export const AdditionalInformation: React.FC<AdditionalProps> = ({
  header,
}) => {
  return (
    <View className="w-11/12 self-center mt-8">
      <Text className="font-bold">{header.toUpperCase()}</Text>
      <View className="w-28 mt-2 mb-8 border-t-2  border-teal-400	"></View>
    </View>
  );
};
