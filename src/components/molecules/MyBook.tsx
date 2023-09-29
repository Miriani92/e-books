import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Animated } from "react-native";

export const MyBook: React.FC<any> = ({ item, xAxis, index }) => {
  const BOOK_WIDTH = 170;
  const {
    id,
    authorName,
    authorSurname,
    category,
    header,
    storedCoverImageUrl,
    storedPdfUrl,
  } = item;

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
        source={storedCoverImageUrl}
        className="h-60 w-40 rounded-t-xl"
        contentFit="cover"
      />
      <View className="w-40 h-20 bg-grey-light p-4  justify-center self-center rounded-b-xl">
        <Text className="self-center pb-1">{header}</Text>
        <Text className="self-center pt-1">
          {authorName + " " + authorSurname}
        </Text>
      </View>
    </Animated.View>
  );
};
