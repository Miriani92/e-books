import React from "react";
import { View } from "react-native";
import { CategoriesCircle } from "../atoms/CategoriesCircle";

export const CategoriesBar = () => {
  return (
    <View className="flex-row justify-between align-middle self-center w-full my-2">
      <CategoriesCircle
        text="Free"
        color="white"
        iconName="fire"
        backgroundColor="bg-purple-dark"
      />
      <CategoriesCircle
        text="Sound Books"
        color="white"
        iconName="headphones"
        backgroundColor="bg-grey-dark"
      />
      <CategoriesCircle
        text="Translation"
        color="white"
        iconName="book-open"
        backgroundColor="bg-yellow-dark"
      />
      <CategoriesCircle
        text="Podcast"
        color="white"
        iconName="podcast"
        backgroundColor="bg-violet-dark"
      />
    </View>
  );
};
