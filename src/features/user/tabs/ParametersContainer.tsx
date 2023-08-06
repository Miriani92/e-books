import React, { useEffect } from "react";
import { ParametersScreen } from "../../../screens";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ParametersContainer = () => {
  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
      marginTop: 50,
    };
  }, []);

  useEffect(() => {
    transitionValue.value = withSpring(0);
  }, []);

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <ParametersScreen />
    </Animated.View>
  );
};
