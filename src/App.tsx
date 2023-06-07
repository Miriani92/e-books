import { registerRootComponent } from "expo";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-green-light">
        <Text className="text-4xl">Hello world</Text>
      </View>
    </Provider>
  );
}

registerRootComponent(App);
