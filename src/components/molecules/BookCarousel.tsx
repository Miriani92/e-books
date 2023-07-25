import { FlatList } from "react-native";
import { MyBook } from "./MyBook";
import React from "react";

export const BookCarousel: React.FC<any> = ({ data }) => {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: 8 }}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={(item) => <MyBook {...item} />}
    />
  );
};
