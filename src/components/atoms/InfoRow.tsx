import React from "react";
import { View, Text } from "react-native";
import * as icons from "@expo/vector-icons";

type InfoRowProps = {
  header: string;
  icon: { name: string; source: string };
  screen: string;
};

export const InfoRow: React.FC<InfoRowProps> = ({ header, icon, screen }) => {
  const { name, source } = icon;
  const iconSize = name === "mastercard" ? 20 : 24;

  const Icon = (() => {
    const Icon = icons[source];
    return Icon;
  })();

  return (
    <View className=" px-2 py-1 rounded-lg self-center bg-white-slate w-11/12 flex-row">
      <View>
        <View className="w-12 h-12 rounded-full bg-sky-400 justify-center">
          <View className="self-center">
            <Icon name={name} size={iconSize} color="grey" />
          </View>
        </View>
      </View>
    </View>
  );
};
