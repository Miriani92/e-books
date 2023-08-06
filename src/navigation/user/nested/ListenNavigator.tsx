import React from "react";
import { HeaderWithSearchBar } from "../../../components";
import { ListenScreenContainer } from "../../../features";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer } from "../../../features";

export const ListenNavigator = () => {
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
      drawerContent={(props) => <FilterContainer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={ListenScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
