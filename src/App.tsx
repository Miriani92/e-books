import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorHandler } from "./screens/global/ErrorHanlder";
import { Root } from "./navigation/Root";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import { TextInput } from "react-native";

export default function App() {
  return (
    <ErrorHandler>
      <Provider store={store}>
        <PersistGate
          laoding={<TextInput>Loading...</TextInput>}
          persistor={persistor}
        >
          <StatusBar style="dark" />
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorHandler>
  );
}

registerRootComponent(App);
