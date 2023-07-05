import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer } from "../../../features";

export const FilterDrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Filter" component={FilterContainer} />
    </Drawer.Navigator>
  );
};
