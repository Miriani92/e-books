import React from "react";
import { Text } from "react-native";
import { ScreenContainer } from "../../../components/molecules/ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import { CategoriesBar } from "../../../components";
import { ExploreBanner } from "../../../components";
import { WeeklyBestSeller } from "../../../components";
import { SeeAllButton } from "../../../components";
import { ScrollView } from "react-native-gesture-handler";

export const Explore = () => {
  const navigation = useNavigation<any>();
  const handleNavigateCategories = () => {
    navigation.push("Categories");
  };

  return (
    <ScrollView>
      <ScreenContainer>
        <Text className="text-large my-4">CATEGORIES</Text>
        <SeeAllButton
          handlePress={handleNavigateCategories}
          textColor="text-blue-light"
          iconColor="#60a5fa"
        />
        <CategoriesBar />
        <ExploreBanner />
        <WeeklyBestSeller />
      </ScreenContainer>
    </ScrollView>
  );
};
