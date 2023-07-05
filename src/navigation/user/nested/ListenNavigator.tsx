import React from "react";
import { HeaderWithSearchBar } from "../../../components";
import { ListenScreenContainer } from "../../../features";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const ListenNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return <HeaderWithSearchBar {...props} />;
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={ListenScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
