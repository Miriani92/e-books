import React from "react";
import { Text, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenContainer } from "../../../components";
import { SeeAllButton } from "../../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { BookCarousel } from "../../../components";
import { ExploreBanner } from "../../../components";
import { Chart } from "../../../components";
import { useAppSelector } from "../../../hooks/app/useStore";
import { BookOfTheDayComponent } from "../../../components";

export const Read = () => {
  const chartData = useAppSelector((state) => state.readerChart);
  const books = useAppSelector((state) => state.readingList.payload);
  const navigation = useNavigation<any>();
  const handleNavigateMyBooks = () => {
    navigation.push("ReadingList");
  };
  const hanldeNavigateNewBooks = () => {
    navigation.push("NewBooks");
  };
  return (
    <ScrollView>
      <ScreenContainer>
        <Text className="text-large mt-4 mb-2">ReadingList</Text>
        <View className="flex-row w-full justify-between">
          <View className="self-center">
            <SeeAllButton
              handlePress={handleNavigateMyBooks}
              textColor="text-blue-light"
              iconColor="#60a5fa"
            />
          </View>
          <TouchableOpacity
            onPress={hanldeNavigateNewBooks}
            className="w-6 h-6 rounded-lg self-center bg-green-light"
          >
            <View className="self-center align-middle justify-center">
              <AntDesign name="plus" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <BookCarousel data={books} />
        <ExploreBanner />
        <Chart data={chartData} />
        <BookOfTheDayComponent />
      </ScreenContainer>
    </ScrollView>
  );
};
