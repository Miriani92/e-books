import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "../../../components";
import { UserWall } from "../../../components";

type ParametersProps = {
  navigateToDashboard: () => void;
  handleSignOut: () => void;
  currentUser: {
    displayName: string;
    email: string;
    uid: string;
    photoURL: any;
  };
  streak: number;
  readTime: string;
  navigateToUserInfo: () => void;
};

export const Parameters: React.FC<ParametersProps> = ({
  navigateToDashboard,
  handleSignOut,
  currentUser,
  streak,
  readTime,
  navigateToUserInfo,
}) => {
  const { displayName: name, photoURL } = currentUser;

  return (
    <ScrollView className="flex-1 w-full align-center ">
      <UserWall
        userName={name}
        streak={streak}
        readTime={readTime}
        photoURL={photoURL}
        navigateToUserInfo={navigateToUserInfo}
      />
      {/* <Text className="text-center font-bold mb-2 ">
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
      /> */}
    </ScrollView>
  );
};
