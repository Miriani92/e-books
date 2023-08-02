import { View, Image, FlatList } from "react-native";
import React from "react";
import { bannerData } from "../../constants/data";
// import { useState } from "react";
// import { Text } from "react-native";

export const ExploreBanner = () => {
  // const [isLoad, setIsLoad] = useState(true);
  const flatListSeparator = () => {
    return <View className="w-4"></View>;
  };
  // if (!isLoad) {
  //   return <Text>Loading...</Text>;
  // }
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
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};
