import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./UserTabNavigator";
import {
  WeeklyBestSellersScreen,
  MyBooksScreen,
  CategoriesScreen,
  FavoritesScreen,
  NewBooksScreen,
  BookOfTheDayScreen,
} from "../../screens";

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
      <Stack.Screen
        name="BestSellers"
        options={{ headerShown: true }}
        component={WeeklyBestSellersScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="MyBooks"
        options={{ headerShown: true }}
        component={MyBooksScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="NewBooks"
        options={{ headerShown: true }}
        component={NewBooksScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="BookOfTheDay"
        options={{ headerShown: true }}
        component={BookOfTheDayScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
