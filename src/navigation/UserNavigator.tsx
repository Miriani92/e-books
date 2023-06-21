import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeContainer } from "../features";

export const UserNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeContainer}></Stack.Screen>
    </Stack.Navigator>
  );
};
