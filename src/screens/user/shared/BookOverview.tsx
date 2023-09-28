import React, { useEffect } from "react";
import { Image } from "expo-image";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button } from "../../../components";
import { useAppDispatch } from "../../../hooks/app/useStore";
import { addBook } from "../../../store/actions/readingList";
import { useAppSelector } from "../../../hooks/app/useStore";
import type { AddBookPayload as Book } from "../../../store/actions/addBook";

export const BookOverview = () => {
  const {
    id,
    header,
    authorName,
    authorSurname,
    storedCoverImageUrl,
    storedPdfUrl,
    category,
  } = useRoute().params as Book;

  const readingList = useAppSelector((state) => state.currentBook.payload);
  const dispatch: any = useAppDispatch();
  const isInMyReadingList = readingList.some((item) => item.id === id);
  const firstButtonText = isInMyReadingList ? "Continue Reading" : "Pick Book";

  const author = authorName + " " + authorSurname;
  const handlePickBookPressed = async () => {
    if (!isInMyReadingList) {
      dispatch(
        addBook({
          id,
          header,
          authorName,
          authorSurname,
          storedCoverImageUrl,
          storedPdfUrl,
          category,
        })
      );
    }
    // implement else and  set current reading boook
  };
  const handlePreviewBookPressed = () => {
    return;
  };

  return (
    <View className="w-11/12 self-center pt-4 justify-center">
      <Image
        source={storedCoverImageUrl}
        className="h-52 w-32 rounded-xl self-center mb-4"
        contentFit="cover"
      />
      <Text className="self-center text-center text-  mb-2">{header}</Text>
      <Text className="self-center text-center mb-2">{author}</Text>
      <View className="my-4 self-center w-full flex-row justify-around">
        <Button
          style="w-40  h-10  bg-emerald-400 "
          text={firstButtonText}
          textStyle="text-xs"
          iconSize={18}
          icon="feather"
          iconColor="yellow"
          onPress={handlePickBookPressed}
        />
        <Button
          style="w-40 h-10  bg-amber-300 "
          text="Preview Book"
          textStyle="text-xs"
          icon="eye"
          iconColor="blue"
          iconSize={18}
        />
      </View>
    </View>
  );
};
