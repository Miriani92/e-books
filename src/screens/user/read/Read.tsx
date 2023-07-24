import React from "react";
import { Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenContainer } from "../../../components";
import { SeeAllButton } from "../../../components";

export const Read = () => {
  const navigation = useNavigation<any>();
  const handleNavigateMyBooks = () => {
    navigation.push("MyBooks");
  };
  return (
    <ScrollView>
      <ScreenContainer>
        <Text className="text-large my-4">MY BOOKS</Text>
        <SeeAllButton
          handlePress={handleNavigateMyBooks}
          textColor="text-blue-light"
          iconColor="#60a5fa"
        />
      </ScreenContainer>
    </ScrollView>
  );
};
