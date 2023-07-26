import React, { useRef } from "react";
import { FlatList, Animated, View } from "react-native";
import { MyBook } from "./MyBook";
import { ScrollView } from "react-native-gesture-handler";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export const BookCarousel: React.FC<any> = ({ data }) => {
  const xAxis = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: xAxis } } }],
    { useNativeDriver: true }
  );

  const flatListSeparator = () => {
    return <View className="mr-4"></View>;
  };

  return (
    <AnimatedFlatList
      ItemSeparatorComponent={flatListSeparator}
      scrollEventThrottle={16}
      contentContainerStyle={{ marginTop: 16 }}
      data={data}
      keyExtractor={(item: any) => item.id}
      horizontal
      onScroll={handleScroll}
      renderItem={({ index, item }) => (
        <MyBook item={item} xAxis={xAxis} index={index} />
      )}
    />
  );
};
