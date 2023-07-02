import { View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export const SearchInput = () => {
  return (
    <View className="self-center w-56 px-2  h-10 flex-row align-middle justify-center rounded-lg bg-white-slate">
      <View className="w-1/5 h-full text-center align-middle justify-center">
        <AntDesign name="search1" size={22} color="grey" />
      </View>
      <View className="w-5/6 h-10  bg-white-slate rounded-lg align-middle justify-center">
        <TextInput
          autoCapitalize="none"
          placeholder="Search Books"
          className="pl-1 "
        />
      </View>
    </View>
  );
};
