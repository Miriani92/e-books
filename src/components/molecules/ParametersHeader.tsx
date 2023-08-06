import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ParametersHeader: React.FC<any> = ({
  screenName,
  route,
  navigation,
  back,
  options,
}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView className="w-full  bg-white-slate">
      <View className="w-11/12 self-center  justify-between flex-row ">
        <View className="justify-center flex-1 left-3">
          <Text className="self-center antialiased font-bold ">
            {screenName.toUpperCase()}
          </Text>
        </View>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="notifications" size={26} color=" #334155" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
