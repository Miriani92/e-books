import React from "react";
import { HeaderLeft } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./UserTabNavigator";
import {
  WeeklyBestSellersScreen,
  MyBooksScreen,
  CategoriesScreen,
  FavoritesScreen,
  NewBooksScreen,
  BookOfTheDayScreen,
  MyAudibleBooksScreen,
  DashboardScreen,
  UserInfoScreen,
  UploadBookScreen,
} from "../../screens";

export const UserNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabNavigator}
      ></Stack.Screen>
      <Stack.Screen name="Favorite" component={FavoritesScreen}></Stack.Screen>

      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="BestSellers"
        component={WeeklyBestSellersScreen}
      ></Stack.Screen>
      <Stack.Screen name="MyBooks" component={MyBooksScreen}></Stack.Screen>
      <Stack.Screen name="NewBooks" component={NewBooksScreen}></Stack.Screen>
      <Stack.Screen
        name="BookOfTheDay"
        component={BookOfTheDayScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="MyAudibleBooks"
        component={MyAudibleBooksScreen}
      ></Stack.Screen>
      <Stack.Screen name="Dashboard" component={DashboardScreen}></Stack.Screen>
      <Stack.Screen name="UserInfo" component={UserInfoScreen}></Stack.Screen>
      <Stack.Screen
        name="UploadBook"
        component={UploadBookScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
