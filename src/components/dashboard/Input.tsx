import { View, TextInput } from "react-native";
import React from "react";

export const Input: React.FC<any> = (props) => {
  const { value, onChange, placeHolder, type, style } = props;
  return (
    <View className={`${style} px-2 py-0.5 mt-2 align-middle justify-start`}>
      <TextInput
        value={value}
        autoCapitalize="none"
        secureTextEntry={type && type === "password"}
        onChangeText={onChange}
        placeholder={placeHolder}
        className="w-auto h-full text-lg leading-5"
      />
    </View>
  );
};
