import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type CategoryButtonProps = {
  buttonText: string;
  setSearchWord: (word: string) => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  buttonText,
  setSearchWord,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const activeStyle = active ? "bg-amber-400" : "";
  const handlePress = () => {
    setActive((a) => !a);
    setSearchWord(buttonText);
  };
  return (
    <TouchableOpacity
      className={`border-2 rounded-lg mb-2 border-amber-400 h-10 justify-center w-28  p-2  ${activeStyle}`}
      onPress={handlePress}
    >
      <Text className="self-center">{buttonText}</Text>
    </TouchableOpacity>
  );
};
