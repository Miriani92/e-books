import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Read = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text> Read</Text>
    </View>
  );
};
