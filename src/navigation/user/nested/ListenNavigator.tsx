import React, { useEffect } from "react";
import { HeaderWithSearchBar } from "../../../components";
import { ListenScreenContainer } from "../../../features";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterContainer } from "../../../features";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const ListenNavigator = () => {
  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
    };
  }, []);
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    transitionValue.value = withTiming(0, { duration: 500 });
  }, []);
  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <Drawer.Navigator
        screenOptions={{
          header: (props: any) => {
            return <HeaderWithSearchBar {...props} />;
          },
          drawerPosition: "right",
          drawerType: "front",
        }}
        drawerContent={(props) => <FilterContainer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={ListenScreenContainer}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </Animated.View>
  );
};
