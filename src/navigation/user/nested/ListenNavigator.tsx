import React from "react";
import { HeaderWithSearchBar } from "../../../components";
import { ListenScreenContainer } from "../../../features";
import { useAppSelector } from "../../../hooks/app/useStore";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer } from "../../../features";
import { SearchScreen } from "../../../screens";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../store/reducers/search";

export const ListenNavigator = () => {
  const screen = "ListenScreen";
  const Drawer = createDrawerNavigator();
  const dispatch = useDispatch();

  const isListenSearchActive = useAppSelector(
    (state) => state.search.isListenSearch
  );
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return (
            <HeaderWithSearchBar
              {...props}
              setActive={() => dispatch(setSearch(screen))}
              isActive={isListenSearchActive}
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
        component={isListenSearchActive ? SearchScreen : ListenScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
