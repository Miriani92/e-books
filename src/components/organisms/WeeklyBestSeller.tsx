import React from "react";
import { View } from "react-native";
import { bestSellingBooksData } from "../../constants/data";
import { WeeklyBestSellerBanner } from "../molecules/WeeklyBestSellerBanner";
import { Book } from "../molecules/Book";

export const WeeklyBestSeller = () => {
  return (
    <View className="w-full  mt-2 rounded-lg bg-violet-light">
      <WeeklyBestSellerBanner />
      <View className="p-4">
        {bestSellingBooksData.map((item: any) => {
          return <Book key={item.id} {...item} />;
        })}
      </View>
    </View>
  );
};
