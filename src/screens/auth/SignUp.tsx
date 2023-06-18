import React from "react";
import { FormData } from "../../features/auth/SignUpContainer";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { FormInput } from "../../components";
import { Button } from "../../components";

type SignUpProps = {
  handleNavigateToSignIn: () => void;
  formData: FormData;
  isLoading: boolean;
};

export const SignUp: React.FC<SignUpProps> = ({
  handleNavigateToSignIn,
  formData,
  isLoading,
}) => {
  const { name, email, password, onInputChange, onSubmit } = formData;
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <FormInput
        name="name"
        placeHolder="Name"
        style="mt-4"
        icon="person"
        value={name}
        handleTextChange={onInputChange}
      />
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
        placeHolder="Password"
        style="mt-4"
        icon="ios-lock-closed"
        value={password}
        handleTextChange={onInputChange}
      />
      <Button
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        icon={"chevron-right"}
        isLoading={isLoading}
        onPress={onSubmit}
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
