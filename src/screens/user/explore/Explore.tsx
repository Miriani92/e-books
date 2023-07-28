import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native";
import {
  bestSellingBooksData,
  myAudibleBooksData,
} from "../../../constants/data";
import { MyBooksData } from "../../../constants/data";
import { ScreenContainer } from "../../../components/molecules/ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import { CategoriesBar } from "../../../components";
import { ExploreBanner } from "../../../components";
import { BooksContainer as WeeklyBestSeller } from "../../../components";
import { BooksContainer as NewBooksContainer } from "../../../components";
import { SeeAllButton } from "../../../components";

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
        <WeeklyBestSeller
          navigateToScreen="BestSellers"
          data={bestSellingBooksData}
          headerText="WEEKLY BESTSELLERS"
          headerColor="bg-slate-300"
          listColor="bg-grey-light"
        />
        <NewBooksContainer
          navigateToScreen="NewBooks"
          data={MyBooksData}
          headerText="NEW BOOKS"
          headerColor="bg-blue-dark"
          listColor="bg-green-dark"
        />
      </ScreenContainer>
    </ScrollView>
  );
};
