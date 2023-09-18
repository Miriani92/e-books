import React from "react";
import { useAppSelector } from "../../../hooks/app/useStore";
import { View, Text } from "react-native";
import { BookList } from "../../../components";

export const Search = () => {
  const { payload: recentUploadedBooks } = useAppSelector(
    (state) => state.allBooks
  );
  return (
    <View className="flex-1  w-full py-4">
      <Text className="self-cetner text-center font-bold text-lg text-grey-dark  tracking-wide">
        Explore
      </Text>
      <View className="w-11/12  self-center mt-2 mb-8 border-t-2 border-stone-300">
        <BookList data={recentUploadedBooks} />
      </View>
    </View>
  );
};
