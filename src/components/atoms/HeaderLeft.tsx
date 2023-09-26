import React from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HeaderLeft = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>
        <AntDesign name="left" size={24} color="black" />
      </Text>
    </TouchableOpacity>
  );
};
