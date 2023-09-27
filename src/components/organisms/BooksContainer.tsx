import React from "react";
import { View, FlatList } from "react-native";
import { BooksContainerBanner } from "../molecules/BooksContainerBanner";
import { Book } from "../molecules/Book";
import { ScrollView } from "react-native-gesture-handler";

type BooksContainerProps = {
  data: any[];
  headerColor?: string;
  listColor?: string;
  headerText?: string;
  navigateToScreen?: () => void;
  isBanner?: boolean;
};

export const BooksContainer: React.FC<BooksContainerProps> = ({
  data,
  headerColor = "",
  listColor = "",
  headerText = "",
  navigateToScreen = () => null,
  isBanner = true,
}) => {
  const flatListSeparator = () => {
    return <View className="mb-4"></View>;
  };
  return (
    <View className={`w-full rounded-lg ${listColor} mb-8`}>
      {isBanner && (
        <BooksContainerBanner
          navigateToScreen={navigateToScreen}
          headerColor={headerColor}
          headerText={headerText}
        />
      )}
      <FlatList
        className="p-4"
        ItemSeparatorComponent={flatListSeparator}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Book key={item.id} {...item} />}
      />
    </View>
  );
};
