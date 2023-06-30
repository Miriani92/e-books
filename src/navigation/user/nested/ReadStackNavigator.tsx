import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReadScreen } from "../../../screens";
import { HomeContainer } from "../../../features";

export const ReadStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ReadScreen}></Stack.Screen>
      <Stack.Screen name="Hello" component={HomeContainer}></Stack.Screen>
    </Stack.Navigator>
  );
};
