import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./UserTabNavigator";
import { FavoritesScreen } from "../../screens";
import { CategoriesScreen } from "../../screens";

export const UserNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigator}></Stack.Screen>
      <Stack.Screen
        name="Favorite"
        options={{ headerShown: true }}
        component={FavoritesScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Categories"
        options={{ headerShown: true }}
        component={CategoriesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
