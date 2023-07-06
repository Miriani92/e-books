import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../components/molecules/ScreenContainer";

export const Explore = () => {
  return (
    <ScreenContainer>
      <Text className="text-large my-4">CATEGORIES</Text>
      <TouchableOpacity>
        <Text className="text-blue">SEE ALLL</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
