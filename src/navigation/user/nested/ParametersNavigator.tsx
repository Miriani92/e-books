import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParametersContainer } from "../../../features";
import { ParametersHeader } from "../../../components";
import { NotificationsScreen } from "../../../screens";

export const ParametersNavigator = () => {
  const Drawer = createDrawerNavigator();
  const screenName = "Parameters";

  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return <ParametersHeader screenName={screenName} {...props} />;
        },
        drawerPosition: "right",
        drawerType: "front",
      }}
      drawerContent={(props) => <NotificationsScreen {...props} />}
    >
      <Drawer.Screen
        name={screenName}
        component={ParametersContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
