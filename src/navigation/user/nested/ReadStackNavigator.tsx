import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReadScreen } from "../../../screens";
import { HeaderWithSearchBar } from "../../../components";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import type { Route } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export type HeaderProps = {
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  options: NativeStackNavigationOptions;
  back?: { title: string };
};
export const ReadStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: HeaderProps) => {
          return <HeaderWithSearchBar {...props} />;
        },
      }}
    >
      <Stack.Screen name="Home" component={ReadScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
