import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

type BookProps = {
  imageSource: any;
  title: string;
  author: string;
  star: number;
};
export const Book: React.FC<BookProps> = ({
  imageSource,
  title,
  author,
  star: starNumber,
}) => {
  return (
    <View className="justify-between flex-row mb-4">
      <View className="flex-row gap-2">
        <Image source={imageSource} className="w-20 h-32 rounded-md" />
        <View>
          <Text className="mb-2">{title.toUpperCase()}</Text>
          <Text className="mb-2">{author}</Text>
          <View className="flex-row gap-2">
            <EvilIcons name="star" size={20} color="black" />
            <Text>{starNumber}</Text>
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
