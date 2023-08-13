import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { InfoRow } from "../../../components";
import { UserWall } from "../../../components";
import { AdditionalInformation } from "../../../components";
import { infoRowsData } from "../../../constants/data";
import { ParametersModalContainer } from "../../../components";

type ParametersProps = {
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
  handleSignOut,
  currentUser,
  streak,
  readTime,
  navigateToUserInfo,
}) => {
  const [activeModalScreen, setActiveModalScreen] = useState<string>("");
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const { displayName: name, photoURL } = currentUser;

  const header = "Additional Information";

  const flatListSeparator = () => {
    return <View className="mb-4"></View>;
  };
  const handleSetModalScreen = (screen: string) => {
    setActiveModalScreen(screen);
  };

  const handleLogOut = () => {
    handleSignOut();
  };
  return (
    <ScrollView className="flex-1 w-full align-center ">
      <UserWall
        userName={name}
        streak={streak}
        readTime={readTime}
        photoURL={photoURL}
        navigateToUserInfo={navigateToUserInfo}
      />
      <AdditionalInformation header={header} />
      <FlatList
        contentContainerStyle={{ marginBottom: 32 }}
        ItemSeparatorComponent={flatListSeparator}
        data={infoRowsData}
        renderItem={({ item }) => {
          return (
            <InfoRow
              {...item}
              onPressInfoRow={handleSetModalScreen}
              setModal={setIsModalActive}
              handleLogOut={handleLogOut}
            />
          );
        }}
      />
      <ParametersModalContainer
        activeModalScreen={activeModalScreen}
        isModalActive={isModalActive}
        setModal={setIsModalActive}
      />
    </ScrollView>
  );
};
