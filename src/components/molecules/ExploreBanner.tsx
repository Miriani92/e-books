import { View, Image, FlatList } from "react-native";
import React from "react";
import { bannerData } from "../../constants/data";

export const ExploreBanner = () => {
  return (
    <View className="mt-2">
      <FlatList
        data={bannerData}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            className="w-80 h-32 mx-2 rounded-md"
            resizeMode="cover"
          />
        )}
        keyExtractor={(item: any) => item.id}
        horizontal
      />
    </View>
  );
};