import React from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppSelector } from "../../../hooks/app/useStore";
import { useNavigation } from "@react-navigation/native";
import { ScreenContainer } from "../../../components";
import { SeeAllButton } from "../../../components";
import { BookCarousel } from "../../../components";
import { myAudibleBooksData } from "../../../constants/data";
import { ExploreBanner } from "../../../components";
import { Chart } from "../../../components";
import { BookOfTheDayComponent } from "../../../components";

export const Listen = () => {
  const chartData = useAppSelector((state) => state.readerChart);
  const navigation = useNavigation<any>();
  const handleNavigateMyAudibleBooks = () => {
    navigation.push("MyAudibleBooks");
  };
  const handleNavigateNewBooks = () => {
    navigation.push("NewBooks");
  };
  return (
    <ScrollView>
      <ScreenContainer>
        <Text className="text-large mt-4 mb-2">MY AUDIBLE BOOKS</Text>
        <View className="flex-row w-full justify-between">
          <View className="self-center">
            <SeeAllButton
              handlePress={handleNavigateMyAudibleBooks}
              textColor="text-blue-light"
              iconColor="#60a5fa"
            />
          </View>
          <TouchableOpacity
            onPress={handleNavigateNewBooks}
            className="w-6 h-6 rounded-lg self-center bg-green-light"
          >
            <View className="self-center align-middle justify-center">
              <AntDesign name="plus" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <BookCarousel data={myAudibleBooksData} />
        <ExploreBanner />
        <Chart data={chartData} />
        <BookOfTheDayComponent />
      </ScreenContainer>
    </ScrollView>
  );
};
