import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../components";
import { Input } from "../../../../components/dashboard/Input";
import { getDocumentAsync } from "expo-document-picker";

type InputProps = {
  header: string;
  bookURI: any;
};

export const UploadBook = () => {
  const [state, setState] = useState<InputProps>({ header: "", bookURI: null });
  const handleChange = async (e: any, name: string) => {
    setState((state: InputProps) => {
      return { ...state, header: name };
    });
  };

  const handlePickBook = async () => {
    try {
      const pdf: any = await getDocumentAsync();
      console.log("pdfBook__", pdf.uri);
      setState((state: InputProps) => {
        return { ...state, bookURI: pdf.uri };
      });
    } catch (error) {
      console.log("error__", error);
    }
  };

  return (
    <View className="w-11/12 self-center py-4 ">
      <Text className="self-center">ADD THE BOOK</Text>

      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={state.header}
        onChange={(e) => handleChange(e, "header")}
        placeHolder="Header"
        type="name"
      />
      <Button text="Add Book" style="bg-green" onPress={handlePickBook} />
    </View>
  );
};
