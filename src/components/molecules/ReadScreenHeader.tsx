import { View, TouchableOpacity } from "react-native";
import React from "react";
import { SearchInput } from "../atoms/SearchInput";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

export const ReadScreenHeader: React.FC<any> = ({
  route,
  navigation,
  back,
  options,
}) => {
  const navigateToFavorte = () => {
    navigation.push("Favorite");
  };
  const navigateToDrawerFilter = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView className="self-center h-30 flex-row w-11/12  align-middle justify-around">
      <SearchInput />
      <TouchableOpacity
        className="align-middle justify-center "
        onPress={navigateToFavorte}
      >
        <AntDesign name="hearto" size={24} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        className="align-middle justify-center"
        onPress={navigateToDrawerFilter}
      >
        <MaterialIcons name="settings-ethernet" size={30} color="grey" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
