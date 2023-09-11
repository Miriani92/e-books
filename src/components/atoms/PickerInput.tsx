import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-gesture-handler";
import { Modal } from "react-native";

export type DataProps = {
  label: string;
  value: string;
};
export type PickerProps = {
  isActive: boolean;
  data: DataProps[];
  onChangeHanlder(value: string): void;
  placeHolder: string;
  setPicker(value: boolean): void;
  value: string;
};
export const PickerInput: React.FC<PickerProps> = ({
  data,
  onChangeHanlder,
  isActive = false,
  placeHolder,
  setPicker,
  value,
}) => {
  const handleChoose = (value: string) => {
    onChangeHanlder(value);
    setPicker(false);
  };
  const handleInputTouched = () => {
    setPicker(true);
  };
  if (!isActive) {
    return (
      <View className="my-2 px-2 py-0.5 self-center bg-grey-light w-72 h-10 rounded-md">
        <TextInput
          className="w-auto h-full text-lg leading-5"
          value={value}
          autoCapitalize="none"
          placeholder={placeHolder}
          onTouchStart={handleInputTouched}
        />
      </View>
    );
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={false}
      visible={isActive}
    >
      <View className="w-full h-full self-center justify-center bg-slate-400">
        <Picker onValueChange={(itemValue: string) => handleChoose(itemValue)}>
          {data.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.label} value={item.value} />
            );
          })}
        </Picker>
      </View>
    </Modal>
  );
};
