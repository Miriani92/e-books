import React, { useState } from "react";
import { SignInScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";
import { FormData } from "./SignUpContainer";
import { useForm } from "../../hooks";
import { useAppDispatch } from "../../hooks/app/useStore";
import { useAppSelector } from "../../hooks/app/useStore";
import { handleSignIn } from "../../store/actions/auth";
import {
  validateEmail,
  validatePassword,
} from "../../utils/helpers/validation";

export const SignInContainer = () => {
  const [validateMessage, setValidateMessage] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState<{
    email: boolean;
    password: boolean;
  }>({ email: false, password: false });

  const { loading, error, isSigndIn } = useAppSelector<any>(
    (state) => state.auth
  );
  const dispatch: any = useAppDispatch();
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
    setIsEditing({ email: false, password: false });
    const { email, password } = data;
    await dispatch(handleSignIn({ email, password }));
    return isSigndIn;
  }
  const handleValidateEmail = (email: string) => {
    !validateEmail(email)
      ? setValidateMessage((state) => {
          return { ...state, email: "Email is incorrect" };
        })
      : setValidateMessage((state) => {
          return { ...state, email: "" };
        });
  };

  const handleValidatePassword = (password: string) => {
    !validatePassword(password)
      ? setValidateMessage((state) => {
          return { ...state, password: "Password is incorrect" };
        })
      : setValidateMessage((state) => {
          return { ...state, password: "" };
        });
  };

  return (
    <SignInScreen
      handleNavigateToSignUp={handleNavigateToSignUp}
      formData={formData}
      isLoading={loading}
      errorMessage={error}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      hanldeValidateEmail={handleValidateEmail}
      hanldeValidatePassword={handleValidatePassword}
      validateMessage={validateMessage}
      isSignedIn={isSigndIn}
    />
  );
};
