import { View, FlatList } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { bannerData } from "../../constants/data";

export const ExploreBanner = () => {
  const flatListSeparator = () => {
    return <View className="w-4"></View>;
  };
  return (
    <View className="my-8  f-full">
      <FlatList
        ItemSeparatorComponent={flatListSeparator}
        data={bannerData}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={320}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            className="w-80 h-32  rounded-md"
            contentFit="cover"
          />
        )}
      />
    </View>
  );
};
