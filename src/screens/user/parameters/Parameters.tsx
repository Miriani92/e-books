import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../../components";
import { UserWall } from "../../../components";

export const Parameters: React.FC<any> = ({
  navigateToDashboard,
  handleSignOut,
  currentUser,
}) => {
  return (
    <View className="flex-1 w-full align-center justify-center">
      <UserWall />
      <Text className="text-center font-bold mb-2 ">
        User Email: {currentUser.email}
      </Text>
      <Text className="text-center font-bold mb-2 ">
        User Uid: {currentUser.uid}
      </Text>

      <Button
        isLoading={false}
        onPress={handleSignOut}
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
