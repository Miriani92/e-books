import React, { useState } from "react";
import { FormData } from "../../features/auth/SignUpContainer";
import { TouchableOpacity, Keyboard } from "react-native";
import { View, Text } from "react-native";
import { FormInput } from "../../components";
import { Button } from "../../components";
import { ErrorMessage } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

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
  const [imageURI, setImageURI] = useState<any>("");
  const { name, email, password, onInputChange, onSubmit } = formData;

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageURI(result?.assets[0]?.uri);
      Keyboard.dismiss();
    }
  };

  const isFieldsValidated =
    validateMessage.email.length < 1 &&
    email.length > 0 &&
    validateMessage.password.length < 1 &&
    password.length > 0 &&
    validateMessage.name.length < 1 &&
    name.length > 0;

  const showOnSubmitError =
    errorMessage && !isSignedIn && !fieldIsTouched && !isLoading;

  const onSubmitError = showOnSubmitError && email.length > 1 && errorMessage;
  const nameError =
    validateMessage.name && !isEditing.name && validateMessage.name;
  const emailError =
    validateMessage.email && !isEditing.email && validateMessage.email;
  const passwordError =
    validateMessage.password && !isEditing.password && validateMessage.password;
  const errorProps = onSubmitError || emailError || passwordError || nameError;

  return (
    <View className="flex-1 w-11/12 align-middle justify-center  self-center">
      <ErrorMessage errorMessage={errorProps} />
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

      {/* {validateMessage.name && !isEditing.name && (
        <ErrorMessage errorMessage={validateMessage.name} />
      )} */}
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
      <TouchableOpacity
        onPress={handleImagePick}
        className="w-12 h-12 rounded-full mt-4  self-center bg-grey-dark justify-center"
      >
        <View className="self-center align-middle justify-center">
          <Ionicons name="image" size={28} color="white" />
        </View>
      </TouchableOpacity>

      <Button
        isDisabled={!isFieldsValidated}
        text="NEXT"
        style="bg-blue-dark mt-16"
        textColor="text-white-slate"
        icon={"chevron-right"}
        isLoading={isLoading}
        onPress={() => {
          onSubmit({
            name,
            email,
            password,
            imageURI,
          });
          setIsFieldTouched(false);
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
