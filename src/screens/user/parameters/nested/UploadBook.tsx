import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../components";
import { Input } from "../../../../components/dashboard/Input";
import { getDocumentAsync } from "expo-document-picker";
import { useAppSelector } from "../../../../hooks/app/useStore";
import { handleFbStorageUpload as uploadPdfToDatabse } from "../../../../store/utils/auth.utils";

type InputProps = {
  header: string;
  book: any;
};

export const UploadBook = () => {
  const [state, setState] = useState<InputProps>({ header: "", book: null });
  const { currentUser }: any = useAppSelector((state) => state.auth);
  console.log("currnet__", currentUser);
  const handleChange = async (e: any, name: string) => {
    setState((state: InputProps) => {
      return { ...state, header: name };
    });
  };

  const handlePickBook = async () => {
    try {
      const response: any = await getDocumentAsync();
      const storedPdfUrl = await uploadPdfToDatabse(
        response.uri,
        currentUser.displayName
      );
      // we got pdf url and we need link mybooks node
    } catch (error) {
      console.log("error", error);
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
