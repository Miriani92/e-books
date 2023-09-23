import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer, ReadScreenContainer } from "../../../features";
import { HeaderWithSearchBar } from "../../../components";
import { SearchScreen } from "../../../screens";
import { useAppDispatch, useAppSelector } from "../../../hooks/app/useStore";
import { searchAuthor } from "../../../store/actions/search";
import { setSearch } from "../../../store/reducers/search";

export const ReadNavigator = () => {
  const screen = "ReadScreen";
  const dispatch: any = useAppDispatch();
  const isReadSearchActive = useAppSelector(
    (state) => state.search.isReadSearch
  );
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: any) => {
          return (
            <HeaderWithSearchBar
              {...props}
              setActive={() => dispatch(setSearch(screen))}
              isActive={isReadSearchActive}
              setSearchQuery={(value: string) => {
                dispatch(searchAuthor({ queryWord: value }));
              }}
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
        component={isReadSearchActive ? SearchScreen : ReadScreenContainer}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
