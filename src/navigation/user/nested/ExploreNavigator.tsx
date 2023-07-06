import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreScreenContainer } from "../../../features/user/tabs/ExploreScreenContainer";

export const ExploreNavigator = () => {
  const Stack = createNativeStackNavigator<any>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ExploreScreenContainer} />
    </Stack.Navigator>
  );
};
