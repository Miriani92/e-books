import React from "react";
import { Modal } from "react-native";
import {
  MyAccountScreen,
  MyCardsScreen,
  MyNotificationsScreen,
  MyRulesScreen,
  MyTransactionsScreen,
  ContactScreen,
} from "../../screens";

type ModalProps = {
  activeModalScreen: string;
  isModalActive: boolean;
  setModal(isActive: boolean): void;
};

export const ParametersModalContainer: React.FC<ModalProps> = ({
  activeModalScreen,
  isModalActive,
  setModal,
}) => {
  const handleClose = () => {
    setModal(false);
  };
  const handleRenderActiveSceen = () => {
    switch (activeModalScreen) {
      case "MyAccount":
        return <MyAccountScreen />;
      case "MyCards":
        return <MyCardsScreen />;
      case "MyNotifications":
        return <MyNotificationsScreen />;
      case "MyRules":
        return <MyRulesScreen />;
      case "MyTransactions":
        return <MyTransactionsScreen />;
      case "Contact":
        return <ContactScreen />;
    }
  };
  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      transparent={false}
      visible={isModalActive}
      onRequestClose={handleClose}
    >
      {handleRenderActiveSceen()}
    </Modal>
  );
};
