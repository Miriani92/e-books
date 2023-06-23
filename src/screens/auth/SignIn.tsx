import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FormInput } from "../../components/atoms/FormInput";
import { Button } from "../../components";
import type { FormData } from "../../features/auth/SignUpContainer";
import { ErrorMessage } from "../../components";

type SignInProps = {
  handleNavigateToSignUp: () => void;
  formData: Omit<FormData, "name">;
  isLoading: boolean;
  errorMessage: string | null;
  isEditing: { email: boolean; password: boolean };
  setIsEditing: (arg: any) => void;
  hanldeValidateEmail: (arg: string) => void;
  hanldeValidatePassword: (arg: string) => void;
  validateMessage: { email: string; password: string };
  isSignedIn: boolean;
};

export const SignIn: React.FC<SignInProps> = ({
  handleNavigateToSignUp,
  formData,
  isLoading,
  errorMessage,
  isEditing,
  setIsEditing,
  hanldeValidateEmail,
  hanldeValidatePassword,
  validateMessage,
  isSignedIn,
}) => {
  const { email, password, onInputChange, onSubmit } = formData;
  const [fieldIsTouched, setIsFieldTouched] = useState(false);
  const isFieldsValidated =
    validateMessage.email.length < 1 &&
    email.length > 0 &&
    validateMessage.password.length < 1 &&
    password.length > 0;
  const showOnSubmitError =
    errorMessage && !isSignedIn && !fieldIsTouched && !isLoading;
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <ErrorMessage errorMessage={showOnSubmitError && errorMessage} />
      <FormInput
        name="email"
        placeHolder="Email"
        style="mt-4"
        icon="mail"
        value={email}
        handleTextChange={onInputChange}
        onEdit={setIsEditing}
        onValidate={hanldeValidateEmail}
        setIsTouched={setIsFieldTouched}
        isTouched={fieldIsTouched}
      />
      {validateMessage.email && !isEditing.email && (
        <ErrorMessage errorMessage={validateMessage.email} />
      )}
      <FormInput
        name="password"
        value={password}
        placeHolder="Password"
        style="mt-4"
        handleTextChange={onInputChange}
        icon="ios-lock-closed"
        onEdit={setIsEditing}
        onValidate={hanldeValidatePassword}
        setIsTouched={setIsFieldTouched}
        isTouched={fieldIsTouched}
      />
      {validateMessage.password && !isEditing.password && (
        <ErrorMessage errorMessage={validateMessage.password} />
      )}
      <Button
        isDisabled={isFieldsValidated}
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        onPress={({ email, password }) => {
          setIsFieldTouched(false);
          onSubmit({ email, password });
        }}
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
