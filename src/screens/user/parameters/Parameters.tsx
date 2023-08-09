import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Button, InfoRow } from "../../../components";
import { UserWall } from "../../../components";
import { AdditionalInformation } from "../../../components";
import { infoRowsData } from "../../../constants/data";
import { ParametersModalContainer } from "../../../components";

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
            />
          );
        }}
      />
      <ParametersModalContainer
        activeModalScreen={activeModalScreen}
        isModalActive={isModalActive}
        setModal={setIsModalActive}
      />
      {/* <Modal
        animationType="slide"
        presentationStyle="formSheet"
        transparent={false}
        visible={true}
        onRequestClose={({ navigaton }: any) => navigation.goBack()}
      >
        <Text>hello world</Text>
      </Modal> */}

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
