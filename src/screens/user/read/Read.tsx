import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export const Read = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Hello")}
        className="w-10 h-10 bg-green-light"
      >
        <Text>CLick here to change</Text>
      </TouchableOpacity>
    </View>
  );
};
