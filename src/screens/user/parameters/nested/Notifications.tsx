import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Notifications: React.FC<any> = ({ navigation }) => {
  const header = "Notifications";
  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };
  return (
    <SafeAreaView className="w-11/12  justify-between flex-row self-center">
      <View className="flex-row ">
        <Ionicons name="notifications" size={24} color=" #334155" />
        <Text className="ml-4 self-center font-bold text-base">{header}</Text>
      </View>
      <TouchableOpacity onPress={handleCloseDrawer}>
        <Ionicons name="close-sharp" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
