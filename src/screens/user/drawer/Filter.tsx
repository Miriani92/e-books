import { useReducer } from "react";
import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../../components";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "title_right":
      return {
        byAuthor: { left: false, right: false },
        byTitle: { left: false, right: true },
      };
    case "title_left":
      return {
        byAuthor: { left: false, right: false },
        byTitle: { left: true, right: false },
      };
    case "author_left":
      return {
        byAuthor: { left: true, right: false },
        byTitle: { left: false, right: false },
      };
    case "author_right":
      return {
        byAuthor: { left: false, right: true },
        byTitle: { left: false, right: false },
      };
  }
};

export const Filter: any = (props: {
  navigation: { closeDrawer: () => void };
}) => {
  const [{ byTitle, byAuthor }, dispatch] = useReducer<any>(reducer, {
    byTitle: { left: true, right: false },
    byAuthor: { left: false, right: false },
  });
  const sortByTitle = "SORT BY TITLE";
  const sortByAuthor = "SORT BY AUTHOR";

  const handleSortButtonPressed = (action: string) => {
    dispatch({ type: action });
  };

  const handleCloseDrawer = () => {
    props.navigation.closeDrawer();
  };
  return (
    <SafeAreaView className="flex-1  self-center  align-middle w-full justify-start bg-grey-light">
      <View className="flex-row  self-center align-middle justify-between w-11/12">
        <View className="flex-row w-36  align-middle justify-between">
          <View className="self-center">
            <MaterialIcons name="settings-ethernet" size={28} color="grey" />
          </View>
          <Text className="self-center text-base">FILTER</Text>
        </View>
        <TouchableOpacity onPress={handleCloseDrawer}>
          <AntDesign name="close" size={24} color="grey" />
        </TouchableOpacity>
      </View>
      <View className="mt-12 mb-6 w-11/12 self-center">
        <Text>{sortByTitle}</Text>
      </View>
      <View className="flex-row  align-middle self-center justify-around w-11/12">
        <Button
          onPress={() => handleSortButtonPressed("title_left")}
          text="A-H"
          textColor="text-grey-dark"
          style={`rounded-3xl w-1/3 h-10 ${
            byTitle.left ? " bg-green-light" : "border-2 border-grey-dark"
          }`}
        />
        <Button
          onPress={() => handleSortButtonPressed("title_right")}
          text="H-A"
          textColor="text-grey-dark"
          style={`rounded-3xl w-1/3 h-10 ${
            byTitle.right ? " bg-green-light" : "border-2 border-grey-dark"
          }`}
        />
      </View>
      <View className="mt-12 mb-6 w-11/12 self-center">
        <Text>{sortByAuthor}</Text>
      </View>
      <View className="flex-row  align-middle self-center justify-around w-11/12">
        <Button
          onPress={() => handleSortButtonPressed("author_left")}
          text="A-H"
          textColor="text-grey-dark"
          style={`rounded-3xl w-1/3 h-10 ${
            byAuthor.left ? " bg-green-light" : "border-2 border-grey-dark"
          }`}
        />
        <Button
          onPress={() => handleSortButtonPressed("author_right")}
          text="H-A"
          textColor="text-grey-dark"
          style={`rounded-3xl w-1/3 h-10 ${
            byAuthor.right ? " bg-green-light" : "border-2 border-grey-dark"
          }`}
        />
      </View>
      <View className="mt-12">
        <Button
          onPress={() => console.log("sorted")}
          text="S O R T"
          textColor="text-white-slate"
          style="rounded-2xl w-18 bg-sky-light h-12"
        />
      </View>
    </SafeAreaView>
  );
};
