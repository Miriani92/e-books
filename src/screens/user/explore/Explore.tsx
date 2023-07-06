import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const Explore = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Explore</Text>
    </View>
  );
};
