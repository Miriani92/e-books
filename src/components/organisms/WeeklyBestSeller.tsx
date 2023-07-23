import { View } from "react-native";
import { WeeklyBestSellerBanner } from "../molecules/WeeklyBestSellerBanner";
import React from "react";

export const WeeklyBestSeller = () => {
  return (
    <View className="w-full h-96 mt-2 rounded-lg bg-grey-dark">
      <WeeklyBestSellerBanner />
    </View>
  );
};
