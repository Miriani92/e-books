import React from "react";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

type UserWallProps = {
  userName: string;
  streak: number;
  readTime: string;
  photoURL: any;
  navigateToUserInfo: () => void;
};

export const UserWall: React.FC<UserWallProps> = ({
  userName,
  streak,
  readTime,
  photoURL,
  navigateToUserInfo,
}) => {
  const greeting = "Hello";
  const readTimeHeader = "Reading Time";
  const streakHeader = "Reading Streak";

  return (
    <View className="w-11/12 p-2 self-center mt-4 bg-white-slate rounded-lg">
      <View className="flex-row justify-between mb-2 ">
        <View className="flex-row">
          <Image
            source={photoURL}
            className="w-14 h-14 rounded-full"
            contentFit="cover"
          />
          <View className="ml-4 justify-center">
            <Text>{greeting.toUpperCase()}</Text>
            <Text className="font-bold">{userName?.toUpperCase()}</Text>
          </View>
        </View>
        <TouchableOpacity
          className="justify-center"
          onPress={navigateToUserInfo}
        >
          <Feather name="arrow-right-circle" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View className="w-full border-slate-200 border-t-2 pt-2 justify-between  flex-row">
        <View className="flex-row flex-1 border-r-2 border-slate-200">
          <View className="justify-center mr-2">
            <Feather name="clock" size={28} color="black" />
          </View>
          <View className="justify-center">
            <Text>{readTimeHeader}</Text>
            <Text>{readTime}</Text>
          </View>
        </View>
        <View className="flex-row flex-1 justify-end ">
          <View className="justify-center mr-2">
            <FontAwesome5 name="fire" size={28} color="red" />
          </View>
          <View className="justify-center">
            <Text>{streakHeader}</Text>
            <Text className="text-center">{streak} day</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
