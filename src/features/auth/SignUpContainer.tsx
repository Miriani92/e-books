import React from "react";
import { SignUpScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";

export const SignUpContainer = () => {
  const navigation = useNavigation<any>();
  const handleNavigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return <SignUpScreen handleNavigateToSignIn={handleNavigateToSignIn} />;
};
