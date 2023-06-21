import React from "react";
import { UseFormProps } from "../../hooks/forms/useForm";
import { SignUpScreen } from "../../screens";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../hooks/app/useStore";
import { onRegister } from "../../store/actions/auth/authActions";

export type FormData = Omit<UseFormProps, "handleOnSubmit"> & {
  onSubmit: (e: any) => void;
  onInputChange: (value: string, name: string) => void;
};

export const SignUpContainer = () => {
  const formData: FormData = useForm({
    name: "",
    email: "",
    password: "",
    handleOnSubmit,
  });
  const navigation = useNavigation<any>();
  const { loading, error, currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  async function handleOnSubmit(data: Omit<UseFormProps, "handleOnSubmit">) {
    const { email, password } = data;
    await dispatch(onRegister({ email, password }));
  }
  const handleNavigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SignUpScreen
      handleNavigateToSignIn={handleNavigateToSignIn}
      formData={formData}
      isLoading={loading}
    />
  );
};
