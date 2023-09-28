import React from "react";
import { View, FlatList, Text } from "react-native";
import { BooksContainerBanner } from "../molecules/BooksContainerBanner";
import { Book } from "../molecules/Book";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type BooksContainerProps = {
  data: any[];
  headerColor?: string;
  listColor?: string;
  headerText?: string;
  navigateToScreen?: () => void;
  isBanner?: boolean;
  isLoading?: boolean;
};

export const BooksContainer: React.FC<BooksContainerProps> = ({
  data,
  headerColor = "",
  listColor = "",
  headerText = "",
  navigateToScreen = () => null,
  isBanner = true,
  isLoading = false,
}) => {
  const navigation = useNavigation<any>();
  const handlePressOnBook = (item: any) => {
    navigation.navigate("BookOverview", { ...item });
  };
  const flatListSeparator = () => {
    return <View className="mb-4"></View>;
  };
  const listComponent = () => {
    return (
      <View className="w-full h-72 justify-center">
        <Text className="self-centere text-center">
          Choose Category And Press Filter{" "}
        </Text>
      </View>
    );
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
      {!isLoading && (
        <FlatList
          className="p-4"
          ItemSeparatorComponent={flatListSeparator}
          data={data}
          ListEmptyComponent={listComponent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePressOnBook(item)}>
              <Book key={item.id} {...item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
