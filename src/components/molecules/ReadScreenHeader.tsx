import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SearchInput } from "../atoms/SearchInput";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const ReadScreenHeader: React.FC<any> = ({
  route,
  navigation,
  back,
  options,
  isActive,
  setActive,
}) => {
  const navigateToFavorte = () => {
    navigation.push("Favorite");
  };
  const navigateToDrawerFilter = () => {
    navigation.openDrawer();
  };
  console.log("setActiveInListen", setActive);
  return (
    <View className="self-center mt-12  flex-row w-full  align-bottom   justify-around">
      <SearchInput style={""} setActive={setActive} isActive={isActive} />
      {!isActive && (
        <>
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
        </>
      )}
    </View>
  );
};
