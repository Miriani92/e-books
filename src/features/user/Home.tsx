import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components";
import { handleSignOut } from "../../store/actions/auth/authActions";
import { useAppDispatch } from "../../hooks/app/useStore";

export const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const s = () => {
    dispatch(handleSignOut());
  };

  return (
    <View className="flex-1 w-full align-center justify-center ">
      <View className="self-center w-1/2 h-1/2 justify-center bg-green-light">
        <Text className="text-center">Hello user Navigation</Text>
        <Button
          isLoading={false}
          onPress={s}
          text="sign out"
          textColor="bg-pinck-light"
          style="w-11 h-11 bg-sky-dark"
        />
      </View>
    </View>
  );
};
