import React from "react";
import { View } from "react-native";
import { FormInput } from "../../components/atoms/FormInput";

export const SignUp = () => {
  return (
    <View className="gap-2 w-11/12 align-middle justify-center  self-center bg-green-light">
      <FormInput />
      <FormInput />
      <FormInput />
    </View>
  );
};
