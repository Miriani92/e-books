import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { ScreenContainer } from "../../../components/molecules/ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import { CategoriesBar } from "../../../components";

export const Explore = () => {
  const navigation = useNavigation<any>();
  const handleNavigateCategories = () => {
    navigation.push("Categories");
  };

  return (
    <ScreenContainer>
      <Text className="text-large my-4">CATEGORIES</Text>
      <TouchableOpacity
        className="flex-row align-middle "
        onPress={handleNavigateCategories}
      >
        <Text className="text-blue self-center">SEE ALLL</Text>
        <Entypo name="arrow-right" size={24} color="#60a5fa" />
      </TouchableOpacity>
      <CategoriesBar />
    </ScreenContainer>
  );
};
