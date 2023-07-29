import React from "react";
import { auth } from "../../utils/firebase";
import { View, Text } from "react-native";
import { Button } from "../../components";
import { handleSignOut } from "../../store/actions/auth/authActions";
import { useAppDispatch } from "../../hooks/app/useStore";

export const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const email = auth.currentUser.email;
  const s = () => {
    dispatch(handleSignOut());
  };

  return (
    <View className="flex-1 w-full align-center justify-center ">
      <Text className="text-center font-bold mb-2 ">
        This user signed: {email}
      </Text>
      <Button
        isLoading={false}
        onPress={s}
        text="SIGN OUT"
        textColor="text-white-slate"
        style=" bg-sky-dark"
      />
    </View>
  );
};
