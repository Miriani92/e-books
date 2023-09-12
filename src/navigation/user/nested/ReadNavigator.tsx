import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer, ReadScreenContainer } from "../../../features";
import { HeaderWithSearchBar } from "../../../components";
import { SearchScreen } from "../../../screens";
import { useAppDispatch, useAppSelector } from "../../../hooks/app/useStore";
import { setSearch } from "../../../store/reducers/search";

export const ReadNavigator = () => {
  const screen = "ReadScreen";
  const dispatch = useAppDispatch();
  const { isReadSearch } = useAppSelector((state) => state.search);
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return (
            <HeaderWithSearchBar
              {...props}
              setActive={() => dispatch(setSearch(screen))}
              isActive={isReadSearch}
            />
          );
        },
        drawerPosition: "right",
        drawerType: "front",
      }}
      drawerContent={(props) => <FilterContainer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={isReadSearch ? SearchScreen : ReadScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
