import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Animated } from "react-native";
import React from "react";

export const MyBook: React.FC<any> = ({ item, xAxis, index }) => {
  const BOOK_WIDTH = 170;
  const { imageSource, title, author } = item;

  const translateX = Animated.add(
    xAxis,
    xAxis.interpolate({
      inputRange: [0, 0.0001 + index * BOOK_WIDTH],
      outputRange: [0, -index * BOOK_WIDTH],
      extrapolateRight: "clamp",
    })
  );
  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }],
      }}
    >
      <Image
        source={imageSource}
        className="h-60 w-40 rounded-t-xl"
        contentFit="cover"
      />
      <View className="w-40 h-20 bg-grey-light p-4  justify-center self-center rounded-b-xl">
        <Text className="self-center pb-1">{title}</Text>
        <Text className="self-center pt-1">{author}</Text>
      </View>
    </Animated.View>
  );
};
