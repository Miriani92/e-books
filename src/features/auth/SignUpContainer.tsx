import React, { useState } from "react";
import { UseFormProps } from "../../hooks/forms/useForm";
import { SignUpScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../hooks/app/useStore";
import { onRegister } from "../../store/actions/auth/auth";
import {
  validateEmail,
  validatePassword,
} from "../../utils/helpers/validation";

export type FormData = Omit<UseFormProps, "handleOnSubmit"> & {
  onSubmit: (e: any) => void;
  onInputChange: (value: string, name: string) => void;
};

export const SignUpContainer = () => {
  const [validateMessage, setValidateMessage] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState<{
    name: boolean;
    email: boolean;
    password: boolean;
  }>({ name: false, email: false, password: false });

  const formData: FormData = useForm({
    name: "",
    email: "",
    password: "",
    handleOnSubmit,
  });
  const { loading, error, isSigndIn }: any = useAppSelector(
    (state) => state.auth
  );
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  async function handleOnSubmit(data: {
    name: string;
    email: string;
    password: string;
    imageURI: any;
  }) {
    setIsEditing({ name: false, email: false, password: false });
    const { name, email, password, imageURI } = data;
    await dispatch<any>(onRegister({ name, email, password, imageURI }));
    return isSigndIn;
  }
  const handleNavigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

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

  const handleValidateName = (name: string) => {
    name.length < 2
      ? setValidateMessage((state) => {
          return { ...state, name: "Name is too short" };
        })
      : setValidateMessage((state) => {
          return { ...state, name: "" };
        });
  };

  return (
    <SignUpScreen
      handleNavigateToSignIn={handleNavigateToSignIn}
      formData={formData}
      isLoading={loading}
      errorMessage={error}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      hanldeValidateEmail={handleValidateEmail}
      hanldeValidatePassword={handleValidatePassword}
      handleValidateName={handleValidateName}
      validateMessage={validateMessage}
      isSignedIn={isSigndIn}
    />
  );
};
