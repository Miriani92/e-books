import React from "react";
import { Text, TouchableOpacity } from "react-native";
type AddBookProps = {
  onAddBookClick(): void;
};
export const AddTheBook: React.FC<AddBookProps> = ({ onAddBookClick }) => {
  const onPress = () => {
    onAddBookClick();
  };
  return (
    <TouchableOpacity
      className="w-11/12 self-center h-9 bg-amber-400 justify-center rounded-lg mt-4"
      onPress={onPress}
    >
      <Text className="self-center">ADD BOOK</Text>
    </TouchableOpacity>
  );
};
