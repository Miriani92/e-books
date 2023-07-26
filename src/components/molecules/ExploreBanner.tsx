import { View, Image, FlatList } from "react-native";
import React from "react";
import { bannerData } from "../../constants/data";

export const ExploreBanner = () => {
  const flatListSeparator = () => {
    return <View className="mr-4"></View>;
  };
  return (
    <View className="my-8">
      <FlatList
        ItemSeparatorComponent={flatListSeparator}
        data={bannerData}
        keyExtractor={(item: any) => item.id}
        horizontal
        snapToInterval={330}
        decelerationRate={0}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            className="w-80 h-32  rounded-md"
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};
