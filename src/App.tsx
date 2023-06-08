import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Text>Hello world</Text>
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
