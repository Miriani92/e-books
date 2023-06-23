import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ErrorMessageProps = {
  errorMessage: string | undefined;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <View className="h-10 py-2 flex-row gap-2 align-middle justify-center px-4 ">
      {errorMessage && <MaterialIcons name="error" size={18} color="#f87171" />}
      <Text className=" text-red-light text-center">{errorMessage}</Text>
    </View>
  );
};
