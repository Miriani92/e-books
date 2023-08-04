import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreScreenContainer } from "../../../features/user/tabs/ExploreScreenContainer";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ExploreNavigator = () => {
  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
      marginTop: 50,
    };
  }, []);
  const Stack = createNativeStackNavigator<any>();
  useEffect(() => {
    transitionValue.value = withSpring(0);
  }, []);
  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ExploreScreenContainer} />
      </Stack.Navigator>
    </Animated.View>
  );
};
