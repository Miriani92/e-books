import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer, ParametersContainer } from "../../../features";
import { HeaderWithSearchBar } from "../../../components";

export const ParametersNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return <HeaderWithSearchBar {...props} />;
        },
        drawerPosition: "right",
        drawerType: "front",
      }}

      //   drawerContent={(props) => <FilterContainer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={ParametersContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
