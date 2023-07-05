import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ReadScreenContainer } from "../../../features";
import { HeaderWithSearchBar } from "../../../components";

export const ReadNavigator = () => {
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
        component={ReadScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
