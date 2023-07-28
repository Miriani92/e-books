import { Text } from "react-native";
import { SeeAllButton } from "../atoms/SeeAllButton";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BooksContainerBanner: React.FC<any> = (props) => {
  const { headerColor, headerText, navigateToScreen } = props;
  const navigation = useNavigation<any>();
  const handleNavigateToBestSeller = () => {
    navigation.push(navigateToScreen);
  };
  return (
    <TouchableOpacity
      onPress={handleNavigateToBestSeller}
      className={`w-full  ${headerColor}  p-4 rounded-tl-lg rounded-tr-lg h-20 justify-between`}
    >
      <Text className="text-white-slate">{headerText}</Text>
      <SeeAllButton textColor="text-white-slate" iconColor="#ffffff" />
    </TouchableOpacity>
  );
};
