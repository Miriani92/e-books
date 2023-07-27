import React from "react";
import { Text, View } from "react-native";

export const ChartList = (props: any) => {
  const { id, title, data } = props;
  return (
    <View className="flex-row  w-full p-4">
      <Text className="mr-2">{id}</Text>
      <Text className="mr-2">{title}</Text>
      <Text>{data}</Text>
    </View>
  );
};
