import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FormInput } from "../../components/atoms/FormInput";
import { Button } from "../../components";

type SignInProps = {
  handleNavigateToSignUp: () => void;
};

export const SignIn: React.FC<SignInProps> = ({ handleNavigateToSignUp }) => {
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <FormInput placeHolder="Email" style="mt-4" icon="mail" />
      <FormInput placeHolder="Password" style="mt-4" icon="ios-lock-closed" />
      <Button
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        icon={"chevron-right"}
      />
      <View className="flex-row mt-4 align-middle justify-center ">
        <Text className="text-center  mr-4 text-base">New member?</Text>
        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <Text className="text-blue-dark text-base">Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
