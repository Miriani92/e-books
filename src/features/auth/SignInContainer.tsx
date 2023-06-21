import React from "react";
import { SignInScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";
import { FormData } from "./SignUpContainer";
import { useForm } from "../../hooks";
import { useAppDispatch } from "../../hooks/app/useStore";
import { useAppSelector } from "../../hooks/app/useStore";
import { handleSignIn } from "../../store/actions/auth/authActions";

export const SignInContainer = () => {
  const { loading, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const formData: Omit<FormData, "name"> = useForm({
    email: "",
    password: "",
    handleOnSubmit,
  });
  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  async function handleOnSubmit(data: { email: string; password: string }) {
    const { email, password } = data;
    dispatch(handleSignIn({ email, password }));
  }

  return (
    <SignInScreen
      handleNavigateToSignUp={handleNavigateToSignUp}
      formData={formData}
      isLoading={loading}
    />
  );
};
