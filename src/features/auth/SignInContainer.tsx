import React from "react";
import { SignInScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";

export const SignInContainer = () => {
  const navigation = useNavigation<any>();
  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return <SignInScreen handleNavigateToSignUp={handleNavigateToSignUp} />;
};
