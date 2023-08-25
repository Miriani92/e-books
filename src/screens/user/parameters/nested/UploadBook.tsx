import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../components";
import { Input } from "../../../../components/dashboard/Input";
import { getDocumentAsync } from "expo-document-picker";
import { useAppSelector } from "../../../../hooks/app/useStore";
import { handleFbStorageUpload as uploadPdfToDatabse } from "../../../../store/utils/auth.utils";

type InputProps = {
  header: string;
  author: string;
};

export const UploadBook = () => {
  const [state, setState] = useState<InputProps>({ header: "", author: "" });
  const [{ loading }, setOnLoading] = useState<{
    loading: boolean;
  }>({ loading: false });
  const { currentUser }: any = useAppSelector((state) => state.auth);

  const handleChange = (value: string, name: string) => {
    setState((state: InputProps) => {
      return { ...state, [name]: value };
    });
  };

  const handlePickBook = async () => {
    try {
      const response: any = await getDocumentAsync();
      setOnLoading({ loading: true });
      const storedPdfUrl = await uploadPdfToDatabse(
        response.uri,
        currentUser.displayName
      );
      setOnLoading({ loading: false });
      setState({ header: "", author: "" });
    } catch (error) {
      setOnLoading({ loading: false });
      console.log("error", error);
    }
  };

  return (
    <View className="w-11/12 self-center py-4  relative">
      <Text className="self-center">ADD THE BOOK</Text>
      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={state.header}
        onChange={(value) => handleChange(value, "header")}
        placeHolder="Header"
        type="name"
      />
      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={state.author}
        onChange={(value) => handleChange(value, "author")}
        placeHolder="Author"
        type="name"
      />
      <Button
        text="Add Book"
        style="bg-green"
        onPress={handlePickBook}
        isLoading={loading}
        isDisabled={state.header && state.author ? false : true}
      />
    </View>
  );
};
