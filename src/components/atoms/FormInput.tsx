import React from "react";
import { TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type InputProps = {
  name: string;
  placeHolder?: string;
  style?: string;
  icon?: any;
  value: string;
  handleTextChange: (value: string, name: string) => void;
};

export const FormInput: React.FC<InputProps> = ({
  name,
  placeHolder,
  style,
  icon = false,
  value,
  handleTextChange,
}) => {
  const onChange = (value: string) => {
    handleTextChange(value, name);
  };
  return (
    <View
      className={`w-5/6 h-14  bg-grey-light px-4 flex-row  bg-light-grey self-center align-middle justify-between  rounded-lg  ${style}`}
    >
      <View className="h-auto w-5/6 text-top align-middle justify-center ">
        <TextInput
          value={value}
          autoCapitalize="none"
          secureTextEntry={name === "password"}
          onChangeText={onChange}
          placeholder={placeHolder}
          className="w-auto h-auto text-lg  leading-5"
        />
      </View>
      {icon ? (
        <View className="h-auto align-middle justify-center ">
          <Ionicons name={icon} size={24} color={"grey"} />
        </View>
      ) : null}
    </View>
  );
};
