import React, { useRef } from "react";
import { FlatList, Animated, View, TouchableOpacity } from "react-native";
import { useAppDispatch } from "../../hooks/app/useStore";
import { setCurrentReadingBook } from "../../store/reducers/currentReadingBook";
import { MyBook } from "./MyBook";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const BookCarousel: React.FC<any> = ({ data }) => {
  const xAxis = useRef(new Animated.Value(0)).current;
  const dispatch: any = useAppDispatch();

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: xAxis } } }],
    { useNativeDriver: true }
  );

  const flatListSeparator = () => {
    return <View className="mr-4"></View>;
  };
  const handleMyBookPressed = (item: any) => {
    dispatch(setCurrentReadingBook(item));
  };

  return (
    <AnimatedFlatList
      ItemSeparatorComponent={flatListSeparator}
      scrollEventThrottle={16}
      contentContainerStyle={{ marginTop: 16 }}
      data={data}
      keyExtractor={(item: any) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
      onScroll={handleScroll}
      renderItem={({ index, item }) => {
        return (
          <TouchableOpacity onPress={() => handleMyBookPressed(item)}>
            <MyBook item={item} xAxis={xAxis} index={index} />
          </TouchableOpacity>
        );
      }}
    />
  );
};
