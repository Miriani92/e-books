import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, SignUp } from "../screens";

export const GuestNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
    </Stack.Navigator>
  );
};
