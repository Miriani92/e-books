import { View, Image, Text } from "react-native";
import { Animated } from "react-native";
import React from "react";

export const MyBook: React.FC<any> = ({ item, xAxis, index }) => {
  const BOOK_WIDTH = 170;
  const { imageSource, title, author } = item;

  const translateX = Animated.add(
    xAxis,
    xAxis.interpolate({
      inputRange: [0, 0.00001 + index * BOOK_WIDTH],
      outputRange: [0, -index * BOOK_WIDTH],
      extrapolate: "clamp",
    })
  );
  return (
    <Animated.View
      style={{
        marginRight: 16,
        transform: [{ translateX: translateX }],
        shadowColor: "black",
        shadowRadius: 4,
        shadowOpacity: 0.2,
      }}
    >
      <Image
        source={imageSource}
        className="h-60 w-40 rounded-t-xl"
        resizeMode="cover"
      />
      <View className="w-40 h-20 bg-grey-light p-4  justify-center self-center rounded-b-xl">
        <Text className="self-center pb-1">{title}</Text>
        <Text className="self-center pt-1">{author}</Text>
      </View>
    </Animated.View>
  );
};
