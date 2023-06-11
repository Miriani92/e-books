import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInContainer, SignUpContainer } from "../features";

export const GuestNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInContainer}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpContainer}></Stack.Screen>
    </Stack.Navigator>
  );
};
