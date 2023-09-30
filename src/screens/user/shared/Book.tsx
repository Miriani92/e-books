import React from "react";
import { useAppSelector } from "../../../hooks/app/useStore";
import { View, Text } from "react-native";
import { Button } from "../../../components";
import type { CurrentReadingBookProps } from "../../../store/reducers/currentReadingBook";
import { useNavigation } from "@react-navigation/native";
import Pdf from "react-native-pdf";

export const Book = () => {
  const book = useAppSelector(
    (state) => (state.currentBook as CurrentReadingBookProps)?.payload
  );
  // const pdfSource = { uri: book.storedPdfUrl, cache: true };

  const navigation = useNavigation<any>();

  const navigateBack = () => {
    navigation.goBack();
  };
  console.log("current_book", book);

  return (
    <View className="flex-1 bg-grey-light align-middle justify-center">
      {/* <Pdf
        source={pdfSource}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
      /> */}
      <Button
        text="GO BACK"
        textColor="text-white-slate"
        style="bg-pink-dark"
        onPress={navigateBack}
      />
    </View>
  );
};
