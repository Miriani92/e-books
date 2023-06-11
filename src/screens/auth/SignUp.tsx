import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { FormInput } from "../../components";
import { Button } from "../../components";

type SignUpProps = {
  handleNavigateToSignIn: () => void;
};

export const SignUp: React.FC<SignUpProps> = ({ handleNavigateToSignIn }) => {
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <FormInput placeHolder="Name" style="mt-4" icon="person" />
      <FormInput placeHolder="Email" style="mt-4" icon="mail" />
      <FormInput placeHolder="Password" style="mt-4" icon="ios-lock-closed" />
      <Button
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        icon={"chevron-right"}
      />
      <View className="flex-row mt-4 align-middle justify-center ">
        <Text className="text-center  mr-4 text-base">Already a memeber?</Text>
        <TouchableOpacity onPress={handleNavigateToSignIn}>
          <Text className="text-blue-dark text-base">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
