import React, { useState } from "react";
import { FormData } from "../../features/auth/SignUpContainer";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { FormInput } from "../../components";
import { Button } from "../../components";
import { ErrorMessage } from "../../components";

type SignUpProps = {
  handleNavigateToSignIn: () => void;
  formData: FormData;
  isLoading: boolean;
  validateMessage: { name: string; email: string; password: string };
  isSignedIn: boolean;
  isEditing: { name: boolean; email: boolean; password: boolean };
  setIsEditing: (arg: any) => void;
  errorMessage: string | null;
  hanldeValidateEmail: (arg: string) => void;
  hanldeValidatePassword: (arg: string) => void;
  handleValidateName: (arg: string) => void;
};

export const SignUp: React.FC<SignUpProps> = ({
  handleNavigateToSignIn,
  formData,
  isLoading,
  validateMessage,
  errorMessage,
  isEditing,
  setIsEditing,
  hanldeValidateEmail,
  hanldeValidatePassword,
  handleValidateName,
  isSignedIn,
}) => {
  const [fieldIsTouched, setIsFieldTouched] = useState(false);
  const { name, email, password, onInputChange, onSubmit } = formData;

  const isFieldsValidated =
    validateMessage.email.length < 1 &&
    email.length > 0 &&
    validateMessage.password.length < 1 &&
    password.length > 0 &&
    validateMessage.name.length < 1 &&
    name.length > 0;

  const showOnSubmitError =
    errorMessage && !isSignedIn && !fieldIsTouched && !isLoading;
  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <ErrorMessage errorMessage={showOnSubmitError && errorMessage} />
      <FormInput
        name="name"
        placeHolder="Name"
        style="mt-4"
        icon="person"
        value={name}
        handleTextChange={onInputChange}
        onEdit={setIsEditing}
        onValidate={handleValidateName}
        setIsTouched={setIsFieldTouched}
        isTouched={fieldIsTouched}
      />

      {validateMessage.name && !isEditing.name && (
        <ErrorMessage errorMessage={validateMessage.name} />
      )}
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
        placeHolder="Password"
        style="mt-4"
        icon="ios-lock-closed"
        value={password}
        handleTextChange={onInputChange}
        onEdit={setIsEditing}
        onValidate={hanldeValidatePassword}
        setIsTouched={setIsFieldTouched}
        isTouched={fieldIsTouched}
      />
      {validateMessage.password && !isEditing.password && (
        <ErrorMessage errorMessage={validateMessage.password} />
      )}

      <Button
        isDisabled={!isFieldsValidated}
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        icon={"chevron-right"}
        isLoading={isLoading}
        onPress={({ name, email, password }) => {
          setIsFieldTouched(false);
          onSubmit({ name, email, password });
        }}
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
