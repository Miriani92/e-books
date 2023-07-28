import React from "react";
import { View, FlatList } from "react-native";
import { BooksContainerBanner } from "../molecules/BooksContainerBanner";
import { Book } from "../molecules/Book";

export const BooksContainer: React.FC<any> = (props) => {
  const { data, headerColor, listColor, headerText, navigateToScreen }: any =
    props;

  const flatListSeparator = () => {
    return <View className="mb-4"></View>;
  };
  return (
    <View className={`w-full   rounded-lg ${listColor} mb-8`}>
      <BooksContainerBanner
        navigateToScreen={navigateToScreen}
        headerColor={headerColor}
        headerText={headerText}
      />
      <View className="p-4">
        <FlatList
          ItemSeparatorComponent={flatListSeparator}
          data={data}
          keyExtractor={(item: any) => item.id}
          snapToInterval={330}
          decelerationRate={0}
          renderItem={({ item }) => <Book key={item.id} {...item} />}
        />
      </View>
    </View>
  );
};
