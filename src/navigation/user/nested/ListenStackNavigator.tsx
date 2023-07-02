import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderWithSearchBar } from "../../../components";
import { ListenScreen } from "../../../screens";
import type { HeaderProps } from "./ReadStackNavigator";

export const ListenStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: HeaderProps) => {
          return <HeaderWithSearchBar {...props} />;
        },
      }}
    >
      <Stack.Screen name="Home" component={ListenScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
