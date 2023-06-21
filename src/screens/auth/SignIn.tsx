import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FormInput } from "../../components/atoms/FormInput";
import { Button } from "../../components";
import type { FormData } from "../../features/auth/SignUpContainer";
import { useAppSelector } from "../../hooks/app/useStore";

type SignInProps = {
  handleNavigateToSignUp: () => void;
  formData: Omit<FormData, "name">;
  isLoading: boolean;
};

export const SignIn: React.FC<SignInProps> = ({
  handleNavigateToSignUp,
  formData,
  isLoading,
}) => {
  const { email, password, onInputChange, onSubmit } = formData;
  const { error } = useAppSelector((state) => state.auth);
  // console.log("error_is", error);
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <FormInput
        name="email"
        placeHolder="Email"
        style="mt-4"
        icon="mail"
        value={email}
        handleTextChange={onInputChange}
      />
      <FormInput
        name="password"
        value={password}
        placeHolder="Password"
        style="mt-4"
        handleTextChange={onInputChange}
        icon="ios-lock-closed"
      />
      <Button
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        onPress={onSubmit}
        isLoading={isLoading}
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
