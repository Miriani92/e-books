import { View } from "react-native";
import React from "react";
import { SearchInput } from "../atoms/SearchInput";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import type { HeaderProps } from "../../navigation/user/nested/ReadStackNavigator";

export const ReadScreenHeader: React.FC<HeaderProps> = ({
  route,
  navigation,
  back,
  options,
}) => {
  return (
    <SafeAreaView className="self-center h-30 flex-row w-11/12  align-middle justify-around">
      <SearchInput />
      <View className="align-middle justify-center ">
        <AntDesign name="hearto" size={24} color="grey" />
      </View>
      <View className="align-middle justify-center">
        <MaterialIcons name="settings-ethernet" size={30} color="grey" />
      </View>
    </SafeAreaView>
  );
};
