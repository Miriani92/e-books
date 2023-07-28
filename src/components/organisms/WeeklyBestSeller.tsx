import React from "react";
import { View, FlatList } from "react-native";
import { bestSellingBooksData } from "../../constants/data";
import { WeeklyBestSellerBanner } from "../molecules/WeeklyBestSellerBanner";
import { Book } from "../molecules/Book";

export const WeeklyBestSeller = () => {
  const flatListSeparator = () => {
    return <View className="mb-4"></View>;
  };
  return (
    <View className="w-full   rounded-lg bg-violet-light">
      <WeeklyBestSellerBanner />
      <View className="p-4">
        <FlatList
          ItemSeparatorComponent={flatListSeparator}
          data={bestSellingBooksData}
          keyExtractor={(item: any) => item.id}
          snapToInterval={330}
          decelerationRate={0}
          renderItem={({ item }) => <Book key={item.id} {...item} />}
        />
      </View>
    </View>
  );
};
