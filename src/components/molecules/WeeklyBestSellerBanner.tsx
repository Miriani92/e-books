import { Text } from "react-native";
import { SeeAllButton } from "../atoms/SeeAllButton";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const WeeklyBestSellerBanner = () => {
  const navigation = useNavigation<any>();
  const handleNavigateToBestSeller = () => {
    navigation.push("BestSellers");
  };
  return (
    <TouchableOpacity
      onPress={handleNavigateToBestSeller}
      className="w-full  bg-sky-dark  p-4 rounded-tl-lg rounded-tr-lg h-20 justify-between"
    >
      <Text className="text-white-slate">WEEKLY BESTSELLERS</Text>

      <SeeAllButton textColor="text-white-slate" iconColor="#ffffff" />
    </TouchableOpacity>
  );
};
