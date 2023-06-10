import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorHandler } from "./screens/global/ErrorHanlder";
import { Root } from "./navigation/Root";

export default function App() {
  return (
    <Provider store={store}>
      <ErrorHandler>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ErrorHandler>
    </Provider>
  );
}

registerRootComponent(App);
