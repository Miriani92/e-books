import React, { useEffect } from "react";
import { ExploreScreen } from "../../../screens";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ExploreScreenContainer = () => {
  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
      marginTop: 0,
    };
  }, []);
  useEffect(() => {
    transitionValue.value = withSpring(0);
  }, []);

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <ExploreScreen />
    </Animated.View>
  );
};
