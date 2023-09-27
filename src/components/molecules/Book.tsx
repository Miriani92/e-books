import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export type BookProps = {
  id: string;
  authorName: string;
  authorSurname: string;
  category: string;
  header: string;
  storedCoverImageUrl: string;
  storedPdfUrl: string;
};
export const Book: React.FC<BookProps> = ({
  id,
  authorName,
  authorSurname,
  category,
  header,
  storedCoverImageUrl,
  storedPdfUrl,
}) => {
  return (
    <View className="justify-between flex-row">
      <View className="flex-row gap-2">
        <Image source={storedCoverImageUrl} className="w-20 h-32 rounded-md" />
        <View>
          <Text className="mb-2">{header.toUpperCase()}</Text>
          <Text className="mb-2">{authorName + " " + authorSurname}</Text>
          <View className="flex-row gap-2">
            <EvilIcons name="star" size={20} color="black" />
            <Text>{5}</Text>
          </View>
        </View>
      </View>
      <View className="justify-center">
        <View className="justify-center flex-row align-middle  ">
          <TouchableOpacity
            className="rounded-full w-8 h-8 bg-yellow-light mr-2 justify-center"
            onPress={() => console.log("eye_cliked")}
          >
            <View className="self-center">
              <EvilIcons
                name="eye"
                size={26}
                color="black"
                className="self-center"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("heart_clicked")}
            className="rounded-full bg-sky-light w-8 h-8 justify-center align-middle"
          >
            <View className="self-center">
              <Feather name="heart" size={22} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
