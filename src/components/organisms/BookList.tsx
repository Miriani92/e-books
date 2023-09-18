import React from "react";
import { Text } from "react-native";
import { View, FlatList } from "react-native";
import { Book } from "../molecules/Book";
import type { AddBookPayload } from "../../store/actions/addBook";

type BookListProps = {
  data: AddBookPayload[];
};

export const BookList: React.FC<BookListProps> = ({ data }) => {
  return (
    <FlatList
      className="w-11/12 self-center py-4"
      ItemSeparatorComponent={() => <View className="h-2 "></View>}
      data={data}
      keyExtractor={(item: any) => item.header}
      renderItem={({ item }) => {
        const author = item.authorName + " " + item.authorSurname;
        const title = item.header;
        return <Book author={author} title={title} />;
      }}
    />
  );
};
