import React, { useState } from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../../../components";
import { bookCategories } from "../../../../constants/data";
import { PickerInput } from "../../../../components";
import { Input } from "../../../../components/dashboard/Input";
import { getDocumentAsync } from "expo-document-picker";
import { useAppSelector } from "../../../../hooks/app/useStore";
import { useAppDispatch } from "../../../../hooks/app/useStore";
import { onAddBook } from "../../../../store/actions/addBook";
import { handleFbStorageUpload as uploadToStorage } from "../../../../store/utils/auth.utils";
import * as ImagePicker from "expo-image-picker";

type InputProps = {
  header: string;
  authorName: string;
  authorSurname: string;
  category: string;
  coverUrl: any;
};

export const UploadBook = () => {
  const [isPickerActive, setIsPickerActive] = useState<boolean>(false);
  const [{ authorName, category, authorSurname, header, coverUrl }, setBook] =
    useState<InputProps>({
      header: "",
      authorName: "",
      authorSurname: "",
      category: "",
      coverUrl: "",
    });
  const [{ loading }, setOnLoading] = useState<{
    loading: boolean;
  }>({ loading: false });

  const { currentUser }: any = useAppSelector((state) => state.auth);
  const dispatch: any = useAppDispatch();

  const handlePickCover = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const url = result?.assets[0]?.uri;
      setBook((state) => ({ ...state, coverUrl: url }));
      Keyboard.dismiss();
    }
  };

  const handleChange = (value: string, name: string) => {
    setBook((state: InputProps) => {
      return { ...state, [name]: value };
    });
  };

  const handlePickBook = async () => {
    try {
      const response: any = await getDocumentAsync();
      setOnLoading({ loading: true });
      const storedPdfUrl = await uploadToStorage(
        response.uri,
        currentUser.displayName
      );

      // needs to handle eroror properly
      const storedCoverImageUrl = await uploadToStorage(coverUrl, null);

      const bookData = {
        header: header?.toLowerCase().trim(),
        authorName: authorName?.toLowerCase().trim(),
        authorSurname: authorSurname?.toLowerCase().trim(),
        category: category?.toLowerCase().trim(),
        storedPdfUrl,
        storedCoverImageUrl,
      };

      dispatch(onAddBook(bookData));

      setOnLoading({ loading: false });
      setBook({
        header: "",
        authorName: "",
        category: "",
        authorSurname: "",
        coverUrl: "",
      });
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
      <PickerInput
        data={bookCategories}
        onChangeHanlder={(value: any) => handleChange(value, "category")}
        placeHolder="Category"
        value={category}
        isActive={isPickerActive}
        setPicker={(value: boolean) => setIsPickerActive(value)}
      />
      <TouchableOpacity
        onPress={handlePickCover}
        className="w-12 h-12 rounded-full mt-4  self-center bg-grey-dark justify-center"
      >
        <View className="self-center align-middle justify-center">
          <Ionicons name="image" size={28} color="white" />
        </View>
      </TouchableOpacity>
      <Button
        text="Add Book"
        style="bg-green mt-2"
        onPress={handlePickBook}
        isLoading={loading}
        isDisabled={
          header && authorName && authorSurname && category ? false : true
        }
      />
    </View>
  );
};
