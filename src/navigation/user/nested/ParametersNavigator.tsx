import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParametersContainer } from "../../../features";
import { ParametersHeader } from "../../../components";
// import { HeaderWithSearchBar } from "../../../components";

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

      //   drawerContent={(props) => <FilterContainer {...props} />}
    >
      <Drawer.Screen
        name={screenName}
        component={ParametersContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
