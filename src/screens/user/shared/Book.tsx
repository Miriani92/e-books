import { View, Text } from "react-native";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export const Book = () => {
  const navigation = useNavigation<any>();
  // create the back button
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-grey-light align-middle justify-center">
      <Text className="self-center my-2 font-bold">
        There should be the current reading book
      </Text>
      <Button
        text="GO BACK"
        textColor="text-white-slate"
        style="bg-pink-dark"
        onPress={navigateBack}
      />
    </View>
  );
};
