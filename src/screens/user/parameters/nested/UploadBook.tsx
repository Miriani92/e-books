import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../components";
import { Input } from "../../../../components/dashboard/Input";
import { getDocumentAsync } from "expo-document-picker";
import { useAppSelector } from "../../../../hooks/app/useStore";
import { useAppDispatch } from "../../../../hooks/app/useStore";
import { onAddBook } from "../../../../store/actions/addbook/addBook";
import { handleFbStorageUpload as uploadPdfToDatabse } from "../../../../store/utils/auth.utils";

type InputProps = {
  header: string;
  authorName: string;
  authorSurname: string;
  category: string;
};

export const UploadBook = () => {
  const [{ authorName, category, authorSurname, header }, setBook] =
    useState<InputProps>({
      header: "",
      authorName: "",
      authorSurname: "",
      category: "",
    });
  const [{ loading }, setOnLoading] = useState<{
    loading: boolean;
  }>({ loading: false });

  const { currentUser }: any = useAppSelector((state) => state.auth);
  const dispatch: any = useAppDispatch();

  const handleChange = (value: string, name: string) => {
    setBook((state: InputProps) => {
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

      dispatch(
        onAddBook({ header, authorName, authorSurname, category, storedPdfUrl })
      );
      setOnLoading({ loading: false });
      setBook({ header: "", authorName: "", category: "", authorSurname: "" });
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
        value={header}
        onChange={(value) => handleChange(value, "header")}
        placeHolder="Header"
        type="name"
      />
      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={authorName}
        onChange={(value) => handleChange(value, "authorName")}
        placeHolder="Authorname"
        type="name"
      />
      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={authorSurname}
        onChange={(value) => handleChange(value, "authorSurname")}
        placeHolder="Authorsurname "
        type="name"
      />

      <Input
        style="mb-2 self-center bg-grey-light w-72 h-10 rounded-md"
        value={category}
        onChange={(value) => handleChange(value, "category")}
        placeHolder="Category"
        type="name"
      />

      <Button
        text="Add Book"
        style="bg-green"
        onPress={handlePickBook}
        isLoading={loading}
        isDisabled={
          header && authorName && authorSurname && category ? false : true
        }
      />
    </View>
  );
};
