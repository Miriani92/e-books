import { View, Image, Text } from "react-native";
import React from "react";

export const MyBook: React.FC<any> = ({ item }) => {
  const { imageSource, title, author } = item;

  return (
    <View className="mr-4">
      <Image
        source={imageSource}
        className="h-60 w-40 rounded-t-xl"
        resizeMode="cover"
      />
      <View className="w-40 h-20 bg-grey-light p-4  justify-center self-center rounded-b-xl">
        <Text className="self-center pb-1">{title}</Text>
        <Text className="self-center pt-1">{author}</Text>
      </View>
    </View>
  );
};
