import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { bestSellingBooksData } from "../../constants/data";
import { SeeAllButton } from "../atoms/SeeAllButton";

export const BookOfTheDayComponent = () => {
  const { id, author, title, imageSource, star } = bestSellingBooksData[0];
  const navigation = useNavigation<any>();
  const handleNavigateToBookOfTheDay = () => {
    navigation.push("BookOfTheDay");
  };
  return (
    <TouchableOpacity
      onPress={() => console.log("Book Of The Day Pressed")}
      className="w-full p-4 h-96 bg-white-slate rounded-lg mb-8"
    >
      <Text>BOOK OF THE DAY</Text>
      <SeeAllButton
        textColor="text-blue-light"
        iconColor="#60a5fa"
        handlePress={handleNavigateToBookOfTheDay}
      />
      <View className="mt-4 w-full">
        <Image
          source={imageSource}
          className="w-28 h-52 rounded-md self-center mb-2"
          resizeMode="cover"
        />
        <Text className="self-center mb-2">{author}</Text>
        <Text className="self-center mb-2 ">{title}</Text>
        <View className="flex-row self-center mb-2">
          <EvilIcons name="star" size={20} color="black" />
          <Text>{star}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
