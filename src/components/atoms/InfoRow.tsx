import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";
import * as icons from "@expo/vector-icons";

type InfoRowProps = {
  header: string;
  icon: { name: string; source: string; color?: string };
  screen: string;
  onPressInfoRow(screen: string): void;
  setModal(isActive: boolean): void;
  handleLogOut(): void;
};

export const InfoRow: React.FC<InfoRowProps> = ({
  header,
  icon,
  screen,
  onPressInfoRow,
  setModal,
  handleLogOut,
}) => {
  const { name, source } = icon;
  const iconSize = name === "mastercard" ? 20 : 24;
  const iconColor = icon?.color ? icon.color : "black";

  const alertTitle = "LOG OUT?";
  const alertText = "Do you want to log out?";

  const Icon = (() => {
    const Icon = icons[source];
    return Icon;
  })();

  const handlePress = () => {
    if (name === "log-out") {
      return Alert.alert(alertTitle, alertText, [
        {
          text: "Log out",
          onPress: handleLogOut,
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
          style: "cancel",
        },
      ]);
    }
    setModal(true);
    onPressInfoRow(screen);
  };
  return (
    <TouchableOpacity
      className=" px-2 py-1 rounded-lg self-center bg-white-slate w-11/12 flex-row justify-between"
      onPress={handlePress}
    >
      <View className="flex-row ">
        <View className="w-12 h-12 mr-4 rounded-full bg-sky-300  justify-center">
          <View className="self-center">
            <Icon name={name} size={iconSize} color={iconColor} />
          </View>
        </View>
        <View className="justify-center">
          <Text className="self-center">{header.toUpperCase()}</Text>
        </View>
      </View>
      <View className="justify-center">
        <Feather name="arrow-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};
