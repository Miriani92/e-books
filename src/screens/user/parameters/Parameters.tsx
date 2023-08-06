import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Button } from "../../../components";
import { handleSignOut } from "../../../store/actions/auth/authActions";
import { useAppDispatch } from "../../../hooks/app/useStore";
import { useAppSelector } from "../../../hooks/app/useStore";

export const Parameters = () => {
  const navigation = useNavigation<any>();
  const { currentUser }: any = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch<any>(handleSignOut());
  };
  const navigateToDashboard = () => {
    navigation.push("Dashboard");
  };

  return (
    <View className="flex-1 w-full align-center justify-center ">
      <Text className="text-center font-bold mb-2 ">
        User Email: {currentUser.email}
      </Text>
      <Text className="text-center font-bold mb-2 ">
        User Uid: {currentUser.uid}
      </Text>

      <Button
        isLoading={false}
        onPress={handleLogOut}
        text="SIGN OUT"
        textColor="text-white-slate"
        style="bg-sky-dark mb-2"
      />
      <Button
        isLoading={false}
        onPress={navigateToDashboard}
        text="GO TO DASBOARD"
        textColor="text-white-slate"
        style=" bg-grey-dark"
      />
    </View>
  );
};
